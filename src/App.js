import React, { Component } from 'react';
import { connect } from 'react-redux';
import './App.css';

// import Layout
import MainLayout from './Layouts/Main/MainLayout';

// import pages
import LoginPage from './Pages/Login/LoginPage';
import RegisterPage from './Pages/Register/RegisterPage';
import Dashboard from './Pages/Dashboard/DashboardPage';

class App extends Component {
  render() {
    return (
      <div className="App">
        <MainLayout>
          <LoginPage />
          <RegisterPage />
          <Dashboard />
        </MainLayout>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({

});

const mapDispatchToProps = (dispatch) => ({

})

export default connect(mapStateToProps, mapDispatchToProps)(App);
