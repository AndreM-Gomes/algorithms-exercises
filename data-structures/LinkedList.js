class ListNode{
    constructor(data){
        this.data = data
        this.next = null
    }
}
const head = Symbol("head")
module.exports = class LinkedList{
    constructor(){
        this[head] = null
        this.length = 0;
    }
    add(data){
        const newNode = new ListNode(data)
        if(this[head] === null){
            this[head] = newNode
        }else{
            newNode.next = this[head]
            this[head] = newNode
        }
        this.length++;
    }
    get(index){
        if(index >= 0){
            let current = this[head]

            let i = 0;

            while((current!==null) && (i<index)){
                current = current.next
                i++
            }
            return current !== null ? current.data : undefined
        }else{
            return undefined
        }
    }
    remove(index){
        if((this[head] === null) || (index<0)){
            throw new RangeError(`Index ${index} doesn't exists`)
        }
        if(index===0){
            const data = this[head].data
            this[head] = this[head].next
            return data
        }
        let current = this[head]

        let previous = null

        let i = 0

        while((current !== null) && (i<index)){
            previous = current 
            current = current.next
            i++
        }
        if(current!==null){
            previous.next = current.next
            return current.data
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
function randomInt(min, max) {
	return min + Math.floor((max - min) * Math.random());
}


