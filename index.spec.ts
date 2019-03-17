import buildHttpResponse from "./index";

test("builds an empty http response", () => {
  const response = buildHttpResponse({
    status: 200,
    headers: { "X-My-Header": "Hello world!" },
    body: Buffer.from("")
  }).toString("utf8");

  expect(response).toMatchSnapshot();
});

test("builds a simple string response", () => {
  const response = buildHttpResponse({
    status: 500,
    headers: { "Content-Type": "text/plain" },
    body: Buffer.from("Internal Server Error or whatevers!")
  }).toString("utf8");

  expect(response).toMatchSnapshot()
});
