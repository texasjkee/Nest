import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';

import { PrismaModule } from './prisma/prisma.module';
import { TokenModule } from './modules/token/token.module';
import { AuthModule } from './modules/auth/auth.module';
import { EventsModule } from './modules/events/events.module';
import { UsersModule } from './modules/users/users.module';
import { ProfileModule } from './modules/profile/profile.module';

@Module({
	imports: [
		PrismaModule,
		AuthModule,
		UsersModule,
		EventsModule,
		ProfileModule,
		ConfigModule.forRoot({ envFilePath: '.env' }),
		TokenModule
	],
	controllers: [],
	providers: [],
})
export class AppModule { }
