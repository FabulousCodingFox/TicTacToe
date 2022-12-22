function buildTable(){
    document.getElementById("tictactoe").innerHTML = /*html*/ `
    <tbody>
        <tr>
            <td><button id="btn00"></button></td>
            <td><button id="btn10"></button></td>
            <td><button id="btn20"></button></td>
        </tr>
        <tr>
            <td><button id="btn01"></button></td>
            <td><button id="btn11"></button></td>
            <td><button id="btn21"></button></td>
        </tr>
        <tr>
            <td><button id="btn02"></button></td>
            <td><button id="btn12"></button></td>
            <td><button id="btn22"></button></td>
        </tr>
    </tbody>`
}

function onButtonClick(event){
    // Tabellenzelle bestimmen
			var td = event.target;

			// Button oder Zelle?
			while (td.tagName.toLowerCase() != "td"
				&& td != field
			) {
				td = td.parentNode;
			}
}

document.addEventListener("DOMContentLoaded", buildTable)
document.getElementById("tictactoe").addEventListener("click", onButtonClick);