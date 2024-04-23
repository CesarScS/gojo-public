import { HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root'
})
export class TokenInterceptorService implements HttpInterceptor {

    constructor() { }

    intercept(request: HttpRequest<any>, next: HttpHandler) {
        // Obtener el token JWT almacenado en el localStorage
        const token = localStorage.getItem('jwtToken');

        // Verificar si la solicitud es para la ruta de inicio de sesión
        const isLoginRequest = request.url.endsWith('/login/authenticate');

        // Clonar la solicitud y agregar el token JWT en el encabezado Authorization si está presente
        if (token && !isLoginRequest) {
            request = request.clone({
                setHeaders: {
                    Authorization: `Bearer ${token}`
                }
            });
        }

        // Pasar la solicitud modificada al siguiente manejador
        return next.handle(request);
    }//intercept()
}//class
