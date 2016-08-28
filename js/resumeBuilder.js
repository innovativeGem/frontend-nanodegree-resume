/*
This is empty on purpose! Your code to build the resume will go here.
 */
var name = "Naman Nanavati";
var role = "Web Developer";
var bio = {
    "name": "Naman Nanavati",
    "role": "Front End Developer",
    "welcomeMessage": "Seeking an advanced career in Multimedia and Web with consistent growth, by implementing my experience, skills and qualification. Gain management skills and emerge as a leader with management position in Media domain on a global platform.",
    "bioPic": "images/self.jpg",
    "contacts": {
        "email": "naman.nanavati@gmail.com",
        "mobile": "+61 433 433 173",
        "github": "innovativeGem",
        "location": "Melbourne, Australia"
    },
    "skills": ["can do attitude", "programming", "HTML", "CSS", "JS"]
};

var work = {
    "jobs": [{
        "title": "Front-End Developer",
        "employer": "BMW Group Australia",
        "dates": "2014-2016",
        "location": "Melbourne, Australia",
        "description": "Develop and maintain BMW national and dealer websites."
    }, {
        "title": "Media Developer Project Coordinator",
        "employer": "Cengage Learning Australia",
        "dates": "2009-2014",
        "location": "Melbourne, Australia",
        "description": "Design and build e-Learning products, interactive learning objects, animations, videos and podcasts."
    }]
};

var projects = {
    "project": [{
        "title": "BMW Motorrad - All models pricing tool.",
        "dates": "July 2015",
        "description": "I developed this page from stratch to display all BMW Motorrad models and display their prices based on the selected state. When user clicks on any bike, it goes to the details page. It is a single page application using Angular JS template and routing.",
        "images": ["images/motorrad-1.jpg", "images/motorrad-2.jpg"]
    }, {
        "title": "BMW Cars - Model comparison tool.",
        "dates": "November 2015 - March 2016",
        "description": "BMW Cars national website required a model comparison tool for which I developed the front end design, DOM and style. I also used Angular Material for added functionality.",
        "images": ["images/bmw-1.jpg", "images/bmw-2.jpg"]
    }]
};

var education = {
    "schools": [{
        "name": "Swinburne University",
        "degree": "Master of Multimedia Technology",
        "dates": "2004-2006",
        "location": "Melbourne, Australia",
        "info": "http://www.swinburne.edu.au/study/course/Master-of-Multimedia-MA-MM1/international"
    }, {
        "name": "Keyframes Institute of Technology",
        "degree": "Diploma in Multimedia",
        "dates": "2001-2003",
        "location": "Ahmedabad, India"
    }],
    "onlineCourses": [{
        "name": "Up and Running with AngularJS 1",
        "school": "Lynda.com",
        "dates": "Jun 2015",
        "url": "https://www.lynda.com/AngularJS-tutorials/Up-Running-AngularJS/154414-2.html"
    }, {
        "name": "Front-End Web Developer Nanodegree",
        "school": "Udacity.com",
        "dates": "Mar 2016 - Oct 2016",
        "url": "https://www.udacity.com/course/front-end-web-developer-nanodegree--nd001"
    }]
};

//var formattedName = HTMLheaderName.replace("%data%", name);
//var formattedRole = HTMLheaderRole.replace("%data%", role);

$("#header").prepend(HTMLheaderRole.replace("%data%", bio.role));
$("#header").prepend(HTMLheaderName.replace("%data%", bio.name));
$("#topContacts").append(HTMLmobile.replace("%data%", bio.contacts.mobile));
$("#topContacts").append(HTMLemail.replace("%data%", bio.contacts.email));
$("#topContacts").append(HTMLgithub.replace("%data%", bio.contacts.github));
$("#header").append(HTMLbioPic.replace("%data%", bio.bioPic));
//$("#main").append(internationalizeButton);
$("#mapDiv").append(googleMap);
$("#footerContacts").append(HTMLmobile.replace("%data%", bio.contacts.mobile));
$("#footerContacts").append(HTMLemail.replace("%data%", bio.contacts.email));
$("#footerContacts").append(HTMLgithub.replace("%data%", bio.contacts.github));
$("#footerContacts").append(HTMLlocation.replace("%data%", bio.contacts.location));

bio.display = function() {
    if (bio.skills !== null) {
        $("#header").append(HTMLskillsStart);
        bio.skills.forEach(function(skill) {
            //console.log(skill);
            $("#skills").append(HTMLskills.replace("%data%", skill));
        });
    } else {
        console.log("No skills added");
    }
};

work.display = function() {

    //    for (job in work.jobs){
    work.jobs.forEach(function(job) {
        var formattedEmployer = HTMLworkEmployer.replace("%data%", job.employer);
        var formattedTitle = HTMLworkTitle.replace("%data%", job.title);
        $("#workExperience").append(HTMLworkStart);
        $(".work-entry:last").append(formattedEmployer + formattedTitle);
        $(".work-entry:last").append(HTMLworkDates.replace("%data%", job.dates));
        $(".work-entry:last").append(HTMLworkDescription.replace("%data%", job.description));
    });
    //console.log(work.jobs[job].title);
};

/*
function inName(name){
    var intName = name.split(" ");
    intName = intName[0]+ " " + intName[1].toUpperCase();
    return intName;
}
*/

// display projects from projects object
projects.display = function() {
    $("#projects").append(HTMLprojectStart);
    //    for (project in projects.project){
    projects.project.forEach(function(project) {
        $(".project-entry:last").append(HTMLprojectTitle.replace("%data%", project.title));
        $(".project-entry:last").append(HTMLprojectDates.replace("%data%", project.dates));
        $(".project-entry:last").append(HTMLprojectDescription.replace("%data%", project.description));
        //        for (img in project.images){
        project.images.forEach(function(img) {
            $(".project-entry:last").append(HTMLprojectImage.replace("%data%", img));
        });
    });
};

education.display = function() {
    $("#education").append(HTMLschoolStart);
    //    for (school in education.schools){
    education.schools.forEach(function(school) {
        $(".education-entry:last").append(HTMLschoolName.replace("%data%", school.name));
        $(".education-entry:last").append(HTMLschoolDegree.replace("%data%", school.degree));
        $(".education-entry:last").append(HTMLschoolDates.replace("%data%", school.dates));
        $(".education-entry:last").append(HTMLschoolLocation.replace("%data%", school.location));
    });

    $(".education-entry:last").append(HTMLonlineClasses);
    //    for (course in education.onlineCourses){
    education.onlineCourses.forEach(function(course) {
        $(".education-entry:last").append(HTMLonlineTitle.replace("%data%", course.name));
        $(".education-entry:last").append(HTMLonlineSchool.replace("%data%", course.school));
        $(".education-entry:last").append(HTMLonlineDates.replace("%data%", course.dates));
        $(".education-entry:last").append(HTMLonlineURL.replace("%data%", course.url));
    });
    //$(".education-entry:last").append();
    //$("#education").append()
};

bio.display();
work.display();
projects.display();
education.display();
//inName(bio.name);

$(document).click(function(loc) {
    logClicks(loc.pageX, loc.pageY);
});