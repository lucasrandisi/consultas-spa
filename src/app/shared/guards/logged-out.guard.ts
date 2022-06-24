import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, CanActivateChild, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from '../services/auth.service';

@Injectable({
	providedIn: 'root'
})
export class LoggedOutGuard implements CanActivate, CanActivateChild {
	constructor(
		private authService: AuthService,
		private router: Router
	) { }


	canActivate() {
		const accessToken = this.authService.accessToken;

		if (accessToken) {
			if (this.authService.currentUser.rol_id === 1) {
				this.router.navigate(['/usuarios']);
			}
			else if (this.authService.currentUser.rol_id === 2) {
				this.router.navigate(['/horarios-consulta']);
			}

			return false;
		}

		return true
	}

	canActivateChild(childRoute: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean | UrlTree | Observable<boolean | UrlTree> | Promise<boolean | UrlTree> {
		return this.canActivate();
	}
}
