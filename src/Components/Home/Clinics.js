import React from 'react'
import Slider from 'react-slick'

function Clinics() {
    const settings = {
        arrows: false,
        dots: false,
        pauseOnHover: false,
        infinite: true,
        speed: 2000,
        autoplay: true,
        autoplaySpeed: 0,
        cssEase: 'linear', 
        variableWidth: true,
        slidesToShow: 4,
        slidesToScroll: 1,
    };
    return (
        <div>
            {/* Clinic and Specialities */}
            <section className="section section-specialities">
                <div className="container-fluid">
                    <div className="section-header text-center">
                        <h2>Search By Categories</h2>
                        <p className="sub-title">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                    </div>
                    <div className="row justify-content-center">
                        <div className="col-md-9">
                            {/* Slider */}

                            <div className="specialities-slider slider">
                                {/* Slider Item */}
                                <Slider {...settings}>
                                    <div className="speicality-item text-center">
                                        <div className="speicality-img">
                                            <img src="assets/img/specialities/specialities-01.png" className="img-fluid" alt="Speciality" />
                                            <span><i className="fa fa-circle" aria-hidden="true" /></span>
                                        </div>
                                        <p>Urology</p>
                                    </div>
                                    {/* /Slider Item */}
                                    {/* Slider Item */}
                                    <div className="speicality-item text-center">
                                        <div className="speicality-img">
                                            <img src="assets/img/specialities/specialities-02.png" className="img-fluid" alt="Speciality" />
                                            <span><i className="fa fa-circle" aria-hidden="true" /></span>
                                        </div>
                                        <p>Neurology</p>
                                    </div>
                                    {/* /Slider Item */}
                                    {/* Slider Item */}
                                    <div className="speicality-item text-center">
                                        <div className="speicality-img">
                                            <img src="assets/img/specialities/specialities-03.png" className="img-fluid" alt="Speciality" />
                                            <span><i className="fa fa-circle" aria-hidden="true" /></span>
                                        </div>
                                        <p>Orthopedic</p>
                                    </div>
                                    {/* /Slider Item */}
                                    {/* Slider Item */}
                                    <div className="speicality-item text-center">
                                        <div className="speicality-img">
                                            <img src="assets/img/specialities/specialities-04.png" className="img-fluid" alt="Speciality" />
                                            <span><i className="fa fa-circle" aria-hidden="true" /></span>
                                        </div>
                                        <p>Cardiologist</p>
                                    </div>
                                    {/* /Slider Item */}
                                    {/* Slider Item */}
                                    <div className="speicality-item text-center">
                                        <div className="speicality-img">
                                            <img src="assets/img/specialities/specialities-05.png" className="img-fluid" alt="Speciality" />
                                            <span><i className="fa fa-circle" aria-hidden="true" /></span>
                                        </div>
                                        <p>Dentist</p>
                                    </div>

                                    {/* /Slider Item */}
                                </Slider>
                            </div>

                            {/* /Slider */}
                        </div>
                    </div>
                </div>
            </section>
            {/* Clinic and Specialities */}
        </div>
    )
}

export default Clinics