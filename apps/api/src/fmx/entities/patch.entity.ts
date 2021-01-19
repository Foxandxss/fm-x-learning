import { Field } from '@nestjs/graphql';
import { IsString } from 'class-validator';
import { Column, Entity, ObjectID, ObjectIdColumn } from 'typeorm';
import { Part } from './part.entity';

@Entity()
export class Patch {
  @ObjectIdColumn()
  id: ObjectID;

  @Field(type => String)
  @Column()
  @IsString()
  slug: string;

  @Field(type => [Part])
  @Column(type => Part)
  parts: Part[] = [];
}
