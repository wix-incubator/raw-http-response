# `raw-http-response`

A small package that generates a raw HTTP response from an object

## Usage

The function takes a [`RawResponse`](./index.ts) object and returns a Node `Buffer`, that can be later simply stringified or base64'd, to work with binary data.

```ts
import buildHttpResponse from 'raw-http-response';

const buffer = buildHttpResponse({
  status: 200,
  headers: { "Content-Type": "application/json" },
  body: Buffer.from(
    JSON.stringify({ hello: "world" })
  )
});
```
