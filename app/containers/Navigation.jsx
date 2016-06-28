import React, { Component, PropTypes } from 'react';
import classNames from 'classnames/bind';
import styles from 'css/components/navigation';

const cx = classNames.bind(styles);

class Navigation extends Component {

  render() {
    return (
      <nav className={cx('navigation')} role="navigation">
        <h1>B. Hopkins <span>Studio</span></h1>
      </nav>
    );
  }

}

export default Navigation;
