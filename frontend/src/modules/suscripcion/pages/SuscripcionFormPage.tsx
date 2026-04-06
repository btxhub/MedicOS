import { ContentLayout } from '../../../shared/layouts/ContentLayout';
import './suscripcion-form.css';

export default function SuscripcionFormPage() {
  return (
    <ContentLayout>
      <section className="suscripcion-form">
        <header className="suscripcion-form__header">
          <div>
            <p className="suscripcion-form__eyebrow">SUSCRIPCIÓN</p>
            <h1 className="suscripcion-form__title">Crear / Editar suscripción</h1>
            <p className="suscripcion-form__subtitle">
              Registro y modificación de suscripciones.
            </p>
          </div>
        </header>

        <div className="suscripcion-form__card">
          <form className="suscripcion-form__form">
            <div className="suscripcion-form__group">
              <label>Médico</label>
              <input type="text" placeholder="Nombre del médico" />
            </div>

            <div className="suscripcion-form__group">
              <label>Plan</label>
              <select>
                <option>Seleccionar plan</option>
                <option>Plan Básico</option>
                <option>Plan Profesional</option>
                <option>Plan Premium</option>
              </select>
            </div>

            <div className="suscripcion-form__group">
              <label>Fecha inicio</label>
              <input type="date" />
            </div>

            <div className="suscripcion-form__group">
              <label>Fecha fin</label>
              <input type="date" />
            </div>

            <div className="suscripcion-form__group">
              <label>Estado</label>
              <select>
                <option>Activa</option>
                <option>Pendiente</option>
                <option>Vencida</option>
                <option>Suspendida</option>
              </select>
            </div>

            <div className="suscripcion-form__actions">
              <button type="button" className="suscripcion-form__btn secondary">
                Cancelar
              </button>
              <button type="submit" className="suscripcion-form__btn primary">
                Guardar
              </button>
            </div>
          </form>
        </div>
      </section>
    </ContentLayout>
  );
}