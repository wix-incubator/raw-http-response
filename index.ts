import { STATUS_CODES } from "statuses";

/** A raw http response object */
export interface RawResponse {
  /** HTTP status code, the status text will be inferred from it */
  status: number;

  /** The body of the HTTP message, can be a binary file too */
  body: Buffer;

  /** The headers of the message, like content type, content length or custom ones */
  headers: { [key: string]: string };
}

export default buildHttpResponse;

/**
 * This function takes a {@link RawResponse} object and returns a {@link Buffer} containing an entire HTTP response message.
 */
function buildHttpResponse({ status, headers, body }: RawResponse) {
  const header = `HTTP/1.1 ${status} ${STATUS_CODES[status]}`;
  const headersString = Object.entries(headers)
    .map(([k, v]) => `${k}: ${v}`)
    .join("\n");
  const head = Buffer.from([header, headersString, "\n"].join("\n"));
  return Buffer.concat([head, body]);
}
