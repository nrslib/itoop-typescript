main()

function main() {
    play(1, 2)
}

function play(leftHand: number, rightHand: number) {
    const result = judge(leftHand, rightHand)
    showResult(result)
}

function judge(leftHand: number, rightHand: number) {
    // TODO: 勝敗を判定して結果（1: 勝ち、2: 引き分け、3: 負け）を返却しよう
    return 0
}

function showResult(result: number) {
    // TODO: 結果をもとに勝敗を表示しよう
    console.log("結果を表示")
}