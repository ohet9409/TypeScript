declare const maybe: unknown;

// unknown은 number에 바로 할당할 수 없다.
// const aNumber: number = maybe;

if (maybe === true){
  const aBoolean: boolean = maybe;
 
// boolean 값으로 정의되었기 때문에 에러 발생
  // const aString: string = maybe;
}

if (typeof maybe === 'string') {
  const aString: string = maybe;

  // const aBoolean: boolean = maybe;
}