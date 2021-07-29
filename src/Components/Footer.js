import React from "react";
import styled from "styled-components";
import { Link, withRouter } from "react-router-dom";
import mainLogo from "../img/main_Logo.png";

const Footer = styled.footer`
    position: relative;
    width: 100%;
    height: 180px;
    padding: 0px 10px;
    background-color: rgb(221, 221, 221);
    z-index: 10;
`;

const LogoBox = styled.div`
    width: 200px;
    height: 100%;
    margin-left: 30px;
    display: flex;
    justify-content: center;
    align-items: center;
`;

const Img = styled.img`
    width: 100%;
    height: 100%;
    background-repeat: no-repeat;
`;

const MainBox = styled.div`
    display: flex;
    position: absolute;
    right: 0;
    top: 0;
`;

const Box = styled.div`
    width: 150px;
    height: 100%;
    display: flex;
    margin-top: 25px;
    flex-direction: column;
    margin-right: 50px;
`;

const Name = styled.p`
    font-size: 20px;
    font-weight: bold;
    text-align: left;
    margin-bottom: 30px;
`;

const List = styled.ul`
    display: flex;
    flex-direction: column;
`;

const Item = styled.li`
    font-size: 13px;
    text-align: left;
    margin-bottom: 5px;
`;

const SLink = styled(Link)`
    display: flex;
    align-items: center;
`;

export default withRouter(({ location: { pathname } }) => (
    <Footer>
        <LogoBox>
            <Img src={mainLogo} />
        </LogoBox>
        <MainBox>
            <Box>
                <Name>Company</Name>
                <List>
                    <Item current={pathname === "/about"} key="1">
                        <SLink to="/about">about</SLink>
                    </Item>
                    <Item current={pathname === "/team"} key="2">
                        <SLink to="/team">team</SLink>
                    </Item>
                    <Item current={pathname === "/careers"} key="3">
                        <SLink to="/careers">careers</SLink>
                    </Item>
                    <Item current={pathname === "/privacy_policy"} key="4">
                        <SLink to="/privacy_policy">privacy policy</SLink>
                    </Item>
                </List>
            </Box>
            <Box>
                <Name>Locations</Name>
                <List>
                    <Item current={pathname === "/seoul"} key="1">
                        <SLink to="/seoul">seoul</SLink>
                    </Item>
                    <Item current={pathname === "/tokyo"} key="2">
                        <SLink to="/tokyo">tokyo</SLink>
                    </Item>
                    <Item current={pathname === "/beijing"} key="3">
                        <SLink to="/beijing">beijing</SLink>
                    </Item>
                    <Item current={pathname === "/newyork"} key="4">
                        <SLink to="/newyork">newyork</SLink>
                    </Item>
                </List>
            </Box>
            <Box>
                <Name>Social media</Name>
                <List>
                    <Item current={pathname === "/facebook"} key="5">
                        <SLink to="/facebook">facebook</SLink>
                    </Item>
                    <Item current={pathname === "/twitter"} key="6">
                        <SLink to="/twitter">twitter</SLink>
                    </Item>
                    <Item current={pathname === "/instagram"} key="7">
                        <SLink to="/instagram">instagram</SLink>
                    </Item>
                    <Item current={pathname === "/youtube"} key="8">
                        <SLink to="/youtube">youtube</SLink>
                    </Item>
                </List>
            </Box>
        </MainBox>
    </Footer>
));