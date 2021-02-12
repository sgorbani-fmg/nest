import { Module, HttpModule} from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import { RecipesModule } from './recipes/recipes.module';
import { CategoryModule } from './recipes/category.module';


@Module({
  imports: [
    HttpModule.register({
      baseURL:"http://supermarket.wilshire.com:5000/"}),
    RecipesModule,
    CategoryModule,
    GraphQLModule.forRoot({
      installSubscriptionHandlers: true,
      autoSchemaFile: 'schema.gql',
    }),
  ],
})
export class AppModule {}
