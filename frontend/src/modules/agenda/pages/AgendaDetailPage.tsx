// ARCHIVO: src/modules/agenda/pages/AgendaDetailPage.tsx

import { ContentLayout } from '@/shared/layouts/ContentLayout';
import { Card, Table } from '@/shared/components';
import './agenda-detail.css';

export const AgendaDetailPage = () => {
  return (
    <ContentLayout>
      <div className="agenda-detail-container">
        <h1 className="agenda-detail-title">Detalle de Cita</h1>

        <Card>
          <Table
            columns={[
              { key: 'campo', label: 'Campo' },
              { key: 'valor', label: 'Valor' }
            ]}
            data={[
              { campo: 'Paciente', valor: '---' },
              { campo: 'Médico', valor: '---' },
              { campo: 'Fecha', valor: '---' },
              { campo: 'Hora', valor: '---' },
              { campo: 'Tipo', valor: '---' },
              { campo: 'Estado', valor: '---' }
            ]}
          />
        </Card>
      </div>
    </ContentLayout>
  );
};