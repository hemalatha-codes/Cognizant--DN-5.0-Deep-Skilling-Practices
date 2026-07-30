import { Component, Input, Output, EventEmitter, OnChanges, SimpleChanges } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HighlightDirective } from '../../directives/highlight'; // <-- IMPORT
import { CreditLabelPipe } from '../../pipes/credit-label-pipe';         // <-- IMPORT

@Component({
  selector: 'app-course-card',
  standalone: true,
  imports: [CommonModule, HighlightDirective, CreditLabelPipe], // <-- DECLARE THEM HERE
  templateUrl: './course-card.html',
  styleUrls: ['./course-card.css']
})
export class CourseCardComponent implements OnChanges {
  @Input() course!: { id: number; name: string; code: string; credits: number; status: string };
  @Output() enrollRequested = new EventEmitter<number>();

  ngOnChanges(changes: SimpleChanges): void {
    console.log('Course card properties changed:', changes['course'].currentValue);
  }

  onEnrollClick(): void {
    this.enrollRequested.emit(this.course.id);
  }
}