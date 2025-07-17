export function createNode() {
    let value = null;
    let nextNode = null;
    
    return { 
        setValue: function(newValue) {
            value = newValue;
        },
        getValue: function() {
            return value;
        },
        setNext: function(next) {
            nextNode = next;
        },
        getNext: function() {
            return nextNode;
        }
    }
}