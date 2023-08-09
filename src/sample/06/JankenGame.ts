import Display from "./displays/Display";
import Rule from "./rules/Rule";

export default class JankenGame {
    play(leftHand: number, rightHand: number, display: Display, rule: Rule): void {
        const result = rule.judge(leftHand, rightHand)
        display.show(result)
    }
}