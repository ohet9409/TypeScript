// 권장
let list: number[] = [1,2,3];
console.log(list.toString);
console.log(list)
// 사용 자제
let list2: Array<number> = [1,2,3];
console.log(list2.toString);
console.log(list2)

// number, string 타입을 모두 선언
let list3: (number | string)[] = [1,2,3,"4"];
console.log(list3.toString);
console.log(list3)
