import { Field, Int, ObjectType, registerEnumType } from '@nestjs/graphql';
import { IsEnum, IsString, Max, Min } from 'class-validator';
import { Column } from 'typeorm';
import { EnvelopeField } from '../../common/decorators';

enum Curve {
  MinusLinear = '-linear',
  MinusExp = '-exp',
  PlusExp = '+exp',
  PlusLinear = '+linear',
}

registerEnumType(Curve, { name: 'Curve' });

@ObjectType()
export class OperatorLevel {
  timeSection = new Time();
  levelSection = new Level();

  @Field(type => Int)
  @Column()
  @EnvelopeField()
  level = 0;

  @Field(type => Int)
  @Column()
  @Min(-7)
  @Max(7)
  levelVel = 0;

  @Field(type => Int)
  @Column()
  @Min(0)
  @Max(7)
  time = 0;

  @Field(type => Curve)
  @Column()
  @IsEnum(Curve)
  curveLo = Curve.MinusLinear;

  @Field(type => Curve)
  @Column()
  @IsEnum(Curve)
  curveHi = Curve.MinusLinear;
}

class Time {
  @Field(type => Int)
  @Column()
  @EnvelopeField()
  hold = 0;

  @Field(type => Int)
  @Column()
  @EnvelopeField()
  attack = 0;

  @Field(type => Int)
  @Column()
  @EnvelopeField()
  decay1 = 0;

  @Field(type => Int)
  @Column()
  @EnvelopeField()
  decay2 = 0;

  @Field(type => Int)
  @Column()
  @EnvelopeField()
  release = 0;

  @Field(type => String)
  @Column()
  @IsString()
  breakPoint = 'C 3';
}

class Level {
  @Field(type => Int)
  @Column()
  @EnvelopeField()
  attack = 0;

  @Field(type => Int)
  @Column()
  @EnvelopeField()
  decay1 = 0;

  @Field(type => Int)
  @Column()
  @EnvelopeField()
  decay2 = 0;

  @Field(type => Int)
  @Column()
  @EnvelopeField()
  release = 0;

  @Field(type => Int)
  @Column()
  @EnvelopeField()
  levelkeyLo = 0;

  @Field(type => Int)
  @Column()
  @EnvelopeField()
  levelkeyHi = 0;
}
