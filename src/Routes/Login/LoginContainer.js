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
                        //this.setState({isLogined : true});
                        window.alert(response.data+"님, 환영합니다")
                        window.location.assign("/");
                        
                    }
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
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
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


// const mapStateToProps = (state) => ({
//     isLogined : state.isLogined
// });

// const mapDispatchToProps = (dispatch) => {
//     return {
//         login: () => dispatch(login()),
//         logout: () => dispatch(logout())
//     }
// }

// export default connect(
//     mapStateToProps,
//     mapDispatchToProps
// )(LoginContainer);
