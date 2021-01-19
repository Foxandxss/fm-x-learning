import { Field } from '@nestjs/graphql';
import { IsString } from 'class-validator';
import { Column, Entity, ObjectID, ObjectIdColumn } from 'typeorm';
import { Part } from './part.entity';

@Entity()
export class Patch {
  @ObjectIdColumn()
  id: ObjectID;

  @Field(type => String)
  @IsString()
  slug: string;

  @Field(type => [Part])
  parts: Part[] = [];
}
