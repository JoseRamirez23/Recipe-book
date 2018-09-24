import { Ingredient } from "../shared/ingredient.model";

export class ShoppingListService{
    private ingredients: Ingredient[]=[

        {
          name:'apple',
          amount:5
        },
        new Ingredient('Tomatoes',10)
      ];
      getIngredients():Ingredient[]{
        return this.ingredients.slice();}

        addIngredient(ingredient:Ingredient){
            
        }
}