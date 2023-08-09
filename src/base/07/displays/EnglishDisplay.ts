import Display from "./Display";

export default class EnglishDisplay implements Display {
    show(result: number) {
        if (result === 1) {
            console.log("win")
        } else if (result === 0) {
            console.log("draw")
        } else {
            console.log("lose")
        }
    }
}