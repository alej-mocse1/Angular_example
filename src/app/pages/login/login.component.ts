import { Component, inject, OnInit } from '@angular/core';
import { ReactiveFormsModule, FormBuilder, FormGroup, Validators, FormsModule } from '@angular/forms';
import { NgClass } from '@angular/common';


@Component({
  selector: 'app-login',
  standalone: true,
  imports: [ReactiveFormsModule,NgClass],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})


export class LoginComponent  {

 
   private _fb = inject(FormBuilder)
   myForm: FormGroup;
   showToast = false;

   constructor() {
     // Inicializar el formulario
     this.myForm = this._fb.group({
       name: ['', Validators.required],
       LastName: ['', Validators.required],
       email: ['', [Validators.required, Validators.email]],
       password: ['', [Validators.required, Validators.minLength(6)]]
     });
   }

 
   enviar(){

    // Obtener los valores del formulario
    const formData = this.myForm.value;

    // Guardar los datos en localStorage
    localStorage.setItem('usuario', JSON.stringify(formData));

    this.showToast = true;
    setTimeout(() => {
      this.showToast = false;
    }, 3000);  // Ocultar después de 3 segundos
  
   }

   HasErrors(Input:string , typeErr:string){
      return  this.myForm.get(Input)?.hasError(typeErr) && this.myForm.get(Input)?.touched
  }



}
