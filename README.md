## Postgres
В корневой папке должен лежать .env файл в следующем виде:
```
POSTGRES_DB=*название бд*
POSTGRES_USER=*юзер для входа в бд*
POSTGRES_PASSWORD=*пароль для входа в бд*
POSTGRES_PORT=5432
```
# Запуск конейнера
```
docker-compose up -d postgres
```
