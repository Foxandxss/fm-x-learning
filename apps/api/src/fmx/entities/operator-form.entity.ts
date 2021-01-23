import { Field, Int, ObjectType, registerEnumType } from '@nestjs/graphql';
import { IsEnum, IsInt, Max, Min } from 'class-validator';
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
  @IsEnum(FreqMode)
  freqMode = FreqMode.Ratio;

  @Field(type => Int)
  @Min(0)
  @Max(31)
  @IsInt()
  coarse = 1;

  @Field(type => Int)
  @Min(0)
  @Max(11)
  @IsInt()
  fine = 0;

  @Field(type => Spectral)
  spectral = Spectral.Sine;

  @Field(type => Int)
  @Min(0)
  @Max(7)
  @IsInt()
  skirt = 0;

  @Field(type => Int)
  @EnvelopeField()
  resonance = 0;

  @Field(type => OnOff)
  @IsEnum(OnOff)
  keyOnReset = OnOff.On;

  @Field(type => Int)
  @Min(-15)
  @Max(15)
  @IsInt()
  detune = 0;
}

class Time {
  @Field(type => Int)
  @EnvelopeField()
  attack = 0;

  @Field(type => Int)
  @EnvelopeField()
  decay = 0;
}

class Level {
  @Field(type => Int)
  @Min(-50)
  @Max(50)
  @IsInt()
  initial = 0;

  @Field(type => Int)
  @Min(-50)
  @Max(50)
  @IsInt()
  attack = 0;
}
