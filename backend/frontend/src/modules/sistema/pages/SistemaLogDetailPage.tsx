// ARCHIVO: src/modules/sistema/pages/SistemaLogDetailPage.tsx

import { ContentLayout } from "@/shared/layouts/ContentLayout";
import { Card, Table } from "@/shared/components";
import "./sistema-log-detail.css";

export const SistemaLogDetailPage = () => {
  const columns = [
    { key: "campo", label: "Campo" },
    { key: "valor", label: "Valor" },
  ];

  const data = [
    { campo: "Usuario", valor: "admin" },
    { campo: "Acción", valor: "CREAR" },
    { campo: "Módulo", valor: "Paciente" },
    { campo: "Entidad", valor: "Juan Perez" },
    { campo: "Fecha", valor: "2026-04-07" },
  ];

  return (
    <ContentLayout>
      <div className="sistema-log-detail">
        <Card>
          <Table columns={columns} data={data} />
        </Card>
      </div>
    </ContentLayout>
  );
};