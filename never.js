"use strict";
function error(message) {
    throw new Error(message);
}
function fail() {
    return error('failed');
}
// 무한 루프
function infiniteLoop() {
    while (true) {
    }
}
// never를 이용해서 잘못된 타입을 넣지 않는 방법
if (typeof a2 !== 'string') {
    a2; // numver
    if (typeof a2 !== 'number') {
        a2; // never
    }
}
