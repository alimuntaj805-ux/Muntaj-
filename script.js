// Dictionary for Multi-language Support
const translations = {
    en: {
        subtitle: "Find work or hire workers easily",
        postJobTitle: "Post a New Job (For Employers)",
        titlePh: "Job Title (e.g., Mason, Helper)",
        locPh: "Location (e.g., Kochi, Ernakulam)",
        salaryPh: "Wage / Salary (e.g., ₹800/day)",
        phonePh: "Mobile Number",
        postBtn: "Post Job",
        viewJobTitle: "Available Jobs (For Workers)",
        noJobs: "No jobs available at the moment.",
        successMsg: "Job posted successfully!",
        fillAll: "Please fill in all the details!",
        locText: "Location",
        wageText: "Wage",
        contactText: "Contact"
    },
    ml: {
        subtitle: "ജോലിയോ തൊഴിലാളികളെയോ എളുപ്പത്തിൽ കണ്ടെത്തൂ",
        postJobTitle: "പുതിയ ജോലി പോസ്റ്റ് ചെയ്യുക",
        titlePh: "ജോലിയുടെ പേര് (ഉദാ: മേസൺ, ഹെൽപ്പർ)",
        locPh: "സ്ഥലം (ഉദാ: കൊച്ചി, എറണാകുളം)",
        salaryPh: "കൂലി / ശമ്പളം (ഉദാ: ₹800/ദിവസം)",
        phonePh: "മൊബൈൽ നമ്പർ",
        postBtn: "ജോലി പോസ്റ്റ് ചെയ്യുക",
        viewJobTitle: "ലഭ്യമായ ജോലികൾ",
        noJobs: "നിലവിൽ ജോലികൾ ഒന്നും ലഭ്യമല്ല.",
        successMsg: "ജോലി വിജയകരമായി പോസ്റ്റ് ചെയ്തു!",
        fillAll: "എല്ലാ വിവരങ്ങളും പൂരിപ്പിക്കുക!",
        locText: "സ്ഥലം",
        wageText: "കൂലി",
        contactText: "ബന്ധപ്പെടാൻ"
    },
    as: {
        subtitle: "সহজে কাম বা শ্ৰমিক বিচাৰি উলিয়াওক",
        postJobTitle: "নতুন কাম প'ষ্ট কৰক",
        titlePh: "কামৰ শিৰোনাম (যেনে: মিস্ত্ৰী, সহায়ক)",
        locPh: "স্থান (যেনে: কচী, এৰ্ণাকুলাম)",
        salaryPh: "দৰমহা (যেনে: ₹800/দিন)",
        phonePh: "ম'বাইল নম্বৰ",
        postBtn: "কাম প'ষ্ট কৰক",
        viewJobTitle: "উপলব্ধ কামসমূহ",
        noJobs: "বৰ্তমান কোনো কাম উপলব্ধ নাই।",
        successMsg: "কাম সফলভাৱে প'ষ্ট কৰা হ'ল!",
        fillAll: "দয়া কৰি সকলো বিৱৰণ পূৰণ কৰক!",
        locText: "স্থান",
        wageText: "দৰমহা",
        contactText: "যোগাযোগ"
    },
    bn: {
        subtitle: "সহজেই কাজ বা কর্মী খুঁজে নিন",
        postJobTitle: "একটি নতুন কাজ পোস্ট করুন",
        titlePh: "কাজের নাম (যেমন: রাজমিস্ত্রি, হেল্পার)",
        locPh: "স্থান (যেমন: কোচি, এর্নাকুলাম)",
        salaryPh: "মজুরি / বেতন (যেমন: ₹800/দিন)",
        phonePh: "মোবাইল নম্বর",
        postBtn: "কাজ পোস্ট করুন",
        viewJobTitle: "উপলব্ধ কাজসমূহ",
        noJobs: "এই মুহূর্তে কোনো কাজ উপলব্ধ নেই।",
        successMsg: "কাজ সফলভাবে পোস্ট করা হয়েছে!",
        fillAll: "দয়া করে সমস্ত বিবরণ পূরণ করুন!",
        locText: "স্থান",
        wageText: "মজুরি",
        contactText: "যোগাযোগ"
    },
    ta: {
        subtitle: "வேலை அல்லது பணியாளர்களை எளிதாக கண்டறியவும்",
        postJobTitle: "புதிய வேலையை வெளியிடவும்",
        title_ph: "வேலை தலைப்பு (எ.கா., மேஸ்திரி, உதவியாளர்)",
        locPh: "இடம் (எ.கா., கொச்சி, எர்ணாகுளம்)",
        salaryPh: "சம்பளம் (எ.கா., ₹800/நாள்)",
        phonePh: "மொபைல் எண்",
        postBtn: "வேலையை வெளியிடு",
        viewJobTitle: "கிடைக்கும் வேலைகள்",
        noJobs: "தற்போது வேலைகள் எதுவும் இல்லை.",
        successMsg: "வேலை வெற்றிகரமாக வெளியிடப்பட்டது!",
        fillAll: "அனைத்து விவரங்களையும் நிரப்பவும்!",
        locText: "இடம்",
        wageText: "சம்பளம்",
        contactText: "தொடர்புக்கு"
    }
};

window.onload = function() {
    displayJobs();
};

function changeLanguage() {
    let lang = document.getElementById('langSelect').value;
    let t = translations[lang];

    document.getElementById('appSubtitle').innerText = t.subtitle;
    document.getElementById('postJobTitle').innerText = t.postJobTitle;
    document.getElementById('jobTitle').placeholder = t.titlePh;
    document.getElementById('jobLocation').placeholder = t.locPh;
    document.getElementById('jobSalary').placeholder = t.salaryPh;
    document.getElementById('jobPhone').placeholder = t.phonePh;
    document.getElementById('postJobBtn').innerText = t.postBtn;
    document.getElementById('viewJobTitle').innerText = t.viewJobTitle;

    displayJobs();
}

function postJob() {
    let title = document.getElementById('jobTitle').value;
    let location = document.getElementById('jobLocation').value;
    let salary = document.getElementById('jobSalary').value;
    let phone = document.getElementById('jobPhone').value;
    let lang = document.getElementById('langSelect').value;
    let t = translations[lang];

    if(title === '' || location === '' || salary === '' || phone === '') {
        alert(t.fillAll);
        return;
    }

    let newJob = {
        title: title,
        location: location,
        salary: salary,
        phone: phone
    };

    let jobs = JSON.parse(localStorage.getItem('keralaJobs')) || [];
    jobs.push(newJob);
    localStorage.setItem('keralaJobs', JSON.stringify(jobs));

    alert(t.successMsg);
    
    document.getElementById('jobTitle').value = '';
    document.getElementById('jobLocation').value = '';
    document.getElementById('jobSalary').value = '';
    document.getElementById('jobPhone').value = '';

    displayJobs();
}

function displayJobs() {
    let jobListDiv = document.getElementById('jobList');
    let jobs = JSON.parse(localStorage.getItem('keralaJobs')) || [];
    let lang = document.getElementById('langSelect').value;
    let t = translations[lang];

    jobListDiv.innerHTML = '';

    if(jobs.length === 0) {
        jobListDiv.innerHTML = `<p>${t.noJobs}</p>`;
        return;
    }

    jobs.forEach(function(job) {
        jobListDiv.innerHTML += `
            <div class="job-item">
                <h4>${job.title}</h4>
                <p>📍 <b>${t.locText}:</b> ${job.location}</p>
                <p>💰 <b>${t.wageText}:</b> ${job.salary}</p>
                <p>📞 <b>${t.contactText}:</b> <a href="tel:${job.phone}">${job.phone}</a></p>
            </div>
        `;
    });
}
