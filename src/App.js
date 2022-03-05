import React, { Suspense } from 'react';
import { Component } from "react";
import { connect } from "react-redux";
import { Route, withRouter } from "react-router";
import { compose } from "redux";
import "./App.css";
import Preloader from "./components/common/Preloader/Preloader";
import HeaderContainer from "./components/Header/HeaderContainer";
import LoginPage from "./components/Login/Login";
import Music from "./components/Music/Music";
import Navbar from "./components/Navbar/Navbar";
import News from "./components/News/News";
import Settings from "./components/Settings/Settings";
import UsersContainer from "./components/Users/UsersContainer";
import {initializeApp} from "./redux/app-reducer"
import store from './redux/redux-store';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';

const DialogsContainer = React.lazy(() => import('./components/Dialogs/DialogsContainer'));
const ProfileContainer = React.lazy(() => import('.//components/Profile/ProfileContainer'));


class App extends Component {

  componentDidMount() {
    this.props.initializeApp();
  }

  render() {

  if (!this.props.initialized) {
    return <Preloader/>  
  }
  return (
   
      <div className="app-wrapper">
        <HeaderContainer />

        <Navbar />

        <div className="app-wrapper-content">  
          <Suspense fallback={<Preloader />}>
            <Route path='/profile/:userId?'
              render={() => <ProfileContainer />} />
            <Route path='/dialogs'
              render={() => <DialogsContainer />} />
          </Suspense>
          <Route path='/users'
            render={() => <UsersContainer />} />
          <Route path='/login'
            render={() => <LoginPage />} />
          <Route path='/news' component={News} />
          <Route path='/music' component={Music} />
          <Route path='/settings' component={Settings} />
        </div>
      </div>
  )
  }
}

const mapStateToProps = (state) => ({
  initialized: state.app.initialized
})


let AppContainer = compose(
   withRouter,
   connect(mapStateToProps, {initializeApp})) (App);

const SamuraiJSApp = (props) => {
  return <BrowserRouter basename={process.env.PUBLIC_URL}>
    <Provider store={store}>
      <AppContainer/>
    </Provider>
  </BrowserRouter>
}

export default SamuraiJSApp;
