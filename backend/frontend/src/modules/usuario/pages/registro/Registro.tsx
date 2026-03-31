import "./registro.css";
import { Input, Button } from "@/shared/components";
import { AuthLayout } from "@/shared/layouts";

export const Registro = () => {
  return (
    <AuthLayout>
      <div className="registro-container">
        <h2>Crear cuenta</h2>

        <form className="registro-form">
          <Input
            label="Nombre completo"
            placeholder="Nombre completo"
          />

          <Input
            label="Correo electrónico"
            placeholder="Correo electrónico"
          />

          <Input
            label="Contraseña"
            placeholder="Contraseña"
          />

          <Button label="Registrarse" />
        </form>
      </div>
    </AuthLayout>
  );
};