import { Injectable } from '@nestjs/common';
import { CreateOwnerInput } from './dto/create-owner.input';
import { UpdateOwnerInput } from './dto/update-owner.input';
import { InjectRepository } from '@nestjs/typeorm';
import { Owner } from './entities/owner.entity';
import { Repository } from 'typeorm';

@Injectable()
export class OwnersService {
  constructor(
    @InjectRepository(Owner) private ownerRepositoty: Repository<Owner>,
  ) {}

  create(createOwnerInput: CreateOwnerInput) {
    const newOwner = this.ownerRepositoty.create(createOwnerInput);
    return this.ownerRepositoty.save(newOwner);
  }

  findAll() {
    return this.ownerRepositoty.find();
  }

  findOne(id: number) {
    return this.ownerRepositoty.findOneByOrFail({ id: id });
  }

  update(id: number, updateOwnerInput: UpdateOwnerInput) {
    return `This action updates a #${id} owner ${updateOwnerInput}`;
  }

  remove(id: number) {
    return `This action removes a #${id} owner`;
  }
}
