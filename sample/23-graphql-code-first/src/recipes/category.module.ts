import { Module, HttpService, HttpModule } from '@nestjs/common';
import { DateScalar } from '../common/scalars/date.scalar';
import { CategoryResolver } from './category.resolver';
import { CategoryService } from './category.service';

@Module({
  providers: [CategoryResolver, CategoryService, DateScalar],
  imports:[HttpModule]
})
export class CategoryModule {}
