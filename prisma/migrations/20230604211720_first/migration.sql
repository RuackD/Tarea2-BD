/*
  Warnings:

  - You are about to drop the `Defensas_reino` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `Diplomacia` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "Defensas_reino" DROP CONSTRAINT "Defensas_reino_id_defensas_fkey";

-- DropForeignKey
ALTER TABLE "Defensas_reino" DROP CONSTRAINT "Defensas_reino_id_reino_fkey";

-- DropForeignKey
ALTER TABLE "Diplomacia" DROP CONSTRAINT "Diplomacia_id_reino_1_fkey";

-- DropForeignKey
ALTER TABLE "Diplomacia" DROP CONSTRAINT "Diplomacia_id_reino_2_fkey";

-- DropTable
DROP TABLE "Defensas_reino";

-- DropTable
DROP TABLE "Diplomacia";

-- CreateTable
CREATE TABLE "Defensas_reinos" (
    "id_reinos" INTEGER NOT NULL,
    "id_defensas" INTEGER NOT NULL
);

-- CreateTable
CREATE TABLE "Diplomacias" (
    "id_reino_1" INTEGER NOT NULL,
    "id_reino_2" INTEGER NOT NULL,
    "es_aliado" BOOLEAN
);

-- CreateIndex
CREATE UNIQUE INDEX "Defensas_reinos_id_reinos_key" ON "Defensas_reinos"("id_reinos");

-- CreateIndex
CREATE UNIQUE INDEX "Defensas_reinos_id_defensas_key" ON "Defensas_reinos"("id_defensas");

-- CreateIndex
CREATE UNIQUE INDEX "Diplomacias_id_reino_1_key" ON "Diplomacias"("id_reino_1");

-- CreateIndex
CREATE UNIQUE INDEX "Diplomacias_id_reino_2_key" ON "Diplomacias"("id_reino_2");

-- AddForeignKey
ALTER TABLE "Defensas_reinos" ADD CONSTRAINT "Defensas_reinos_id_reinos_fkey" FOREIGN KEY ("id_reinos") REFERENCES "Reinos"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Defensas_reinos" ADD CONSTRAINT "Defensas_reinos_id_defensas_fkey" FOREIGN KEY ("id_defensas") REFERENCES "Defensas"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Diplomacias" ADD CONSTRAINT "Diplomacias_id_reino_1_fkey" FOREIGN KEY ("id_reino_1") REFERENCES "Reinos"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Diplomacias" ADD CONSTRAINT "Diplomacias_id_reino_2_fkey" FOREIGN KEY ("id_reino_2") REFERENCES "Reinos"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
