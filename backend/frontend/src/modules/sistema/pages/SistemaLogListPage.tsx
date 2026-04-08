// ARCHIVO: src/modules/sistema/pages/SistemaLogListPage.tsx

import { useNavigate } from "react-router-dom";
import { ContentLayout } from "@/shared/layouts/ContentLayout";
import { Card, Table, Input, Select } from "@/shared/components";
import "./sistema-log-list.css";

export const SistemaLogListPage = () => {
  const navigate = useNavigate();

  const columns = [
    { key: "usuario", label: "Usuario" },
    { key: "accion", label: "Acción" },
    { key: "modulo", label: "Módulo" },
    { key: "entidad", label: "Entidad" },
    { key: "fecha", label: "Fecha" },
  ];

  const data = [
    {
      id: "1",
      usuario: "admin",
      accion: "CREAR",
      modulo: "Paciente",
      entidad: "Juan Perez",
      fecha: "2026-04-07",
    },
  ];

  const handleRowClick = (row: any) => {
    navigate(`/sistema/logs/${row.id}`);
  };

  return (
    <ContentLayout>
      <div className="sistema-log-list">
        <Card>
          <div className="filters">
            <Input label="Usuario" />
            <Select
              label="Módulo"
              options={[
                { label: "Paciente", value: "paciente" },
                { label: "Agenda", value: "agenda" },
                { label: "Clínico", value: "clinico" },
              ]}
            />
            <Input label="Fecha" />
          </div>
        </Card>

        <Card>
          {data.length === 0 ? (
            <div>Sin registros</div>
          ) : (
            <Table columns={columns} data={data} onRowClick={handleRowClick} />
          )}
        </Card>
      </div>
    </ContentLayout>
  );
};