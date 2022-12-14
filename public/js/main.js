import  competencesJson from "../../data/competences.json" assert {type:"json"};

const competences=competencesJson;

console.log(competences);
const competencesDiv=document.querySelector(".data-competence");

for(let i=0;i<competences.length; i++){
    console.log(competences[i].title);
    const div=document.createElement("div");
    div.classList.add("box")
    div.innerHTML=`<div><img src="${competences[i].icon}"></div>"
    `;
    competencesDiv.appendChild(div);
}
