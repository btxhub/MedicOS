// ARCHIVO: src/modules/clinico/pages/RecetaPage.tsx

import React from "react";
import { Card, Input, Button } from "../../../shared/components";
import { ContentLayout } from "../../../shared/layouts/ContentLayout";
import "../pages/receta.css";

export const RecetaPage: React.FC = () => {
  return (
    <ContentLayout>
      <div className="receta-page">
        <Card>
          <Input label="Medicamento" />
          <Input label="Dosis" />
          <Input label="Frecuencia" />
          <Button label="Guardar" />
        </Card>
      </div>
    </ContentLayout>
  );
};