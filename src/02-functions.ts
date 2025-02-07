import {Friend, Colleague,EmailContact } from './myTypes'
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
  function highestExtension(cs: Colleague[]) { // Inferred retun type
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

  
  function sortColleagues(
    colleagues: Colleague[],
    sorter: (c1: Colleague, c2: Colleague) => number,
    max? : number
  ): EmailContact[] {
    let end = colleagues.length;
    if (max !== undefined) {
       end = max < 2 ? 1 : max
    }
    const sorted = colleagues.sort(sorter);
    const fullResult =  sorted.map((ce) => ({ name: ce.name, email: ce.contact.email }));
    return fullResult.slice(0,end)
  }
  // Test invocations
  console.log(sortColleagues(colleagues.current, (a, b) => (a.contact.extension - b.contact.extension),3));
  console.log(sortColleagues(colleagues.current, (a, b) => (a.name.length - b.name.length),1));
  console.log(sortColleagues(colleagues.current, (a, b) => (a.name.length - b.name.length))); // NEW
  
  
  function findFriends(friendsArray: Friend[], criterion: (friend: Friend) => boolean): string[] {
    return friendsArray.filter(criterion).map(f => f.name); // 过滤符合条件的朋友，并提取名字
  }
  
  // 测试 findFriends()
  console.log(findFriends(friends, (friend) => friend.name.startsWith('Pa'))); // 找出名字以 "Pa" 开头的朋友
  console.log(findFriends(friends, (friend) => friend.age < 35)); // 找出年龄小于 35 的朋友