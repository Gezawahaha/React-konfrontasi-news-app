import React from 'react';

const BlogTittle = (props) => {  
    return (
        <div className="bg-grey">
            <div className="container ">
                <div className="row">
                <div className="col-xs-12">
                    <ol className="breadcrumb">
                    <li><a href="/">home</a></li>
                    <li className="active">{props.title}</li>
                    </ol>
                </div>
                </div>
            </div>
            <div className="section-title-page area-bg parallax" >
                    <div className="area-bg__inner">
                        <div className="container">
                            <div className="row">
                            <div className="col-xs-12">
                                <h1 className="b-title-page">{props.title}</h1>
                                <div className="b-title-page__info"></div>
                            </div>
                            </div>
                        </div>
                    </div>
            </div>
        </div>
        
    )
}
export default BlogTittle;