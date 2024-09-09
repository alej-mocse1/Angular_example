import { Component, OnInit } from '@angular/core';
import { inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Services } from '../../serv/serv.service';
import { ActivatedRoute } from '@angular/router';
import { ProductDetail } from '../../models/producst';

@Component({
  selector: 'app-detail-product',
  standalone: true,
  imports: [],
  templateUrl: './detail-product.component.html',
  styleUrl: './detail-product.component.css'
})
export class DetailProductComponent implements OnInit{

  private _http = inject(Services)
  private _ruotesView = inject(ActivatedRoute)
   _Product:ProductDetail = {
    title: "",
    price: 0,
    description: "",
    image: "",
    category: "",
    id: 0,
    rating: {
      rate: 0,
      count: 0
    }
   };


   _cuotas:number = 0

  ngOnInit(): void {
    // console.log("ruotesView",this._ruotesView);
  
    this._ruotesView.params.subscribe((param) => {
 
    const id = param["id"]
      
     this._http.getDetailProducts(id).subscribe((resp) => {
        //  console.log("resp",resp);
         this._Product = resp
         this._cuotas = Math.floor(resp.price / 12)

      })


    });
 
  }

}
