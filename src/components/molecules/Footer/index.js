import React, { Component } from 'react'
import { RecentBlogList } from '../../atoms'

export class Footer extends Component {
    render() {
        return (
            <footer className="footer">
            <div className="footer__main">
              <div className="container">
                <div className="row">
                  <div className="col-md-4">
                    <div className="footer-section"><a className="footer__logo" href="/"><img className="img-responsive" src="assets/media/general/logo-k.png" alt="Logo"/></a>
                      <div className="footer__info">
                        <p>Konfrontasi.com didirikan oleh mantan aktivis ITB, UI, UGM, ITS, IPB, UNPAD, UIN Jakarta, <a href="/contacts">... more info</a></p>
                      </div>
                      <div className="footer__contact"><i className="icon fa fa-location-arrow"></i> Ratu Plaza Office Tower, Jl.Jenderal Sudirman 9 Jakarta 10270</div>
                      <div className="footer__contact"><i className="icon fa fa-phone"></i>+62 XXXX XXXX XXX</div>
                      <div className="footer__contact"><i className="icon fa fa-envelope"></i> redaksikonfrontasi@gmail.com</div>
                      <ul className="social-net list-inline">
                        <li className="social-net__item"><a className="social-net__link text-primary_h" href="twitter.com"><i className="icon fa fa-twitter"></i></a></li>
                        <li className="social-net__item"><a className="social-net__link text-primary_h" href="facebook.com"><i className="icon fa fa-facebook"></i></a></li>
                        <li className="social-net__item"><a className="social-net__link text-primary_h" href="plus.google.com"><i className="icon fa fa-google-plus"></i></a></li>
                        <li className="social-net__item"><a className="social-net__link text-primary_h" href="youtube-play.com"><i className="icon fa fa-youtube-play"></i></a></li>
                        <li className="social-net__item"><a className="social-net__link text-primary_h" href="rss.com"><i className="icon fa fa-rss"></i></a></li>
                      </ul>

                    </div>
                  </div>
                  <div className="col-md-4">
                    <section className="footer-section">
                      <h3 className="footer-section__title ui-title-inner ui-title-inner_condensed"><span className="ui-title-inner__inner">recent posts</span></h3>
                      <RecentBlogList />
                      <RecentBlogList />
                    
                    </section>
                  </div>
                  <div className="col-md-4">
                    <section className="footer-section">
                      <h3 className="footer-section__title ui-title-inner ui-title-inner_condensed"><span className="ui-title-inner__inner">Latest images</span></h3>
                      <div className="owl-carousel owl-theme owl-theme_control-center owl-theme_control-dark enable-owl-carousel" data-pagination="false" data-navigation="true" data-single-item="true" data-auto-play="7000" data-transition-style="fade" data-main-text-animation="true" data-after-init-delay="3000" data-after-move-delay="1000" data-stop-on-hover="true"><img src="assets/media/content/gallery/360x300_1.jpg" alt="foto"/><img src="assets/media/content/gallery/360x300_1.jpg" alt="foto"/><img src="assets/media/content/gallery/360x300_1.jpg" alt="foto"/></div>
                    </section>
                  </div>
                </div>
              </div>
            </div>
            <div className="copyright">
              <div className="container">
                <div className="row">
                  <div className="col-xs-12">
                    <ul className="copyright-list list-inline">
                      <li className="copyright-list__item"><a className="copyright-list__link" href="/">Terms</a></li>
                      <li className="copyright-list__item"><a className="copyright-list__link" href="/">Privacy Policy</a></li>
                      <li className="copyright-list__item"><a className="copyright-list__link" href="/">About us</a></li>
                      <li className="copyright-list__item"><a className="copyright-list__link" href="/">Contact</a></li>
                    </ul><span className="copyright__info">© 2021<strong> konfrontasi</strong> ® All Right Reserved</span>
                  </div>
                </div>
              </div>
            </div>
          </footer>
        )
    }
}

export default Footer;
