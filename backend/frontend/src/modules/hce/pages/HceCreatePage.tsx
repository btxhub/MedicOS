// ARCHIVO: frontend/src/modules/hce/pages/HceCreatePage.tsx

import './hce-create.css';

import { ContentLayout } from '@/shared/layouts/ContentLayout';
import { Card } from '@/shared/components/card';
import { Input } from '@/shared/components/input';
import { Button } from '@/shared/components/button';

const HceCreatePage = () => {
  return (
    <ContentLayout>
      <div className="hce-create-container">
        <Card>
          <h2 className="hce-create-title">Nueva Historia Clínica</h2>

          <div className="hce-create-form">
            <Input label="Paciente" placeholder="Seleccionar paciente" />
            <Input label="Médico" placeholder="Seleccionar médico" />
            <Input label="Fecha" placeholder="YYYY-MM-DD" />
            <Input label="Hora" placeholder="HH:MM" />

            <div className="hce-create-actions">
              <Button variant="primary" label="Guardar" />
              <Button variant="secondary" label="Cancelar" />
            </div>
          </div>
        </Card>
      </div>
    </ContentLayout>
  );
};

export default HceCreatePage;