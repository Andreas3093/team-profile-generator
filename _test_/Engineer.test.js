const Engineer = require("../lib/Engineer");

it("must instantiate Engineer Object", () => {
  const e = new Engineer();
  expect(typeof(e)).toBe("object");
});

it("able to pass the arguments via constructor", () => {
  const e = new Engineer(1, "name", "testdata@testdata.com","testhub");
  expect(e.id).toBe(1);
});

it("able to recieve github name of engineer from getGitHub()", () => {
    const testData = "testhub";
    const e = new Engineer(1, "name", "testdata@testdata.com","testhub");
    expect(e.getGitHub()).toBe(testData);
  });
  

it("must see \"Engineer\" as return from getRole()", () => {
  const testData = "Engineer";
  const e = new Engineer(1,"andreas", "testdata@testdata.com","testhub");
  expect(e.getRole()).toBe(testData);
});