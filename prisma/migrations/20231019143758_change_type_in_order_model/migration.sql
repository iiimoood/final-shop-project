/*
  Warnings:

  - You are about to alter the column `totalPrice` on the `order` table. The data in that column could be lost. The data in that column will be cast from `Decimal(65,30)` to `Double`.

*/
-- AlterTable
ALTER TABLE `order` MODIFY `totalPrice` DOUBLE NOT NULL;
