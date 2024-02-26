import { Equal, Expect } from "../helpers/type-utils";

const getUser = () => {
  return Promise.resolve({
    id: "123",
    name: "John",
    email: "john@example.com",
  });
};

type ReturnValue = Awaited<ReturnType<typeof getUser>>;

type PromiseValue = ReturnType<typeof getUser>;
type GetUserType = Awaited<PromiseValue>;

type tests = [
  Expect<Equal<ReturnValue, { id: string; name: string; email: string }>>
];
