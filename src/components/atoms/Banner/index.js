import React, { useState }  from 'react'
import { useHistory } from 'react-router-dom'
import { Gap } from '..'



const Banner = (props) => {
        const history = useHistory();
        //const data = props.Data;
        const [fade , setFade] = useState(false);

        
       
        return (
            <div >
                    <div className="container">
                        <div className="row">
                            <div className="col-xs-12">
                                <div className="plate-cont plate-cont_rows">
                                        <section className="b-post b-post_img-bg b-post_img-bg_type-1 b-post_img-bg_type-1 plate-cont__inner_x2 hover-title img-hover-effect" >
                                        <div onClick={() => {
                                            setFade(true);
                                            history.push({pathname: "/blog", state:{data: props.Data[0]}})
                                            }}
                                        onAnimationEnd={() => setFade(false)}
                                        className={fade ? 'fade' : ''}>
                                        
                                            <div className="entry-media">
                                                <img className="img-responsive" src={props.Data[0].img} alt="Foto"/>
                                            </div>

                                            <div className="entry-main">
                                                <div className="entry-header">
                                                    <h2 className="entry-title hov-title">
                                                        <a className="hov-title__inner" href="#/">{props.Data[0].name}</a>
                                                    </h2>
                                                    <Gap height={20} />
                                                </div>
                                            </div>

                                        </div>
                                            
                                        </section>
                                
                                    <div className="plate-cont__inner">
                                        <section className="b-post b-post_img-bg b-post_img-bg_type-2 hover-title img-hover-effect" onClick={() => history.push({pathname: "/blog", state:{data: props.Data[1] }})}>
                                            <div className="entry-media"><img className="img-responsive" src={props.Data[1].img} alt="Foto"/></div>
                                            <div className="entry-main">
                                                <div className="entry-header">
                                                    <h2 className="entry-title hov-title"><a className="hov-title__inner" href="blog-post.html">{props.Data[1].name}</a></h2>
                                                    <div className="entry-meta">
                                                    </div>
                                                </div>
                                            </div>
                                        </section>

                                        <section className="b-post b-post_img-bg b-post_img-bg_type-2 hover-title img-hover-effect" onClick={() => history.push({pathname: "/blog", state:{data: props.Data[2] }})}>
                                            <div className="entry-media"><img className="img-responsive" src="assets/media/content/posts/390x200/2.jpg" alt="Foto"/></div>
                                            <div className="entry-main">
                                            <div className="entry-header">
                                                <h2 className="entry-title hov-title"><a className="hov-title__inner" href="blog-post.html">{props.Data[2].name}</a></h2>
                                                <div className="entry-meta">
                                                </div>
                                            </div>
                                            </div>
                                        </section>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
        )
    }

export default Banner;
