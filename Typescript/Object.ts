

const employee = {
    name: "John Doe",
    age: 30,
    position: "Software Engineer",
    department: "Development",
    skills: ["JavaScript", "TypeScript", "React", "Node.js"],
    address: {
        street: "123 Main St",
        city: "Anytown",
        state: "CA",
        zipCode: "12345"
    },
    displayInfo() {
        console.log(`Name: ${this.name}`);
        console.log(`Age: ${this.age}`);
        console.log(`Position: ${this.position}`);
    },
    displaySkills() {
        console.log(`Skills: ${this.skills.join(", ")}`);
    }
};

employee.displayInfo();
employee.displaySkills();

