import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './users/users.module';
import { MongooseModule } from '@nestjs/mongoose';
import { AuthModule } from './auth/auth.module';
import { AuthModule } from './auth/auth.module';

@Module({
  imports: [ MongooseModule.forRoot(
      'mongodb+srv://wpdmadhuranga:F5lMctEOP2aXITD6@cluster0.znggyno.mongodb.net/nest_crud?retryWrites=true&w=majority&appName=Cluster0'
    ),UsersModule, AuthModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
