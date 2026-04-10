console.log("hello chat!");
console.log("hi");

enum ContractStatus {
    Permanent = 7, 
    Temp,
    Apprentice
}

let employeeStatus: ContractStatus = ContractStatus.Temp;
console.log(ContractStatus[employeeStatus]);    