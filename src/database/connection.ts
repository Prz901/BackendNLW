import knex from 'knex'
// library que vem por padrao no node
import path from 'path'

const connection = knex({
    client:'sqlite3',
    connection:{
        // path.resolve(): funçao ela une os caminhos entre as pastas conforme o sistema operacional
        filename: path.resolve(__dirname,'..','database.sqlite'),
    },
    useNullAsDefault:true
})

export default connection


