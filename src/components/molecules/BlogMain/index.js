import React from 'react';
import { useLocation } from 'react-router-dom';
import { BlogTittle, CardBlogLG, Categories, RecentBlogList, Tags } from '../../atoms';

const BlogMain = () => {
    const location = useLocation();
    
        
        const datadummy = [
            {id: "blg01", name: "World News",img:"assets/media/content/posts/750x400/1.jpg", content: [] , tags: []},
            {id: "blg02", name: "business",img:"assets/media/content/posts/390x200/1.jpg", content: [] , tags: []},
            {id: "blg03", name: "travel",img:"assets/media/content/posts/390x200/2.jpg", content: [] , tags: []},
            {id: "blg04", name: "Lifestyle",img:"assets/media/content/posts/390x200/2.jpg", content: [] , tags: []},
            {id: "blg05", name: "Sports and Games",img:"assets/media/content/posts/390x200/2.jpg", content: [] , tags: []},
            {id: "blg06", name: "Asia & Europe",img:"assets/media/content/posts/390x200/2.jpg", content: [] , tags: []},
            {id: "blg07", name: "Our Culture",img:"assets/media/content/posts/390x200/2.jpg", content: [] , tags: []},
        ];

        
        console.log(location.state.data);
        const dataTags = [ "People","Fashion", "Health", "Magazine", "World News"];
       
        return (
            <div className="bg-grey">
            <div id="page-preloader"><span className="spinner border-t_second_b border-t_prim_a"></span></div>
                <BlogTittle title={location.state.data.name}/>
                <div className="bg-white">
                    <div className="container ">
                        <div className="row">
                            <div className="col-md-8">
                                <div className="l-main-content l-main-content_mrg-right_minus">
                                    <div className="posts-group">
                                        <CardBlogLG/>
                                        <CardBlogLG/>
                                        <CardBlogLG/>
                                    </div>
                                    <ul className="pagination text-center">
                                        <li ><a href="#/"><i className="icon pe-7s-angle-left"></i></a></li>
                                        <li className="active"><a href="#/">1</a></li>
                                        <li ><a href="#/">2</a></li>
                                        <li><a href="#/">3</a></li>
                                        <li><a href="#/"><i className="icon pe-7s-angle-right"></i></a></li>
                                    </ul>
                                </div>
                            </div>

                            <div className="col-md-4">
                                <aside className="l-sidebar l-sidebar_mrg-left l-sidebar_first-section">
                                <div className="widget">
                                    <div className="text-center">
                                        <a className="b-banner b-banner-5" href="#/">
                                            <img className="center-block img-responsive" src="assets/media/components/b-banners/banner-7.jpg" alt="foto"/>
                                        </a>
                                    </div>
                                </div>

                                <Categories data={datadummy}/>

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

                                <Tags dataTags={dataTags}/>
                                </aside>
                            </div>
                        </div>
                    </div>
                </div>
               
            </div>
        )
    
}

export default BlogMain;
