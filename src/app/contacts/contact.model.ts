export class UserContact {
    public id: number;
    public fname: string;
    public lname: string;
    public phonenr: string;
    public caddress: string;
    public imgpath: string;

    constructor(
        id: number,
        fname: string, 
        lname: string, 
        phonenr: string, 
        caddress: string, 
        imgpath: string
    ) { 
        //is executed when we create a new instance of this class
        this.id = id;
        this.fname = fname;
        this.lname = lname;
        this.phonenr = phonenr;
        this.caddress = caddress;
        this.imgpath = imgpath;
    }
}