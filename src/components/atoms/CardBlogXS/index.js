import React from 'react'

export const CardBlogXS = (props) => {
    return (
            <section className="b-post b-post_mod-a" onClick={props.onClick}>
                <div className="entry-media">
                    <a className="  img-hover-effect" href="#/">
                        <img className="img-responsive " src="assets/media/content/posts/225x145/1.jpg" alt="Foto"/>
                    </a>
                </div>
                <div className="entry-main">
                    <div className="entry-header">
                        <div className="entry-meta">
                            <span className="entry-meta__item">
                                <a className="entry-meta__link text-primary" href="#/">
                                    <strong>june 30, 2017</strong>
                                </a>
                            </span>
                            <span className="entry-meta__item">
                                <i className="icon fa fa-heart-o text-second"></i>
                                <a className="entry-meta__link text-primary" href="#/">50</a>
                            </span>
                        </div>
                        <h2 className="entry-title"><a href="#/">ISIS puts up fierce fight &amp; bombing</a></h2>
                    </div>
                </div>
            </section>
    )
}

export default CardBlogXS;