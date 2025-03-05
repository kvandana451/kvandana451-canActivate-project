import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';

export const adminGuard: CanActivateFn = (route, state) => {
  const router = inject(Router);
  let storedRoles = localStorage.getItem('roles');
  if (storedRoles) {
    let role = JSON.parse(storedRoles);
    if (role.includes('admin')) {
      return true;
    }
  }
  router.navigate(['/unauthorized']);
  return false;
};
