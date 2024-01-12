import { inject } from '@angular/core';
import { Router, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';

import { AccountService } from '@app/_services';

export function authGuard(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    const router = inject(Router);
    const accountService = inject(AccountService);
    const user = accountService.userValue;
    if (user) {
        // check if route is restricted by role
        // const { roles } = route.data;
        // if (roles && !roles.includes(user.user?.role)) {
        //     // role not authorized so redirect to home page
        //     router.navigate(['/']);
        //     return false;
        // }
        // authorised so return true
        return true;
    }

    // not logged in so redirect to login page with the return url
    router.navigate(['/account/login'], { queryParams: { returnUrl: state.url } });
    return false;
}