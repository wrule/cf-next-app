import { getRequestContext } from '@cloudflare/next-on-pages';

export const runtime = 'edge';

export default
async function About() {
  const env: CloudflareEnv | any = getRequestContext().env;
  const kv = env.jimao;

  async function getCount() {
    try {
      const stateText = await kv.get('state');
      return JSON.parse(stateText).num ?? 0;
    } catch (error) {
      console.error(error);
    }
    return 0;
  }

  async function setCount(num: number) {
    await kv.put('state', JSON.stringify({ num }));
  }

  await setCount(await getCount() + 1);

  return <div>你好，世界：{await getCount()}</div>;
}
