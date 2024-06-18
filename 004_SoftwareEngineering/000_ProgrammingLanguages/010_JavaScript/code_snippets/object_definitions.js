

console.log("");
console.log("=====================================");
let obj = {
    key1: "value1",
    key2: "value2",
    key3: "value3"
}

console.log(obj.key1); // value1
console.log(obj.key2); // value2
console.log(obj.key3); // value3

console.log("");
console.log("=====================================");
let obj2 = {};
obj2.key1 = "value1";
obj2.key2 = "value2";
obj2.key3 = "value3";

console.log(obj2.key1); // value1
console.log(obj2.key2); // value2
console.log(obj2.key3); // value3

console.log("");
console.log("=====================================");
let obj3 = {};
obj3["key1"] = "value1";
obj3["key2"] = "value2";
obj3["key3"] = "value3";

console.log(obj3["key1"]); // value1
console.log(obj3["key2"]); // value2
console.log(obj3["key3"]); // value3

console.log("");
console.log("=====================================");
// Deep Object, Conditional Accessors
let deep = {
    upper_property: {
        middle_property: {
            inner_property_prim_str: "string",
            inner_property_prim_int: 1,
        }
    }
}
console.log(deep)
console.log(deep.upper_property.middle_property?.inner_property_prim_undefined)