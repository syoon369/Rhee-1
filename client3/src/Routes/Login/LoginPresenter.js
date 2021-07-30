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

const GoSign = styled(Link)`
    height:100px;
    width:100px;
`;

const InputBox = styled.div`
    text-align: center;
`;

const SytledInput = styled.input`
    margin: 0px 50px;
`;

const LoginPresenter = ({
    id,
    password,
    IdChange,
    PasswordChange,
    btnClick
}) => (
    <>
    <MainBox>
    <VideoBox>
        <VideoDiv>
            <VideoImg src={menu1} />
            <LeftLink to={"/Rhee/board"}>←</LeftLink>
            <VideoCon>
                <Hr />
            </VideoCon>
            <RightLink to={"/Rhee/community"}>→</RightLink>
        </VideoDiv>
    </VideoBox>
    <InputBox>
        <p>ID</p>
        <SytledInput onChange = {IdChange}></SytledInput>
        <p>PW</p>
        <SytledInput onChange = {PasswordChange} type = 'password'></SytledInput>
        <br/>
        <br/>
        <br/>
        <button onClick = {btnClick}>login</button>
        <br/>
        <br/>
        <GoSign to ="/Rhee/sign">회원가입</GoSign>
    </InputBox>
    </MainBox>
    </>
);

LoginPresenter.propTypes = {
    id: PropTypes.string,
    password: PropTypes.string,
    IdChange: PropTypes.func.isRequired,
    PasswordChange: PropTypes.func.isRequired,
    btnClick: PropTypes.func.isRequired
}

export default LoginPresenter;