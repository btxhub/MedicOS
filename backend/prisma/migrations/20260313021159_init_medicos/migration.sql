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
    "createdAsis" TIMESTAMP(6) DEFAULT CURRENT_TIMESTAMP,
    "updatedAsis" TIMESTAMP(6) DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "Asistente_pkey" PRIMARY KEY ("idAsis")
);

-- CreateTable
CREATE TABLE "Cita" (
    "idCita" UUID NOT NULL DEFAULT gen_random_uuid(),
    "refDocCita" UUID NOT NULL,
    "refPacCita" UUID NOT NULL,
    "fechaCita" DATE NOT NULL,
    "horaCita" TIME(6) NOT NULL,
    "estadoCita" TEXT,
    "motivoCita" TEXT,
    "observCita" TEXT,
    "createdCita" TIMESTAMP(6) DEFAULT CURRENT_TIMESTAMP,
    "updatedCita" TIMESTAMP(6) DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "Cita_pkey" PRIMARY KEY ("idCita")
);

-- CreateTable
CREATE TABLE "Doctor" (
    "idDoc" UUID NOT NULL DEFAULT gen_random_uuid(),
    "nomDoc" TEXT NOT NULL,
    "apePatDoc" TEXT NOT NULL,
    "apeMatDoc" TEXT,
    "docIdDoc" TEXT,
    "emailDoc" TEXT,
    "celDoc" TEXT,
    "telDoc" TEXT,
    "waDoc" TEXT,
    "dirDoc" TEXT,
    "espDoc" TEXT,
    "licDoc" TEXT,
    "createdDoc" TIMESTAMP(6) DEFAULT CURRENT_TIMESTAMP,
    "updatedDoc" TIMESTAMP(6) DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "Doctor_pkey" PRIMARY KEY ("idDoc")
);

-- CreateTable
CREATE TABLE "HCE" (
    "idHce" UUID NOT NULL DEFAULT gen_random_uuid(),
    "refDocHce" UUID NOT NULL,
    "refPacHce" UUID NOT NULL,
    "fechaHce" DATE,
    "horaHce" TIME(6),
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
    "createdHce" TIMESTAMP(6) DEFAULT CURRENT_TIMESTAMP,
    "updatedHce" TIMESTAMP(6) DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "HCE_pkey" PRIMARY KEY ("idHce")
);

-- CreateTable
CREATE TABLE "Paciente" (
    "idPac" UUID NOT NULL DEFAULT gen_random_uuid(),
    "refDocPac" UUID,
    "nomPac" TEXT NOT NULL,
    "apePatPac" TEXT NOT NULL,
    "apeMatPac" TEXT,
    "docIdPac" TEXT,
    "fechaNacPac" DATE,
    "sexoPac" TEXT,
    "celPac" TEXT,
    "telPac" TEXT,
    "waPac" TEXT,
    "emailPac" TEXT,
    "dirPac" TEXT,
    "grupoSangPac" TEXT,
    "seguroPac" TEXT,
    "activoPac" BOOLEAN DEFAULT true,
    "createdPac" TIMESTAMP(6) DEFAULT CURRENT_TIMESTAMP,
    "updatedPac" TIMESTAMP(6) DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "Paciente_pkey" PRIMARY KEY ("idPac")
);

-- CreateTable
CREATE TABLE "Receta" (
    "idReceta" UUID NOT NULL DEFAULT gen_random_uuid(),
    "refDocReceta" UUID NOT NULL,
    "refPacReceta" UUID NOT NULL,
    "refHceReceta" UUID,
    "fechaReceta" DATE,
    "medicamentoReceta" TEXT,
    "dosisReceta" TEXT,
    "indicacionesReceta" TEXT,
    "createdReceta" TIMESTAMP(6) DEFAULT CURRENT_TIMESTAMP,
    "updatedReceta" TIMESTAMP(6) DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "Receta_pkey" PRIMARY KEY ("idReceta")
);

-- CreateTable
CREATE TABLE "User" (
    "idUser" UUID NOT NULL DEFAULT gen_random_uuid(),
    "emailUser" TEXT NOT NULL,
    "passHashUser" TEXT NOT NULL,
    "activoUser" BOOLEAN DEFAULT true,
    "createdUser" TIMESTAMP(6) DEFAULT CURRENT_TIMESTAMP,
    "updatedUser" TIMESTAMP(6) DEFAULT CURRENT_TIMESTAMP,
    "refDocUser" UUID,
    "refAsisUser" UUID,

    CONSTRAINT "User_pkey" PRIMARY KEY ("idUser")
);

-- CreateIndex
CREATE UNIQUE INDEX "User_emailUser_key" ON "User"("emailUser");

-- AddForeignKey
ALTER TABLE "Asistente" ADD CONSTRAINT "fk_asistente_doctor" FOREIGN KEY ("refDocAsis") REFERENCES "Doctor"("idDoc") ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "Cita" ADD CONSTRAINT "fk_cita_doctor" FOREIGN KEY ("refDocCita") REFERENCES "Doctor"("idDoc") ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "Cita" ADD CONSTRAINT "fk_cita_paciente" FOREIGN KEY ("refPacCita") REFERENCES "Paciente"("idPac") ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "HCE" ADD CONSTRAINT "fk_hce_doctor" FOREIGN KEY ("refDocHce") REFERENCES "Doctor"("idDoc") ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "HCE" ADD CONSTRAINT "fk_hce_paciente" FOREIGN KEY ("refPacHce") REFERENCES "Paciente"("idPac") ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "Paciente" ADD CONSTRAINT "fk_paciente_doctor" FOREIGN KEY ("refDocPac") REFERENCES "Doctor"("idDoc") ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "Receta" ADD CONSTRAINT "fk_receta_doctor" FOREIGN KEY ("refDocReceta") REFERENCES "Doctor"("idDoc") ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "Receta" ADD CONSTRAINT "fk_receta_hce" FOREIGN KEY ("refHceReceta") REFERENCES "HCE"("idHce") ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "Receta" ADD CONSTRAINT "fk_receta_paciente" FOREIGN KEY ("refPacReceta") REFERENCES "Paciente"("idPac") ON DELETE NO ACTION ON UPDATE NO ACTION;
