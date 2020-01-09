import jwt from "jsonwebtoken";

interface Token {
  validToken: Function;
}

export default (function(): Token {
  function validToken(): void {}
  return {
    validToken
  };
})();
