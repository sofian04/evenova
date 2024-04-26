const services = document.querySelector('#nosServices')
console.log(services)

const servicesDiv = document.querySelector('#serviceDiv')

const divService = 

// ! A MODIFIE AU CLIC LE PRECEDENT NE DISPARAIT PAS
services.addEventListener("click", () => {
    const menu = document.createElement("section")
    menu.classList.add('menuDeroulant')
    console.log(menu)
    
    const voyage = document.createElement("a")
    voyage.classList.add('navOnglet')
    voyage.textContent = "Voyage"
    
    const soiree = document.createElement("a")
    soiree.classList.add('navOnglet')
    soiree.textContent = "Soirée"
    
    const personnalise = document.createElement("a")
    personnalise.classList.add('navOnglet')
    personnalise.textContent = "Personnalisé"
    
    menu.append(voyage,soiree,personnalise)
    servicesDiv.append(menu)
    
})

const compte = document.querySelector('#compte')
console.log(services)

const compteDiv = document.querySelector('#compteDiv')
console.log(compteDiv)


// ! A MODIFIE AU CLIC LE PRECEDENT NE DISPARAIT PAS
compte.addEventListener("click", () => {
    const menu = document.createElement("section")
    menu.classList.add('menuDeroulant')
    console.log(menu)

    const connexion = document.createElement("a")
    connexion.classList.add('navOnglet')
    connexion.textContent = "Connexion"

    const inscription = document.createElement("a")
    inscription.classList.add('navOnglet')
    inscription.textContent = "Inscription"

    menu.append(connexion,inscription)
    compteDiv.append(menu)

})