import React from 'react';
import { Categories, RecentBlogList, Tags } from '../../atoms';

const BlogPost = () => {

    const datadummy = [
        {id: "blg01", name: "World News",img:"assets/media/content/posts/750x400/1.jpg", content: [] , tags: []},
        {id: "blg02", name: "business",img:"assets/media/content/posts/390x200/1.jpg", content: [] , tags: []},
        {id: "blg03", name: "travel",img:"assets/media/content/posts/390x200/2.jpg", content: [] , tags: []},
        {id: "blg04", name: "Lifestyle",img:"assets/media/content/posts/390x200/2.jpg", content: [] , tags: []},
        {id: "blg05", name: "Sports and Games",img:"assets/media/content/posts/390x200/2.jpg", content: [] , tags: []},
        {id: "blg06", name: "Asia & Europe",img:"assets/media/content/posts/390x200/2.jpg", content: [] , tags: []},
        {id: "blg07", name: "Our Culture",img:"assets/media/content/posts/390x200/2.jpg", content: [] , tags: []},
    ];

    const dataTags = [ "People","Fashion", "Health", "Magazine", "World News"];

    return (
        <div className="bg-white">
                <div className="container ">
                <div className="row">
                <div className="col-md-8">
                    <div className="l-main-content l-main-content_mrg-right_minus">
                    <article className="b-post b-post-full clearfix">
                        <div className="entry-main">
                        <div className="entry-header">
                            <h1 className=" big-font">Judul Content artikel.</h1>
                        </div>
                        <div className="entry-content">
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit sed eiusmod tempor incididunt ut labore et dolore magna aliq enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatata proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p><img className="img-responsive" src="assets/media/content/posts/780x480/3.jpg" alt="Foto"/>
                            <h2 className="entry-title__inner">Phasellus finibus consequat justo sed</h2>
                            <p>Accumsan blandit sem convallis a. Sed vitae euismod dolor cras non accumsan minon lacinia enim quisque sed pors orci eget blandit. Nulla fermentum purus eleifend egestas metus sit duia wmet pulvinar orci. Maecenas sit amet vestib dolor. In at augue justo. Integer nec iaculis tortor. Morbi quam justo county euismod in dolor sed maximus mattis nunc. Morbi sagittis laoreet ipsum etiam magna lacus facilisis eget quam semper.</p>
                            <p>Bibendum mauris pellentesque peta vitae metus nec velit euismod ultri cies ac lobortis dolor onec vehicula vulputate vulputate. Praesent varius nisi facilisis justo finibus id interdum dui ftiam sona scelerisqe lacus magna ed feugiat tellus dignissim sed ipsum dial eget.</p>
                            <section className="b-post-full__section">
                            <h2 className="entry-title__inner">List type</h2>
                            <dl className="list list-desc list-desc_w_numbers">
                                <dt>tittle list</dt>
                                <dd>detail list Lorem ipsum dolor</dd>
                                
                            </dl>
                            </section>
                        </div>
                        <div className="entry-footer">
                            <div className="post-tags"><span className="entry-footer__title">tags:</span>
                            <ul className="list-tags list-tags_grey list-unstyled">
                                <li className="list-tags__item"><a className="list-tags__link btn btn-default" href="blog-main.html">Fashion</a></li>
                                <li className="list-tags__item"><a className="list-tags__link btn btn-default" href="blog-main.html">People</a></li>
                                <li className="list-tags__item"><a className="list-tags__link btn btn-default" href="blog-main.html">Health</a></li>
                            </ul>
                            </div>
                            <div className="entry-footer__social"><span className="entry-footer__title">Share</span>
                            <ul className="social-net list-inline">
                                <li className="social-net__item"><a className="social-net__link text-primary_h" href="facebook.com"><i className="icon fa fa-facebook"></i></a></li>
                                <li className="social-net__item"><a className="social-net__link text-primary_h" href="twitter.com"><i className="icon fa fa-twitter"></i></a></li>
                                <li className="social-net__item"><a className="social-net__link text-primary_h" href="pinterest.com"><i className="icon fa fa-pinterest-p"></i></a></li>
                                <li className="social-net__item"><a className="social-net__link text-primary_h" href="vk.com"><i className="icon fa fa-vk"></i></a></li>
                            </ul>
                            
                            </div>
                        </div>
                        </div>
                    </article>
                    
                    <section className="section-comment">
                        <h2 className="ui-title-block">Comments:</h2>
                        <ul className="comments-list list-unstyled">
                        <li>
                            <article className="comment clearfix">
                            <div className="comment-face"><img className="img-responsive" src="assets/media/content/posts/face/1.jpg" alt="face"/></div>
                            <div className="comment-inner">
                                <header className="comment-header">
                                <cite className="comment-author">Johannes Kepler</cite>
                                <time className="comment-datetime" datetime="2012-10-27">January 23, 2021</time>
                                </header>
                                <div className="comment-body">
                                <p>Duis ante magna, aliquet sit amet sagittis vitae, tristique at lacus. Ut et accumsan turpis. Phasellus ornare tortor congue imperdiet mauris magna condimentum nulla non malesuada mauris.</p>
                                </div>
                            </div>
                            </article>
                            <ul className="children list-unstyled">
                            <li>
                                <article className="comment clearfix">
                                <div className="comment-face"><img className="img-responsive" src="assets/media/content/posts/face/2.jpg" alt="face"/></div>
                                <div className="comment-inner">
                                    <header className="comment-header">
                                    <cite className="comment-author">Mikołaj Kopernik</cite>
                                    <time className="comment-datetime" datetime="2012-10-27">January 23, 2021</time>
                                    </header>
                                    <div className="comment-body">
                                    <p>Proin non ultricies mauris, non varius massa. Maecenas tempus risus ut erat blandit fermentum. Praesent commodo quam non lacus interdum semper et ut enim. Donec vel suscipit nulla. Nullam imperdiet nisl in lectus porta sodales.</p>
                                    </div>
                                </div>
                                </article>
                            </li>
                            </ul>
                        </li>
                        </ul>
                    </section>
                    
                    <section className="section-reply-form" id="section-reply-form">
                        <h2 className="ui-title-block">Post Comment</h2>
                        <form className="form-reply ui-form" action="#" method="post">
                        <div className="row">
                            <div className="col-xs-12">
                            <textarea className="form-control" rows="4" placeholder="Enter your review"></textarea>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-md-4">
                            <input className="form-control" type="text" placeholder="Your Name"/>
                            </div>
                            <div className="col-md-4">
                            <input className="form-control" type="email" placeholder="Email"/>
                            </div>
                            <div className="col-md-4">
                            <button className="ui-form__btn btn btn-primary btn-lg">Submit</button>
                            </div>
                        </div>
                        </form>
                    </section>
                    
                    </div>
                </div>
                <div className="col-md-4">
                    <aside className="l-sidebar l-sidebar_mrg-left l-sidebar_first-section">
                    <div className="widget widget-searce">
                        <form className="form-sidebar" id="search-global-form">
                        <input className="form-sidebar__input form-control" type="text" placeholder="Search..."/>
                        <button className="form-sidebar__btn"><i className="icon fa fa-search"></i></button>
                        </form>
                    </div>
                
                    <div className="widget">
                        <div className="text-center"><a className="b-banner b-banner-5" href="home.html"><img className="center-block img-responsive" src="assets/media/components/b-banners/banner-7.jpg" alt="foto"/></a>
                        
                        </div>
                    </div>
                    <Categories data={datadummy} />
                    

                                <section className="widget section-sidebar">
                                        <h2 className="widget-title ui-title-inner"><span className="ui-title-inner__inner">recent posts</span></h2>
                                        <div className="widget-content">
                                            <RecentBlogList />
                                        </div>
                                </section>

                                <Tags dataTags={dataTags} />
                    </aside>
                
                </div>
                </div>
            </div>
        </div>
      
    )
}

export default BlogPost;