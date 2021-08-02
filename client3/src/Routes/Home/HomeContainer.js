import React from "react";
import HomePresenter from "./HomePresenter";
import { userApi } from '../../api';
import axios from "axios";

export default class extends React.Component {
    state = {
        isLogined:false,
        nickname:""
    }

    logout = async()=>{
        window.alert("로그아웃되었습니다.");
        axios.get("http://localhost:3001/logout",{withCredentials: true});
        window.location.replace("/Rhee/");
    }

    async componentDidMount() {
        await axios.get("http://localhost:3001/",{withCredentials: true})
        .then((response)=>{
            if(response.data){
                this.setState({isLogined:true, nickname:response.data});
            }
        })
    }

    passportClick = async()=>{
        window.open(`http://localhost:3001/auth/google`, "_self");
    }

    render() {
        console.log(this.state);
        return (
            <HomePresenter
                passportClick = {this.passportClick}
                isLogined = {this.state.isLogined}
                logout = {this.logout}
                nickname={this.state.nickname}/>
        )
    }
}