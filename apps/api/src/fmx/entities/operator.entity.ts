import { Field, Int, ObjectType } from '@nestjs/graphql';
import { ValidateNested } from 'class-validator';
import { Column } from 'typeorm';
import { OperatorForm } from './operator-form.entity';
import { OperatorLevel } from './operator-level.entity';

@ObjectType()
export class Operator {
  @Field(type => Int)
  @Column()
  operatorNum: number;

  @Field(type => OperatorForm)
  @Column()
  @ValidateNested()
  form: OperatorForm;

  @Field(type => OperatorLevel)
  @Column()
  @ValidateNested()
  level: OperatorLevel;

  constructor(operatorNum: number) {
    this.operatorNum = operatorNum;
    this.form = new OperatorForm();
    this.level = new OperatorLevel();
  }
}
