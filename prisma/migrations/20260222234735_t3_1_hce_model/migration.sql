-- CreateTable
CREATE TABLE "HCE" (
    "id" TEXT NOT NULL,
    "doctorId" TEXT NOT NULL,
    "patientId" TEXT NOT NULL,
    "motivoConsulta" TEXT,
    "antecedentes" TEXT,
    "diagnostico" TEXT,
    "tratamiento" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "HCE_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE INDEX "HCE_doctorId_idx" ON "HCE"("doctorId");

-- CreateIndex
CREATE INDEX "HCE_patientId_idx" ON "HCE"("patientId");

-- AddForeignKey
ALTER TABLE "HCE" ADD CONSTRAINT "HCE_doctorId_fkey" FOREIGN KEY ("doctorId") REFERENCES "Doctor"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "HCE" ADD CONSTRAINT "HCE_patientId_fkey" FOREIGN KEY ("patientId") REFERENCES "Patient"("id") ON DELETE CASCADE ON UPDATE CASCADE;
