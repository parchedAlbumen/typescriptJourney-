console.log("hello chat!");
console.log("hi");
var ContractStatus;
(function (ContractStatus) {
    ContractStatus[ContractStatus["Permanent"] = 7] = "Permanent";
    ContractStatus[ContractStatus["Temp"] = 8] = "Temp";
    ContractStatus[ContractStatus["Apprentice"] = 9] = "Apprentice";
})(ContractStatus || (ContractStatus = {}));
let employeeStatus = ContractStatus.Temp;
console.log(ContractStatus[employeeStatus]);
export {};
//# sourceMappingURL=main.js.map