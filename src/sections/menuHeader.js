import { lightBlueArg, success, white } from '../config/chalk.config.js';
import log from '../config/loger.config.js';

export default (title) => {
  title = white(title)
  const symbol = '=';
  const decoratorSize = 25;
  const decorator = lightBlueArg(symbol.repeat(decoratorSize));
  log(`${decorator}\n ${title} \n${decorator}`);
};
