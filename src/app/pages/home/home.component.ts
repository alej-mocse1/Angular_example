import { Component, OnInit, inject } from '@angular/core';
import { Services } from '../../serv/serv.service';
import { Products } from '../../models/producst';
import { CommonModule } from '@angular/common';
import { CardsComponent } from '../../components/cards/cards.component';
import { tick } from '@angular/core/testing';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule,CardsComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})

export class HomeComponent implements OnInit{

  private service = inject(Services)
  productos:Products[] = []
  

  ngOnInit(): void {
    this.service.getProducts().subscribe((resp: Array<Products>) => {
      
      this.productos = resp.map((el) => {
        return {
          ...el,
          title: el.title.split(' ').slice(0, 3).join(' ')
        }
      })
    })

  }

}
