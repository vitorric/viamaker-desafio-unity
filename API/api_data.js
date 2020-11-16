define({ "api": [
  {
    "type": "post",
    "url": "/api/listar/alunos/turma",
    "title": "Listar Alunos",
    "description": "<p>Retorna uma lista dos alunos de uma determinada turma</p>",
    "name": "ListarAlunosTurma",
    "group": "API",
    "version": "1.0.0",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "turmaId",
            "description": ""
          }
        ]
      }
    },
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "optional": false,
            "field": "Authorization",
            "description": "<p>Basic Access Authentication token.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Header-Example:",
          "content": "{\n  content-type: 'application/json',\n   Authorization : \"Bearer token\"\n}",
          "type": "json"
        }
      ]
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "sucesso",
            "description": "<p><code>Boolean</code></p>"
          },
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "retorno",
            "description": "<p>Dados do user</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n {\n      \"sucesso\": true,\n      \"retorno\": [\n         {\n             \"id\": 1,\n             \"nome\": \"Turma 1 - Aluno 1\"\n         },\n         {\n             \"id\": 2,\n             \"nome\": \"Turma 1 - Aluno 2\"\n         },\n         {\n             \"id\": 3,\n             \"nome\": \"Turma 1 - Aluno 3\"\n         }\n        ...\n     ]\n  }",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "type": "String",
            "optional": false,
            "field": "sucesso",
            "description": "<p><code>false</code></p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Dados invalido:",
          "content": "HTTP/1.1 401 OK\n{\n  Unauthorized\n}",
          "type": "json"
        }
      ]
    },
    "filename": "src/routes/api/listar-alunos-turma/index.js",
    "groupTitle": "API"
  },
  {
    "type": "get",
    "url": "/api/obter/escola",
    "title": "Obter Escola",
    "description": "<p>Retorna os dados da Escola e suas turmas</p>",
    "name": "ObterEscola",
    "group": "API",
    "version": "1.0.0",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "optional": false,
            "field": "Authorization",
            "description": "<p>Basic Access Authentication token.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Header-Example:",
          "content": "{\n  content-type: 'application/json',\n   Authorization : \"Bearer token\"\n}",
          "type": "json"
        }
      ]
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "sucesso",
            "description": "<p><code>Boolean</code></p>"
          },
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "retorno",
            "description": "<p>Dados do user</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n {\n      \"sucesso\": true,\n      \"retorno\": {\n          \"id\": 1,\n          \"nome\": \"Escola Viamaker\",\n          \"turmas\": [\n              {\n                  \"id\": 1,\n                  \"nome\": \"Turma 1\"\n              },\n              {\n                  \"id\": 2,\n                  \"nome\": \"Turma 2\"\n              },\n              ...\n          ]\n      }\n  }",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "type": "String",
            "optional": false,
            "field": "sucesso",
            "description": "<p><code>false</code></p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Dados invalido:",
          "content": "HTTP/1.1 401 OK\n{\n  Unauthorized\n}",
          "type": "json"
        }
      ]
    },
    "filename": "src/routes/api/obter-escola/index.js",
    "groupTitle": "API"
  }
] });
