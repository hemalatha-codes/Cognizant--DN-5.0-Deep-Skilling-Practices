import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './components/header/header';
import { HomeComponent } from './pages/home/home';
import { Routes } from '@angular/router';
import { CourseListComponent } from './pages/course-list/course-list';

export const routes: Routes = [
  { path: 'courses', component: CourseListComponent },
  { path: '', redirectTo: '/courses', pathMatch: 'full' }
];

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, HeaderComponent, HomeComponent],
  templateUrl: './app.html',
styleUrl: './app.css'
})
export class AppComponent {
  title = 'student-course-portal';
}