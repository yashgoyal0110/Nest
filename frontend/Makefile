check-frontend: \
	format-frontend-code \
	lint-frontend-code

clean-frontend:
	@rm -rf frontend/.next
	@rm -rf frontend/.pnpm-store
	@rm -rf frontend/node_modules

exec-frontend-command:
	@docker exec -t nest-frontend $(CMD)

exec-frontend-command-it:
	@docker exec -it nest-frontend $(CMD)

format-frontend-code:
	@CMD="pnpm run format" $(MAKE) exec-frontend-command

lint-frontend-code:
	@CMD="pnpm run lint" $(MAKE) exec-frontend-command

shell-frontend:
	@CMD="/bin/sh" $(MAKE) exec-frontend-command-it

test-frontend: \
	test-frontend-unit \
	test-frontend-e2e

test-frontend-e2e:
	@DOCKER_BUILDKIT=1 docker build \
		--cache-from nest-test-frontend-e2e \
		-f frontend/docker/Dockerfile.e2e.test frontend \
		-t nest-test-frontend-e2e
	@docker run --env-file frontend/.env.example --rm nest-test-frontend-e2e pnpm run test:e2e

test-frontend-unit:
	@DOCKER_BUILDKIT=1 docker build \
		--cache-from nest-test-frontend-unit \
		-f frontend/docker/Dockerfile.unit.test frontend \
		-t nest-test-frontend-unit
	@docker run --env-file frontend/.env.example --rm nest-test-frontend-unit pnpm run test:unit

update-frontend-dependencies:
	@CMD="pnpm update" $(MAKE) exec-frontend-command-it
