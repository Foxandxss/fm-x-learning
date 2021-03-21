import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { MongoRepository } from 'typeorm';
import { Patch } from './entities/patch.entity';
import { v4 as uuid } from 'uuid';
import { Part } from './entities/part.entity';
import { validateOrReject } from 'class-validator';

@Injectable()
export class FmxService {
  constructor(
    @InjectRepository(Patch) private patchRepository: MongoRepository<Patch>
  ) {}

  async createPatch(numOfParts: number) {
    const patch = this.patchRepository.create();
    patch.slug = uuid();

    for (let i = 0; i < numOfParts; i++) {
      const part = new Part();
      patch.parts.push(part);
    }

    await validateOrReject(patch);

    // this.patchRepository.save(patch);

    return patch;
  }

  async findPatchById(patchId: string) {
    return await this.patchRepository.findOne(patchId);
  }
}
