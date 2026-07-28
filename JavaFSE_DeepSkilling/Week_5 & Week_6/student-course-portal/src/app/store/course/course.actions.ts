import { createAction, props } from '@ngrx/store';
import { Course } from '../../services/course';

export const loadCourses = createAction('[Course List] Load Courses');
export const loadCoursesSuccess = createAction('[Course List] Load Courses Success', props<{ courses: Course[] }>());
export const loadCoursesFailure = createAction('[Course List] Load Courses Failure', props<{ error: any }>());