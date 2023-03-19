import { Component } from '@angular/core';
import { FormControl } from "@angular/forms";

@Component({
  selector: 'app-formulaire-shop',
  templateUrl: './formulaire-shop.component.html',
  styleUrls: ['./formulaire-shop.component.css']
})
export class FormulaireShopComponent {
  name = new FormControl('');
  surname = new FormControl('');
  age = new FormControl('');

 onSubmit(){
  
 }

 update(){
  this.name.setValue("Paolo");
  this.surname.setValue("Brunello");
  this.age.setValue("20/03/2022")
 }

}
