class ListNode{
    constructor(data){
        this.data = data
        this.next = null
        this.previous = null
    }
}
const head = Symbol("head")
module.exports = class DoublyLinkedList{
    constructor(){
        this[head] = null
        this.length = 0
    }
    add(data){
        const newNode = new ListNode(data)
        if(this[head] ===null){
            this[head] = newNode
        }else{
            newNode.next = this[head]
            this[head].previous = newNode
            this[head] = newNode
        }
        this.length++
    }
    get(index){
        if(index>=0 && index<this.length){
            let current = this[head]

            let i = 0;
            while((current!==null)&&(i<index)){
                current = current.next
                i++
            }
            return current !== null ? current.data : undefined
        }else{
            return undefined
        }
    }
    remove(index){
        if((this[head]===null) || (index<0) || (index>=this.length)){
            throw new RangeError(`Index ${index} doesn't exists`)
        }
        if(index===0){
            this[head] = this[head].next
            this[head].previous = null
        }
        let current = this[head]
        let previous = null
        let next = null
        let i = 0

        while((current!==null)&&(i<index)){
            current = current.next
            i++
        }
        if(current!==null){
            previous = current.previous
            next = current.next
            previous.next = next
            next.previous = previous
        }
        throw new RangeError(`Index ${index} doesn't exist in the list`)
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
        let string = '['
        for (const node of this.values()) {
            string+=`${node},`
        }
        string+=']'
        string = string.replace(/,]/,']')
        return string
    }
}