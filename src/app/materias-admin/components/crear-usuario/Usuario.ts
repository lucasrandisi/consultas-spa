export class Usuario{
    id: number;
    rolid: number;
    name: string;
    email: string;
    password: string;

    constructor(id: number, rolid: number, name:string, email: string, password: string){
        this.id = id;
        this.rolid = rolid;
        this.name = name;
        this.email = email;
        this.password = password;
    }
}