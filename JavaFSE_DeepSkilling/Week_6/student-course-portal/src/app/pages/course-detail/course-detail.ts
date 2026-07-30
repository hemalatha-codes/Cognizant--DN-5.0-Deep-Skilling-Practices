import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CourseService, Course } from '../../services/course';

@Component({
  selector: 'app-course-detail',
  templateUrl: './course-detail.html',
  styleUrls: ['./course-detail.css']
})
export class CourseDetailComponent implements OnInit {
  course?: Course;

  constructor(
    private route: ActivatedRoute,
    private courseService: CourseService
  ) {}

  ngOnInit(): void {
    const idParam = this.route.snapshot.paramMap.get('id');
    if (idParam) {
      // Subscribe to the observable method stream
      this.courseService.getCourseById(Number(idParam)).subscribe({
        next: (data) => this.course = data,
        error: (err) => console.error('Could not load details', err)
      });
    }
  }
}