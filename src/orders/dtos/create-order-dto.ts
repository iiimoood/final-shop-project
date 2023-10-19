/* eslint-disable prettier/prettier */
import {
  IsNotEmpty,
  IsString,
  IsArray,
  IsObject,
  IsNumber,
} from 'class-validator';

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
    quantity: number;
    comment?: string;
  }>;

  @IsNumber()
  totalPrice: number;
}
