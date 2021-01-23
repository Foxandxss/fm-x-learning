import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { MongoRepository } from 'typeorm';
import { Patch } from './entities/patch.entity';
import { v4 as uuid } from 'uuid';
import { Part } from './entities/part.entity';
import { validateOrReject, ValidationError } from 'class-validator';
import { CreatePatchInput, CreatePatchOutput } from './dtos/create-patch.dto';

@Injectable()
export class FmxService {
  constructor(
    @InjectRepository(Patch) private patchRepository: MongoRepository<Patch>
  ) {}

  async createPatch({
    numOfParts,
  }: CreatePatchInput): Promise<CreatePatchOutput> {
    try {
      const patch = this.patchRepository.create();
      patch.slug = uuid();

      for (let i = 0; i < numOfParts; i++) {
        const part = new Part();
        patch.parts.push(part);
      }

      await validateOrReject(patch);

      this.patchRepository.save(patch);

      return {
        ok: true,
        patch,
      };
    } catch (e) {
      const err: ValidationError[] = e;
      console.error(err[0]);
      return {
        ok: false,
        error: err.toString(),
      };
    }
  }
}
