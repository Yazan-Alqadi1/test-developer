<template>

    <div v-if="addToCartState.succ"
        class="alert alert-success position-fixed top-0 w-100 d-flex justify-content-between" role="alert">
        <div>product added to cart successfuly</div>
        <div>
            <button @click="addToCartState.succ = false" class="border border-0 rounded">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-x-lg"
                    viewBox="0 0 16 16">
                    <path
                        d="M2.146 2.854a.5.5 0 1 1 .708-.708L8 7.293l5.146-5.147a.5.5 0 0 1 .708.708L8.707 8l5.147 5.146a.5.5 0 0 1-.708.708L8 8.707l-5.146 5.147a.5.5 0 0 1-.708-.708L7.293 8z" />
                </svg>
            </button>
        </div>
    </div>

    <div class="min-h-full">

        <navbar></navbar>

        <div v-if="state.loading" class="mt-5 d-flex justify-content-center">

            <div>
                <LoadingIcon />
            </div>

        </div>

        <div v-else-if="state.error" class="mt-5 d-flex justify-content-center">

            <div class="text-danger fs-3">
                {{ state.message }}
            </div>

        </div>

        <div v-else-if="!product?.id" class="mt-5 d-flex justify-content-center">

            <div class="text-danger fs-3">
                Product Not Found
            </div>

        </div>

        <div v-else>

            <div>
                <!-- title -->
                <div class="ps-4 fs-2 mb-5"> {{ product.title }} </div>

                <div class="d-md-flex justify-content-between">

                    <div class="w-45pre d-flex justify-content-center">
                        <img :src="product.image" alt="" class="w-50">
                    </div>

                    <div class="w-45pre px-3 pt-5 px-md-1 pt-md-0">
                        <div class="">
                            <!-- Category -->
                            <span class="me-2 fs-3">Category:</span>
                            <span class="fs-5 text-success-emphasis">{{ product.category }}</span>
                        </div>
                        <div class="">
                            <!-- Price -->
                            <span class="me-2 fs-3">Price:</span>
                            <span class="fs-5 text-success-emphasis">{{ product.price }}</span>
                        </div>
                        <div class="">
                            <!-- Description -->
                            <span class="me-2 fs-3">Description:</span>
                            <span class="fs-5 text-success-emphasis">{{ product.description }}</span>
                        </div>
                        <div class="mb-2">
                            <!-- Rate -->
                            <span class="me-2 fs-3">Rate:</span>
                            <span class="fs-5 text-success-emphasis">{{ product.rating.rate }}
                                ({{ product.rating.count }} <span title="vote">v</span>)</span>
                        </div>
                        <div class="">
                            <!-- Rate -->
                            <button type="button" class="btn btn-primary" @click="addToCart">
                                <span v-if="addToCartState.loading"> Adding... </span>
                                <span v-else>Add to cart</span>
                            </button>
                        </div>

                    </div>

                </div>

            </div>

        </div>


    </div>

    <MyFooter class="mt-5" />

</template>

<script setup>
const { /* variables */ axios, BASE_URL, router, store } = useUtils();
const { /* functions */ handelErrorType } = useHandelError();
const { id } = useRoute().params;

const myCart = ref(store.getCart);
const product = ref({});
const state = ref({
    loading: true,
    error: false,
    message: ""
});

onMounted(() => {

    if (myCart.value == null)
        myCart.value = [];

    getProduct().then(res => {
        product.value = res;
    }).then(() => {
        state.value.loading = false;
    })

});

async function getProduct() {

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

const addToCartState = ref({
    loading: false,
    succ: false,
})

function addToCart() {

    addToCartState.value.loading = true;
    addToCartState.value.succ = false;

    const item = {
        id: id,
        count: 1
    }
    console.log("item");
    console.log(item);
    console.log(myCart.value);
    if (myCart.value == null) {
        console.log("herererererererer");
        myCart.value.push(item);
        store.updateCart(myCart.value);
    }
    else {
        let newCart = [];
        let founded = false;
        myCart.value.forEach((ele) => {
            if (ele.id == id) {
                newCart.push(item);
                founded = true;
            }
            else
                newCart.push(ele);
        });
        if (!founded)
            newCart.push(item);

        store.updateCart(newCart);
    }

    setTimeout(() => {
        addToCartState.value.loading = false;
        addToCartState.value.succ = true;
        setTimeout(() => {
            addToCartState.value.succ = false;
        }, 2000);
    }, 1000);

}

</script>