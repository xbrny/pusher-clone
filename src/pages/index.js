import React, { Component } from 'react';
import '../scss/main.scss';

class Index extends Component {
  componentDidMount() {
    // Get all "navbar-burger" elements
    const $navbarBurgers = Array.prototype.slice.call(
      document.querySelectorAll('.navbar-burger'),
      0
    );

    // Check if there are any navbar burgers
    if ($navbarBurgers.length > 0) {
      // Add a click event on each of them
      $navbarBurgers.forEach(el => {
        el.addEventListener('click', () => {
          // Get the target from the "data-target" attribute
          const target = el.dataset.target;
          const $target = document.getElementById(target);

          // Toggle the "is-active" class on both the "navbar-burger" and the "navbar-menu"
          el.classList.toggle('is-active');
          $target.classList.toggle('is-active');
        });
      });
    }
  }

  render() {
    return (
      <React.Fragment>
        <section className='has-background-primary padded py-1 has-text-weight-light'>
          <div className='container has-text-centered'>
            <a href='#' className='has-text-white'>
              <strong>Pusher Chatkit</strong> is out of beta! Build the in-app
              messaging experiences that matter to your users
            </a>
          </div>
        </section>

        <div className='navbar is-transparent'>
          <div className='container'>
            <div className='navbar-brand'>
              <a className='navbar-item' href='#'>
                <h1 className='navbar-logo'>
                  Pusher <span className='navbar-logo-tag'>Hiring</span>{' '}
                </h1>
              </a>
              <a
                role='button'
                className='navbar-burger burger'
                aria-label='menu'
                aria-expanded='false'
                data-target='mainNavbar'
              >
                <span aria-hidden='true' />
                <span aria-hidden='true' />
                <span aria-hidden='true' />
              </a>
            </div>
            <div
              className='navbar-menu'
              role='navigation'
              aria-label='navigation'
              id='mainNavbar'
            >
              <div className='navbar-start'>
                <div className='navbar-item has-dropdown is-hoverable'>
                  <a className='navbar-link'>Products</a>

                  <div className='navbar-dropdown is-boxed'>
                    <a href='#' className='navbar-item is-size-7'>
                      <span>
                        <span className='is-uppercase'>Chatkit</span>
                        <br />
                        <span className=' has-text-weight-normal'>
                          Build scalable realtime app
                        </span>
                      </span>
                    </a>
                    <hr className='navbar-divider' />
                    <a href='#' className='navbar-item is-size-7'>
                      <span>
                        <span className='is-uppercase'>Textsync</span>
                        <br />
                        <span className=' has-text-weight-normal'>
                          Send push notification to all
                        </span>
                      </span>
                    </a>
                    <hr className='navbar-divider' />
                    <a href='#' className='navbar-item is-size-7'>
                      <span>
                        <span className='is-uppercase'>Beam</span>
                        <br />
                        <span className=' has-text-weight-normal'>
                          Send push notification
                        </span>
                      </span>
                    </a>
                  </div>
                </div>
                <div className='navbar-item has-dropdown is-hoverable'>
                  <a className='navbar-link'>Developers</a>

                  <div className='navbar-dropdown is-boxed'>
                    <a href='#' className='navbar-item is-size-7'>
                      <span>
                        <span className='is-uppercase'>Chatkit</span>
                        <br />
                        <span className=' has-text-weight-normal'>
                          Build scalable realtime app
                        </span>
                      </span>
                    </a>
                    <hr className='navbar-divider' />
                    <a href='#' className='navbar-item is-size-7'>
                      <span>
                        <span className='is-uppercase'>Textsync</span>
                        <br />
                        <span className=' has-text-weight-normal'>
                          Send push notification to all
                        </span>
                      </span>
                    </a>
                    <hr className='navbar-divider' />
                    <a href='#' className='navbar-item is-size-7'>
                      <span>
                        <span className='is-uppercase'>Beam</span>
                        <br />
                        <span className=' has-text-weight-normal'>
                          Send push notification
                        </span>
                      </span>
                    </a>
                  </div>
                </div>
                <a href='#' className='navbar-item'>
                  Company
                </a>
              </div>
              <div className='navbar-end'>
                <div className='navbar-item'>
                  <div className='buttons'>
                    <button className='button is-primary is-inverted is-capitalized'>
                      Sign in
                    </button>
                    <button className='button is-primary is-capitalized'>
                      Sign Up
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <section className='section-home hero is-medium'>
          <div className='container has-text-centered'>
            <div className='hero-body'>
              <h1 className='title'>
                <div className='has-text-weight-normal is-capitalized mb-1'>
                  Hosted APIs To
                </div>
                <span className='is-size-1 is-uppercase'>
                  build realtime apps
                </span>
              </h1>

              <code className='section-home-code mb-4'>with less code</code>

              <div className='buttons section-home-buttons'>
                <button className='button is-primary'>Get free account</button>
                <button className='button is-primary is-inverted'>
                  Read the docs
                </button>
              </div>
            </div>
          </div>
        </section>

        <section className='section section-channels'>
          <div className='container'>
            <div className='box'>
              <div className='columns'>
                <div className='column card-title-column'>
                  <h2 className='title is-2 has-text-white'>
                    <span className='icon is-medium mr-2'>
                      <i className='fas fa-cubes' />
                    </span>
                    Channels
                  </h2>
                </div>
                <div className='column is-8'>
                  <h3 className='subtitle is-6 has-text-white'>
                    Easily build scalable in-app notifications, realtime graphs,
                    geotracking, multiplayer games, and more in your web and
                    mobile apps with our hosted pub/sub messaging API.
                  </h3>
                </div>
              </div>

              <div className='tabs is-size-7 has-text-weight-bold mb-0'>
                <ul>
                  <li>
                    <a href='/#'>PHP</a>
                  </li>
                  <li>
                    <a href='/#'>NODE</a>
                  </li>
                  <li>
                    <a href='/#'>RUBY</a>
                  </li>
                  <li>
                    <a href='/#'>ASP</a>
                  </li>
                  <li>
                    <a href='/#'>JAVA</a>
                  </li>
                  <li>
                    <a href='/#'>PYTHON</a>
                  </li>
                  <li>
                    <a href='/#'>GO</a>
                  </li>
                  <li className='ml-auto is-disabled'>
                    <span>PUBLISH</span>
                  </li>
                </ul>
              </div>
              <pre className='code-box mb-2'>
                <code>
                  pusher->trigger('my-channel', 'my-event', [ 'message' =>
                  'hello world' ]);
                </code>
              </pre>

              <div className='tabs is-size-7 has-text-weight-bold mb-0'>
                <ul>
                  <li>
                    <a href='/#'>PHP</a>
                  </li>
                  <li>
                    <a href='/#'>NODE</a>
                  </li>
                  <li>
                    <a href='/#'>RUBY</a>
                  </li>
                  <li>
                    <a href='/#'>ASP</a>
                  </li>
                  <li>
                    <a href='/#'>JAVA</a>
                  </li>
                  <li>
                    <a href='/#'>PYTHON</a>
                  </li>
                  <li>
                    <a href='/#'>GO</a>
                  </li>
                  <li className='ml-auto is-disabled'>
                    <span>PUBLISH</span>
                  </li>
                </ul>
              </div>
              <pre className='code-box mb-3'>
                <code>
                  pusher->trigger('my-channel', 'my-event', [ 'message' =>
                  'hello world' ]);
                </code>
              </pre>

              <div className='columns'>
                <div className='column'>
                  <ul>
                    <li className='mb-1'>
                      <span className='icon has-text-success'>
                        <i className='fas fa-check-double' />
                      </span>
                      40+ libraries. Works everywhere
                    </li>
                    <li className='mb-1'>
                      <span className='icon has-text-success'>
                        <i className='fas fa-check-double' />
                      </span>
                      Public, private and presence channels
                    </li>
                    <li className='mb-1'>
                      <span className='icon has-text-success'>
                        <i className='fas fa-check-double' />
                      </span>
                      Scale from 1 user to millions in a blink of an eye
                    </li>
                  </ul>
                </div>
                <div className='column ml-auto is-narrow is-clearfix has-text-right'>
                  <button className='button is-size-6 is-primary is-inverted mb-2'>
                    Explore channels
                  </button>
                  <br />
                  <a className='button is-text'>
                    <span>Pricing</span>
                    <span className='icon'>
                      <i className='fas fa-arrow-right' />
                    </span>
                  </a>
                </div>
              </div>
            </div>
            {/* box */}
          </div>
          {/* container */}
        </section>

        <section className='section section-products'>
          <div className='container'>
            <div className='columns is-multiline'>
              <div className='column is-6'>
                <div className='box'>
                  <h3 className='title has-text-white'>
                    <span className='icon is-medium mr-2 has-text-success'>
                      <i className='fas fa-share-alt-square' />
                    </span>
                    Beams
                  </h3>
                  <p className='has-text-weight-light'>
                    Send programmable push notifications to iOS and Android
                    devices with delivery and open rate tracking built in.
                  </p>
                  <a className='button is-text card-button-bottom'>
                    <span>Explore beams</span>
                    <span className='icon'>
                      <i className='fas fa-arrow-right' />
                    </span>
                  </a>
                </div>
              </div>

              {/* column */}
              <div className='column is-6'>
                <div className='box'>
                  <h3 className='title has-text-white'>
                    <span className='icon is-medium mr-2 has-text-success'>
                      <i className='fas fa-newspaper' />
                    </span>
                    Chatkit
                  </h3>
                  <p className='has-text-weight-light'>
                    Easily add 1-1 and group Chat to your web & mobile apps.
                    Presence, message storage, rich media, notifications, typing
                    indicators and more.
                  </p>
                  <a className='button is-text card-button-bottom'>
                    <span>Explore Chatkit</span>
                    <span className='icon'>
                      <i className='fas fa-arrow-right' />
                    </span>
                  </a>
                </div>
              </div>

              {/* column */}
              <div className='column is-6'>
                <div className='box'>
                  <h3 className='title has-text-white'>
                    <span className='icon is-medium mr-2 has-text-success'>
                      <i className='fab fa-quinscape' />
                    </span>
                    Feeds
                  </h3>
                  <p className='has-text-weight-light'>
                    Build activity and notification feeds, realtime charts and
                    maps, comment streams, and other realtime features that need
                    to store and replay data.
                  </p>
                  <a className='button is-text card-button-bottom'>
                    <span>Explore Feeds</span>
                    <span className='icon'>
                      <i className='fas fa-arrow-right' />
                    </span>
                  </a>
                </div>
              </div>

              {/* column */}
              <div className='column is-6'>
                <div className='box'>
                  <h3 className='title has-text-white'>
                    <span className='icon is-medium mr-2 has-text-success'>
                      <i className='fas fa-shapes' />
                    </span>
                    Textsync
                  </h3>
                  <p className='has-text-weight-light'>
                    Embed a realtime collaborative editor in your app in seconds
                    to empower your users to do more, together.
                  </p>
                  <a className='button is-text card-button-bottom'>
                    <span>Explore Textsync</span>
                    <span className='icon'>
                      <i className='fas fa-arrow-right' />
                    </span>
                  </a>
                </div>
              </div>
              {/* column */}
            </div>
            {/* columns */}
          </div>
          {/* container */}
        </section>

        <section className='section section-developers'>
          <div className='container'>
            <div className='columns mb-3'>
              <div className='column is-3'>
                <h2 className='title'>We love developers</h2>
                <button className='button is-text'>
                  <span>View the docs</span>
                  <span className='icon'>
                    <i className='fas fa-arrow-right' />
                  </span>
                </button>
              </div>
              <div className='column'>
                <div className='box is-light is-accented'>
                  <p className='mb-2'>
                    Pusher is the category leader in delightful APIs for app
                    developers building communication and collaboration
                    features.
                  </p>

                  <p className='mb-2'>
                    Developer experience is at the forefront of everything we
                    do. We strive to make products that are both delightful and
                    get out of your way, so that you can focus on what you do
                    best - building great apps.
                  </p>
                </div>
              </div>
              {/* column */}
            </div>
            {/* columns */}

            <div className='columns'>
              <div className='column has-text-centered'>
                <div className='box is-transparent'>
                  <span className='icon is-large has-text-success mb-1'>
                    <i className='fas fa-code fa-2x' />
                  </span>
                  <h3 className='title is-4 mb-2 has-text-weight-normal'>
                    40+ SDKS
                  </h3>
                  <p>We’ve got you covered - implement our APIs in any stack</p>
                </div>
              </div>

              <div className='column has-text-centered'>
                <div className='box is-transparent'>
                  <span className='icon is-large has-text-success mb-1'>
                    <i className='fas fa-swatchbook fa-2x' />
                  </span>
                  <h3 className='title is-4 mb-2 has-text-weight-normal'>
                    100+ TUTORIALS
                  </h3>
                  <p>
                    Tutorials to help you get started and implement our APIs
                  </p>
                </div>
              </div>

              <div className='column has-text-centered'>
                <div className='box is-transparent'>
                  <span className='icon is-large has-text-success mb-1'>
                    <i className='fas fa-cogs fa-2x' />
                  </span>
                  <h3 className='title is-4 mb-2 has-text-weight-normal'>
                    TOOLS & STATS
                  </h3>
                  <p>
                    Comprehensive tools and stats to give you visibility into
                    your usage
                  </p>
                </div>
              </div>
            </div>
            {/* columns */}
          </div>
          {/* container */}
        </section>

        <section className='section section-dev-testimonial'>
          <div className='container'>
            <div className='columns'>
              <div className='column is-7'>
                <h2 className='title'>
                  250,000 DEVELOPERS AND{' '}
                  <span className='has-text-success'>CODE.ORG</span> TRUST US -
                  YOU WILL TOO
                </h2>
              </div>
              {/* column */}
            </div>
            {/* columns */}

            <div className='box is-light'>
              <div className='columns'>
                <div className='column is-9'>
                  <p className='mb-2'>
                    “By powering a reliable realtime experience, Pusher allows
                    us to transform the way students learn about computer
                    networks, making it a fundamentally collaborative
                    experience.”
                  </p>
                  <span className='icon is-medium mr-1'>
                    <i className='fas fa-th-large fa-2x' />
                  </span>
                  <div className='is-inline-block'>
                    <h3 className='is-size-6'>Bradley Buchanan</h3>
                    <div className='subtitle is-7'>
                      Software Engineer, Code.org
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* container */}
        </section>

        <section className='section section-client'>
          <div className='container'>
            <div className='columns is-multiline has-text-centered'>
              <div className='column is-4'>
                <img
                  src='https://djmmlc8gcwtqv.cloudfront.net/imgs/global/brand-logos/invision.svg'
                  alt='client-logo'
                  width='250'
                />
              </div>
              <div className='column is-4'>
                <img
                  src='https://djmmlc8gcwtqv.cloudfront.net/imgs/global/brand-logos/financial-times.svg'
                  alt='client-logo'
                  width='250'
                />
              </div>
              <div className='column is-4'>
                <img
                  src='https://djmmlc8gcwtqv.cloudfront.net/imgs/global/brand-logos/github.svg'
                  alt='client-logo'
                  width='250'
                />
              </div>
              <div className='column is-4'>
                <img
                  src='https://djmmlc8gcwtqv.cloudfront.net/imgs/global/brand-logos/buffer.svg'
                  alt='client-logo'
                  width='250'
                />
              </div>
              <div className='column is-4'>
                <img
                  src='https://djmmlc8gcwtqv.cloudfront.net/imgs/global/brand-logos/datadog.svg'
                  alt='client-logo'
                  width='250'
                />
              </div>
              <div className='column is-4'>
                <img
                  src='https://djmmlc8gcwtqv.cloudfront.net/imgs/global/brand-logos/invision.svg'
                  alt='client-logo'
                  width='250'
                />
              </div>
              {/* column */}
            </div>
            {/* columns */}
          </div>
          {/* container */}
        </section>

        <section className='section section-get-started'>
          <div className='container'>
            <div className='box'>
              <div className='columns'>
                <div className='column is-9'>
                  <h3 className='title has-text-white'>
                    GET STARTED WITH OUR APIS, FOR FREE
                  </h3>
                  <p className='mb-3'>
                    Our APIs are free to try and all come with a generous
                    forever free plan. They’re fast and easy to set up, and if
                    you need help, support is just one click away.
                  </p>
                  <button className='button is-primary is-inverted is-size-6'>
                    Get free account
                  </button>
                </div>
              </div>
            </div>
            {/* box */}
          </div>
          {/* container */}
        </section>

        <footer className='section pt-4 pb-2'>
          <div className='container'>
            <div className='columns is-multiline'>
              <div className='column'>
                <h1 className='title is-5 mb-1'>PRODUCTS</h1>
                <ul className='footer-list'>
                  <li>
                    <a href='#'>Channels</a>
                  </li>
                  <li>
                    <a href='#'>Beams</a>
                  </li>
                  <li>
                    <a href='#'>Chatkit</a>
                  </li>
                  <li>
                    <a href='#'>Feeds</a>
                  </li>
                  <li>
                    <a href='#'>Textsync</a>
                  </li>
                </ul>
              </div>

              <div className='column'>
                <h1 className='title is-5 mb-1'>DEVELOPERS</h1>
                <ul className='footer-list'>
                  <li>
                    <a href='#'>Docs</a>
                  </li>
                  <li>
                    <a href='#'>Uptime & status</a>
                  </li>
                  <li>
                    <a href='#'>Support</a>
                  </li>
                  <li>
                    <a href='#'>Tutorials</a>
                  </li>
                  <li>
                    <a href='#'>Sessions</a>
                  </li>
                </ul>
              </div>

              <div className='column'>
                <h1 className='title is-5 mb-1'>COMPANY</h1>
                <ul className='footer-list'>
                  <li>
                    <a href='#'>Careers</a>
                  </li>
                  <li>
                    <a href='#'>Blog</a>
                  </li>
                  <li>
                    <a href='#'>Press</a>
                  </li>
                </ul>
              </div>

              <div className='column'>
                <h1 className='title is-5 mb-1'>OTHER</h1>
                <ul className='footer-list'>
                  <li>
                    <a href='#'>Contact sales</a>
                  </li>
                  <li>
                    <a href='#'>Terms & conditions</a>
                  </li>
                  <li>
                    <a href='#'>Security</a>
                  </li>
                </ul>
              </div>

              <div className='column'>
                <h1 className='title is-5 mb-1'>CONNECT</h1>
                <ul className='footer-list'>
                  <li>
                    <a href='#'>Twitter</a>
                  </li>
                  <li>
                    <a href='#'>Medium</a>
                  </li>
                  <li>
                    <a href='#'>YouTube</a>
                  </li>
                  <li>
                    <a href='#'>LinkedIn</a>
                  </li>
                  <li>
                    <a href='#'>Github</a>
                  </li>
                </ul>
              </div>

              <div className='column is-full'>
                <p className="is-size-7">
                  © 2019 Clone of <a href="https://pusher.com/">Pusher</a>.<br />
                  Made using Gatsby, Sass, bulma by Bani
                </p>
              </div>
            </div>
            {/* columns */}
          </div>
          {/* container */}
        </footer>
      </React.Fragment>
    );
  }
}
export default Index;
