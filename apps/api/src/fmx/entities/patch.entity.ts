import { Field, ObjectType } from '@nestjs/graphql';
import { IsString } from 'class-validator';
import { Column, Entity, OneToMany } from 'typeorm';
import { CoreEntity } from '../../common/entities/core.entity';
import { Part } from './part.entity';

@ObjectType()
@Entity()
export class Patch extends CoreEntity {
  @Field(type => String)
  @Column()
  @IsString()
  slug: string;

  @Field(type => [Part])
  @OneToMany(type => Part, part => part.patch, { cascade: true })
  parts: Part[];
}
