import Display from "./Display";

export default class JapaneseDisplay implements Display {
    show(result: number) {
        if (result === 1) {
            console.log("勝ち")
        } else if (result === 0) {
            console.log("引き分け")
        } else {
            console.log("負け")
        }
    }
}