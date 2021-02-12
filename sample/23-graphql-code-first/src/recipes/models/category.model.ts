import { Field, ID, ObjectType } from '@nestjs/graphql';

@ObjectType()
export class Category {
  @Field(type => ID)
  id: Number;

  @Field()
 name: string;

}