
//Write a functionality to find out total balance in the bank.

 var Account1 = /** @class */ (function () {
    function Account1(id, name, balance) {
        this.id = id;
        this.name = name;
        this.balance = balance;
    }
    return Account1;
}());
var SavingAccount1 = /** @class */ (function (_super) {
    __extends(SavingAccount1, _super);
    function SavingAccount1(id, name, balance, interest) {
        var _this = _super.call(this, id, name, balance) || this;
        _this.interest = interest;
        return _this;
    }
    SavingAccount1.prototype.getBalance = function () {
        this.totalBalance = 0;
        this.totalBalance = this.balance + (this.balance * this.interest);
        return this.totalBalance;
    };
    return SavingAccount1;
}(Account1));
var CurrentAccount1 = /** @class */ (function (_super) {
    __extends(CurrentAccount1, _super);
    function CurrentAccount1(id, name, balance, cash_credit) {
        var _this = _super.call(this, id, name, balance) || this;
        _this.cash_credit = cash_credit;
        return _this;
    }
    CurrentAccount1.prototype.getBalance = function () {
        this.totalBalance = 0;
        this.totalBalance = this.balance - this.cash_credit;
        return this.totalBalance;
    };
    return CurrentAccount1;
}(Account1));
var SavingAccountObj = new SavingAccount1(15, "ntr", 500, 5);
console.log(SavingAccountObj.getBalance());
var CurrentAccountObj = new CurrentAccount1(15, "charan", 15000, 600);
console.log(CurrentAccountObj.getBalance());

function __extends(SavingAccount1: (id: any, name: any, balance: any, interest: any) => any, _super: (id: any, name: any, balance: any) => void) {
    throw new Error("Function not implemented.");
}
