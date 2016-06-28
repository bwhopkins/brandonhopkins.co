import React from 'react';
import classNames from 'classnames/bind';
import styles from 'css/components/home';

const cx = classNames.bind(styles);

/*
 * Note: This is kept as a container-level component, 
 *  i.e. We should keep this as the container that does the data-fetching 
 *  and dispatching of actions if you decide to have any sub-components.
 */
export default class Home extends React.Component {

  render() {
    return (
      <div className={cx('home')}>
        <section>
          <div>
            <h1>Quality Branding & Illustration That Speaks Volumes</h1>
            <p>New Site Launching Soon</p>
          </div>
        </section>
        <section>
          <div>
            <div>
              <h3>Hi I'm Brandon Hopkins</h3>
              <p>
                Visual communication empowers a story in a way words just are not capable of doing.
                Allowing your voice to bridge language, age, and comprehensive gaps to more deeply
                impact the world.
                <br />
                Challenges I have solved include; branding companies in the
                fields of tech, construction, financial planning, and boutique companies,
                illustrating for clothing lines, artwork for skate decks, infographic and
                communications pieces.
                <br />
                The reach of visual design does not stop at the aforementioned list.
                New creative challenges are always welcomed.
              </p>
              <img src="http://placehold.it/460x250" alt="" />
            </div>
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
