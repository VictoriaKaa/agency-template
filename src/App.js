import React from 'react';
import { Route, HashRouter } from "react-router-dom";
import store from './components/redux/store';
import { Provider } from "react-redux";
import Navbar from './components/Navbar/Navbar';
import ArticlesContainer from './components/Articles/ArticlesContainer';
import AboutContainer from './components/About/AboutContainer';
import GalleryContainer from './components/Gallery/GalleryContainer';
import ServicesContainer from './components/Services/ServicesContainer';
import ContactsContainer from './components/Contacts/ContactsContainer';
import WorkPage from './components/Gallery/WorkPage/WorkPage';
import StartPage from './components/StartPage/StartPage';
import './fonts/fonts.css';


const App = (props) => {
  
  return (
    <Provider store={store}>
      <HashRouter>  {/* hashrouter используется для github pages */}
        <div className='app-wrapper'>
          <Navbar />
          <div className='app-wrapper-content'>
            <Route exact path='/' render={() => <StartPage />} />
            <Route path='/about' render={() => <AboutContainer />} />
            <Route path='/articles' render={() => <ArticlesContainer />} />
            <Route exact path='/gallery' render={() => <GalleryContainer />} />
            <Route exact path='/gallery/page' render={ (props) =>  <WorkPage {...props} /> } />
            <Route path='/services' render={() => <ServicesContainer />} />
            <Route path='/contacts' render={() => <ContactsContainer />} />
          </div>
        </div>
      </HashRouter>

    </Provider>);
}

export default App;
