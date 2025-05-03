<template>

    <div id="carouselExampleDark" class="carousel carousel-dark slide">
        <div class="carousel-indicators position-absoulte bottom--40px">
            <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="0" class="active"
                aria-current="true" aria-label="Slide 1"></button>
            <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="1"
                aria-label="Slide 2"></button>
            <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="2"
                aria-label="Slide 3"></button>
        </div>
        <div class="carousel-inner">
            <div class="carousel-item active position-relative" data-bs-interval="2000">
                <img src="../assets/images/Header.jpg" class="d-block w-100" alt="...">
                <div class="position-absolute position-cus">
                    <div class="d-none d-md-block">
                        <div class="fs-customize text-uppercase fw-bold mb-3"> sale </div>
                        <div class="fs-4 text-uppercase">
                            access a limited selection
                        </div>
                        <div class="fs-4 text-uppercase mb-5">
                            with up to 70% off
                        </div>
                    </div>
                    <nuxt-link to="/products/electronics" class="d-block position-relative border border-0">
                        <img src="../assets/images/icons/Bottun.png" class="w-slide-show-cus">
                        <div class="position-absolute text-uppercase button-carousel">shop now</div>
                    </nuxt-link>
                </div>
            </div>
            <div class="carousel-item active position-relative" data-bs-interval="2000">
                <img src="../assets/images/Header.jpg" class="d-block w-100" alt="...">
                <div class="position-absolute position-cus">
                    <div class="d-none d-md-block">
                        <div class="fs-customize text-uppercase fw-bold mb-3"> sale </div>
                        <div class="fs-4 text-uppercase">
                            access a limited selection
                        </div>
                        <div class="fs-4 text-uppercase mb-5">
                            with up to 70% off
                        </div>
                    </div>
                    <nuxt-link to="/products/electronics" class="d-block position-relative border border-0">
                        <img src="../assets/images/icons/Bottun.png" class="w-slide-show-cus">
                        <div class="position-absolute text-uppercase button-carousel">shop now</div>
                    </nuxt-link>
                </div>
            </div>
            <div class="carousel-item active position-relative" data-bs-interval="2000">
                <img src="../assets/images/Header.jpg" class="d-block w-100" alt="...">
                <div class="position-absolute position-cus">
                    <div class="d-none d-md-block">
                        <div class="fs-customize text-uppercase fw-bold mb-3"> sale </div>
                        <div class="fs-4 text-uppercase">
                            access a limited selection
                        </div>
                        <div class="fs-4 text-uppercase mb-5">
                            with up to 70% off
                        </div>
                    </div>
                    <nuxt-link to="/products/electronics" class="d-block position-relative border border-0">
                        <img src="../assets/images/icons/Bottun.png" class="w-slide-show-cus">
                        <div class="position-absolute text-uppercase button-carousel">shop now</div>
                    </nuxt-link>
                </div>
            </div>
        </div>
    </div>

</template>