import { createFeatureSelector, createSelector } from '@ngrx/store';
import { CourseState } from './course.reducer';

export const selectCourseState = createFeatureSelector<CourseState>('courseFeature');

export const selectAllCourses = createSelector(
  selectCourseState,
  (state: CourseState) => state.courses
);