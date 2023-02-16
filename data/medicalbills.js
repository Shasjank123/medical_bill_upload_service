const medicalBills = [{
    "Patient Name" : "Shashank",
    "Patient Address" : "650 W S Temple",
    "Hospital Name" : "Yashoda",
    "Date" : "12/03/2022",
    "Amount" : 500
}, {
    "Patient Name": "Balija",
    "Patient Address": "541 S Temple",
    "Hospital Name": "KIMS",
    "Date": "11/03/2022",
    "Amount": 800
}, {
    "Patient Name": "Alex",
    "Patient Address": "900 East",
    "Hospital Name": "Apollo",
    "Date": "11/01/2021",
    "Amount": 1000
}, {
    "Patient Name": "Balija",
    "Patient Address": "600 East 390 West",
    "Hospital Name": "Srikara",
    "Date": "21/08/2022",
    "Amount": 300
}]

function addmedicalBill(new_bill) {
    medicalBills.push(new_bill)
}

function medicalbills() {
    return medicalBills;
}

module.exports = {
    medicalbills,
    addmedicalBill
}