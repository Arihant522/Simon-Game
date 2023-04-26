
// storing the elements of the colours of four colour choices
const topLeft=document.getElementById("panel-one")
const topRight=document.getElementById("panel-two")
const bottomLeft=document.getElementById("panel-three")
const bottomRight=document.getElementById("panel-four")
const levelNumber=document.getElementById("level-number")
let level=1;
let storedColor=[]
//Random Function to get any of the four choices
function getRandomColor()
{
    const sequences=[topLeft,topRight,bottomLeft,bottomRight];
    return sequences[Math.floor(Math.random()*sequences.length)];
}

//function to flash the active choice
let flash=(panel)=>{
    return new Promise((resolve, reject) => {
        storedColor.push(panel)
        panel.className+=" active";
        setTimeout(()=>{
           panel.className=panel.className.replace(" active"," ");
           //set a timeout to differentiate between 2 continuous lights
           setTimeout(()=>{
            resolve()
           }
           ,250)
        },1000);//FLASH THE COLOUR FOR 1 SEC
    });
}
let canClick=false
//function to manage the clicks
const panelClicked=(panel)=>{
    if(!canClick)//when we are not allowed to click
    return
    if(storedColor[0]!=panel)
    {
    alert("wrong choice") 
    level=1  
    levelNumber.innerHTML=level 
    }
    else
    {
        storedColor.shift();
        if(storedColor.length==0)
        {
            level++;
            levelNumber.innerHTML=level
            canClick=false
            main()
        }
    }
}
const main=async()=>{
    for(let i=0;i<level;i++)
    await flash(getRandomColor())
    canClick=true
}
main()
console.log(storedColor)
