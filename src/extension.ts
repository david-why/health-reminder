import * as vscode from 'vscode';

let timer: NodeJS.Timer;
let statusBar: vscode.StatusBarItem;

export function activate(context: vscode.ExtensionContext) {
	statusBar = vscode.window.createStatusBarItem(vscode.StatusBarAlignment.Right, 100);
	statusBar.hide();
	timer = setInterval(remind, 1000 * 60 * 15);
	remind();
	context.subscriptions.push(statusBar);
}

function remind() {
	vscode.window.showInformationMessage("Time for your pelvic-floor exercises!");
	statusBar.text = "Ready?";
	statusBar.show();
	let i = 0;
	for (; i < 20; i++) {
		setTimeout(() => {
			statusBar.text = ">o<";
			statusBar.show();
		}, 3000 + i * 1000);
		setTimeout(() => {
			statusBar.text = ">O<";
			statusBar.show();
		}, 3600 + i * 1000);
	}
	setTimeout(() => {
		statusBar.hide();
	}, 3000 + i * 1000);
}

export function deactivate() { clearInterval(timer); }
