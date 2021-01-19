import { Field } from '@nestjs/graphql';
import { Column } from 'typeorm';
import { CommonGeneral } from './common-general.entity';

export class Part {
  @Field(type => CommonGeneral)
  @Column(type => CommonGeneral)
  commonGeneral: CommonGeneral;
}
