import React from 'react';

export const RecentBlogList = () => {
    return (
        <section className="b-post b-post_img-left b-post_img-120 clearfix">
            <div className="entry-media"><a className="js-zoom-images  img-hover-effect" href="assets/media/content/posts/120x95/1.jpg"><img className="img-responsive hov-scal img-border-sm" src="assets/media/content/posts/120x95/1.jpg" alt="Foto"/></a></div>
            <div className="entry-main">
                <div className="entry-header">
                    <h2 className="entry-title"><a href="blog-post.html">US should prepare for the Russian election hacy</a></h2>
                    <div className="entry-meta"><span className="entry-meta__item"><a className="entry-meta__link" href="blog-main.html"><strong>june 30, 2021</strong></a></span><span className="entry-meta__item"><i className="icon fa fa-comment-o text-primary"></i><a className="entry-meta__link" href="blog-main.html">29</a></span>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default RecentBlogList;