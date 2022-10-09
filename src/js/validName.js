export default class Validator {
  static validateUsername(name) {
    return (
      /^[a-z]+[\w-]*[^\d_-]$/i.test(name) && (!(/\d{4,}/.test(name)))
    );
  }
}
