/* eslint-disable prettier/prettier */
import { IsNotEmpty, IsString, IsArray, IsObject } from 'class-validator';

export class CreateOrderDTO {
  @IsNotEmpty()
  @IsString()
  firstName: string;

  @IsNotEmpty()
  @IsString()
  lastName: string;

  @IsNotEmpty()
  @IsString()
  address: string;

  @IsNotEmpty()
  @IsString()
  phone: string;

  @IsArray()
  @IsObject({ each: true })
  products: Array<{
    productId: string;
    quantity: number;
    comment?: string;
  }>;
}
