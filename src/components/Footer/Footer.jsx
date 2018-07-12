import React from 'react';

import CSSModules from 'react-css-modules';
import styles from './Footer.less'

const Footer = () => (
    <footer styleName='site-footer'>
        <div styleName='container'>
            <span styleName='footer-content'>
                Created and maintained by 
                <a
                    target='_blank'
                    href='https://vk.com/id125347024'
                >
                    Kiryl Anishchuk 
                </a> 
                 aka Inq. Belarus, Brest, 2018. 
            </span>
        </div>
    </footer>
)

export default CSSModules(Footer, styles);
