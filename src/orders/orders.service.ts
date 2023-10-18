import { Injectable, BadRequestException } from '@nestjs/common';
import { PrismaService } from 'src/shared/services/prisma.service';
import { Order } from '@prisma/client';

@Injectable()
export class OrdersService {
  constructor(private prismaService: PrismaService) {}

  public getAll(): Promise<Order[]> {
    return this.prismaService.order.findMany();
  }

  public getById(id: Order['id']): Promise<Order | null> {
    return this.prismaService.order.findUnique({
      where: { id },
    });
  }

  public async create(
    orderData: Omit<Order, 'id' | 'createdAt'>,
  ): Promise<Order> {
    try {
      return await this.prismaService.order.create({
        data: {
          ...orderData,
        },
      });
    } catch (error) {
      if (error.code === 'P2025')
        throw new BadRequestException("Order doesn't exist");
      throw error;
    }
  }
}
