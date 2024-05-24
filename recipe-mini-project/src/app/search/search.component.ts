import { Component, OnInit } from '@angular/core';
import { RecipeService } from '../recipe.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css'],
})
export class SearchComponent implements OnInit {
  searchText: string = '';
  recipes: any[] = [];

  constructor(private recipeService: RecipeService) {}

  searchRecipes(): void {
    this.recipeService.searchRecipes(this.searchText).subscribe(
      (data) => {
        this.recipes = data.results;
        console.log(data);
      },
      (error) => {
        console.error('Error fetching recipes:', error);
      }
    );
  }

  ngOnInit(): void {}
}
