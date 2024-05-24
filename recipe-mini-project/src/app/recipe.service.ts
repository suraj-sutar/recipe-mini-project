import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class RecipeService {
  apiKey = 'f5833bd1d7cf4eb08b4013b1ecfc15a8';

  private apiUrl = 'https://api.spoonacular.com/recipes';

  constructor(private http: HttpClient) {}

  searchRecipes(query: string): Observable<any> {
    const url = `${this.apiUrl}/complexSearch?query=${query}&number=5&apiKey=${this.apiKey}`;
    return this.http.get<any>(url);
  }

  getRecipeInformation(id: number): Observable<any> {
    const url = `${this.apiUrl}/${id}/information?includeNutrition=false&apiKey=${this.apiKey}`;
    return this.http.get<any>(url);
  }

  getInstructions(id: number): Observable<any> {
    const url = `${this.apiUrl}/${id}/analyzedInstructions?apiKey=${this.apiKey}`;
    return this.http.get<any>(url);
  }
}
