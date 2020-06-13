import React, { Component } from 'react';
import {
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem,
    NavLink,
    UncontrolledDropdown,
    DropdownToggle,
    DropdownMenu,
    DropdownItem,
    NavbarText,
    Container
} from 'reactstrap';
import {fetchAuth} from '../../store/actions'
import { Link,NavLink as RRNavLink } from 'react-router-dom';
import './topbar.scss'
import { connect } from 'react-redux';

class Example extends Component {
    state = {
        isOpen: false,
        isProdActive: false,
        isAddActive: false,
        auth:false
    }
    toggle = () => {
        this.setState({
            isOpen: !this.state.isOpen
        });
    }
    logOut=()=>{
        this.props.fetchAuth(this.state.auth)
    }
   
    render() {
        return (
            <div>
                <Navbar color="dark" className="nav navbar-dark navbar-expand-sm" toggleable fixed="top" light expand="md">
                    <Container>
                        <NavbarBrand to="/">APP</NavbarBrand>
                        <NavbarToggler onClick={this.toggle} />
                        <Collapse isOpen={this.state.isOpen} navbar>

                            <Nav className='' navbar>
                                
                                <NavItem>
                                    <NavLink  activeClassName="active" exact tag={RRNavLink} to='/'>Courses</NavLink>
                                </NavItem>

                                <NavItem>
                                    <NavLink  activeClassName="active" tag={RRNavLink} to='/add'>Add Courses</NavLink>
                                </NavItem>
                                <NavItem>
                                    <NavLink  activeClassName="active" tag={RRNavLink} to='/shit'>Shitty Courses</NavLink>
                                </NavItem>
                                {/* <NavItem>
                                    <NavLink  activeClassName="active" tag={RRNavLink} to='/sign'>Sign up</NavLink>
                                </NavItem> */}
                            </Nav>
                            <UncontrolledDropdown className='drop ml-auto' nav inNavbar>
                                <DropdownToggle className='userName' nav caret>
                                    Hi username
                  </DropdownToggle>
                                <DropdownMenu >
                                    {/* <DropdownItem tag={Link} to='/'>
                                            Market
                    </DropdownItem> */}
                                    {/* <DropdownItem divider /> */}
                                    {/* <DropdownItem tag={Link} to='/sign'>
                                        Sign Up
                    </DropdownItem> */}

                                    <DropdownItem tag={Link} onClick={this.logOut} to={this.props.isAuth===false?'/sign':''}>
                                        Log out
                    </DropdownItem>
                                </DropdownMenu>
                            </UncontrolledDropdown>
                            {/* <NavbarText>Simple Text</NavbarText> */}
                        </Collapse>
                    </Container>
                </Navbar>
            </div>
        );
    }
}
const mapStateToProps = (state) => ({
    isAuth: state.Courses.isAuth
})
export default connect(mapStateToProps,{fetchAuth})(Example);