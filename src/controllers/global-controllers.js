import { animacoes } from "./animacoes-controller.js";
import { AssinaturasController } from "./assinaturas-controller.js";
import {series} from './series-controller.js'
import {bdd} from '../infra/bdSQLite-animacoes.js'
import {bdS} from '../infra/bdSQLite-series.js'
import {bdA} from '../infra/bdSQLite-assinaturas.js'


class GlobalController{
  animacao(app){
    animacoes(app,bdd)
  }
  serie(app){
    series(app, bdS)
  }
  assinatura(app){
    AssinaturasController(app, bdA)
  }
}

export default GlobalController