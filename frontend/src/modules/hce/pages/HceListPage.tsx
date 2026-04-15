// ARCHIVO: frontend/src/modules/hce/pages/HceListPage.tsx

import './hce-list.css';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

import { ContentLayout } from '@/shared/layouts/ContentLayout';
import { Card } from '@/shared/components/card';
import { Table } from '@/shared/components/table';

const HceListPage = () => {
  const navigate = useNavigate();

  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [data, setData] = useState<any[]>([]);

  const columns = [
    { key: 'id', label: 'ID' },
    { key: 'paciente', label: 'Paciente' },
    { key: 'medico', label: 'Médico' },
    { key: 'fecha', label: 'Fecha' },
  ];

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        setError(null);

        const res = await fetch('http://localhost:3001/hce');
        const json = await res.json();

        setData(json);

      } catch (e) {
        setError('Error al cargar las HCE');
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  const handleRowClick = (row: any) => {
    navigate(`/hce/${row.id}`);
  };

  return (
    <ContentLayout>
      <div className="hce-list-container">
        <Card>
          <h2 className="hce-list-title">Historias Clínicas</h2>

          {loading && <p>Cargando...</p>}
          {error && <p className="hce-error">{error}</p>}
          {!loading && !error && data.length === 0 && (
            <p>No existen historias clínicas</p>
          )}

          {!loading && !error && data.length > 0 && (
            <Table columns={columns} data={data} onRowClick={handleRowClick} />
          )}
        </Card>
      </div>
    </ContentLayout>
  );
};

export default HceListPage;