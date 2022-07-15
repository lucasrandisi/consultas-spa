import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/shared/services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

    credentials: any = {}
    wrongCredentials = false;


    constructor(private authService: AuthService,private router : Router) { }

    ngOnInit(): void {
    }

    login() {
        if (!this.credentials.email || !this.credentials.password) {
            return;
        }

        this.authService.login(this.credentials).subscribe({
        next: response => {
            if(response.user.rol.name == "Alumno"){
                this.router.navigate(['/materias'])
            }
            if(response.user.rol.name == "Admin"){
                this.router.navigate(['/admin/usuarios']);
            }
            if(response.user.rol.name == "Profesor"){
                this.router.navigate(['/horarios-consulta'])
            }
        },
            error: error => {
                this.wrongCredentials = true;
            }
        })
  }

}