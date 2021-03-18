import { IsInt, Max, Min } from 'class-validator';
import { Column } from 'typeorm';

export class CommonAlgorithm {
  @Column()
  @Min(1)
  @Max(88)
  @IsInt()
  algorithm = 1;

  @Column()
  @Min(0)
  @Max(7)
  @IsInt()
  feedback = 0;
}
