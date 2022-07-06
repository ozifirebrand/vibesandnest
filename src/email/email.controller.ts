import { Controller, Post, Query } from '@nestjs/common';
import { SendgridService } from '../sendgrid/sendgrid.service';

@Controller('email')
export class EmailController {
  constructor(private readonly sendgridService: SendgridService) {}
  @Post('welcome')
  async sendWelcomeEmail(@Query('email') email) {
    const mail = {
      to: email,
      subject: 'Hello from Parkwell',
      from: 'parkwelltech@gmail.com',
      text: 'Welcome to Parkwell',
      html: '<h1>Hello Timmy Timmy, Welcome to Parkwell.</h1><p>You are here. Click the button below to begin!</p><button>Begin</button>',
    };
    // console.log(email);
    return await this.sendgridService.send(mail);
  }
}
