import axios from "axios";
import React from "react";
import LoginPresenter from "./LoginPresenter";

export default class extends React.Component {
    state = {
        id: "",
        password: ""
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
        console.log("Btn Clicked")
        await axios.post("http://localhost:3001/signin", {
            // id:this.state.userid,
            id: this.state.id,
            password: this.state.password
        },{withCredentials: true})
            .then((response) => 
            {
                console.log(response.status);
                 if (response.status === 200) {//login fail
                    if(response.data){
                      window.location.assign("/");
                      window.sessionStorage.setItem("islogin",true);
                      window.sessionStorage.setItem("user",response.data);
                    }
                 }else{
                    window.alert("다시해라");//login success
                    }
            })
            .catch((error) => {
                //console.log(error);
            });
        // window.location.reload();
    }

    render() {
        return (
            <LoginPresenter
            id={this.id}
            password={this.password}
            IdChange = {this.IdChange}
            PasswordChange = {this.PasswordChange}
            btnClick = {this.btnClick}    
            />
        )
    }
}