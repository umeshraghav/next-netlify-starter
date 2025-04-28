function Contact() {
  return (
    <div>
      <div class="container-fluid bg-light overflow-hidden my-5 px-lg-0">
        <div class="container quote px-lg-0">
            <div class="row g-0 mx-lg-0">
                <div class="col-lg-6 ps-lg-0" style={{minHeight: "400px"}}>
                    <div class="position-relative h-100">
                        <img class="position-absolute img-fluid w-100 h-100" src="img/quote.jpg" style={{objectFit:'cover'}} alt=""/>
                    </div>
                </div>
                <div class="col-lg-6 quote-text py-5 wow fadeIn" data-wow-delay="0.5s">
                    <div class="p-lg-5 pe-lg-0">
                        <div class="bg-primary mb-3" style={{width: "60px", height: "2px"}}></div>
                        <h1 class="display-5 mb-5">Free Quote</h1>
                        <p class="mb-4 pb-2">Tempor erat elitr rebum at clita. Diam dolor diam ipsum sit. Aliqu diam amet diam et eos. Clita erat ipsum et lorem et sit, sed stet lorem sit clita duo justo erat amet</p>
                        <form>
                            <div class="row g-3">
                                <div class="col-12 col-sm-6">
                                    <input type="text" class="form-control border-0" placeholder="Your Name" style={{height: "55px"}}/>
                                </div>
                                <div class="col-12 col-sm-6">
                                    <input type="email" class="form-control border-0" placeholder="Your Email" style={{height: "55px"}}/>
                                </div>
                                <div class="col-12 col-sm-6">
                                    <input type="text" class="form-control border-0" placeholder="Your Mobile" style={{height: "55px"}}/>
                                </div>
                                <div class="col-12 col-sm-6">
                                    <select class="form-select border-0" style={{height: "55px"}}>
                                        <option selected>Select A Service</option>
                                        <option value="1">Service 1</option>
                                        <option value="2">Service 2</option>
                                        <option value="3">Service 3</option>
                                    </select>
                                </div>
                                <div class="col-12">
                                    <textarea class="form-control border-0" placeholder="Special Note"></textarea>
                                </div>
                                <div class="col-12">
                                    <button class="btn btn-primary w-100 py-3" type="submit">Get A Free Quote</button>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </div>
    </div>
  );
}   
export default Contact;