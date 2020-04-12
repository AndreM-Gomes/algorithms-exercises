const ListNode = require('./ListNode')
const head = Symbol("head")
module.exports = class Stack{
    constructor(){
        this[head] = null
        this.length = 0;
    }
    push(data){
        const newNode = new ListNode(data)
        if(this[head] === null){
            this[head] = newNode
        }else{
            newNode.next = this[head]
            this[head] = newNode
        }
        this.length++;
    }
    top(){
        if(this[head]!==null){
            return this[head]
        }else{
            return undefined
        }
    }
    pop(){
        if(this[head] === null){
            throw new Error(`Stack is empty`)
        }else{
            const data = this[head].data
            this[head] = this[head].next
            this.length--
            return data
        }
        
    }
    *values(){
        let current = this[head]

        while(current!== null){
            yield current.data
            current = current.next
        }
    }
    [Symbol.iterator](){
        return this.values()
    }
    toString(){
        let string = ''
        for (const node of this.values()) {
            string+=`${node},`
        }
        string+=' '
        string = string.replace(/, /,'')
        return string
    }
}