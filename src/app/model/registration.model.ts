export class RegistrationModel {
    firstName: string;
    lastName: string;
    email: string;
    password: string;
    confirmPassword: string;
    conditionIsAccept:boolean;

    constructor(fname:string, lname:string,email:string, pwd:string, confirmPwd:string, isAccept:boolean){
        this.firstName=fname;
        this.lastName=lname;
        this.email=email;
        this.password=pwd;
        this.confirmPassword=confirmPwd;
        this.conditionIsAccept=isAccept;
    }
  }
  