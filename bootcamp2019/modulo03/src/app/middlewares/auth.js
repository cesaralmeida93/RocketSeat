import jwt from 'jsonwebtoken';
import authConfig from '../../config/auth';
import { promissify } from 'util';

export default (req, res, next) => {
  const authHeader = req.headers.authorization;

  if (!authHeader) {
    return res.status(401).json({ error: "token not provided" });
  }

  const [, token] = authHeader.split(' ');

  jwt.verify(token, authConfig.secret, (err, decoded) => {
    if (err) return res.status(401).send({ error: "Token Invalid" });
    
    req.userId = decoded.id;

    console.log(decoded);
    console.log(req.userId);
    return next();

  });

    // req.userId = decoded.id;

    // console.log(decoded);
    // console.log(req.userId);


    // return next();

    // return res.status(401).json({ error: "Token invalid" });
};