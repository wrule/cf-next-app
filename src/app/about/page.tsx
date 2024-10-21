
const state: any = { };

function getNum() {
  return (state.num ?? 0) as number;
}

function setNum(num: number) {
  state.num = num;
}

export default
function About() {
  setNum(getNum() + 1);
  return <div>你好，世界：{getNum()}</div>;
}
