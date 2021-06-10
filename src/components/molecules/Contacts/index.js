import React from 'react'


const Contacts = () => {
    return (
        <div className="bg-grey">
            <div id="page-preloader"><span className="spinner border-t_second_b border-t_prim_a"></span></div>


            
                <div className="container">
                    <div className="row">
                    <div className="col-md-6">
                        <section className="section-default">
                        <h2 className="ui-title-block">Send us Message</h2>
                        <div id="success"></div>
                        <form className="b-form-contacts ui-form" id="contactForm" action="#" method="post">
                            <div className="row">
                            <div className="col-md-6">
                                <input className="form-control" id="user-name" type="text" name="user-name" placeholder="Your Name" required="required"/>
                                <input className="form-control" id="user-email" type="email" name="user-email" placeholder="Email"/>
                            </div>
                            <div className="col-md-6">
                                <input className="form-control last-block_mrg-btn_0" id="user-subject" type="text" name="user-subject" placeholder="Subject"/>
                                <input className="form-control" id="user-phone" type="tel" name="user-phone" placeholder="Phone"/>
                            </div>
                            </div>
                            <div className="row">
                            <div className="col-xs-12">
                                <textarea className="form-control" id="user-message" rows="4" placeholder="Enter your review" required="required"></textarea>
                                <button className="btn btn-primary btn-lg">Send Message</button>
                            </div>
                            </div>
                        </form>
                        
                        </section>
                    </div>
                    <div className="col-md-6">
                        <section className="section-contacts section-default">
                        <h2 className="ui-title-block">Contact Info</h2>
                        <p>Konfrontasi.com didirikan oleh mantan aktivis ITB, UI, UGM, ITS, IPB, UNPAD, UIN Jakarta, UIN Yogyakarta, UMY, UNAIR, Trisakti, Paramadina, STF Driyarkara, serta Kelompok Cipayung dan kaum pergerakan lainnya sebagai media rakyat untuk perubahan guna menyuarakan aspirasi publik dan kaum tertindas serta menjaga keutuhan negara dan konstitusi 1945.</p>
                        <div className="b-contacts">
                            <div className="b-contacts__item"><i className="b-contacts__icon fa fa-map-marker"></i><span className="b-contacts__name">Address:</span><span className="b-contacts__info">Ratu Plaza Office Tower, Jl.Jenderal Sudirman 9 Jakarta 10270</span></div>
                            <div className="b-contacts__item"><i className="b-contacts__icon fa fa-phone"></i><span className="b-contacts__name">Phone:</span><span className="b-contacts__info">+62 XXXX XXXX XXX</span></div>
                            <div className="b-contacts__item"><i className="b-contacts__icon fa fa-envelope"></i><span className="b-contacts__name">Email:</span><a className="b-contacts__info" href="mailto:redaksikonfrontasi@gmail.com">redaksikonfrontasi@gmail.com</a></div>
                            <div className="b-contacts__item"><i className="b-contacts__icon fa fa-user"></i><span className="b-contacts__name">Share:</span><span className="b-contacts__info">
                                <ul className="social-net list-inline">
                                <li className="social-net__item"><a className="social-net__link text-primary_h" href="facebook.com"><i className="icon fa fa-facebook"></i></a></li>
                                <li className="social-net__item"><a className="social-net__link text-primary_h" href="twitter.com"><i className="icon fa fa-twitter"></i></a></li>
                                <li className="social-net__item"><a className="social-net__link text-primary_h" href="pinterest.com"><i className="icon fa fa-pinterest-p"></i></a></li>
                                <li className="social-net__item"><a className="social-net__link text-primary_h" href="vk.com"><i className="icon fa fa-vk"></i></a></li>
                                </ul>
                                </span></div>
                            </div>
                        </section>
          </div>
        </div>
      </div>

        </div>
    )
}

export default Contacts;