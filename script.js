//variables 

const tagsEl = document.getElementById('tags')
const textarea = document.getElementById('textarea')

textarea.focus()

// we are listening for when we press down and you let go this fires up

textarea.addEventListener('keyup', (e) => {

    createTags(e.target.value)  //calls this fun its gonna be whatever we type in
    if(e.key === 'Enter') {
        setTimeout(() => {
            e.target.value = ''
        }, 10)


        randomSelect()
    }

})

//.filter is a high order array method that allows you to return certain 
//things based on a condition

function createTags(input) {

    const tags = input.split(',').filter(tag => tag.trim()
    !== '').map(tag => tag.trim())
    
    //clears the inner text
    tagsEl.innerHTML = ''

    tags.forEach(tag => {
        const tagEl = document.createElement('span')
        tagEl.classList.add('tag')
        tagEl.innerText = tag
        tagsEl.appendChild(tagEl)  //div with the id tags
    })
}


function randomSelect() {
    
    const times = 30

    const interval = setInterval(() => {
        const randomTag = pickRandomTag()

        highLightTag(randomTag)

        setTimeout(() => {
            unHighLightTag(randomTag)
        }, 100)
    }, 100);

    setTimeout (() => {
        clearInterval(interval)

        setTimeout (() => {
            const randomTag = pickRandomTag()

            highLightTag(randomTag)
        }, 100)
    }, times * 100)
}


function pickRandomTag () {
    const tags = document.querySelectorAll('.tag')
    return tags[Math.floor(Math.random() * tags.length)]
}

function highLightTag(tag) {
    tag.classList.add('highlight')
}

function unHighLightTag(tag) {
    tag.classList.remove('highlight')
}



