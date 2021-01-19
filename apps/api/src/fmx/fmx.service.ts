import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { MongoRepository } from 'typeorm';
import { Patch } from './entities/patch.entity';
import { v4 as uuid } from 'uuid';
import { Part } from './entities/part.entity';
import { CommonGeneral } from './entities/common-general.entity';

@Injectable()
export class FmxService {
  constructor(
    @InjectRepository(Patch) private patchRepository: MongoRepository<Patch>
  ) {}

  async createPatch() {
    try {
      const patch = this.patchRepository.create();
      patch.slug = uuid();

      const part = new Part();
      part.commonGeneral = new CommonGeneral();
      patch.parts.push(part);

      console.log(JSON.stringify(patch));

      return true;
    } catch (e) {
      console.error(e);
      return false;
    }
  }
}
