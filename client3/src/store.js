import {createStore} from "redux";

const LOGIN ="LOGIN";
const LOGOUT = "LOGOUT";

// export const INIT_USER_STATE={
//     isLogined : false
//   }

export const logIn =()=>{
    return{
        type:LOGIN
    }
};

export const logOut=()=>{
    return{
        type:LOGOUT
    }
};

const reducer=(state=false, action)=>{
    switch(action.type){
        case LOGIN:
            return{
            isLogined:true
            } 
        case LOGOUT:
            return{
            isLogined:false
            } 
        default:
            return state;
    };
};

const store = createStore(reducer);

// store.subscribe();

export const actionCreators={
    logIn,
    logOut
}

export default store;