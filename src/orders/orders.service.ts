import { Injectable, BadRequestException } from '@nestjs/common';
import { PrismaService } from 'src/shared/services/prisma.service';
import { Order } from '@prisma/client';
import { CreateOrderDTO } from './dtos/create-order-dto';

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

  public async create(orderData: CreateOrderDTO): Promise<Order> {
    try {
      const orderWithProducts: Order = await this.prismaService.order.create({
        data: {
          firstName: orderData.firstName,
          lastName: orderData.lastName,
          address: orderData.address,
          phone: orderData.phone,
          totalPrice: orderData.totalPrice,
          products: {
            create: orderData.products.map((productData) => ({
              quantity: productData.quantity,
              comment: productData.comment,
              product: {
                connect: {
                  id: productData.productId,
                },
              },
            })),
          },
        },
      });

      return orderWithProducts;
    } catch (error) {
      if (error.code === 'P2025') {
        throw new BadRequestException("One or more products don't exist");
      }
      throw error;
    }
  }
}
