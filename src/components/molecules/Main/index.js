import React from 'react'
import { useHistory } from 'react-router-dom';
import { Banner ,CardBlogMD,CardBlogXS, RecentBlogList, TrendingBlogList } from '../../atoms';

const Main = () => {
    
        
        const history = useHistory();
        const datadummy = [
            {id: "blg01", name: "World News",img:"assets/media/content/posts/750x400/1.jpg", content: [] , tags: []},
            {id: "blg02", name: "World Travel",img:"assets/media/content/posts/390x200/1.jpg", content: [] , tags: []},
            {id: "blg03", name: "Social Media",img:"assets/media/content/posts/390x200/2.jpg", content: [] , tags: []},
            {id: "blg04", name: "Lifestyle and Fashion",img:"assets/media/content/posts/390x200/2.jpg", content: [] , tags: []},
            {id: "blg05", name: "Sports and Games",img:"assets/media/content/posts/390x200/2.jpg", content: [] , tags: []},
            {id: "blg06", name: "Asia & Europe",img:"assets/media/content/posts/390x200/2.jpg", content: [] , tags: []},
            {id: "blg07", name: "Our Culture",img:"assets/media/content/posts/390x200/2.jpg", content: [] , tags: []},
        ];

        // const TrendingBlog = [
        //     {tittle: "Bitcoin to the moon", date: "novemver , 17 2021", img:"assets/media/content/posts/225x145/1.jpg" , like: 50, comment:[{id:"001",name: "andi",text: "go green"},{id:"002",name: "adi",text: "go shit"}]},
        //     {tittle: "Bitcoin to the moon", date: "novemver , 17 2021", img:"assets/media/content/posts/225x145/1.jpg" , like: 50, comment:[{id:"001",name: "andi",text: "go green"},{id:"002",name: "adi",text: "go shit"}]},
        //     {tittle: "Bitcoin to the moon", date: "novemver , 17 2021", img:"assets/media/content/posts/225x145/1.jpg" , like: 50, comment:[{id:"001",name: "andi",text: "go green"},{id:"002",name: "adi",text: "go shit"}]}
        // ]

        return (
            <div>
                <div id="page-preloader"><span className="spinner border-t_second_b border-t_prim_a"></span></div>
                <div className="section-sm bg-grey">
                    <Banner Data={datadummy}/>   
                </div>

                <div className="section-sm bg-white posts-group-6">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-8">
                                <section className="b-post b-post_img-left b-post_img-488 clearfix">
                                    <div className="entry-media"><a className="js-zoom-images  img-hover-effect" href="assets/media/content/posts/488x280/1.jpg"><img className="img-responsive hov-scal" src="assets/media/content/posts/488x280/1.jpg" alt="Foto"/></a></div>
                                    <div className="entry-main">
                                    <div className="entry-header">
                                        <div className="entry-meta"><span className="entry-meta__item"><a className="entry-meta__link text-primary" href="blog-main.html"><strong>James bond</strong></a></span><span className="entry-meta__item"><i className="icon fa fa-heart-o text-second"></i><a className="entry-meta__link text-primary" href="blog-main.html">50</a></span><span className="entry-meta__item"><i className="icon fa fa-comment-o text-primary"></i><a className="entry-meta__link text-primary" href="blog-main.html">29</a></span>
                                        </div>
                                        <h2 className="entry-title"><a href="blog-post.html">Migrants Told: Stay in France or go back to your country</a></h2>
                                    </div>
                                    <div className="entry-content">
                                        <p>Lorem ipsum dolor amet sed con sectetur elit sed eiusmod tempor incididunt laboreo magna aliqa sed anim cad veniam.</p>
                                    </div>
                                    </div>
                                </section>
                            
                                <div className="section-area">
                                    <div className="row">
                                        <div className="col-sm-4">
                                            <CardBlogXS onClick={() => history.push({pathname: "/blogpost"})}/>  
                                        </div>
                                        <div className="col-sm-4" >
                                            <CardBlogXS onClick={() => history.push({pathname: "/blogpost"})}/>  
                                        </div>
                                        <div className="col-sm-4">
                                            <CardBlogXS onClick={() => history.push({pathname: "/blogpost"})}/>  
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-4">
                                <section className="section-area col_mrg-left_20">
                                    <h2 className="ui-title-inner"><span className="ui-title-inner__inner">trending</span></h2>
                                    <TrendingBlogList/>
                                    <TrendingBlogList/>
                                    <TrendingBlogList/>
                                    <TrendingBlogList/>
                                </section>
                            </div>
                        </div>
                    </div>
                </div>


                <div className="section-default bg-grey">
                    <div className="container">
                        <div className="row">
                            {/* colom 1 */}
                            <div className="col-md-8">
                                <div className="wrap-inl-bl">
                                    <div className="row">
                                        <div className="col-sm-6">
                                            <CardBlogMD />
                                        </div>
                                        <div className="col-sm-6">
                                            <CardBlogMD />
                                        </div>
                                        <div className="col-sm-6">
                                            <CardBlogMD />
                                        </div>
                                        <div className="col-sm-6">
                                            <CardBlogMD />
                                        </div>
                                    </div>
                                </div>
                            </div>
                            {/* colom 2 */}
                            <div className="col-md-4">
                                <aside className="l-sidebar col_mrg-left_20">
                                    <section className="widget section-sidebar">
                                        <h2 className="widget-title ui-title-inner"><span className="ui-title-inner__inner">recent posts</span></h2>
                                        <div className="widget-content">
                                            <RecentBlogList />
                                            <RecentBlogList />
                                            <RecentBlogList />
                                            <RecentBlogList />
                                            <RecentBlogList />
                                        </div>
                                    </section>
                                </aside>
                            </div>
                        </div>
                    </div>
                </div>

      
                

               
            </div>
        )
    
}

export default Main;


