import React from "react";
import { BrowserRouter as Router, Route, Redirect, Switch } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";
import Home from "../Routes/Home";
import Board from "../Routes/Board";
import Login from "../Routes/Login";
import Sign from "../Routes/Sign";
import Googlesign from "../Routes/Googlesign";
import Writing from "../Routes/Writing";
import Detail from "../Routes/Detail";
import Update from "../Routes/Update";
import Store from "../Routes/Store";
class Route1 extends Router{
    state={
        islogin:false
    }

    render(){
        return(
    <Router>
        <>
            <Header />
            <Switch> {/* Switch : 한 번에 오직 하나의 Route만 render */}
                <Route path="/Rhee" exact component={Home} /> {/*해당 path로 가면 Home 출력 */}
                <Route path="/Rhee/board" component={Board} />
                <Route path="/Rhee/store" component={Store} />
                <Route path="/Rhee/login" component={Login}/>
                <Route path="/Rhee/sign" component={Sign}/>
                <Route path="/Rhee/googlesign" component={Googlesign}/>
                <Route path="/Rhee/writing" component={Writing}/>
                <Route path="/Rhee/update/:id" component={Update}/>
                <Route path="/Rhee/detail/:id"  component={Detail}/>
                {/* <Route path="/community" component={Community} />
                <Route path="/editorial" component={Editorial} />
                <Route path="/about" component={About} /> */}
                <Redirect from="*" to="/Rhee" /> {/* 일치하는 Route가 없으면 무조건 Home(/)으로 보냄 */}
            </Switch>
            <Footer />
        </>
    </Router>
        )
    }
}

export default Route1;