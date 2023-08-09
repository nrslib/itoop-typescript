export default class JankenGame {
    /**
     * @param lang ja:日本語,en:英語
     */
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
        // TODO: ja: 日本語、en: 英語で結果を表示しよう
        if (result === 1) {
            console.log("勝ち")
        } else if (result === 0) {
            console.log("引き分け")
        } else {
            console.log("負け")
        }
    }
}