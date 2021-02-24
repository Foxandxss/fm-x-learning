/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

import { PatchInput, Polyphony, KeyAssign, OnOff } from "./globalTypes";

// ====================================================
// GraphQL query operation: patch
// ====================================================

export interface patch_patch_patch_parts_commonGeneral {
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

export interface patch_patch_patch_parts {
  __typename: "Part";
  commonGeneral: patch_patch_patch_parts_commonGeneral;
}

export interface patch_patch_patch {
  __typename: "Patch";
  slug: string;
  parts: patch_patch_patch_parts[];
}

export interface patch_patch {
  __typename: "PatchOutput";
  ok: boolean;
  error: string | null;
  patch: patch_patch_patch | null;
}

export interface patch {
  patch: patch_patch;
}

export interface patchVariables {
  input: PatchInput;
}
