import OpenAI from "openai";
import { OPENAI_KEY } from "./Constant";

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY, // This is the default and can be omitted
  dangerouslyAllowBrowser: true,
});

export default openai;
