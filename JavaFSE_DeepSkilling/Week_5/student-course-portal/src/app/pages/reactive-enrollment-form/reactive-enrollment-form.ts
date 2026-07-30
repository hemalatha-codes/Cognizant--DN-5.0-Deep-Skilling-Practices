import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormBuilder, FormGroup, FormArray, Validators, AbstractControl, ValidationErrors } from '@angular/forms';

@Component({
  selector: 'app-reactive-enrollment-form',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './reactive-enrollment-form.html',
  styleUrls: ['./reactive-enrollment-form.css']
})
export class ReactiveEnrollmentFormComponent implements OnInit {
  enrollForm!: FormGroup;

  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
    this.enrollForm = this.fb.group({
      studentName: ['', [Validators.required, Validators.minLength(3)]],
      // Attaching our custom structural validator rule directly below
      courseCode: ['', [Validators.required, this.forbiddenCodeValidator]],
      additionalCourses: this.fb.array([]) // Dynamic array interface
    });
  }

  // Custom code checking logic engine
  forbiddenCodeValidator(control: AbstractControl): ValidationErrors | null {
    const value: string = control.value || '';
    if (value.toUpperCase().startsWith('XX')) {
      return { forbiddenCode: true }; // Error identifier key found
    }
    return null;
  }

  get additionalCourses(): FormArray {
    return this.enrollForm.get('additionalCourses') as FormArray;
  }

  addCourseField(): void {
    this.additionalCourses.push(this.fb.control('', Validators.required));
  }

  removeCourseField(index: number): void {
    this.additionalCourses.removeAt(index);
  }

  onSubmit(): void {
    if (this.enrollForm.valid) {
      console.log('Reactive Form Data Stream Object:', this.enrollForm.value);
      alert('Reactive Form Processed Successfully!');
    }
  }
}