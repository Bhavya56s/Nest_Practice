import { Module } from '@nestjs/common';
import { UsersControllers } from './user.controller';


@Module({
 
  controllers: [UsersControllers],
  
})
export class AppModule {}
