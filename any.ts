function returnAny(message: any): any {
  
  console.log(message);
}


const any1 = returnAny("리턴은 아무거나");

console.log(any1);

// any 전파 예제
// let looselyTyped: any = {};
// let d = looselyTyped.a.b.c.d;
// console.log(d); 

function leakingAny(obj: any){
  const a = obj.num;
  // 중간에 any를 타입을 재정의
  // const a: number = obj.num;
  const b = a + 1;
  return b;
}

const c = leakingAny({num: 0});
console.log(c);
c.indexOf("0");
console.log(d1);
