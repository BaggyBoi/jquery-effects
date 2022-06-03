// let ranNumArr = []
// for (let i = 0; i < $(".viewDiv").length; i++) {
//     ranNumArr = []
//     for (let i = 0; i < 3; i++) {
//         let ranNum = Math.floor(Math.random() * (150));
//         ranNumArr.push(ranNum)
//     }
//     let ranIndex = Math.floor(Math.random() * (3));
//     console.log(ranIndex)
//     ranNumArr.splice(ranIndex, 1, 255)
//     let valuetext = `rgb(${ranNumArr[0]}, ${ranNumArr[1]}, ${ranNumArr[1]})`
//     console.log(valuetext)
// }
// console.log(ranNumArr)
// jquery method /\ /\ /\

// native javascript method \/ \/ \/
function color() {
    let ranNumArr = []
    let viewDivArray = document.getElementsByClassName("viewDiv")
    for (let i = 0; i < viewDivArray.length; i++) {
        ranNumArr = []
        for (let i = 0; i < 3; i++) {
            let ranNum = Math.floor(Math.random() * (151)) + 75;
            ranNumArr.push(ranNum)
        }
        // let ranIndex = Math.floor(Math.random() * (3));
        // ranNumArr.splice(ranIndex, 1, 255)
        let valuetext = `rgb(${ranNumArr[0]}, ${ranNumArr[1]}, ${ranNumArr[1]})`
        viewDivArray[i].style.backgroundColor = valuetext
        // console.log(ranIndex)
    }
}
color()
