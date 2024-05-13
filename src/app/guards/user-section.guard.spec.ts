import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { UsersService } from '../core/services/users.service';

export const userSectionGuard: CanActivateFn = (route, state) => {
  console.log('here');
  
  const localUser = inject(UsersService)
  const router = inject(Router)
  if(localUser.localUser == null)
    return true;
  
  return router.createUrlTree(['user/localUser'])
  
};

