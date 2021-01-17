import { IsString } from 'class-validator';
import { Column, Entity, OneToMany } from 'typeorm';
import { CoreEntity } from '../../common/entities/core.entity';
import { Part } from './part.entity';

@Entity()
export class Patch extends CoreEntity {
  @Column()
  @IsString()
  slug: string;

  @OneToMany(type => Part, part => part.patch)
  parts: Part[];
}
