import React from 'react'

const Tags = (props) => {
    

    return (
        <section className="widget section-sidebar">
            <h2 className="widget-title ui-title-inner"><span className="ui-title-inner__inner">our tags</span></h2>
            <div className="widget-content">
                <ul className="list-tags list-tags_grey list-unstyled">
                
                {
                    props.dataTags.map((Tag) =>(<li key={Tag} className="list-tags__item"><a className="list-tags__link btn btn-default" href="#/">{Tag}</a></li>))
                }
                </ul>
            </div>
        </section>
    )
}
export default Tags;