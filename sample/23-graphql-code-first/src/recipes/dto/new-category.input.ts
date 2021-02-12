import { Field, InputType } from '@nestjs/graphql';
import { IsOptional, Length, MaxLength } from 'class-validator';

@InputType()
export class NewCategoryInput {
  @Field()
  @MaxLength(30)
  title: string;

  @Field(type => [String])
  name: string[];
}
