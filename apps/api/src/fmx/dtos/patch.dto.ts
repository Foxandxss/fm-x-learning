import { Field, InputType, Int, ObjectType } from '@nestjs/graphql';
import { CoreOutput } from '../../common/dtos/output.dto';
import { Patch } from '../entities/patch.entity';

@InputType()
export class PatchInput {
  @Field(type => String)
  patchId: string;
}

@ObjectType()
export class PatchOutput extends CoreOutput {
  @Field(type => Patch, { nullable: true })
  patch?: Patch;
}
