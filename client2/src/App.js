import React, { Component } from 'react';
import axios from 'axios';
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      list : [
        // {
        //   id:0,
        //   title:'0',
        //   content:'000'
        // }
      ],
      count : 0
    }
    this.createButton = this.createButton.bind(this);
    this.deleteButton = this.deleteButton.bind(this);
  }
  // componentDidMount() {
  //   this._getHello();
  // }
  getHello = async() => {
    const res = await axios.get('http://localhost:3001/hello');
    this.setState({id : res.data.hello});
    console.log(res.data);
  }
  getData = async() => {
    const res = await axios.get('http://localhost:3001/data');
    this.setState({list : res.data});
    this.setState({count: this.state.list.length});
    console.log(res.data);
    console.log(this.state.count);
  }

  // createButton(){
  //   console.log(this.state.count+1);
  //   console.log(`http://localhost:3001/data/create/${this.state.count+1}/${this.state.count+1}/${this.state.count+1}`);
  //   axios.post(`http://localhost:3001/data/create/${this.state.count+1}/${this.state.count+1}/${this.state.count+1}`);
  //   console.log('Insert complete');
  //   this.setState({count: this.state.count + 1});
  // }

  createButton(){
<<<<<<< HEAD
=======
    console.log(this.state.count+1);
    console.log(`http://localhost:3001/data/create/${this.state.count+1}/${this.state.count+1}/${this.state.count+1}`);
    axios.post(`http://localhost:3001/data/create/${this.state.count+1}/${this.state.count+1}/${this.state.count+1}`);
    console.log('Insert complete');
    this.setState({count: this.state.count + 1});
>>>>>>> c5be818a99bcffe7763fb86a19a0f7b0290ceb0f
    axios.post('http://localhost:3001',{
        id : '69',
        title : 'sex',
        content : 'yeah'
    });
    // console.log(this.state.count+1);
    // console.log(`http://localhost:3001/data/create/${this.state.count+1}/${this.state.count+1}/${this.state.count+1}`);
    // axios.post(`http://localhost:3001/data/create/${this.state.count+1}/${this.state.count+1}/${this.state.count+1}`);
    // console.log('Insert complete');
    // this.setState({count: this.state.count + 1});
  }

  // updateButton(){
  //   axios.post(`http://localhost:3001/data/update/${this.state.count+1}/${this.state.count+1}/${this.state.count+1}`);
  // }
  deleteButton(){
    axios.delete(`http://localhost:3001/data/delete/${this.state.count}`);
    console.log(`http://localhost:3001/data/delete/${this.state.count}`);
    this.setState({count: this.state.count - 1});
    console.log(this.state.count-1);
  }
  showList(list){
    var html = '<ul>';
    var i = 0;
    while(i < list.length){
      html = html + `<li>${list[i].id}:${list[i].title}:${list[i].content}</li>`;
      i = i + 1;
    }
    html = html+'</ul>';
    return html;
  }
  render() {
    const {list} = this.state;
    let code = this.showList(list);
    return(
      <>
        <h3>get DB data</h3>
        <p>{this.state.id}</p>
        <div dangerouslySetInnerHTML={{__html: code}}></div>
        {/* {code} */}
        <button onClick={this.getHello} method="get">
          hello
        </button>
        <button onClick={this.createButton} method="post">
          post
        </button>
        <button onClick={this.getData} method="post">
          get
        </button>
        <button onClick={this.deleteButton} method="post">
          delete
        </button>
      </>
    )
  }
}
export default App;