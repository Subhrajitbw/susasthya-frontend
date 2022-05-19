import React from 'react'
import Slider from 'react-slick'

function Popular() {
    const settings2 = {
        arrows: true,
        dots: false,
        pauseOnHover: false,
        infinite: true,
        speed: 1000,
        autoplay: false,
        autoplaySpeed: 0,
        variableWidth: true,
        slidesToShow: 1,
        centerMode: false,
        slidesToScroll: 1,
    };
    return (
        <div>
            {/* Popular Section */}
            <section className="section section-doctor">
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-lg-4">
                            <div className="section-header ">
                                <h2>Read The latest Blogs</h2>
                                <p>Lorem Ipsum is simply dummy text </p>
                            </div>
                            <div className="about-content">
                                <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum.</p>
                                <p>web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes</p>
                                <a href="javascript:;">Read More..</a>
                            </div>
                        </div>
                        <div className="col-lg-8">
                            <div className="doctor-slider slider">
                                {/* Doctor Widget */}
                                <Slider {...settings2}>
                                    <div className="profile-widget">
                                        <div className="doc-img">
                                            <a href="doctor-profile.html">
                                                <img className="img-fluid" alt="User Image" src="assets/img/doctors/doctor-01.jpg" />
                                            </a>
                                            <a href="javascript:void(0)" className="fav-btn">
                                                <i className="far fa-bookmark" />
                                            </a>
                                        </div>
                                        <div className="pro-content">
                                            <h3 className="title">
                                                <a href="doctor-profile.html">Ruby Perrin</a>
                                                <i className="fas fa-check-circle verified" />
                                            </h3>
                                            <p className="speciality">MDS - Periodontology and Oral Implantology, BDS</p>
                                            <div className="rating">
                                                <i className="fas fa-star filled" />
                                                <i className="fas fa-star filled" />
                                                <i className="fas fa-star filled" />
                                                <i className="fas fa-star filled" />
                                                <i className="fas fa-star filled" />
                                                <span className="d-inline-block average-rating">(17)</span>
                                            </div>
                                            <ul className="available-info">
                                                <li>
                                                    <i className="fas fa-map-marker-alt" /> Florida, USA
                                                </li>
                                                <li>
                                                    <i className="far fa-clock" /> Available on Fri, 22 Mar
                                                </li>
                                                <li>
                                                    <i className="far fa-money-bill-alt" /> $300 - $1000
                                                    <i className="fas fa-info-circle" data-toggle="tooltip" title="Lorem Ipsum" />
                                                </li>
                                            </ul>
                                            <div className="row row-sm">
                                                <div className="col-6">
                                                    <a href="doctor-profile.html" className="btn view-btn">View Profile</a>
                                                </div>
                                                <div className="col-6">
                                                    <a href="booking.html" className="btn book-btn">Book Now</a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    {/* /Doctor Widget */}
                                    {/* Doctor Widget */}
                                    <div className="profile-widget">
                                        <div className="doc-img">
                                            <a href="doctor-profile.html">
                                                <img className="img-fluid" alt="User Image" src="assets/img/doctors/doctor-02.jpg" />
                                            </a>
                                            <a href="javascript:void(0)" className="fav-btn">
                                                <i className="far fa-bookmark" />
                                            </a>
                                        </div>
                                        <div className="pro-content">
                                            <h3 className="title">
                                                <a href="doctor-profile.html">Darren Elder</a>
                                                <i className="fas fa-check-circle verified" />
                                            </h3>
                                            <p className="speciality">BDS, MDS - Oral &amp; Maxillofacial Surgery</p>
                                            <div className="rating">
                                                <i className="fas fa-star filled" />
                                                <i className="fas fa-star filled" />
                                                <i className="fas fa-star filled" />
                                                <i className="fas fa-star filled" />
                                                <i className="fas fa-star" />
                                                <span className="d-inline-block average-rating">(35)</span>
                                            </div>
                                            <ul className="available-info">
                                                <li>
                                                    <i className="fas fa-map-marker-alt" /> Newyork, USA
                                                </li>
                                                <li>
                                                    <i className="far fa-clock" /> Available on Fri, 22 Mar
                                                </li>
                                                <li>
                                                    <i className="far fa-money-bill-alt" /> $50 - $300
                                                    <i className="fas fa-info-circle" data-toggle="tooltip" title="Lorem Ipsum" />
                                                </li>
                                            </ul>
                                            <div className="row row-sm">
                                                <div className="col-6">
                                                    <a href="doctor-profile.html" className="btn view-btn">View Profile</a>
                                                </div>
                                                <div className="col-6">
                                                    <a href="booking.html" className="btn book-btn">Book Now</a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    {/* /Doctor Widget */}
                                    {/* Doctor Widget */}
                                    <div className="profile-widget">
                                        <div className="doc-img">
                                            <a href="doctor-profile.html">
                                                <img className="img-fluid" alt="User Image" src="assets/img/doctors/doctor-03.jpg" />
                                            </a>
                                            <a href="javascript:void(0)" className="fav-btn">
                                                <i className="far fa-bookmark" />
                                            </a>
                                        </div>
                                        <div className="pro-content">
                                            <h3 className="title">
                                                <a href="doctor-profile.html">Deborah Angel</a>
                                                <i className="fas fa-check-circle verified" />
                                            </h3>
                                            <p className="speciality">MBBS, MD - General Medicine, DNB - Cardiology</p>
                                            <div className="rating">
                                                <i className="fas fa-star filled" />
                                                <i className="fas fa-star filled" />
                                                <i className="fas fa-star filled" />
                                                <i className="fas fa-star filled" />
                                                <i className="fas fa-star" />
                                                <span className="d-inline-block average-rating">(27)</span>
                                            </div>
                                            <ul className="available-info">
                                                <li>
                                                    <i className="fas fa-map-marker-alt" /> Georgia, USA
                                                </li>
                                                <li>
                                                    <i className="far fa-clock" /> Available on Fri, 22 Mar
                                                </li>
                                                <li>
                                                    <i className="far fa-money-bill-alt" /> $100 - $400
                                                    <i className="fas fa-info-circle" data-toggle="tooltip" title="Lorem Ipsum" />
                                                </li>
                                            </ul>
                                            <div className="row row-sm">
                                                <div className="col-6">
                                                    <a href="doctor-profile.html" className="btn view-btn">View Profile</a>
                                                </div>
                                                <div className="col-6">
                                                    <a href="booking.html" className="btn book-btn">Book Now</a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    {/* /Doctor Widget */}
                                    {/* Doctor Widget */}
                                    <div className="profile-widget">
                                        <div className="doc-img">
                                            <a href="doctor-profile.html">
                                                <img className="img-fluid" alt="User Image" src="assets/img/doctors/doctor-04.jpg" />
                                            </a>
                                            <a href="javascript:void(0)" className="fav-btn">
                                                <i className="far fa-bookmark" />
                                            </a>
                                        </div>
                                        <div className="pro-content">
                                            <h3 className="title">
                                                <a href="doctor-profile.html">Sofia Brient</a>
                                                <i className="fas fa-check-circle verified" />
                                            </h3>
                                            <p className="speciality">MBBS, MS - General Surgery, MCh - Urology</p>
                                            <div className="rating">
                                                <i className="fas fa-star filled" />
                                                <i className="fas fa-star filled" />
                                                <i className="fas fa-star filled" />
                                                <i className="fas fa-star filled" />
                                                <i className="fas fa-star" />
                                                <span className="d-inline-block average-rating">(4)</span>
                                            </div>
                                            <ul className="available-info">
                                                <li>
                                                    <i className="fas fa-map-marker-alt" /> Louisiana, USA
                                                </li>
                                                <li>
                                                    <i className="far fa-clock" /> Available on Fri, 22 Mar
                                                </li>
                                                <li>
                                                    <i className="far fa-money-bill-alt" /> $150 - $250
                                                    <i className="fas fa-info-circle" data-toggle="tooltip" title="Lorem Ipsum" />
                                                </li>
                                            </ul>
                                            <div className="row row-sm">
                                                <div className="col-6">
                                                    <a href="doctor-profile.html" className="btn view-btn">View Profile</a>
                                                </div>
                                                <div className="col-6">
                                                    <a href="booking.html" className="btn book-btn">Book Now</a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    {/* /Doctor Widget */}
                                    {/* Doctor Widget */}
                                    <div className="profile-widget">
                                        <div className="doc-img">
                                            <a href="doctor-profile.html">
                                                <img className="img-fluid" alt="User Image" src="assets/img/doctors/doctor-05.jpg" />
                                            </a>
                                            <a href="javascript:void(0)" className="fav-btn">
                                                <i className="far fa-bookmark" />
                                            </a>
                                        </div>
                                        <div className="pro-content">
                                            <h3 className="title">
                                                <a href="doctor-profile.html">Marvin Campbell</a>
                                                <i className="fas fa-check-circle verified" />
                                            </h3>
                                            <p className="speciality">MBBS, MD - Ophthalmology, DNB - Ophthalmology</p>
                                            <div className="rating">
                                                <i className="fas fa-star filled" />
                                                <i className="fas fa-star filled" />
                                                <i className="fas fa-star filled" />
                                                <i className="fas fa-star filled" />
                                                <i className="fas fa-star" />
                                                <span className="d-inline-block average-rating">(66)</span>
                                            </div>
                                            <ul className="available-info">
                                                <li>
                                                    <i className="fas fa-map-marker-alt" /> Michigan, USA
                                                </li>
                                                <li>
                                                    <i className="far fa-clock" /> Available on Fri, 22 Mar
                                                </li>
                                                <li>
                                                    <i className="far fa-money-bill-alt" /> $50 - $700
                                                    <i className="fas fa-info-circle" data-toggle="tooltip" title="Lorem Ipsum" />
                                                </li>
                                            </ul>
                                            <div className="row row-sm">
                                                <div className="col-6">
                                                    <a href="doctor-profile.html" className="btn view-btn">View Profile</a>
                                                </div>
                                                <div className="col-6">
                                                    <a href="booking.html" className="btn book-btn">Book Now</a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    {/* /Doctor Widget */}
                                    {/* Doctor Widget */}
                                    <div className="profile-widget">
                                        <div className="doc-img">
                                            <a href="doctor-profile.html">
                                                <img className="img-fluid" alt="User Image" src="assets/img/doctors/doctor-06.jpg" />
                                            </a>
                                            <a href="javascript:void(0)" className="fav-btn">
                                                <i className="far fa-bookmark" />
                                            </a>
                                        </div>
                                        <div className="pro-content">
                                            <h3 className="title">
                                                <a href="doctor-profile.html">Katharine Berthold</a>
                                                <i className="fas fa-check-circle verified" />
                                            </h3>
                                            <p className="speciality">MS - Orthopaedics, MBBS, M.Ch - Orthopaedics</p>
                                            <div className="rating">
                                                <i className="fas fa-star filled" />
                                                <i className="fas fa-star filled" />
                                                <i className="fas fa-star filled" />
                                                <i className="fas fa-star filled" />
                                                <i className="fas fa-star" />
                                                <span className="d-inline-block average-rating">(52)</span>
                                            </div>
                                            <ul className="available-info">
                                                <li>
                                                    <i className="fas fa-map-marker-alt" /> Texas, USA
                                                </li>
                                                <li>
                                                    <i className="far fa-clock" /> Available on Fri, 22 Mar
                                                </li>
                                                <li>
                                                    <i className="far fa-money-bill-alt" /> $100 - $500
                                                    <i className="fas fa-info-circle" data-toggle="tooltip" title="Lorem Ipsum" />
                                                </li>
                                            </ul>
                                            <div className="row row-sm">
                                                <div className="col-6">
                                                    <a href="doctor-profile.html" className="btn view-btn">View Profile</a>
                                                </div>
                                                <div className="col-6">
                                                    <a href="booking.html" className="btn book-btn">Book Now</a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    {/* /Doctor Widget */}
                                    {/* Doctor Widget */}
                                    <div className="profile-widget">
                                        <div className="doc-img">
                                            <a href="doctor-profile.html">
                                                <img className="img-fluid" alt="User Image" src="assets/img/doctors/doctor-07.jpg" />
                                            </a>
                                            <a href="javascript:void(0)" className="fav-btn">
                                                <i className="far fa-bookmark" />
                                            </a>
                                        </div>
                                        <div className="pro-content">
                                            <h3 className="title">
                                                <a href="doctor-profile.html">Linda Tobin</a>
                                                <i className="fas fa-check-circle verified" />
                                            </h3>
                                            <p className="speciality">MBBS, MD - General Medicine, DM - Neurology</p>
                                            <div className="rating">
                                                <i className="fas fa-star filled" />
                                                <i className="fas fa-star filled" />
                                                <i className="fas fa-star filled" />
                                                <i className="fas fa-star filled" />
                                                <i className="fas fa-star" />
                                                <span className="d-inline-block average-rating">(43)</span>
                                            </div>
                                            <ul className="available-info">
                                                <li>
                                                    <i className="fas fa-map-marker-alt" /> Kansas, USA
                                                </li>
                                                <li>
                                                    <i className="far fa-clock" /> Available on Fri, 22 Mar
                                                </li>
                                                <li>
                                                    <i className="far fa-money-bill-alt" /> $100 - $1000
                                                    <i className="fas fa-info-circle" data-toggle="tooltip" title="Lorem Ipsum" />
                                                </li>
                                            </ul>
                                            <div className="row row-sm">
                                                <div className="col-6">
                                                    <a href="doctor-profile.html" className="btn view-btn">View Profile</a>
                                                </div>
                                                <div className="col-6">
                                                    <a href="booking.html" className="btn book-btn">Book Now</a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    {/* /Doctor Widget */}
                                    {/* Doctor Widget */}
                                    <div className="profile-widget">
                                        <div className="doc-img">
                                            <a href="doctor-profile.html">
                                                <img className="img-fluid" alt="User Image" src="assets/img/doctors/doctor-08.jpg" />
                                            </a>
                                            <a href="javascript:void(0)" className="fav-btn">
                                                <i className="far fa-bookmark" />
                                            </a>
                                        </div>
                                        <div className="pro-content">
                                            <h3 className="title">
                                                <a href="doctor-profile.html">Paul Richard</a>
                                                <i className="fas fa-check-circle verified" />
                                            </h3>
                                            <p className="speciality">MBBS, MD - Dermatology , Venereology &amp; Lepros</p>
                                            <div className="rating">
                                                <i className="fas fa-star filled" />
                                                <i className="fas fa-star filled" />
                                                <i className="fas fa-star filled" />
                                                <i className="fas fa-star filled" />
                                                <i className="fas fa-star" />
                                                <span className="d-inline-block average-rating">(49)</span>
                                            </div>
                                            <ul className="available-info">
                                                <li>
                                                    <i className="fas fa-map-marker-alt" /> California, USA
                                                </li>
                                                <li>
                                                    <i className="far fa-clock" /> Available on Fri, 22 Mar
                                                </li>
                                                <li>
                                                    <i className="far fa-money-bill-alt" /> $100 - $400
                                                    <i className="fas fa-info-circle" data-toggle="tooltip" title="Lorem Ipsum" />
                                                </li>
                                            </ul>
                                            <div className="row row-sm">
                                                <div className="col-6">
                                                    <a href="doctor-profile.html" className="btn view-btn">View Profile</a>
                                                </div>
                                                <div className="col-6">
                                                    <a href="booking.html" className="btn book-btn">Book Now</a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </Slider>
                                {/* Doctor Widget */}

                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/* /Popular Section */}
        </div>
    )
}

export default Popular