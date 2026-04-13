// ARCHIVO: src/modules/clinico/pages/EvolucionPage.tsx

import React from "react";
import { Card, Input, Button } from "@/shared/components";
import { ContentLayout } from "@/shared/layouts/ContentLayout";
import "../pages/evolucion.css";

export const EvolucionPage: React.FC = () => {
  return (
    <ContentLayout>
      <div className="evolucion-page">
        <Card>
          <Input label="Fecha" />
          <Input label="Notas de evolución" />
          <Button label="Guardar" />
        </Card>
      </div>
    </ContentLayout>
  );
};