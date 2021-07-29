import React, { Component } from 'react';
import UpdatePresenter from './UpdatePresenter';
import axios from "axios";

export default class UpdateContainer extends React.Component {
    state = {
        title: "",
        content: "",
        originTitle:"",
        originContent:""
    }

    TitleChange = (e) => {
        this.setState({
            // [e.target.name]:e.target.value
            title: e.target.value
        });
    }

    ContentChange = (e) => {
        this.setState({
            // [e.target.name]:e.target.value
            content: e.target.value
        });
    }

    btnClick = async () => {
        await axios.post("http://localhost:3001/data/board/update", {
        title: this.state.title,
        content: this.state.content,
        board_id: this.props.match.params.id
        },{withCredentials:true})
        .then((response) => {
            if (response.status === 200) {
                window.location.assign(`/detail/${this.props.match.params.id}`)
            } else {
                console.log("no");
            }
        })
        .catch((error) => {
            console.log(error);
        });
    }

    async componentDidMount(){
        await axios.get(`http://localhost:3001/detail/${this.props.match.params.id}`,{withCredentials: true})
        .then((response)=>{
            this.setState({
                originTitle :response.data[0].title,
                originContent:response.data[0].content,
                title:response.data[0].title,
                content:response.data[0].content
            })
        })
    }

    render() {
        return (
            <UpdatePresenter
                title={this.state.title}
                content={this.state.content}
                TitleChange={this.TitleChange}
                ContentChange={this.ContentChange}
                originTitle = {this.state.originTitle}
                originContent={this.state.originContent}
                btnClick={this.btnClick}/>
        )
    }
}
