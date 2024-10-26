import { Component } from '@angular/core';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css'] // si vous avez un fichier CSS
})
export class DetailsComponent {
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
      name: 'Apple pie',
      description: 'Notre tarte de pommes vedette',
      price: 14,
      image: 'assets/images/products/applepiesmall.jpg'
    },
    {
      id: 3,
      name: 'Cherry pie',
      description: 'La classique!',
      price: 18,
      image: 'assets/images/products/cherrypiesmall.jpg'
    },
    {
      id: 4,
      name: 'Cranberry pie',
      description: 'En un mot ... Onctueuse !',
      price: 16,
      image: 'assets/images/products/cranberrypiessmall.jpg'
    },
    {
      id: 5,
      name: 'Peach pie',
      description: 'Un délice!',
      price: 18,
      image: 'assets/images/products/peachpiesmall.jpg'
    },
    {
      id: 6,
      name: 'Pumpkin pie',
      description: 'Le sommet du goût !',
      price: 17,
      image: 'assets/images/products/pumpkinpiesmall.jpg'
    },
    {
      id: 7,
      name: 'Strawberry Cheese Cake',
      description: 'L\'authentique',
      price: 13,
      image: 'assets/images/products/strawberrycheesecakesmall.jpg'
    }
  ];
}
