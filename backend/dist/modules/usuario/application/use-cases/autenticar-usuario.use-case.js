"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AutenticarUsuarioUseCase = void 0;
class AutenticarUsuarioUseCase {
    accesoFactory;
    accesoUsuarioPort;
    constructor(accesoFactory, accesoUsuarioPort) {
        this.accesoFactory = accesoFactory;
        this.accesoUsuarioPort = accesoUsuarioPort;
    }
    ejecutar(command) {
        const acceso = this.accesoFactory.crear(command.credenciales);
        return this.accesoUsuarioPort.ejecutar(acceso);
    }
}
exports.AutenticarUsuarioUseCase = AutenticarUsuarioUseCase;
//# sourceMappingURL=autenticar-usuario.use-case.js.map