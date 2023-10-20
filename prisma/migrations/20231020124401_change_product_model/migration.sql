/*
  Warnings:

  - You are about to drop the column `comment` on the `orderitem` table. All the data in the column will be lost.
  - You are about to drop the column `quantity` on the `orderitem` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE `orderitem` DROP COLUMN `comment`,
    DROP COLUMN `quantity`;

-- AlterTable
ALTER TABLE `product` ADD COLUMN `comment` VARCHAR(191) NULL,
    ADD COLUMN `quantity` INTEGER NULL;
