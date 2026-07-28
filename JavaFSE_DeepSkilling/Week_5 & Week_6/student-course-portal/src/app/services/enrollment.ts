import { Injectable } from '@angular/core';
import { CourseService, Course } from './course';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class EnrollmentService {
  private enrolledCourseIds: number[] = [101, 102]; // Mock data tracking

  constructor(private courseService: CourseService) {}

  getEnrolledCourses(): Observable<Course[]> {
    // Pipe the stream and filter the array inside the RxJS map operator
    return this.courseService.getCourses().pipe(
      map((allCourses: Course[]) => 
        allCourses.filter(c => this.enrolledCourseIds.includes(c.id))
      )
    );
  }
}