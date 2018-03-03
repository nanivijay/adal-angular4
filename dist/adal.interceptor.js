import { Injectable } from '@angular/core';
import { AdalService } from './adal.service';
var AdalInterceptor = /** @class */ (function () {
    function AdalInterceptor(adalService) {
        this.adalService = adalService;
    }
    AdalInterceptor.prototype.intercept = function (req, next) {
        var authReq = req.clone({ headers: req.headers.set('Authorization', "Bearer " + this.adalService.userInfo.token) });
        return next.handle(authReq);
    };
    AdalInterceptor.decorators = [
        { type: Injectable },
    ];
    /** @nocollapse */
    AdalInterceptor.ctorParameters = function () { return [
        { type: AdalService, },
    ]; };
    return AdalInterceptor;
}());
export { AdalInterceptor };
//# sourceMappingURL=adal.interceptor.js.map