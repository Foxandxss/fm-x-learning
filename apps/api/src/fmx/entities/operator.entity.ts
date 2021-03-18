import { ValidateNested } from 'class-validator';
import { Column } from 'typeorm';
import { OperatorForm } from './operator-form.entity';
import { OperatorLevel } from './operator-level.entity';

export class Operator {
  @Column()
  operatorNum: number;

  @Column()
  @ValidateNested()
  form: OperatorForm;

  @Column()
  @ValidateNested()
  level: OperatorLevel;

  constructor(operatorNum: number) {
    this.operatorNum = operatorNum;
    this.form = new OperatorForm();
    this.level = new OperatorLevel();
  }
}
