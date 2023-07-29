import React from "react";
//import { withRouter } from "react-router";
import Color from "../HOC/Color";
import logo from '../../assets/images/duong.png';
//import './MyHome.scss';

class Home extends React.Component {

    componentDidMount() {
        // setTimeout(() => {
        //       this.props.history.push('/todo')
        // }, 3000)
    }
    render() {

        return (
            <>

                <div>
                    Hello world from Homepage with Quốc Dương
                </div>
                <div>
                      <img src={logo} alt=""/>
                </div>
            </>
        )
    }
}
//export default  withRouter( Home);
export default Color(Home);