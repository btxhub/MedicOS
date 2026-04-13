// ARCHIVO: src/modules/clinico/pages/DiagnosticoPage.tsx

import React from "react";
import { Card, Input, Button } from "@/shared/components";
import { ContentLayout } from "@/shared/layouts/ContentLayout";
import "../pages/diagnostico.css";

export const DiagnosticoPage: React.FC = () => {
  return (
    <ContentLayout>
      <div className="diagnostico-page">
        <Card>
          <Input label="Diagnóstico principal" value="" onChange={() => {}} />
          <Input label="Observaciones" value="" onChange={() => {}} />
          <Button label="Guardar" />
        </Card>
      </div>
    </ContentLayout>
  );
};