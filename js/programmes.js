const ITEMS_PER_PAGE = 28; // 7 rows × 4 columns
let currentPage = 1;
let filteredProgrammes = [];

const programmes = [
  // School of Business and Digital Technologies
  { name: "AA Film and Video Production", faculty: "School of Business and Digital Technologies", type: "AA", description: "Explore the fundamentals of film and video production, including shooting, editing, and storytelling.", duration: "2 years", entryRequirements: "High School Diploma" },
  { name: "AA Literatures in English", faculty: "School of Business and Digital Technologies", type: "AA", description: "Study literary works in English with analysis and interpretation skills.", duration: "2 years", entryRequirements: "High School Diploma" },
  { name: "AA Performing Arts: Music", faculty: "School of Business and Digital Technologies", type: "AA", description: "Develop performance and music theory skills for careers in music and entertainment.", duration: "2 years", entryRequirements: "High School Diploma" },
  { name: "AAS Business Administration", faculty: "School of Business and Digital Technologies", type: "AAS", description: "Prepare for administrative roles in business with practical skills.", duration: "2 years", entryRequirements: "High School Diploma" },
  { name: "AAS in Information Technology Webpage Development", faculty: "School of Business and Digital Technologies", type: "AAS", description: "Learn web development, coding, and website design.", duration: "2 years", entryRequirements: "High School Diploma" },
  { name: "AAS Information Technology", faculty: "School of Business and Digital Technologies", type: "AAS", description: "Comprehensive IT training for business and technology careers.", duration: "2 years", entryRequirements: "High School Diploma" },
  { name: "AAS Library and Information Studies", faculty: "School of Business and Digital Technologies", type: "AAS", description: "Training in library management, research, and information systems.", duration: "2 years", entryRequirements: "High School Diploma" },
  { name: "AS Management Studies for the Protective Services", faculty: "School of Business and Digital Technologies", type: "AS", description: "Develop management skills for law enforcement and protective services.", duration: "2 years", entryRequirements: "High School Diploma" },
  { name: "BA Accounting", faculty: "School of Business and Digital Technologies", type: "BA", description: "Study accounting principles and prepare for careers in finance and auditing.", duration: "3 years", entryRequirements: "High School Diploma" },
  { name: "BASC in Information Technology Webpage Development", faculty: "School of Business and Digital Technologies", type: "BASC", description: "Advanced training in web development and IT.", duration: "3 years", entryRequirements: "High School Diploma" },
  { name: "BBA Human Resource Management", faculty: "School of Business and Digital Technologies", type: "BBA", description: "Learn HR principles, organizational behaviour, and workforce management.", duration: "3 years", entryRequirements: "High School Diploma" },
  { name: "BBA Management and Entrepreneurship", faculty: "School of Business and Digital Technologies", type: "BBA", description: "Develop skills to start and manage businesses.", duration: "3 years", entryRequirements: "High School Diploma" },
  { name: "BBA Marketing", faculty: "School of Business and Digital Technologies", type: "BBA", description: "Focus on marketing strategies, consumer behaviour, and digital marketing.", duration: "3 years", entryRequirements: "High School Diploma" },
  { name: "BSc Information Technology", faculty: "School of Business and Digital Technologies", type: "BSc", description: "Comprehensive IT knowledge with practical and theoretical skills.", duration: "3 years", entryRequirements: "High School Diploma" },
  { name: "BSc Library and Information Science", faculty: "School of Business and Digital Technologies", type: "BSc", description: "Advanced library science studies for information management careers.", duration: "3 years", entryRequirements: "High School Diploma" },
  { name: "BSc Networking", faculty: "School of Business and Digital Technologies", type: "BSc", description: "Learn computer networking, protocols, and infrastructure management.", duration: "3 years", entryRequirements: "High School Diploma" },
  { name: "Certificate in CISCO CCNA", faculty: "School of Business and Digital Technologies", type: "Certificate", description: "Cisco networking certification covering CCNA fundamentals.", duration: "6 months", entryRequirements: "High School Diploma" },
  { name: "Certificate in Film and Video Production", faculty: "School of Business and Digital Technologies", type: "Certificate", description: "Short course in film and video production basics.", duration: "6 months", entryRequirements: "High School Diploma" },
  { name: "Certificate in Information Technology Webpage Development", faculty: "School of Business and Digital Technologies", type: "Certificate", description: "Basic web development training.", duration: "6 months", entryRequirements: "High School Diploma" },
  { name: "Certificate in Music Performance", faculty: "School of Business and Digital Technologies", type: "Certificate", description: "Short course in musical performance.", duration: "6 months", entryRequirements: "High School Diploma" },
  { name: "Certificate in Records Management", faculty: "School of Business and Digital Technologies", type: "Certificate", description: "Training in managing records and documentation.", duration: "6 months", entryRequirements: "High School Diploma" },
  { name: "Certificate in Supervisory Management", faculty: "School of Business and Digital Technologies", type: "Certificate", description: "Supervisory skills and team management.", duration: "6 months", entryRequirements: "High School Diploma" },
  { name: "Diploma in Supervisory Management", faculty: "School of Business and Digital Technologies", type: "Diploma", description: "Advanced supervisory management training.", duration: "1 year", entryRequirements: "High School Diploma" },

  // Ken Gordon School of Communication, Creative, and Digital Media
  { name: "AA Journalism", faculty: "Ken Gordon School of Communication, Creative, and Digital Media", type: "AA", description: "Introduction to journalism and media writing.", duration: "2 years", entryRequirements: "High School Diploma" },
  { name: "AA Spanish", faculty: "Ken Gordon School of Communication, Creative, and Digital Media", type: "AA", description: "Foundational Spanish language skills.", duration: "2 years", entryRequirements: "High School Diploma" },
  { name: "AAS Advertising and Promotions", faculty: "Ken Gordon School of Communication, Creative, and Digital Media", type: "AAS", description: "Practical advertising and promotions training.", duration: "2 years", entryRequirements: "High School Diploma" },
  { name: "AAS Graphic Design", faculty: "Ken Gordon School of Communication, Creative, and Digital Media", type: "AAS", description: "Graphic design skills for print and digital media.", duration: "2 years", entryRequirements: "High School Diploma" },
  { name: "AAS Journalism and Public Relations", faculty: "Ken Gordon School of Communication, Creative, and Digital Media", type: "AAS", description: "Integrated journalism and PR skills.", duration: "2 years", entryRequirements: "High School Diploma" },
  { name: "AAS Spanish for Business", faculty: "Ken Gordon School of Communication, Creative, and Digital Media", type: "AAS", description: "Spanish language applied to business contexts.", duration: "2 years", entryRequirements: "High School Diploma" },
  { name: "BA Graphic Design", faculty: "Ken Gordon School of Communication, Creative, and Digital Media", type: "BA", description: "Advanced study in graphic design.", duration: "3 years", entryRequirements: "High School Diploma" },
  { name: "BA Mass Communications", faculty: "Ken Gordon School of Communication, Creative, and Digital Media", type: "BA", description: "Mass communication theory and media practice.", duration: "3 years", entryRequirements: "High School Diploma" },
  { name: "Certificate in Advertising and Promotions", faculty: "Ken Gordon School of Communication, Creative, and Digital Media", type: "Certificate", description: "Short course in advertising and promotions.", duration: "6 months", entryRequirements: "High School Diploma" },
  { name: "Certificate in Graphic Design", faculty: "Ken Gordon School of Communication, Creative, and Digital Media", type: "Certificate", description: "Introduction to graphic design.", duration: "6 months", entryRequirements: "High School Diploma" },
  { name: "Certificate in Journalism", faculty: "Ken Gordon School of Communication, Creative, and Digital Media", type: "Certificate", description: "Journalism basics.", duration: "6 months", entryRequirements: "High School Diploma" },
  { name: "Certificate in Photography and Video", faculty: "Ken Gordon School of Communication, Creative, and Digital Media", type: "Certificate", description: "Photography and videography basics.", duration: "6 months", entryRequirements: "High School Diploma" },
  { name: "Certificate in Public Relations", faculty: "Ken Gordon School of Communication, Creative, and Digital Media", type: "Certificate", description: "PR fundamentals.", duration: "6 months", entryRequirements: "High School Diploma" },
  { name: "Diploma in Advertising and Promotions", faculty: "Ken Gordon School of Communication, Creative, and Digital Media", type: "Diploma", description: "Advanced advertising and promotions training.", duration: "1 year", entryRequirements: "High School Diploma" },
  { name: "Essential Skills for the Workplace Certificate", faculty: "Ken Gordon School of Communication, Creative, and Digital Media", type: "Essential Skills Certificate", description: "Develop key workplace skills.", duration: "6 months", entryRequirements: "High School Diploma" },

  // School of Liberal Arts, Education and Digital Humanities
  { name: "AA Psychology", faculty: "School of Liberal Arts, Education and Digital Humanities", type: "AA", description: "Introduction to psychology and human behaviour.", duration: "2 years", entryRequirements: "High School Diploma" },
  { name: "AAS in Criminal Justice", faculty: "School of Liberal Arts, Education and Digital Humanities", type: "AAS", description: "Foundations of criminal justice and law enforcement.", duration: "2 years", entryRequirements: "High School Diploma" },
  { name: "AAS Social Work", faculty: "School of Liberal Arts, Education and Digital Humanities", type: "AAS", description: "Training in social work and community services.", duration: "2 years", entryRequirements: "High School Diploma" },
  { name: "AS Mathematics", faculty: "School of Liberal Arts, Education and Digital Humanities", type: "AS", description: "Foundational mathematics skills.", duration: "2 years", entryRequirements: "High School Diploma" },
  { name: "BA Criminal Justice", faculty: "School of Liberal Arts, Education and Digital Humanities", type: "BA", description: "Advanced study in criminal justice.", duration: "3 years", entryRequirements: "High School Diploma" },
  { name: "BA in Early Childhood Care and Education", faculty: "School of Liberal Arts, Education and Digital Humanities", type: "BA", description: "Early childhood education skills.", duration: "3 years", entryRequirements: "High School Diploma" },
  { name: "BSc Psychology", faculty: "School of Liberal Arts, Education and Digital Humanities", type: "BSc", description: "Comprehensive study of psychology.", duration: "3 years", entryRequirements: "High School Diploma" },
  { name: "BSW Social Work", faculty: "School of Liberal Arts, Education and Digital Humanities", type: "BSW", description: "Advanced social work training.", duration: "3 years", entryRequirements: "High School Diploma" },
  { name: "Certificate in Criminal Justice", faculty: "School of Liberal Arts, Education and Digital Humanities", type: "Certificate", description: "Short course in criminal justice.", duration: "6 months", entryRequirements: "High School Diploma" },
  { name: "Certificate in Early Childhood Care and Education", faculty: "School of Liberal Arts, Education and Digital Humanities", type: "Certificate", description: "Short course in early childhood education.", duration: "6 months", entryRequirements: "High School Diploma" },

  // School of Nursing, Health, and Medical Technologies
  { name: "AAS General Nursing", faculty: "School of Nursing, Health, and Medical Technologies", type: "AAS", description: "Training for general nursing practice.", duration: "2 years", entryRequirements: "High School Diploma" },
  { name: "AAS Medical Laboratory Technology", faculty: "School of Nursing, Health, and Medical Technologies", type: "AAS", description: "Laboratory skills for medical diagnostics.", duration: "2 years", entryRequirements: "High School Diploma" },
  { name: "AAS Psychiatric Nursing", faculty: "School of Nursing, Health, and Medical Technologies", type: "AAS", description: "Mental health nursing skills.", duration: "2 years", entryRequirements: "High School Diploma" },
  { name: "Advanced Certificate in Special Needs and Inclusive Education", faculty: "School of Nursing, Health, and Medical Technologies", type: "Advanced Certificate", description: "Training in inclusive education practices.", duration: "1 year", entryRequirements: "High School Diploma" },
  { name: "Advanced Diploma in Epidemiology and Disease Surveillance", faculty: "School of Nursing, Health, and Medical Technologies", type: "Advanced Diploma", description: "Advanced study in disease control and epidemiology.", duration: "1 year", entryRequirements: "High School Diploma" },
  { name: "Advanced Diploma in Midwifery", faculty: "School of Nursing, Health, and Medical Technologies", type: "Advanced Diploma", description: "Training in midwifery practices.", duration: "1 year", entryRequirements: "High School Diploma" },
  { name: "BSc General Nursing", faculty: "School of Nursing, Health, and Medical Technologies", type: "BSc", description: "Advanced general nursing training.", duration: "3 years", entryRequirements: "High School Diploma" },
  { name: "BSc Medical Laboratory Technology", faculty: "School of Nursing, Health, and Medical Technologies", type: "BSc", description: "Advanced laboratory technology training.", duration: "3 years", entryRequirements: "High School Diploma" },
  { name: "BSc Psychiatric Nursing", faculty: "School of Nursing, Health, and Medical Technologies", type: "BSc", description: "Psychiatric nursing advanced training.", duration: "3 years", entryRequirements: "High School Diploma" },
  { name: "BSc Radiography", faculty: "School of Nursing, Health, and Medical Technologies", type: "BSc", description: "Radiography skills training.", duration: "3 years", entryRequirements: "High School Diploma" },
  { name: "Certificate in Pharmacy Assisting", faculty: "School of Nursing, Health, and Medical Technologies", type: "Certificate", description: "Short course in pharmacy assisting.", duration: "6 months", entryRequirements: "High School Diploma" },
  { name: "Certificate in Phlebotomy", faculty: "School of Nursing, Health, and Medical Technologies", type: "Certificate", description: "Basic phlebotomy skills.", duration: "6 months", entryRequirements: "High School Diploma" },
  { name: "Certificate in Sonography for Midwives", faculty: "School of Nursing, Health, and Medical Technologies", type: "Certificate", description: "Training in sonography for midwives.", duration: "6 months", entryRequirements: "High School Diploma" },
  { name: "Diploma in District Health Visiting", faculty: "School of Nursing, Health, and Medical Technologies", type: "Diploma", description: "District health visiting skills.", duration: "1 year", entryRequirements: "High School Diploma" },
  { name: "Postgraduate Diploma in Health Systems and Health Policy", faculty: "School of Nursing, Health, and Medical Technologies", type: "Postgraduate Diploma", description: "Advanced postgraduate study in health systems.", duration: "1 year", entryRequirements: "BSc in relevant field" },

  // School of Workforce Enhancement and Development
  { name: "AAS CAT Reporting", faculty: "School of Workforce Enhancement and Development", type: "AAS", description: "Training in CAT reporting systems.", duration: "2 years", entryRequirements: "High School Diploma" },
  { name: "Advanced Diploma in Food Inspection", faculty: "School of Workforce Enhancement and Development", type: "Advanced Diploma", description: "Training in food safety and inspection.", duration: "1 year", entryRequirements: "High School Diploma" },
  { name: "Advanced Diploma in Port Health", faculty: "School of Workforce Enhancement and Development", type: "Advanced Diploma", description: "Port health and safety training.", duration: "1 year", entryRequirements: "High School Diploma" },
  { name: "Advanced Diploma in Vector Control", faculty: "School of Workforce Enhancement and Development", type: "Advanced Diploma", description: "Training in vector surveillance and control.", duration: "1 year", entryRequirements: "High School Diploma" },
  { name: "Certificate in Court Transcription", faculty: "School of Workforce Enhancement and Development", type: "Certificate", description: "Transcription skills for court proceedings.", duration: "6 months", entryRequirements: "High School Diploma" },
  { name: "Certificate in Tour Guiding", faculty: "School of Workforce Enhancement and Development", type: "Certificate", description: "Tour guiding training and techniques.", duration: "6 months", entryRequirements: "High School Diploma" },
  { name: "COMPASS Certificate", faculty: "School of Workforce Enhancement and Development", type: "Essential Skills Certificate", description: "Workplace skills for employability.", duration: "6 months", entryRequirements: "High School Diploma" },
  { name: "Diploma in Tourism and Destination Management", faculty: "School of Workforce Enhancement and Development", type: "Diploma", description: "Training in tourism management.", duration: "1 year", entryRequirements: "High School Diploma" },

  // School of Environment Circular Economy and Sustainability
  { name: "AAS Environmental Health", faculty: "School of Environment Circular Economy and Sustainability", type: "AAS", description: "Comprehensive training in environmental health, circular economy principles, and sustainable practices.", duration: "2 years", entryRequirements: "High School Diploma" }
];

document.addEventListener("DOMContentLoaded", () => {
  const programmeGrid = document.getElementById("programmeGrid");
  const filterType = document.getElementById("filterType");
  const filterFaculty = document.getElementById("filterFaculty");
  const sortAlpha = document.getElementById("sortAlpha");
  const filterInfo = document.getElementById("filterInfo");
  const btnFilter = document.getElementById("btnFilter"); 

  // Function to render programmes
  function renderProgrammes(list) {
    programmeGrid.innerHTML = "";

    if (list.length === 0) {
      programmeGrid.innerHTML = "<p>No programmes match your selection.</p>";
      filterInfo.textContent = "0 programmes found";
      return;
    }

    list.forEach((prog, index) => {
      let rowColor = `rgba(84,46,145,${1 - Math.floor(index/4)*0.1})`;

      const card = document.createElement("div");
      card.classList.add("col-lg-3", "col-md-4", "col-sm-6", "mb-4");

      card.innerHTML = `
        <div class="card feature-card h-100" style="background-color: ${rowColor}; color: #fff; cursor: pointer;">
          <h6>${prog.name}</h6>
          <p>${prog.faculty}</p>
        </div>
      `;

      card.querySelector(".feature-card").addEventListener("click", () => {
        showProgrammeDetails(prog);

    filteredProgrammes = [...programmes];
        renderPaginatedResults();
        btnFilter.addEventListener("click", filterProgrammes);
      });

      programmeGrid.appendChild(card)

    });

    filterInfo.textContent = `${list.length} programmes found`;
  }
// Pagination variables
  function renderPaginatedResults() {
  const start = (currentPage - 1) * ITEMS_PER_PAGE;
  const end = start + ITEMS_PER_PAGE;
  const pageItems = filteredProgrammes.slice(start, end);

  renderProgrammes(pageItems);
  renderPaginationControls();
}

//pagination controls
function renderPaginationControls() {
  const pagination = document.getElementById("pagination");
  pagination.innerHTML = "";

  const totalPages = Math.ceil(filteredProgrammes.length / ITEMS_PER_PAGE);

  for (let i = 1; i <= totalPages; i++) {
    const li = document.createElement("li");
    li.className = `page-item ${i === currentPage ? "active" : ""}`;

    const a = document.createElement("a");
    a.className = "page-link";
    a.href = "#";
    a.textContent = i;

    a.addEventListener("click", (e) => {
      e.preventDefault();
      currentPage = i;
      renderPaginatedResults();
      window.scrollTo({ top: 400, behavior: "smooth" });
    });

    li.appendChild(a);
    pagination.appendChild(li);
  }
}


  // Filter function triggered on button click
  function filterProgrammes() {
  currentPage = 1;
  filteredProgrammes = [...programmes];

  // Programme Type filtering
  if (filterType.value) {
    filteredProgrammes = filteredProgrammes.filter(p => {
      const name = p.name;

      switch (filterType.value) {
        case "Certificate":
          return name.includes("Certificate");

        case "Associates":
          return name.startsWith("AA") || name.startsWith("AAS") || name.startsWith("AS");

        case "Bachelors":
          return (
            name.startsWith("BA") ||
            name.startsWith("BBA") ||
            name.startsWith("BSc") ||
            name.startsWith("BSW")
          );

        case "Diploma":
          return name.includes("Diploma in");

        case "Postgraduate":
          return name.includes("Postgraduate Diploma");

        default:
          return true;
      }
    });
  }

  // Faculty filter
  if (filterFaculty.value) {
    filteredProgrammes = filteredProgrammes.filter(
      p => p.faculty === filterFaculty.value
    );
  }

  // Sorting
  filteredProgrammes.sort((a, b) =>
    sortAlpha.value === "asc"
      ? a.name.localeCompare(b.name)
      : b.name.localeCompare(a.name)
  );

  renderPaginatedResults();
}


  // Event listener only on button click now
  btnFilter.addEventListener("click", filterProgrammes);

  // Initial render: show all programmes
  renderProgrammes(programmes);

  // Detail panel
  function showProgrammeDetails(prog) {
    const detailPanel = document.getElementById("programmeDetail");
    detailPanel.innerHTML = `
      <h4>${prog.name}</h4>
      <p><strong>Faculty:</strong> ${prog.faculty}</p>
      <p><strong>Type:</strong> ${prog.type}</p>
      <p><strong>Duration:</strong> ${prog.duration}</p>
      <p><strong>Entry Requirements:</strong> ${prog.entryRequirements}</p>
      <p>${prog.description}</p>
    `;
    detailPanel.scrollIntoView({ behavior: "smooth" });
  }
});
