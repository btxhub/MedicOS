// ARCHIVO: src/modules/publicidad/pages/PublicidadListPage.tsx

import { ContentLayout } from "@/shared/layouts/ContentLayout";
import { Card, Table } from "@/shared/components";

export const PublicidadListPage = () => {
  const columns = [
    { key: "titulo", label: "Título" },
    { key: "tipo", label: "Tipo" },
    { key: "estado", label: "Estado" },
  ];

  const data = [
    {
      titulo: "Banner principal",
      tipo: "Banner",
      estado: "Activo",
    },
  ];

  return (
    <ContentLayout>
      <Card>
        <Table columns={columns} data={data} />
      </Card>
    </ContentLayout>
  );
};