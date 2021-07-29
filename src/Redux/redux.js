export const INIT_USER_STATE={
    isLogined : false
  }

export const LOGIN = 'LOGIN'
export const LOGOUT = 'LOGOUT'

export function login(){
return{
    type:LOGIN
};
}

export function logout(){
return{
    type:LOGOUT
};
}