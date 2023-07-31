import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UsersModule } from './users/users.module';
import "reflect-metadata"
import { User } from './users/entities/user.entity';
import { DriversModule } from './drivers/drivers.module';
import { Drivers } from './drivers/entities/driver.entity';

@Module({
  imports: [TypeOrmModule.forRoot({
    type: 'postgres',
    host: 'localhost',
    port: 8989,
    username: 'postgres',
    password: 'root',
    database: 'fleetdb',
    entities: [User,Drivers],
    synchronize: true,
  }), UsersModule, DriversModule,],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
