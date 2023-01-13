class Queue{
    constructor(){
        this.item=[]
    }
    enqueue(ele){
        this.item.push(ele)
    }
    dequeue(){
        if(queue.isEmpty())
        return "queue is empty"
        this.item.shift()
    }
    isEmpty(){
        return this.item.length==0
    }
    front(){
        if(queue.isEmpty())
        return "queue is empty"
        
        return this.item[0]
    }
    end(){
        if(queue.isEmpty())
        return "queue is empty"
        
        return this.item[this.item.length-1]
    }
}
var queue=new Queue()
queue.enqueue(10)
queue.enqueue(20)
queue.enqueue(30)
queue.dequeue()
queue.enqueue(40)
queue.dequeue()
queue.dequeue()
queue.dequeue()
console.log(queue.isEmpty())
console.log(queue.front())
