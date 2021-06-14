// 기존 코드
let x: [string, number];

// 순서와 타입, 순서 모두 일치해야한다.
x = ["hello", 33];

// x = [10, "aaa"]; // Error

// Tuple로 지정
const person: [string, number] = ["mark", 33];

// const [first, second, third] = person; // 3번째 인자를 받도록 설정을 안해주었기 때문에 Error