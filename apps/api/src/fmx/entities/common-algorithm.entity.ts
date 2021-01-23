import { Field, Int, ObjectType } from '@nestjs/graphql';
import { IsInt, Max, Min } from 'class-validator';

@ObjectType()
export class CommonAlgorithm {
  @Field(type => Int)
  @Min(1)
  @Max(88)
  @IsInt()
  algorithm = 1;

  @Field(type => Int)
  @Min(0)
  @Max(7)
  @IsInt()
  feedback = 0;
}
