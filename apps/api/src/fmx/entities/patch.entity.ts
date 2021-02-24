import { Field, ObjectType } from '@nestjs/graphql';
import { IsString, ValidateNested } from 'class-validator';
import { Column, Entity, ObjectID, ObjectIdColumn } from 'typeorm';
import { Part } from './part.entity';

@ObjectType()
@Entity()
export class Patch {
  @ObjectIdColumn()
  id: ObjectID;

  @Field(type => String)
  @Column()
  @IsString()
  slug: string;

  @Field(type => [Part])
  @Column()
  @ValidateNested()
  parts: Part[] = [];
}
