// Factory Design pattern

function Developer(name) {
  this.name = name;
  this.type = "developer";
}

function Tester(name) {
  this.name = name;
  this.type = "Tester";
}

function EmployeeFactory() {
  this.create = (name, type) => {
    switch (type) {
      case 1:
        return new Developer(name);
      case 2:
        return new Tester(name);
    }
  };
}

function say() {
  console.log(`Hi, I am ${this.name} and I am a ${this.type}`);
}

const employeeFactory = new EmployeeFactory();
const employees = [];

employees.push(employeeFactory.create("PATRICK", 1));
employees.push(employeeFactory.create("Kiana", 2));
employees.push(employeeFactory.create("Daniel", 1));
employees.push(employeeFactory.create("Taeha", 2));

employees.forEach((employee) => {
  say.call(employee);
});
