const navlinks = document.querySelectorAll(".js-nav");

navlinks.forEach((navlink) => {
  navlink.addEventListener("click", () => {
    // Remove 'opacity-100' from all navlines on click
    document.querySelectorAll(".js-navline").forEach((line) => {
      line.classList.remove("opacity-100");
      // Ensure the navline resets to hidden
      line.classList.add("opacity-0");
    });

    // Add 'opacity-100' to the clicked navline
    const navline = navlink.querySelector(".js-navline");
    if (navline) {
      navline.classList.remove("opacity-0");
      // Make sure it becomes visible
      navline.classList.add("opacity-100");
    }
  });
});

// news section
function myNews() {
  const profile = document.querySelector(".js-profile");
  const maincontent = document.querySelectorAll(".js-forNews");
  const about = document.querySelector(".js-aboutsection");
  const myNews = document.querySelector(".js-mynews");
  const contentHolder = document.querySelector(".js-main");
  const smallAbout = document.querySelector(".js-smallAbout");

  smallAbout.classList.add("hidden");
  profile.classList.add("hidden");
  about.classList.remove("lg:block");
  about.classList.add("hidden");

  maincontent.forEach((element) => {
    element.classList.add("hidden");
  });

  myNews.classList.remove("hidden");
  contentHolder.classList.remove("border-r-2", "border-r-[#e8e8e8]");
}

const modals = document.querySelectorAll(".modal");
const openbtn = document.querySelectorAll(".open-btn");
const closebtn = document.querySelectorAll(".close-btn");

openbtn.forEach((btn, index) => {
  btn.addEventListener("click", () => {
    modals[index].showModal();
  });
});

closebtn.forEach((btn, index) => {
  btn.addEventListener("click", () => {
    modals[index].close();
  });
});

const filterBtn = document.querySelectorAll(".filter-btn");
const sections = document.querySelectorAll(".ide, .pm, .webdev");
const aboutMe = document.querySelector(".js-aboutMe");
const longlogo = document.querySelector(".js-longLogo");
const smallAbout = document.querySelector(".js-smallAbout");
const newsSect = document.querySelector(".js-mynews");

filterBtn.forEach((btn) => {
  btn.addEventListener("click", () => {
    const filter = btn.getAttribute("data-filter");
    const active = btn.classList.contains("active");
    const work = document.querySelector(".js-work");

    // remove active class
    filterBtn.forEach((btn) => {
      btn.classList.remove("active", "border-2", "border-[#0a0a0a]");
    });

    if (active) {
      // if btn is active show original content
      sections.forEach((section) => {
        section.classList.remove("hidden");
      });
      // filter for the work section
      if (work.classList.contains("work")) {
        newsSect.classList.add("hidden");
        longlogo.classList.remove("hidden");
        smallAbout.classList.add("hidden");
      } else {
        aboutMe.classList.remove("hidden");
        longlogo.classList.remove("hidden");
        smallAbout.classList.remove("hidden");
      }
    } else {
      aboutMe.classList.add("hidden");
      longlogo.classList.add("hidden");
      smallAbout.classList.add("hidden");

      // show filter section
      sections.forEach((section) => {
        // show matching work
        if (section.classList.contains(filter)) {
          section.classList.remove("hidden");

          console.log("wordks");
        } else {
          section.classList.add("hidden");
        }
      });
      btn.classList.add("active", "border-2", "border-[#0a0a0a]");
    }
  });
});

function runimages() {
  const profile = document.querySelector(".js-profile");
  const maincontent = document.querySelector(".js-maincontent");
  profile.classList.add("hidden");
  maincontent.classList.add("hidden");

  const image = document.querySelector(".js-imgSection");
  image.classList.remove("hidden");
  image.innerHTML = `<div class="columns-[300px] px-4 py-10 space-y-5 max-md:columns-[100px] ">
      
        <img
          src="assets/images/689C9EC4-91A2-4021-9837-ED38749D9CD8.jpg "
          alt=""
          class="rounded-lg" 
        />
        
        <img src="assets/images/grad.jpg " alt="" class="rounded-lg" />
        <img src="assets/images/firstyear.jpg " alt="" class="rounded-lg" />
        <img src="assets/images/image (22).png " alt="" class="rounded-lg" />
        <img src="assets/images/image (23).png " alt="" class="rounded-lg" />
        <img src="assets/images/image (24).png " alt="" class="rounded-lg" />
        <img src="assets/images/image (27).png " alt="" class="rounded-lg"  />
        <img src="assets/images/image (28).png " alt="" class="rounded-lg"  />
        <img src="assets/images/image (29).png " alt="" class="rounded-lg" />

        <img src="assets/images/wk (1).jpg " alt="" class="rounded-lg" />
        <img src="assets/images/image (21).png " alt="" class="rounded-lg" />
        <img src="assets/images/MicrosoftTeams-image (26) 1.jpg" alt="" class="rounded-lg">
        <img src="assets/images/DSC08945 1.jpg" alt="" class="rounded-lg">
        <img src="assets/images/hi..2.jpg" alt="" class="rounded-lg">
        <img src="assets/images/hi..1.jpg" alt="" class="rounded-lg">
        <img src="assets/images/hi..5 1.jpg" alt="" class="rounded-lg">
        <img src="assets/images/head 1.jpg" alt="" class="rounded-lg">
        <img src="assets/images/image 23.jpg" alt="" class="rounded-lg">
        <img src="assets/images/dee5.jpg" alt="" class="rounded-lg">
        <img src="assets/images/dee3 1.jpg" alt="" class="rounded-lg">
        <img src="assets/images/dee4.jpg" alt="" class="rounded-lg">
        <img src="assets/images/rediones5 1.jpg" alt="" class="rounded-lg">
        <img src="assets/images/RWR5-20240907-HHS-DIPLOMERING-IDE-VT-JWP-101.jpg" alt="" class="rounded-lg">
        <img src="assets/images/RWR5-20240907-HHS-DIPLOMERING-IDE-VT-JWP-100.jpg" alt="" class="rounded-lg">
        <img src="assets/images/Camera_render 1.jpg" alt="" class="rounded-lg">
      </div>`;
}

function runProjects() {
  const aboutsection = document.querySelector(".js-aboutsection");
  const smallaboutsect = document.querySelector(".js-smallAbout");
  const faq = document.querySelector(".js-faq");
  const mainLine = document.querySelector(".js-main");
  const aboutMe = document.querySelector(".js-aboutMe");
  const profile = document.querySelector(".js-profile");
  const maincontent = document.querySelector(".js-maincontent");
  const image = document.querySelector(".js-imgSection");
  const longlogo = document.querySelector(".js-longLogo");
  const work = document.querySelector(".js-work");
  const contentholder = document.querySelectorAll(".js-forNews");
  const news = document.querySelector(".js-mynews");

  contentholder.forEach((element) => {
    element.classList.remove("hidden");
  });
  image.classList.add("hidden");
  work.classList.add("work");
  profile.classList.remove("hidden");
  maincontent.classList.remove("hidden");
  longlogo.classList.add("hidden");
  aboutsection.classList.add("hidden");
  aboutsection.classList.remove("lg:block");
  faq.classList.add("hidden");
  aboutMe.classList.add("hidden");
  smallaboutsect.classList.add("hidden");

  mainLine.classList.remove("border-r-2", "border-r-[#e8e8e8]");

  if (!news.classList.contains("hidden")) {
    news.classList.add("hidden");
  }

  const joboption = document.querySelectorAll(".cursor-pointer");

  joboption.forEach((job) => {
    if (job.classList.contains("active")) {
      const filter = job.getAttribute("data-filter");
      const sections = document.querySelectorAll(".ide, .pm, .webdev");
      sections.forEach((section) => {
        if (section.classList.contains(filter)) {
          section.classList.remove("hidden");

          console.log("wordks");
        } else {
          section.classList.add("hidden");
        }
        console.log(filter);
      });
    }
  });

  console.log("works");
}

// faq starts here
const faqs = [
  // question 1 starts
  {
    question: "What is your approach to managing complex projects?",
    answer:
      "My approach involves breaking down the project into manageable tasks, setting clear milestones, and prioritizing based on urgency and impact. I focus on consistent communication with stakeholders to ensure alignment at every phase.",
    subQuestions: [
      {
        subQuestion: "How do you prioritize tasks in a high-stakes project?",
        subAnswer:
          "I assess urgency and impact, then organize tasks to ensure that high-priority items receive immediate focus.",
      },
      {
        subQuestion: "Why do you have experience in three different roles?",
        subAnswer:
          "I believe that having skills across Project Management, Web Development, and Industrial Design Engineering makes me a more versatile professional and allows me to tackle complex projects from multiple perspectives.",
      },
      {
        subQuestion: "What project management tools do you typically use?",
        subAnswer:
          "I often use Excel and Notion due to the expense of tools like Asana, Jira, or Trello but i do have experince using them during my time at the Formula Cruiser. For communication, I rely on Teams, Google Meet, or WhatsApp.",
      },
    ],
  },

  // question 2 starts
  {
    question:
      "How do you ensure that your websites are user-friendly and responsive?",
    answer:
      "I prioritize simplicity and intuitive design. I use a mobile-first approach, test on multiple devices, and implement responsive layouts to ensure a consistent user experience across screen sizes.",
    subQuestions: [
      {
        subQuestion: "What technologies do you use for front-end development?",
        subAnswer:
          "I frequently work with HTML, CSS (Tailwind CSS), and JavaScript, alongside libraries like React and Next.js",
      },
      {
        subQuestion: "How do you optimize a website for speed and performance?",
        subAnswer:
          "I use lazy loading, and optimize images to minimize load times.",
      },
    ],
  },
  // question 3 starts
  {
    question: "What is your process for designing user-centered products?",
    answer:
      "My process begins with understanding user needs through research and translating findings into design solutions. I balance form and function to create products that are both practical and appealing.",
    subQuestions: [
      {
        subQuestion: "How do you conduct user research for a project?",
        subAnswer:
          "I use surveys, interviews, and usability tests to understand user needs and preferences.",
      },
      {
        subQuestion:
          "How do you balance aesthetics and functionality in design?",
        subAnswer:
          "I always aim to create designs that are visually appealing but also practical and user-friendly.",
      },
    ],
  },
  // question 4 starts
  {
    question: "How can someone contact you for collaboration?",
    answer: `You can reach me through <a href="mailto:sanyaolukolawole202@gmail.com" target="_blank" rel="noopener noreferrer"class="text-[#1036FF]">email</a> or connect with me on <a href="https://www.linkedin.com/in/kolawole-sanyaolu-31812419a/" target="_blank" rel="noopener noreferrer"class="text-[#1036FF]">LinkedIn</a>. I'm always open to discussing potential collaborations!`,
    subQuestions: [
      {
        subQuestion: "Do you offer freelance services?",
        subAnswer: `Yes, I'm open to freelance opportunities. You can reach me through <a href="mailto:sanyaolukolawole202@gmail.com" target="_blank" rel="noopener noreferrer"class="text-[#1036FF]">email</a> or connect with me on <a href="https://www.linkedin.com/in/kolawole-sanyaolu-31812419a/" target="_blank" rel="noopener noreferrer"class="text-[#1036FF]">LinkedIn</a>.`,
      },

      {
        subQuestion: "What inspired the unique design of your portfolio?",
        subAnswer:
          "My inspiration came from Oliver Edwards 2020 Groogle's portfolio.",
      },
    ],
  },
];

const faqContainer = document.querySelector(".js-faqs");

function createFaqItem(questionText, answerText = "", isMain = true) {
  const faqItem = document.createElement("div");
  faqItem.classList.add("border-b-2", "border-b-[#0a0a0a]", "py-[12px]");

  faqItem.innerHTML = `
    <div class="flex justify-between question">
      <h5 class="font-bold">${questionText}</h5>
      <img src="../assets/logo/arrow-drop-down-line (1).svg" alt="faq toggle down" class="arrow-down"/>
      <img src="../assets/logo/arrow-drop-up-line.svg" alt="faq toggle up" class="arrow-up hidden"/>
    </div>
    <p class="hidden answer py-2">${answerText}</p>
  `;

  // Event handling for main or sub-questions
  faqItem.querySelector(".question").addEventListener("click", () => {
    const answerElement = faqItem.querySelector(".answer");
    const arrowDown = faqItem.querySelector(".arrow-down");
    const arrowUp = faqItem.querySelector(".arrow-up");

    // Toggle the answer visibility
    answerElement.classList.toggle("hidden");

    // Toggle visibility of the arrows
    arrowDown.classList.toggle("hidden");
    arrowUp.classList.toggle("hidden");
  });

  return faqItem;
}

// Load FAQs and sub-questions
faqs.forEach((faq) => {
  // Create main FAQ item and append to the container
  const mainFaqItem = createFaqItem(faq.question, faq.answer);
  faqContainer.appendChild(mainFaqItem);

  let subQuestionsCreated = false; // Flag to check if sub-questions are generated

  // Event listener for main question to load sub-questions on first click
  mainFaqItem.querySelector(".question").addEventListener("click", () => {
    if (!subQuestionsCreated) {
      faq.subQuestions.forEach((sub) => {
        const subFaqItem = createFaqItem(sub.subQuestion, sub.subAnswer, false);
        subFaqItem.classList.add("sub-question");
        faqContainer.insertBefore(subFaqItem, mainFaqItem.nextSibling);
      });
      subQuestionsCreated = true; // Prevent re-adding sub-questions on subsequent clicks
    }
  });
});

function rmvlink() {
  const links = document.querySelectorAll(".rmvlink");

  links.forEach((link) => {
    if (window.innerWidth <= 768) {
      link.removeAttribute("href");
    } else {
      link.setAttribute("href", link.dataset.href);
    }
  });
}
rmvlink();
window.addEventListener("resize", rmvlink);
