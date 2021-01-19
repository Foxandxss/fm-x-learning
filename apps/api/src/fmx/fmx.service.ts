import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { MongoRepository } from 'typeorm';
import { Patch } from './entities/patch.entity';
import { v4 as uuid } from 'uuid';
import { Part } from './entities/part.entity';
import { CommonGeneral } from './entities/common-general.entity';
import { validateOrReject, ValidationError } from 'class-validator';

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
      part.commonGeneral.dryLevel = 130;
      part.commonGeneral.scanlingPan = 100;
      patch.parts.push(part);

      console.log(JSON.stringify(patch));

      const error = await validateOrReject(patch);

      console.log(error);

      this.patchRepository.save(patch);

      return true;
    } catch (e) {
      const err: ValidationError[] = e;
      console.error('catch', err[0].children[0].children[0].children);
      return false;
    }
  }
}
