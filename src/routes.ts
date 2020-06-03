import express from 'express' 
import PointsController from './controllers/PointsController'
import ItemsController from './controllers/ItemsController'


const routes = express.Router()
const pointsController = new PointsController()
const itemsController = new ItemsController()

routes.get('/items', itemsController.index)

routes.post('/points', pointsController.create)
routes.get('/points', pointsController.index)
routes.get('/points/:id', pointsController.show)

export default routes

// Rota: Endereço completo da requisição
// Recurso: Qual entidade estamos acessando do sistema

//Request Param: Paramentros que vem na própria rota que identificam um recurso
//Query Param: Parâmetros que vem na própria rota geralmente opcionais para filtros, paginação
//Request Body: Parâmetros para criação e atualização de informações