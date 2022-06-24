import { Time } from "@angular/common";

export class Horarios{
    day: Date;
    hour: Time;
    id_materia:number;
    id_profesor:number;

    constructor(day: Date, hour: Time,id_materia:number, id_profesor:number){
        this.day=day;
        this.hour= hour;
        this.id_materia=id_materia;
        this.id_profesor=id_profesor;
    }
}