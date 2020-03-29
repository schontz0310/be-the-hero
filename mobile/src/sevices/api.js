import axios from 'axios';

const api = axios.create({
  baseURL: 'http://192.168.0.5:3333'  // Conexa via Ip da maquina
  //baseURL: 'http://127.0.0.1:3333'    // conexão via local host 
  //baseURL: 'exp://192.168.0.5:19000'      // conexão via tunel expo
})

export default api;

