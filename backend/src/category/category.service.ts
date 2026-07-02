import {
  Injectable,
  ConflictException,
  NotFoundException,
} from '@nestjs/common';

import { PrismaService } from '../prisma/prisma.service';

import { CreateCategoryDto } from './dto/create-category.dto';
import { UpdateCategoryDto } from './dto/update-category.dto';

@Injectable()
export class CategoryService {
  constructor(private prisma: PrismaService) {}

  async create(createCategoryDto: CreateCategoryDto) {
  const existingCategory = await this.prisma.category.findFirst({
    where: {
      name: createCategoryDto.name,
    },
  });

  if (existingCategory) {
    throw new ConflictException('Category already exists');
  }

  return this.prisma.category.create({
    data: {
      name: createCategoryDto.name,
    },
  });
}

  async findAll() {
    return this.prisma.category.findMany();
  }

  async findOne(id: number) {
  const category = await this.prisma.category.findUnique({
    where: {
      id,
    },
  });

  if (!category) {
    throw new NotFoundException('Category not found');
  }

  return category;
}

  async update(id: number, updateCategoryDto: UpdateCategoryDto) {
  const category = await this.prisma.category.findUnique({
    where: {
      id,
    },
  });

  if (!category) {
    throw new NotFoundException('Category not found');
  }

  const existingCategory = await this.prisma.category.findFirst({
    where: {
      name: updateCategoryDto.name,
      NOT: {
        id,
      },
    },
  });

  if (existingCategory) {
    throw new ConflictException('Category already exists');
  }

  return this.prisma.category.update({
    where: {
      id,
    },
    data: {
      name: updateCategoryDto.name,
    },
  });
}

  async remove(id: number) {
  const category = await this.prisma.category.findUnique({
    where: {
      id,
    },
  });

  if (!category) {
    throw new NotFoundException('Category not found');
  }

  await this.prisma.category.delete({
    where: {
      id,
    },
  });

  return {
    message: 'Category deleted successfully',
  };
}
}