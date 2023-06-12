-- CreateTable
CREATE TABLE "Personajes" (
    "id" INTEGER NOT NULL,
    "nombre" TEXT NOT NULL,
    "fuerza" INTEGER NOT NULL,
    "fecha_nacimiento" TIMESTAMP(3) NOT NULL,
    "objeto" TEXT
);

-- CreateTable
CREATE TABLE "Karts" (
    "id" INTEGER NOT NULL,
    "modelo" TEXT NOT NULL,
    "color" TEXT NOT NULL,
    "velocidad_maxima" INTEGER,
    "id_personaje" INTEGER NOT NULL
);

-- CreateTable
CREATE TABLE "Personaje_tiene_trabajo" (
    "id_trabajo" INTEGER NOT NULL,
    "id_personaje" INTEGER NOT NULL,
    "fecha_inicio" TIMESTAMP(3) NOT NULL,
    "fecha_termino" TIMESTAMP(3)
);

-- CreateTable
CREATE TABLE "Trabajos" (
    "id" INTEGER NOT NULL,
    "descripcion" TEXT NOT NULL,
    "sueldo" INTEGER NOT NULL
);

-- CreateTable
CREATE TABLE "Personaje_habita_reino" (
    "id_personaje" INTEGER NOT NULL,
    "id_reino" INTEGER NOT NULL,
    "fecha_registro" TIMESTAMP(3) NOT NULL,
    "es_gobernante" BOOLEAN NOT NULL
);

-- CreateTable
CREATE TABLE "Reinos" (
    "id" INTEGER NOT NULL,
    "nombre" TEXT NOT NULL,
    "ubicacion" TEXT NOT NULL,
    "superficie" INTEGER NOT NULL
);

-- CreateTable
CREATE TABLE "Defensas_reinos" (
    "id_reinos" INTEGER NOT NULL,
    "id_defensas" INTEGER NOT NULL
);

-- CreateTable
CREATE TABLE "Defensas" (
    "id" INTEGER NOT NULL,
    "defensa" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "Diplomacias" (
    "id_reino_1" INTEGER NOT NULL,
    "id_reino_2" INTEGER NOT NULL,
    "es_aliado" BOOLEAN
);

-- CreateIndex
CREATE UNIQUE INDEX "Personajes_id_key" ON "Personajes"("id");

-- CreateIndex
CREATE UNIQUE INDEX "Karts_id_key" ON "Karts"("id");

-- CreateIndex
CREATE UNIQUE INDEX "Personaje_tiene_trabajo_id_trabajo_key" ON "Personaje_tiene_trabajo"("id_trabajo");

-- CreateIndex
CREATE UNIQUE INDEX "Personaje_tiene_trabajo_id_personaje_key" ON "Personaje_tiene_trabajo"("id_personaje");

-- CreateIndex
CREATE UNIQUE INDEX "Trabajos_id_key" ON "Trabajos"("id");

-- CreateIndex
CREATE UNIQUE INDEX "Personaje_habita_reino_id_personaje_key" ON "Personaje_habita_reino"("id_personaje");

-- CreateIndex
CREATE UNIQUE INDEX "Personaje_habita_reino_id_reino_key" ON "Personaje_habita_reino"("id_reino");

-- CreateIndex
CREATE UNIQUE INDEX "Reinos_id_key" ON "Reinos"("id");

-- CreateIndex
CREATE UNIQUE INDEX "Defensas_reinos_id_reinos_key" ON "Defensas_reinos"("id_reinos");

-- CreateIndex
CREATE UNIQUE INDEX "Defensas_reinos_id_defensas_key" ON "Defensas_reinos"("id_defensas");

-- CreateIndex
CREATE UNIQUE INDEX "Defensas_id_key" ON "Defensas"("id");

-- CreateIndex
CREATE UNIQUE INDEX "Diplomacias_id_reino_1_key" ON "Diplomacias"("id_reino_1");

-- CreateIndex
CREATE UNIQUE INDEX "Diplomacias_id_reino_2_key" ON "Diplomacias"("id_reino_2");

-- AddForeignKey
ALTER TABLE "Karts" ADD CONSTRAINT "Karts_id_personaje_fkey" FOREIGN KEY ("id_personaje") REFERENCES "Personajes"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Personaje_tiene_trabajo" ADD CONSTRAINT "Personaje_tiene_trabajo_id_trabajo_fkey" FOREIGN KEY ("id_trabajo") REFERENCES "Trabajos"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Personaje_tiene_trabajo" ADD CONSTRAINT "Personaje_tiene_trabajo_id_personaje_fkey" FOREIGN KEY ("id_personaje") REFERENCES "Personajes"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Personaje_habita_reino" ADD CONSTRAINT "Personaje_habita_reino_id_personaje_fkey" FOREIGN KEY ("id_personaje") REFERENCES "Personajes"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Personaje_habita_reino" ADD CONSTRAINT "Personaje_habita_reino_id_reino_fkey" FOREIGN KEY ("id_reino") REFERENCES "Reinos"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Defensas_reinos" ADD CONSTRAINT "Defensas_reinos_id_reinos_fkey" FOREIGN KEY ("id_reinos") REFERENCES "Reinos"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Defensas_reinos" ADD CONSTRAINT "Defensas_reinos_id_defensas_fkey" FOREIGN KEY ("id_defensas") REFERENCES "Defensas"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Diplomacias" ADD CONSTRAINT "Diplomacias_id_reino_1_fkey" FOREIGN KEY ("id_reino_1") REFERENCES "Reinos"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Diplomacias" ADD CONSTRAINT "Diplomacias_id_reino_2_fkey" FOREIGN KEY ("id_reino_2") REFERENCES "Reinos"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
