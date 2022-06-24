export class Usuario{
    rolid: number;
    name: string;
    email: string;
    password: string;

    constructor(rolid: number, name:string, email: string, password: string){
        this.rolid = rolid;
        this.name = name;
        this.email = email;
        this.password = password;
    }
}