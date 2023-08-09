import Rule from "./Rule";

export default class ReverseRule implements Rule {
    judge(leftHand: number, rightHand: number) {
        if (leftHand === 0) { // Goo
            if (rightHand === 0) { // Goo
                return 0
            } else if (rightHand === 1) { // Choki
                return -1
            } else { // Par
                return 1
            }
        } else if (leftHand === 1) { // Choki
            if (rightHand === 0) { // Goo
                return 1
            } else if (rightHand === 1) { // Choki
                return 0
            } else { // Par
                return -1
            }
        } else { // Par
            if (rightHand === 0) { // Goo
                return -1
            } else if (rightHand === 1) { // Choki
                return 1
            } else { // Par
                return 0
            }
        }
    }
}