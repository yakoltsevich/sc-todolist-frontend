export interface IUser {
    _id: string;
    name: string;
    password: string;
    email: string;
    isActivated: boolean;
    activationLink: string;
}
