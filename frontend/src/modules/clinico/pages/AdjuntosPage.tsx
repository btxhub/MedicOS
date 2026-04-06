// ARCHIVO: src/modules/clinico/pages/AdjuntosPage.tsx

import React from "react";
import { Card, Button, Modal } from "../../../shared/components";
import { ContentLayout } from "../../../shared/layouts/ContentLayout";
import "../pages/adjuntos.css";

export const AdjuntosPage: React.FC = () => {
  return (
    <ContentLayout>
      <div className="adjuntos-page">
        <Card>
          <Button label="Subir archivo" />
        </Card>

        <Modal open={false}>
          <div>Área de carga de archivos</div>
        </Modal>
      </div>
    </ContentLayout>
  );
};