/* exported getLastCharacter */
function getLastCharacter(string: string): string {
  const lastCharNum: number = string.length - 1;
  const lastCharResult: string = string[lastCharNum];
  return lastCharResult;
}
