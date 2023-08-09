import JankenGame from "./JankenGame";
import JapaneseDisplay from "./displays/JapaneseDisplay";
import NormalRule from "./rules/NormalRule";

const display = new JapaneseDisplay()
const rule = new NormalRule()
const game = new JankenGame()
game.play(0, 2, display, rule)
game.play(1, 2, display, rule)
game.play(2, 2, display, rule)