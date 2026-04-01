import { Input, Button, Card } from '@/shared/components';
import { ContentLayout } from '@/shared/layouts';
import './paciente.css';

type Props = {
  mode?: 'create' | 'edit';
};

export const PacienteFormPage = ({ mode = 'create' }: Props) => {
  return (
    <ContentLayout>
      <div className="paciente-container">
        <h2 className="paciente-title">
          {mode === 'create' ? 'Nuevo Paciente' : 'Editar Paciente'}
        </h2>

        <Card>
          <form>
            <Input label="Nombre" />
            <Input label="Documento" />
            <Input label="Fecha Nacimiento" />
            <Input label="Foto" />

            <div className="paciente-actions">
              <Button
                label={
                  mode === 'create'
                    ? 'Crear Paciente'
                    : 'Actualizar Paciente'
                }
              />
            </div>
          </form>
        </Card>
      </div>
    </ContentLayout>
  );
};