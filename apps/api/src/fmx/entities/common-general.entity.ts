import { IsInt, IsString, Max, Min } from 'class-validator';
import { Column, Entity, JoinColumn, OneToOne } from 'typeorm';
import { CoreEntity } from '../../common/entities/core.entity';
import { Part } from './part.entity';

@Entity()
export class CommonGeneral extends CoreEntity {
  @OneToOne(type => Part, {
    // cascade: true,
    onDelete: 'CASCADE',
  })
  @JoinColumn()
  part: Part;

  @Column({ default: 100 })
  @IsInt()
  @Min(0)
  @Max(127)
  volume: number;

  @Column({ default: 'C' })
  @IsString()
  pan: string;

  @Column({ default: 127 })
  @IsInt()
  @Min(0)
  @Max(127)
  dryLevel: number;
}
