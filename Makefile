include .env

CONTAINER=form-test-api

# - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
# Container Commands
# - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -

build:
	make down
	docker-compose build --no-cache
	docker-compose up --no-build -d
	make npm-install

up:
	docker-compose up --no-build -d

down:
	docker-compose down || true

# - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
# Node
# - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -

npm-install:
	docker exec $(CONTAINER) npm install

# - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
# Artisan Commands
# - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -

migrate:
	docker exec $(CONTAINER) npm run migrate

