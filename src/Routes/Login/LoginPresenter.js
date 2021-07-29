import React from "react";
import { Link, withRouter } from "react-router-dom";
import styled from "styled-components";
import PropTypes from "prop-types";

const MainBox = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
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
    <br/>
    <br/>
    <br/>
    <br/>
    <br/>
    <MainBox>
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
        <GoSign to ="/sign">회원가입</GoSign>
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