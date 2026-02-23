const jobs = [
{ id:1, company:"TechNova Ltd", position:"Frontend Developer", location:"Remote", type:"Full-time", salary:"$80k - $100k", description:"Build responsive user interfaces for global products.", status:"not-applied"},
{ id:2, company:"CloudSync", position:"Backend Engineer", location:"Dhaka", type:"Full-time", salary:"$90k - $110k", description:"Develop scalable backend systems and APIs.", status:"not-applied"},
{ id:3, company:"PixelCraft", position:"UI/UX Designer", location:"Chittagong", type:"Part-time", salary:"$50k - $70k", description:"Design intuitive user experiences for web apps.", status:"not-applied"},
{ id:4, company:"DataBridge", position:"Data Analyst", location:"Remote", type:"Contract", salary:"$60k - $85k", description:"Analyze business metrics and performance data.", status:"not-applied"},
{ id:5, company:"CyberCore", position:"Security Specialist", location:"Dhaka", type:"Full-time", salary:"$95k - $120k", description:"Maintain security protocols and compliance.", status:"not-applied"},
{ id:6, company:"BrightApps", position:"Mobile Developer", location:"Sylhet", type:"Full-time", salary:"$75k - $95k", description:"Create Android and iOS applications.", status:"not-applied"},
{ id:7, company:"WebFusion", position:"Full Stack Developer", location:"Remote", type:"Full-time", salary:"$100k - $130k", description:"Work across frontend and backend stacks.", status:"not-applied"},
{ id:8, company:"AI Dynamics", position:"ML Engineer", location:"Dhaka", type:"Full-time", salary:"$110k - $150k", description:"Develop machine learning models.", status:"not-applied"}
];


let currentTab = "all";
const container = document.getElementById("jobsContainer");

// render all jobs and show in UI
function renderJobs(){
    container.innerHTML = "";

    
    jobs.forEach(job => {
        const {id, company, position, location, type, salary, description, status} = job;

        // create new card div
        const card = document.createElement("div");
        card.className = "bg-white shadow rounded-xl p-6";

        // badge button status change and add styles
        let statusBadge = "";
        if(status === "not-applied"){
            statusBadge = `<span class="px-3 py-1 text-sm bg-gray-200 rounded">Not Applied</span>`;
        }
        if(status === "interview"){
            statusBadge = `<span class="px-3 py-1 text-sm bg-green-500 text-white rounded">Interview</span>`;
        }
        if(status === "rejected"){
            statusBadge = `<span class="px-3 py-1 text-sm bg-red-500 text-white rounded">Rejected</span>`;
        }

        card.innerHTML = `
        <div class="flex justify-between">
            <div>
                <h3 class="font-bold text-lg">${company}</h3>
                <p class="text-gray-700">${position}</p>
                <p class="text-sm text-gray-500">${location} • ${type} • ${salary}</p>
            </div>
            <button onclick="deleteJob(${id})" class="text-red-500 font-bold">✕</button>
        </div>

        <div class="mt-3">${statusBadge}</div>
        <p class="mt-3 text-gray-600">${description}</p>

        <div class="mt-4 flex gap-3">
            <button onclick="updateStatus(${id}, 'interview')" class="px-4 py-2 bg-green-500 text-white rounded">Interview</button>
            <button onclick="updateStatus(${id}, 'rejected')" class="px-4 py-2 bg-red-500 text-white rounded">Rejected</button>
        </div>
        `;

        container.appendChild(card);
    })
};

// click and change job status
function updateStatus(id, status){
    const job = jobs.find(j => j.id === id);

    if(job.status === status){
        job.status = "not-applied";
    }else{
        job.status = status;
    }

    renderJobs();
}


// find all tap button by class name
document.querySelectorAll(".tab-btn").forEach(btn => {
    btn.addEventListener("click", function(){
        // remove style all button without curren clicked btn
        document.querySelectorAll(".tab-btn").forEach(b => {
            b.classList.remove('bg-blue-600', 'text-white');
            b.classList.add('bg-gray-200');
        });
        
        // add style only clicked button without unclicked btn
        this.classList.add('bg-blue-600', 'text-white');
        this.classList.remove('bg-gray-200');

        // select current tab from take data-tab attribute of current target btn
        console.log(currentTab = this.dataset.tab);
    });
});

// document.querySelectorAll(".tab-btn").forEach(btn=>{
//     btn.addEventListener("click",function(){
//         document.querySelectorAll(".tab-btn").forEach(b=>{
//             b.classList.remove("bg-blue-600","text-white");
//             b.classList.add("bg-gray-200");
//         });
//         this.classList.add("bg-blue-600","text-white");
//         this.classList.remove("bg-gray-200");

//         currentTab = this.dataset.tab;
//         renderJobs();
//     });
// });

renderJobs();