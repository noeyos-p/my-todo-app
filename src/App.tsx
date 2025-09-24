import './App.css'
import type { User } from './types/user'
import Greeting from './components/Greeting'

function App() {
  // User 타입인 장원영 정보 만들기
  const jang: User = {
    id: 1,
    name: "장원영",
    email: "jang@ive.com",
    isActive: true
  }

  // User를 값으로 갖는 배열을 선언
  /* const ive:User[] = [ 초기배열 값 ] */
  const ive: User[] = [
    {
      id: 1,
      name: "장원영",
      email: "jang@ive.com",
      isActive: true
    },
    {
      id: 2,
      name: "안유진",
      email: "Ahn@ive.com",
      isActive: false
    }
  ]
  return (
    <div>
      <h1>User 정보</h1>
      <ul>
        <li>{jang.id}</li>
        <li>{jang.name}</li>
        <li>{jang.email}</li>
        <li>{jang.isActive ? 'TRUE' : 'FALSE'}</li>
      </ul>
      <hr />
      {/* ive Member를 map으로 배열 찍기 */}
      <h1>Ive Member</h1>
      {
        ive.map((member, _) => {
          return (
            <ul key={member.id}>
              <li>{member.id}</li>
              <li>{member.name}</li>
              <li>{member.email}</li>
              <li>{member.isActive ? 'TRUE' : 'FALSE'}</li>
            </ul>
          )
        })
      }
      <hr/>
      <h1>컴포넌트 넣기</h1>
      <Greeting user={jang} age={20}/>
      {/* 타입스크립트를 사용하지 않았음 */}
    </div>
  )
}

export default App
