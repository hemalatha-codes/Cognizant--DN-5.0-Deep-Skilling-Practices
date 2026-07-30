import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Store } from '@ngrx/store';
import { CourseCardComponent } from '../../components/course-card/course-card';
import { Course } from '../../services/course';
import * as CourseActions from '../../store/course/course.actions';
import { selectAllCourses } from '../../store/course/course.selectors';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-course-list',
  standalone: true,
  imports: [CommonModule, CourseCardComponent],
  templateUrl: './course-list.html',
  styleUrls: ['./course-list.css']
})
export class CourseListComponent implements OnInit {
  selectedCourseId: number | null = null;
  
  // Expose as an Observable directly to the template stream
  courses$: Observable<Course[]> = this.store.select(selectAllCourses);

  constructor(private store: Store) {}

  ngOnInit(): void {
    // Dispatch the action to kick off the backend HTTP call
    this.store.dispatch(CourseActions.loadCourses());
  }

  onEnroll(courseId: number): void {
    this.selectedCourseId = courseId;
  }
}