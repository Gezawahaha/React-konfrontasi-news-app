import React, { Component } from 'react'
import { Main, BlogMain, Footer, Gap, Header, Contacts, BlogPost } from '../../components'

import { BrowserRouter as  Router, Switch, Route   } from 'react-router-dom';


export class Home extends Component {
    render() {
        return (
            <div >
                <Header/>
                    <Gap height={240}/>
                    <Router>
                        <Switch>
                            <Route path="/contacts">
                                <Contacts />
                            </Route>
                            <Route path="/blogpost">
                                <BlogPost />
                            </Route>
                            <Route path="/blog">
                                <BlogMain /> 
                            </Route>
                            <Route path="/">
                                <Main/>
                            </Route>
                        </Switch>
                    </Router>
                <Footer/>
            </div>
        )
    }
}

export default Home;
