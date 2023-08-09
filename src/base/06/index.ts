import JankenGame from "./JankenGame";
import JapaneseDisplay from "./displays/JapaneseDisplay";

const display = new JapaneseDisplay()
const game = new JankenGame()
// TODO: Rule を引数で渡そう
game.play(0, 2, display, "default")
game.play(1, 2, display, "default")
game.play(2, 2, display, "default")
game.play(0, 2, display, "reverse")
game.play(1, 2, display, "reverse")
game.play(2, 2, display, "reverse")