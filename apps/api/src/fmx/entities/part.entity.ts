import { Field } from '@nestjs/graphql';
import { CommonGeneral } from './common-general.entity';

export class Part {
  @Field(type => CommonGeneral)
  commonGeneral: CommonGeneral;
}
