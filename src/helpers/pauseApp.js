import { success } from '../config/chalk.config.js';
import readline from '../config/readline.config.js';
const pause = () =>
  new Promise((resolve) => {
    const rl = readline();
    rl.question(`\nPresione ${success('ENTER')} para continuar \n`, () => {
      rl.close();
      resolve();
    });
  });

export default pause;
