// ARCHIVO: src/modules/clinico/pages/DiagnosticoPage.tsx

import React from "react";
import { Card, Input, Button } from "../../../shared/components";
import { ContentLayout } from "../../../shared/layouts/ContentLayout";
import "../pages/diagnostico.css";

export const DiagnosticoPage: React.FC = () => {
  return (
    <ContentLayout>
      <div className="diagnostico-container">
        <Card>
          <div className="diagnostico-form">
            <Input label="Diagnóstico principal" />
            <Input label="Observaciones" />
            <Button label="Guardar" />
          </div>
        </Card>
      </div>
    </ContentLayout>
  );
};