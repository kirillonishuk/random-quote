import React, { Component } from 'react'

import CSSModules from 'react-css-modules';
import styles from './App.less'

import Header from '../Header/Header';
import NewQuote from '../NewQuote/NewQuote';
import RandomQuote from '../RandomQuote/RandomQuote';
import Footer from '../Footer/Footer';

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isHidden: false,
        }
    }
    handleNewClick = () => {
        this.setState(prev => ({
            isHidden: !prev.isHidden
        }))
    }
    handleCloseClick = event => {
        if (event.target.tagName == 'MAIN' && this.state.isHidden) {
            this.setState(prev => ({
                isHidden: !prev.isHidden,
            }))
        }
    }
    render() {
        return (
            <main styleName='container' onClick={this.handleCloseClick}>
                <Header />
                <aside styleName='new-quote'>
                    <button
                        type='button'
                        styleName='new-quote-button'
                        onClick={this.handleNewClick}
                    >
                        {this.state.isHidden ? 'Close' : 'Add Quote'}
                    </button>
                    <NewQuote isHidden={this.state.isHidden} />
                </aside>
                <RandomQuote />
                <Footer />
            </main>
        )
    }
}

export default CSSModules(App, styles);
