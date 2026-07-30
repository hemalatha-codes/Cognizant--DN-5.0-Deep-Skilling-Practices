import { ApplicationConfig } from '@angular/core';
import { provideRouter } from '@angular/router';
import { provideHttpClient } from '@angular/common/http';
import { provideStore } from '@ngrx/store';           // <-- IMPORT THIS
import { provideEffects } from '@ngrx/effects';       // <-- IMPORT THIS
import { routes } from './app.routes';
import { courseReducer } from './store/course/course.reducer';
import { CourseEffects } from './store/course/course.effects';

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(routes),
    provideHttpClient(),
    provideStore({ courseFeature: courseReducer }),  // <-- CONFIGURE STORE
    provideEffects([CourseEffects])                  // <-- CONFIGURE EFFECTS
  ]
};