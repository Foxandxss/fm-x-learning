import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Patch } from './entities/patch.entity';
import { FmxController } from './fmx.controller';
import { FmxService } from './fmx.service';

@Module({
  imports: [TypeOrmModule.forFeature([Patch])],
  controllers: [FmxController],
  providers: [FmxService],
})
export class FmxModule {}
