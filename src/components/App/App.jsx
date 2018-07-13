import React, { Component } from 'react'

import CSSModules from 'react-css-modules';
import styles from './App.less'

import Helmet from 'react-helmet';

import Header from '../Header/Header';
import NewQuote from '../NewQuote/NewQuote';
import RandomQuote from '../RandomQuote/RandomQuote';
import Footer from '../Footer/Footer';

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isHidden: false,
            newQuoteStatus: 'popup-default',
        }
    }
    handleNewClick = () => {
        this.setState(prev => ({
            isHidden: !prev.isHidden,
            newQuoteStatus: !prev.isHidden ? 'popup-show' : 'popup-hidden',
        }))
    }
    handleCloseClick = event => {
        if (event.target.tagName == 'MAIN' && this.state.isHidden) {
            this.setState(prev => ({
                isHidden: !prev.isHidden,
                newQuoteStatus: !prev.isHidden ? 'popup-show' : 'popup-hidden',
            }))
        }
    }
    render() {
        return (
            <main styleName='container' onClick={this.handleCloseClick}>
                <Helmet>
                    <title>Random Quote's</title>
                    <link rel='shortcut icon' href='http://www.iconj.com/ico/7/9/792xo789g6.ico' type='image/x-icon' />
                </Helmet>
                <Header />
                <aside styleName='new-quote'>
                    <button
                        type='button'
                        styleName='new-quote-button'
                        onClick={this.handleNewClick}
                    >
                        {this.state.isHidden ? 'Close' : 'Add Quote'}
                    </button>
                    <NewQuote newQuoteStatus={this.state.newQuoteStatus} />
                </aside>
                <RandomQuote 
                    author={'Albert Einstein'}
                    quote={'Few are those who see with their own eyes and feel with their own hearts.'}
                />
                <Footer />
            </main>
        )
    }
}

export default CSSModules(App, styles);
