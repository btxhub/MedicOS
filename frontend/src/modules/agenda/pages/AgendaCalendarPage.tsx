// ARCHIVO: src/modules/agenda/pages/AgendaCalendarPage.tsx

import { ContentLayout } from '@/shared/layouts/ContentLayout';
import { Card } from '@/shared/components';
import './agenda-calendar.css';

export const AgendaCalendarPage = () => {
  return (
    <ContentLayout>
      <div className="agenda-calendar-container">
        <h1 className="agenda-calendar-title">Agenda</h1>

        <div className="agenda-calendar-grid">
          <Card>
            <div className="agenda-calendar-card">
              <p className="agenda-calendar-date">Lunes</p>
              <p className="agenda-calendar-event">Sin citas</p>
            </div>
          </Card>
        </div>
      </div>
    </ContentLayout>
  );
};