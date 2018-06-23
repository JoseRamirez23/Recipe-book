import{ Recipe } from './recipe.model';
export class RecipeService{
    private recipes: Recipe[] = [
        {
        name: 'A new recipe',
        description: 'test recipe',
        imagepath: 'https://memphisgrills.com/wp-content/uploads/2016/09/Korean-Tacos.jpg'
        },
        new Recipe('A test recipe',
        'This is a simple test',
        'https://www.inspiredtaste.net/wp-content/uploads/2012/02/Easy-Chicken-Ragu-1200.jpg')
      ];

      getRecipes():Recipe[]{

        return this.recipes.slice();//return exact copy of original array
      }
}