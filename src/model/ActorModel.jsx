class Actor {

    constructor(plainActorOrfname, lname, bday, img, link) {
        if (typeof plainActorOrfname === "object") {
            this.fname = plainActorOrfname.fname;
            this.lname = plainActorOrfname.lname;
            this.bday = new Date(plainActorOrfname.bday);
            this.img = plainActorOrfname.img;
            this.link = plainActorOrfname.link;
        } else {
            this.fname = plainActorOrfname;
            this.lname = lname;
            this.bday = new Date(bday);
            this.img = img;
            this.link = link;
        }
    }

    age() {
        let date = new Date();
        return date.getFullYear() - this.bday.getFullYear();
    }
}

export default Actor;