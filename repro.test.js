/**
 * @jest-environment @edge-runtime/jest-environment
 */

const VALID_UUID_V4 = "621b5910-f278-4500-b3c2-34ae22fdf89b";

test("UUID should be a 36-character string", () => {
  const edgeVmGeneratedUuid = crypto.randomUUID();
  expect(edgeVmGeneratedUuid).toHaveLength(VALID_UUID_V4.length);
});
