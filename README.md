# Postgres

В корневой папке должен лежать .env файл в следующем виде:

```
POSTGRES_DB=*название БД*
POSTGRES_USER=*юзер для входа в БД*
POSTGRES_PASSWORD=*пароль для входа в БД*
POSTGRES_PORT=5432
POSTGRES_HOST=localhost
```

## Запуск конейнера

```
docker-compose up -d postgres
```
