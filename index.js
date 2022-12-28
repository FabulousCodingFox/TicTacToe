var currentCharacter = "O"

var board = [
    ["/", "/", "/"],
    ["/", "/", "/"],
    ["/", "/", "/"]
]

function buildTable() {
    document.getElementById("tictactoe").innerHTML = /*html*/ `
    <tbody>
        <tr>
            <td style="border-top: 0; border-left: 0"> <button id="btn00"></button></td>
            <td style="border-top: 0;">                <button id="btn01"></button></td>
            <td style="border-top: 0; border-right: 0"><button id="btn02"></button></td>
        </tr>
        <tr>
            <td style="border-left: 0"> <button id="btn10"></button></td>
            <td>                        <button id="btn11"></button></td>
            <td style="border-right: 0"><button id="btn12"></button></td>
        </tr>
        <tr>
            <td style="border-bottom: 0; border-left: 0"> <button id="btn20"></button></td>
            <td style="border-bottom: 0;">                <button id="btn21"></button></td>
            <td style="border-bottom: 0; border-right: 0"><button id="btn22"></button></td>
        </tr>
    </tbody>`
}

function announceWin(char) {
    let winString = char === "X" ? "<span style=\"color: #4D00FF\">X</span>" : "<span style=\"color: #ff004D\">O</span>"
    document.body.innerHTML += "<h1 class=\"win\">Spieler '" + winString + "' hat gewonnen</h1>"
    document.getElementById("tictactoe").classList.add("slideOut")
}

function announceTie() {
    document.body.innerHTML += "<h1 class=\"win\">Unentschieden</h1>"
    document.getElementById("tictactoe").classList.add("slideOut")
}

function checkForWins() {
    // Vertikal: X = 0, X = 1, X = 2
    if (board[0][0] === board[1][0] && board[1][0] === board[2][0] && board[0][0] !== "/") { announceWin(board[0][0]); return }
    if (board[0][1] === board[1][1] && board[1][1] === board[2][1] && board[0][1] !== "/") { announceWin(board[0][1]); return }
    if (board[0][2] === board[1][2] && board[1][2] === board[2][2] && board[0][2] !== "/") { announceWin(board[0][2]); return }

    // Horizontal: Y = 0, Y = 1, Y = 2
    if (board[0][0] === board[0][1] && board[0][1] === board[0][2] && board[0][0] !== "/") { announceWin(board[0][0]); return }
    if (board[1][0] === board[1][1] && board[1][1] === board[1][2] && board[1][0] !== "/") { announceWin(board[1][0]); return }
    if (board[2][0] === board[2][1] && board[2][1] === board[2][2] && board[2][0] !== "/") { announceWin(board[2][0]); return }

    // Diagonal
    if (board[0][0] === board[1][1] && board[1][1] === board[2][2] && board[1][1] !== "/") { announceWin(board[1][1]); return }
    if (board[2][0] === board[1][1] && board[1][1] === board[0][2] && board[1][1] !== "/") { announceWin(board[1][1]); return }

    // Unentschieden
    for (let x = 0; x < 3; x++) {
        for (let y = 0; y < 3; y++) {
            if (board[y][x] === "/") return
        }
    }
    announceTie()
}

function onButtonClick(event) {
    var td = event.target;
    if (td.tagName !== "TD") return

    let id = event.target.getElementsByTagName("button")[0].id
    let x = parseInt(id[4])
    let y = parseInt(id[3])
    board[y][x] = currentCharacter

    if (currentCharacter === "O") {
        td.innerHTML = "<p style=\"--color: #ff004D\">O</p>"
    } else {
        td.innerHTML = "<p style=\"--color: #4D00FF\">X</p>"
    }

    currentCharacter = currentCharacter === "O" ? "X" : "O"

    checkForWins();
}

document.addEventListener("DOMContentLoaded", buildTable)
document.getElementById("tictactoe").addEventListener("click", onButtonClick);