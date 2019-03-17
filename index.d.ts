/// <reference types="node" />
/** A raw http response object */
export interface RawResponse {
    /** HTTP status code, the status text will be inferred from it */
    status: number;
    /** The body of the HTTP message, can be a binary file too */
    body: Buffer;
    /** The headers of the message, like content type, content length or custom ones */
    headers: {
        [key: string]: string;
    };
}
export default buildHttpResponse;
/**
 * This function takes a {@link RawResponse} object and returns a {@link Buffer} containing an entire HTTP response message.
 */
declare function buildHttpResponse({ status, headers, body }: RawResponse): Buffer;
