import { Request, Response, NextFunction } from "express";
import { verify } from "jsonwebtoken"
import { Payload } from "../models/interfaces/auth/Payload";

export function isAutenticated (
    req: Request,
    res: Response,
    next: NextFunction
) {
    // acessando token JWT
    const authToken = req.headers.authorization;

    if (!authToken) {
        return res.status(401).end()
    }

    const [, token] = authToken.split(" ");

    try{
        //Validar token
        const { sub }: Payload = verify(token, process.env.JWT_SECRET) as Payload
        req.user_id = sub;
        return next() //Deixa que a requisição prossiga
    }catch (error){
        return res.send(401).end()
    }
}