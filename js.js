class LinkedList {
  constructor(headNode) {
    this.head = headNode;
  }
  append(newNodeValue) {
    let newNode = new Node(newNodeValue);
    let currentSearchee = this.head;
    while (1) {
      if (!currentSearchee.nextNode) {
        currentSearchee.nextNode = newNode;
        break;
      } else {
        currentSearchee = currentSearchee.nextNode;
      }
    }
    return;
  }
  prepend(newNodeValue){
    let oldHead = this.head;
    let newNode = new Node(newNodeValue);
    this.head = newNode;
    newNode.nextNode = oldHead;
  }
  get size(){
    let i = 1;
    let currentSearchee = this.head;
    while(currentSearchee.nextNode){
        currentSearchee = currentSearchee.nextNode;
        i++;
    }
    return i;
  }
  get tail(){
    let currentSearchee = this.head;
    while(currentSearchee.nextNode){
        currentSearchee = currentSearchee.nextNode;
    }
    return currentSearchee;
  }
  at(index){
    let currentSearchee = this.head;
    for(let i = 0; i < index; i++){
        currentSearchee = currentSearchee.nextNode;
    }
    return currentSearchee;
  }
  pop(){
    let currentSearchee = this.head;
    while(currentSearchee.nextNode.nextNode){
        currentSearchee = currentSearchee.nextNode;
    }
    currentSearchee.nextNode = null;
  }
  contains(val){
    let currentSearchee = this.head;
    while(currentSearchee){
        if(currentSearchee.value == val){
            return true;
        }
        currentSearchee = currentSearchee.nextNode;
    }
    return false;
  }
  find(val){
    let currentSearchee = this.head;
    for(let i = 0; currentSearchee; i++){
        if(currentSearchee.value == val){
            return i;
        }
        currentSearchee = currentSearchee.nextNode;
    }
    return false;
  }
  toString(){
    let str = ``;
    let currentSearchee = this.head;
    while(currentSearchee){
        str/*.concat(*/ += `${currentSearchee.value} -> `/*)*/;
        currentSearchee = currentSearchee.nextNode;
    }
    str/*.concat*/ += /*(*/`null`/*)*/;
    return str;
  }
}

class Node {
  constructor(value = null, nextNode = null) {
    this.value = value;
    this.nextNode = nextNode;
  }
}

// test list

let chris = new Node(2);
let barry = new Node(1, chris);
let allen = new Node(0, barry);

let list = new LinkedList(allen);
// begins (ideally) with allen(0) > barry(1) > chris(2) > null