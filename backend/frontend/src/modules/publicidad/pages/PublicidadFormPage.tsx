import { ContentLayout } from '@/shared/layouts/ContentLayout';
import { Card, Input, Select, Button } from '@/shared/components/index';

export default function PublicidadFormPage() {
  return (
    <ContentLayout>
      <Card>
        <h2>Crear / Editar anuncio</h2>

        <Input label="Título" value="Banner principal" />
        <Input label="Descripción" value="Promoción destacada" />

        <Select
          label="Tipo"
          value="banner"
          options={[
            { label: 'Banner', value: 'banner' },
            { label: 'Popup', value: 'popup' },
          ]}
        />

        <Input label="URLs" value="https://example.com" />
        <Input label="Fecha inicio" value="01/04/2026" />
        <Input label="Fecha fin" value="30/04/2026" />

        <Select
          label="Ubicación"
          value="home"
          options={[
            { label: 'Home', value: 'home' },
            { label: 'Checkout', value: 'checkout' },
          ]}
        />

        <Button>Guardar</Button>
      </Card>
    </ContentLayout>
  );
}