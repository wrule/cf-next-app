import { getRequestContext } from '@cloudflare/next-on-pages';

export const runtime = "edge";

const state: any = { };

function getNum() {
  return (state.num ?? 0) as number;
}

function setNum(num: number) {
  state.num = num;
}

export default
async function About() {
  const env: CloudflareEnv | any = getRequestContext().env;
  const kv = env.jimao;
  return <div>你好，世界：{await kv.get("count")}</div>;
}
