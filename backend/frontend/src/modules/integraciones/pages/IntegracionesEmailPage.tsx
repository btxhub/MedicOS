import { ContentLayout } from '@/shared/layouts/ContentLayout';
import { Card, Input, Button } from '@/shared/components';

export default function IntegracionesEmailPage() {
  return (
    <ContentLayout>
      <Card>
        <div className="form-group">
          <Input label="Destinatario" />
        </div>
        <div className="form-group">
          <Input label="Asunto" />
        </div>
        <div className="form-group">
          <textarea className="textarea" placeholder="Mensaje"></textarea>
        </div>
        <Button label="Enviar" />
      </Card>
    </ContentLayout>
  );
}