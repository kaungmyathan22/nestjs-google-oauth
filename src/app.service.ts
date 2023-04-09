import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  googleLogin (req) {
    if (!req.user) {
      return "No User from google";
    }
    return {
      message: "User Info from google",
      user: req.user,
    }
  }
}
