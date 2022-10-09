import Validator from '../js/validName';

test.each([
  ['Sergio3-super_S', true],
  ['1234567', false],
  ['mark123__G', true],
  ['_Max_', false],
  ['-max-', false],
  ['1Player', false]])('validating user name with %s nickname', (name, expected) => {
  expect(Validator.validateUsername(name)).toBe(expected);
});
