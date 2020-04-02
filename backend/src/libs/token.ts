import * as jwt from "jsonwebtoken";

const token = (function() {
  const { TOKEN_SECRET } = process.env;

  async function encodeToken(id: string) {
    return await jwt.sign({ id }, TOKEN_SECRET!, { expiresIn: "7d" });
  }
  return {
    encodeToken
  };
})();

export default token;
