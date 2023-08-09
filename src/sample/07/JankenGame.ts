import Display from "./displays/Display";
import Rule from "./rules/Rule";

export default class JankenGame {
    constructor(
        private readonly display: Display,
        private readonly rule: Rule
    ) {
    }

    play(leftHand: number, rightHand: number): void {
        const result = this.rule.judge(leftHand, rightHand)
        this.display.show(result)
    }
}