
function selectDog(array) {
    return new Dog(array.shift())
}

class Dog {
    constructor(data) {
        Object.assign(this, data)
    }

    getImageHtml() {
        let stampBadge = ""
        if(this.hasBeenSwiped) {
            this.hasBeenLiked ?
                stampBadge = `<img class="stamp" src="./images/badge-like.png">` :
                stampBadge = `<img class="stamp" src="./images/badge-nope.png">`}
        return `
            <img class="dog-image" src=${this.avatar}>
            ${stampBadge}
            <div class="text-box">
                <div class="dog-info">${this.name}, ${this.age}</div>
                <div class="dog-bio">${this.bio}</div>
        `
    }
}

export {
    Dog, 
    selectDog
}