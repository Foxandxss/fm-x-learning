import { IsEnum, IsString, Max, Min } from 'class-validator';
import { Column } from 'typeorm';
import { EnvelopeField } from '../../common/decorators';

enum Curve {
  MinusLinear = '-linear',
  MinusExp = '-exp',
  PlusExp = '+exp',
  PlusLinear = '+linear',
}

export class OperatorLevel {
  timeSection = new Time();
  levelSection = new Level();

  @Column()
  @EnvelopeField()
  level = 0;

  @Column()
  @Min(-7)
  @Max(7)
  levelVel = 0;

  @Column()
  @Min(0)
  @Max(7)
  time = 0;

  @Column()
  @IsEnum(Curve)
  curveLo = Curve.MinusLinear;

  @Column()
  @IsEnum(Curve)
  curveHi = Curve.MinusLinear;
}

class Time {
  @Column()
  @EnvelopeField()
  hold = 0;

  @Column()
  @EnvelopeField()
  attack = 0;

  @Column()
  @EnvelopeField()
  decay1 = 0;

  @Column()
  @EnvelopeField()
  decay2 = 0;

  @Column()
  @EnvelopeField()
  release = 0;

  @Column()
  @IsString()
  breakPoint = 'C 3';
}

class Level {
  @Column()
  @EnvelopeField()
  attack = 0;

  @Column()
  @EnvelopeField()
  decay1 = 0;

  @Column()
  @EnvelopeField()
  decay2 = 0;

  @Column()
  @EnvelopeField()
  release = 0;

  @Column()
  @EnvelopeField()
  levelkeyLo = 0;

  @Column()
  @EnvelopeField()
  levelkeyHi = 0;
}
