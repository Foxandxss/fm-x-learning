import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import { CreatePatchInput, CreatePatchOutput } from './dtos/create-patch.dto';
import { PatchInput, PatchOutput } from './dtos/patch.dto';
import { Patch } from './entities/patch.entity';
import { FmxService } from './fmx.service';

@Resolver(of => Patch)
export class PatchResolver {
  constructor(private fmxService: FmxService) {}

  @Query(returns => PatchOutput)
  async patch(@Args('input') patchInput: PatchInput): Promise<PatchOutput> {
    return await this.fmxService.findPatchById(patchInput);
  }

  @Mutation(returns => CreatePatchOutput)
  async createPatch(
    @Args('input') createPatchInput: CreatePatchInput
  ): Promise<CreatePatchOutput> {
    return await this.fmxService.createPatch(createPatchInput);
  }
}
