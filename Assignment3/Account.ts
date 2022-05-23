
//Write a class Account with attributes id, name, balance.Add two sub classes SavingAccount & CurrentAccount having specific attribute
 class Account{
    constructor(id,name,balance){
        this.id=id;
        this.name= name;
        this.balance = balance;
    }
}
class SavingAccount extends Account{
   constructor(id,name,balance,interest){
          super(id,name,balance);
          this.interest  = interest;
   }
   getBalance(){
       this.totalBalance=0;
       this.totalBalance = this.balance + (this.balance*this.interest);
       return this.totalBalance;
   }
}

class CurrentAccount extends Account{
   constructor(id,name,balance,cash_credit){
          super(id,name,balance);
          this.cash_credit  = cash_credit;
   }
   getBalance(){
       this.totalBalance=0;
       this.totalBalance = this.balance -this.cash_credit;
       return this.totalBalance;
   }
}

SavingAccountObj = new SavingAccount(11,"Korrai",800,10);
console.log(SavingAccountObj.getBalance())

CurrentAccountObj = new CurrentAccount(11,"Bhargav",1000,500);
console.log(CurrentAccountObj.getBalance())