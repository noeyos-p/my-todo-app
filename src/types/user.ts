/* 
타입에 대한 불명확성 때문에 type script를 씀 
미리 각각의 변수마다 타입을 정의해놓는 것
미리 정해놓은 타입을 넣을 수 있게 유도를 해놓음
잘못된 변수로 인해 나는 오류를 줄어들게 함으로써 효율적으로 작업할 수 있게함
프록스로 내려주는 것 자체도 함수 등도 타입으로 만들어 놓음 
*/

// dto 만드는 것과 유사함
export type User = {
  id: number;
  name: string;
  isActive?: boolean;
  // ?는 있어도 되고, 없어도 됨.
  // User라는 타입에 id와 name은 꼭 있어야하지만, 
  // isActive는 없어도 되는 undefind되어도 되는 값
  email: string;
}

export type GreetingProps = {
  user: User;
  // 만들어둔 타입을 사용함
  age? : number;
  
}