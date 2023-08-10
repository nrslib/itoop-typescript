import Display from "./displays/Display";
import Rule from "./rules/Rule";
import NormalRule from "./rules/NormalRule";
import ReverseRule from "./rules/ReverseRule";

export default class JankenGame {
    // TODO: Rule を引数で受け取るように書き換えよう
    play(leftHand: number, rightHand: number, display: Display, ruleName: string): void {
        const rule = this.getRule(ruleName)
        const result = rule.judge(leftHand, rightHand)
        display.show(result)
    }

    private getRule(ruleName: string) : Rule {
        if (ruleName === "default") {
            return new NormalRule()
        } else {
            return new ReverseRule()
        }
    }
}