import { ContentLayout } from '../../../shared/layouts/ContentLayout';
import './suscripcion-pagos.css';

interface PagoItem {
  id: string;
  monto: number;
  moneda: string;
  fecha: string;
  estado: 'Pagado' | 'Pendiente' | 'Fallido';
}

const pagosMock: PagoItem[] = [
  { id: 'p-001', monto: 50, moneda: 'USD', fecha: '2026-01-10', estado: 'Pagado' },
];

function getEstadoClass(estado: PagoItem['estado']) {
  switch (estado) {
    case 'Pagado':
      return 'suscripcion-pagos__badge pagado';
    case 'Pendiente':
      return 'suscripcion-pagos__badge pendiente';
    case 'Fallido':
      return 'suscripcion-pagos__badge fallido';
    default:
      return 'suscripcion-pagos__badge';
  }
}

export default function SuscripcionPagosPage() {
  return (
    <ContentLayout>
      <section className="suscripcion-pagos">
        <header className="suscripcion-pagos__header">
          <div>
            <p className="suscripcion-pagos__eyebrow">SUSCRIPCIÓN</p>
            <h1 className="suscripcion-pagos__title">Historial de pagos</h1>
            <p className="suscripcion-pagos__subtitle">
              Registro de pagos por suscripción.
            </p>
          </div>
        </header>

        <div className="suscripcion-pagos__card">
          <div className="suscripcion-pagos__table-wrapper">
            <table className="suscripcion-pagos__table">
              <thead>
                <tr>
                  <th>Monto</th>
                  <th>Moneda</th>
                  <th>Fecha</th>
                  <th>Estado</th>
                </tr>
              </thead>
              <tbody>
                {pagosMock.map((pago) => (
                  <tr key={pago.id}>
                    <td>{pago.monto}</td>
                    <td>{pago.moneda}</td>
                    <td>{pago.fecha}</td>
                    <td>
                      <span className={getEstadoClass(pago.estado)}>
                        {pago.estado}
                      </span>
                    </td>
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