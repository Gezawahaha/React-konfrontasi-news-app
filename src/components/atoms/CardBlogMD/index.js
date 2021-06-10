import React from 'react'

const  CardBlogMD= () => {
    return (
        <section className="b-post b-post_mod-b clearfix">
            <div className="entry-media"><a className="js-zoom-images  img-hover-effect" href="assets/media/content/posts/360x240/1.jpg"><img className="img-responsive hov-scal img-border" src="assets/media/content/posts/360x240/1.jpg" alt="Foto"/></a></div>
            <div className="entry-main">
            <div className="entry-header">
                <div className="entry-meta"><span className="entry-meta__item"><a className="entry-meta__link text-primary" href="blog-main.html"><strong>James bond</strong></a></span><span className="entry-meta__item"><i className="icon fa fa-heart-o text-second"></i><a className="entry-meta__link text-primary" href="blog-main.html">50</a></span><span className="entry-meta__item"><i className="icon fa fa-comment-o text-primary"></i><a className="entry-meta__link text-primary" href="blog-main.html">29</a></span>
                </div>
                <h2 className="entry-title"><a href="blog-post.html">You won't have Trump kick around anymore with you?</a></h2>
            </div>
            </div>
        </section>
    )
}

export default CardBlogMD;