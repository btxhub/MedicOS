import ContentLayout from '@/shared/layouts/ContentLayout';
import { Card, Table } from '@/shared/components';

export default function PublicidadListPage() {
  const columns = [
    { key: 'titulo', label: 'Título' },
    { key: 'tipo', label: 'Tipo' },
    { key: 'ubicacion', label: 'Ubicación' },
    { key: 'vigencia', label: 'Vigencia' },
  ];

  const data = [
    {
      titulo: 'Banner principal',
      tipo: 'Banner',
      ubicacion: 'Home',
      vigencia: '01/04/2026 - 30/04/2026',
    },
    {
      titulo: 'Popup oferta',
      tipo: 'Popup',
      ubicacion: 'Checkout',
      vigencia: '05/04/2026 - 20/04/2026',
    },
  ];

  return (
    <ContentLayout>
      <Card>
        <h2>Listado de anuncios</h2>
        <Table columns={columns} data={data} />
      </Card>
    </ContentLayout>
  );
}