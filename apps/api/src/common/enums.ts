import { registerEnumType } from '@nestjs/graphql';

export enum OnOff {
  On = 'on',
  Off = 'off',
}

registerEnumType(OnOff, { name: 'OnOff' });
