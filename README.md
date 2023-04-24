# edge-repro

See [`repro.test.js`](./repro.test.js)

```
$ npm install
$ npm test

> test
> jest

 FAIL  ./repro.test.js
  ✕ UUID should be a 36-character string (2 ms)

  ● UUID should be a 36-character string

    expect(received).toHaveLength(expected)

    Expected length: 36
    Received length: 35
    Received string: "2756be6d-fc54-4152-a69358cc934a7c37"

       7 | test("UUID should be a 36-character string", () => {
       8 |   const edgeVmGeneratedUuid = crypto.randomUUID();
    >  9 |   expect(edgeVmGeneratedUuid).toHaveLength(VALID_UUID_V4.length);
         |                               ^
      10 | });
      11 |

      at Object.toHaveLength (repro.test.js:9:31)

Test Suites: 1 failed, 1 total
Tests:       1 failed, 1 total
Snapshots:   0 total
Time:        0.19 s, estimated 1 s
Ran all test suites.
```
