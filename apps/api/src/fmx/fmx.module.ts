import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CommonGeneral } from './entities/common-general.entity';
import { Part } from './entities/part.entity';
import { Patch } from './entities/patch.entity';
import { FmxService } from './fmx.service';

@Module({
  imports: [TypeOrmModule.forFeature([Patch, Part, CommonGeneral])],
  providers: [FmxService],
})
export class FmxModule {}
