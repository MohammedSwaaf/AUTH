import React, { Component } from 'react';
import './App.css';
import Wrapper from './Components/Home/Home';
// import { BrowserRouter, Route } from 'react-router-dom';
import { withRouter, Route, Switch, HashRouter as Router, Redirect } from 'react-router-dom';
import AddCourses from './Components/Content/Crud/Add/add_courses';
import Example from './Layout/Topbar/topbar'
import Sign from './Components/Auth/Sign UP/sign';
import { connect } from 'react-redux';

class App extends Component {
  state = {
    x: 1
  }
  UNSAFE_componentWillMount(){
    // this.props.isAuth
    // console.log('Before=> ',this.props.isAuth);
    
  }
  componentDidMount() {
    // this.props.isAuth
    // console.log('After=> ',this.props.isAuth);
    
    if (navigator.onLine===false) {
      window.location.replace('http://www.google.com')
    }
  }
  render() {
    return (
      <React.Fragment>

        <Router>
        {/* <Example /> */}
          <Switch>
            {/* {this.props.isAuth===false ? <div> */}
              
             
              <Route exact path='/' component={Wrapper} />
              <Route path='/add' component={AddCourses} />
              <Route path='/shit' component={AddCourses} />
              <Route path='/sign' component={Sign} />
              
              
              {/* </div> : <Switch><Route path='/sign' component={Sign} /></Switch>} */}

          </Switch>
        </Router>
      </React.Fragment>




    )
  }
}
const mapStateToProps = (state) => ({
  isAuth: state.Courses.isAuth
})
export default withRouter(connect(mapStateToProps,{})(App));
