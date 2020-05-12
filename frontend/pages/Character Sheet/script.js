var currentImgI = 0
const attributes = document.querySelectorAll(".attributes > input");
const images_ = document.querySelector("#char-img")
const images = document.querySelectorAll("#char-img > img")
const mods = document.getElementsByClassName('mod');
const charName_ = document.getElementById("char-name")


function UpdateCharName(){
    document.title = images_.title = charName_.value || "Seu Personagem"
}
function ChangeCharImg(){
    images[currentImgI].className = ""
    currentImgI = (currentImgI+1) % images.length
    images[currentImgI].className = "chosen"

}
function UpdateClassIcon(){
    const classe = document.querySelector("input[placeholder='Classe']").value.toLowerCase()
    const iElement = document.querySelector('#class-icon')
    var iconCode = "";

    if(classe === "caçador" ){
        iconCode = "ra ra-archery-target ra-2x";
    }
    else if(classe === "guerreiro"){
        iconCode = "ra ra-axe ra-2x";
    }
    else if(classe === "paladino"){
        iconCode = "ra ra-shield ra-2x";
    }
    else if(classe === "ladino"){
        iconCode = "ra ra-plain-dagger ra-2x";
    }
    else if(classe === "bruxo"){
        iconCode = "ra ra-bleeding-eye ra-2x";
    }
    else if(classe === "monge"){
        iconCode = "ra ra-doubled ra-2x";
    }
    else if(classe === "alquimista"){
        iconCode = "ra ra-round-bottom-flask ra-2x";
    }
    else if(classe === "mago"){
        iconCode = "ra ra-rune-stone ra-2x";
    }
    else if(classe === "sacerdote"){
        iconCode = "ra ra-sun ra-2x";
    }
    else if(classe === "druida"){
        iconCode = "ra ra-sprout-emblem ra-2x";
    }
    else if(classe === "feiticeiro"){
        iconCode = "ra ra-trefoil-lily ra-2x";
    }
    else if(classe === "camponês"){
        iconCode = "ra ra-pawn ra-2x";
    }

    iElement.className = iconCode;
}
function UpdateAttrMods(){
   // console.log('UpdateAttrMods()');

    for(let i=0; i<6 ; i++)
    {
        mods[i].innerHTML = Math.floor( (attributes[i].value-10)/2 );
    }

}
function UpdateThisMod(index){
    console.log('UpdateThisMod()');

    mods[index].innerHTML = Math.floor( (attributes[index].value-10)/2 );

}
function SortAttributes(){
    
    let total = 0
    
    for(let i=0; i<6; i++)
    {
        let sorted = 0
        let rolls = [d6(), d6(), d6(), d6()]

        let soma1 = rolls.reduce( (soma=0, dice) => soma + dice ) 
        
        let menorzim = rolls.reduce( (menor=0, dice) => {
            if(dice < menor)
            {
                return dice
            }
            
            return menor
        })
        
        sorted = soma1 - menorzim 
        
        total += attributes[i].value = sorted;
    }
    
    UpdateAttrMods();
    
}
function d6()
{
    /*return Math.floor( Math.random() * (max - min + 1) ) + min;*/
    return Math.floor(Math.random() * (6)) + 1;
}



