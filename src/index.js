import  express  from "express";
import cors from'cors';
import GlobalController from "./controllers/global-controllers.js";


const port = process.env.PORT || 3000

const app = express();
const controller = new GlobalController()
app.use(cors())
app.use(express.json())

controller.animacao(app)
controller.serie(app)
controller.assinatura(app)

app.listen(port,()=>{
  console.log(`http://localhost:${port}`)
})

export default app