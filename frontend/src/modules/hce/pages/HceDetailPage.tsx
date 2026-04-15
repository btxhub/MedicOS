// ARCHIVO: frontend/src/modules/hce/pages/HceDetailPage.tsx

import './hce-detail.css';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

import { ContentLayout } from '@/shared/layouts/ContentLayout';
import { Card } from '@/shared/components/card';

const HceDetailPage = () => {
  const { id } = useParams();

  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [data, setData] = useState<any>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        setError(null);

        const res = await fetch(`http://localhost:3001/hce/${id}`);
        const json = await res.json();

        setData(json);

      } catch (e) {
        setError('Error al cargar la HCE');
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [id]);

  return (
    <ContentLayout>
      <div className="hce-detail-container">
        <Card>
          <h2 className="hce-detail-title">Detalle Historia Clínica</h2>

          {loading && <p>Cargando...</p>}
          {error && <p className="hce-error">{error}</p>}

          {!loading && !error && data && (
            <>
              <div className="hce-detail-section">
                <p><strong>ID:</strong> {data.id}</p>
                <p><strong>Paciente:</strong> {data.paciente}</p>
                <p><strong>Médico:</strong> {data.medico}</p>
                <p><strong>Fecha:</strong> {data.fecha}</p>
                <p><strong>Hora:</strong> {data.hora}</p>
              </div>

              <div className="hce-detail-section">
                <h3>Diagnóstico</h3>
                {data.diagnosticos?.map((d: any) => (
                  <p key={d.id}>{d.descripcion}</p>
                ))}
              </div>

              <div className="hce-detail-section">
                <h3>Tratamiento</h3>
                {data.tratamientos?.map((t: any) => (
                  <p key={t.id}>{t.descripcion}</p>
                ))}
              </div>
            </>
          )}
        </Card>
      </div>
    </ContentLayout>
  );
};

export default HceDetailPage;