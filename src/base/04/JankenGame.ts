export default class JankenGame {
    play(leftHand: number, rightHand: number, lang: string): void {
        const result = this.judge(leftHand, rightHand)
        this.showResult(result, lang)
    }

    private judge(leftHand: number, rightHand: number): number {
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

    private showResult(result: number, lang: string) {
        if (lang === "ja") {
            // TODO: JapaneseDisplay を使おう
        } else {
            // TODO: EnglishDisplay を使おう
        }
    }
}