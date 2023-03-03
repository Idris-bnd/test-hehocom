const app = {

    data: dataArray,
    leftsideImg: document.getElementById('leftsideImg'),
    leftsideH2: document.getElementById('leftsideH2'),
    leftSideText: document.getElementById('leftSideText'),
    leftSideBoldText: document.getElementById('leftSideBoldText'),

    rightSideHairTypes: document.getElementById('rightSideHairTypes'),

    init: function() {
        this.setLeftSide()
        this.setHairTypes()

        for (let i = 0; i < this.rightSideHairTypes.children.length; i++) {
            const element = this.rightSideHairTypes.children[i];
            element.addEventListener('click', (e) => {
                this.changeHairType(e.currentTarget.id)
            })
        }
    },
// -------------------------------------

    setLeftSide: function() {
        this.leftsideImg.src = this.data[0].img;
        this.leftsideImg.alt = `image d'une femme aux ${this.data[0].title}`;
        this.leftsideH2.innerText = this.data[0].title;
        this.leftSideText.innerHTML = `
            ${this.data[0].text + "."}
            <span id="leftSideBoldText" class="bold">${this.data[0].boldText}</span>
        `;
    },
// -------------------------------------

    setHairTypes: function() {
        this.data.forEach((hairType, index) => {

            const div = document.createElement('div')
            div.className= 'hair--type';
            div.id= index;
            
            const img = document.createElement('img')
            img.src= hairType.img;
            img.alt = `image d'une femme aux ${hairType.title}`

            const p = document.createElement('p')
            p.innerText = hairType.title;

            div.appendChild(img)
            div.appendChild(p)
            this.rightSideHairTypes.append(div)

        })
    },
// -------------------------------------

    changeHairType: function(id) {
        this.leftsideImg.src = this.data[id].img;
        this.leftsideImg.alt = `image d'une femme aux ${this.data[id].title}`;
        this.leftsideH2.innerText = this.data[id].title;
        this.leftSideText.innerHTML = `
            ${this.data[id].text + "."}
            <span id="leftSideBoldText" class="bold">${this.data[id].boldText}</span>
        `;

        for (let i = 0; i < this.rightSideHairTypes.children.length; i++) {
            const element = this.rightSideHairTypes.children[i];
            if (element.classList.contains('active')) {
                element.className = "hair--type"
            }
        }

        const hairTypeDiv = document.getElementById(id)
        hairTypeDiv.className = "hair--type active"
    },
}


window.addEventListener('load', (e) => {
    app.init();
})