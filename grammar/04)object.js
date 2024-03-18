const cathy = {
    name: "cathy",
    // 속성 이름은 따옴표 처리 안 해도 됨
    age: 19,
    skills: ["자바스크립트", "파이썬", "코볼"]
}

console.log(cathy)
console.log(cathy.name)
console.log(cathy["name"])

cathy["hobby"] = "독서" // 속성 추가
console.log(cathy)

delete cathy.skills // 속성 삭제
console.log(cathy)