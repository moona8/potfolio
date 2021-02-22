// // Create an object:
// var tableData = [
//     {
//         firstName: "Hareem",
//         lastName: "Soomro",
//         email: "h@gmail.com",
//         contact: 09876543
//     },
//     {
//         firstName: "azan",
//         lastName: "sarfaraz",
//         email: "a@gmail.com",
//         contact: 09876543
//     },
//     {
//         firstName: "shahzaib",
//         lastName: "habib",
//         email: "s@gmail.com",
//         contact: 09876543
//     },
//     {
//         firstName: "aiza",
//         lastName: "memon",
//         email: "a@gmail.com",
//         contact: 09876543
//     },
//     {
//         firstName: "fabiha",
//         lastName: "memon",
//         email: "f@gmail.com",
//         contact: 09876543
//     },
//     {
//         firstName: "laraib",
//         lastName: "soomro",
//         email: "L@gmail.com",
//         contact: 09876543
//     },
//     {
//         firstName: "sharjeel",
//         lastName: "khan",
//         email: "s@gmail.com",
//         contact: 09876543
//     },
//     {
//         firstName: "Habib",
//         lastName: "soomro",
//         email: "h@gmail.com",
//         contact: 09876543
//     },
//     {
//         firstName: "salma ",
//         lastName: "habib",
//         email: "s@gmail.com",
//         contact: 09876543
//     },
//     {
//         firstName: "zohra",
//         lastName: "shahzaib",
//         email: "z@gmail.com",
//         contact: 09876543
//     },
// ];
// var tbody = document.getElementById("tbody");

// for (var i = 0; i < tableData.length; i++) {

//     var tr = document.createElement("tr");

//     var td = document.createElement("td");
//     var tdNode = document.createTextNode(tableData[i].firstName)
//     td.appendChild(tdNode)
//     tr.appendChild(td)

//     var td = document.createElement("td");
//     var tdNode = document.createTextNode(tableData[i].lastName)
//     td.appendChild(tdNode)
//     tr.appendChild(td)

    

//     var td = document.createElement("td");
//     var tdNode = document.createTextNode(tableData[i].email)
//     td.appendChild(tdNode)
//     tr.appendChild(td)

//     var td = document.createElement("td");
//     var tdNode = document.createTextNode(tableData[i].contact)
//     td.appendChild(tdNode)
//     tr.appendChild(td)
//     tbody.appendChild(tr)
// }
// new code

//initializw=e empty array for all data
var bioData = [];

//creating constructor for making onjects
function Bio(firstName, lastName, contact, email) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.contact = contact;
    this.email = email;
    
}

//function of add data
function bio() {

    var firstName = document.getElementById('firstName').value;
    var lastName = document.getElementById('lastName').value;
    var contact = document.getElementById('contact').value;
    var email = document.getElementById('email').value;

    if (firstName.replace(/\s/g, "") == "" || lastName.replace(/\s/g, "") == ""  || contact.replace(/\s/g, "") == "" || email.replace(/\s/g, "") == "") {
        alert("All fields should be filled properly..!");
    } else {

        var data = new Bio(firstName, lastName, contact, email)

        bioData.push(data)

        console.log(bioData)
        document.getElementById('firstName').value = "";
        document.getElementById('lastName').value = "";
        document.getElementById('contact').value = "";
        document.getElementById('email').value = "";
        render()
    }
}

//adding data to the table
function render() {
    var content = document.getElementById('content');
    var item = " ";

    for (var i = 0; i < bioData.length; i++) {
        item += "<tr>" +
            "<td>" + bioData[i].firstName + "</td>" +
            "<td>" + bioData[i].lastName + "</td>" +
            "<td>" + bioData[i].contact + "</td>" +
            "<td>" + bioData[i].email + "</td>" +
            "</tr>"
    }
    content.innerHTML = item;
    console.log(content)
}

//dlete All function
function deleteAll() {
    bioData = [];
    content.innerHTML = "";
    console.log(bio);
}

//search data from previous data
function searchData() {
    var firstName = document.getElementById('searchName').value;
    var lastName = document.getElementById('searchFname').value;
    var table = document.getElementById('table');

    var item = " ";

    if (firstName.replace(/\s/g, "") == "" || lastName.replace(/\s/g, "") == "") {
        swal("All fields should be filled..!", "", "error");
    } else {

        var flag = 0;
        for (var i = 0; i < bioData.length; i++) {

            if (bioData[i].firstName == firstName && bioData[i].lastName == lastName) {
                item += "<tr>" +
                    "<td>" + bioData[i].firstName + "</td>" +
                    "<td>" + bioData[i].lastName + "</td>" +
                    "<td>" + bioData[i].contact + "</td>" +
                    "<td>" + bioData[i].email + "</td>" +
                    "</tr>"
                flag = 1;
                break;
            }
        }
    }

    if (flag == 0) {
        swal("Data not found..!", "", "error");
    }

    table.innerHTML = item;
    console.log(table)

}

var dataAdd = document.getElementById('addData')
var dataExtarct = document.getElementById('extractData')

//move to extract data page
function extractData() {
    dataAdd.className = 'd-none'
    dataExtarct.className = 'visible'
}

//mave to add data page
function addData() {
    dataAdd.className = 'visible'
    dataExtarct.className = 'd-none'
}

