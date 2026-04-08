import { ContentLayout } from '@/shared/layouts/ContentLayout';
import { Card, Input, Button } from '@/shared/components';

export default function IntegracionesEmailPage() {
  return (
    <ContentLayout>
      <Card>
        <h2>Envío de Email</h2>

        <Input label="Destinatario" placeholder="Destinatario" />
        <Input label="Asunto" placeholder="Asunto" />

        <textarea
          placeholder="Mensaje"
          style={{ width: '100%', minHeight: '120px' }}
        />

        <Button label="Enviar" />
      </Card>
    </ContentLayout>
  );
}