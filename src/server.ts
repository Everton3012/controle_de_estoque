import express, {Request, Response, NextFunction, response} from "express";
import "express-async-errors";
import { router } from "./routes";
import cors from "cors";
import path from "path";
import swaggerDocument from "../swagger.json"
import swaggerUi from "swagger-ui-express";

const app = express();
const port = 3333;
app.use(express.json());
app.use(cors());
app.use("/v1",router);
app.use("/api-docs",swaggerUi.serve,swaggerUi.setup(swaggerDocument));
app.use("/files",express.static(path.resolve(__dirname, "..","tmp")));

app.use((err: Error, req:Request, res: Response, next: NextFunction ) => {
    if (err instanceof Error) {
        return res.status(400).json({
            error: err.message,
        });
    }
    return res.status(500).json({
        status: 'error',
        message: 'Internal server error.'
    })
})

app.get("/items", (req: Request,res: Response) => {
    return res.json({
        message: "Termos de serviço"
    })
});

app.listen(port, () => {
    console.log("Servidor rodando na porta 3333 - Projeto Controle de Estoque")
})