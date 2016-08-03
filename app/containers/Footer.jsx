import React, { Component, PropTypes } from 'react';

const behanceImg = require('../images/behance@2x.png');
const dribbleImg = require('../images/dribbble@2x.png');
const twitterImg = require('../images/twitter@2x.png');

class Footer extends Component {

  render() {
    return (
      <footer className="footer" role="footer">
        <div className="container">
          <div className="ten columns">
            <div className="u-pull-left">
              <span>Copyright 2016 Brandon Hopkins Studio</span>
              &nbsp;&nbsp;|&nbsp;&nbsp;
              <a href="mailto:hello@brandonhopkins.co">Contact</a>
            </div>
            <div className="u-pull-right social-links">
              <a href="https://www.behance.net/brandonhopkins" target="_blank">
                <img src={ behanceImg } alt="Behance" />
              </a>
              <a href="https://dribbble.com/bhstudio" target="_blank">
                <img src={ dribbleImg } alt="Dribble" />
              </a>
              <a href="https://twitter.com/_b_ill" target="_blank">
                <img src={ twitterImg } alt="Twitter" />
              </a>
            </div>
          </div>
        </div>
      </footer>
    );
  }

}

export default Footer;
