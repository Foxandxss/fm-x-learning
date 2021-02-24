/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

import { CreatePatchInput, Polyphony, KeyAssign, OnOff } from "./globalTypes";

// ====================================================
// GraphQL mutation operation: createPatch
// ====================================================

export interface createPatch_createPatch_patch_parts_commonGeneral {
  __typename: "CommonGeneral";
  volume: number;
  pan: string;
  dryLevel: number;
  varSend: number;
  revSend: number;
  polyphony: Polyphony;
  keyAssign: KeyAssign;
  keyOnDlySync: OnOff;
  delayLength: number;
  arpPlayOnly: OnOff;
  randomPan: number;
  alternatePan: string;
  scalingPan: number;
  velocityLimitLower: number;
  velocityLimitUpper: number;
  noteLimitLower: string;
  noteLimitUpper: string;
  velocityOffset: number;
  velocityDepth: number;
}

export interface createPatch_createPatch_patch_parts {
  __typename: "Part";
  commonGeneral: createPatch_createPatch_patch_parts_commonGeneral;
}

export interface createPatch_createPatch_patch {
  __typename: "Patch";
  slug: string;
  parts: createPatch_createPatch_patch_parts[];
}

export interface createPatch_createPatch {
  __typename: "CreatePatchOutput";
  ok: boolean;
  error: string | null;
  patch: createPatch_createPatch_patch | null;
}

export interface createPatch {
  createPatch: createPatch_createPatch;
}

export interface createPatchVariables {
  input: CreatePatchInput;
}
