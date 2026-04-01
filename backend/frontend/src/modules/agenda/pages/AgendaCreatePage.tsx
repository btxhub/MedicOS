// ARCHIVO: src/modules/agenda/pages/AgendaCreatePage.tsx

import { ContentLayout } from '@/shared/layouts/ContentLayout';
import { Card, Input, Select, Button } from '@/shared/components';
import './agenda-create.css';

export const AgendaCreatePage = () => {
  return (
    <ContentLayout>
      <div className="agenda-create-container">
        <h1 className="agenda-create-title">Nueva Cita</h1>

        <Card>
          <div className="agenda-create-form">
            <Input label="Paciente" placeholder="Seleccionar paciente" />
            <Input label="Médico" placeholder="Seleccionar médico" />
            <Input label="Fecha" placeholder="YYYY-MM-DD" />
            <Input label="Hora" placeholder="HH:MM" />

            <Select
              label="Tipo de cita"
              options={[
                { label: 'Consulta', value: 'consulta' },
                { label: 'Control', value: 'control' }
              ]}
            />

            <Button label="Guardar" />
          </div>
        </Card>
      </div>
    </ContentLayout>
  );
};