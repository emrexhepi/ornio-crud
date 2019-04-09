import React, { Component } from 'react';
import { connect } from 'react-redux';

import { withRouter } from 'react-router-dom' ;

// import layout
import DashboardLayout from '../../Layouts/Dashboard/DashboardLayout';

// import components
import FullPageLoading from './../../Components/FullPageLoading/FullPageLoadingComponent';
import EventList from './../../Components/EventsList/EventListComponent';
import PlusBtn from './../../Components/PlusBtn/PlusBtn';
import CreateEventModal from '../../Components/CreateEventModal/CreateEventModal';

// import actions
import {
  getMe
} from './../../actions/userActions';
import {
  getEventTypes,
  getEventMethods,
  getAllEvents,
  createEvent,
  deleteEvent
} from '../../actions/eventActions';

import {
  Container,
} from 'react-bootstrap';

// import styles
import styles from './DashboardPage.module.scss';

class DashboardPage extends Component {

  constructor(props) {
    super(props);
    this.state = {
      showModal: false
    }
  }

  componentDidMount(){
    if(!this.props.token) {
      this.props.history.push(`/login`);
    }
    this.props.getMe();
    this.props.getAllEvents();
    this.props.getEventTypes();
    this.props.getEventMethods();
  }

  toggleModal = () => {
    if(this.state.showModal) {
      this.setState({
        showModal: false
      })
    }
    if(!this.state.showModal) {
      this.setState({
        showModal: true
      })
    }
  }

  handleCreateEvent = (event) => {
    this.props.createEvent(event, (response)=>{
      console.log(response);
      if(response.success) {
        this.setState({
          showModal: false
        });
        this.props.getAllEvents();
      } else {
        alert("Something went wrong!");
      }
    });
  }

  handleDeleteEvent = (id) => {
    this.props.deleteEvent(id, (response)=> {
      if(response.success) {
        this.props.getAllEvents();
      }
    });
  }

  render() {
    return (
      <>
        {
          this.props.user ?
            <DashboardLayout>
              <CreateEventModal
                showModal={this.state.showModal}
                handleCreateEvent={this.handleCreateEvent}
                toggle={this.toggleModal}
                eventTypes={this.props.eventTypes}
                eventMethods={this.props.eventMethods}
              />
              <div className={styles.AddButtonRoot}>
                <Container>
                    <PlusBtn handleClick={this.toggleModal} />
                </Container>
              </div>

              {
                this.props && this.props.eventList && 
                  <EventList
                    list={this.props.eventList}
                    handleDelete={this.handleDeleteEvent}
                  />
              }
            </DashboardLayout>
            : <FullPageLoading />
        }
      </>
    );
  }
}

const mapStateToProps = (state) => ({
  token: state.user.token,
  user: state.user.details,
  eventTypes: state.events && state.events.eventTypes,
  eventMethods: state.events && state.events.eventMethods,
  eventList: state.events && state.events.list
})

const mapDispatchToProps = (dispatch) => ({
  getMe: ()=> dispatch(getMe()),
  getAllEvents: ()=> dispatch(getAllEvents()),
  getEventTypes: ()=> dispatch(getEventTypes()),
  getEventMethods: ()=> dispatch(getEventMethods()),
  createEvent: (event, callback)=> dispatch(createEvent(event, callback)),
  deleteEvent: (id, callback) => dispatch(deleteEvent(id, callback))
})

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(DashboardPage));