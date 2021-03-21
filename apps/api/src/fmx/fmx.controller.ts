import {
  Body,
  Controller,
  Get,
  NotFoundException,
  Param,
  Post,
} from '@nestjs/common';
import { FmxService } from './fmx.service';

@Controller('fmx')
export class FmxController {
  constructor(private fmxService: FmxService) {}

  @Post()
  async createPatch(@Body('numOfParts') numOfParts: number) {
    return await this.fmxService.createPatch(numOfParts);
  }

  @Get()
  async createWithoutSave() {
    return await this.fmxService.createPatch(1); // for now
  }

  @Get(':id')
  async findOne(@Param('id') id: string) {
    const patch = await this.fmxService.findPatchById(id);

    if (!patch) {
      throw new NotFoundException();
    }

    return patch;
  }
}
