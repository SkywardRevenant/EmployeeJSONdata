var employeePromise = d3.json("employee.json");

var getImg = function(employee) {
   return  employee.photo;
}


var successFCN = function(employeeData) {
        console.log(employeeData); 
    d3.select("h1")
        .text("Centre College Employees")
    d3.select("tbody")
        .append("tr")
}

var failFCN = function(employeeError) {
    console.log("Failure to load",employeeError);
}


employeePromise.then(successFCN, failFCN);

var shortList = employeeData.slice(0,2);