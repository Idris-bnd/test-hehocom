const app = {

    data: dataArray,
    leftsideH2: document.getElementById('leftsideH2'),
    leftSideText: document.getElementById('leftSideText'),
    rightSideHairTypes: document.getElementById('rightSideHairTypes'),

    init: function() {
        this.setHairTypes()
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

   
}


window.addEventListener('load', (e) => {
    app.init();
})