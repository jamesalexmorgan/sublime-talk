const CHARS_TO_ESCAPE_REGEX = /([.\\+*?[^\]$(){}=!<>|:-])/g;

export const convertSolutionToRegex = (solutionText: string): string => {
  const regex = solutionText.replace(CHARS_TO_ESCAPE_REGEX, '\\$1').replace(/[\n\s]+/g, '\\s*');
  return regex;
};

const checkSolved = (val: string, solutionText?: string, solutionRegex?: RegExp): boolean => {
  if (solutionRegex) {
    return solutionRegex.test(val);
  }

  if (solutionText) {
    const regexString = convertSolutionToRegex(solutionText);
    return new RegExp(regexString).test(val);
  }

  return false;
};

export default checkSolved;
