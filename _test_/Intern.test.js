const Intern = require("../lib/Intern");

it("must instantiate Intern Object", () => {
  const e = new Intern();
  expect(typeof(e)).toBe("object");
});

it("able to pass the arguments via constructor", () => {
  const e = new Intern(1, "name", "testdata@testdata.com","UOFA");
  expect(e.id).toBe(1);
});

it("able to recieve school name of intern from getSchool()", () => {
    const testData = "UOFA";
    const e = new Intern(1, "name", "testdata@testdata.com","UOFA");
    expect(e.getSchool()).toBe(testData);
  });
  

it("must see \"Intern\" as return from getRole()", () => {
  const testData = "Intern";
  const e = new Intern(1,"subhash", "testdata@testdata.com","UOFA");
  expect(e.getRole()).toBe(testData);
});