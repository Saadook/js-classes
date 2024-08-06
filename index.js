class Person{
    constructor(name,age){
        this.name = name;
        this.age = age;
    }
    DisplayPerson(){
        console.log(`Hello,my name is :`${this.name});
        console.log(`and i am :${this.age}years old`);
    }
}


class rectangle{
    constructor(width,height){
    this.width = width;
    this.height=height;
}
CalculateRectangle(){
return this.width*this.height
}
}


class BankAccount{
    constructor(balance,accountNumber){
        this.balance=balance
        this.accountNumber=accountNumber
    }
    deposit(amount){
        this.balance+= amount
        console.log(`amount $${amount} deposit into account ${this.accountNumber}.`);
        
    }
    withdraw(amount){
        if(amount<=this.balance){
            this.balance -= amount 
            console.log(`amount$${amount}withdraw from account${this.accountNumber}.`);
        }else{
            console.log(`infufficent balance in account ${this.accountNumber}`);
            
        }
    }
    transfer(amount,recipientAccount){
        if(amount<=this.balance){
            this.balance-=amount;
            recipientAccount.deposit(amount);
            console.log(`amount $${amount}transfered from account ${this.accountNumber} to account ${recipientAccount.accountNumber}`);
            
        }else{
         console.log(`insufficient balance in account ${this.accountNumber} for transfer`);
         
        }
    }
    displayBalance(){
        console.log(`acount ${this.accountNumber} balance:$${this.balance}`);
        
    }
}


class FootballPlayers{
    constructor (){
        this.players=[];
    }
    addPlayer(name){
        this.players.push(name);
    }
    removePlayer(name){
        const index = this.players.indexOf(name);
        if (index !== -1){
            this.players.splice(index,1);
        }
    }
    getPlayer(name){
        const player = this.players.find(player =>player === name);
        return player ? player : "player not found";
    }
}


    class stack {
        #list = new map ();
        #maxSize= null;
        constructor(maxSize){
            this.#maxSize= Number(maxSize)|| null;
        }
        get size(){
            return this.#list.size;
        }
        push(item){
            if (! this.#maxSize||this.size<this.#maxSize){
            this.#list.set(this.size, item);
            }
            return this.size;
        }
        pop(){
            if (this.size){
                const LastItem= this.#list.get(this.size -1);
                this.#list.delete(this.size)
            }
        }

    }



    class Stack{
        constructor(){
this.list = []
        }

addEle(item){
    this.list.push(item)
}
removeele(){
    this.list.pop()
}
peek(){
    //return the next item to be delted
    return this.list[this.list.length-1]
}

    }


var stack1 = new Stack()
stack1.addEle('fzbf')
stack1.removeele()


class queue {
    constructor(){
        this.list=[]
    }
    addEle(item){
    this.list.push(item)
    }
    removeele(){
        this.list.pop
    }
    peek (){
        return this.list[this.length-1]
    }
}



