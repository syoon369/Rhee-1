import React, { Component } from 'react';
import DetailPresenter from "./DetailPresenter";
import axios from "axios";

export default class DetailContainer extends React.Component {
    state = {
        title: "",
        date: "",
        nickname: "",
        board_id: -1,
        content: "",
        nowreply: [],
        reply: "",
        reReply:"",
        loading: true,
        isLogined: false,
        replyParent:""
    }

    async componentDidMount() {
        await axios.get("http://localhost:3001", { withCredentials: true })
            .then((response) => {
                if (response.data) {
                    this.setState({ isLogined: true });
                }
            })

        await axios.get(`http://localhost:3001/detail/${this.props.match.params.id}`, { withCredentials: true })
            .then((response) => {
                this.setState({
                    title: response.data[0].title,
                    date: response.data[0].date,
                    nickname: response.data[0].nickname,
                    board_id: response.data[0].board_id,
                    content: response.data[0].content,
                    loading: false
                })
            })

        await axios.get(`http://localhost:3001/data/reply/${this.state.board_id}`, { withCredentials: true })
        .then((response) => {
            console.log(response.data);
            this.setState({
                nowreply:response.data
            })
        })
    }

    ReplyChange = (e) => {
        this.setState({
            // [e.target.name]:e.target.value
            reply: e.target.value
        });
        console.log(this.state.reply);
    }

    reReplyChange = (e) => {
        this.setState({
            // [e.target.name]:e.target.value
            reReply: e.target.value
        });
        console.log(this.state.reReply);
    }

    btnUpdate = async (e) => {
        if (this.state.isLogined === true) {
            await axios.post("http://localhost:3001/data/board/assign", {
                board_id: this.state.board_id
            }, { withCredentials: true }, {

            }).then((response) => {
                if (response.status === 200) {
                    window.location.assign(`/update/${this.state.board_id}`);
                } else {
                    window.alert("수정 하지 말라");
                }
            }).catch((error) => {

            })

        } else {
            window.alert("수정 권한이 없습니다.");
        }
    }

    btnDelete = async (e) => {
        console.log("삭제 버튼 클릭됨");
        if (this.state.isLogined === true) {
            await axios.post("http://localhost:3001/data/board/delete", {
                board_id: this.state.board_id
            }, { withCredentials: true }, {
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

        } else {
            window.alert("삭제 하지 말라");
        }
    }

    btnReplyAdd = async (e) => {
        console.log("댓글 버튼 클릭됨");
        if (this.state.isLogined === true) {
            console.log("is logined");
            await axios.post("http://localhost:3001/data/reply/add", {
                board_id: this.state.board_id,
                reply: this.state.reply,
                parent_id: this.state.parent_id
            }, { withCredentials: true })
                .then((response) => {
                console.log(response);
                window.location.reload();
                }).catch((error) => {
                    console.log("오류");
                })
        } else {
            window.alert("로그인을 해주세요.");
        }
    }

    btnReplyDelete = async (e) => {
        console.log("댓글 삭제 버튼 클릭됨");
        if (this.state.isLogined === true) {
            console.log("is logined");
            await axios.post("http://localhost:3001/data/reply/delete", {
                comment_id: e.target.value
            }, { withCredentials: true })
                .then((response) => {
                    console.log(response.status);
                    if (response.status === 200) {
                        // 
                        //console.log(response.data);
                        window.location.reload();
                        // console.log(response.status);
                    } else {
                        console.log("no");
                        window.alert("삭제 하지 말라");
                    }
                    // console.log(response);
                    // window.location.reload();
                }).catch((error) => {
                    console.log("오류");
                })
        } else {
            window.alert("로그인을 해주세요.");
        }
    }

    showRereply=(e)=>{
        if (this.state.isLogined === true){
            if(e.target.value !== this.state.replyParent){
               this.setState({
                    replyParent:e.target.value
                },()=>console.log(this.state.replyParent));
            }else{
                this.setState({
                    replyParent:""
                },()=>console.log(this.state.replyParent));
            }
            // await axios.post("http://localhost:3001/data/reply/reply", {
            //     parent_id: e.target.value
            // }, { withCredentials: true })
            //     .then((response) => {
            //         console.log(response.status);
            //         if (response.status === 200) {
            //             // 
            //             //console.log(response.data);
            //             window.location.reload();
            //             // console.log(response.status);
            //         } else {
            //             console.log("no");
            //             window.alert("삭제 하지 말라");
            //         }
            //         // console.log(response);
            //         // window.location.reload();
            //     }).catch((error) => {
            //         console.log("오류");
            //     })
        } else {
            window.alert("로그인을 해주세요.");
        }
    }

    submitRereply=async(e)=>{
        await axios.post("http://localhost:3001/data/reply/add", {
            board_id: this.state.board_id,
            reply: this.state.reReply,
            parent_id: this.state.replyParent
        }, { withCredentials: true })
            .then((response) => {
            console.log(response);
            window.location.reload();
            }).catch((error) => {
                console.log("오류");
        })
    }

    render() {
        const { title, date, nickname, board_id, content, nowreply, loading, reply,reReply, isLogined, replyParent } = this.state;
        return (
            <>
                <DetailPresenter
                    title={title}
                    date={date}
                    reply={reply}
                    nickname={nickname}
                    board_id={board_id}
                    content={content}
                    nowreply={nowreply}
                    loading={loading}
                    isLogined={isLogined}
                    replyParent={replyParent}
                    reReply={reReply}
                    showRereply={this.showRereply}
                    btnDelete={this.btnDelete}
                    btnUpdate={this.btnUpdate}
                    btnReplyAdd={this.btnReplyAdd}
                    submitRereply = {this.submitRereply}
                    reReplyChange={this.reReplyChange}
                    btnReplyDelete={this.btnReplyDelete}
                    ReplyChange={this.ReplyChange} />
            </>
        );
    }
}