// ARCHIVO: src/modules/clinico/pages/TratamientoPage.tsx

import React from "react";
import { Card, Input, Button } from "../../../shared/components";
import { ContentLayout } from "../../../shared/layouts/ContentLayout";
import "../pages/tratamiento.css";

export const TratamientoPage: React.FC = () => {
  return (
    <ContentLayout>
      <div className="tratamiento-page">
        <Card>
          <Input label="Indicaciones" />
          <Input label="Recomendaciones" />
          <Button label="Guardar" />
        </Card>
      </div>
    </ContentLayout>
  );
};