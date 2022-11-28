import readline from '../config/readline.config.js';
import { yellowArg } from '../config/chalk.config.js';
import log from '../config/loger.config.js';

export default () => new Promise (resolve => {
  const rl = readline()
  log(`${yellowArg('1')}. Crear tarea`);
  log(`${yellowArg('2')}. Listar todas`);
  log(`${yellowArg('3')}. Tareas completadas`);
  log(`${yellowArg('4')}. Tareas pendientes`);
  log(`${yellowArg('5')}. Completar tarea(s)`);
  log(`${yellowArg('6')}. Borrar tarea`);
  log(`${yellowArg('0')}. Salir\n`);

  rl.question('Seleccione una opción: ', (opt) => {
    rl.close();
    resolve(opt)
  });
});
