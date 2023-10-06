export function setStyleClass(objElement) {
    if (typeof objElement.style === 'string') {
        objElement.element.setAttribute('class', objElement.style)
    } else {
        if (objElement.style.lenght === 1){
            [...objElement.element].forEach(e => {
                e.attributes.getNamedItem('class').value += ` ${objElement.style[0]}`
            }) 
        } else {
            [...objElement.element].forEach((e, i) => {
                e.attributes.getNamedItem('class').value += ` ${objElement.style[i]}`
            })
        }
    }
}
