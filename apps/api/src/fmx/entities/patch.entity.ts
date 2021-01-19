import { Field } from '@nestjs/graphql';
import { IsString, ValidateNested } from 'class-validator';
import { Entity, ObjectID, ObjectIdColumn } from 'typeorm';
import { Part } from './part.entity';

@Entity()
export class Patch {
  @ObjectIdColumn()
  id: ObjectID;

  @Field(type => String)
  @IsString()
  slug: string;

  @Field(type => [Part])
  @ValidateNested()
  parts: Part[] = [];
}
