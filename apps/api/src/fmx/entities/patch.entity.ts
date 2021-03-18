import { IsString, ValidateNested } from 'class-validator';
import { Column, Entity, ObjectID, ObjectIdColumn } from 'typeorm';
import { Part } from './part.entity';

@Entity()
export class Patch {
  @ObjectIdColumn()
  id: ObjectID;

  @Column()
  @IsString()
  slug: string;

  @Column()
  @ValidateNested()
  parts: Part[] = [];
}
