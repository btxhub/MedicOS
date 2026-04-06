// ARCHIVO: frontend/src/modules/hce/pages/HceListPage.tsx

import './hce-list.css';

import { LayoutWrapper } from '@/shared/components/layout-wrapper';
import { Card } from '@/shared/components/card';
import { Table } from '@/shared/components/table';

const HceListPage = () => {
  const columns = [
    { key: 'paciente', label: 'Paciente' },
    { key: 'medico', label: 'Médico' },
    { key: 'fecha', label: 'Fecha' },
  ];

  const data = [
    { paciente: 'Juan Pérez', medico: 'Dr. Gómez', fecha: '2026-04-01' },
    { paciente: 'María López', medico: 'Dra. Ruiz', fecha: '2026-04-02' },
  ];

  return (
    <LayoutWrapper>
      <div className="hce-list-container">
        <Card>
          <h2 className="hce-list-title">Historias Clínicas</h2>
          <Table columns={columns} data={data} />
        </Card>
      </div>
    </LayoutWrapper>
  );
};

export default HceListPage;