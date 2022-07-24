import { Module } from '@nestjs/common';
import { EnvironmentConfigModule } from './infrastructure/config/environment-config/environment-config.module';

@Module({
  imports: [EnvironmentConfigModule],
})
export class AppModule {}
