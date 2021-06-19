const authorization = "Bearer sk_f9deb0090ac7688f94eb11ce09fd6a6e";

// 1 select input and submit button, and select name, email, bio, location -- Done
const input  = document.getElementById('clearbitEmail');
const submit  = document.getElementById('clearbitSubmit');
const name  = document.getElementById('userName');
const email  = document.getElementById('userEmail');
const bio  = document.getElementById('userBio');
const location  = document.getElementById('userLocation');

const displayInfo = (person) => {
  // 5 add value to the name, email, bio, location
  email.innerText = person.email;
  name.innerText = person.name.fullName;
  bio.innerText = person.bio;
  location.innerText = person.location;
}

const fetchClearbit = (email) => {
  const url = `https://person.clearbit.com/v2/combined/find?email=${email}`
  fetch(url, {
    headers: {
      'Authorization': authorization,
      'User-Agent': 'Mozilla/5.0 (Windows NT 5.1; rv:15.0) Gecko/20100101 Firefox/15.0.1'
    }
  })
    .then(response => response.json())
    .then((data) => {
      console.log(data.person);
      displayInfo(data.person);
    });
}

const handleSubmit = (event) => {
  // 2 get the input value
  const emailToStalk = input.value;
  // 4 preventDefault 
  event.preventDefault();
  console.log(event, emailToStalk);
  // 4 get http request
  fetchClearbit(emailToStalk);
}

// 3 addEventListener to the button
submit.addEventListener("click", handleSubmit);
