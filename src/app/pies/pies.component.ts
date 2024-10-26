import { Component } from '@angular/core';

@Component({
  selector: 'app-pies',
  templateUrl: './pies.component.html',
  styleUrls: ['./pies.component.css'] // si vous avez un fichier CSS
})
export class PiesComponent {
  pies = [
    {
      id: 1,
      name: 'Apple pie',
      description: 'Notre tarte de pommes vedette',
      price: 14,
      image: 'assets/images/products/applepiesmall.jpg'
    },
    {
      id: 2,
      name: 'Cherry pie',
      description: 'La classique!',
      price: 18,
      image: 'assets/images/products/cherrypiesmall.jpg'
    },
    {
      id: 3,
      name: 'Cranberry pie',
      description: 'En un mot ... Onctueuse !',
      price: 16,
      image: 'assets/images/products/cranberrypiessmall.jpg'
    },
    {
      id: 4,
      name: 'Peach pie',
      description: 'Un délice!',
      price: 18,
      image: 'assets/images/products/peachpiesmall.jpg'
    },
    {
      id: 5,
      name: 'Pumpkin pie',
      description: 'Le sommet du goût !',
      price: 17,
      image: 'assets/images/products/pumpkinpiesmall.jpg'
    }
  ];
}
