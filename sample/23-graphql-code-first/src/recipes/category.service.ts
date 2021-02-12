import { Injectable, HttpService } from '@nestjs/common';
import { NewCategoryInput } from './dto/new-category.input';
import { CategoriesArgs } from './dto/categories.args';
import { Category } from './models/category.model';
import { environment } from '../environment';
import { getEnabledCategories } from 'trace_events';


@Injectable()
export class CategoryService {
  /**
   * MOCK
   * Put some real business logic here
   * Left for demonstration purposes
   */
    endpoint: string;
    //endpointSignUp: string;

    constructor(private http: HttpService) {
        this.endpoint = environment.ResourceServer + "api/categories";
        //this.endpointSignUp = environment.ResourceServer + "sign-up";
    }

  async create(data: NewCategoryInput): Promise<Category> {
    return {} as any;
  }

  async findOneById(id: string): Promise<Category> {
    //return this.http.get<Category>()(`${this.endpoint}?limit=${quantity}&offset=${(page - 1) * quantity}`);
    //return this.http.get<ListOfUsers>(`${this.endpoint}?limit=${quantity}&offset=${(page - 1) * quantity}`);
   
    let R = new Category ()
    
    if (id == "saeed")
    {
      R.id = 101
      R.name = "saeed's "
    }
    else
    {
      R.id = 102
      R.name = "Frank's "
    }
      return R
    //return {} as any;
  }

  async findAll(): Promise<Category[]> {
    //return this.http.get<Category[any]>(`${this.endpoint}`,);
    let r = new Category()
    
    r[0].id = 101
    r[0].name = "saeed"
    r[1].id = 102
    r[1].name = "frank"
    // if (id == "saeed")
    // {
    //   R.id = 101
    //   R.name = "saeed's "
    // }
    // else
    // {
    //   R.id = 102
    //   R.name = "Frank's "
    // }
    //   return R
    return [] as Category[]
  }

  async remove(id: any): Promise<boolean> {
    return true;
  }
}
