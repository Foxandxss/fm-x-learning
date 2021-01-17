import { Mutation, Query, Resolver } from '@nestjs/graphql';
import { Patch } from './entities/patch.entity';
import { FmxService } from './fmx.service';

@Resolver(of => Patch)
export class PatchResolver {
  constructor(private fmxService: FmxService) {}

  @Query(returns => Boolean)
  me() {
    return true;
  }

  @Mutation(returns => Boolean)
  async createPatch() {
    return await this.fmxService.createPatch();
  }
}
