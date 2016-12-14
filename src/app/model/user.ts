import {Candidat} from '../model/candidat';

export class User{
    login:string;
    Candidat: Candidat;

    constructor(login,Candidat:Candidat){
        this.login = login;
        this.Candidat = Candidat;
    }
}