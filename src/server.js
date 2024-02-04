import http from 'node:http'

/*
  - HTTP
    - Método HTTP:
      GET => buscar um recurso no back-end
      POST => criar um recurso no back-end
      PUT => Editar ou atualizar um recurso no back-end
      PATCH => Atualizar uma informação ÚNICA ou ESPECÍFICA de um recurso no back-end
      DELETE => Deletar um recurso do back-end

    - URL

  GET /users => Buscar usuários no back-end
  POST /users => Criar um usuário no back-end
*/

// Stateful - Stateless

// JSON - JavaScript Object Notation

// Cabeçalhos (Requisição/Resposta) => Metadados

const users = []

const server = http.createServer((req, res) => {
  const { method, url } = req

  if (method === 'GET' && url === '/users') {
    // Early return
    return res
      .setHeader('Content-type', 'application/json')
      .end(JSON.stringify(users))
  }

  if (method === 'POST' & url === '/users') {
    users.push({
      id: 1,
      name: 'John Doe',
      email: 'johndoe@example.com'
    })

    return res.end('Criação de usuário')
  }

  return res.end('Hello World')
})

server.listen(3333)
