const toggleBtn = document.getElementById('toggle-btn');
const sidebar = document.getElementById('sidebar');
const mainContent = document.getElementById('main-content');

let isCollapsed = false;

toggleBtn.addEventListener('click', () => {
    if (isCollapsed) {
        sidebar.classList.remove('sidebar-collapsed');
        sidebar.classList.add('sidebar-expanded');
        mainContent.style.marginLeft = '16rem'; 
    } else {
        sidebar.classList.remove('sidebar-expanded');
        sidebar.classList.add('sidebar-collapsed');
        mainContent.style.marginLeft = '4rem'; 
    }
    isCollapsed = !isCollapsed;
});

 // Mock data to store trainees and schedules
 let trainees = JSON.parse(localStorage.getItem('trainees')) || [];
 let schedules = [];
 let selectedTrainee = null;
 let selectedSchedule = null;

 // Update Trainee List Table
 function updateTraineeList() {
     const traineeViewList = document.getElementById('traineeViewList');
     traineeViewList.innerHTML = ''; // Clear list
     trainees.forEach((trainee, index) => {
         const row = document.createElement('tr');
         row.innerHTML = `
             <td>${trainee.name}</td>
             <td>${trainee.department}</td>
             <td>${trainee.email}</td>
             <td><button onclick="openModal(${index})">Schedule</button></td>
         `;
         traineeViewList.appendChild(row);
     });
 }

 // Open Modal and Prefill Trainee Info
 function openModal(index) {
     selectedTrainee = trainees[index];
     document.getElementById('modalName').value = selectedTrainee.name;
     document.getElementById('modalDepartment').value = selectedTrainee.department;
     document.getElementById('modalEmail').value = selectedTrainee.email;
     document.getElementById('taskScheduleModal').style.display = 'flex';
 }

 // Close Modal
 document.getElementById('closeModal').addEventListener('click', function () {
     document.getElementById('taskScheduleModal').style.display = 'none';
 });

 // Task and Schedule Form Submission
 document.getElementById('taskScheduleForm').addEventListener('submit', function (e) {
     e.preventDefault();
     const task = document.getElementById('task').value;
     const date = document.getElementById('date').value;
     const time = document.getElementById('time').value;

     // Add task and schedule to schedule list
     schedules.push({
         employeeName: selectedTrainee.name,
         department: selectedTrainee.department,
         email: selectedTrainee.email,
         task,
         date,
         time
     });
     updateScheduledList();
     document.getElementById('taskScheduleModal').style.display = 'none';
     this.reset();
 });

 // Update Scheduled Employees Table
 function updateScheduledList() {
     const scheduledEmployeesTable = document.getElementById('scheduledEmployeesTable');
     scheduledEmployeesTable.innerHTML = ''; // Clear table rows
     schedules.forEach((schedule, index) => {
         const row = document.createElement('tr');
         row.innerHTML = `
             <td>${schedule.employeeName}</td>
             <td>${schedule.department}</td>
             <td>${schedule.email}</td>
             <td>${schedule.task}</td>
             <td>${schedule.date}</td>
             <td>${schedule.time}</td>
             <td>
                 <button onclick="openEditModal(${index})">Edit</button>
                 <button onclick="deleteSchedule(${index})">Delete</button>
             </td>
         `;
         scheduledEmployeesTable.appendChild(row);
     });
 }

 // Open Edit Modal and Prefill Schedule Info
 function openEditModal(index) {
     selectedSchedule = schedules[index];
     document.getElementById('editModalName').value = selectedSchedule.employeeName;
     document.getElementById('editModalDepartment').value = selectedSchedule.department;
     document.getElementById('editModalEmail').value = selectedSchedule.email;
     document.getElementById('editTask').value = selectedSchedule.task;
     document.getElementById('editDate').value = selectedSchedule.date;
     document.getElementById('editTime').value = selectedSchedule.time;
     document.getElementById('editScheduleId').value = index;
     document.getElementById('editScheduleModal').style.display = 'flex';
 }

 // Close Edit Modal
 document.getElementById('closeEditModal').addEventListener('click', function () {
     document.getElementById('editScheduleModal').style.display = 'none';
 });

 // Edit Task and Schedule Form Submission
 document.getElementById('editTaskScheduleForm').addEventListener('submit', function (e) {
     e.preventDefault();
     const task = document.getElementById('editTask').value;
     const date = document.getElementById('editDate').value;
     const time = document.getElementById('editTime').value;
     const index = document.getElementById('editScheduleId').value;

     // Update task and schedule in schedule list
     schedules[index].task = task;
     schedules[index].date = date;
     schedules[index].time = time;
     updateScheduledList();
     document.getElementById('editScheduleModal').style.display = 'none';
     this.reset();
 });

 // Delete Schedule
 function deleteSchedule(index) {
     schedules.splice(index, 1);
     updateScheduledList();
 }

 // Initialize trainee list on page load
 updateTraineeList();