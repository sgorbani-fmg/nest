import { Injectable } from '@nestjs/common';
import { NewRecipeInput } from './dto/new-recipe.input';
import { RecipesArgs } from './dto/recipes.args';
import { Recipe } from './models/recipe.model';
import { environment } from '../environment';


@Injectable()
export class RecipesService {
  /**
   * MOCK
   * Put some real business logic here
   * Left for demonstration purposes
   */
    endpoint: string;
    //endpointSignUp: string;

    // constructor(private http: HttpClient) {
    //     this.endpoint = environment.ResourceServer + "api/categories";
    //     //this.endpointSignUp = environment.ResourceServer + "sign-up";
    // }

  async create(data: NewRecipeInput): Promise<Recipe> {
    return {} as any;
  }

  async findOneById(id: string): Promise<Recipe> {
    //return this.http.get<ListOfUsers>(`${this.endpoint}?limit=${quantity}&offset=${(page - 1) * quantity}`);
   
   
    let R = new Recipe ()
    
    if (id == "Saeed")
    {
      R.creationDate = new Date()
      R.description = "saeed's new Recepie"
      R.ingredients = ["Beans","Vegetables"]
      R.title ="Saeed"
    }
    else if (id == "Frank")
    {
      R.creationDate = new Date()
      R.description = " Frank's new Recepie"
      R.ingredients = ["Salt", "Peppesr","Tomato"]
      R.title ="Frank"

    }
      return R
    //return {} as any;
  }

  async findAll(recipesArgs: RecipesArgs): Promise<Recipe[]> {
    return [] as Recipe[];
  }

  async remove(id: string): Promise<boolean> {
    return true;
  }
}
