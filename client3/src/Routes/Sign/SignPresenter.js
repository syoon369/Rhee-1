import React from "react";
import { Link, withRouter } from "react-router-dom";
import styled from "styled-components";
import PropTypes from "prop-types";

import menu1 from "../../img/menuImg(1).png";

const MainBox = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
`;

/* Video Box */
const VideoBox = styled.div`
    display: flex;
    width: 100%;
    height: 450px;
`;

const VideoDiv = styled.div`
    width: 100%;
    height: 100%;
`;

const VideoImg = styled.img`
    width: 100%;
    height: 100%;
    z-index: 1;
`;

const Hr = styled.hr`
    height: 3px;
    background-color: white;
    border: none;
`;

const LeftLink = styled(Link)`
    position: absolute;
    left: 0;
    text-align: center;
    line-height: 450px;
    width: 10%;
    z-index: 2;
    color: white;
    font-weight: bold;
    font-size: 50px;
`;

const RightLink = styled(Link)`
    position: absolute;
    right: 0;
    text-align: center;
    line-height: 450px;
    width: 10%;
    z-index: 2;
    color: white;
    font-weight: bold;
    font-size: 50px;
`;

const VideoCon = styled.div`
    position: absolute;
    top: 303px;
    left: 10%;
    width: 80%;
    z-index: 2;
`;


const InputBox = styled.div`
    text-align: center;
`;

const SignPresenter = ({
    id,
    password,
    firstname,
    lastname,
    nickname,
    birth,
    sex,
    IdChange,
    PasswordChange,
    FnChange,
    LnChange,
    NicknameChange,
    BirthChange,
    SexChange,
    btnClick
}) => (
    <>
    <MainBox>
    <VideoBox>
        <VideoDiv>
            <VideoImg src={menu1} />
            <LeftLink> to={"/Rhee/board"}←</LeftLink>
            <VideoCon>
                <Hr />
            </VideoCon>
            <RightLink to={"/Rhee/community"}>→</RightLink>
        </VideoDiv>
    </VideoBox>
    아이디<input onChange = {IdChange} type = 'text'></input>
    <br/>
    비밀번호<input onChange = {PasswordChange} type = 'password'></input>
    <br/>
    성<input onChange ={FnChange} type='text'></input>
    <br/>
    이름<input onChange ={LnChange} type='text'></input>
    <br/>
    닉네임<input onChange ={NicknameChange} type='text'></input>
    <br/>
    생년월일<input onChange = {BirthChange} type = "date"/>
    <br/>
    성별<input onChange = {SexChange} type='radio' name='sex' value='male' checked='checked'/>
    <input onChange = {SexChange} type='radio' name='sex' value='female'/>
    <button onClick = {btnClick}>Sign</button>
    </MainBox>
    </>
);

SignPresenter.propTypes = {
    id: PropTypes.string,
    password: PropTypes.string,
    firstname: PropTypes.string,
    lastname: PropTypes.string,
    nickname: PropTypes.string,
    birth: PropTypes.string,
    sex: PropTypes.string,
    IdChange: PropTypes.func.isRequired,
    PasswordChange: PropTypes.func.isRequired,
    FnChange: PropTypes.func.isRequired,
    LnChange: PropTypes.func.isRequired,
    NicknameChange: PropTypes.func.isRequired,
    BirthChange: PropTypes.func.isRequired,
    SexChange: PropTypes.func.isRequired,
    btnClick: PropTypes.func.isRequired
}

export default SignPresenter;