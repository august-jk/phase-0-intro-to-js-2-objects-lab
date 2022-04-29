// Write your solution in this file!
const employee = {
    name: 'Jane',
    streetAddress: '1200 care st',
}

function updateEmployeeWithKeyAndValue(employee, name, streetAddress) {
    const newEmployee = {...employee};
    newEmployee.name = 'Sam';
    newEmployee.streetAddress = '11 Broadway';
    return newEmployee;
}
function destructivelyUpdateEmployeeWithKeyAndValue() {
    employee.name = 'Sam';
    employee.streetAddress = '12 Broadway';
    return employee;
}
function deleteFromEmployeeByKey() {
    const newEmployee = {...employee};
    delete newEmployee.name;
    return newEmployee;
}
function destructivelyDeleteFromEmployeeByKey() {
    delete employee.name;
    return employee;
}