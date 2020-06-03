import path from 'path'

module.exports = {
    client:'sqlite3',
    connection:{
        // path.resolve(): funçao ela une os caminhos entre as pastas conforme o sistema operacional
        filename: path.resolve(__dirname,'src','database.sqlite'),
    },
    migrations:{
        directory: path.resolve(__dirname,'src', 'database','migrations')
    },
    seeds:{
        directory: path.resolve(__dirname,'src', 'database','seeds')
    },
    useNullAsDefault:true
}