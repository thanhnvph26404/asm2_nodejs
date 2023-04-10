export interface ISignup {
    id?: string | number,
    name: string,
    email: string,
    password: string,
    confirmPassword: string
}

export interface ISignin {
    id?: string | number,
    
    email: string,
    password: string,
    
}