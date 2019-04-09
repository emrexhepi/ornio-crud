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

class App extends Component {
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

});

const mapDispatchToProps = (dispatch) => ({

})

export default connect(mapStateToProps, mapDispatchToProps)(App);
