import React from "react";
import HomePresenter from "./HomePresenter";
import { userApi } from '../../api';
import axios from "axios";

export default class extends React.Component {
    state = {
        isLogined:false
    }

    logout = async()=>{
        window.alert("로그아웃되었습니다.");
        axios.get("http://localhost:3001/logout",{withCredentials: true});
        window.location.replace("/");
    }

    async componentDidMount() {
        // try {
        //     const { data: data } = await userApi.load();
        //     this.setState({
        //         data
        //     });
        // } catch {
        //     this.setState({ data: null })
        // }
        await axios.get("http://localhost:3001/",{withCredentials: true})
        .then((response)=>{
            console.log(response);
            if(response.data.length>0){
                this.setState({isLogined:true});
            }else if(response.data.length===0){
                this.setState({isLogined:false})
            }   
        })
    }

    render() {
        const {isLogined, logout} = this.state;
        console.log(this.state);
        return (
            <HomePresenter
                isLogined = {this.state.isLogined}
                logout = {this.logout} />
        )
    }
}