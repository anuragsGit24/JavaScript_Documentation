const obj = {
  name: "Anurag",
  city: "Mumbai"
}

const isProperty = "name" in obj;    //boolean return if property is present 

console.log(isProperty);

for(let key in obj)
{
  console.log(key, obj[key]);
}