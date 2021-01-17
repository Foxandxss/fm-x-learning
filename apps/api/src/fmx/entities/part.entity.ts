import { Entity, ManyToOne, OneToOne } from 'typeorm';
import { CoreEntity } from '../../common/entities/core.entity';
import { CommonGeneral } from './common-general.entity';
import { Patch } from './patch.entity';

@Entity()
export class Part extends CoreEntity {
  @ManyToOne(type => Patch, patch => patch.parts, {
    // cascade: true,
    onDelete: 'CASCADE',
  })
  patch: Patch;

  @OneToOne(type => CommonGeneral, general => general.part)
  commonGeneral: CommonGeneral;
}
