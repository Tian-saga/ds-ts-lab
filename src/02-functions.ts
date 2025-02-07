import {Friend, Colleague } from './myTypes'
import { friends } from "./01-basics";

function older(f: Friend) : string {
    f.age += 1
    return `${f.name} is now ${f.age}` 
}

function allOlder(friendsArray: Friend[]): string[] {
    return friendsArray.map(f => {
      const newAge = f.age + 1; // 计算新年龄
      return `${f.name} is now ${newAge}`;
    });
  }
  console.log(older(friends[0]))
  console.log(allOlder(friends));
