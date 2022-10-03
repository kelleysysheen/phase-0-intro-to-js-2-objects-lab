const employee = {
    name: "Sam",
    streetAddress: "11 Broadway",
};
function updateEmployeeWithKeyAndValue(employee, key, value) {
const newObj = {...employee};
newObj["streetAddress"] = "11 Broadway";
return newObj;
};
function destructivelyUpdateEmployeeWithKeyAndValue(employee, streetAddress, value) {
employee.name = "Sam";
employee.streetAddress = "12 Broadway";
return employee;
}

function deleteFromEmployeeByKey(obj, key, value) {
    const newObj = {...obj };
    newObj[key] = value;
    return newObj;
}

let newEmployee = deleteFromEmployeeByKey(employee, key, value); 
    function destructivelyDeleteFromEmployeeByKey(obj, key, value) {
        // console.log(employee); 
        // console.log(obj); 
        console.log(key);
        // console.log(value);
        // const newObj = {...obj};
        // newObj [key] = "Sam";
        obj[key] = undefined;
        return obj;
    }
  