import log from '../config/loger.config.js';

export default (title) => {
  const symbol = '=';
  const decoratorSize = 25;
  const decorator = symbol.repeat(decoratorSize);
  log(`${decorator}\n ${title} \n${decorator}`);
};
