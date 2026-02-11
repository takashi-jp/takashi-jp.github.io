const correctBirthday = "2003年2月21日";

function askBirthday() {
    const userBirthday = prompt("あなたの誕生日はなんですか？ (例: 2003年2月21日)");
    if (userBirthday === correctBirthday) {
        alert("正解です！次に進めます。");
        showMainContent();
    } else {
        alert("誕生日が正しくありません。もう一度試してください。");
        askBirthday();
    }
}

function showMainContent() {
    const mainContent = document.querySelector('.container');
    mainContent.style.display = 'block';
}

document.addEventListener('DOMContentLoaded', () => {
    const mainContent = document.querySelector('.container');
    mainContent.style.display = 'none';
    askBirthday();
});