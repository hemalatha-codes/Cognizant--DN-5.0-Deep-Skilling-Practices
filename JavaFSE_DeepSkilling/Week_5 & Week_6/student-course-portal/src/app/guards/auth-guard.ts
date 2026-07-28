import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';

export const authGuard: CanActivateFn = (route, state) => {
  const router = inject(Router);
  
  // Simulating an active login token check
  const isLoggedIn = true; // Change to false if you want to test blocking the page!

  if (isLoggedIn) {
    return true;
  } else {
    alert('Access Denied! Please log in to view this configuration page.');
    router.navigate(['/']);
    return false;
  }
};