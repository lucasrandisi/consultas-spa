import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment';
import { Usuario } from './Usuario';

@Component({
  selector: 'app-crear-usuario',
  templateUrl: './crear-usuario.component.html',
  styleUrls: ['./crear-usuario.component.scss']
})
export class CrearUsuarioComponent implements OnInit {
  form: FormGroup;
  usuario: Usuario[] = [];

  constructor( 
    private http: HttpClient, private router: Router
     ) { }

  ngOnInit(): void {
    this.initializeForm();
  }
  
  initializeForm() {
    this.form = new FormGroup({
        name: new FormControl(),
        email: new FormControl(),
        password: new FormControl() ,
        rolid: new FormControl()
    });
  }

  add_user(){
    let name = this.form.value['name'];
    let email = this.form.value['email'];
    let rolid = this.form.value['rolid'];
    let password = this.form.value['password'];

    console.log(this.form.value);

    this.http.post(`${environment.apiUrl}/materias`,{
      name: name,
      email: email,
      rol: rolid,
      password: password

  }).subscribe((response:any)=>{

    let max=0;
    
    for(let e of this.usuario){
      if(e.id > max){
        max = e.id;
      }
    }
    max = max + 1;

    this.usuario.push(
          new Usuario(max,rolid,name,email,password)
    );
  }
)
  }

}
