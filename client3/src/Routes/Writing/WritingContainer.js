import React, { Component } from 'react';
import WritingPresenter from './WritingPresenter';
import axios from "axios";

export default class WritingContainer extends React.Component {

    state = {
        title: "",
        content: ""
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
        await axios.post("http://localhost:3001/data/board", {
        title: this.state.title,
        content: this.state.content
        },{withCredentials:true})
        .then((response) => {
            if (response.status === 200) {
                console.log("response.data : " + response.data);
            } else {
                console.log("no");
            }
        })
        .catch((error) => {
            console.log(error);
        });
        window.location.assign("/board");
    }

    render() {
        const {title, content, TitleChange, ContentChange, btnClick } = this.state;
        console.log(this.state);
        return (
            <WritingPresenter
                title={this.title}
                content={this.content}
                TitleChange={this.TitleChange}
                ContentChange={this.ContentChange}
                btnClick={this.btnClick}/>
        )
    }
}
