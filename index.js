// 1. Create a BankAccount constructor function that takes a user's 
// name and balance. Add a method called deposit(amount) that increases 
// the balance and logs the new balance, and another method withdraw(amount)
//  that decreases the balance only if there are enough funds. Create 3 user 
// accounts and simulate deposits and withdrawals.

// pesudocode
// create object bankAccount
// constructor that contaain name and balance
// deposit money
// withdrawal money
// check remaining balance after withdrawal money


bankAccount={
   
   name:'Maggie',
   balance:200000,
    


};

console.log(bankAccount.name);
console.log(bankAccount.balance);
bankAccount.deposit= 'deposit amount 3000000'
console.log(bankAccount.deposit);
bankAccount.withdrawal='withdrawal amount 150000'
console.log(bankAccount.withdrawal);
bankAccount.totalBalance=  200000+3000000-150000
console.log({bankAccount});





//2. Create an object taskList with a property tasks (an array of task names). 
// Add methods: addTask(task) to add a task, completeTask(task) to remove it, and listTasks() 
// to print all remaining tasks. Test the object with 4–5 tasks and demonstrate the
//  functionality of each method.


// pseudocode
// create object taskList
// create task name
// add task methods
// delete task method
// print remaing task meathods
const taskList={
    name:'cleaning plates',

}
console.log(taskList.name);
taskList.anothertask='sweeping'
console.log(taskList.anothertask);
taskList.addtask='cleaning plates',
console.log(taskList.addtask);
taskList.thirdtask='mopping'
console.log(taskList.thirdtask);
taskList.fourthtask= 'spreading the beds'
console.log(taskList.fourthtask);
delete taskList.fourthtask
console.log({taskList});



// 3.Create a Student object with name, scores (an array), and a
//  method getAverage() that returns the average score. 
// Add another method hasPassed() that returns true if the 
// average is 50 or more, otherwise false. Create and test this for at least two students.

// pseudocode
// create an object
// contain name of student and scores
// find scores average
// if score is morethan or equal to average has passed
// return true if students has passed
// return false if student has less than average score
function studentsResults(scores){
    let result=scores.reduce((a,b)=>a+b);
    let getAverage=result/scores.length;
    if(scores>=getAverage){
        return true
    }
    else{
        return false
    }
}
 
const scores=[{name:'maggie',score:80},{name:'chrie',score:50},{name:'Joy'}];
console.log(studentsResults(scores));


// 4.Create a ShoppingCart object with a property items (an array of item 
// objects with name and price). Add a method addItem(item) to push new items, 
// and a method getTotal() that returns the total cost of all items in the cart. 
// Add 3 items and print the final total.

// pseudocode
// create object called shoppingcart
// create item name and the price
// add items to the shoppingcart
// find total cost for all items added to the cart
shoppingCart={
    name:'sugar',
    price:4000
}
console.log(shoppingCart.name);
console.log(shoppingCart.price);
shoppingCart.item='body lotion  price 3500'
console.log({shoppingCart});
shoppingCart.item2='soap price 2000'
console.log({shoppingCart});
shoppingCart.item3='cooking Oil price 15000'
console.log({shoppingCart});
shoppingCart.item3='perfumes price 4000'
console.log({shoppingCart})
shoppingCart.toatalcost=4000+3500+200+15000+4000
console.log({shoppingCart});

// 5. Create a Movie constructor that takes title, year, and rating.
//  Add a method isClassic() that returns true if the year is 
// before 2000, and a method recommend() that returns a string like
//  "Highly recommended!" if rating is above 8. Create at least 3 movies and call these methods on each.

// pseudocode
// create a movie
// add title,year,rating
// return true if year is before 2000
// return highly recommende if year is after 2000
function movie(years){
//    let Movie=years.filter(year=>year<2000);
   if(years=2000){
    return true
   }
   else{
    return 'highly recommended'
   }
}
const years=[{title:'Heart of a mother',year:2017,rating:6},{title:'Weeping soul',year:1996,rating:10},{title:'Christ in me',year:2019,rating:8}];
console.log(movie(years));


    
  





