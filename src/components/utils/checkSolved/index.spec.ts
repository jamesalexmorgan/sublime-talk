import checkSolved, { convertSolutionToRegex } from '.';

const solutionText = `
const CONTINUE_ON_RETRIEVE = [
  { cond: 'isAppScreenStateCurrentAddress', target: SCREEN_STATES.CURRENT_ADDRESS },
  { cond: 'isAppScreenStateIdentityVerification', target: SCREEN_STATES.IDENTITY_VERIFICATION },
  { cond: 'isAppScreenStateEmployment', target: SCREEN_STATES.EMPLOYMENT },
];
  `;

describe('convertSolutionToRegex', () => {
  test('works with extra lines and spaces', () => {
    const result = convertSolutionToRegex(solutionText);
    expect(result).toEqual(
      `\\s*const\\s*CONTINUE_ON_RETRIEVE\\s*\\=\\s*\\[\\s*\\{\\s*cond\\:\\s*'isAppScreenStateCurrentAddress',\\s*target\\:\\s*SCREEN_STATES\\.CURRENT_ADDRESS\\s*\\},\\s*\\{\\s*cond\\:\\s*'isAppScreenStateIdentityVerification',\\s*target\\:\\s*SCREEN_STATES\\.IDENTITY_VERIFICATION\\s*\\},\\s*\\{\\s*cond\\:\\s*'isAppScreenStateEmployment',\\s*target\\:\\s*SCREEN_STATES\\.EMPLOYMENT\\s*\\},\\s*\\];\\s*`,
    );
  });
});

describe('checkSolved', () => {
  test('works with extra lines and spaces', () => {
    const userValue = `

      const CONTINUE_ON_RETRIEVE =         [
        {cond:'isAppScreenStateCurrentAddress',target:SCREEN_STATES.CURRENT_ADDRESS},
        { cond: 'isAppScreenStateIdentityVerification', target: SCREEN_STATES.IDENTITY_VERIFICATION },
        { cond: 'isAppScreenStateEmployment', target: SCREEN_STATES.EMPLOYMENT },
      ];
  `;

    const result = checkSolved(userValue, solutionText);
    expect(result).toBeTruthy();
  });
});
