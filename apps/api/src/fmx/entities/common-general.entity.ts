import { Field, Int, ObjectType, registerEnumType } from '@nestjs/graphql';
import { IsEnum, IsInt, IsString, Max, Min } from 'class-validator';
import { Column, Entity, JoinColumn, OneToOne } from 'typeorm';
import { MidiRange } from '../../common/decorators';
import { CoreEntity } from '../../common/entities/core.entity';
import { OnOff } from '../../common/enums';
import { Part } from './part.entity';

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
@Entity()
export class CommonGeneral extends CoreEntity {
  @Field(type => Part)
  @OneToOne(type => Part, {
    // cascade: true,
    onDelete: 'CASCADE',
  })
  @JoinColumn()
  part: Part;

  @Field(type => Int)
  @Column({ default: 100 })
  @MidiRange()
  volume: number;

  @Field(type => String)
  @Column({ default: 'C' })
  @IsString()
  pan: string;

  @Field(type => Int)
  @Column({ default: 127 })
  @MidiRange()
  dryLevel: number;

  @Field(type => Int)
  @Column({ default: 0 })
  @MidiRange()
  varSend: number;

  @Field(type => Int)
  @Column({ default: 12 })
  @MidiRange()
  revSend: number;

  @Field(type => Polyphony)
  @Column({ type: 'enum', enum: Polyphony, default: Polyphony.Poly })
  @IsEnum(Polyphony)
  polyphony: Polyphony;

  @Field(type => KeyAssign)
  @Column({ type: 'enum', enum: KeyAssign, default: KeyAssign.Multi })
  @IsEnum(KeyAssign)
  keyAssign: KeyAssign;

  @Field(type => OnOff)
  @Column({ type: 'enum', enum: OnOff, default: OnOff.Off })
  @IsEnum(OnOff)
  keyOnDlySync: OnOff;

  @Field(type => Int)
  @Column({ default: 0 })
  @MidiRange()
  delayLength: number;

  @Field(type => OnOff)
  @Column({ type: 'enum', enum: OnOff, default: OnOff.Off })
  @IsEnum(OnOff)
  arpPlayOnly: OnOff;

  @Field(type => Int)
  @Column({ default: 0 })
  @MidiRange()
  randomPan: number;

  @Field(type => String)
  @Column({ default: 'C' })
  @IsString()
  alternatePan: string;

  @Field(type => Int)
  @Column({ default: 0 })
  @Min(-64)
  @Max(63)
  @IsInt()
  scanlingPan: number;

  @Field(type => Int)
  @Column({ default: 1 })
  @MidiRange({ min: 1 })
  velocityLimitLower: number;

  @Field(type => Int)
  @Column({ default: 127 })
  @MidiRange({ min: 1 })
  velocityLimitUpper: number;

  @Field(type => String)
  @Column({ default: 'C -2' })
  @IsString()
  noteLimitLower: string;

  @Field(type => String)
  @Column({ default: 'G 8' })
  @IsString()
  noteLimitUpper: string;

  @Field(type => Int)
  @Column({ default: 64 })
  @MidiRange()
  velocityOffset: number;

  @Field(type => Int)
  @Column({ default: 64 })
  @MidiRange()
  velocityDepth: number;
}
