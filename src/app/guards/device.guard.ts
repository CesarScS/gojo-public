import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Platform } from '@ionic/angular';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DeviceGuard implements CanActivate {

  constructor(private platform: Platform, private router: Router) { }

  canActivate(): boolean {
    if (this.isDesktop()) {
      // Si la aplicación se está ejecutando en un navegador de escritorio
      console.log(this.platform.platforms())
      this.router.navigate(['/desktop-page']); // Redirige a la página de dashboard
      return false;
    } else {
      // Si la aplicación se está ejecutando en un dispositivo móvil
      console.log(this.platform.platforms())
      console.log('MOBILE')
      return true;
      
    }
    return true; // o false, dependiendo de tus requerimientos
  }

  private isDesktop(): boolean {
    const width = window.innerWidth;
    const height = window.innerHeight;
    const isIpad = width >= 768 && width <= 1024 && height >= 768 && height <= 1024;
    return width > 768 && !isIpad; // Ancho típico de la pantalla de un dispositivo móvil
  }
}
