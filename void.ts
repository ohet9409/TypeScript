function returnVoid(message: string): void{
  console.log(message);
  return undefined;
}

// 에러발생 리턴이 없기 때문에
// const r: undefined = returnVoid('리턴이 없다.');