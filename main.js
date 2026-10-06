class StudentCard {
    #name;
    #age;
    #faculty;
    #year;
    #img;

    constructor(name, age, faculty, year, img) {
        this.#name = name;
        this.#age = age;
        this.#faculty = faculty;
        this.#year = year;
        this.#img = img;
    }

    introduce() {
        console.log(`Student ${this.#name}, ${this.#age} age, faculty ${this.#faculty}, year ${this.#year}.`);
    }

    updateYear() {
        this.#year += 1;
        console.log(`Updated. Your year: ${this.#year}`);
    }

    graduate() {
        if (this.#year > 4) 
        {
            console.log(`Student ${this.#name} ended education.`);
        } 
        else 
        {
            console.log(`Student ${this.#name} still learning.`);
        }
    }

    get name () {
        return this.#name;
    }
    set name (newName) {
        if (newName != " ") 
        {
            this.#name = newName;
        } 
        else 
        {
            console.log("Error. You did something wrong!");
        }
    }

    get age () {
        return this.#age
    }
    set age (newAge) {
        if (newAge != " ") 
        {
            this.#age = newAge;
        } 
        else 
        {
            console.log("Error. You did something wrong!");
        }
    }

    get faculty() {
        return this.#faculty;
    }
    set faculty(newFaculty) {
        if (newFaculty != " ") 
        {
            this.#faculty = newFaculty;
        } 
        else 
        {
            console.log("Error. You did something wrong!");
        }
    }

    get year () {
        return this.#year
    }
    set year (newYear) {
        if (newName != " ") 
        {
            this.#year = newYear;
        } 
        else 
        {
            console.log("Error. You did something wrong!");
        }
    }

    get img () {
        return this.#img
    }
    set img (newImg) {
        if (newImg != " ") 
        {
            this.#img = newImg;
        } 
        else 
        {
            console.log("Error. You did something wrong!");
        }
    }

    create() {
        let photo = document.querySelector('img');
        let nameTitle = document.querySelector('h3');
        let paragraphs = document.querySelectorAll('p'); 

        photo.src = this.#img;
        nameTitle.innerText = `Name: ${this.#name}`;
        
        paragraphs[0].innerText = `Age: ${this.#age}`;
        paragraphs[1].innerText = `Faculty: ${this.#faculty}`;
        paragraphs[2].innerText = `Year: ${this.#year}`;
    }
}

    let student1 = new StudentCard("Maria", 17, "Designer", 2, "https://i.pinimg.com/736x/c8/8f/b3/c88fb324820db3f0b05df5b9b2823277.jpg");
    let student2 = new StudentCard("Egor", 17, "Web Development", 5, "https://i.pinimg.com/736x/0c/32/78/0c32789febdbfb0da2398617d88e8ae7.jpg");

    console.log("First student:");
    student1.introduce();
    student1.updateYear();
    student1.graduate();

    student1.faculty = "Computer Science";
    console.log(`New faculty: ${student1.faculty}`);

    student1.create();
