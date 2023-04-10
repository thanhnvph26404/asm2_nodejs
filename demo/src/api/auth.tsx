import { ISignin, ISignup } from "../interface/auth";
import instance from "./instance";

export const signup = (user:ISignup) => {
   return instance.post('/signup', user)
}

export const signin = (user: ISignin) => { 
    return instance.post('/signin', user)
}