CREATE TABLE usuario (
  id SERIAL PRIMARY KEY,
  email VARCHAR(255) UNIQUE NOT NULL,
  password VARCHAR(255) NOT NULL,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE suscripcion (
  id SERIAL PRIMARY KEY,
  usuario_id INT NOT NULL,
  plan VARCHAR(100) NOT NULL,
  estado VARCHAR(50) NOT NULL,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  FOREIGN KEY (usuario_id) REFERENCES usuario(id)
);

CREATE TABLE pago_suscripcion (
  id SERIAL PRIMARY KEY,
  suscripcion_id INT NOT NULL,
  monto DECIMAL(10,2) NOT NULL,
  fecha TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  FOREIGN KEY (suscripcion_id) REFERENCES suscripcion(id)
);

CREATE TABLE publicidad (
  id SERIAL PRIMARY KEY,
  titulo VARCHAR(255),
  estado VARCHAR(50),
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE pago_publicidad (
  id SERIAL PRIMARY KEY,
  publicidad_id INT NOT NULL,
  monto DECIMAL(10,2),
  fecha TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  FOREIGN KEY (publicidad_id) REFERENCES publicidad(id)
);

CREATE TABLE log (
  id SERIAL PRIMARY KEY,
  accion TEXT,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE hce (
  id SERIAL PRIMARY KEY,
  paciente_id INT,
  usuario_id INT,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE adjunto (
  id SERIAL PRIMARY KEY,
  hce_id INT,
  url TEXT,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  FOREIGN KEY (hce_id) REFERENCES hce(id)
);

CREATE TABLE diagnostico (
  id SERIAL PRIMARY KEY,
  hce_id INT,
  descripcion TEXT,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  FOREIGN KEY (hce_id) REFERENCES hce(id)
);

CREATE TABLE evolucion (
  id SERIAL PRIMARY KEY,
  hce_id INT,
  descripcion TEXT,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  FOREIGN KEY (hce_id) REFERENCES hce(id)
);

CREATE TABLE receta (
  id SERIAL PRIMARY KEY,
  hce_id INT,
  descripcion TEXT,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  FOREIGN KEY (hce_id) REFERENCES hce(id)
);
CREATE TABLE "ORDEN_CLINICA" (
  "idOrden" SERIAL PRIMARY KEY,
  "idHce" INT NOT NULL,
  "idDoc" INT,
  "tipoOrden" VARCHAR(255),
  "prioridadOrden" VARCHAR(255),
  "indicacionClinica" TEXT,
  "createdOrden" TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  "updatedOrden" TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  FOREIGN KEY ("idHce") REFERENCES hce(id)
);
CREATE TABLE signos_vitales (
  id SERIAL PRIMARY KEY,
  hce_id INT,
  data JSONB,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  FOREIGN KEY (hce_id) REFERENCES hce(id)
);

CREATE TABLE tratamiento (
  id SERIAL PRIMARY KEY,
  hce_id INT,
  descripcion TEXT,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  FOREIGN KEY (hce_id) REFERENCES hce(id)
);