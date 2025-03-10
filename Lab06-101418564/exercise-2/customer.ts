class Customer {
    firstName: string
    lastName: string
  
    greeter() {
      console.log(`Hello ${this.firstName} ${this.lastName}`)
    }
  }

  const customer = new Customer()
  customer.firstName = "John"
  customer.lastName = "Smith"
  customer.greeter()
  
  