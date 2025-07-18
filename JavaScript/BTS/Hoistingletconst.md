# Hoisting in let and const variable : 

Are let and const Variables Hoisted?
A common question during interviews or discussions is whether let and const variables are hoisted. The answer is yes, they are hoisted. However, they exist in something called the "Temporal Dead Zone" (TDZ) until they are initialized.

# Understanding the Temporal Dead Zone (TDZ)
The TDZ is the time between the variable's hoisting and its initialization. During this period, accessing the variable results in a ReferenceError. Let's explore this with some code examples.


<!-- let x=10 ;
var y=11 ;
console.log(x); 
console.log(y);

Output
10
11 -->
 

Output is 10 and 11 as expected.

Now let us Tweak it a little bit and see what happens when we try to access x and y before initializing them 

2. Example-2:

<!-- console.log(y);
console.log(x);
let x = 10;
var y = 11; -->

If You try to Run the above code it will show an error saying "ReferenceError: Cannot access 'x' before initialization".

Now Let us see what happens when we try to access a variable that is not even declared in a JS Programme

3. Example-3:

<!-- console.log(a); -->

Upon running the above code You will see an error saying "ReferenceError: a is not defined"

Now here comes the answer to the initial question of whether hoisting occurs in let and const or not. If You look closely at example 2 the error says cannot access x before initialization but in example three the error is "a is not defined". Since we can clearly see the error in the example is about not accessing variable x before initialization it means that it must have existed somewhere in the memory before initialization but we are unable to access it. this special place in memory that we cannot access is known as the Temporal Dead zone.
So let and const are hoisted but they exist in Temporal Dead Zone.
Exploring TDZ with a Debugger

To better understand the TDZ, we can use a debugger. Here's the setup:

<!-- //TDZ starts here 
console.log(y);
console.log(x);
let x = 9 ; //TDZ ends here 
console.log(x); -->

# Debugger Example : 
1. Set a Breakpoint: Place a breakpoint before the variable initialization.
2. Inspect Variables: Observe the state of variables in the debugger.
When the code execution pauses at the breakpoint, you will see that x is in the TDZ, and accessing it results in a ReferenceError.

# Temporal Dead Zone
The TDZ starts from the beginning of the block scope.
The TDZ ends when the variable is initialized.

<!-- {
    // TDZ starts
    console.log(x); // Throws ReferenceError
    let x = 9; // TDZ ends
    console.log(x); // Outputs: 9
} -->

# Understanding Hoisting with const
The behavior of const is similar to let regarding hoisting:

<!-- console.log(y); // Throws ReferenceError: Cannot access 'y' before initialization
const y = 10; -->

Again, this error indicates that the variable y is known to exist but is not accessible before its initialization.

# Key Takeaways : 
- Hoisting: let and const variables are hoisted but exist in the TDZ until initialization.
- TDZ: The period from the start of the block until the variable is initialized.
- Errors: Accessing a variable in the TDZ results in a ReferenceError.

# Summary : 
In summary, both let and const are hoisted but reside in the Temporal Dead Zone until initialized. Understanding this behavior is crucial for avoiding errors and writing efficient JavaScript code. In future lessons, we'll delve deeper into scopes, scope chains, and block scopes, which will further clarify these concepts.

# Exercises : 
To solidify your understanding, try the following exercises:
1. Create a function and declare variables with var, let, and const inside it. Observe the behavior when accessing them before and after initialization.
2. Use a debugger to visualize the TDZ for let and const variables.

These exercises will help you get a strong grasp of hoisting, TDZ, and execution contexts in JavaScript.