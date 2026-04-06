// ARCHIVO: src/modules/agenda/pages/AgendaEditPage.tsx

import { ContentLayout } from '@/shared/layouts/ContentLayout';
import { Card, Input, Select, Button } from '@/shared/components';
import './agenda-edit.css';

export const AgendaEditPage = () => {
  return (
    <ContentLayout>
      <div className="agenda-edit-container">
        <h1 className="agenda-edit-title">Editar Cita</h1>

        <Card>
          <div className="agenda-edit-form">
            <Input label="Paciente" placeholder="Paciente" />
            <Input label="Médico" placeholder="Médico" />
            <Input label="Fecha" placeholder="YYYY-MM-DD" />
            <Input label="Hora" placeholder="HH:MM" />

            <Select
              label="Tipo de cita"
              options={[
                { label: 'Consulta', value: 'consulta' },
                { label: 'Control', value: 'control' }
              ]}
            />

            <Button label="Actualizar" />
          </div>
        </Card>
      </div>
    </ContentLayout>
  );
};