import axios from "axios";
import React from "react";
import LoginPresenter from "./LoginPresenter";
import { connect } from 'react-redux';
import {actionCreators} from '../../store';
import {logIn, logOut} from '../../store';

class LoginContainer extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
          isLogined: false
        }
      }
    // state = {
    //     id: "",
    //     password: "",
        
    // }
    IdChange = (e)=>{
        this.setState({
            id:e.target.value
        });
    }

    PasswordChange = (e)=>{
        this.setState({
            password:e.target.value
        });
    }

    btnClick = async () => {
        console.log("Btn Clicked");
        await axios.post("http://localhost:3001/signin", {
            // id:this.state.userid,
            id: this.state.id,
            password: this.state.password
        },{withCredentials: true})
            .then((response) => 
            {
                console.log(response.status);
                 if (response.status === 200) {
                    // if(response.data){
                        logIn(this.state.isLogined);
                        console.log(this.state.isLogined);
                        //window.location.assign("/");
                    //   isLogined = true;
                    // }
                 }else{
                    window.alert("다시해라");//login success
                    // isLogined = false;
                    }
            })
            .catch((error) => {
                //console.log(error);
            });
        // window.location.reload();
    }

    render() {

        return (
            <>
            <LoginPresenter
            id={this.id}
            password={this.password}
            IdChange = {this.IdChange}
            PasswordChange = {this.PasswordChange}
            btnClick = {this.btnClick}    
            />
            {/* <div onClick>={this.login}</div> */}
            </>
        )
    }
}


const mapStateToProps = (state) => ({
    isLogined:state.isLogined
});

const mapDispatchToProps = (dispatch) => {
    return {
        logIn: () => dispatch(logIn()),
        logOut: () => dispatch(logOut())
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(LoginContainer);
