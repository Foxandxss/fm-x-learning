import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CommonGeneral } from './entities/common-general.entity';
import { Part } from './entities/part.entity';
import { Patch } from './entities/patch.entity';
import { v4 as uuid } from 'uuid';

@Injectable()
export class FmxService {
  constructor(
    @InjectRepository(Patch) private patchRepository: Repository<Patch>,
    @InjectRepository(Part) private partRepository: Repository<Part>,
    @InjectRepository(CommonGeneral)
    private cgRepository: Repository<CommonGeneral>
  ) {}

  async createPatch() {
    try {
      const patch = this.patchRepository.create();
      patch.slug = uuid();

      const part = this.partRepository.create();
      const part2 = this.partRepository.create();

      const commonGeneral = this.cgRepository.create();

      // commonGeneral.part = part;
      // part.patch = patch;
      patch.parts = [part];
      part.commonGeneral = commonGeneral;

      await this.patchRepository.save(patch);

      patch.parts.push(part2);

      await this.patchRepository.save(patch);
      // await this.cgRepository.save(commonGeneral);

      return true;
    } catch (e) {
      console.error(e);
      return false;
    }
  }
}
