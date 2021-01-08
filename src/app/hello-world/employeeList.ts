export class Employee{

    empno:number;
    ename:string;
    salary:number;
    desg:string;

    constructor(empno:number,ename:string,
        salary:number,desg:string){
            this.empno=empno;
            this.ename=ename;
            this.salary=salary;
            this.desg=desg;
    }
    bonus():number{
        return .01*this.salary + this.salary;
    }
}