function Fedex() {
  this.calculate = (package) => {
    // fedex calcuations... for shipping
    return 2.45;
  };
}

function UPS() {
  this.calculate = (package) => {
    // for shipping
    return 1.56;
  };
}

function USPS() {
  this.calculate = (package) => {
    // for shipping
    return 4.5;
  };
}

function Shipping() {
  this.company = "";
  this.setStrategy = (company) => {
    this.company = company;
  };

  this.calculate = (package) => {
    return this.company.calculate(package);
  };
}

const fedex = new Fedex();
const ups = new UPS();
const usps = new USPS();
const package = { from: "Alabama", to: "Georgia", weight: 1.56 };

const shipping = new Shipping();
shipping.setStrategy(fedex);
console.log("FEDEX : ", shipping.calculate(package));

shipping.setStrategy(ups);
console.log("UPS : ", shipping.calculate(package));

shipping.setStrategy(usps);
console.log("USPS : ", shipping.calculate(package));

// fedex.calculate(package);
// ups.calculate(package);
// usps.calculate(package);
