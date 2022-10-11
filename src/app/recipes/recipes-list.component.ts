import { Component, OnInit } from '@angular/core';
import { IDictionary } from '../common/shared/interfaces/IDictionary';

@Component({
  selector: 'app-recipes-list',
  templateUrl: './recipes-list.component.html',
  styleUrls: ['./recipes-list.component.scss']
})
export class RecipesListComponent implements OnInit {

  constructor() { }

  categories: IDictionary[] = [];
  types: IDictionary[] = [];

  selectedCategory!: IDictionary | null;
  selectedType!: IDictionary | null;

  ngOnInit(): void {
    this.categories = [
      { id: 1, name: "Dinner"},
      { id: 1, name: "Lunch"},
      { id: 1, name: "Dinner"},
      { id: 1, name: "Lunch"},
      { id: 1, name: "Lunch"},
      { id: 1, name: "Dinner"},
      { id: 1, name: "Lunch"},
      { id: 1, name: "Lunch"}
    ];

    this.types = [
      { id: 1, name: "Dinner"},
      { id: 1, name: "Lunch"},
      { id: 1, name: "Dinner"},
      { id: 1, name: "Lunch"},
      { id: 1, name: "Lunch"},
      { id: 1, name: "Dinner"},
      { id: 1, name: "Lunch"},
      { id: 1, name: "Lunch"}
    ];
  }

  clear(){
    this.selectedType = null;
  }

}
