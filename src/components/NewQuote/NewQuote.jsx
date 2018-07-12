import React, { Component } from 'react'
import PropTypes from 'prop-types';

import TextareaAutosize from 'react-autosize-textarea';

import CSSModules from 'react-css-modules';
import styles from './NewQuote.less';

class NewQuote extends Component {
    constructor(props) {
        super(props);
        this.state = {
            quote: '',
            autor: '',
        }
    }
    handleSubmit = event => {
        event.preventDefault();
    }
    handleQuoteChange = event => {
        this.setState({
            quote: event.target.value,
        });
    }
    handleAutorChange = event => {
        this.setState({
            autor: event.target.value,
        });
    }
    render() {
        let popupState = this.props.isHidden ? 'popup-show' : 'popup-hidden';
        return (
            <article styleName={`container ${popupState}`}>
                <form onSubmit={this.handleSubmit}>
                    <input
                        placeholder='Enter Author'
                        styleName='input-author'
                        type='text'
                        onChange={this.handleQuoteChange}
                    />
                    <TextareaAutosize
                        placeholder='Enter Quote text'
                        styleName='input-quote'
                        rows={3}
                        maxRows={10}
                        required
                        
                    />
                    <button
                        type='submit'
                        styleName='add-btn'
                    >
                        A<span>dd</span>
                    </button>
                </form>
            </article>
        );
    }
}

NewQuote.defaultProps = {
    isHidden: false,
};

NewQuote.propTypes = {
    isHidden: PropTypes.bool,
};

export default CSSModules(NewQuote, styles, {
    allowMultiple: true
});
