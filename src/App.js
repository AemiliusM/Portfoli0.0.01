import './App.css';
import { BrowserRouter, Link } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <div className='App'>
        <header>
          <span id='welcome'>Welcome to my portfolio</span>
        </header>

        <section className='body-section'>
          <div>
            <span id='name'> Aemilius Morgan </span>
            <span id='bio'> A bunch of stuff about me </span>
          </div>

          <div className='thoughts'>
            <figure className='blob'>
              <Link
                id='git-hub'
                to={{ pathname: 'https://github.com/AemiliusM' }}
                target='_blank'
              >
                GitHub
              </Link>
            </figure>
            <figure className='blob'>
              <span className='shadow' />
              <Link
                id='resume'
                to={{
                  pathname:
                    'https://www.canva.com/design/DAEuWdsiXA4/tiFdMbFtzUmalsbHlROHQA/view?utm_content=DAEuWdsiXA4&utm_campaign=designshare&utm_medium=link&utm_source=sharebutton',
                }}
                target='_blank'
              >
                Resume
              </Link>
            </figure>
            <figure className='blob'>1</figure>
            <figure className='blob'>2</figure>
            <figure className='blob'>3</figure>
            <figure className='blob'>4</figure>
            <figure className='blob'>5</figure>
            <figure className='blob'>6</figure>
            <figure className='blob'>7</figure>
            <figure className='blob'>8</figure>
          </div>
        </section>
      </div>
    </BrowserRouter>
  );
}

export default App;
