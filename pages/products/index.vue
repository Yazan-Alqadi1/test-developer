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

        <div v-else>

            <div class="d-flex justify-content-between flex-wrap px-4">

                <div class="card w-24per mb-4" v-for="item in products">
                    <div class="d-flex justify-content-center py-3">
                        <img :src="`${item.image}`" class="card-img-top dim" alt="...">
                    </div>
                    <div class="card-body">
                        <h5 class="card-title">{{ item.title }}</h5>
                        <p class="card-text">
                            {{ item.description.slice(0, 200) }}...
                        </p>

                        <p class="card-text">
                            <span class="fs-5"> Category:</span> {{ item.category }}
                        </p>
                        <nuxt-link :to="`/product/${item.id}`" class="btn btn-primary">More details</nuxt-link>
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

const products = ref([]);
const state = ref({
    loading: true,
    error: false,
    message: ""
});

onMounted(() => {

    getProducts().then(res => {
        products.value = res;
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