import { ContentLayout } from '@/shared/layouts/ContentLayout';
import { Card, Table } from '@/shared/components';

export default function IntegracionesCalendarPage() {
  return (
    <ContentLayout>
      <Card>
        <h2>Calendario</h2>

        <Table
          columns={[
            { key: 'fecha', label: 'Fecha' },
            { key: 'horaInicio', label: 'Inicio' },
            { key: 'horaFin', label: 'Fin' },
            { key: 'evento', label: 'Evento' },
            { key: 'estado', label: 'Estado' },
          ]}
          data={[
            {
              fecha: '2026-01-01',
              horaInicio: '09:00',
              horaFin: '09:30',
              evento: 'Consulta médica',
              estado: 'Confirmado'
            },
            {
              fecha: '2026-01-02',
              horaInicio: '11:30',
              horaFin: '12:00',
              evento: 'Seguimiento',
              estado: 'Pendiente'
            },
          ]}
        />
      </Card>
    </ContentLayout>
  );
}