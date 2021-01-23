import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { MongoRepository } from 'typeorm';
import { Patch } from './entities/patch.entity';
import { v4 as uuid } from 'uuid';
import { Part } from './entities/part.entity';
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
      patch.parts.push(part);

      console.log(JSON.stringify(patch));

      const error = await validateOrReject(patch);

      console.log(error);

      this.patchRepository.save(patch);

      return true;
    } catch (e) {
      const err: ValidationError[] = e;
      console.error('catch', err[0].children[0]);
      return false;
    }
  }
}
