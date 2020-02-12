const view = {
    status: {
        online: 'green',
        away: 'yellow',
        offline: 'red',
        busy: 'goldenRod',
    },
    app: document.querySelector('#app'),
};

const model = [{
        status: view.status.online,
        name: 'Christian',
        email: 'christian@yahoo.com',
        phone: '323-555-1234',
    },
    {
        status: view.status.online,
        name: 'Rich',
        email: 'rich@tripod.com',
        phone: '323-555-1234',
    },
    {
        status: view.status.online,
        name: 'Scott',
        email: 'scott@mailinator.com',
        phone: '323-555-1234',
    },
    {
        status: view.status.online,
        name: 'Danny',
        email: 'danny@hotmail.com',
        phone: '323-555-1234',
    },
    {
        status: view.status.offline,
        name: 'Taka',
        email: 'taka@myspace.com',
        phone: '323-555-1234',
    },
    {
        status: view.status.away,
        name: 'Tim',
        email: 'tim@netscape.com',
        phone: '323-555-1234',
    },
    {
        status: view.status.online,
        name: 'Patrick',
        email: 'patrick@live.com',
        phone: '323-555-1234',
    },
    {
        status: view.status.busy,
        name: 'Jacques',
        email: 'jacques@aol.com',
        phone: '323-555-1234',
    },
];

function ToggleEachClass(selectedClassesString, toggledClassString) {
    let Elements = document.querySelectorAll(selectedClassesString);
    [].forEach.call(Elements, el => el.classList.toggle(toggledClassString));
}

function addToEachClass(selectedClassesString, callFunction) {
    let Elements = document.querySelectorAll(selectedClassesString);
    [].forEach.call(Elements, callFunction);
}

const dropdown = document.querySelector('#selectDetail');
dropdown.onchange = function() {
    if (dropdown.options.selectedIndex === 1) {
        addToEachClass('.phone-number', el => el.classList.toggle('hidden'));
        addToEachClass('.email', el => el.classList.toggle('hidden'));
    } else {
        addToEachClass('.email', el => el.classList.toggle('hidden'));
        addToEachClass('.phone-number', el => el.classList.toggle('hidden'));
    }
};



function CreateRows(HTMLtag, ParentHTMLtag) {
    for (let i = 0; i < model.length; i++) {
        var newElement = document.createElement(HTMLtag);
        newElement.innerHTML = `
        <div class="left-column">
            <svg class="status-indicator" fill="${model[i].status}">
                <use xlink:href="#statusIndicator" />
            </svg>
            <p class="name">${model[i].name}</p>
        </div>
        <button class="right-column contact-info">
        <div class="contact-info__brief">
            <p class="email">${model[i].email}</p>
            <p class="hidden phone-number">323-555-1234</p>
        </div>
            <div class="hidden roll-over contact-info__expanded">
                <a href="mailto:${model[i].email}" class="email-expanded">
                    ${model[i].email}
                </a>
                <a href="tel:${model[i].phone}" class="expanded-phone">${model[i].phone}</a>
                <p class="address">
                6539 Wilton Ave. <br />
                Culver City CA 90234
                </p>
            </div>
        </button>
        `;
        const Parent = document.querySelector(ParentHTMLtag);
        Parent.appendChild(newElement);
    }
}
document.body.onload = function() {
    CreateRows('article', '#infoList');
    const buttons = document.querySelectorAll(".contact-info")
    for (const button of buttons) {
        button.addEventListener('click', function(event) {
            console.log(`clicked ${event}`)
            this.parentNode.classList.toggle('active');
            document.querySelector('#infoList').classList.toggle('overlay');
        })
    }
}