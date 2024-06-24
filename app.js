let mainRow = document.querySelector("main-row")
let ftProCard = document.querySelector("#feature-products")
let compareBtn = document.querySelector("#compareConclusion")
let selectorFroFirst = document.querySelector("#selector-compare")
let imgCom1 = document.querySelector("#img-01-compare")
let desHeading = document.querySelector("#proDisHeading")
let desCompare = document.querySelector("#productDis-compare")
let proName = document.querySelector("#productName-compare")
let proCode = document.querySelector("#productCode-compare")
let proPrice = document.querySelector("#productPrice-compare")
let selectorFroSec = document.querySelector("#selector-compare2")
let imgCom2 = document.querySelector("#img-01-compare2")
let desHeading2 = document.querySelector("#proDisHeading2")
let desCompare2 = document.querySelector("#productDis-compare2")
let proName2 = document.querySelector("#productName-compare2")
let proCode2 = document.querySelector("#productCode-compare2")
let proPrice2 = document.querySelector("#productPrice-compare2")
let compareConclu = document.querySelector("#compareConclusion")
let imgParent1 = document.querySelector("#div-compare1")
let imgParent2 = document.querySelector("#div-compare2")
let jewelry = [
    {
        title: "CRYSTAL BRACELET",
        image: "./ft-pro-images/ft-pro-img1.webp",
        navigationUrl: "./bracelets.html"
    },
    {
        title: "JEWELRY",
        image: "./ft-pro-images/ft-pro-img2.webp",
        navigationUrl: "./jewelry.html"
    },
    {
        title: "PALM STONE",
        image: "./ft-pro-images/ft-pro-img3.webp",
        navigationUrl: "./stones.html"
    },
    {
        title: "HEART",
        image: "./ft-pro-images/ft-pro-img4.webp",
        navigationUrl: "./heartstone.html"
    },
    {
        title: "FACE ROLLER",
        image: "./ft-pro-images/ft-pro-img5.webp",
        navigationUrl: "./faceroller.html"
    },
    {
        title: "HOME DECOR & GIFTS",
        image: "./ft-pro-images/ft-pro-img6.webp",
        navigationUrl: "./homedecors.html"
    },
    {
        title: "SELENITE PLATES",
        image: "./ft-pro-images/ft-pro-img7.webp",
        navigationUrl: "./selenite.html"
    },
    {
        title: "SPHERE/BALLS",
        image: "./ft-pro-images/ft-pro-img8.webp",
        navigationUrl: "./saphireballs.html"
    },
    {
        title: "CLUSTERS",
        image: "./ft-pro-images/ft-pro-img9.webp",
        navigationUrl: "./clusters.html"
    },
]
let compare = [
    {
        image: "./comapre-images/compare-img-1.webp",
        heading: "DESCRIPTION",
        description: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quibusdam repudiandae fuga commodi distinctio consectetur a amet magnam.",
        pName: "SET OF 3 WORRY STONE AMETHYST CRYSTAL ROSE",
        pCode: "LWD-04-42_TS-2",
        price: "$ 16.00"
    },
    {
        image: "./comapre-images/compare-img-2.webp",
        heading: "I",
        description: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quibusdam repudiandae fuga commodi distinctio consectetur a amet magnam.",
        pName: "ROSE QUARTZ WORRY STONE SLAB - THUMB STONE",
        pCode: "LWD-02-32_WB-4",
        price: "$ 13.00"
    },
    {
        image: "./comapre-images/compare-img-3.webp",
        heading: "DESCRIPTiON",
        description: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quibusdam repudiandae fuga commodi distinctio consectetur a amet magnam.",
        pName: "WORRY STONE ON CARD IN PROTECTIVE SLEEVE",
        pCode: "LTD-10-56_TS-5",
        price: "$ 18.00"
    },
    {
        image: "./comapre-images/compare-img-4.webp",
        heading: "DESCRIPTiON",
        description: "Orem ipsum dolor sit amet consectetur, adipisicing elit. Quibusdam repudiandae fuga commodi distinctio consectetur a amet.",
        pName: "WORRY STONES (SET OF 10)",
        pCode: "LBD-04-53_TS-4",
        price: "$ 65.00"
    },
    {
        image: "./comapre-images/compare-img-5.webp",
        heading: "DESCRIPTION",
        description: "Orem ipsum dolor sit amet consectetur, adipisicing elit. Quibusdam repudiandae fuga commodi distinctio consectetur a amet.",
        pName: "GEMSTONE WORRY STONE - FINGER MASSAGE STONE",
        pCode: "LWD-07-04_WB-2",
        price: "$ 22.00"
    },
    {
        image: "./comapre-images/compare-img-6.webp",
        heading: "DESCRIPTiON",
        description: "Orem ipsum dolor sit amet consectetur, adipisicing elit. Quibusdam repudiandae fuga commodi distinctio consectetur a amet.",
        pName: "GEMSTONE HEART - HEART SHAPED THUMB STONE",
        pCode: "LBD-01-82_WS-2",
        price: "$ 14.00"
    }
]
for(let i=1; i <= jewelry.length; i++){
    ftProCard.innerHTML += `<div class=" col-md-4 text-center ft-pr-hover" id="ft-pro-link"><a href="${jewelry[i-1].navigationUrl}">
    <div class="text-center" style="background-image: url(${jewelry[i-1].image}); height: 300px; background-repeat: no-repeat; background-size: 100%; background-position: center; position: relative;">

    </div>
    <button class="btn border border-1 rounded-0" style="position: relative; bottom: 45%; background-color: white;">${jewelry[i-1].title}</button>
    </a>
    </div>`
    // let urlForPage = document.querySelector("#ft-pro-link")
    // urlForPage.addEventListener("click", nextPage)
    // function nextPage(){
    //     location.href = `"${jewelry[i-1].navigationUrl}"`
// }
}

let imgCompare1 = document.createElement("img")
imgCompare1.style.width = "300px"
imgCompare1.style.height = "300px"
imgParent1.prepend(imgCompare1)
imgCompare1.classList.add("d-none")
let imgCompare2 = document.createElement("img")
imgCompare2.style.width = "300px"
imgCompare2.style.height = "300px"
imgParent2.prepend(imgCompare2)
imgCompare2.classList.add("d-none")
compareConclu.addEventListener("click", comparison);
function comparison(){
    if(selectorFroFirst.value == 0 || 1 || 2  && selectorFroSec.value == 3 || 4 || 5){
        imgCompare1.classList.remove("d-none")
        imgCompare2.classList.remove("d-none")
        imgCompare1.src = `${compare[selectorFroFirst.value].image}`
        imgCompare2.src = `${compare[selectorFroSec.value].image}`
        desHeading.innerHTML = compare[0].heading
        desHeading2.innerHTML = compare[0].heading
        desCompare.innerHTML = `${compare[selectorFroFirst.value].description}`
        desCompare2.innerHTML = compare[4].description
        proName.innerHTML = `${compare[selectorFroFirst.value].pName}`
        proName2.innerHTML = `${compare[selectorFroSec.value].pName}`
        proCode.innerHTML = `${compare[selectorFroFirst.value].pCode}`
        proCode2.innerHTML = `${compare[selectorFroSec.value].pCode}`
        proPrice.innerHTML = `${compare[selectorFroFirst.value].price}`
        proPrice2.innerHTML = `${compare[selectorFroSec.value].price}`
    }else{

    }
    
}

