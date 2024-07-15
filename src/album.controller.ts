import { Controller , Get } from "@nestjs/common";


@Controller("/album")
export class AlbumControllers {
  
  @Get("/photos")
  getProfile(){
     
   return "Photo"
  }
}