import log from './config/loger.config.js';
import { showMenu } from './helpers/messages.js';
import pause from './helpers/pauseApp.js';

const main = async () => {
  const fin = '0';
  let opt = '';
  do {
    log.clear();
    opt = await showMenu(opt);
    (opt !== '0') && await pause();
  } while (opt !== fin);
};

main();
