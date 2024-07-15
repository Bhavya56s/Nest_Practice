import { Body,Controller, Post,Get, Param, Put, Delete } from "@nestjs/common";
import { CreateUserDTO } from "./dto";

let USERS = []
@Controller('/practice')

export class PracticeController {
@Post()
addUser(@Body() createdUserDto: CreateUserDTO){
   
  USERS.push(createdUserDto);
  return 'User added'
}

@Get()
getUsers() {
  return USERS
}  

@Get(':id')
getUser(@Param('id') id:number) {
  return USERS.find((user) => +user.id === +id);
} 

@Put(':id')
updateUser(@Param('id') id:number, @Body() updateUserDTO : CreateUserDTO) {
  const userIdx = USERS.findIndex((user) => +user.id === +id);
  if(!userIdx){
    return ;
  }
  USERS[userIdx] = updateUserDTO;
} 
@Delete(':id')
deleteUser(@Param('id') id:number) {
  USERS= USERS.filter((user) => +user.id !== +id);
  
} 
}