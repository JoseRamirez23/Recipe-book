import { Recipe } from './../recipe.model';
import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {

  recipes: Recipe[] = [
    {
    name: 'A new recipe',
    description: 'test recipe',
    imagepath: 'https://memphisgrills.com/wp-content/uploads/2016/09/Korean-Tacos.jpg'
    },
    new Recipe('A test recipe',
    'This is a simple test',
    'https://www.inspiredtaste.net/wp-content/uploads/2012/02/Easy-Chicken-Ragu-1200.jpg')
  ];

  @Output() recipeSelected = new EventEmitter<Recipe>();

  constructor() { }

  ngOnInit() {
  }

  onRecipeSelected(recipe:Recipe){
    this.recipeSelected.emit(recipe);

  }

}