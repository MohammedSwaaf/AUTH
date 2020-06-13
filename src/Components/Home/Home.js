import React, { Component } from 'react';
import Courses from '../Content/Crud/All/courses'
// import Sidepar from '../../Layout/Sidebar/sidebar'
import Example from '../../Layout/Topbar/topbar'
 
class Wrapper extends Component {
    render() { 
        return (
            <div>
                <Courses/>
            </div>
        );
    }
}
 
export default Wrapper;