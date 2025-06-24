

class account{
    name:string
    accountNumber:number
    balance:number=0

    constructor(name:string, accountNumber: number){
    this.name = name,
    this.accountNumber=accountNumber

    }

    deposit= ()=>{
        console.log("você depositou")
    }

    withdraw=()=>{
        console.log("Você sacou!")
    }
}

class Admin extends account{
   

    constructor(name:string, accountNumber:number,balance:number){
        super(name,accountNumber)
        
    }

    getValue=()=>{
        console.log(this.balance)
    }
}

class peopleAccount extends account{
    
    doc_id:number
    constructor(doc_id:number,name:string,accountNamber:number, ){
        super(name, accountNamber)
    
        this.doc_id=doc_id
    }
}
 
class CompanyAccount extends account{
    constructor(name:string,accountNumber:number){
        super(name,accountNumber)
    }
    getLoan=()=>{
        console.log("você pegou um emprestimo")
    }
}

const companyAccount:CompanyAccount = new CompanyAccount("zexz",1)

console.log(companyAccount)

const Adminaccount:Admin = new Admin("samuel", 4,0)

console.log(Adminaccount)
const peopleAccountnew:peopleAccount = new peopleAccount(1,"josé",4)

const newaccount:account = new account("jao", 2,)
console.log(peopleAccountnew)
console.log(newaccount)
newaccount.withdraw()
