-- CreateTable
CREATE TABLE "Evolution" (
    "id" TEXT NOT NULL,
    "doctorId" TEXT NOT NULL,
    "hceId" TEXT NOT NULL,
    "notaClinica" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Evolution_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE INDEX "Evolution_doctorId_idx" ON "Evolution"("doctorId");

-- CreateIndex
CREATE INDEX "Evolution_hceId_idx" ON "Evolution"("hceId");

-- AddForeignKey
ALTER TABLE "Evolution" ADD CONSTRAINT "Evolution_doctorId_fkey" FOREIGN KEY ("doctorId") REFERENCES "Doctor"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Evolution" ADD CONSTRAINT "Evolution_hceId_fkey" FOREIGN KEY ("hceId") REFERENCES "HCE"("id") ON DELETE CASCADE ON UPDATE CASCADE;
