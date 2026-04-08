import { ContentLayout } from '@/shared/layouts/ContentLayout';
import { Card, Input, Button } from '@/shared/components';

export default function IntegracionesWhatsappPage() {
  return (
    <ContentLayout>
      <Card>
        <h2>Envío de WhatsApp</h2>

        <Input label="Destinatario" placeholder="Destinatario" />

        <textarea
          placeholder="Mensaje"
          style={{ width: '100%', minHeight: '120px' }}
        />

        <Button label="Enviar" />
      </Card>
    </ContentLayout>
  );
}