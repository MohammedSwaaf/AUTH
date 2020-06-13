import React, { Component } from 'react';
import { withRouter,Redirect } from 'react-router-dom'
import Example from '../../../../Layout/Topbar/topbar';
import { connect } from 'react-redux';
class Courses extends Component {
    state = {}
    addCorsesLink = () => {
        this.props.history.push('/add')
    }
    render() {
        if (this.props.isAuth === false) {
            return <Redirect to='/sign' />
        }
        return (
            <dix>
                <Example />
                <div style={{ margin: '70px 0 0 0' }}>
                    <h1>All Courses</h1>
                    <button className='btn btn-dark' onClick={this.addCorsesLink}>Add Courses</button>
                </div>
            </dix>
        );
    }
}
const mapStateToProps = (state) => ({
    isAuth: state.Courses.isAuth
})
export default withRouter(connect(mapStateToProps,{})(Courses));