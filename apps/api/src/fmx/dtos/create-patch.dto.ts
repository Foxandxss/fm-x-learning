import { Field, InputType, Int, ObjectType } from '@nestjs/graphql';
import { CoreOutput } from '../../common/dtos/output.dto';
import { Patch } from '../entities/patch.entity';

@InputType()
export class CreatePatchInput {
  @Field(type => Int, { nullable: true, defaultValue: 1 })
  numOfParts?: number;
}

@ObjectType()
export class CreatePatchOutput extends CoreOutput {
  @Field(type => Patch, { nullable: true })
  patch?: Patch;
}
