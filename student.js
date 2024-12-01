// Sidebar Toggle
const menuIcon = document.getElementById("menu-icon");
const sidebar = document.getElementById("sidebar");

menuIcon.addEventListener("click", () => {
  if (sidebar.classList.contains("hidden")) {
    sidebar.classList.remove("hidden");
    sidebar.style.left = "0";
  } else {
    sidebar.style.left = "-250px";
    setTimeout(() => sidebar.classList.add("hidden"), 300); // Wait for transition
  }
});

// Join Classroom Form Toggle
const joinClassBtn = document.getElementById("join-class-btn");
const joinClassForm = document.getElementById("join-class-form");

joinClassBtn.addEventListener("click", () => {
  joinClassForm.classList.toggle("hidden");
});

// Placeholder for joining a class
const submitClassCode = document.getElementById("submit-class-code");
submitClassCode.addEventListener("click", () => {
  const classCode = document.getElementById("class-code").value;
  if (classCode) {
    const classList = document.getElementById("class-list");
    const newClass = document.createElement("p");
    newClass.textContent = `Class Code: ${classCode}`;
    classList.appendChild(newClass);
    document.getElementById("class-code").value = ""; // Clear input
    joinClassForm.classList.add("hidden");
  } else {
    alert("Please enter a class code.");
  }
});
