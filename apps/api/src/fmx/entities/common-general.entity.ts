import { Field, ObjectType } from '@nestjs/graphql';
import { IsInt, IsString, Max, Min } from 'class-validator';
import { Column, Entity, JoinColumn, OneToOne } from 'typeorm';
import { CoreEntity } from '../../common/entities/core.entity';
import { Part } from './part.entity';

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

  @Field(type => Number)
  @Column({ default: 100 })
  @IsInt()
  @Min(0)
  @Max(127)
  volume: number;

  @Field(type => String)
  @Column({ default: 'C' })
  @IsString()
  pan: string;

  @Field(type => Number)
  @Column({ default: 127 })
  @IsInt()
  @Min(0)
  @Max(127)
  dryLevel: number;
}
