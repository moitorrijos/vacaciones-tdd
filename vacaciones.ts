export function vacaciones(tiempoPedido: number, tiempoDisponible: number[]): number[] {
  let tiempoRestante = tiempoPedido;
  let tiempoDisponibleActual = tiempoDisponible;
  let tiempoTomado = [] as number[];
  for (let i = 0; i < tiempoDisponibleActual.length; i++) {
    tiempoDisponibleActual[i] = tiempoDisponibleActual[i] - Math.abs(tiempoRestante);
    if (tiempoDisponibleActual[i] >= Math.abs(tiempoRestante)) {
      tiempoRestante = 0;
    } else {
      tiempoRestante = tiempoDisponibleActual[i];
    }
    if (tiempoDisponibleActual[i] < 0) {
      tiempoDisponibleActual[i] = 0;
    }
    tiempoTomado.push(tiempoDisponibleActual[i]);
  }
  return tiempoTomado;
}