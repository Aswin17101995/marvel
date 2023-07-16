let fav = []

let public_key = 'ca0e0b922d621d54fe064cf12c2f12f4'
let hashValue = 'def481caad2425e56f20a9455cdbc3a7'

const handleFav = (e)=>{
    let temp = e.target.parentElement.parentElement
    let id = parseInt(temp.id)
    if(id){
        let index = fav.indexOf(id)
        if(index != -1){
            fav.splice(index,1)
        }
        localStorage.setItem('fav',JSON.stringify(fav))
        temp.remove()
    }
}
if(localStorage.getItem('fav')){
    fav = JSON.parse(localStorage.getItem('fav'))
}
let ele = document.getElementById("result_box")
if(fav.length > 0){
    
    fav.forEach(async(itm)=>{
       let data = await fetch(`http://gateway.marvel.com/v1/public/characters/${itm}?ts=${1}&apikey=${public_key}&hash=${hashValue}`)
        let json_data = await data.json()
        let x = json_data.data.results[0]
        let div = document.createElement('div')
        div.style.padding= "15px"
        div.style.textAlign = "center"
        div.style.background="red"
        div.style.height = "365px"
        div.style.display="flex"
        div.style.flexDirection="column"
        div.style.alignItems="center"
        div.style.borderRadius ="20px"
        div.setAttribute('class','card')
            let img = document.createElement('img')
            img.setAttribute('id',"imgs")
            div.style.transition="all 0.2s ease-out"
            img.setAttribute('src',`${x.thumbnail.path}.${x.thumbnail.extension}`)
            img.style.width = "300px"
            img.style.height = "300px"
            img.style.objectFit="cover"
            img.style.borderRadius = "10px"
            let title_div = document.createElement('div')
            title_div.style.color = "white"
            title_div.style.fontSize = "22px"
            title_div.style.fontFamily = "sans-serif"
            title_div.style.maxWidth="300px"
            title_div.style.fontWeight = "800"
            title_div.innerHTML = x.name
            let star_div = document.createElement('div')
            star_div.style.color = "white"
            star_div.innerHTML = `<i class="fa-solid fa-star"></i>`
            star_div.addEventListener('click',handleFav)
            div.setAttribute('id',`${x.id}`)
            div.appendChild(img)
            div.appendChild(title_div)
            div.appendChild(star_div)
            ele.appendChild(div)
    })
}



console.log(fav)