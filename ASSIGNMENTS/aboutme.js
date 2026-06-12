const firstName = "Princewill"; 
const lastName = "Onyema";
const birthYear = 1996; 
const city = "Bauchi";

let isEmployed = true; 

const currentYear = 2026;
const age = currentYear - birthYear;

const profileCard = `
=========================
    MY PROFILE CARD
=========================
Name: ${firstName} ${lastName}
City: ${city}
Birth Year: ${birthYear}
Age: ${age}
Employed: ${isEmployed ? "Yes" : "No"}
=========================`;

console.log(profileCard);