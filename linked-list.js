import { createNode } from "./node.js";

function createLinkedList() {
    return {
        head: null,
        tail: null,
        size: 0,
        append: function(value) {
            let newNode = createNode();
            newNode.setValue(value);
            if (this.size === 0) {
                this.head = newNode;
                this.tail = newNode;
                this.size++;
            }
            else {
                this.tail.setNext(newNode);
                this.tail = newNode;
                this.size++;
            }
        }
    }
}