import express, { Application, Request, Response } from "express";
import cors from "cors";
import { productRoute } from "./app/modules/product/product.route";

const app: Application = express();
app.use(express.json());
app.use(express.text());
app.use(cors());
app.use("/api/products", productRoute);
app.get("/", (req: Request, res: Response) => {
  res.send("Ecommerce Backend Running");
});

export default app;
