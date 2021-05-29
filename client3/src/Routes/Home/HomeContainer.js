import React from "react";
import HomePresenter from "./HomePresenter";
import { userApi } from '../../api';
import axios from "axios";

export default class extends React.Component {
    state = {
        data: null,
        userid: "",
        usertitle: "",
        usercontent: ""
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

    btnClick = async () => {
        console.log(`${this.state.userid}\n${this.state.usertitle}\n${this.state.usercontent}`);
        if (isNaN(parseInt(this.state.userid))) {
            console.log("id issue\n");
        }
<<<<<<< HEAD
        else {
            await axios.post("http://localhost:3302/data", {
=======
        else{
            await axios.post("http://localhost:3001/data",{
>>>>>>> c5be818a99bcffe7763fb86a19a0f7b0290ceb0f
                // id:this.state.userid,
                id: parseInt(this.state.userid),
                title: this.state.usertitle,
                content: this.state.usercontent,
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
        }
    }

    async componentDidMount() {
        try {
            const { data: data } = await userApi.load();
            this.setState({
                data
            });
        } catch {
            this.setState({ data: null })
        }
    }

    render() {
        const { data } = this.state;
        console.log(this.state);
        return (
            <HomePresenter
                data={data}
                userid={this.userid}
                usertitle={this.usertitle}
                usercontent={this.usercontent}
                IdChange={this.IdChange}
                TitleChange={this.TitleChange}
                ContentChange={this.ContentChange}
                btnClick={this.btnClick}
                btnDelete={this.btnDelete} />
        )
    }
}