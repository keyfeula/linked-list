function createNode() {
    return { 
        value: null,
        nextNode: null,
        setValue: function(value) {
            this.value = value;
        },
        getValue: function() {
            return this.value;
        },
        setNext: function(next) {
            this.nextNode = next;
        },
        getNext: function() {
            return this.nextNode;
        }
    };
}