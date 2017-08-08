import React from 'react';
import {Switch, Route, Link} from 'react-router-dom';
import {Helmet} from 'react-helmet';

class Nav extends React.Component {
    render() {
        return (
            <div>
                <ul>
                    <li>
                        <Link to={'/'}>Homepage</Link>
                    </li>
                    <li>
                        <Link to={'/about'}>About</Link>
                    </li>
                    <li>
                        <Link to={'/contact'}>Contact</Link>
                    </li>
                </ul>
            </div>
        );
    }
}

class Homepage extends React.Component {
    render() {
        return (
            <div>
                <Helmet title="Homepage" />
                <Nav />
                <h1>Home Page</h1>
            </div>
        );
    }
}

class About extends React.Component {
    render() {
        return (
            <div>
                <Helmet title="About" />
                <Nav />
                <h1>About</h1>
            </div>
        );
    }
}

class Contact extends React.Component {
    render() {
        return (
            <div>
                <Helmet title="Contact" />
                <Nav />
                <h1>Contact</h1>
            </div>
        );
    }
}

export default class App extends React.Component {
    render() {
        return (
            <div>
                <Helmet
                    htmlAttributes={{lang: 'en', amp: undefined}}
                    titleTemplate="%s | React App"
                    titleAttributes={{itemprop: 'name', lang: 'en'}}
                    meta={[
                        {name: 'description', content: 'Server side rendering example'},
                        {name: 'viewport', content: 'width=device-width, initial-scale=1'}
                    ]}
                />
                <Switch>
                    <Route exact path="/" component={Homepage} />
                    <Route path="/about" component={About} />
                    <Route path="/contact" component={Contact} />
                </Switch>
            </div>
        );
    }
}
