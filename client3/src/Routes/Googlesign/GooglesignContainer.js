import React from "react";
import GooglesignPresenter from "./GooglesignPresenter";
import axios from "axios";

export default class extends React.Component {
    state = {
        // id: "",
        // password:"",
        firstname : "",
        lastname : "",
        nickname : "",
        birth : "",
        sex: "male"
    }
    
    // IdChange = (e)=>{
    //     this.setState({
    //         id:e.target.value
    //     });
    // }

    // PasswordChange = (e)=>{
    //     this.setState({
    //         password:e.target.value
    //     });
    // }

    FnChange = (e)=>{
        this.setState({
            firstname:e.target.value
        });
    }

    LnChange = (e)=>{
        this.setState({
            lastname:e.target.value
        });
    }

    NicknameChange = (e)=>{
        this.setState({
            nickname:e.target.value
        });
    }

    BirthChange = (e)=>{
        this.setState({
            birth:e.target.value
        });
    }

    SexChange = (e)=>{
        this.setState({
            sex:e.target.value
        });
    }

    btnClick = async () => {
        console.log("Btn Clicked")
        await axios.post("http://localhost:3001/signup/google", {
            // id: this.state.id,
            // password: this.state.password,
            firstname: this.state.firstname,
            lastname: this.state.lastname,
            nickname: this.state.nickname,
            birth: this.state.birth,
            sex: this.state.sex
        },{withCredentials:true})
            .then((response) => {
                if (response.status === 200) {
                    // console.log(response);
                    console.log("response.data : " + response.data);
                    // console.log(response.status);
                } else {
                    console.log("no");
                }
            })
            .catch((error) => {
                console.log(error);
            });
        window.location.assign("/Rhee/");
    }
    
    render() {
        // const {id, password, firstname, lastname, birth, IdChange, PasswordChange, FnChange, LnChange, BirthChange} = this.state;
        console.log(this.state);
        return (
            <GooglesignPresenter
                // id={this.id}
                // password={this.password}
                firstname = {this.firstname}
                lastname = {this.lastname}
                birth = {this.birth}
                sex = {this.sex}
                nickcname = {this.nickname}
                IdChange = {this.IdChange}
                PasswordChange = {this.PasswordChange}
                FnChange = {this.FnChange}
                LnChange = {this.LnChange}
                NicknameChange = {this.NicknameChange}
                BirthChange = {this.BirthChange}
                SexChange = {this.SexChange}
                btnClick = {this.btnClick}
                />
        )
    }
}