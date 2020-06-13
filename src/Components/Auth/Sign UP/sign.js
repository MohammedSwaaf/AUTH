import React, { Component } from 'react';
import { AvForm, AvField } from 'availity-reactstrap-validation';
import { FormGroup, Container, Row, Col } from 'reactstrap';
import { fetshStates, fetchAuth } from '../../../store/actions'
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';


class Sign extends Component {
    state = {
        auth: true
    }
    
    componentDidMount() {
        this.props.fetshStates()
        console.log(this.props.isAuth);
        
    }
    handleValidSubmit = (e, value) => {
        e.persist();
        this.props.fetchAuth(this.state.auth)
        console.log(value);
        this.props.history.push('/')
        console.log(this.props.isAuth);
    }
    handlePass = (event) => {
        this.setState({
            password: event.target.value,
        });
    }
    // function to handle the Confirm Password
    handlePassConfirm = (event) => {
        this.setState({
            confirmPassword: event.target.value,
        });
        
    }
    render() {
        return (
            <div style={{ margin: '100px 0 0 0', background: '#ddd' }}>
                <Container>
                    <Row>
                        <Col></Col>
                        <Col>
                            <AvForm onValidSubmit={this.handleValidSubmit} className='signForm'>
                                {/* With AvField */}
                                <AvField type='text' name="username" label="Name" placeholder='Write your username' required />
                                <AvField type='email' name="email" label="Email" required placeholder='Write your Email' />

                                <AvField
                                    // ref={reset => (this.form = reset)}
                                    name="password"
                                    id='pass'
                                    label="Password"
                                    placeholder="Write your password"
                                    onChange={this.handlePass}
                                    type="password"
                                    errorMessage="Enter your passowrd"
                                    validate={{ required: { value: true } }} />

                                <AvField
                                    // ref={reset => (this.form = reset)}
                                    name="confirmPassword"
                                    id='pass'
                                    label="Confirm Password"
                                    placeholder="Confirm your password again"
                                    type="password"
                                    onChange={this.handlePassConfirm}
                                    // errorMessage="Enter your passowrd"
                                    validate={{
                                        required: { value: true, errorMessage: "Enter your pass" },
                                        match: { value: 'password', errorMessage: `doesn't match` },
                                    }} /><br />





                                <FormGroup>
                                    <button className='btn btn-primary submitButton '>Submit</button>
                                </FormGroup>
                            </AvForm></Col>
                        <Col></Col>
                    </Row>
                </Container>
            </div>
        );
    }
}
const mapStateToProps = (state) => ({
    isAuth: state.Courses.isAuth
})
export default withRouter(connect(mapStateToProps, { fetshStates, fetchAuth })(Sign));