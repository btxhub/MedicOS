-- CreateTable
CREATE TABLE "AdjuntoClinico" (
    "id" TEXT NOT NULL,
    "doctorId" TEXT NOT NULL,
    "hceId" TEXT NOT NULL,
    "nombre" TEXT NOT NULL,
    "tipo" TEXT NOT NULL,
    "url" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "AdjuntoClinico_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE INDEX "AdjuntoClinico_doctorId_idx" ON "AdjuntoClinico"("doctorId");

-- CreateIndex
CREATE INDEX "AdjuntoClinico_hceId_idx" ON "AdjuntoClinico"("hceId");

-- AddForeignKey
ALTER TABLE "AdjuntoClinico" ADD CONSTRAINT "AdjuntoClinico_doctorId_fkey" FOREIGN KEY ("doctorId") REFERENCES "Doctor"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "AdjuntoClinico" ADD CONSTRAINT "AdjuntoClinico_hceId_fkey" FOREIGN KEY ("hceId") REFERENCES "HCE"("id") ON DELETE CASCADE ON UPDATE CASCADE;
