const ourTeam = [

  {
    name: 'Wayne Barnett',
    rule: 'Founder',
    photo: 'wayne-barnett-founder-ceo.jpg'
  },

  {
    name: 'Angela Caroll',
    rule: 'Chief Editor',
    photo: 'angela-caroll-chief-editor.jpg'
  },

  {
    name: 'Walter Gordon',
    rule: 'Office Manager',
    photo: 'walter-gordon-office-manager.jpg'
  },

  {
    name: 'Angela Lopez' ,
    rule: 'Social Media Manager',
    photo: 'angela-lopez-social-media-manager.jpg'
  },

  {
    name: 'Scott Estrada',
    rule: 'Developer',
    photo: 'scott-estrada-developer.jpg'
  },

  {
    name: 'Barbara Ramos',
    rule: 'Graphic Designer',
    photo: 'barbara-ramos-graphic-designer.jpg'
  }
  
]

const rowOne = document.getElementById('row-one');
const rowTwo = document.getElementById('row-two');

  for (let j = 0; j < 3; j++) {
    rowOne.innerHTML += `
  <div class="card">
    <img src="img/${ourTeam[j].photo}">
    <h2 style="font-family:'Times New Roman', Times, serif;">${ourTeam[j].name}</h2> 
    <h5>${ourTeam[j].rule}</h5> 
  </div>
    `
  }

  for (let c = 3; c < 6; c++) {
    rowTwo.innerHTML += `
  <div class="card">
    <img src="img/${ourTeam[c].photo}">
    <h2 style="font-family:'Times New Roman', Times, serif;">${ourTeam[c].name}</h2> 
    <h5>${ourTeam[c].rule}</h5> 
  </div>
    `
  }