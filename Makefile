.PHONY: build up down logs

build:
	docker-compose build

up:
	docker-compose up

down:
	docker-compose down

logs:
	docker-compose logs -f

attach:
	docker-compose exec web bash
