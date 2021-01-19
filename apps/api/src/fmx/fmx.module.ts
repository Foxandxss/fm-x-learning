import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Patch } from './entities/patch.entity';
import { PatchResolver } from './fmx.resolver';
import { FmxService } from './fmx.service';

@Module({
  imports: [TypeOrmModule.forFeature([Patch])],
  providers: [FmxService, PatchResolver],
})
export class FmxModule {}
