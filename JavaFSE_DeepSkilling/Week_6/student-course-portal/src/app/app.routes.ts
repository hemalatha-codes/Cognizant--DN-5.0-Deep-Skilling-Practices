import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home';
import { authGuard } from './guards/auth-guard'; // <-- IMPORT GUARD

export const routes: Routes = [
  { path: '', component: HomeComponent },
  
  // Lazy Loading the Course Grid list page layout
  { 
    path: 'courses', 
    loadComponent: () => import('./pages/course-list/course-list').then(m => m.CourseListComponent) 
  },
  
  // Protecting the enrollment view steps using our new CanActivate rule guard
  { 
    path: 'enroll', 
    canActivate: [authGuard],
    loadComponent: () => import('./pages/enrollment-form/enrollment-form').then(m => m.EnrollmentFormComponent) 
  },
  
  { 
    path: 'reactive-enroll', 
    canActivate: [authGuard],
    loadComponent: () => import('./pages/reactive-enrollment-form/reactive-enrollment-form').then(m => m.ReactiveEnrollmentFormComponent) 
  },
  
  { path: '**', redirectTo: '' }
];