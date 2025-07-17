import { createNode } from "./node.js";

export function createLinkedList() {
    let head = null;
    let tail = null;
    let size = 0;

    return {
        append: function(value) {
            let newNode = createNode();
            newNode.setValue(value);
            if (size === 0) {
                head = newNode;
                tail = newNode;
            }
            else {
                tail.setNext(newNode);
                tail = newNode;
            }
            size++;
        },
        prepend: function(value) {
            let newNode = createNode();
            newNode.setValue(value);
            if (size === 0) {
                head = newNode;
                tail = newNode;
            }
            else {
                newNode.setNext(head);
                head = newNode;
            }
            size++;
        },
        size: function() {
            return size;
        },
        head: function() {
            return head;
        },
        tail: function() {
            return tail;
        },
        at: function(index) {

            if (index > size - 1) {
                return;
            }

            let node = head;
            let i = 0;
            while (node !== null) {
                if (i === index) {
                    return node;
                }
                i++;
                node = node.getNext();
            }
        },
        pop: function() {
            if (size === 1) {
                head = null;
                tail = null;
            }
            else {
                let newTail = this.at(size - 2);
                newTail.setNext(null);
                tail = newTail;
            }
            size--;
        },
        contains: function(value) {
            for (let i = 0; i < size; i++) {
                if (this.at(i).getValue() === value) {
                    return i;
                }
            }
            return -1;
        },
        find: function(value) {
            let index = contains(value);
            if (index !== -1) {
                return this.at(index);
            }
            return null;
        },
        insertAt: function(value, index) {

            if (index > size - 1) {
                return;
            }

            let newNode = createNode();
            newNode.setValue(value);

            if (index === 0) {
                this.prepend(value);
            }
            else if (index === size - 1) {
                tail.setNext(newNode);
                tail = newNode;
                size++;
            }
            else {
                let previousNode = this.at(index - 1);
                let currentNode = this.at(index);
                previousNode.setNext(newNode);
                newNode.setNext(currentNode);
                size++;
            }

        },
        toString: function() {
            let result = "";
            for (let i = 0; i < size; i++) {
                result += this.at(i).getValue();
                result += " --> ";
            }
            result += "null";
            return result;
        }
        
    }
}