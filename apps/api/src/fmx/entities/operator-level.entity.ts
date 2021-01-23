import { Field, Int, registerEnumType } from '@nestjs/graphql';
import { IsEnum, IsString, Max, Min } from 'class-validator';
import { EnvelopeField } from '../../common/decorators';

enum Curve {
  MinusLinear = '-linear',
  MinusExp = '-exp',
  PlusExp = '+exp',
  PlusLinear = '+linear',
}

registerEnumType(Curve, { name: 'Curve' });

export class OperatorLevel {
  timeSection = new Time();
  levelSection = new Level();

  @Field(type => Int)
  @EnvelopeField()
  level = 0;

  @Field(type => Int)
  @Min(-7)
  @Max(7)
  levelVel = 0;

  @Field(type => Int)
  @Min(0)
  @Max(7)
  time = 0;

  @Field(type => Curve)
  @IsEnum(Curve)
  curveLo = Curve.MinusLinear;

  @Field(type => Curve)
  @IsEnum(Curve)
  curveHi = Curve.MinusLinear;
}

class Time {
  @Field(type => Int)
  @EnvelopeField()
  hold = 0;

  @Field(type => Int)
  @EnvelopeField()
  attack = 0;

  @Field(type => Int)
  @EnvelopeField()
  decay1 = 0;

  @Field(type => Int)
  @EnvelopeField()
  decay2 = 0;

  @Field(type => Int)
  @EnvelopeField()
  release = 0;

  @Field(type => String)
  @IsString()
  breakPoint = 'C 3';
}

class Level {
  @Field(type => Int)
  @EnvelopeField()
  attack = 0;

  @Field(type => Int)
  @EnvelopeField()
  decay1 = 0;

  @Field(type => Int)
  @EnvelopeField()
  decay2 = 0;

  @Field(type => Int)
  @EnvelopeField()
  release = 0;

  @Field(type => Int)
  @EnvelopeField()
  levelkeyLo = 0;

  @Field(type => Int)
  @EnvelopeField()
  levelkeyHi = 0;
}
