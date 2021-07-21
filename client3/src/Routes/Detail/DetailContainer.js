import React, { Component } from 'react';
import DetailPresenter from "./DetailPresenter";
import axios from "axios";

export default class DetailContainer extends React.Component {
    state = {
        title: "",
        date: "",
        nickname:"",
        board_id:-1,
        content:"",
        loading:true,
        isLogined:false
    }

    async componentDidMount(){

        await axios.get("http://localhost:3001",{withCredentials: true})
        .then((response)=>{
            if(response.data){
                this.setState({isLogined:true});
            }
        })

        await axios.get(`http://localhost:3001/detail/${this.props.match.params.id}`,{withCredentials: true})
        .then((response)=>{
            this.setState({
                title :response.data[0].title,
                date:response.data[0].date,
                nickname:response.data[0].nickname,
                board_id:response.data[0].board_id,
                content:response.data[0].content,
                loading:false
            })
        })
    }

    btnUpdate = async (e) => {
        if(this.state.isLogined ===true){
        await axios.post("http://localhost:3001/data/board/assign",{
                board_id: this.state.board_id
            },{withCredentials:true},{

            }).then((response) => {
                if(response.status === 200){
                   window.location.assign(`/update/${this.state.board_id}`); 
                }else{
                   window.alert("수정 하지 말라");
                }
            }).catch((error) =>{
                
            })
            
        }else{
            window.alert("수정 권한이 없습니다.");
        }
    }

    btnDelete = async (e) => {
        console.log("삭제 버튼 클릭됨");
        if(this.state.isLogined===true){
            await axios.post("http://localhost:3001/data/board/delete",{
            board_id: this.state.board_id
         },{withCredentials:true}, {
        })
            .then((response) => {
                if (response.status === 200) {
                    // console.log(response);
                    console.log(response.data);
                    window.location.assign("/board");
                    // console.log(response.status);
                } else {
                    console.log("no");
                    window.alert("삭제 하지 말라");
                }
            
            })
            .catch((error) => {
                console.log(error);
            });
 
        }else{
            window.alert("삭제 하지 말라");
        }
    }

    render() {
        const {title, date, nickname, board_id, content, loading, isLogined} = this.state;
        return (
            <>
            <DetailPresenter
            title={title}
            date={date}
            nickname = {nickname}
            board_id = {board_id}
            content={content}
            loading={loading}
            isLogined={isLogined}
            btnDelete = {this.btnDelete}
            btnUpdate = {this.btnUpdate} />
            </>
        );
    }
}