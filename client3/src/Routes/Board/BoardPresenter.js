import React from "react";
import { Link, withRouter } from "react-router-dom";
import PropTypes, { array } from "prop-types";
import styled from "styled-components";
import axios from "axios";

const MainBox = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
`;

/* Board Box */
const BoardBox = styled.div`
    display: flex;
    flex-direction: column;
    margin: 0 auto;
    max-width: 1190px;
    padding: 0 25px;
    position: relative;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
`;
const MyTd = styled.td`
    display:block;
    text-align:center;
`;

const MyTh = styled.tr`
    display:flex;
    text-align:center;
    margin:0 auto;
`;
const BoardWriteBox = styled.div`

`;

const BoardTable = styled.table`
    display:block;
`;

const BoardPresenter = ({
    data,
    title,
    content,
    btnClick,
    btnDelete,
    TitleChange,
    ContentChange,
    loading,
    isLogined,
    nickname
}) => (
    <>
        {loading ? (<div>loading...</div>) : (
            <MainBox>
                <BoardBox>
                <br/>
                <br/>
                <br/>
                <br/>
                <br/>
                <br/>
                <br/>
                <br/>
                    <div>
                        {/* <input onChange={TitleChange} type="text" name="usertitle" />
                        <input onChange={ContentChange} type="text" name="usercontent" />
                        <button onClick={btnClick}>submit</button> */}
                        <BoardTable>
                            <thead>
                                <MyTh>
                                    <td key='1'><button onClick={btnClick}>글 작성하기</button></td>
                                </MyTh>
                            </thead>
                            <tbody>
                                <br/>
                                <tr>                                                                                       
                                {data.map((content, index) => (
                                    <>
                                        <MyTd key={index*4} className={"data_nickname"} >작성자<br/>{content.nickname}</MyTd>
                                        <MyTd key={index*4+1} className={"data_title"}>제목<br/>{content.title}</MyTd>
                                        <MyTd key={index*4+2} className={"data_content"}>내용<br/>{content.content}</MyTd>
                                        <MyTd key={index*4+3}><button onClick={btnDelete} value={content.board_id}>삭제</button></MyTd>
                                        <br/><br/>
                                    </>
                                ))}
                                </tr>
                            </tbody>
                        </BoardTable>
                    </div>
                </BoardBox>
            </MainBox>
        )}
    </>
);

BoardPresenter.propTypes = {
    data: PropTypes.array,
    title: PropTypes.string,
    content: PropTypes.string,
    TitleChange: PropTypes.func.isRequired,
    ContentChange: PropTypes.func.isRequired,
    btnClick: PropTypes.func.isRequired,
    btnDelete: PropTypes.func.isRequired,
    isLogined:PropTypes.bool,
    nickname:PropTypes.string
}

export default BoardPresenter;