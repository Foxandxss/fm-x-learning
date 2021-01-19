import { Field, Int, registerEnumType } from '@nestjs/graphql';
import { IsEnum, IsInt, IsString, Max, Min } from 'class-validator';
import { Column } from 'typeorm';
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

export class CommonGeneral {
  @Field(type => Int)
  @Column()
  @MidiRange()
  volume = 100;

  @Field(type => String)
  @Column()
  @IsString()
  pan = 'C';

  @Field(type => Int)
  @Column()
  @MidiRange()
  dryLevel = 127;

  @Field(type => Int)
  @Column()
  @MidiRange()
  varSend = 0;

  @Field(type => Int)
  @Column()
  @MidiRange()
  revSend = 12;

  @Field(type => Polyphony)
  @Column({ type: 'enum', enum: Polyphony })
  @IsEnum(Polyphony)
  polyphony = Polyphony.Poly;

  @Field(type => KeyAssign)
  @Column({ type: 'enum', enum: KeyAssign })
  @IsEnum(KeyAssign)
  keyAssign = KeyAssign.Multi;

  @Field(type => OnOff)
  @Column({ type: 'enum', enum: OnOff })
  @IsEnum(OnOff)
  keyOnDlySync = OnOff.Off;

  @Field(type => Int)
  @Column()
  @MidiRange()
  delayLength = 0;

  @Field(type => OnOff)
  @Column({ type: 'enum', enum: OnOff })
  @IsEnum(OnOff)
  arpPlayOnly = OnOff.Off;

  @Field(type => Int)
  @Column()
  @MidiRange()
  randomPan = 0;

  @Field(type => String)
  @Column()
  @IsString()
  alternatePan = 'C';

  @Field(type => Int)
  @Column()
  @Min(-64)
  @Max(63)
  @IsInt()
  scanlingPan = 0;

  @Field(type => Int)
  @Column()
  @MidiRange({ min: 1 })
  velocityLimitLower = 1;

  @Field(type => Int)
  @Column()
  @MidiRange({ min: 1 })
  velocityLimitUpper = 127;

  @Field(type => String)
  @Column()
  @IsString()
  noteLimitLower = 'C -2';

  @Field(type => String)
  @Column()
  @IsString()
  noteLimitUpper = 'G 8';

  @Field(type => Int)
  @Column()
  @MidiRange()
  velocityOffset = 64;

  @Field(type => Int)
  @Column()
  @MidiRange()
  velocityDepth = 64;
}
