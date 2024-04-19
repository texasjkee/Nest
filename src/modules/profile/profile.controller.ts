import {
  Controller,
  Patch,
} from "@nestjs/common";

// import { UpdateUserDTO } from "./dto";
// import { UsersService } from "./users.service";

@Controller("profile")
export class ProfileController {

  @Patch('profile/')
  changeProfile() {
    return 'yo'
  }
}
