import { NotFoundException } from '@nestjs/common';
import { Args, Mutation, Query, Resolver, Subscription } from '@nestjs/graphql';
import { PubSub } from 'apollo-server-express';
import { NewCategoryInput } from './dto/new-category.input';
import { CategoriesArgs } from './dto/categories.args';
import { Category } from './models/Category.model';
import { CategoryService } from './category.service';


const pubSub = new PubSub();

@Resolver(of => Category)
export class CategoryResolver {
  constructor(private readonly categoryService: CategoryService) {}

  @Query(returns => Category)
  async category(@Args('id') id: string): Promise<Category> {
    const category = await this.categoryService.findOneById(id);
    if (!category) {
      throw new NotFoundException(id);
    }
    return category;
  }

  @Query(returns => [Category])
  categories(@Args() categoryArgs: CategoriesArgs): Promise<Category[]> {
    return this.categoryService.findAll();
  }

  @Mutation(returns => Category)
  async addCategory(
    @Args('newCategoryData') newCategoryData: NewCategoryInput,
  ): Promise<Category> {
    const category = await this.categoryService.create(newCategoryData);
    pubSub.publish('categoryAdded', { categoryAdded: category });
    return category;
  }

  @Mutation(returns => Boolean)
  async removeCategory(@Args('id') id: string) {
    return this.categoryService.remove(id);
  }

  @Subscription(returns => Category)
  categoryAdded() {
    return pubSub.asyncIterator('categoryAdded');
  }
}
