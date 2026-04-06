import { ContentLayout } from '../../../shared/layouts/ContentLayout';
import './suscripcion-list.css';

type SuscripcionEstado = 'Activa' | 'Vencida' | 'Pendiente' | 'Suspendida';

interface SuscripcionItem {
  id: string;
  medico: string;
  plan: string;
  estado: SuscripcionEstado;
  fechaInicio: string;
  fechaFin: string;
}

const suscripcionesMock: SuscripcionItem[] = [
  {
    id: 'sus-001',
    medico: 'Dr. Juan Pérez',
    plan: 'Plan Profesional',
    estado: 'Activa',
    fechaInicio: '2026-01-01',
    fechaFin: '2026-12-31',
  },
];

function getEstadoClassName(estado: SuscripcionEstado): string {
  switch (estado) {
    case 'Activa':
      return 'suscripcion-list__badge suscripcion-list__badge--activa';
    case 'Vencida':
      return 'suscripcion-list__badge suscripcion-list__badge--vencida';
    case 'Pendiente':
      return 'suscripcion-list__badge suscripcion-list__badge--pendiente';
    case 'Suspendida':
      return 'suscripcion-list__badge suscripcion-list__badge--suspendida';
    default:
      return 'suscripcion-list__badge';
  }
}

export default function SuscripcionListPage() {
  return (
    <ContentLayout>
      <section className="suscripcion-list">
        <header className="suscripcion-list__header">
          <div>
            <p className="suscripcion-list__eyebrow">SUSCRIPCIÓN</p>
            <h1 className="suscripcion-list__title">Listado de suscripciones</h1>
            <p className="suscripcion-list__subtitle">
              Visualización de suscripciones activas y pasadas.
            </p>
          </div>
        </header>

        <div className="suscripcion-list__card">
          <div className="suscripcion-list__card-header">
            <h2 className="suscripcion-list__card-title">Suscripciones registradas</h2>
            <span className="suscripcion-list__count">
              {suscripcionesMock.length} registros
            </span>
          </div>

          <div className="suscripcion-list__table-wrapper">
            <table className="suscripcion-list__table">
              <thead>
                <tr>
                  <th>Médico</th>
                  <th>Plan</th>
                  <th>Estado</th>
                  <th>Fecha inicio</th>
                  <th>Fecha fin</th>
                </tr>
              </thead>
              <tbody>
                {suscripcionesMock.map((suscripcion) => (
                  <tr key={suscripcion.id}>
                    <td>{suscripcion.medico}</td>
                    <td>{suscripcion.plan}</td>
                    <td>
                      <span className={getEstadoClassName(suscripcion.estado)}>
                        {suscripcion.estado}
                      </span>
                    </td>
                    <td>{suscripcion.fechaInicio}</td>
                    <td>{suscripcion.fechaFin}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>
    </ContentLayout>
  );
}