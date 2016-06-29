import React from 'react';

/*
 * Note: This is kept as a container-level component, 
 *  i.e. We should keep this as the container that does the data-fetching 
 *  and dispatching of actions if you decide to have any sub-components.
 */

require('../sass/containers/home.scss');

const bgStyle = {
  backgroundImage: `url(${require('../images/hero@2x.png')})`
};

const aboutImg = require('../images/aboutImg@2x.png');

export default class Home extends React.Component {

  render() {
    return (
      <div>
        <section className="hero-section" style={ bgStyle }>
          <div className="container">
            <div className="hero-overlay seven columns">
              <h1>Quality Branding & Illustration That Speaks Volumes</h1>
              <hr />
              <p>New Site Launching Soon</p>
            </div>
          </div>
        </section>
        <section className="about-section">
          <div className="container">
            <article className="about-article ten columns">
              <div className="row">
                <div className="one-half column">
                  <h3 className="blue-header">Hi I'm Brandon Hopkins</h3>
                  <p>
                    Visual communication empowers a story in a way words just are not capable of
                    doing. Allowing your voice to bridge language, age, and comprehensive gaps to
                    more deeply impact the world.
                  </p>
                  <p>
                    Challenges I have solved include; branding companies in the
                    fields of tech, construction, financial planning, and boutique companies,
                    illustrating for clothing lines, artwork for skate decks, infographic and
                    communications pieces.
                  </p>
                  <p>
                    The reach of visual design does not stop at the aforementioned list.
                    New creative challenges are always welcomed.
                  </p>
                </div>
                <div className="one-half column">
                  <img className="about-img" src={ aboutImg } />
                </div>
              </div>
            </article>
          </div>
        </section>
        <section>
          <h2>Currently Working On</h2>
          <article>
            <img src="http://placehold.it/350" alt="" />
            <img src="http://placehold.it/350" alt="" />
            <img src="http://placehold.it/350" alt="" />
            <img src="http://placehold.it/350" alt="" />
          </article>
        </section>
        <section>
          <h2>Let's Work Together</h2>
          <p>
            I am always looking to work on new exciting projects. Feel free to send me an email
            with some details about your project. I can’t wait to see what you’re working on.
          </p>
          <button>Contact Me</button>
        </section>
      </div>
    );
  }

};
