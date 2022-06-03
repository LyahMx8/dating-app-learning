import { Module } from '@nestjs/common';
import { DatesController } from './dates.controller';

@Module({
  controllers: [DatesController]
})
export class DatesModule {}
