import { Field } from '@nestjs/graphql';
import { ValidateNested } from 'class-validator';
import { CommonGeneral } from './common-general.entity';

export class Part {
  @Field(type => CommonGeneral)
  @ValidateNested()
  commonGeneral: CommonGeneral;
}
