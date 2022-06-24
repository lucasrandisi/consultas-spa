export interface Horarios {
    id: number;
    materia_id: number;
    profesor_id: number;
    date_hour: Date;
}

export interface Inscripcion {
    email: string;
    horario_consulta_id: number;
}