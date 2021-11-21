const header = document.querySelector('#header-container');
header.style.backgroundColor = 'rgb(0, 176, 105)';

const emergencyTasks = document.getElementsByClassName('emergency-tasks')[0];
emergencyTasks.style.backgroundColor = 'rgb(255, 159, 132)';

const noEmergencyTasks = document.getElementsByClassName('no-emergency-tasks')[0];
noEmergencyTasks.style.backgroundColor = 'rgb(249,219,94)'

const emergencyTasksHeaders = document.querySelectorAll('.emergency-tasks h3');
for (let index = 0; index < emergencyTasksHeaders.length; index += 1) {
  emergencyTasksHeaders[index].style.backgroundColor = 'rgb(165, 0, 243)';
}

const noEmergencyTasksHeader = document.querySelectorAll ('.no-emergency-tasks h3');
for (let index = 0; index < noEmergencyTasksHeader.length; index +=1) {
    noEmergencyTasksHeader[index].style.backgroundColor = 'rgb(35,37,37)';
}

const footer = document.getElementById('footer-container');
footer.style.backgroundColor = 'rgb(20,54,52)';