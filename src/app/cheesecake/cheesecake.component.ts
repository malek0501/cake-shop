import { Component } from '@angular/core';

@Component({
  selector: 'app-cheesecake',
  templateUrl: './cheesecake.component.html',
  styleUrls: ['./cheesecake.component.css'] // si vous avez un fichier CSS
})
export class CheesecakeComponent {
  products = [
    {
      id: 1,
      name: 'Cheese cake',
      description: 'Un pur plaisir.',
      price: 12,
      image: 'assets/images/products/cheesecakesmall.jpg'
    },
    {
      id: 2,
      name: 'Strawberry Cheese Cake',
      description: 'L\'authentique',
      price: 13,
      image: 'assets/images/products/strawberrycheesecakesmall.jpg'
    }
  ];
}
