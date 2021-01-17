import { Field, ObjectType } from '@nestjs/graphql';
import { Entity, ManyToOne, OneToOne } from 'typeorm';
import { CoreEntity } from '../../common/entities/core.entity';
import { CommonGeneral } from './common-general.entity';
import { Patch } from './patch.entity';

@ObjectType()
@Entity()
export class Part extends CoreEntity {
  @Field(type => Patch)
  @ManyToOne(type => Patch, patch => patch.parts, {
    // cascade: true,
    onDelete: 'CASCADE',
  })
  patch: Patch;

  @Field(type => CommonGeneral)
  @OneToOne(type => CommonGeneral, general => general.part, { cascade: true })
  commonGeneral: CommonGeneral;
}
