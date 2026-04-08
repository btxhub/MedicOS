// ARCHIVO: src/modules/publicidad/pages/PublicidadPagosPage.tsx

import { ContentLayout } from "@/shared/layouts/ContentLayout";
import { Card, Table } from "@/shared/components";

export const PublicidadPagosPage = () => {
  const columns = [
    { key: "fecha", label: "Fecha" },
    { key: "monto", label: "Monto" },
    { key: "estado", label: "Estado" },
  ];

  const data = [
    {
      fecha: "2026-04-07",
      monto: "100 Bs",
      estado: "Pagado",
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