class Stack{
    constructor(){
        this.starr=[];
    }
    push(ele){
        this.starr.push(ele)
    }
    pop(){
        if(this.starr.length==0)
        return 'stack is empty'
        
        return this.starr.pop()
    }
    peek(){
        return this.starr[this.starr.length-1]
    }

}

const st=new Stack()
st.push(10)
st.push(20)
st.pop()
st.push(30)
console.log(st.peek())
console.log(st)