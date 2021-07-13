import React from "react";
import { Link, withRouter } from "react-router-dom";
import styled from "styled-components";
import PropTypes from "prop-types";

const GoSign = styled(Link)`
    height:100px;
    width:100px;
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
    <input onChange = {IdChange}></input>
    <input onChange = {PasswordChange} type = 'password'></input>
    <button onClick = {btnClick}>login</button>
    <GoSign to ="/sign">회원가입</GoSign>
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