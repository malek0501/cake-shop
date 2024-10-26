import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  favorite: string = '';

  ngOnInit(): void {
    this.loadFavorite();
  }

  save(): void {
    localStorage.setItem("liked", 'true');
    this.favorite = "Merci d'avoir aimé nos produits!";
  }

  loadFavorite(): void {
    if (localStorage.getItem('liked') === 'true') {
      this.favorite = "Merci d'avoir aimé nos produits!";
    }
  }
}
