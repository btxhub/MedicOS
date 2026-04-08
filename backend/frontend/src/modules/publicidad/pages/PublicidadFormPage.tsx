// ARCHIVO: src/modules/publicidad/pages/PublicidadFormPage.tsx

import { ContentLayout } from "@/shared/layouts/ContentLayout";
import { Card, Input, Select, Button } from "@/shared/components";

export const PublicidadFormPage = () => {
  return (
    <ContentLayout>
      <Card>
        <h2>Crear / Editar anuncio</h2>

        <Input label="Título" />
        <Input label="Descripción" />

        <Select
          label="Tipo"
          options={[
            { label: "Banner", value: "banner" },
            { label: "Popup", value: "popup" },
          ]}
        />

        <Input label="URLs" />
        <Input label="Fecha inicio" />
        <Input label="Fecha fin" />

        <Select
          label="Ubicación"
          options={[
            { label: "Home", value: "home" },
            { label: "Sidebar", value: "sidebar" },
          ]}
        />

        <Button label="Guardar" />
      </Card>
    </ContentLayout>
  );
};