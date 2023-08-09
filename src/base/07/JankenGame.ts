import Display from "./displays/Display";
import Rule from "./rules/Rule";

// TODO: コンストラクタを定義して、display と rule を受け取ってフィールドに格納して利用しよう
export default class JankenGame {
    play(leftHand: number, rightHand: number, display: Display, rule: Rule): void {
        const result = rule.judge(leftHand, rightHand)
        display.show(result)
    }
}