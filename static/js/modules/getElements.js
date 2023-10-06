export function getElement(objElement){
    return new Promise((resolve, reject) => {
        try { 
            if (objElement.byID){
                objElement.element = document.getElementById(objElement.element)
            }else {
                objElement.element = document.getElementsByClassName(objElement.element)
            }
            return resolve(objElement)
        } catch (err) {
            reject(err)
        }   
    })       
}


