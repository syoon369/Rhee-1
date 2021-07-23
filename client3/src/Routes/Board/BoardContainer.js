import React from "react";
import BoardPresenter from "./BoardPresenter";
import { userApi } from '../../api';
import axios from "axios";

export default class extends React.Component {
    state = {
        data:null,
        title: "",
        date: "",
        loading: true,
        isLogined:false,
        nickname:"",
        searchTerm:"",
        searchMenu:"hashtag"
    }

    btnClick = async () => {
        if(this.state.isLogined ===true){
           window.location.assign("/writing");
        }else{
            window.alert("로그인을 해주세요");
        }
    }

    termChange = (e) => {
        this.setState({
            // [e.target.name]:e.target.value
            searchTerm: e.target.value
        });
    }

    menuChange = (e)=> {
        this.setState({
            searchMenu:e.target.value
        });
        console.log(this.state.searchMenu);
    }

    btnSearch =(e)=>{
        switch(this.state.searchMenu){
            case "hashtag":
                this.hashSearch();
                break;
            case "content":
                console.log("content");
                this.contentSearch();
                break;
            case "writer":
                this.writerSearch();
                break;
            default:
                break;
        }
    }

    hashSearch = async()=>{
        await axios.post('http://localhost:3001/search/hash',{
            searchTerm : this.state.searchTerm
        },{withCredentials:true})
        .then((response) => {
            
        })
        .catch((error) => {

        })
    }

    contentSearch = async()=>{
        await axios.post('http://localhost:3001/search/content',{
            searchTerm : this.state.searchTerm
        },{withCredentials:true})
        .then((response) => {
            console.log(response.data);
            this.setState({
                data:response.data
            })
        })
        .catch((error) => {

        })
    }

    writerSearch = async()=>{
        await axios.post('http://localhost:3001/search/writer',{
            searchTerm : this.state.searchTerm
        },{withCredentials:true})
        .then((response) => {
            console.log(response.data);
            this.setState({
                data:response.data
            })
        })
        .catch((error) => {

        })
    }

    async componentDidMount() {
        // try {
        //     const { data: data } = await userApi.load();
        //     this.setState({
        //         data
        //     });
        // } catch {
        //     this.setState({ data: "nothing" })
        // } finally {
        //     this.setState({
        //         loading: false
        //     })
        // }
        
        await axios.get('http://localhost:3001/data',{withCredentials: true})
        .then((response)=>{
            if(response.data){
                console.log(response.data);
                this.setState({
                    data:response.data,
                    loading: false
                })
            }else{
                return -1;
            }
        });  

        await axios.get("http://localhost:3001",{withCredentials: true})
        .then((response)=>{
            if(response.data){
                this.setState({isLogined:true, nickname:response.data});
            }
        });
    }

    render() {
        const {data, title, date, loading, isLogined, nickname, searchTerm, searchMenu } = this.state;
        console.log(this.state);
        return (
            <BoardPresenter
                data={data}
                title={title}
                date={date}
                btnClick={this.btnClick}
                termChange={this.termChange}
                menuChange={this.menuChange}
                btnSearch={this.btnSearch}
                loading={loading}
                isLogined={isLogined}
                nickname={nickname}
                searchTerm={searchTerm}
                searchMenu={searchMenu} />
        )
    }
}