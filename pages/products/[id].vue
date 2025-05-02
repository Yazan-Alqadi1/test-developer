<template>

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

        <div v-else-if="products.length == 0" class="mt-5 d-flex justify-content-center">

            <div class="text-danger fs-3">
                No Products Yet
            </div>

        </div>

        <div v-else>

            <div class="d-flex justify-content-between flex-wrap px-4 h-100">

                <div class="card w-24per mb-4" v-for="item in products">
                    <div class="d-flex justify-content-center py-3">
                        <img :src="`${item.image}`" class="card-img-top dim" alt="...">
                    </div>
                    <div class="card-body d-flex justify-content-between flex-column">
                        <h5 class="card-title">{{ item.title }}</h5>
                        <p class="card-text">
                            {{ item.description.slice(0, 200) }}...
                        </p>

                        <div class="mt-auto">
                            <p class="card-text">
                                <span class="fs-5"> Category:</span> {{ item.category }}
                            </p>
                            <nuxt-link :to="`/product/${item.id}`" class="btn btn-primary">More details</nuxt-link>
                        </div>
                    </div>
                </div>

            </div>

        </div>


    </div>

    <MyFooter class="mt-5" />

</template>

<script setup>
const { /* variables */ axios, BASE_URL, router } = useUtils();
const { /* functions */ handelErrorType } = useHandelError();
const { id } = useRoute().params;

const products = ref([]);
const state = ref({
    loading: true,
    error: false,
    message: ""
});

onMounted(() => {

    products.value = [];
    getProducts().then(res => {
        res.forEach((ele) => {
            if (ele.category.toLowerCase() === id.toLowerCase()) {
                products.value.push(ele);
            }
        });
    }).then(() => {
        state.value.loading = false;
    })

});

async function getProducts() {

    // set state to loading
    state.value.loading = true;

    const apiUrl = `${BASE_URL}products`;

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

</script>