class User{
    constructor(username,password,email){
        this.username=username;
        this.password=password;
        this.email=email;
    }
    register(){
        console.log(`${username} is registered.`)
    }
}
class Member extends User{
    constructor(username,password,email,membershipPackage){
        super(username,password,email);
        this.package=membershipPackage;
        let todaysdate=new Date();
        const membershipActiveTillYear=todaysdate.getFullYear();
        const membershipActiveTillMonth=todaysdate.getMonth();
        const membershipActiveTillDay=todaysdate.getDay();
        this.membershipActiveTillDate=new Date(
            membershipActiveTillYear,
            membershipActiveTillMonth,
            membershipActiveTillDay
        );
    }
    //printValues(){
        //console.log(`${this.username} ${this.password} ${this.email} ${this.package}` )
    //}
    getPackage(){
        console.log(`${this.membershipActiveTillDate}`)
    }
    renewMembership(){
        let todaysdate=new Date();
        const membershipActiveTillYear=todaysdate.getFullYear();
        const membershipActiveTillMonth=todaysdate.getMonth();
        const membershipActiveTillDay=todaysdate.getDay();

        if(this.package === "Standard Package"){
          this.membershipActiveTillDate=new Date(
            membershipActiveTillYear,
            membershipActiveTillMonth + 1,
            membershipActiveTillDay
           );
        }
        else if(this.package === "Yearly Package"){
            this.membershipActiveTillDate=new Date(
                membershipActiveTillYear + 1,
                membershipActiveTillMonth,
                membershipActiveTillDay
            );
        }
    }
}

const yash=new Member("abc","abc@123","abc123","Standard Package")
yash.getPackage();
yash.renewMembership();
yash.getPackage();
