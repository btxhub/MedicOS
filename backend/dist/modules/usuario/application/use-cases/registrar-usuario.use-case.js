"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RegistrarUsuarioUseCase = void 0;
class RegistrarUsuarioUseCase {
    usuarioFactory;
    registroUsuarioPort;
    constructor(usuarioFactory, registroUsuarioPort) {
        this.usuarioFactory = usuarioFactory;
        this.registroUsuarioPort = registroUsuarioPort;
    }
    ejecutar(command) {
        const usuario = this.usuarioFactory.crear(command.usuario);
        return this.registroUsuarioPort.ejecutar(usuario);
    }
}
exports.RegistrarUsuarioUseCase = RegistrarUsuarioUseCase;
//# sourceMappingURL=registrar-usuario.use-case.js.map