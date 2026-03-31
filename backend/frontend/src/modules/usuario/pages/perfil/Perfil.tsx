import "./perfil.css";
import { Input, Button } from "@/shared/components";
import { ContentLayout } from "@/shared/layouts";

export const Perfil = () => {
  return (
    <ContentLayout>
      <div className="perfil-container">
        <h2>Perfil</h2>

        <form className="perfil-form">
          <Input
            label="Nombre completo"
            placeholder="Nombre completo"
          />

          <Input
            label="Correo electrónico"
            placeholder="Correo electrónico"
          />

          <Input
            label="Teléfono"
            placeholder="Teléfono"
          />

          <Button label="Guardar cambios" />
        </form>
      </div>
    </ContentLayout>
  );
};