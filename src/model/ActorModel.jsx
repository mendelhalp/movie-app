class ActorModel {

    constructor(plainActorOrFname, lname, bday, img, link) {
        if (typeof plainActorOrFname === "object") {
            this.fname = plainActorOrFname.fname;
            this.lname = plainActorOrFname.lname;
            this.bday = new Date(plainActorOrFname.bday);
            this.img = plainActorOrFname.img;
            this.link = plainActorOrFname.link;
        } else {
            this.fname = plainActorOrFname;
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

export default ActorModel;