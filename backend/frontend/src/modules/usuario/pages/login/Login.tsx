import "./login.css";
import { Input, Button } from "@/shared/components";
import { AuthLayout } from "@/shared/layouts";

export const Login = () => {
  return (
    <AuthLayout>
      <div className="login-container">
        <h2>Iniciar sesión</h2>

        <form className="login-form">
          <Input
            label="Correo electrónico"
            placeholder="Correo electrónico"
          />

          <Input
            label="Contraseña"
            placeholder="Contraseña"
          />

          <Button label="Ingresar" />
        </form>
      </div>
    </AuthLayout>
  );
};