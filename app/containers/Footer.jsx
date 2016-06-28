import React, { Component, PropTypes } from 'react';

class Footer extends Component {

  render() {
    return (
      <footer role="footer">
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
