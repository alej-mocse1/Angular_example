import { Component , Input } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-cards',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './cards.component.html',
  styleUrl: './cards.component.css'
})
export class CardsComponent {

  @Input() title?: string;  
  @Input() description?: string;
  @Input() image?: string; 
  @Input() id?: number;
}

