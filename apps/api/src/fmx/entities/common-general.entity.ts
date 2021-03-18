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

export class CommonGeneral {
  @Column()
  @MidiRange()
  volume = 100;

  @Column()
  @IsString()
  pan = 'C';

  @Column()
  @MidiRange()
  dryLevel = 127;

  @Column()
  @MidiRange()
  varSend = 0;

  @Column()
  @MidiRange()
  revSend = 12;

  @Column()
  @IsEnum(Polyphony)
  polyphony = Polyphony.Poly;

  @Column()
  @IsEnum(KeyAssign)
  keyAssign = KeyAssign.Multi;

  @Column()
  @IsEnum(OnOff)
  keyOnDlySync = OnOff.Off;

  @Column()
  @MidiRange()
  delayLength = 0;

  @Column()
  @IsEnum(OnOff)
  arpPlayOnly = OnOff.Off;

  @Column()
  @MidiRange()
  randomPan = 0;

  @Column()
  @IsString()
  alternatePan = 'C';

  @Column()
  @Min(-64)
  @Max(63)
  @IsInt()
  scalingPan = 0;

  @Column()
  @MidiRange({ min: 1 })
  velocityLimitLower = 1;

  @Column()
  @MidiRange({ min: 1 })
  velocityLimitUpper = 127;

  @Column()
  @IsString()
  noteLimitLower = 'C -2';

  @Column()
  @IsString()
  noteLimitUpper = 'G 8';

  @Column()
  @MidiRange()
  velocityOffset = 64;

  @Column()
  @MidiRange()
  velocityDepth = 64;
}
