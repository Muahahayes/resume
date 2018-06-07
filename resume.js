$().ready(displayFromJson);

var resume = {
    'personalInfo':{
        'name':'Thomas A. Ord',
        'phone':'(801)636-8166',
        'email':'10582405@my.uvu.edu'
    },

    'education':[
        {
            'school':'Spanish Fork High School',
            'date':'2006-2010',
            'degree':'High School Diploma'
        },
        {
            'school':'Utah Valley University',
            'date':'2010-2018',
            'degree':'In Progress (Computer Science with Psychology Minor)'
        }
    ],

    'skills':[
        'C++ Programming',
        'C# Programming'
    ],

    'employment':[
        {
            'employer':'Village Green Pediatrics',
            'date':'2014-2016',
            'position':'Data Entry / Office Assistant',
            'duties':'Entered chart information to Electronic Medical Record, Prepared charts, Organized storage area, Assisted with IT problems'
        },
        {
            'employer':'Utah Physiatry',
            'date':'2013',
            'position':'Receptionist',
            'duties':'Scheduled patients, Called insurance companies, Prepared charts'
        },
        {
            'employer':'Mimi\'s Cafe',
            'date':'2012-2013',
            'position':'Busboy',
            'duties':'Bussed tables, Cleaned kitchen/prep areas, Serviced customer needs.'
        }
    ],

    'volunteering':[
        {
            'organization':'Tabitha\'s Way, Local Food Pantry',
            'date':'2016',
            'position':'Pantry Assistant',
            'experience':'Welcomed clients, Walked clients through pantry, Checked clients out in the system, Brought stock from storage to the front'
        }
    ]
};

function displayFromJson() {
    $('.categories').on('click', toggle);
    console.log(resume);
    buildPersonal();
    buildEducation();
    buildSkills();
    buildEmployment();
    buildOther();
}

function toggle() {
    var section = $(this).attr('id');
    section = '#' + section + 'Data';
    $(section).toggle();
}

function buildPersonal() {
    var str = '';
    var jsonP = resume.personalInfo;
    str += '<h3 id="name">' + jsonP.name + '</h3>';
    str += '<h4>Phone: ' + jsonP.phone + '<h4>';
    str += '<h4><a href="' + jsonP.email + '">Email: <u>' + jsonP.email + '</u></a></h4>';
    str += '<hr>';
    $('#personalInfo').html(str);
}

function buildEducation() {
    var str = '';
    var jsonE = resume.education;
    for(var school of jsonE){
        str += '<p><strong>School:</strong> ' + school.school + '</p>';
        str += '<p><strong>Date:</strong> ' + school.date + ' <strong>Degree:</strong> ' + school.degree + '</p>';
        if(school == jsonE[jsonE.length - 1]){break;}
        str += '<br>';
    }
    $('#educationData').html(str);
}

function buildSkills() {
    var str = '';
    var jsonS = resume.skills;
    str += '<ul class="skills">';
    for(var skill of jsonS){
        str += '<li>' + skill + '</li>';
    }
    str += '</ul>';
    $('#skillsData').html(str);
}   

function buildEmployment() {
    var str = '';
    var jsonE = resume.employment;
    for(var job of jsonE){
        str += '<p><strong>Employer:</strong> ' + job.employer + '</p>';
        str += '<p><strong>Date:</strong> ' + job.date + ' <strong>Position:</strong> ' + job.position + '</p>';
        str += '<p><strong>Duties:</strong> ' + job.duties + '</p>';
        if(job == jsonE[jsonE.length - 1]){break;}
        str += '<br>';
    }
    $('#employmentData').html(str);
}

function buildOther() {
    var str = '';
    var jsonO = resume.volunteering;
    for(var other of jsonO){
        str += '<p><strong>Organization:</strong> ' + other.organization + '</p>';
        str += '<p><strong>Date:</strong> ' + other.date + ' <strong>Position:</strong> ' + other.position + '</p>';
        str += '<p><strong>Experience:</strong> ' + other.experience + '</p>';
        if(other == jsonO[jsonO.length - 1]){break;}
        str += '<br>';
    }
    $('#otherData').html(str);
}