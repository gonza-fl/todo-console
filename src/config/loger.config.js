import { error, success, warning } from './chalk.config.js';

const log = (message) => console.log(message);
log.clear = () => console.clear();
log.error = (message) => log(error(message));
log.header = (title) => {
  const symbol = '=';
  const decoratorSize = 25;
  const decorator = symbol.repeat(decoratorSize);
  log(`${decorator}\n ${title} \n${decorator}`);
};
log.success = (message) => log(success(message));
log.warning = (message) => log(warning(message));

export default log;
