// Toggle Sidebar
const menuBtn = document.getElementById('menu-icon');
const sidebar = document.querySelector('.sidebar');

menuBtn.addEventListener('click', (e) => {
    sidebar.classList.toggle('hidden');
    e.stopPropagation(); // Prevent triggering the click event on the document
});

// Hide Sidebar on Outside Click
document.addEventListener('click', (e) => {
    if (!sidebar.contains(e.target) && !menuBtn.contains(e.target)) {
        sidebar.classList.add('hidden');
    }
});


// Dynamic Data Updates
const updateDashboard = () => {
    document.getElementById('total-teachers').textContent = Math.floor(Math.random() * 10) + 1;
    document.getElementById('total-students').textContent = Math.floor(Math.random() * 200) + 50;
    document.getElementById('active-classrooms').textContent = Math.floor(Math.random() * 15) + 1;
    document.getElementById('tasks-due').textContent = Math.floor(Math.random() * 5) + 1;
};

// Call updateDashboard every 5 seconds
setInterval(updateDashboard, 5000);

// Charts Setup
const ctxAttendance = document.getElementById('weekly-attendance-chart').getContext('2d');
const ctxTasks = document.getElementById('daily-tasks-chart').getContext('2d');

// Weekly Attendance Chart
const attendanceChart = new Chart(ctxAttendance, {
    type: 'line',
    data: {
        labels: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri'],
        datasets: [{
            label: 'Attendance',
            data: [50, 60, 55, 70, 65],
            borderColor: '#5a698e',
            backgroundColor: 'rgba(90, 105, 142, 0.2)',
            tension: 0.4,
        }]
    },
    options: {
        responsive: true,
        plugins: {
            legend: { display: false }
        }
    }
});

// Daily Tasks Chart
const tasksChart = new Chart(ctxTasks, {
    type: 'bar',
    data: {
        labels: ['Math', 'Science', 'English', 'History', 'PE'],
        datasets: [{
            label: 'Tasks',
            data: [5, 3, 2, 4, 1],
            backgroundColor: '#5a698e',
        }]
    },
    options: {
        responsive: true,
        plugins: {
            legend: { display: false }
        }
    }
});
