import {
  ConflictException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';

import { PrismaService } from '../prisma/prisma.service';
import { CreateProductDto } from './dto/create-product.dto';
import { UpdateProductDto } from './dto/update-product.dto';

@Injectable()
export class ProductService {
  constructor(private prisma: PrismaService) {}
  async create(createProductDto: CreateProductDto) {
  const existingSku = await this.prisma.product.findUnique({
    where: {
      sku: createProductDto.sku,
    },
  });

  if (existingSku) {
    throw new ConflictException('SKU already exists');
  }

  const category = await this.prisma.category.findUnique({
    where: {
      id: createProductDto.categoryId,
    },
  });

  if (!category) {
    throw new NotFoundException('Category not found');
  }

  return this.prisma.product.create({
    data: {
      sku: createProductDto.sku,
      name: createProductDto.name,
      description: createProductDto.description,
      weight: createProductDto.weight,
      width: createProductDto.width,
      length: createProductDto.length,
      height: createProductDto.height,
      image: createProductDto.image,
      price: createProductDto.price,
      stock: createProductDto.stock,
      isActive: createProductDto.isActive ?? true,

      category: {
        connect: {
          id: createProductDto.categoryId,
        },
      },
    },
    include: {
      category: true,
    },
  });
}

  async findAll() {
  return this.prisma.product.findMany({
    include: {
      category: true,
    },
    orderBy: {
      id: 'asc',
    },
  });
}

  async findOne(id: number) {
  const product = await this.prisma.product.findUnique({
    where: {
      id,
    },
    include: {
      category: true,
    },
  });

  if (!product) {
    throw new NotFoundException('Product not found');
  }

  return product;
}

  async update(id: number, updateProductDto: UpdateProductDto) {
  const product = await this.prisma.product.findUnique({
    where: {
      id,
    },
  });

  if (!product) {
    throw new NotFoundException('Product not found');
  }

  if (updateProductDto.categoryId !== undefined) {
    const category = await this.prisma.category.findUnique({
      where: {
        id: updateProductDto.categoryId,
      },
    });

    if (!category) {
      throw new NotFoundException('Category not found');
    }
  }

  if (updateProductDto.sku) {
    const existingSku = await this.prisma.product.findFirst({
      where: {
        sku: updateProductDto.sku,
        NOT: {
          id,
        },
      },
    });

    if (existingSku) {
      throw new ConflictException('SKU already exists');
    }
  }

  return this.prisma.product.update({
    where: {
      id,
    },
    data: updateProductDto,
    include: {
      category: true,
    },
  });
}

  async remove(id: number) {
  const product = await this.prisma.product.findUnique({
    where: {
      id,
    },
  });

  if (!product) {
    throw new NotFoundException('Product not found');
  }

  await this.prisma.product.delete({
    where: {
      id,
    },
  });

  return {
    message: 'Product deleted successfully',
  };
}
}
