const user = {
    name: "Farin",
    rank: 12,
    score: 85,
    tests: 3,
    cv: true
  };
  
  // Display User Data
  document.getElementById("username").innerText = user.name;
  document.getElementById("rank").innerText = "#" + user.rank;
  document.getElementById("score").innerText = user.score;
  document.getElementById("tests").innerText = user.tests;
  document.getElementById("cvStatus").innerText = user.cv ? "Uploaded ✅" : "Not Uploaded ❌";
  
  // Notifications Data
  const notifications = [
    "🎉 You passed the IQ Test!",
    "📄 Upload your CV to apply for jobs",
    "🔥 New job posted: Frontend Developer"
  ];
  
  const container = document.getElementById("notificationList");
  
  // Render Notifications
  notifications.forEach(note => {
    const div = document.createElement("div");
    div.classList.add("notification");
    div.innerText = note;
    container.appendChild(div);
  });
  
  // Navigation Function
  function goTo(page){
    window.location.href = page;
  }