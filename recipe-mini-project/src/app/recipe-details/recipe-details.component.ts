import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { RecipeService } from '../recipe.service';

@Component({
  selector: 'app-recipe-details',
  templateUrl: './recipe-details.component.html',
  styleUrls: ['./recipe-details.component.css'],
})
export class RecipeDetailsComponent implements OnInit {
  recipeId: number = 0;
  recipe: any; // Adjust this type as per your recipe object structure
  instructions: string[] = []; // Array to store individual steps of instructions

  constructor(
    private route: ActivatedRoute,
    private recipeService: RecipeService
  ) {}

  ngOnInit(): void {
    this.route.paramMap.subscribe((params) => {
      const id = params.get('id');
      if (id !== null) {
        this.recipeId = +id; // Get recipe ID from route parameter
        this.loadRecipeDetails();
      } else {
        // Handle the case where 'id' parameter is not present
        console.error('Recipe ID not found in route parameters.');
      }
    });
  }

  loadRecipeDetails(): void {
    this.recipeService.getRecipeInformation(this.recipeId).subscribe(
      (data: any) => {
        this.recipe = data; // Assuming data contains the recipe details
        this.instructions = this.recipe.instructions.split('. ');
        console.log(data);
      },
      (error: any) => {
        console.error('Error fetching recipe details:', error);
        // Handle error (e.g., display error message)
      }
    );
  }
}
