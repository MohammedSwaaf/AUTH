import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchAuth } from '../../../../store/actions';
import { Redirect } from 'react-router-dom';
import Example from '../../../../Layout/Topbar/topbar';
import Slider from "react-slick";
import Select from 'react-select';


class AddCourses extends Component {
    state = {
        x: false,
        select: [{ value: 'chocolate', label: 'Chocolate' },
        { value: 'strawberry', label: 'Strawberry' },
        { value: 'vanilla', label: 'Vanilla' }],
        defaultValue: [
            { value: '1', label: 'Chocolate' },
            { value: '2', label: 'Strawberry' },
        ],
    }

    UNSAFE_componentWillMount() {
        // this.props.fetchAuth(this.state.x);
        // console.log(this.props.isAuth);
    }
    componentDidMount() {

        // console.log(this.props.isAuth);
    }
    render() {
        if (this.props.isAuth === false) {
            return <Redirect to='/sign' />
        }
        let settings = {
            dots: true,
            infinite: true,
            speed: 5,
            slidesToShow: 3,
            slidesToScroll: 1
        };
        return (
            <div>
                <Example />

                <div style={{ margin: '70px 0 0 0' }}>
                    <Slider {...settings}>
                        <div>
                            <h3>1</h3>
                        </div>
                        <div>
                            <h3>2</h3>
                        </div>
                        <div>
                            <h3>3</h3>
                        </div>
                        <div>
                            <h3>4</h3>
                        </div>
                        <div>
                            <h3>5</h3>
                        </div>
                        <div>
                            <h3>6</h3>
                        </div>
                    </Slider>
                    {/* <AwesomeSlider animation="cubeAnimation">
                        <div data-src='http://via.placeholder.com/640x360' />
                        <div data-src="http://via.placeholder.com/740x460" />
                        <div data-src="http://via.placeholder.com/640x560" />
                    </AwesomeSlider> */}
                </div>
                <Select
                    defaultValue={this.state.defaultValue}
                    isMulti
                    name="colors"
                    options={this.state.select}
                    className="basic-multi-select"
                    classNamePrefix="select"
                />
            </div>
        );
    }
}
const mapStateToProps = (state) => ({
    isAuth: state.Courses.isAuth
})
export default connect(mapStateToProps, { fetchAuth })(AddCourses);