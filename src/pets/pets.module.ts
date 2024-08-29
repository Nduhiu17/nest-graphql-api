import { Module } from '@nestjs/common';
import { PetsResolver } from './pets.resolver';
import { PetsService } from './pets.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Pet } from './pet.entity';
import { OwnersModule } from 'src/owners/owners.module';

@Module({
  imports: [TypeOrmModule.forFeature([Pet]), OwnersModule],
  providers: [PetsResolver, PetsService],
})
export class PetsModule {}
