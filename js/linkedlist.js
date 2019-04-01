
function LinkedList() {
    this.head = null;
    this.tail = null;    
}

function Node(prev, value, next) {

    this.prev = prev;
    this.value = value;
    this.next = next;

}

//ADDING TO HEAD

LinkedList.prototype.addToHead = function(value) {

    let newNode = new Node(null, value, this.head);

    if(this.head){
        this.head.prev = newNode;
    }
    else{
        this.tail = newNode;
    }

    this.head = newNode;

};

// ADDING TO TAIL 

LinkedList.prototype.addToTail = function(value) {

let newNode = new Node(this.tail, value, null);

if(this.tail){
    this.tail.next = newNode;
}
else{
    this.head = newNode;
}

this.tail = newNode;

};

// REMOVING HEAD NODE

LinkedList.prototype.removeHead = function(){

    if(!this.head){
        return null;
    }

    let val = this.head.value;

    this.head = this.head.next;

    if(this.head){
        this.head.prev = null;
    }
    else {
        this.tail = null;
    }

    return val;

};

//REMOVING TAIL NODE

LinkedList.prototype.removeTail=function(){

    if(!this.tail){
        return null;
    }

    let val=this.tail.value;

    this.tail=this.tail.prev; 

    if(this.tail){
        this.tail.next=null;
    }
    return val;

};

var ll1 = new LinkedList();

