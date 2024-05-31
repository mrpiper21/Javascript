function Timer() {
    let hr = "00";
    for (let i = 0; i < 24; i++){
        
    }
}
Timer()

const button = document.getElementsByTagName("button")
const box = document.getElementsByClassName("box")

button[0].onclick = () => {
    
}

let sec = 10
setTimeout(()=>{
    setInterval(() => {
        --sec
        console.log(sec)
        if (sec === 0) {
            clearTimeout(sec)
        }
    },1000)
},[3000])