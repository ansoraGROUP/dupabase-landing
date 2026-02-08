.DEFAULT_GOAL := help
SHELL := /bin/bash

DOCKER_COMPOSE_LOCAL := .deploy/local/docker-compose.yaml
DOCKER_COMPOSE_PROD := .deploy/prod/docker-compose.yaml

DOCKER_ENV ?= local
DOCKER_COMPOSE := docker compose -f $(DOCKER_COMPOSE_LOCAL)

ifeq ($(DOCKER_ENV), prod)
	DOCKER_COMPOSE := docker compose -f $(DOCKER_COMPOSE_PROD)
endif

CONTAINER := dupabase-landing

help: ## Show this help
	@echo "Environment: $(DOCKER_ENV)"
	@echo ""
	@awk 'BEGIN {FS = ":.*##"} /^[a-zA-Z_0-9-]+:.*?##/ { printf "  \033[36m%-15s\033[0m %s\n", $$1, $$2 }' $(MAKEFILE_LIST)

##@ Docker Operations
init: ## Initialize project (first run)
	docker network create ansora_network || true
	make update

update: ## Rebuild and restart containers
	make down
	$(DOCKER_COMPOSE) up -d --build

up: ## Start containers
	$(DOCKER_COMPOSE) up -d

down: ## Stop and remove containers
	$(DOCKER_COMPOSE) down

stop: ## Stop containers
	$(DOCKER_COMPOSE) stop

restart: ## Restart containers
	make stop
	make up

logs: ## View container logs
	$(DOCKER_COMPOSE) logs -f

shell: ## Shell into main container
	$(DOCKER_COMPOSE) exec $(CONTAINER) sh

ps: ## Show container status
	docker ps -a --format "table {{.Names}}\t{{.Status}}\t{{.Ports}}" | grep $(CONTAINER) || true

##@ Build Operations
build: ## Build images without starting
	$(DOCKER_COMPOSE) build

pull: ## Pull latest images
	$(DOCKER_COMPOSE) pull

.PHONY: help init update up down stop restart logs shell ps build pull
