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
            return 0
        } else if (rightHand === 1) { // Choki
            return 1
        } else { // Par
            return -1
        }
    } else if (leftHand === 1) { // Choki
        if (rightHand === 0) { // Goo
            return -1
        } else if (rightHand === 1) { // Choki
            return 0
        } else { // Par
            return 1
        }
    } else { // Par
        if (rightHand === 0) { // Goo
            return 1
        } else if (rightHand === 1) { // Choki
            return -1
        } else { // Par
            return 0
        }
    }
}

function showResult(result: number) {
    if (result === 1) {
        console.log("勝ち")
    } else if (result === 0) {
        console.log("引き分け")
    } else {
        console.log("負け")
    }
}