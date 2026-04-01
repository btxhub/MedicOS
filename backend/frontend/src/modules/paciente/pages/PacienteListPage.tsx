import { Table, Card } from '@/shared/components';
import { ContentLayout } from '@/shared/layouts';
import './paciente.css';

export const PacienteListPage = () => {
  const data = [
    {
      id: '1',
      nombre: 'Juan Perez',
      documento: '123456',
      fechaNacimiento: '1990-01-01',
      fotoPac: 'Con foto'
    }
  ];

  return (
    <ContentLayout>
      <div className="paciente-container">
        <h2 className="paciente-title">Pacientes</h2>

        <Card>
          <Table
            columns={[
              { key: 'nombre', label: 'Nombre' },
              { key: 'documento', label: 'Documento' },
              { key: 'fechaNacimiento', label: 'Fecha Nacimiento' },
              { key: 'fotoPac', label: 'Foto' }
            ]}
            data={data}
          />

          <div className="paciente-pagination">
            <button>{'<'}</button>
            <span>1</span>
            <button>{'>'}</button>
          </div>
        </Card>
      </div>
    </ContentLayout>
  );
};