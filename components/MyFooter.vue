<template>

    <div class="bg-black px-4 pt-5 pb-3">

        <div class="d-lg-flex">

            <div class="d-flex flex-column align-items-center">
                <img src="../assets/images/icons/DEVELOPER TEST - Logo.png" class="w-300px" alt="">

                <div class="d-flex gap-3">
                    <a href="https://www.facebook.com/" target="_blank">
                        <img src="../assets/images/icons/facebook_Gold.png" class="w-35px" alt="">
                    </a>
                    <a href="https://www.youtube.com/" target="_blank">
                        <img src="../assets/images/icons/Youtube - Gold.png" class="w-35px" alt="">
                    </a>
                    <a href="https://www.instagram.com/" target="_blank">
                        <img src="../assets/images/icons/instagram_Gold.png" class="w-35px" alt="">
                    </a>
                    <a href="https://www.x.com/" target="_blank">
                        <img src="../assets/images/icons/Twitter - Gold.png" class="w-35px" alt="">
                    </a>
                </div>

            </div>

            <div class="mx-auto">

                <div class="d-flex flex-column pt-5 gap-3">
                    <nuxt-link to="/" class="text-white text-decoration-none fs-3"> Home </nuxt-link>
                    <nuxt-link to="/about-us" class="text-white text-decoration-none fs-3"> About Us </nuxt-link>
                    <nuxt-link to="/media-center" class="text-white text-decoration-none fs-3"> Media center
                    </nuxt-link>
                    <nuxt-link to="/contact-us" class="text-white text-decoration-none fs-3"> Contact Us </nuxt-link>
                </div>

            </div>

            <div class="mx-auto">

                <div class="d-flex flex-column pt-5 gap-3">
                    <nuxt-link to="/products/electronics" class="text-white text-decoration-none fs-3">
                        Electronics
                    </nuxt-link>
                    <nuxt-link to="/products/jewelery" class="text-white text-decoration-none fs-3">
                        Jewelry
                    </nuxt-link>
                    <nuxt-link to="/products/men's clothing" class="text-white text-decoration-none fs-3">
                        Men Clothing
                    </nuxt-link>
                    <nuxt-link to="/products/women's clothing" class="text-white text-decoration-none fs-3">
                        Women Clothing
                    </nuxt-link>
                </div>

            </div>

            <div class="mx-auto">

                <div class="d-flex flex-column pt-5 gap-3">
                    <div class="text-white text-decoration-none fs-1"> Contact us </div>
                    <a href="tel:+971 00 000 0000" class="text-white text-decoration-none fs-3"> +971 00 000 0000 </a>
                    <a href="tel:+971 0 000 0000" class="text-white text-decoration-none fs-3"> +971 0 000 0000 </a>
                    <a href="mailto:info@sample.com" class="text-white text-decoration-none fs-3"> info@sample.com </a>
                </div>

            </div>

        </div>

        <div>

            <div class="d-flex justify-content-center border-top border-1 mt-4 py-2">

                <div class="text-white fs-4">
                    © Developer Test 2024. All Rights Reseved.
                </div>

            </div>
        </div>

    </div>

</template>