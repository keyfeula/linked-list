import { createLinkedList } from "./linked-list.js";

const list = createLinkedList();

list.append("dog");
list.append("cat");
list.append("parrot");
list.append("hamster");
list.append("snake");
list.append("turtle");
list.prepend("fish");
list.insertAt("cow", list.size() - 1);

console.log(list.toString());
console.log(list.size());