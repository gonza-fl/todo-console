import log from './config/loger.config.js';
import { showMenu } from './helpers/messages.js';

const main = async () => {
  log.clear();
  showMenu()
};

main();
