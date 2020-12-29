class Actor {
    
    constructor(fname, lname, bday, img, link){
        this.fname = fname;
        this.lname = lname;
        this.bday = new Date(bday);
        this.img = img;
        this.link = link;
    }

    age() {
        let date = new Date();
        return date.getFullYear() - this.bday.getFullYear();
    }
}

export default Actor;