import _ from 'readline';
const Readline = () => _.createInterface({
  input: process.stdin,
  output: process.stdout,
});
export default Readline;
