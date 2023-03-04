import { customAlphabet } from "nanoid";

const nanoid = customAlphabet("1234567890abcdef", 32);
export const getId = () => nanoid();
