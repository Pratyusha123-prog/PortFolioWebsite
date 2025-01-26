document.getElementById('about-btn').addEventListener('click', function () {
    document.getElementById('content').innerHTML = `
      <h2>About Me</h2>
      <p>Hello! I'm Pratyusha, a passionate web developer with experience in creating dynamic and responsive websites. I love coding and enjoy solving complex problems with simple and efficient solutions.</p>
    `;
  });
  
  document.getElementById('education-btn').addEventListener('click', function () {
    document.getElementById('content').innerHTML = `
      <h2>Educational Qualifications</h2>
      <ul>
        <li>2021-2025: B.Tech in Computer Science Engineering from G Pulla Reddy Engineering College (CGPA: 8.75)</li>
        <li>2021: 12th from Narayana Junior College, Kurnool (96%)</li>
        <li>2019: 10th from St. Joseph’s English School, Kurnool (CGPA: 8.88)</li>
      </ul>
    `;
  });
  
  document.getElementById('skills-btn').addEventListener('click', function () {
    document.getElementById('content').innerHTML = `
      <h2>Skills</h2>
      <p>C, Java, Python, SQL, HTML, CSS, Javascript, Node.js, MongoDB, DSA</p>
    `;
  });
  
  document.getElementById('certifications-btn').addEventListener('click', function () {
    document.getElementById('content').innerHTML = `
      <h2>Certifications</h2>
      <ul>
        <li>Associate in IT Foundation Skills (Java) - Infosys Springboard</li>
        <li>Git Foundation Certification - Infosys Springboard</li>
        <li>Python Foundation Certification - Infosys Springboard</li>
        <li>HTML Training-Spoken Tutorial Project(IIT Bombay)</li>
      </ul>
    `;
  });
  
  document.getElementById('projects-btn').addEventListener('click', function () {
    document.getElementById('content').innerHTML = `
      <h2>Projects</h2>
      <ul>
        <li><a href="https://github.com/Pratyusha123-prog/MoneyTracker/" target="_blank">Money Tracker Website</a></li>
        <li><a href="https://github.com/Pratyusha123-prog/tech-care-ui?tab=readme-ov-file" target="_blank">Patient Dashboard System</a></li>
        <li>Phishing Detection using ML</li>
      </ul>
    `;
  });
  
  document.getElementById('contact-btn').addEventListener('click', function () {
    document.getElementById('content').innerHTML = `
      <h2>Contact Details</h2>
      <p>Phone: +91-9642059678</p>
      <p>Email: kuruvapratyusha123@gmail.com</p>
      <p>LinkedIn: https://www.linkedin.com/in/kuruva-prathyusha-606546269/</p>
    `;
  });
  