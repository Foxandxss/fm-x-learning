import { Field, Int, ObjectType, registerEnumType } from '@nestjs/graphql';
import { IsEnum, IsInt, Max, Min } from 'class-validator';
import { Column } from 'typeorm';
import { EnvelopeField } from '../../common/decorators';
import { OnOff } from '../../common/enums';

enum FreqMode {
  Ratio = 'ratio',
  Fixed = 'fixed',
}

enum Spectral {
  Sine = 'sine',
  All1 = 'all 1',
  All2 = 'all 2',
  Odd1 = 'odd 1',
  Odd2 = 'odd 2',
  Res1 = 'res 1',
  Res2 = 'res 2',
}

registerEnumType(FreqMode, { name: 'FreqMode' });
registerEnumType(Spectral, { name: 'Spectral' });

@ObjectType()
export class OperatorForm {
  timeSection = new Time();
  levelSection = new Level();

  @Field(type => FreqMode)
  @Column()
  @IsEnum(FreqMode)
  freqMode = FreqMode.Ratio;

  @Field(type => Int)
  @Column()
  @Min(0)
  @Max(31)
  @IsInt()
  coarse = 1;

  @Field(type => Int)
  @Column()
  @Min(0)
  @Max(11)
  @IsInt()
  fine = 0;

  @Field(type => Spectral)
  @Column()
  spectral = Spectral.Sine;

  @Field(type => Int)
  @Column()
  @Min(0)
  @Max(7)
  @IsInt()
  skirt = 0;

  @Field(type => Int)
  @Column()
  @EnvelopeField()
  resonance = 0;

  @Field(type => OnOff)
  @Column()
  @IsEnum(OnOff)
  keyOnReset = OnOff.On;

  @Field(type => Int)
  @Column()
  @Min(-15)
  @Max(15)
  @IsInt()
  detune = 0;
}

class Time {
  @Field(type => Int)
  @Column()
  @EnvelopeField()
  attack = 0;

  @Field(type => Int)
  @Column()
  @EnvelopeField()
  decay = 0;
}

class Level {
  @Field(type => Int)
  @Column()
  @Min(-50)
  @Max(50)
  @IsInt()
  initial = 0;

  @Field(type => Int)
  @Column()
  @Min(-50)
  @Max(50)
  @IsInt()
  attack = 0;
}
