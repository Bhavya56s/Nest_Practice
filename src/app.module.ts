import { Module } from '@nestjs/common';
import { UsersControllers } from './user.controller';
import { AlbumControllers } from './album.controller';
import { PracticeController } from './practice.controller';


@Module({
 
  controllers: [UsersControllers,AlbumControllers,PracticeController],
  
})
export class AppModule {}
