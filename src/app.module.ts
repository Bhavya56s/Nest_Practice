import { Module } from '@nestjs/common';
import { UsersControllers } from './user.controller';
import { AlbumControllers } from './album.controller';


@Module({
 
  controllers: [UsersControllers,AlbumControllers],
  
})
export class AppModule {}
