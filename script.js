let Contact = function (name, last, email, city, province) {
  this.name = name;
  this.last = last;
  this.email = email;
  this.city = city;
  this.province = province;
};

let contacts = [];
contacts.push(new Contact("Tom", "Tom", "tom@gmail.com", "Ottawa", "ON"));
contacts.push(new Contact("Jerry", "Jerry", "jerry@gmail.com", "Ottawa", "ON"));
contacts.push(new Contact("Daffy", "Daffy", "daffy@gmail.com", "Ottawa", "ON"));
contacts.push(new Contact("Micky", "Micky", "micky@gmail.com", "Ottawa", "ON"));

let listContacts = function () {
  document.getElementById("displayContacts").innerHTML = " ";
  for (let i = 0; i < contacts.length; i++) {
    document.getElementById("displayContacts").innerHTML +=
      '<tr><td id="name' +
      i +
      '">' +
      contacts[i].name +
      '</td><td id="last' +
      i +
      '">' +
      contacts[i].last +
      '</td><td id="email' +
      i +
      '">' +
      contacts[i].email +
      '</td><td id="city' +
      i +
      '">' +
      contacts[i].city +
      '</td><td id="province' +
      i +
      '">' +
      contacts[i].province +
      '</td><td><button class="btn btn-warning" onclick=updateContact(' +
      i +
      ')><i class="fa-solid fa-pen-to-square"></i></button></div><button class="btn btn-danger" onclick=deleteContact(' +
      i +
      ")><i class='fa-solid fa-trash'></i></button></td></tr>";
  }
};

let addNewContact = function () {
  let name = document.getElementById("inputName").value;
  let last = document.getElementById("inputLastName").value;
  let email = document.getElementById("inputEmail").value;
  let city = document.getElementById("inputCity").value;
  let province = document.getElementById("inputProvince").value;
  let contact = new Contact(name, last, email, city, province);
  contacts.push(contact);
  listContacts();
};

let deleteContact = function (i) {
  contacts.splice(i, 1);
  listContacts();
};

let updateContact = function (i) {
  contactId = i;
  //   console.log(contactId);
  document.getElementById("inputName").value = contacts[i].name;
  document.getElementById("inputLastName").value = contacts[i].last;
  document.getElementById("inputEmail").value = contacts[i].email;
  document.getElementById("inputCity").value = contacts[i].city;
  document.getElementById("inputProvince").value = contacts[i].province;
  document.getElementById("submitButtons").innerHTML =
    '<button id="updateButton" class="btn btn-warning" onclick=submitUpdatedContact(contactId)>Submit</button>';
};

let submitUpdatedContact = function (i) {
  contacts[i].name = document.getElementById("inputName").value;
  contacts[i].last = document.getElementById("inputLastName").value;
  contacts[i].email = document.getElementById("inputEmail").value;
  contacts[i].city = document.getElementById("inputCity").value;
  contacts[i].province = document.getElementById("inputProvince").value;

  document.getElementById("inputName").value = "";
  document.getElementById("inputLastName").value = "";
  document.getElementById("inputEmail").value = "";
  document.getElementById("inputCity").value = "";
  document.getElementById("inputProvince").value = "";

  listContacts();
};

listContacts();
