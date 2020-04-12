import axios from 'axios';

const api = axios.create({
  baseURL: "http://localhost:3333",
});

export default api;

/**
 * iOS com Emulador: localhost
 * iOS com físico: IP da máquina
 *
 * Android com Emulador:
 *  - localhost (adb reverse tcp:PORTA_DO_SERVIDOR tcp:PORTA_DO_SERVIDOR)
 *  - AVD (10.0.2.2)
 *  - Genymotion (10.0.3.2)
 * Android com físico: IP da máquina
 */