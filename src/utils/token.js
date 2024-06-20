const extractTokenFromHeaders = (req) => {
  const [type, token] = req.headers.authorization?.split(' ') ?? [];
  return type === 'Bearer' ? token : undefined;
};

module.exports = { extractTokenFromHeaders };
