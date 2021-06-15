function error(message: string): never {
    throw new Error(message);

}

function fail(){
  return error('failed');
}

// 무한 루프
function infiniteLoop(): never {
  while(true){

  }
}

// const a2: string = 'hello';

declare const a2: string | number;
// never를 이용해서 잘못된 타입을 넣지 않는 방법
if (typeof a2 !== 'string'){
  a2; // numver
  if (typeof a2 !== 'number'){
    a2; // never
  }
}

type Indexable<T> = T extends string ? T & {[index: string]: any} : never;

type ObjectIndexable = Indexable<'aa'>;

type ObjectIndexable2 = Indexable<{}>;