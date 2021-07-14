import React from "react";
import LoginPresenter from "./LoginPresenter";
import axios from "axios";

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
        })
            .then((response) => {
                if (response.status === 200) {
                    if(response.data.length>0){//login success
                        //console.log(response.data);
                        // window.location.replace("/");
                    }else{//login fail
                      //  window.alert("login failed!");
                      //console.log(response.cookie);
                    }
                } else {
                    //console.log("no");
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