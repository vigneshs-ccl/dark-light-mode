// header section.
const header = document.createElement("header");

const h1 = document.createElement("h1");

const abbreviation = document.createElement("abbr");
abbreviation.title = "HyperText Markup Language";
abbreviation.innerText = "My Portfolio";
h1.appendChild(abbreviation);

// navigation
const nav = document.createElement("nav");
const unorderedList = document.createElement("ul");

const menuItems = [
  { text: "About", href: "#about" },
  { text: "Projects", href: "#projects" },
  { text: "Skills", href: "#skills" },
  { text: "blog", href: "#blog" },
  { text: "contact", href: "#contact" },
];

for (let item of menuItems) {
  const li = document.createElement("li");
  const a = document.createElement("a");

  a.textContent = item.text;
  a.setAttribute("href", item.href);

  li.appendChild(a);
  unorderedList.appendChild(li);
}

nav.appendChild(unorderedList);

const themeContainer = document.createElement("div");
themeContainer.className = "theme-container";

const themeInput = document.createElement("input");
themeInput.id = "theme-toggle";
themeInput.setAttribute("class", "checkbox");
themeInput.type = "checkbox";

const themeLabel = document.createElement("label");
themeLabel.setAttribute("for", "theme-toggle");
themeLabel.className = "checkbox-label";
themeLabel.innerHTML = `<i class="fas fa-moon"></i>
<i class="fas fa-sun"></i>`;
const themeSpan = document.createElement("span");
themeSpan.className = "ball";
themeLabel.appendChild(themeSpan);
themeContainer.append(themeInput, themeLabel);

header.append(h1, nav, themeContainer);

document.body.appendChild(header);

// ----------- ABOUT SECTION -----------
const aboutSection = document.createElement("section");
aboutSection.id = "about";

const imageContainer = document.createElement("div");
imageContainer.className = "image-container";
const myImage = document.createElement("img");

myImage.src = "./assets/myself.png";
myImage.width = "300";
imageContainer.append(myImage);

const aboutTitle = document.createElement("h2");
aboutTitle.textContent = "About Me";

const aboutArticle = document.createElement("article");
aboutArticle.className = "about-article"
const p1 = document.createElement("p");
p1.innerHTML = `Hello! I am <mark>Vignesh</mark>, a web developer passionate about building scalable apps.`;

const p2 = document.createElement("p");
p2.innerHTML = `I started coding in <time datetime="2020">2020</time>. I love <em>JavaScript</em>, <strong>React</strong>, and <u>Node.js</u>.`;

const containerWrapper = document.createElement("div");
containerWrapper.setAttribute("class","containerWrapper")
containerWrapper.append(imageContainer,aboutArticle)
aboutArticle.append(p1, p2);
aboutSection.append(aboutTitle,containerWrapper);
document.body.appendChild(aboutSection);

// ----------- PROJECT SECTION -----------
const projectSection = document.createElement("section");
projectSection.id = "projects";

const projectTitle = document.createElement("h2");
projectTitle.textContent = "Project";

const projectContainer = document.createElement("div");
projectContainer.className = "project-container";

// Figure
const figure = document.createElement("figure");
figure.title = "Gallery application github repo";
figure.style.cursor = "pointer";
const img = document.createElement("img");
img.src =
  "https://play-lh.googleusercontent.com/qjXTcCAhQxf2ifPgfsdooK74zjSZdegs5FrMhrG1zIyg9IL4RSmQG3jNfjkZ-MqFhUMX";
img.alt = "Gallery application";
img.width = 215;

img.addEventListener("click", function () {
  document.location = "https://github.com/vigneshs-ccl/Gallery_app";
});
const figcaption = document.createElement("figcaption");
figcaption.innerHTML = `Gallery Application using <code>React.js</code>`;
figure.append(img, figcaption);

// Video section
const videoDiv = document.createElement("div");
videoDiv.className = "video-section";

const iframe = document.createElement("iframe");
iframe.width = "400";
iframe.height = "215";
iframe.src = "https://www.youtube.com/embed/Vc6SFpPf-V4?si=M2U6GDwwOHjqfhzZ";
iframe.title = "YouTube video player";
iframe.frameBorder = "0";
iframe.allow =
  "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share";
iframe.allowFullscreen = true;

const videoCaption = document.createElement("figcaption");
videoCaption.textContent = "Resource Used to build this project";
videoDiv.append(iframe, videoCaption);

projectContainer.append(figure, videoDiv);
projectSection.append(projectTitle, projectContainer);
document.body.appendChild(projectSection);

// ----------- SKILLS SECTION -----------
const skillsSection = document.createElement("section");
skillsSection.id = "skills";

const skillsTitle = document.createElement("h2");
skillsTitle.textContent = "Skills";

const skillHtml = document.createElement("p");
skillHtml.innerHTML = `HTML: <progress class="html" value="70" max="100"></progress>`;

const skillCss = document.createElement("p");
skillCss.innerHTML = `CSS: <progress class="css" value="60" max="100"></progress>`;

const skillJs = document.createElement("p");
skillJs.innerHTML = `JavaScript: <meter class="js" value="5" max="10" min="0">8/10</meter>`;

const details = document.createElement("details");
const summary = document.createElement("summary");
summary.textContent = "More skills";
const more = document.createElement("p");
more.textContent = "React, TailwindCSS and Node.js";
details.append(summary, more);
const skillHead = document.createElement("div");
skillHead.appendChild(skillsTitle);
skillsSection.append(skillHead, skillHtml, skillCss, skillJs, details);
document.body.appendChild(skillsSection);

// ----------- BLOG SECTION -----------
const blogSection = document.createElement("section");
blogSection.id = "blog";

const blogTitle = document.createElement("h2");
blogTitle.textContent = "Blog";

const blogArticle = document.createElement("article");
const blogHeading = document.createElement("h3");
blogHeading.textContent = "Why I Love Web Dev";

const blogDate = document.createElement("p");
blogDate.innerHTML = `<small>Published on <time datetime="2025-09-08">Sep 8, 2025</time></small>`;

const quote = document.createElement("blockquote");
quote.textContent = "“First, solve the problem. Then, write the code”";

const codeBlock = document.createElement("pre");
const code = document.createElement("code");
code.textContent = `function greet() {\n  console.log("Hello World");\n}`;
codeBlock.appendChild(code);

blogArticle.append(blogHeading, blogDate, quote, codeBlock);


blogSection.append(blogTitle, blogArticle);
document.body.appendChild(blogSection);

// ----------- TABLE SECTION -----------
const tableSection = document.createElement("section");
const tableTitle = document.createElement("h2");
tableTitle.textContent = "My Schedule";
tableSection.id = "schedule";
const table = document.createElement("table");

const thead = document.createElement("thead");
thead.innerHTML = `<tr><th>Day</th><th>Task</th></tr>`;

const tbody = document.createElement("tbody");
const schedule = [
  ["Mon", "Learn HTML and CSS"],
  ["Tue", "Learn JavaScript"],
  ["Wed", "Learn React"],
  ["Thu", "Learn TailwindCSS"],
  ["Fri", "Build Projects"],
  ["Sat", "Learn Angular"],
];
schedule.forEach(([day, task]) => {
  const tr = document.createElement("tr");
  tr.innerHTML = `<td>${day}</td><td>${task}</td>`;
  tbody.appendChild(tr);
});

const tfoot = document.createElement("tfoot");
tfoot.innerHTML = `<tr><td colspan="2">End of Schedule</td></tr>`;

table.append(thead, tbody, tfoot);
tableSection.append(tableTitle, table);
document.body.appendChild(tableSection);

// ----------- CONTACT SECTION -----------
const contactSection = document.createElement("section");
contactSection.id = "contact";

const contactTitle = document.createElement("h2");
contactTitle.textContent = "Contact Me";

const form = document.createElement("form");

// Input fields
const formElements = [
  { label: "Name", type: "text", required: true, maxlength: 30 },
  { label: "Email", type: "email", required: true },
];

formElements.forEach((el) => {
  const div = document.createElement("div");
  div.className = "form-element";

  const label = document.createElement("label");
  label.innerHTML = `${el.label}: <span style="color:red">*</span> `;

  const input = document.createElement("input");
  input.type = el.type;
  if (el.required) input.required = true;
  if (el.maxlength) input.maxLength = el.maxlength;

  const error = document.createElement("small");
  error.className = "error";
  error.style.color = "red";
  error.style.display = "none";

  div.append(label, document.createElement("br"), input, error);
  form.appendChild(div);
});

// Select
const selectDiv = document.createElement("div");
selectDiv.className = "form-element";
selectDiv.innerHTML = `
  <label>Choose Topic: <span style="color:red">*</span></label><br/>
  <select required>
    <option value="">-- Select --</option>
    <option>General</option>
    <option>Project</option>
    <option>Collaboration</option>
  </select>
  <small class="error" style="color:red; display:none;"></small>
`;
form.appendChild(selectDiv);

// Newsletter
const newsDiv = document.createElement("div");
newsDiv.className = "form-element";
newsDiv.innerHTML = `
  <label>Newsletter: <span style="color:red">*</span> 
    <input type="checkbox" required/> Subscribe
  </label>
  <br/>
  <small class="error" style="color:red; display:none;"></small>
`;
form.appendChild(newsDiv);

// Submit
const button = document.createElement("button");
button.type = "submit";
button.textContent = "Send";
form.appendChild(button);

contactSection.append(contactTitle, form);
document.body.appendChild(contactSection);

// -------- Validation Handling --------
form.addEventListener("submit", function (e) {
  e.preventDefault(); // stop for validation
  let valid = true;

  // clear all errors first
  form.querySelectorAll(".error").forEach((el) => {
    el.style.display = "none";
    el.textContent = "";
  });

  // Name
  const nameInput = form.querySelector('input[type="text"]');
  const nameError = nameInput.nextElementSibling;
  if (!nameInput.value.trim()) {
    nameError.textContent = "Name is required";
    nameError.style.display = "block";
    valid = false;
  }

  // Email
  const emailInput = form.querySelector('input[type="email"]');
  const emailError = emailInput.nextElementSibling;
  if (!emailInput.value.trim()) {
    emailError.textContent = "Email is required";
    emailError.style.display = "block";
    valid = false;
  } else if (!/^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(emailInput.value)) {
    emailError.textContent = "Enter a valid email";
    emailError.style.display = "block";
    valid = false;
  }

  // Select
  const select = form.querySelector("select");
  const selectError = select.nextElementSibling;
  if (!select.value) {
    selectError.textContent = "Please choose a topic";
    selectError.style.display = "block";
    valid = false;
  }

  // Newsletter
  const checkbox = form.querySelector('input[type="checkbox"]');
  const checkboxError = checkbox.closest("div").querySelector(".error");
  if (!checkbox.checked) {
    checkboxError.textContent = "You must subscribe to proceed";
    checkboxError.style.display = "block";
    valid = false;
  }

  if (valid) {
    alert("Form submitted successfully ");
    form.reset();
  }
});

// ----------- FOOTER -----------
const footer = document.createElement("footer");
const address = document.createElement("address");
address.innerHTML = `Contact: <a href="mailto:vigneshkumarb.sc2004@gmail.com">vigneshkumarb.sc2004@gmail.com</a>`;
const copy = document.createElement("p");
copy.innerHTML = `© <time>2025</time> My Portfolio`;

footer.append(address, copy);
document.body.appendChild(footer);
