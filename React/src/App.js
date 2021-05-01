
import { Component } from 'react';
import styled from 'styled-components'
import GlobalStyles from './Components/GlobalStyles';
import {useState} from 'react';

const Moviecontainer = styled.div`
  margin:0 auto;
  width:88%;
  border : 1px solid #333;
  padding : 10px 0 30px 0;
  border-radius : 5px;
  margin-bottom:50px;
`;
const Formwrapper = styled.div`
  width:88%;
  margin:0 auto;
`;

const Titleinput = styled.input`
  width:500px;
  height:40px;
  margin:10px;
`;

const Text = styled.textarea`
  width:88%;
  min-height : 500px;
`;

const Submitbutton = styled.button`
  width:200px;
  height:50px;
  font-size:20px;
  padding:20px;
  border:none;
  background : indianred;
  border-radius:5px;
`;

function App() { //hooks(useState)를 쓰기 위해서는 App이 클래스형이 아니라 꼭 함수형이어야 한다. - 이거 좀 별로다...왜이럴까...
  const [movieContent, setMovieContent] = useState({ // hooks
    title:'',
    content:''
  })

  const [viewContent, setViewContent] = useState([]); // hooks

  const getValue = e =>{
    const {name, value} = e.target;
    setMovieContent({
      ...movieContent,
      [name]:value
    });
    console.log(movieContent);
  }

  const getValue2 = e =>{
        // name : content → textarea태그의 name임, value : textarea 내용
        const { name, value } = e.target;
        setMovieContent({
          ...movieContent,
          [name]: value
        });
        console.log(movieContent);
  }

  return (
   <>
   <GlobalStyles/>
   <h1>movie review</h1>
   <Moviecontainer>
     {viewContent.map(item =>
      <div>
        <h2>{item.title}</h2>
        <div>
          {item.content}
        </div>
      </div>)
      }
   </Moviecontainer>
   <Formwrapper>
     <Titleinput type='text' onChange={getValue} placeholder='title' name='title'/>
     <Text placeholder='content' name='content' onChange={getValue2}></Text>
   </Formwrapper>
   <Submitbutton onClick={()=>{
     setViewContent(viewContent.concat({...movieContent}));
   }}>submit!!</Submitbutton>
   </>
  );
}

export default App;
