import { Field, Int, ObjectType, registerEnumType } from '@nestjs/graphql';
import { IsEnum, IsInt, IsString, Max, Min } from 'class-validator';
import { MidiRange } from '../../common/decorators';
import { OnOff } from '../../common/enums';

enum Polyphony {
  Mono = 'mono',
  Poly = 'poly',
}

enum KeyAssign {
  Single = 'single',
  Multi = 'multi',
}

registerEnumType(Polyphony, { name: 'Polyphony' });
registerEnumType(KeyAssign, { name: 'KeyAssign' });

@ObjectType()
export class CommonGeneral {
  @Field(type => Int)
  @MidiRange()
  volume = 100;

  @Field(type => String)
  @IsString()
  pan = 'C';

  @Field(type => Int)
  @MidiRange()
  dryLevel = 127;

  @Field(type => Int)
  @MidiRange()
  varSend = 0;

  @Field(type => Int)
  @MidiRange()
  revSend = 12;

  @Field(type => Polyphony)
  @IsEnum(Polyphony)
  polyphony = Polyphony.Poly;

  @Field(type => KeyAssign)
  @IsEnum(KeyAssign)
  keyAssign = KeyAssign.Multi;

  @Field(type => OnOff)
  @IsEnum(OnOff)
  keyOnDlySync = OnOff.Off;

  @Field(type => Int)
  @MidiRange()
  delayLength = 0;

  @Field(type => OnOff)
  @IsEnum(OnOff)
  arpPlayOnly = OnOff.Off;

  @Field(type => Int)
  @MidiRange()
  randomPan = 0;

  @Field(type => String)
  @IsString()
  alternatePan = 'C';

  @Field(type => Int)
  @Min(-64)
  @Max(63)
  @IsInt()
  scanlingPan = 0;

  @Field(type => Int)
  @MidiRange({ min: 1 })
  velocityLimitLower = 1;

  @Field(type => Int)
  @MidiRange({ min: 1 })
  velocityLimitUpper = 127;

  @Field(type => String)
  @IsString()
  noteLimitLower = 'C -2';

  @Field(type => String)
  @IsString()
  noteLimitUpper = 'G 8';

  @Field(type => Int)
  @MidiRange()
  velocityOffset = 64;

  @Field(type => Int)
  @MidiRange()
  velocityDepth = 64;
}
