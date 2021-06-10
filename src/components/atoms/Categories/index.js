import React from 'react'

const Categories = (props) => {
    

    return (
        <section className="widget section-sidebar ">
            <h2 className="widget-title ui-title-inner ui-title-inner_condensed"><span className="ui-title-inner__inner">categories</span></h2>
            <div className="widget-content ">
            <ul className="widget-list widget-list_white list list-mark-4">
                <li className="widget-list__item"><a className="widget-list__link" href="#/">All Categories<span className="badge">{props.data.length}</span></a></li>
                {
                    props.data.map((item) =>(
                        <li className="widget-list__item " key={item.id}><a className="widget-list__link" href="#/">{item.name}<span className="badge">{item.content.length}</span></a></li>
                    ))
                }
            </ul>
            </div>
        </section>
    )
}

export default Categories;