export class UserContact{
    public fname: string;
    public lname: string;
    public phonenr: string;
    public caddress: string;
    public imgpath: string;

    constructor(fname: string, lname: string, phonenr: string, caddress: string, imgpath: string){ //is executed when we create a new instance of this class
        this.fname=fname;
        this.lname=lname;
        this.phonenr=phonenr;
        this.caddress=caddress;
        this.imgpath=imgpath;
    }
}