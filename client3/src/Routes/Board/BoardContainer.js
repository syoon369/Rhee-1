import React from "react";
import BoardPresenter from "./BoardPresenter";
import { userApi } from '../../api';
import axios from "axios";

export default class extends React.Component {
    state = {
        data:null,
        title: "",
        content: "",
        loading: true,
        isLogined:false,
        nickname:""
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
        if(this.state.isLogined ===true){
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
        window.location.reload();
        }else{
            window.alert("로그인을 해주세요");
        }
    }

    btnDelete = async (e) => {
        console.log("삭제 버튼 클릭됨");
        const value = e.target.value;
        console.log(String(value));
        if(this.state.isLogined===true){
            await axios.post("http://localhost:3001/data/board/delete",{
            board_id: value
         },{withCredentials:true}, {
        })
            .then((response) => {
                if (response.status === 200) {
                    // console.log(response);
                    console.log(response.data);
                    // console.log(response.status);
                } else {
                    console.log("no");
                }
                window.location.reload();
            })
            .catch((error) => {
                console.log(error);
            });
 
        }else{
            window.alert("로그인을 해주세요");
        }
    }

    async componentDidMount() {
        try {
            const { data: data } = await userApi.load();
            this.setState({
                data
            });
        } catch {
            this.setState({ data: "nothing" })
        } finally {
            this.setState({
                loading: false
            })
        }
        await axios.get("http://localhost:3001",{withCredentials: true})
        .then((response)=>{
            if(response.data){
                this.setState({isLogined:true, nickname:response.data});
            }
        })
    }

    render() {
        const {data, title, content, TitleChange, ContentChange, btnClick, btnDelete, loading, isLogined, nickname } = this.state;
        console.log(this.state);
        return (
            <BoardPresenter
                data={data}
                title={this.title}
                content={this.content}
                TitleChange={this.TitleChange}
                ContentChange={this.ContentChange}
                btnClick={this.btnClick}
                btnDelete={this.btnDelete}
                loading={loading}
                isLogined={isLogined}
                nickname={nickname} />
        )
    }
}