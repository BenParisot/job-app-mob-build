const nameNode = document.getElementById('name');
const cityNode = document.getElementById('city');
const hoursNode = document.getElementById('hours');
const snoreTypesNode = document.getElementById('snore-types');
const salaryNode = document.getElementById('salary');


const applicantJSON = window.localStorage.getItem('applicant');

console.log(applicantJSON);

const applicant = JSON.parse(applicantJSON);

console.log(applicant);

nameNode.textContent = applicant.name;
cityNode.textContent = applicant.city;
hoursNode.textContent = applicant.hours;
if(applicant.snoreType.length === 0) {
    snoreTypesNode.textContent = 'none';
}
else {
    for(let index = 0; index < applicant.snoreType.length - 1; index++) {
        snoreTypesNode.textContent += applicant.snoreType[index] + ', ';
    }
    snoreTypesNode.textContent += applicant.snoreType[applicant.snoreType.length - 1];
}

salaryNode.textContent = applicant.salary;
