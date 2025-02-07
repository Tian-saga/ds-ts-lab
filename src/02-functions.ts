import {Friend, Colleague } from './myTypes'
import { friends } from "./01-basics";
import { colleagues } from "./01-basics";

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


  // Find the colleague with the highest extension number.
function highestExtension(cs: Colleague[]): Colleague {
    const result = cs.sort(
      (c1, c2) => c1.contact.extension - c2.contact.extension
    );
    return result[cs.length - 1];
  }
  console.log(highestExtension(colleagues.current));
  
  function addColleague(cs: Colleague[], name: string, department: string, email: string): void {
    const maxExtension = highestExtension(cs).contact.extension; // 获取最大 extension
    const newColleague: Colleague = {
      name,
      department,
      contact: {
        email,
        extension: maxExtension + 1, // 新 extension = 最高 extension + 1
      },
    };
    cs.push(newColleague); // 添加到数组
  }
  
  //测试 addColleague
  addColleague(colleagues.current, "Sheild O Connell", "HR", "soc@here.com");
  console.log(colleagues.current.filter((c) => c.name === "Sheild O Connell")); 