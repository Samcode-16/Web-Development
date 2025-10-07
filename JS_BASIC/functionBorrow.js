 //Function borrowing - call(), apply(), bind()
    const user1 = {
        name: "Sam",
        age: 19,  //no need to write sayHi function isndie the object

        displayMessage() {
             //Implicit binding
            console.log(this.age);      
        }, 
    };

    const user2 = {
        name: "Shashank",
        age: 20,
    };

    const user3 = {
        name: "Riya",
        age: 22,
    };

    function sayHi(degree, year) {
        console.log(this.name, degree, year);  //no need of this.degree or this.year as they
                                                //  both are parameters of function
    }


    //sayHi.call(user1, "BCA", 2027);        //value of "this" is user1   
    //sayHi.call(user2, "B.Tech", 2028);                    //value of "this" is user2

    //Explicit binding                     
    sayHi.apply(user1, ["BCA", 2027]);    
    sayHi.apply(user2, ["B.Tech", 2028]);   


    //bind
    const result = sayHi.bind(user3, "BTech");
    result(2027);                                    //bind returns a function
