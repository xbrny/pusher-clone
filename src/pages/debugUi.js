import React from 'react';

const DebugUi = () => (
  <div className='container section'>
    <section>
      <h1
        className='title is-3 has-text-primary'
        style={{ margin: '2rem 0', borderBottom: '4px dotted #00d1b2' }}
      >
        Title and subtitle
      </h1>
      <h1 className='title is-1'>Title 1</h1>
      <h2 className='title is-2'>Title 2</h2>
      <h3 className='title is-3'>Title 3</h3>
      <h4 className='title is-4'>Title 4</h4>
      <h5 className='title is-5'>Title 5</h5>
      <h6 className='title is-6'>Title 6</h6>

      <h1 className='subtitle is-1'>Subtitle 1</h1>
      <h2 className='subtitle is-2'>Subtitle 2</h2>
      <h3 className='subtitle is-3'>Subtitle 3</h3>
      <h4 className='subtitle is-4'>Subtitle 4</h4>
      <h5 className='subtitle is-5'>Subtitle 5</h5>
      <h6 className='subtitle is-6'>Subtitle 6</h6>
    </section>

    <section>
      <h1
        className='title is-3 has-text-primary'
        style={{ margin: '2rem 0', borderBottom: '4px dotted #00d1b2' }}
      >
        Paragraph
      </h1>
      <p>
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Velit officiis
        veritatis ipsam beatae qui cum nostrum explicabo, sequi possimus enim,
        quod porro quibusdam quaerat placeat! Molestiae, eius alias recusandae
        non sapiente consequatur mollitia, repudiandae est numquam, dolor
        distinctio ratione <a href='#'>Link testing</a>.
      </p>

      <p>
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Rem quis
        repudiandae sapiente fugit beatae exercitationem impedit, iste maxime!
        Ullam inventore nemo deserunt necessitatibus! Aspernatur possimus dolor
        provident sed quidem nostrum nemo, placeat laudantium cupiditate
        accusantium sit itaque numquam sint eligendi similique animi assumenda
        iusto dignissimos rerum nesciunt neque? Nihil eum asperiores ea
        voluptatem optio soluta saepe numquam unde necessitatibus{' '}
        <a href='#'>Link testing</a>.
      </p>
    </section>

    <section>
      <h1
        className='title is-3 has-text-primary'
        style={{ margin: '2rem 0', borderBottom: '4px dotted #00d1b2' }}
      >
        Box
      </h1>
      <div className='box'>Some box</div>
    </section>

    <section>
      <h1
        className='title is-3 has-text-primary'
        style={{ margin: '2rem 0', borderBottom: '4px dotted #00d1b2' }}
      >
        Button
      </h1>
      <a className='button is-white'>White</a>
      <a className='button is-light'>Light</a>{' '}
      <a className='button is-dark'>Dark</a>
      <a className='button is-black'>Black</a>{' '}
      <a className='button is-text'>Text</a>
      <hr />
      <a className='button'>Default</a>{' '}
      <a className='button is-primary'>Primary</a>
      <a className='button is-link'>Link</a>{' '}
      <a className='button is-info'>Info</a>
      <a className='button is-success'>Success</a>
      <a className='button is-warning'>Warning</a>
      <a className='button is-danger'>Danger</a>
      <hr />
      <a className='button is-primary is-small'>Small</a>
      <a className='button is-primary'>Default</a>
      <a className='button is-primary is-normal'>Normal</a>
      <a className='button is-primary is-medium'>Medium</a>
      <a className='button is-primary is-large'>Large</a>
      <hr />
      <a className='button is-primary is-outlined'>Outlined</a>
      <a className='button is-primary is-inverted'>Inverted</a>
      <a className='button is-primary is-rounded'>Rounded</a>
      <hr />
      <a className='button is-primary'>Normal</a>
      <a className='button is-primary is-hovered'>Hover</a>
      <a className='button is-primary is-focused'>Focus</a>
      <a className='button is-primary is-active'>Active</a>
      <a className='button is-primary is-loading'>Loading</a>
      <a className='button is-primary' title='Disabled button' disabled>
        Disabled
      </a>
    </section>

    <section>
      <h1
        className='title is-3 has-text-primary'
        style={{ margin: '2rem 0', borderBottom: '4px dotted #00d1b2' }}
      >
        Notification
      </h1>
      <div className='notification'>
        <button className='delete' /> Lorem ipsum dolor sit amet, consectetur
        adipiscing elit lorem ipsum dolor.
        <strong>Pellentesque risus mi</strong>, tempus quis placerat ut, porta
        nec nulla. Vestibulum rhoncus ac ex sit amet fringilla. Nullam gravida
        purus diam, et dictum <a>felis venenatis</a> efficitur. Sit amet,
        consectetur adipiscing elit
      </div>
    </section>

    <section>
      <h1
        className='title is-3 has-text-primary'
        style={{ margin: '2rem 0', borderBottom: '4px dotted #00d1b2' }}
      >
        Table
      </h1>
      <table className='table is-bordered is-striped is-hoverable is-fullwidth'>
        <thead>
          <tr>
            <th>One</th>
            <th>Two</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Three</td>
            <td>Four</td>
          </tr>
          <tr>
            <td>Five</td>
            <td>Six</td>
          </tr>
          <tr>
            <td>Seven</td>
            <td>Eight</td>
          </tr>
          <tr>
            <td>Nine</td>
            <td>Ten</td>
          </tr>
          <tr>
            <td>Eleven</td>
            <td>Twelve</td>
          </tr>
        </tbody>
      </table>
    </section>

    <section>
      <h1
        className='title is-3 has-text-primary'
        style={{ margin: '2rem 0', borderBottom: '4px dotted #00d1b2' }}
      >
        Breadcrumbs
      </h1>
      <nav className='breadcrumb' aria-label='breadcrumbs'>
        <ul>
          <li>
            <a href='#'>Bulma</a>
          </li>
          <li>
            <a href='#'>Documentation</a>
          </li>
          <li>
            <a href='#'>Components</a>
          </li>
          <li className='is-active'>
            <a href='#' aria-current='page'>
              Breadcrumb
            </a>
          </li>
        </ul>
      </nav>
    </section>

    <section>
      <h1
        className='title is-3 has-text-primary'
        style={{ margin: '2rem 0', borderBottom: '4px dotted #00d1b2' }}
      >
        Card
      </h1>

      <div className='columns'>
        <div className='column'>
          <div className='card'>
            <div className='card-image'>
              <figure className='image'>
                <img
                  src='https://via.placeholder.com/300'
                  alt='Some placeholder'
                />
              </figure>
            </div>
            <div className='card-header'>
              <p className='card-header-title'>Header title</p>
            </div>
            <div className='card-content'>
              <div className='content'>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Phasellus nec iaculis mauris. <a>@bulmaio</a>.
              </div>
            </div>
            <div className='card-footer'>
              <div className='card-footer-item'>Some footer item</div>
            </div>
          </div>
        </div>

        <div className='column'>
          <div className='card is-light'>
            <div className='card-image'>
              <figure className='image'>
                <img
                  src='https://via.placeholder.com/300'
                  alt='Some placeholder'
                />
              </figure>
            </div>
            <div className='card-header'>
              <p className='card-header-title'>Header title</p>
            </div>
            <div className='card-content'>
              <div className='content'>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Phasellus nec iaculis mauris. <a>@bulmaio</a>.
              </div>
            </div>
            <div className='card-footer'>
              <div className='card-footer-item'>Some footer item</div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section>
      <h1
        className='title is-3 has-text-primary'
        style={{ margin: '2rem 0', borderBottom: '4px dotted #00d1b2' }}
      >
        Message
      </h1>

      <article className='message is-primary'>
        <div className='message-body'>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          <strong>Pellentesque risus mi</strong>, tempus quis placerat ut, porta
          nec nulla. Vestibulum rhoncus ac ex sit amet fringilla. Nullam gravida
          purus diam, et dictum <a>felis venenatis</a> efficitur. Aenean ac{' '}
          <em>eleifend lacus</em>, in mollis lectus. Donec sodales, arcu et
          sollicitudin porttitor, tortor urna tempor ligula, id porttitor mi
          magna a neque. Donec dui urna, vehicula et sem eget, facilisis sodales
          sem.
        </div>
      </article>
    </section>

    <section>
      <h1
        className='title is-3 has-text-primary'
        style={{ margin: '2rem 0', borderBottom: '4px dotted #00d1b2' }}
      >
        Modal card
      </h1>

      <div className='modal'>
        <div className='modal-background' />
        <div className='modal-card'>
          <header className='modal-card-head'>
            <p className='modal-card-title'>Modal title</p>
            <button className='delete' aria-label='close' />
          </header>
          <section className='modal-card-body' />
          <footer className='modal-card-foot'>
            <button className='button is-success'>Save changes</button>
            <button className='button'>Cancel</button>
          </footer>
        </div>
      </div>
    </section>

    <section>
      <h1
        className='title is-3 has-text-primary'
        style={{ margin: '2rem 0', borderBottom: '4px dotted #00d1b2' }}
      >
        Navbar
      </h1>

      <nav className='navbar' role='navigation' aria-label='main navigation'>
        <div className='navbar-brand'>
          <a className='navbar-item' href='https://bulma.io'>
            <img
              src='https://bulma.io/images/bulma-logo.png'
              width='112'
              height='28'
            />
          </a>

          <a
            role='button'
            className='navbar-burger burger'
            aria-label='menu'
            aria-expanded='false'
            data-target='navbarBasicExample'
          >
            <span aria-hidden='true' /> <span aria-hidden='true' />
            <span aria-hidden='true' />
          </a>
        </div>

        <div id='navbarBasicExample' className='navbar-menu'>
          <div className='navbar-start'>
            <a className='navbar-item'> Home </a>

            <a className='navbar-item'> Documentation </a>

            <div className='navbar-item has-dropdown is-hoverable'>
              <a className='navbar-link'> More </a>

              <div className='navbar-dropdown'>
                <a className='navbar-item'> About </a>
                <a className='navbar-item'> Jobs </a>
                <a className='navbar-item'> Contact </a>
                <hr className='navbar-divider' />
                <a className='navbar-item'> Report an issue </a>
              </div>
            </div>
          </div>

          <div className='navbar-end'>
            <div className='navbar-item'>
              <div className='buttons'>
                <a className='button is-primary'>
                  {' '}
                  <strong>Sign up</strong>{' '}
                </a>
                <a className='button is-light'> Log in </a>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </section>

    <section>
      <h1
        className='title is-3 has-text-primary'
        style={{ margin: '2rem 0', borderBottom: '4px dotted #00d1b2' }}
      >
        Pagination
      </h1>

      <nav className='pagination' role='navigation' aria-label='pagination'>
        <a className='pagination-previous'>Previous</a>
        <a className='pagination-next'>Next page</a>
        <ul className='pagination-list'>
          <li>
            <a className='pagination-link' aria-label='Goto page 1'>
              1
            </a>
          </li>
          <li>
            <span className='pagination-ellipsis'>&hellip;</span>
          </li>
          <li>
            <a className='pagination-link' aria-label='Goto page 45'>
              45
            </a>
          </li>
          <li>
            <a
              className='pagination-link is-current'
              aria-label='Page 46'
              aria-current='page'
            >
              46
            </a>
          </li>
          <li>
            <a className='pagination-link' aria-label='Goto page 47'>
              47
            </a>
          </li>
          <li>
            <span className='pagination-ellipsis'>&hellip;</span>
          </li>
          <li>
            <a className='pagination-link' aria-label='Goto page 86'>
              86
            </a>
          </li>
        </ul>
      </nav>
    </section>

    <section>
      <h1
        className='title is-3 has-text-primary'
        style={{ margin: '2rem 0', borderBottom: '4px dotted #00d1b2' }}
      >
        Panel
      </h1>
      <nav className='panel'>
        <p className='panel-heading'>repositories</p>
        <div className='panel-block'>
          <p className='control has-icons-left'>
            <input
              className='input is-small'
              type='text'
              placeholder='search'
            />
            <span className='icon is-small is-left'>
              <i className='fas fa-search' aria-hidden='true' />
            </span>
          </p>
        </div>
        <p className='panel-tabs'>
          <a className='is-active'>all</a> <a>public</a> <a>private</a>
          <a>sources</a> <a>forks</a>
        </p>
        <a className='panel-block is-active'>
          <span className='panel-icon'>
            <i className='fas fa-book' aria-hidden='true' />
          </span>
          bulma
        </a>
        <a className='panel-block'>
          <span className='panel-icon'>
            <i className='fas fa-book' aria-hidden='true' />
          </span>
          marksheet
        </a>
        <a className='panel-block'>
          <span className='panel-icon'>
            <i className='fas fa-book' aria-hidden='true' />
          </span>
          minireset.css
        </a>
        <a className='panel-block'>
          <span className='panel-icon'>
            <i className='fas fa-book' aria-hidden='true' />
          </span>
          jgthms.github.io
        </a>
        <a className='panel-block'>
          <span className='panel-icon'>
            <i className='fas fa-code-branch' aria-hidden='true' />
          </span>
          daniellowtw/infboard
        </a>
        <a className='panel-block'>
          <span className='panel-icon'>
            <i className='fas fa-code-branch' aria-hidden='true' />
          </span>
          mojs
        </a>
        <label className='panel-block'>
          <input type='checkbox' /> remember me
        </label>
        <div className='panel-block'>
          <button className='button is-link is-outlined is-fullwidth'>
            reset all filters
          </button>
        </div>
      </nav>
    </section>

    <section>
      <h1
        className='title is-3 has-text-primary'
        style={{ margin: '2rem 0', borderBottom: '4px dotted #00d1b2' }}
      >
        Tabs
      </h1>

      <div className='tabs'>
        <ul>
          <li className='is-active'>
            <a>Pictures</a>
          </li>
          <li>
            <a>Music</a>
          </li>
          <li>
            <a>Videos</a>
          </li>
          <li>
            <a>Documents</a>
          </li>
        </ul>
      </div>
    </section>

    <section>
      <h1
        className='title is-3 has-text-primary'
        style={{ margin: '2rem 0', borderBottom: '4px dotted #00d1b2' }}
      >
        Form
      </h1>

      <div className='field'>
        <label className='label'>Name</label>
        <div className='control'>
          <input className='input' type='text' placeholder='Text input' />
        </div>
      </div>

      <div className='field'>
        <label className='label'>Username</label>
        <div className='control has-icons-left has-icons-right'>
          <input
            className='input is-success'
            type='text'
            placeholder='Text input'
            value='bulma'
          />
          <span className='icon is-small is-left'>
            <i className='fas fa-user' />
          </span>
          <span className='icon is-small is-right'>
            <i className='fas fa-check' />
          </span>
        </div>
        <p className='help is-success'>This username is available</p>
      </div>

      <div className='field'>
        <label className='label'>Email</label>
        <div className='control has-icons-left has-icons-right'>
          <input
            className='input is-danger'
            type='email'
            placeholder='Email input'
            value='hello@'
          />
          <span className='icon is-small is-left'>
            <i className='fas fa-envelope' />
          </span>
          <span className='icon is-small is-right'>
            <i className='fas fa-exclamation-triangle' />
          </span>
        </div>
        <p className='help is-danger'>This email is invalid</p>
      </div>

      <div className='field'>
        <label className='label'>Subject</label>
        <div className='control'>
          <div className='select'>
            <select>
              <option>Select dropdown</option>
              <option>With options</option>
            </select>
          </div>
        </div>
      </div>

      <div className='field'>
        <label className='label'>Message</label>
        <div className='control'>
          <textarea className='textarea' placeholder='Textarea' />
        </div>
      </div>

      <div className='field'>
        <div className='control'>
          <label className='checkbox'>
            <input type='checkbox' /> I agree to the
            <a href='#'>terms and conditions</a>
          </label>
        </div>
      </div>

      <div className='field'>
        <div className='control'>
          <label className='radio'>
            <input type='radio' name='question' /> Yes
          </label>
          <label className='radio'>
            <input type='radio' name='question' /> No
          </label>
        </div>
      </div>

      <div className='field has-addons'>
        <div className='control is-expanded'>
          <input
            className='input'
            type='text'
            placeholder='Find a repository'
          />
        </div>
        <div className='control'>
          <a className='button is-info'> Search </a>
        </div>
      </div>

      <div className='field'>
        <div className='file'>
          <label className='file-label'>
            <input className='file-input' type='file' name='resume' />
            <span className='file-cta'>
              <span className='file-icon'>
                {' '}
                <i className='fas fa-upload' />{' '}
              </span>
              <span className='file-label'> Choose a file… </span>
            </span>
          </label>
        </div>
      </div>

      <div className='field is-grouped'>
        <div className='control'>
          <button className='button is-link'>Submit</button>
        </div>
        <div className='control'>
          <button className='button is-text'>Cancel</button>
        </div>
      </div>
    </section>
  </div>
);

export default DebugUi;
