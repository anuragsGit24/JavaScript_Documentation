# Searching the DOM
# HTML DOM getElementByID() Method :
The getElementById() method returns the elements that have given an ID which is passed to the function. This function is a widely used HTML DOM method in web designing to change the value of any particular element or get a particular element. If the passed ID to the function does not exist then it returns null. The element is required to have a unique id, in order to get access to that specific element quickly, & also that particular id should only be used once in the entire document.

Syntax:
document.getElementById( element_ID )
Parameter: This function accepts single parameter element_ID which is used to hold the ID of the element.
Return Value: It returns the object of the given ID. If no element exists with the given ID then it returns null.

Example 1: This example describes the getElementById() method where element_id is used to change the color of the text on clicking the button.

```html <!DOCTYPE html>
<html>
  
<head>
    <title>
        DOM getElementById() Method
    </title>
  
    <script>
  
        // Function to change the color of element
        function geeks() {
            var demo = document.getElementById("geeks");
            demo.style.color = "green";
        }
    </script>
</head>
  
<body style="text-align:center">
    <h1 id="geeks">GeeksforGeeks</h1>
    <h2>DOM getElementById() Method</h2>
  
    <!-- Click on the button to change color -->
    <input type="button" 
           onclick="geeks()" 
           value="Click here to change color" />
</body>
  
</html>
 

Example 2: This example describes the getElementById() method where the element_id is used to change the content on clicking the button.

```<!DOCTYPE html>
<html>
  
<head>
    <title>
        DOM getElementById() Method
    </title>
  
    <script>
  
        // Function to change content of element
        function geeks() {
            var demo = document.getElementById("geeks");
            demo.innerHTML = "Welcome to GeeksforGeeks!";
        }
    </script>
</head>
  
<body style="text-align:center">
    <h1>GeeksforGeeks</h1>
    <h2>DOM getElementById() Method</h2>
    <h3 id="geeks">Hello Geeks!</h3>
  
    <!-- Click here to change content -->
    <input type="button" 
           onclick="geeks()" 
           value="Click here to change content" />
</body>
  
</html>
 

# DOM querySelectorAll() Method

The querySelectorAll() method in HTML is used to return a collection of an element’s child elements that match a specified CSS selector(s), as a static NodeList object. The NodeList object represents a collection of nodes. The nodes can be accessed by index numbers. The index starts at 0. 
Note: If we want to apply CSS property to all the child nodes that match the specified selector, then we can just iterate through all nodes and apply that particular property.

Syntax: 
element.querySelectorAll(selectors)
Selectors is the required field. It specifies one or more CSS selectors to match the element.These selectors are used to select HTML elements based on their id, classes, types, etc. 
In case of multiple selectors, comma is used to separate each selector.
Example: 