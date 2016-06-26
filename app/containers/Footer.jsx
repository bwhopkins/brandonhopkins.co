import React, { Component, PropTypes } from 'react';
import classNames from 'classnames/bind';
import styles from 'css/components/navigation';

const cx = classNames.bind(styles);

class Footer extends Component {

  render() {
    return (
      <footer className={cx('footer')} role="footer">
        <div>
          <span>Copyright 2016 Brandon Hopkins Studio</span> | <a href="#">Contact</a>
        </div>
        <div>
          <a href="#"><img src="http://placehold.it/25" alt="Behance" /></a>
          <a href="#"><img src="http://placehold.it/25" alt="Dribble" /></a>
          <a href="#"><img src="http://placehold.it/25" alt="Facebook" /></a>
          <a href="#"><img src="http://placehold.it/25" alt="Twitter" /></a>
        </div>
      </footer>
    );
  }

}

export default Footer;
