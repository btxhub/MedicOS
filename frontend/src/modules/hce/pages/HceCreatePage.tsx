// ARCHIVO: frontend/src/modules/hce/pages/HceCreatePage.tsx

import './hce-create.css';
import { useState, useEffect } from 'react';

import { ContentLayout } from '@/shared/layouts/ContentLayout';
import { Card } from '@/shared/components/card';
import { Input } from '@/shared/components/input';
import { Button } from '@/shared/components/button';

const HceCreatePage = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const [pacientes, setPacientes] = useState<any[]>([]);
  const [selectedPaciente, setSelectedPaciente] = useState<string>('');

  const [fecha, setFecha] = useState('');
  const [hora, setHora] = useState('');

  const [medicoId, setMedicoId] = useState<string>('');

  useEffect(() => {
    const fetchInitialData = async () => {
      try {
        const pacientesRes = await fetch('http://localhost:3001/paciente');
        const pacientesJson = await pacientesRes.json();

        setPacientes(pacientesJson);
        setMedicoId('1');

        const now = new Date();
        setFecha(now.toISOString().split('T')[0]);
        setHora(now.toTimeString().slice(0, 5));
      } catch (e) {
        setError('Error al cargar datos iniciales');
      }
    };

    fetchInitialData();
  }, []);

  const handleSave = async () => {
    try {
      setLoading(true);
      setError(null);

      await fetch('http://localhost:3001/hce', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          pacienteId: selectedPaciente,
          medicoId,
          fecha,
          hora,
        }),
      });
    } catch (e) {
      setError('Error al guardar la HCE');
    } finally {
      setLoading(false);
    }
  };

  return (
    <ContentLayout>
      <div className="hce-create-container">
        <Card>
          <h2 className="hce-create-title">Nueva Historia Clínica</h2>

          {error && <div className="hce-error">{error}</div>}

          <div className="hce-create-form">
            <select
              value={selectedPaciente}
              onChange={(e) => setSelectedPaciente(e.target.value)}
            >
              <option value="">Seleccionar paciente</option>
              {pacientes.map((p) => (
                <option key={p.idPac} value={p.idPac}>
                  {p.nombrePac} {p.apellidoPac}
                </option>
              ))}
            </select>

            <Input label="Fecha" value={fecha} disabled />
            <Input label="Hora" value={hora} disabled />

            <div className="hce-create-actions">
              <Button
                variant="primary"
                label={loading ? 'Guardando...' : 'Guardar'}
                onClick={handleSave}
                disabled={loading || !selectedPaciente}
              />
              <Button variant="secondary" label="Cancelar" disabled={loading} />
            </div>
          </div>
        </Card>
      </div>
    </ContentLayout>
  );
};

export default HceCreatePage;