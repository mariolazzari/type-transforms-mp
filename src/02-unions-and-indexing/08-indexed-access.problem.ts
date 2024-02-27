import { Equal, Expect } from "../helpers/type-utils";

export const fakeDataDefaults = {
  String: "Default string",
  Int: 1,
  Float: 1.14,
  Boolean: true,
  ID: "id",
};

type FakeDataDefault = typeof fakeDataDefaults;

export type StringType = FakeDataDefault["String"];
export type IntType = FakeDataDefault["Int"];
export type FloatType = FakeDataDefault["Float"];
export type BooleanType = FakeDataDefault["Boolean"];
export type IDType = FakeDataDefault["ID"];

type tests = [
  Expect<Equal<StringType, string>>,
  Expect<Equal<IntType, number>>,
  Expect<Equal<FloatType, number>>,
  Expect<Equal<BooleanType, boolean>>,
  Expect<Equal<IDType, string>>
];
