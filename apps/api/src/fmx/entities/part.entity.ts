import { Field } from '@nestjs/graphql';
import { ArrayMaxSize, ArrayMinSize, ValidateNested } from 'class-validator';
import { CommonAlgorithm } from './common-algorithm.entity';
import { CommonGeneral } from './common-general.entity';
import { Operator } from './operator.entity';

export class Part {
  @Field(type => CommonGeneral)
  @ValidateNested()
  commonGeneral: CommonGeneral;

  @Field(type => CommonAlgorithm)
  @ValidateNested()
  commonAlgorithm: CommonAlgorithm;

  @Field(type => Operator)
  @ValidateNested({ each: true })
  @ArrayMinSize(8)
  @ArrayMaxSize(8)
  operators: Operator[] = [];

  constructor() {
    this.commonGeneral = new CommonGeneral();
    this.commonAlgorithm = new CommonAlgorithm();

    for (let i = 0; i <= 7; i++) {
      this.operators.push(new Operator(i + 1));

      // First operator has a different default
      if (i === 0) {
        this.operators[i].level.level = 99;
      }
    }
  }
}
