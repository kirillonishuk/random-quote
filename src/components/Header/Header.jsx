import React from 'react';

import CSSModules from 'react-css-modules';
import styles from './Header.less';

const Header = () => (
    <header>
        <h2>
            by Inq.
        </h2>
    </header>
)

export default CSSModules(Header, styles);
