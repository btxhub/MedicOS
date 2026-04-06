import { Card } from '@/shared/components';
import { ContentLayout } from '@/shared/layouts';
import './paciente.css';

export const PacienteDetailPage = () => {
  const paciente = {
    nombre: 'Juan Perez',
    documento: '123456',
    fechaNacimiento: '1990-01-01',
    fotoPac: '',
    contactos: [],
    seguros: [],
    antecedentes: []
  };

  return (
    <ContentLayout>
      <div className="paciente-container">
        <h2 className="paciente-title">Detalle de Paciente</h2>

        <Card>
          <p><strong>Nombre:</strong> {paciente.nombre}</p>
          <p><strong>Documento:</strong> {paciente.documento}</p>
          <p><strong>Fecha Nacimiento:</strong> {paciente.fechaNacimiento}</p>

          <div>
            <h3>Foto</h3>
            {paciente.fotoPac ? (
              <img src={paciente.fotoPac} alt="foto paciente" />
            ) : (
              <p>Sin foto</p>
            )}
          </div>

          <div>
            <h3>Contactos</h3>
            {paciente.contactos.length === 0 && <p>Sin contactos</p>}
          </div>

          <div>
            <h3>Seguros</h3>
            {paciente.seguros.length === 0 && <p>Sin seguros</p>}
          </div>

          <div>
            <h3>Antecedentes</h3>
            {paciente.antecedentes.length === 0 && <p>Sin antecedentes</p>}
          </div>
        </Card>
      </div>
    </ContentLayout>
  );
};