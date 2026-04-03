// ARCHIVO: frontend/src/modules/hce/pages/HceDetailPage.tsx

import './hce-detail.css';

import { LayoutWrapper } from '@/shared/components/layout-wrapper';
import { Card } from '@/shared/components/card';

const HceDetailPage = () => {
  return (
    <LayoutWrapper>
      <div className="hce-detail-container">
        <Card>
          <h2 className="hce-detail-title">Detalle Historia Clínica</h2>

          <div className="hce-detail-section">
            <p><strong>Paciente:</strong> Juan Pérez</p>
            <p><strong>Médico:</strong> Dr. Gómez</p>
            <p><strong>Fecha:</strong> 2026-04-01</p>
            <p><strong>Hora:</strong> 10:30</p>
          </div>

          <div className="hce-detail-section">
            <h3>Motivo</h3>
            <p>Consulta general</p>
          </div>

          <div className="hce-detail-section">
            <h3>Exploración</h3>
            <p>Sin hallazgos relevantes</p>
          </div>

          <div className="hce-detail-section">
            <h3>Diagnóstico</h3>
            <p>Diagnóstico resumido</p>
          </div>

          <div className="hce-detail-section">
            <h3>Tratamiento</h3>
            <p>Tratamiento resumido</p>
          </div>
        </Card>
      </div>
    </LayoutWrapper>
  );
};

export default HceDetailPage;