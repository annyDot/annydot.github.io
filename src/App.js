import React, { useState} from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
} from 'react-router-dom';

//components

import Home from './pages/home';
import Diary from './pages/diary';
import Articles from './pages/articles';
import PopCult from './pages/articles-popculture';
import Programming from './pages/articles-programming';
import Portfolio from './pages/portfolio';
import About from './pages/about';
import Footer from './components/footer';

//icons
import { Icon } from '@iconify/react';
import firstQuarterMoonFace from '@iconify/icons-emojione-v1/first-quarter-moon-face';
import sunwithfaceIcon from '@iconify/icons-fxemoji/sunwithface';

//assets
import logo from './pages/assets/logo.png';

//styles
import './styles.css';

export default function App() {

    const [sun, setSun] = useState(false)
    const handleToggle = () => {
      setSun(prev => !prev)
    }
    
    const [darkTheme, setDark] = useState(false)
    const setDarkTheme = () => {setDark(prevTheme => !prevTheme)}

  return (

    <Router>
      <>
        <div className={darkTheme ? 'dark-theme' : 'light-theme'}>
          
          <nav>
     
              <button onClick={() => { handleToggle(); setDarkTheme();}}>
                {sun ? (
                <Icon className='themeToggle' icon={sunwithfaceIcon} style={{fontSize: '32px'}} />
                ) : (
                <Icon className='themeToggle' icon={firstQuarterMoonFace} style={{fontSize: '32px'}} />
                )}
              </button>

              <div className="logo">
                <Link to="/"><img src={logo} alt='logo' width='90px' height='110px'/></Link>  
              </div>
              
              <div className="menuItems">
                <Link className='item' to='/diary'>Diary</Link>
                <Link className='item' to='/articles'>Articles</Link>
                <Link className='item' to='/portfolio'>Portfolio</Link>
                <Link className='item' to='/about'>About</Link>
              </div>

              <button className='desktopThemeToggle' onClick={() => { handleToggle(); setDarkTheme();}}>
                {sun ? (
                <Icon className='themeToggle' icon={sunwithfaceIcon} style={{fontSize: '32px'}} />
                ) : (
                <Icon className='themeToggle' icon={firstQuarterMoonFace} style={{fontSize: '32px'}} />
                )}
              </button>

          </nav>
       

    { /* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */ }

          <Switch>

            <Route path='/diary'>
              <Diary />
            </Route>

            <Route path='/articles'>
              <Articles />
            </Route>

            <Route path='/articles-popculture'>
              <PopCult />
            </Route>

            <Route path='/articles-programming'>
              <Programming />
            </Route>

            <Route path='/portfolio'>
              <Portfolio />
            </Route>
            
            <Route path='/about'>
              <About />
            </Route>

            <Route>
              <Home />
            </Route>

          </Switch>

          <Footer/>

        </div>

      </>
   </Router>

  );
}


 /* - home is at the end of the router and IN switch so if no path (previous links) is loaded,
   it loads the one without defined path (home)
   - without switch router would load every component with or without path, but with switch 
   just the 1st one loads and the other ones don't  
*/