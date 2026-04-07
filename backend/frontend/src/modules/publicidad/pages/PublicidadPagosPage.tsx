import { ContentLayout } from '@/shared/layouts/ContentLayout';
import { Card, Table } from '@/shared/components/index';

export default function PublicidadPagosPage() {
  const columns = [
    { key: 'monto', label: 'Monto' },
    { key: 'fecha', label: 'Fecha' },
    { key: 'metodo', label: 'Método' },
    { key: 'estado', label: 'Estado' },
  ];

  const data = [
    {
      monto: '$100',
      fecha: '01/04/2026',
      metodo: 'Tarjeta',
      estado: 'Pagado',
    },
    {
      monto: '$50',
      fecha: '05/04/2026',
      metodo: 'Transferencia',
      estado: 'Pendiente',
    },
  ];

  return (
    <ContentLayout>
      <Card>
        <h2>Gestión de pagos publicitarios</h2>
        <Table columns={columns} data={data} />
      </Card>
    </ContentLayout>
  );
}