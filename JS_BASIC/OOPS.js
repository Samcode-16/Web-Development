
    //Inheritance 
    class Laptop {
        constructor(ram, processor, gen) {
            this.ram = ram;
            this.processor = processor;
            this.gen = gen;
        }

        displayMessage() {
            console.log(`Laptop Specs:: RAM ${this.ram} - Processor ${this.processor} 
            - Generation ${this.gen}`);
        }
    }

    class Dell extends Laptop {
        constructor(ram, processor, gen) {
            super(ram, processor, gen);
        }
    }

    const dell1 = new Dell("8GB", "intel", "i5");
    console.log(dell1);

    //Encapsulation

    class BankAccount {
        // private field
        #balance;

        constructor(owner, initialBalance) {
        this.owner = owner;
        this.#balance = initialBalance;
        }

        deposit(amount) {
            if (amount > 0) {
                this.#balance += amount;
                console.log(`Deposited ${amount}. New balance: ${this.#balance}`);
            } else {
                console.log("Deposit amount must be positive.");
            }
        }

        withdraw(amount) {
            if(amount <= this.#balance) {
                this.#balance -= amount;
                console.log(`Withdraw ${amount}. New Balance is ${this.#balance}`);
            }
        }

        getBalance() {
            return this.#balance;
        }
    }

    const account = new BankAccount("Alice", 1000);
    account.deposit(1000);
    account.withdraw(500);
    console.log(account.getBalance()); 


    //Polymorphism
    
