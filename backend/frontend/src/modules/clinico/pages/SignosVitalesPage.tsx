// ARCHIVO: src/modules/clinico/pages/SignosVitalesPage.tsx

import React from "react";
import { Card, Input, Button } from "@/shared/components";
import { ContentLayout } from "@/shared/layouts/ContentLayout";
import "../pages/signos-vitales.css";

export const SignosVitalesPage: React.FC = () => {
  return (
    <ContentLayout>
      <div className="signos-vitales-page">
        <Card>
          <Input label="Presión arterial" />
          <Input label="Temperatura" />
          <Input label="Frecuencia cardíaca" />
          <Input label="Peso" />
          <Input label="Talla" />
          <Input label="Saturación de oxígeno" />
          <Button label="Guardar" />
        </Card>
      </div>
    </ContentLayout>
  );
};