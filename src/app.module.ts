import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { UsersModule } from './users/users.module';
import { UsersController } from './users/users.controller';
import { UsersService } from './users/users.service';

@Module({
  imports: [ 
              ConfigModule.forRoot({ isGlobal: true }), // ConfigMoudel을 app.module 이외의 모듈에서 반복 import할 필요없는 전역 모듈로 설정
              UsersModule,
              UsersService,
              UsersController
            ], 
  controllers: [AppController],
  providers: [AppService, ConfigService], // ConfigService를 활용해 환경변수 값 조회(DI)
})
export class AppModule {}
