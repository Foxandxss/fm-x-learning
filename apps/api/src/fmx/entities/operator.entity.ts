import { Field, Int, ObjectType } from '@nestjs/graphql';
import { ValidateNested } from 'class-validator';
import { OperatorForm } from './operator-form.entity';
import { OperatorLevel } from './operator-level.entity';

@ObjectType()
export class Operator {
  @Field(type => Int)
  operatorNum: number;

  @Field(type => OperatorForm)
  @ValidateNested()
  form: OperatorForm;

  @Field(type => OperatorLevel)
  @ValidateNested()
  level: OperatorLevel;

  constructor(operatorNum: number) {
    this.operatorNum = operatorNum;
    this.form = new OperatorForm();
    this.level = new OperatorLevel();
  }
}
