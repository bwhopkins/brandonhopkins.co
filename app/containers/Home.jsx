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
            <h1>Quality Branding & Illustration That Speak Volumes</h1>
            <p>New Site Launcing Soon</p>
          </div>
        </section>
        <section>
          <div>
            <div>
              <h3>Hi I'm Brandon Hopkins</h3>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium assumenda
                at commodi deleniti eius eligendi, et fuga incidunt ipsa itaque iure minus
                perspiciatis quas, quia quidem ratione repellat veniam voluptatibus!
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
