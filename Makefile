.PHONY: ci fmt fmt-check test

ci:
	@make fmt-check
	@make test

fmt:
	@deno fmt

fmt-check:
	@deno fmt --check

test:
	@deno test ./test/ --allow-none
