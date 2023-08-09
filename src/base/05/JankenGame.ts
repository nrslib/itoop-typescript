import Display from "./displays/Display";
import JapaneseDisplay from "./displays/JapaneseDisplay";
import EnglishDisplay from "./displays/EnglishDisplay";

export default class JankenGame {
    /**
     * @param lang ja:日本語,en:英語
     * @param ruleName default:通常,reverse:逆
     */
    play(leftHand: number, rightHand: number, lang: string, ruleName: string): void {
        // TODO: ルールを使うように書き換えよう
        const result = this.judge(leftHand, rightHand)
        const display = this.getDisplay(lang)
        display.show(result)
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

    private getDisplay(lang: string) : Display {
        if (lang === "ja") {
            return new JapaneseDisplay()
        } else {
            return new EnglishDisplay()
        }
    }
}