.PHONY: build ci deps doc fmt fmt-check lock test typedoc

build:
	@deno run --lock=lock.json --reload mod.ts

ci:
	@make fmt-check
	@make build
	@make test

deps:
	@npm install -g typescript typedoc

doc:
	@deno doc ./mod.ts

fmt:
	@deno fmt

fmt-check:
	@deno fmt --check

lock:
	@deno run --lock=lock.json --lock-write --reload mod.ts

test:
	@deno test ./test/

typedoc:
	@rm -rf docs
	@typedoc --ignoreCompilerErrors --out ./docs --mode modules --includeDeclarations --excludeExternals --name moxy ./src
	@make fmt
	@make fmt
	@echo 'future: true\nencoding: "UTF-8"\ninclude:\n  - "_*_.html"\n  - "_*_.*.html"' > ./docs/_config.yaml
