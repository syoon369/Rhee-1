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
    date,
    btnClick,
    btnDelete,
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
                                    <td key='100'><button onClick={btnClick}>글 작성하기</button></td>
                                </MyTh>
                            </thead>
                            <tbody>
                                <tr>                                                                                       
                                {data.map((content, index) => (
                                    <>
                                        <MyTd key={(index*3).toString()} className={"data_nickname"} >작성자{content.nickname}</MyTd>
                                        <MyTd key={(index*3+1).toString()} className={"data_title"}><Link to={`/detail/${content.board_id}`}>제목{content.title}</Link></MyTd>
                                        <MyTd key={(index*3+2).toString()} className={"data_date"}>일시{content.date}</MyTd>
                                        {/* <MyTd key={index*4+3}><button onClick={btnDelete} value={content.board_id}>삭제</button></MyTd> */}
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
    date:PropTypes.string,
    btnClick: PropTypes.func.isRequired,
    btnDelete: PropTypes.func.isRequired,
    isLogined:PropTypes.bool,
    nickname:PropTypes.string
}

export default BoardPresenter;