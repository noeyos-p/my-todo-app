import React from "react"
import { GreetingProps } from '../../types/user';

function Greeting({user, age}:GreetingProps) {
  return (
    <div>
      <h1>안녕하세요, {user.name}</h1>
      {age && <p>나이는 {age}입니다.</p>}
    </div>
  )
}
export default React.memo(Greeting);
// Greeting 컴포넌트 내부의 props 가 바뀌어야 재랜더링 됨.