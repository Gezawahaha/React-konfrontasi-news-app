import React from 'react'

const CardBlogLG = () => {
    return (
        <div>
            <article className="b-post b-post_main clearfix">
                  <div className="entry-media img-hover-effect"><img className="img-responsive" src="assets/media/content/posts/780x480/1.jpg" alt="Foto"/></div>
                  <div className="entry-main">
                    <div className="entry-header">
                      <h2 className="entry-title">Migrants Told: Stay in France or go back to your country</h2>
                    </div>
                    <div className="entry-content">
                      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit sed eiusmod tempor incididunt ut labore et dolore magna aliq enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatata proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                    </div>
                    <div className="entry-footer"><a className="btn-bd-primary" href="blog-post.html">read more</a>
                      <div className="entry-meta"><span className="entry-meta__item"><a className="entry-meta__link" href="blog-main.html"><strong>june 30, 2017</strong></a></span><span className="entry-meta__item"><i className="icon fa fa-heart-o text-second"></i><a className="entry-meta__link" href="blog-main.html">50</a></span><span className="entry-meta__item"><i className="icon fa fa-comment-o text-primary"></i><a className="entry-meta__link" href="blog-main.html">29</a></span>
                      </div>
                    </div>
                  </div>
                </article>
        </div>
    )
}
export default CardBlogLG;