console.log(window.location.search)
let public_key = 'ca0e0b922d621d54fe064cf12c2f12f4'
let hashValue = 'def481caad2425e56f20a9455cdbc3a7'

let id = window.location.search
let ful_id = id.substring(1)

const getData = async()=>{
    let data = await fetch(`https://gateway.marvel.com/v1/public/characters/${ful_id}?ts=${1}&apikey=${public_key}&hash=${hashValue}`)
    let json_data = await data.json()
    let result = json_data.data
    let itm = result.results[0]
    console.log(itm)
    let ele = document.getElementById("infoBox")
    ele.style.background = `linear-gradient(45deg,rgba(0,0,0,.5),rgba(0,0,0,0.9)),url(${itm.thumbnail.path}.${itm.thumbnail.extension})`
    ele.style.backgroundRepeat = 'no-repeat'
    ele.style.backgroundSize="cover"
    ele.style.backgroundPosition="center"
    let title = document.getElementById('title')
    title.innerHTML = `${itm.name.toUpperCase()}`
    let desc = document.getElementById("desc")
    desc.innerHTML = `${itm.description}`
    let comics = document.getElementById("comic_scroll")
    let comicsData = itm.comics.items
    comicsData.forEach((x)=>{
        let c_div = document.createElement('div')
        c_div.innerHTML = `${x.name}`
        c_div.setAttribute('class','inner-div')
        comics.append(c_div)
    })
    let storyData = itm.stories.items
    let story = document.getElementById('story_scroll')
    storyData.forEach((x)=>{
        let c_div = document.createElement('div')
        c_div.innerHTML = `${x.name}`
        c_div.setAttribute('class','inner-div')
        story.append(c_div)
    })
    let events = document.getElementById('events_scroll')
    let eventsData = itm.events.items
    eventsData.forEach((x)=>{
        let c_div = document.createElement('div')
        c_div.innerHTML = `${x.name}`
        c_div.setAttribute('class','inner-div')
        events.append(c_div)
    })
    let series = document.getElementById("series_scroll")
    let seriesData = itm.series.items
    seriesData.forEach((x)=>{
        let c_div = document.createElement('div')
        c_div.innerHTML = `${x.name}`
        c_div.setAttribute('class','inner-div')
        series.append(c_div)
    })
}

getData()
