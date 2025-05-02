<template>

    <div class="min-h-full">

        <navbar></navbar>

        <div v-if="state.loading" class="mt-5 d-flex justify-content-center">

            <div>
                <LoadingIcon />
            </div>

        </div>

        <div v-else-if="empty" class="mt-5 d-flex justify-content-center">
            <div class="text-danger fs-3">
                No Products Added To Cart Yet
            </div>
        </div>

        <div v-else>

            <table class="table">
                <thead>
                    <tr>
                        <th scope="col">#</th>
                        <th scope="col">Name</th>
                        <th scope="col">Price</th>
                        <th scope="col">Quantity</th>
                        <th scope="col">Acrions</th>
                    </tr>
                </thead>
                <tbody>
                    <tr v-for="(item, idx) in products">
                        <th scope="row">{{ idx + 1 }}</th>
                        <td>
                            <nuxt-link :to="`/product/${item.id}`" class="text-decoration-none text-black">
                                {{ item.title }}
                            </nuxt-link>
                        </td>
                        <td> {{ item.price * item.count }} </td>
                        <td>
                            <div class="d-flex gap-1">
                                <div>
                                    <button @click="inc(item)" type="button" class="btn btn-primary p-0 px-1">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16"
                                            fill="currentColor" class="bi bi-plus" viewBox="0 0 16 16">
                                            <path
                                                d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4" />
                                        </svg>
                                    </button>
                                </div>
                                <div>{{ item.count }}</div>
                                <div>
                                    <button @click="dec(item)" type="button" class="btn btn-primary p-0 px-1">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16"
                                            fill="currentColor" class="bi bi-dash" viewBox="0 0 16 16">
                                            <path d="M4 8a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 0 1h-7A.5.5 0 0 1 4 8" />
                                        </svg>
                                    </button>
                                </div>
                            </div>
                        </td>
                        <td>
                            <div>
                                <button @click="remove(item)" type="button" class="btn  p-0 px-1">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
                                        class="bi bi-trash3 text-danger" viewBox="0 0 16 16">
                                        <path
                                            d="M6.5 1h3a.5.5 0 0 1 .5.5v1H6v-1a.5.5 0 0 1 .5-.5M11 2.5v-1A1.5 1.5 0 0 0 9.5 0h-3A1.5 1.5 0 0 0 5 1.5v1H1.5a.5.5 0 0 0 0 1h.538l.853 10.66A2 2 0 0 0 4.885 16h6.23a2 2 0 0 0 1.994-1.84l.853-10.66h.538a.5.5 0 0 0 0-1zm1.958 1-.846 10.58a1 1 0 0 1-.997.92h-6.23a1 1 0 0 1-.997-.92L3.042 3.5zm-7.487 1a.5.5 0 0 1 .528.47l.5 8.5a.5.5 0 0 1-.998.06L5 5.03a.5.5 0 0 1 .47-.53Zm5.058 0a.5.5 0 0 1 .47.53l-.5 8.5a.5.5 0 1 1-.998-.06l.5-8.5a.5.5 0 0 1 .528-.47M8 4.5a.5.5 0 0 1 .5.5v8.5a.5.5 0 0 1-1 0V5a.5.5 0 0 1 .5-.5" />
                                    </svg>
                                </button>
                            </div>
                        </td>
                    </tr>
                </tbody>
            </table>

        </div>

    </div>

    <MyFooter />

</template>

<script setup>
const { /* variables */ axios, BASE_URL, router, store } = useUtils();
const { /* functions */ handelErrorType } = useHandelError();

const myCart = ref(store.getCart);
const products = ref([]);
const empty = ref(true);
const state = ref({
    loading: false,
    error: false,
    message: ''
});

onMounted(() => {
    console.log(store.getCart);
    if (myCart.value == null)
        empty.value = true;
    else
        empty.value = false;

    if (!empty.value) {
        myCart.value.forEach((ele) => {
            getProduct(ele.id).then(res => {
                res.count = ele.count;
                products.value.push(res);
            }).then(() => {
                state.value.loading = false;
            });
        });
        console.log("here")
        console.log(myCart.value)
    }

});


async function getProduct(id) {

    // set state to loading
    state.value.loading = true;

    const apiUrl = `${BASE_URL}products/${id}`;

    try {
        const response = await axios.get(apiUrl);

        return response.data;
    }
    catch (error) {
        state.value.loading = false;
        state.value.error = true;

        const errorMessage = handelErrorType(error);
        state.value.message = errorMessage;
        // console.log(errorMessage);
    }

}

function inc(item) {
    let newCart = [];
    myCart.value.forEach((ele) => {
        if (ele.id == item.id)
            ele.count += 1;
        // console.log(ele);
        newCart.push(ele);

    });
    products.value.forEach((ele) => {
        if (ele.id == item.id)
            ele.count += 1;
    });
    // console.log(newCart);
    // console.log(myCart.value);
    // store.updateCart(myCart.value);
    // console.log(newCart);
    updateCart();
}

function dec(item) {
    let newCart = [];
    myCart.value.forEach((ele) => {
        if (ele.id == item.id) {
            if (ele.count != 1)
                ele.count -= 1;
        }
        // console.log(ele);
        newCart.push(ele);

    });
    products.value.forEach((ele) => {
        if (ele.id == item.id)
            if (ele.count != 1)
                ele.count -= 1;
    });
    // console.log(newCart);
    // console.log(myCart.value);
    // store.updateCart(myCart.value);
    // console.log(newCart);
    updateCart();
}

function remove(item) {
    let newCart = [];
    myCart.value.forEach((ele) => {
        if (ele.id != item.id) {
            newCart.push(ele);
        }

    });
    products.value = products.value.filter(ele => ele.id != item.id);
    store.updateCart(newCart);
}

function updateCart() {
    let newCart = [];
    products.value.forEach((ele) => {
        newCart.push({
            id: ele.id,
            count: ele.count
        })
    });

    // store.updateCart(newCart);
}

</script>