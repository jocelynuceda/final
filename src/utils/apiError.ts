import { isAxiosError } from "axios";

export function getErrorMessage(err: unknown): string {
  if (isAxiosError(err)) {
    if (!err.response) {
      return "No se puede conectar con el servidor.";
    }

    const apiMessage = err.response.data?.error;

    if (apiMessage) {
      return apiMessage;
    }

    if (err.response.status === 403) {
      return "Debes iniciar sesion para hacer esto.";
    }

    return `Error ${err.response.status}`;
  }
  return "Ocurrio un error inesperado.";
}
