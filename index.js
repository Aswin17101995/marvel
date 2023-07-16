

let ts = 1688825069587684
let public_key = 'ca0e0b922d621d54fe064cf12c2f12f4'
let hashValue = 'def481caad2425e56f20a9455cdbc3a7'
let data = []
let page = 0;
let total = 0;
let fav = []
if(localStorage.getItem('fav')){
    fav = JSON.parse(localStorage.getItem('fav'))
}

console.log(fav)
let searchbox = document.getElementById("searchbox")
searchbox.addEventListener('keyup',handleSearch)


function handleFav (e){
    e.stopPropagation()
    console.log(fav)
    let temp = e.target.parentElement
    console.log(temp.id)
    if(temp.id){
        if(fav.includes(parseInt(temp.id))){
            let index = fav.indexOf(parseInt(temp.id))
            if(index != -1){
                fav.splice(index,1)
                e.target.parentElement.innerHTML =  ""
                temp.innerHTML =  `<i class="fa-regular fa-star"></i>`
            }
        }else{
            fav.push(parseInt(temp.id))
            console.log("pusegd",temp.id)
            e.target.parentElement.innerHTML =  ""
            temp.innerHTML =  `<i class="fa-solid fa-star"></i>`
        }
    }else{
        console.log(e.target)
    }
    localStorage.setItem('fav',JSON.stringify(fav))
}

async function handleSearch (e){
    let val = e.target.value;
    if(val.length == 0){
        let ele = document.getElementById('result_box')
        ele.style.display="none"
    }else{
        let data = await fetch(`https://gateway.marvel.com/v1/public/characters?nameStartsWith=${val}&orderBy=name&ts=${1}&apikey=${public_key}&hash=${hashValue}`)
        let json_data = await data.json()
        let result = json_data.data.results
        let ele = document.getElementById('result_box')
        ele.style.display="block"

        //remove previous
        let previous = document.querySelectorAll('#card_element')
        previous.forEach((itm)=>{
            itm.remove()
        })

        let no_result = document.getElementById('no_result')
        if(no_result){
             no_result.remove()
             ele.style.height = "350px"
        }
       

        console.log(result)
        result.forEach((itm)=>{
            let card = document.createElement('div')
            card.style.display ='flex'
            card.setAttribute('id','card_element')
            card.style.marginBottom = "5px"
            card.style.borderBottom ="1px solid white"
            card.style.padding = "5px"
            let img = document.createElement('img')
            img.setAttribute('src',`${itm.thumbnail.path}.${itm.thumbnail.extension}`)
            img.style.width = "100px"
            img.style.height = "100px"
            img.style.objectFit = "cover"
            img.style.borderRadius = "20px"
            let title_div = document.createElement('div')
            let ptag = document.createElement('p')
            
            ptag.style.fontSize = "16px"
            ptag.style.fontWeight = "300"
            ptag.style.cursor = "pointer"
            ptag.style.width = 'max-content'
            ptag.style.color = "white"
            ptag.setAttribute('id',`${itm.id}`)
            ptag.addEventListener('click',handleFav)
            if(fav.includes(parseInt(itm.id))){
                ptag.innerHTML = `<i class="fa-solid fa-star"></i>`
              
            }else{
                ptag.innerHTML = `<i class="fa-regular fa-star"></i>`
            }
            let title = document.createElement('a')
            title.innerHTML =`${itm.name}`
            title_div.style.marginLeft = "20px"
            title_div.style.marginTop = "10px"
            title.style.fontSize ="22px"
            title.style.color ="white"
            title.style.fontWeight ="800"
            title.style.cursor = "pointer"
            title.style.textDecoration = "none"
            title.setAttribute('href',`superhero.html?${itm.id}`)
            card.appendChild(img)
            card.appendChild(title_div)
            title_div.append(title)
            title_div.appendChild(ptag)
            ele.appendChild(card)
        })

        if(result.length == 0){
               let no_result = document.getElementById('no_result')
               if(!no_result){
                let div_ele = document.createElement('div')
               div_ele.setAttribute('id','no_result')
               div_ele.innerHTML = 'No results Found'
               div_ele.style.textAlign ="center"
               ele.style.height = "max-content"
               div_ele.style.color = "white"
               div_ele.style.fontSize = "22px"
               ele.appendChild(div_ele) 
               }
        }
    }
}


console.log(new Date().getTime())
const fetchData = async()=>{

}



fetchData()
