import { Component, OnDestroy, OnInit , inject} from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Services } from '../../serv/serv.service';
import { Products } from '../../models/producst';
import { CardsComponent } from '../../components/cards/cards.component';

@Component({
  selector: 'app-detail',
  standalone: true,
  imports: [CardsComponent],
  templateUrl: './detail.component.html',
  styleUrl: './detail.component.css'
})
export class DetailComponent implements OnInit,OnDestroy{

  private _ruotesView = inject(ActivatedRoute);
  private _http = inject(Services)
   _ProductsDetail: Array<Products> = [] 


  ngOnInit(): void {
    // console.log("ruotesView",this._ruotesView);
  
    this._ruotesView.params.subscribe((param) => {
    this._ProductsDetail = [];
    const id = param["id"]
      
     this._http.getProductsCategory(id).subscribe((resp) => {
        // console.log("resp",resp);
        this._ProductsDetail = resp
      })

      // this._http.getCategories().subscribe((resp) => {
      //   console.log("categories",resp);
      // })
    });
 
  }


  ngOnDestroy(): void {
      // Cancelar todas las suscripciones cuando el componente se destruya
      this._ProductsDetail = []

  }
}
