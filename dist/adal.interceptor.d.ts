import { HttpEvent, HttpInterceptor, HttpHandler, HttpRequest } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { AdalService } from './adal.service';
export declare class AdalInterceptor implements HttpInterceptor {
    private adalService;
    constructor(adalService: AdalService);
    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>>;
}
