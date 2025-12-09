# setup: setup-env setup-volta setup-pnpm setup-playwright setup-lefthook
setup: setup-env setup-volta setup-pnpm setup-lefthook setup-better-auth

setup-env: ./apps/app/.env ./apps/mock/.env ./packages/shared/config-kubb/.env

setup-volta: volta-setup volta-install

setup-pnpm:
	pnpm install

setup-playwright:
	cd apps/storybook && pnpm exec playwright install --with-deps && cd ../..

setup-lefthook:
	pnpm exec lefthook install

setup-better-auth:
	pnpm --filter=mock db:migrate

./apps/app/.env: ./apps/app/.env.example
	@if [ ! -f $@ ]; then \
		cp ./apps/app/.env.example $@; \
		echo "$@ を作成しました"; \
	elif [ ./apps/app/.env.example -nt $@ ]; then \
		timestamp=$$(date +%Y%m%d-%H%M); \
		mv $@ $@.$$timestamp; \
		cp ./apps/app/.env.example $@; \
		echo "$@ が古いため、$@.$$timestamp にバックアップし、新しい $@ を作成しました"; \
	fi

./apps/mock/.env: ./apps/mock/.env.example
	@if [ ! -f $@ ]; then \
		cp ./apps/mock/.env.example $@; \
		echo "$@ を作成しました"; \
	elif [ ./apps/mock/.env.example -nt $@ ]; then \
		timestamp=$$(date +%Y%m%d-%H%M); \
		mv $@ $@.$$timestamp; \
		cp ./apps/mock/.env.example $@; \
		echo "$@ が古いため、$@.$$timestamp にバックアップし、新しい $@ を作成しました"; \
	fi

./packages/shared/config-kubb/.env: ./packages/shared/config-kubb/.env.example
	@if [ ! -f $@ ]; then \
		cp ./packages/shared/config-kubb/.env.example $@; \
		echo "$@ を作成しました"; \
	elif [ ./packages/shared/config-kubb/.env.example -nt $@ ]; then \
		timestamp=$$(date +%Y%m%d-%H%M); \
		mv $@ $@.$$timestamp; \
		cp ./packages/shared/config-kubb/.env.example $@; \
		echo "$@ が古いため、$@.$$timestamp にバックアップし、新しい $@ を作成しました"; \
	fi

# Volta について
volta-setup:
	@if ! command -v volta >/dev/null 2>&1; then \
		if command -v brew >/dev/null 2>&1; then \
			brew install volta; \
		else \
			curl https://get.volta.sh | bash; \
		fi; \
		volta setup; \
		echo "volta をインストールしました"; \
	else \
		echo "volta は既にインストールされています"; \
	fi

volta-install: volta-install-node volta-install-corepack

volta-install-node:
	volta install node@22.21.1

volta-install-corepack:
	volta install corepack

	corepack enable
	corepack enable pnpm
