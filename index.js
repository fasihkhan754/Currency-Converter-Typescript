import inquirer from "inquirer";
let currency = {
    "PKR": {
        "USD": 0.004,
        "PKR": 1,
        "GBP": 0.0037,
        "RMB": 0.031,
        "SR": 0.017
    },
    "USD": {
        "USD": 1,
        "PKR": 226.72,
        "GBP": 0.83,
        "RMB": 6.90,
        "SR": 3.76
    },
    "GBP": {
        "USD": 1.21,
        "PKR": 273.80,
        "GBP": 1,
        "RMB": 8.33,
        "SR": 4.54
    },
    "RMB": {
        "USD": 0.14,
        "PKR": 32.87,
        "GBP": 0.12,
        "RMB": 1,
        "SR": 0.54
    },
    "SR": {
        "USD": 0.27,
        "PKR": 60.32,
        "GBP": 0.22,
        "RMB": 1.84,
        "SR": 1
    }
};
const ans = await inquirer.prompt([
    {
        type: "list",
        name: "in",
        choices: ["PKR", "USD", "GBP", "RMB", "SR"],
        message: "Select a currency you have! "
    },
    {
        type: "list",
        name: "out",
        choices: ["PKR", "USD", "GBP", "RMB", "SR"],
        message: "Select a currency you want in return ! "
    },
    {
        type: "number",
        name: "conversion",
        choices: ["PKR", "USD", "GBP", "RMB", "SR"],
        message: "Enter your Amount ! "
    }
]);
const ab = ans;
if (ab.in && ab.out && ab.conversion) {
    console.log("\nPrice of 1 " + ab.in + " is : " + currency[ab.in][ab.out] + " " + ab.out + " \n");
    console.log("Total amount of " + ab.conversion + " " + ab.in + " into " + ab.out + " is : " + currency[ab.in][ab.out] * ab.conversion + "\n");
    console.log("\n Thankyou for Using Currency Converter :) \n");
}
else {
    console.log("Invalid inputs ");
}
