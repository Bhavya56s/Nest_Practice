import { Body, Controller , Get , Post ,Req,HttpCode,HttpStatus, Res, Header, Redirect, Param} from "@nestjs/common";
import { Response, Request } from "express";

// interface VideoParams {
//   id : number,
//   name : string
// }
// @Controller("/users")
// export class UsersControllers {
  
//   @Post("/profile")
//   @Redirect('/users/account')
//   @Header('Cache-Control','None')
//   @Header('X-Name','Bhavya')
  
//   getProfile(@Req()req: Request ){
//     return  {
//     hello: 'world',
//    }
//   }

//   @Get('/account')
//   redirectRoute() {
//     return 'Working account'
//   }
// }

// @Controller('/users')
// export class UsersControllers{
//   @Get('/videos/:id')
//   getVideos(@Param() params: VideoParams){
//     console.log(params.id);
//     return 'Success'
//   }

// }

@Controller('/users')

export class UsersControllers{
  @Post('/video')
  addVideo(@Body() requestData: Record<string,any>){
    console.log(requestData);
    
    return { success : true}
  }
}