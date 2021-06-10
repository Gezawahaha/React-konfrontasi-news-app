import React from 'react'

export const TrendingBlogList = () => {
    return (
        <section className="b-post b-post_img-left b-post_img-65 bg-grey-2 clearfix">
            <div className="entry-media"><a className="js-zoom-images  img-hover-effect" href="assets/media/content/posts/65x65/1.jpg"><img className="img-responsive img-border-sm" src="assets/media/content/posts/65x65/1.jpg" alt="Foto"/></a></div>
            <div className="entry-main">
                <div className="entry-header">
                    <h2 className="entry-title"><a href="blog-post.html">Woman endure five years of slavery now</a></h2>
                    <div className="entry-meta">
                        <span className="entry-meta__item">
                            <a className="entry-meta__link" href="blog-main.html"><strong>june 30, 2017</strong></a>
                        </span>
                        <span className="entry-meta__item"><i className="icon fa fa-heart-o text-second"></i>
                            <a className="entry-meta__link" href="blog-main.html">50</a>
                        </span>
                    </div>
                </div>
            </div>
        </section>
        
    )
}

export default TrendingBlogList;