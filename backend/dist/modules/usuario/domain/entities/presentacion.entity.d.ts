export interface Presentacion {
    idPresentacion: string;
    refUserPresentacion: string;
    nombresPresentacion: string;
    apellidosPresentacion: string;
    avatarUrlPresentacion?: string | null;
    bioPresentacion?: string | null;
    createdPresentacion: Date;
    updatedPresentacion: Date;
}
