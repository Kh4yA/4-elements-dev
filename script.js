/**
 * fonction qui calcul le nombre de jour avec une entrée et une sorti
 * @param {object} num 
 * @param {object} date 
 * @returns number 
 */
function days (num, date){
  return ((((date - num)/24)/60)/60)/1000
}
/**
 *  fonction qui controle si la longeur est compris entre 2 et 50
 * @param {string} id 
 * @param {object} input
 * @param {string} messageErreur 
 * @returns  true ou false
 */
function testLongueur(id, input, messageErreur){
  //test la longeur de la chaine entre 2 et 50 caractere
  if(input.value.length<2 || input.value.length>=50){
    afficherErreur(id, messageErreur)
    return false
  }else{
    retireErreur(id)
    return true
  }
}
/**
 * function qui affiche un message d'erreur
 * @param {string} id 
 * @param {string} messageErreur 
 * retour rien
 */
function afficherErreur(id, messageErreur){
  let input = document.getElementById(id)
  input.classList.add('input-error')
  let p = document.querySelector(`#error-${id}`)
  p.innerText = messageErreur
  p.classList.remove('d-none')
}
/**
 * Fonction qui retire l'erreur
 * @param {string} id 
 * return rien
 */
function retireErreur(id){
  let input = document.getElementById(id)
  input.classList.remove('input-error')
  let p = document.querySelector(`#error-${id}`)
  p.classList.add('d-none')

}
/**
 * function qui verifie si l'entrée ne contient pas de caractère non autorisé
 * @param {string} id 
 * @param {object} input 
 * @param {string} messageErreur 
 * @returns afficher une erreur et false / true si pas d'erreur
 */
function testIsCaractere (id, input, messageErreur){
 let reg = /^[a-zA-ZÀ-ÿ'-]+(?:\s[a-zA-ZÀ-ÿ'-]+)*$/
 if(reg.test(input.value) === false){
  afficherErreur(id,messageErreur)
  return false
 }else{
  retireErreur(id)
  return true
 }
}
/**
 * Function qui verifie qu'il n y a pas d'injection de script
 * @param {string} id 
 * @param {object} input
 * @param {string} messageErreur 
 * @returns erreur si false / true si aps de probleme
 */
function noScript (id, input, messageErreur) {
  let reg = /<script>/
  if (reg.test(input.value) === true){
    afficherErreur(id, messageErreur)
    return false
  } else{
    retireErreur(id)
    return true
  }
}
/**
 * function qui verifie que le champs n'est pas vide
 * @param {string} id 
 * @param {any} input
 * @param {string} messageErreur 
 * @returns erreur si false / true si pas de vide
 */
function isEmpty (id, input, messageErreur) {
  if(input.value===''){
    afficherErreur(id, messageErreur)
    return false
  }else{
    retireErreur(id)
    return true
  }
}
/**
 * Fonction qui verifie les emails 
 * @param {string} id 
 * @param {object} input 
 * @returns true si ok / false si erreur 
 */
function verifEmail (id, input) {
  let reg = /(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))/
  if (reg.test(input.value)===false){
    afficherErreur(id,"Vous devez entrer un email valide!")
    return false
  }else{
    retireErreur(id)
    return true
  }
}
/**
 * Fonction qui verifie si c'est que des chiffres
 * @param {string} id 
 * @param {object} input 
 * @param {string} messageErreur 
 * @returns 
 */
function onlyNum (id, input, messageErreur) {
  let reg = /[0-9]/
  if (reg.test(input.value)===false){
    afficherErreur(id,messageErreur)
    return true
  }else{
    retireErreur(id)
  }
}
//fonction qui test le nom
function testNom(){
  if (isEmpty('nom',nom, "vous devez entrer votre nom") && noScript('nom', nom, 'Vous ne pouvez entrer de script')&& testIsCaractere('nom', nom , 'Les caratères speciaux ne sont pas autorisés') && testLongueur('nom',nom,'La longueur est compris entre 2 et 50 caractères')){
    return false
  }else{
    return true
  }
}

//reccuperation des bouton
let btnSuivantInformation = document.querySelector('.suivant-information')
let btnSuivantReservation = document.querySelector('.suivant-reservation')
let btnRetourReservation = document.getElementById('retour-reservation')
let btnSuivantSupp = document.querySelector('.btn-supp')
let btnRetourSupp = document.getElementById('retour-supplementaire')
let btnAnnuler = document.querySelector('.btn-annuler')
let optionChecked = document.querySelector('.option-checked')
let repas = document.getElementById('repas')
let repasDetail = document.querySelector('.repas-detail')
//reccuperation des blocs
let information = document.querySelector('.information')
let reservation = document.querySelector('.reservation')
let supplementaire = document.querySelector('.supplementaire')
let choix = document.querySelector('#choix')
//reccuperation du modal
let modal = document.querySelector('.modal')
//reccuperation des input
let nom = document.getElementById('nom')
nom.addEventListener('change',()=>{
  testNom()
})
let prenom = document.getElementById('prenom')
prenom.addEventListener('change', ()=>{
  if (isEmpty('prenom',prenom,"Vous devez entrez votre prenom")&&noScript('prenom',prenom,'Vous ne pouvez pas entrer de script')&&testIsCaractere('prenom',prenom,'Les caratères speciaux ne sont pas autorisés')&&testLongueur('prenom',prenom,'La longueur est compris entre 2 et 50 caractères')){
  }
})
let rue = document.getElementById('rue')
rue.addEventListener('change', ()=>{
  if (isEmpty('rue',rue,"Vous devez entrez votre rue")&&noScript('rue',rue,'Vous ne pouvez pas entrer de script')&&testIsCaractere('rue',rue,'Les caratères speciaux ne sont pas autorisés')&&testLongueur('rue',rue,'La longueur est compris entre 2 et 50 caractères')){
  }
})
let num = document.getElementById('num')
num.addEventListener('change', ()=>{
  isEmpty('num',num,'Entrez votre num de rue')
})
let ville = document.getElementById('ville')
ville.addEventListener('change', ()=>{
  if (isEmpty('ville',ville,"Vous devez entrez votre ville")&&noScript('ville',ville,'Vous ne pouvez pas entrer de script')&&testIsCaractere('ville',ville,'Les caratères speciaux ne sont pas autorisés')&&testLongueur('ville',ville,'La longueur est compris entre 2 et 50 caractères')){
  }
})
let codePostal = document.getElementById('code-postal')
codePostal.addEventListener('change', ()=>{
if(isEmpty('code-postal',codePostal,'Vous devez entrer votre code postal')&&onlyNum('code-postal', codePostal, 'Ce champs doit comporter que des chiffres')){
}
})
let email = document.getElementById('email')
email.addEventListener('change', ()=>{
  verifEmail('email',email)
})
let tel = document.getElementById('tel')
tel.addEventListener('change', ()=>{
  if(isEmpty('tel',tel,'Vous devez entrer votre code postal')&&onlyNum('tel', tel, 'Ce champs doit comporter que des chiffres')){
  }
  })
//button suivant qui passe a reservation
btnSuivantInformation.addEventListener('click',(e)=>{
    e.preventDefault()
    let test1 = testNom()
    if(test1===false){
    }else{
      information.classList.add('remove')
      reservation.classList.add('active')
    }
})
//bouton suivant qui passe a supplementaire
btnSuivantReservation.addEventListener('click',(e)=>{
    e.preventDefault()
    reservation.classList.remove('active')
    supplementaire.classList.add('active')
})
//btn retour de la reservation
btnRetourReservation.addEventListener('click', (e)=>{
e.preventDefault()
  reservation.classList.remove('active')
  information.classList.remove('remove')
})
//btn retour de la section supplementaire
btnRetourSupp.addEventListener('click',(e)=>{
  e.preventDefault()
  reservation.classList.add('active')
  supplementaire.classList.remove('active')
})
//bouton annulé
btnAnnuler.addEventListener('click', (e)=>{
  e.preventDefault()
    modal.classList.remove('active')
})
let petitDej = document.getElementById('petit-dej')
petitDej.addEventListener('click', (e)=>{
  if(!optionChecked.classList.contains('active')&& repas.checked===false){
    optionChecked.classList.add('active')
  }
})
repas.addEventListener('click', (e)=>{
  repasDetail.classList.toggle('active')
  if(!optionChecked.classList.contains('active')){
    optionChecked.classList.add('active')
  }
})
//reccuperation des dates
let formule = document.querySelector('#formule')
let arrivee = document.querySelector('#arrivee')
let depart = document.querySelector('#depart')
//service supplementaire
let chauffeur = document.getElementById('chauffeur')
let optionChauffeur = 11
let optionPetitDej = 15
let optionRepas = 25
let optionVisite = 20
let formuleIgloo = 500
let formuleLpaonne = 850
btnSuivantSupp.addEventListener('click', (e)=>{
    e.preventDefault()
    modal.innerHTML = `<div class="width-100 padding-bottom20">
    <p class="bold">Réccapitulatif</p> <br>
    <div>
      <p>nom : ${nom.value}</p>
      <p>prenom : ${prenom.value}</p>
      <p>Adresse : ${num.value} ${rue.value} ${codePostal.value} ${ville.value} </p>
      <p>Tel : ${tel.value}</p>
      <p>Mail : ${email.value}</p>
    </div>
  </div>
  <div class="resa width-100 padding-bottom20">
    <p class="bold padding-bottom10">Résérvation</p>
    <p>Résérvation pour la cambre feu : ${formule.selectedOptions[0].value}</p>
    <p>nombres de personnes : 2</p>
    <p>date d'arrivée ${arrivee.valueAsDate.toLocaleDateString()}: date de départ : ${depart.valueAsDate.toLocaleDateString()}</p>
    <p>nombre de jours : ${days(arrivee.valueAsDate, depart.valueAsDate)}</p>
  </div>
  <div class="option width-100 padding-bottom20">
    <p class="bold padding-bottom20">Service supplémentaire</p>
    <p>vous avez séléctionné :</p>
    <ul>
      <li>${chauffeur}</li>
      <li></li>
      <li></li>
      <li></li>
    </ul>
    <p>Total : </p>
  </div>
  <div class="flex btn-valider-retour">
    <div class="flex space-arround modal-btn">
      <div><a href="" class="btn btn-annuler">Retour à la saisie</a></div>
      <div><button type="submit" class="btn">Valider</button></div>
    </div>
    <a href="formulaire.html" class="annuler">Annuler la réservation</a>
  </div>
`
    modal.classList.add('active')
    console.log(e);
})
