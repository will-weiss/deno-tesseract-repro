# deno-tesseract-repro

```shell
$ deno --version
deno 2.2.6 (stable, release, aarch64-apple-darwin)
v8 13.5.212.4-rusty
typescript 5.7.3

$ deno task test
Task test deno test -A test.ts
running 1 test from ./test.ts
tesseract ...
  works ...
------- output -------
error: unexpected argument '--debug-port' found

  tip: to pass '--debug-port' as a value, use '-- --debug-port'

Usage: deno run [OPTIONS] [SCRIPT_ARG]...

----- output end -----

ok | 0 passed | 0 failed (15ms)

error: Promise resolution is still pending but the event loop has already resolved
```
