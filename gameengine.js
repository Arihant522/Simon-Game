// alert("press any key to start the game");
const colorseq=["red","yellow","green","blue"];
function randomsequence()
{
    let min=0;
    let max=3;
    let random=(min + Math.floor((max-min+1)*Math.random()));
    return random;
}
function startgame(){
    let timetoseecolor=3000;
    let currentlevel=document.getElementById("current-level");
    currentlevel.innerHTML=Number(currentlevel.innerHTML)+1;
    let storedcolor=[];
    console.log(storedcolor);

    for(let i=0;i<Number(currentlevel.innerHTML);i++)
    {
        let colorelement=colorseq[randomsequence()];
        let colorchosen=document.getElementById(colorelement);
        colorchosen.classList.add("chosen");
           
           setTimeout(()=>{
            console.log("timestopped");
            colorchosen.classList.remove("chosen");
        },3000)
        storedcolor.push(colorchosen);
        console.log(storedcolor);
    }
    console.log(storedcolor);
    let colorchosen=document.getElementsByClassName(colorseq[randomsequence()]);
}

