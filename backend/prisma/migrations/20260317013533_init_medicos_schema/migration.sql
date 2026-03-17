-- CreateTable
CREATE TABLE "User" (
    "idUser" UUID NOT NULL DEFAULT gen_random_uuid(),
    "emailUser" TEXT NOT NULL,
    "passHashUser" TEXT NOT NULL,
    "activoUser" BOOLEAN DEFAULT true,
    "createdUser" TIMESTAMP(3) DEFAULT CURRENT_TIMESTAMP,
    "updatedUser" TIMESTAMP(3) DEFAULT CURRENT_TIMESTAMP,
    "refDocUser" UUID,
    "refAsisUser" UUID,

    CONSTRAINT "User_pkey" PRIMARY KEY ("idUser")
);

-- CreateTable
CREATE TABLE "Doctor" (
    "idDoc" UUID NOT NULL DEFAULT gen_random_uuid(),
    "telDoc" TEXT,
    "waDoc" TEXT,
    "dirDoc" TEXT,
    "espDoc" TEXT,
    "licDoc" TEXT,
    "createdDoc" TIMESTAMP(3) DEFAULT CURRENT_TIMESTAMP,
    "updatedDoc" TIMESTAMP(3) DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "Doctor_pkey" PRIMARY KEY ("idDoc")
);

-- CreateTable
CREATE TABLE "Paciente" (
    "idPac" UUID NOT NULL DEFAULT gen_random_uuid(),
    "refDocPac" UUID,
    "telPac" TEXT,
    "waPac" TEXT,
    "emailPac" TEXT,
    "dirPac" TEXT,
    "grupoSangPac" TEXT,
    "seguroPac" TEXT,
    "activoPac" BOOLEAN DEFAULT true,
    "createdPac" TIMESTAMP(3) DEFAULT CURRENT_TIMESTAMP,
    "updatedPac" TIMESTAMP(3) DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "Paciente_pkey" PRIMARY KEY ("idPac")
);

-- CreateTable
CREATE TABLE "Asistente" (
    "idAsis" UUID NOT NULL DEFAULT gen_random_uuid(),
    "refDocAsis" UUID,
    "nomAsis" TEXT NOT NULL,
    "apePatAsis" TEXT NOT NULL,
    "apeMatAsis" TEXT,
    "docIdAsis" TEXT,
    "emailAsis" TEXT,
    "celAsis" TEXT,
    "telAsis" TEXT,
    "waAsis" TEXT,
    "activoAsis" BOOLEAN DEFAULT true,
    "createdAsis" TIMESTAMP(3) DEFAULT CURRENT_TIMESTAMP,
    "updatedAsis" TIMESTAMP(3) DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "Asistente_pkey" PRIMARY KEY ("idAsis")
);

-- CreateTable
CREATE TABLE "Cita" (
    "idCita" UUID NOT NULL DEFAULT gen_random_uuid(),
    "refDocCita" UUID NOT NULL,
    "refPacCita" UUID NOT NULL,
    "fechaCita" TIMESTAMP(3) NOT NULL,
    "horaCita" TIMESTAMP(3) NOT NULL,
    "estadoCita" TEXT,
    "motivoCita" TEXT,
    "observCita" TEXT,
    "createdCita" TIMESTAMP(3) DEFAULT CURRENT_TIMESTAMP,
    "updatedCita" TIMESTAMP(3) DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "Cita_pkey" PRIMARY KEY ("idCita")
);

-- CreateTable
CREATE TABLE "HCE" (
    "idHce" UUID NOT NULL DEFAULT gen_random_uuid(),
    "refDocHce" UUID NOT NULL,
    "refPacHce" UUID NOT NULL,
    "motivoHce" TEXT,
    "enfActHce" TEXT,
    "antecedentesHce" TEXT,
    "alergiasHce" TEXT,
    "signosVitHce" TEXT,
    "exploracionHce" TEXT,
    "diagnosticoHce" TEXT,
    "tratamientoHce" TEXT,
    "planHce" TEXT,
    "consentimientoHce" TEXT,
    "createdHce" TIMESTAMP(3) DEFAULT CURRENT_TIMESTAMP,
    "updatedHce" TIMESTAMP(3) DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "HCE_pkey" PRIMARY KEY ("idHce")
);

-- CreateTable
CREATE TABLE "Receta" (
    "idReceta" UUID NOT NULL DEFAULT gen_random_uuid(),
    "refDocReceta" UUID NOT NULL,
    "refPacReceta" UUID NOT NULL,
    "refHceReceta" UUID,
    "fechaReceta" TIMESTAMP(3),
    "medicamentoReceta" TEXT,
    "dosisReceta" TEXT,
    "indicacionesReceta" TEXT,
    "createdReceta" TIMESTAMP(3) DEFAULT CURRENT_TIMESTAMP,
    "updatedReceta" TIMESTAMP(3) DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "Receta_pkey" PRIMARY KEY ("idReceta")
);

-- CreateIndex
CREATE UNIQUE INDEX "User_emailUser_key" ON "User"("emailUser");

-- AddForeignKey
ALTER TABLE "Paciente" ADD CONSTRAINT "Paciente_refDocPac_fkey" FOREIGN KEY ("refDocPac") REFERENCES "Doctor"("idDoc") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Asistente" ADD CONSTRAINT "Asistente_refDocAsis_fkey" FOREIGN KEY ("refDocAsis") REFERENCES "Doctor"("idDoc") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Cita" ADD CONSTRAINT "Cita_refDocCita_fkey" FOREIGN KEY ("refDocCita") REFERENCES "Doctor"("idDoc") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Cita" ADD CONSTRAINT "Cita_refPacCita_fkey" FOREIGN KEY ("refPacCita") REFERENCES "Paciente"("idPac") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "HCE" ADD CONSTRAINT "HCE_refDocHce_fkey" FOREIGN KEY ("refDocHce") REFERENCES "Doctor"("idDoc") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "HCE" ADD CONSTRAINT "HCE_refPacHce_fkey" FOREIGN KEY ("refPacHce") REFERENCES "Paciente"("idPac") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Receta" ADD CONSTRAINT "Receta_refDocReceta_fkey" FOREIGN KEY ("refDocReceta") REFERENCES "Doctor"("idDoc") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Receta" ADD CONSTRAINT "Receta_refPacReceta_fkey" FOREIGN KEY ("refPacReceta") REFERENCES "Paciente"("idPac") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Receta" ADD CONSTRAINT "Receta_refHceReceta_fkey" FOREIGN KEY ("refHceReceta") REFERENCES "HCE"("idHce") ON DELETE SET NULL ON UPDATE CASCADE;
