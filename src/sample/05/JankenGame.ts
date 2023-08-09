import Display from "./displays/Display";
import Rule from "./rules/Rule";
import ReverseRule from "./rules/ReverseRule";
import NormalRule from "./rules/NormalRule";
import JapaneseDisplay from "./displays/JapaneseDisplay";
import EnglishDisplay from "./displays/EnglishDisplay";

export default class JankenGame {
    play(leftHand: number, rightHand: number, lang: string, ruleName: string): void {
        const rule = this.getRule(ruleName)
        const result = rule.judge(leftHand, rightHand)
        const display = this.getDisplay(lang)
        display.show(result)
    }

    private getRule(ruleName: string) : Rule {
        if (ruleName === "default") {
            return new NormalRule()
        } else {
            return new ReverseRule()
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