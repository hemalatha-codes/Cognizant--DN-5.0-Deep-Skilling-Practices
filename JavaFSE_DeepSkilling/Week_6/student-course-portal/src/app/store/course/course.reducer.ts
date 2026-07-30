import { createReducer, on } from '@ngrx/store';
import * as CourseActions from './course.actions';
import { Course } from '../../services/course';

export interface CourseState {
  courses: Course[];
  error: any;
  loading: boolean;
}

export const initialState: CourseState = {
  courses: [],
  error: null,
  loading: false
};

export const courseReducer = createReducer(
  initialState,
  on(CourseActions.loadCourses, state => ({ ...state, loading: true })),
  on(CourseActions.loadCoursesSuccess, (state, { courses }) => ({ ...state, loading: false, courses })),
  on(CourseActions.loadCoursesFailure, (state, { error }) => ({ ...state, loading: false, error }))
);