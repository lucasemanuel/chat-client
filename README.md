# frontend

## Install <a name = "install"></a>

Instalar Dependências
```
yarn install
```

Fazer cópia do arquivo `.env.example` e nomear de `.env`
```
cp .env.local.example .env.local
```

Configurar variáveis pusher para o real-time
```
VUE_APP_API_URL=[Url da Api (exemplo: http://localhost:8000/api)]
VUE_APP_BROADCAST_URL=[Ip do Websocket (exemplo: http://localhost:8000)]
VUE_APP_WS_HOST=[Host do websocket (exemplo: localhost)]
VUE_APP_PUSHER_KEY=[Key definida no servidor]
```

Iniciar o App
```
yarn serve
```