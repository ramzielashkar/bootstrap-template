container = document.querySelector('.data');


// function to fetch an API and get the results
let getData = () => {fetch('http://localhost/bootstrap-template/getdata.php')
  .then((response) => response.json())
  .then((data) => displayData(data)
);};

// function to display fetched results to the user
let displayData =(data) => {
let records_nb = data.length;
let i = 0;
// looping as number of records
while(i<records_nb){
  // creating a row in DOM
const row = document.createElement("div");
row.classList.add("row");
row.classList.add("flex");
container.appendChild(row);

// creating name column in DOM
const name =document.createElement("div");
name.classList.add("column");
name.textContent = data[i]["full_name"];
row.appendChild(name);

// creating email column in DOM
const email =document.createElement("div");
email.classList.add("column");
email.textContent = data[i]["email"];
row.appendChild(email);

// creating phone number column in DOM
const phone =document.createElement("div");
phone.classList.add("column");
phone.textContent = data[i]["phone_number"];
row.appendChild(phone);

// creating message column in DOM
const message =document.createElement("div");
message.classList.add("column");
message.textContent = data[i]["message"];
row.appendChild(message);

  i++;
}
};
getData();
