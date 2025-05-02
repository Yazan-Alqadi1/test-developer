<template>

    <div class="py-2 px-sm-5 d-flex justify-content-end">

        <ul class="d-flex ul-list-type-none ms-auto align-items-center fs-16px-sp">
            <li>
                <nuxt-link to="/" class="text-secondary-emphasis text-decoration-none mx-2">
                    Home
                </nuxt-link>
            </li>
            <li>
                <nuxt-link to="/about-us" class="text-secondary-emphasis text-decoration-none mx-2">
                    About Us
                </nuxt-link>
            </li>
            <li>
                <nuxt-link to="/media-center" class="text-secondary-emphasis text-decoration-none mx-2">
                    Media Center
                </nuxt-link>
            </li>
            <li>
                <nuxt-link to="/contact-us" class="text-secondary-emphasis text-decoration-none mx-2">
                    Contact Us
                </nuxt-link>
            </li>
            <li>
                <button class="text-secondary-emphasis text-decoration-none mx-2 border border-0 bg-white fw-bold">
                    Ar
                </button>
            </li>
        </ul>

    </div>

    <nav class="navbar navbar-expand-lg">
        <div class="container-fluid">

            <nuxt-link to="/">
                <img src="../assets/images/icons/DEVELOPER TEST - Logo Black.png" alt="" class="w-150px">
            </nuxt-link>

            <button class="navbar-toggler" type="button" data-bs-toggle="collapse"
                data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false"
                aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarSupportedContent">
                <!-- <ul class="navbar-nav me-auto mb-2 mb-lg-0"> -->
                <div class="navbar-nav mx-auto d-flex gap-2">
                    <nuxt-link to="/products/electronics"
                        class="text-uppercase text-secondary-emphasis text-decoration-none fw-bold">
                        Electronics
                    </nuxt-link>
                    <nuxt-link to="/products/jewelery"
                        class="text-uppercase text-secondary-emphasis text-decoration-none fw-bold">
                        Jewelery
                    </nuxt-link>
                    <nuxt-link to="/products/men's clothing"
                        class="text-uppercase text-secondary-emphasis text-decoration-none fw-bold">
                        men clothing
                    </nuxt-link>
                    <nuxt-link to="/products/women's clothing"
                        class="text-uppercase text-secondary-emphasis text-decoration-none fw-bold">
                        women clothing
                    </nuxt-link>
                </div>
                <div class="d-flex gap-2 align-items-center">

                    <form class="d-flex" role="search">
                        <input class="border border-0 bg-gray px-2 py-1" type="search" placeholder="Search"
                            aria-label="Search">
                        <button class="border border-0 bg-gray">
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
                                class="bi bi-search" viewBox="0 0 16 16">
                                <path
                                    d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001q.044.06.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1 1 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0" />
                            </svg>
                        </button>
                    </form>

                    <nuxt-link to="/sign-in">
                        <img src="../assets/images/icons/Login.png" alt="" class="w-25px">
                    </nuxt-link>

                    <nuxt-link to="/my-fav">
                        <img src="../assets/images/icons/heart_11613265.png" alt="" class="w-25px">
                    </nuxt-link>

                    <nuxt-link to="/my-cart">
                        <img src="../assets/images/icons/Cart.png" alt="" class="w-25px">
                    </nuxt-link>

                </div>
            </div>
        </div>
    </nav>

</template>