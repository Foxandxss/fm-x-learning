import { applyDecorators } from '@nestjs/common';
import { IsInt, Max, Min } from 'class-validator';

interface MidiRangeParams {
  min?: number;
}

export function MidiRange({ min = 0 }: MidiRangeParams = {}) {
  return applyDecorators(Min(min), Max(127), IsInt());
}
