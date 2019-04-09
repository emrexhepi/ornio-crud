import React, { Component } from 'react';
import { connect } from 'react-redux';
import './App.css';

// import router
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';

// import Layout
import MainLayout from './Layouts/Main/MainLayout';

// import pages
import LoginPage from './Pages/Login/LoginPage';
import RegisterPage from './Pages/Register/RegisterPage';
import DashboardPage from './Pages/Dashboard/DashboardPage';

// import actions
import { initUser } from './actions/userActions';

class App extends Component {
  componentWillMount(){
    this.props.initUser();
  }
  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <MainLayout>
            <Switch>
              <Route path="/login" component={LoginPage} />
              <Route path="/register" component={RegisterPage} />
              <Route path="/dashboard" component={DashboardPage} />
              <Route exact path="/*" render={
                () => {
                  return <Redirect to="/login" />
                }
              }/>
            </Switch>
          </MainLayout>
        </div>
      </BrowserRouter>
    );
  }
}

const mapStateToProps = (state) => ({
  token: state.user.token
});

const mapDispatchToProps = (dispatch) => ({
  initUser: () => dispatch(initUser())
})

export default connect(mapStateToProps, mapDispatchToProps)(App);
