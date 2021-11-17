function Employee(name, salary) {
  this.name = name;
  this.salary = salary;
}

Employee.prototype = {
  getSalary: function () {
    return this.salary;
  },

  setSalary: function (sal) {
    this.salary = sal;
  },

  accept: function (visitorFunc) {
    visitorFunc(this);
  },
};

//////////////

const patrick = new Employee("PATRICK", 10000);
console.log(patrick.getSalary());

////////////// visitor function
function ExtraSalary(emp) {
  emp.setSalary(emp.getSalary() * 2);
}

patrick.accept(ExtraSalary);
console.log(patrick.getSalary());
