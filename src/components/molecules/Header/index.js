import React from 'react';
import { useHistory } from 'react-router-dom';

const Header = () => {
    

      
    
        const history = useHistory();
        const dateNow = new Date().toDateString();
        const datadummy = [
            {id: "blg01", name: "World News",img:"assets/media/content/posts/750x400/1.jpg", content: [] , tags: []},
            {id: "blg02", name: "business",img:"assets/media/content/posts/390x200/1.jpg", content: [] , tags: []},
            {id: "blg03", name: "travel",img:"assets/media/content/posts/390x200/2.jpg", content: [] , tags: []},
            {id: "blg04", name: "Lifestyle",img:"assets/media/content/posts/390x200/2.jpg", content: [] , tags: []},
            {id: "blg05", name: "Sports and Games",img:"assets/media/content/posts/390x200/2.jpg", content: [] , tags: []},
            {id: "blg06", name: "Asia & Europe",img:"assets/media/content/posts/390x200/2.jpg", content: [] , tags: []},
            {id: "blg07", name: "Our Culture",img:"assets/media/content/posts/390x200/2.jpg", content: [] , tags: []},
        ];

        const titleHeader= [
            {tittle: "Highlight Berita 1"},
            {tittle: "Highlight Berita 2"},
            {tittle: "Highlight Berita 3"},
            {tittle: "Highlight Berita 4"}
        ] ;
        
       
        return (
            <header className="header header-boxed-width header-logo-white header-background-black header-navbar-white header-topbarbox-1-left header-topbarbox-2-right header-navibox-3-left header-navibox-4-right header-navibox-1-center header-navibox-2-center navbar-fixed-top">
                <div className="container container-boxed-width">
                <div className="top-bar">
                    <div className="container">
                    <div className="col-sm-9">
                        <div className="header-topbarbox-1"><span className="top-bar__title">breaking news</span>
                        <div className="top-bar__ticker ticker1">
                            <ul>
                                {titleHeader.map((item, index) =>  
                                    <div key={index}><li >{item.tittle}</li></div>
                                )} 
                            </ul>
                        </div>
                        </div>
                    </div>
                    <div className="col-sm-3">
                        <div className="header-topbarbox-2">
                        <div className="header-date"><span className="top-bar__title">today is</span><span className="header-date__inner"> {dateNow}</span></div>
                        </div>
                    </div>
                    </div>
                </div>
                <div className="container">
                    <div className="header-navibox-3">
                    <ul className="nav navbar-nav hidden-xs clearfix vcenter">
                        <li>
                        <button className="js-toggle-screen toggle-menu-button"><i className="toggle-menu-button-icon"><span></span><span></span><span></span><span></span><span></span><span></span></i></button>
                        </li>
                        <li><a className="btn_header_search" href="#/"><i className="fa fa-search"></i></a></li>
                    </ul>
                    </div>
                    <div className="header-navibox-4">
                    <ul className="social-links list-inline">
              
                        <li><a href="#/https://www.facebook.com/Konfrontasionline/" target="_blank" rel="noreferrer"><i className="fa fa-facebook"></i></a></li>
                        <li><a href="#/https://twitter.com/konfrontasi_/" target="_blank"><i className="fa fa-twitter" rel="noreferrer"></i></a></li>
                        <li><a href="#/"><i className="fa fa-google"></i></a></li>
                        <li><a href="#/"><i className="fa fa-rss"></i></a></li>  
                    </ul>
                    </div>
                    <div className="header-navibox-1">
                    <button className="menu-mobile-button visible-xs-block js-toggle-screen toggle-menu-button"><i className="toggle-menu-button-icon"><span></span><span></span><span></span><span></span><span></span><span></span></i></button>
                    <a className="navbar-brand scroll" href="home.html">
                        <img className="normal-logo img-responsive" src="assets/media/general/logo-konfrontasi.png" alt="logo"/>
                        <img className="scroll-logo img-responsive hidden-xs" src="assets/media/general/logo-k-xs.png" alt="logo"/></a>
                    </div>
                </div>
                <nav className="navbar" id="nav">
                    <div className="container">
                    <div className="header-navibox-2">
                        <ul className="yamm main-menu nav navbar-nav">
                            <li><a href="/">Home</a></li>
                            {
                                datadummy.map((item , index) =>  (index<=4) ? <li key={index} ><a href="/blog" onClick={() => history.push({pathname: "/blog", state:{data: item}})}>{item.name}</a></li> :  '')  
                            }
                        <li className="dropdown"><a className="dropdown-toggle" href="#/" data-toggle="dropdown">Pages<b className="caret"></b></a>
                            <ul className="dropdown-menu" role="menu">
                                {
                                    datadummy.map((item , index) =>  (index<=4) ?  '' : <li key={index}><a href="/blog" onClick={() => history.push({pathname: "/blog", state:{data: item}})}>{item.name}</a></li>)  
                                }
                            </ul>
                        </li>
                            <li><a href="/contacts">Contacts</a></li>
                        </ul>
                    </div>
                    </div>
                </nav>
                </div>
            </header>
        )
    
}

export default Header;
