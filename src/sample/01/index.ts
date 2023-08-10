play(1, 2)
play(1, 1)
play(1, 0)

function play(leftHand: number, rightHand: number) {
    const result = judge(leftHand, rightHand)
    showResult(result)
}

function judge(leftHand: number, rightHand: number): number {
    if (leftHand === 0) { // Goo
        if (rightHand === 0) { // Goo
            return 2
        } else if (rightHand === 1) { // Choki
            return 1
        } else { // Par
            return 3
        }
    } else if (leftHand === 1) { // Choki
        if (rightHand === 0) { // Goo
            return 3
        } else if (rightHand === 1) { // Choki
            return 2
        } else { // Par
            return 1
        }
    } else { // Par
        if (rightHand === 0) { // Goo
            return 1
        } else if (rightHand === 1) { // Choki
            return 3
        } else { // Par
            return 2
        }
    }
}

function showResult(result: number) {
    if (result === 1) {
        console.log("勝ち")
    } else if (result === 2) {
        console.log("引き分け")
    } else {
        console.log("負け")
    }
}