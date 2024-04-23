import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { SessionService } from '../services/session.service';

@Injectable({
    providedIn: 'root'
})
export class AuthGuard implements CanActivate {

    constructor(
        private sessionService: SessionService,
        private router: Router
    ) { }

    canActivate(): boolean {
        if (this.sessionService.isAuthenticated()) {
            return true; // Si el usuario está autenticado, permite el acceso a la ruta
        } else {
            this.router.navigate(['/login']); // Si el usuario no está autenticado, redirige al inicio de sesión
            return false;
        }
    }

}
