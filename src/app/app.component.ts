import { Component } from '@angular/core';
import { RouterOutlet , RouterLink} from '@angular/router';
import { CardsComponent } from "./components/cards/cards.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, RouterLink, CardsComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Angular tienda';
}
