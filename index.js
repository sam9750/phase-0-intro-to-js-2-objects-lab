const employee = {
name: "Jeff",
streetAddress: "1234 Gret St", 

}

function updateEmployeeWithKeyAndValue(employee, key, value) {
    const newEmployee = {...employee};
    newEmployee[key] = value;
    return newEmployee;
}



function destructivelyUpdateEmployeeWithKeyAndValue(employee, key, value){
    employee[key] = value
    return employee;
}


function deleteFromEmployeeByKey(employee, key) {
    const newObject = Object.assign({}, employee)
    delete newObject[key]
    return newObject; 

}



function destructivelyDeleteFromEmployeeByKey(employee, key){
    delete employee[key]
    return employee;
}
