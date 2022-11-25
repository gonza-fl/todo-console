import { error, success, warning } from './chalk.config.js';

const log = (message) => console.log(message);
log.clear = () => console.clear();
log.error = (message) => console.log(error(message));
log.success = (message) => console.log(success(message));
log.warning = (message) => console.log(warning(message));

export default log;
