import React, { Component } from 'react';
import PropTypes from 'prop-types';

import CSSModules from 'react-css-modules';
import styles from './RandomQuote.less';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faThumbsUp, faThumbsDown } from '@fortawesome/free-regular-svg-icons';

class RandomQuote extends Component {
    constructor(props) {
        super(props);
        this.state = {
            voteResult: 0,
        }
    }
    render() {
        return (
            <section styleName='quote-container'>
                <h3>
                    Random Qo<span>ute!</span>
                </h3>
                <article styleName='quote'>
                    <h5 styleName='quote-author'>
                        {`- ${this.props.author}`}
                    </h5>
                    <p styleName='quote-content'>
                        {this.props.quote}
                    </p>
                    <article styleName='marks-container'>
                        <div styleName='single-vote'>
                            <span styleName='result'>
                                {this.state.voteResult}
                            </span>
                            <FontAwesomeIcon
                                styleName='like-btn'
                                icon={faThumbsUp}
                                size='2x'
                            />
                            <FontAwesomeIcon
                                styleName='dislike-btn'
                                icon={faThumbsDown}
                                size='2x'
                            />
                        </div>
                    </article>
                </article>
            </section>
        );
    }
}

RandomQuote.defaultProps = {
    author: 'Anonymous',
};

RandomQuote.propTypes = {
    author: PropTypes.string,
    quote: PropTypes.string.isRequired,
};

export default CSSModules(RandomQuote, styles, {
    allowMultiple: true
});
