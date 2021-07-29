import axios from "axios";
import React from "react";
import LoginPresenter from "./LoginPresenter";
import { connect } from 'react-redux';
import {login, logout} from '../../Redux/redux';

// var isLogined = false;

// exports.setIsLogin = () =>{

//     return isLogined;
// }
export default class LoginContainer extends React.Component {
    state = {
        id: "",
        password: "",
        isLogined: false
    }
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
                    if(response.data){
                        window.alert(response.data+"님, 환영합니다")
                        window.location.assign("/Rhee/");
                    }
                 }else{
                    window.alert("다시해라");//login success
                    }
            })
            .catch((error) => {
            });
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
            </>
        )
    }
}
