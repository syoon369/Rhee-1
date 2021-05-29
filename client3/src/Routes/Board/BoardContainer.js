import React from "react";
import BoardPresenter from "./BoardPresenter";
import { userApi } from '../../api';
import axios from "axios";

export default class extends React.Component {
    state = {
        data: null,
        userid: "",
        usertitle: "",
        usercontent: "",
        loading: true
    }

    IdChange = (e) => {
        this.setState({
            // [e.target.name]:e.target.value
            userid: e.target.value
        });
    }

    TitleChange = (e) => {
        this.setState({
            // [e.target.name]:e.target.value
            usertitle: e.target.value
        });
    }

    ContentChange = (e) => {
        this.setState({
            // [e.target.name]:e.target.value
            usercontent: e.target.value
        });
    }

    btnWrite = async () => {

    }

    btnClick = async () => {
        console.log(`${this.state.userid}\n${this.state.usertitle}\n${this.state.usercontent}`);
        if (isNaN(parseInt(this.state.userid))) {
            console.log("id issue\n");
        }
        else {
            await axios.post("http://localhost:3302/data", {
                // id:this.state.userid,
                id: parseInt(this.state.userid),
                title: this.state.usertitle,
                content: this.state.usercontent,
            })
                .then((response) => {
                    if (response.status === 200) {
                        // console.log(response);
                        console.log("response.data : " + response.data);
                        // console.log(response.status);
                    } else {
                        console.log("no");
                    }
                })
                .catch((error) => {
                    console.log(error);
                });
            window.location.reload();
        }
    }

    btnDelete = async () => {
        console.log(`${this.state.userid}\n`);
        if (isNaN(parseInt(this.state.userid))) {
            console.log("id issue\n");
        }
        else {
            await axios.post("http://localhost:3302/data", {
                // id:this.state.userid,
                id: parseInt(this.state.userid)
            })
                .then((response) => {
                    if (response.status === 200) {
                        // console.log(response);
                        console.log(response.data);
                        // console.log(response.status);
                    } else {
                        console.log("no");
                    }
                })
                .catch((error) => {
                    console.log(error);
                });
            window.location.reload();
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
    }

    render() {
        const { data, userid, usertitle, usercontent, IdChange, TitleChange, ContentChange, btnClick, btnDelete, loading } = this.state;
        console.log(this.state);
        return (
            <BoardPresenter
                data={data}
                userid={this.userid}
                usertitle={this.usertitle}
                usercontent={this.usercontent}
                IdChange={this.IdChange}
                TitleChange={this.TitleChange}
                ContentChange={this.ContentChange}
                btnClick={this.btnClick}
                btnDelete={this.btnDelete}
                loading={loading} />
        )
    }
}