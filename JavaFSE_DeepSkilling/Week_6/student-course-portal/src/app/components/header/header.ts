import { Component } from '@angular/core';
import { RouterLink } from '@angular/router'; // <-- IMPORT THIS

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [RouterLink], // <-- ADD IT HERE
  templateUrl: './header.html',
  styleUrls: ['./header.css']
})
export class HeaderComponent {}