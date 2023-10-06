import { getElement } from "./getElements.js"
import { setStyleClass } from "./setStyleClass.js"


export function factoryElement(element, style, byID=false){
    getElement({element, style, byID})
        .then(setStyleClass)
}

