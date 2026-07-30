import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, NgForm } from '@angular/forms';

@Component({
  selector: 'app-enrollment-form',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './enrollment-form.html',
  styleUrls: ['./enrollment-form.css']
})
export class EnrollmentFormComponent {
  student = { name: '', email: '', courseId: '' };

  onSubmit(form: NgForm): void {
    if (form.valid) {
      console.log('Template Form Submitted Successfully!', this.student);
      alert(`Successfully Enrolled in Course ID: ${this.student.courseId}`);
      form.resetForm();
    }
  }
}