const curEx = Array.from(document.querySelector('#menu').children);
const listEx = Array.from(document.querySelector('#conteneur').children);
// const takeEx = Ex => console.log(Ex)
function takeEx(e){
    const a = "toto"
    // const exNb = console.log(e.target.classList[1])
    // console.log("bite")
    // console.log(e.target.classList)
    listEx.forEach(ex => {
        if(ex.classList[2] !== undefined) {
            ex.classList.remove("display")
        }
        if (e.target.classList[1] === ex.classList[1]) {
            ex.classList.add("display")
        }
    })
}

curEx.forEach(click => click.addEventListener('click', takeEx))
