import React from "react";

export default function Services() {
    return(
        <div class="container-xxl py-5">
        <div class="container">
            <div class="text-center">
                <div class="bg-primary mb-3 mx-auto" style={{width: "60px", height: "2px"}}></div>
                <h1 class="display-5 mb-5">Our Services</h1>
            </div>
            <div class="row g-0 service-row">
                <div class="col-md-6 col-lg-3 wow fadeIn" data-wow-delay="0.1s">
                    <div class="service-item border h-100 p-5">
                        <div class="btn-square bg-light rounded-circle mb-4" style={{width: "64px", height: "64px"}}>
                            <img class="img-fluid" src="img/icon/icon-6.png" alt="Icon"/>
                        </div>
                        <h4 class="mb-3">Commercial CCTV System</h4>
                        <p class="mb-4">Stet stet justo dolor sed duo. Ut clita sea sit ipsum diam lorem</p>
                        <a class="btn" href=""><i class="fa fa-arrow-right text-white me-3"></i>Read More</a>
                    </div>
                </div>
                <div class="col-md-6 col-lg-3 wow fadeIn" data-wow-delay="0.3s">
                    <div class="service-item border h-100 p-5">
                        <div class="btn-square bg-light rounded-circle mb-4" style={{width: "64px", height: "64px"}}>
                            <img class="img-fluid" src="img/icon/icon-8.png" alt="Icon"/>
                        </div>
                        <h4 class="mb-3">Finger Print Access</h4>
                        <p class="mb-4">Stet stet justo dolor sed duo. Ut clita sea sit ipsum diam lorem</p>
                        <a class="btn" href=""><i class="fa fa-arrow-right text-white me-3"></i>Read More</a>
                    </div>
                </div>
                <div class="col-md-6 col-lg-3 wow fadeIn" data-wow-delay="0.5s">
                    <div class="service-item border h-100 p-5">
                        <div class="btn-square bg-light rounded-circle mb-4" style={{width: "64px", height: "64px"}}>
                            <img class="img-fluid" src="img/icon/icon-9.png" alt="Icon"/>
                        </div>
                        <h4 class="mb-3">Fire Detection And Safety</h4>
                        <p class="mb-4">Stet stet justo dolor sed duo. Ut clita sea sit ipsum diam lorem</p>
                        <a class="btn" href=""><i class="fa fa-arrow-right text-white me-3"></i>Read More</a>
                    </div>
                </div>
                <div class="col-md-6 col-lg-3 wow fadeIn" data-wow-delay="0.7s">
                    <div class="service-item border h-100 p-5">
                        <div class="btn-square bg-light rounded-circle mb-4" style={{width: "64px", height: "64px"}}>
                            <img class="img-fluid" src="img/icon/icon-3.png" alt="Icon"/>
                        </div>
                        <h4 class="mb-3">Smart Home Security</h4>
                        <p class="mb-4">Stet stet justo dolor sed duo. Ut clita sea sit ipsum diam lorem</p>
                        <a class="btn" href=""><i class="fa fa-arrow-right text-white me-3"></i>Read More</a>
                    </div>
                </div>
            </div>
        </div>
    </div>
    )
}