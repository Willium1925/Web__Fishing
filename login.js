    document.getElementById("login_form").addEventListener("submit", function(event) {
    event.preventDefault(); // 阻止表單送出

    // 取得輸入的值
    var account = document.getElementById("input_nick_name").value;
    var password = document.getElementById("input_password").value;

    // 正則表達式：
    // 帳號：只能英文字母或數字，長度 4~12
    var accountRegex = /^[A-Za-z0-9]{4,12}$/;

    // 密碼：必須英文字母與數字混合，長度 6~16
    var passwordRegex = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{6,16}$/;

    // 驗證帳號與密碼
    if (!accountRegex.test(account) || !passwordRegex.test(password)) {
    alert("帳號或密碼格式錯誤");
} else {
    alert("登入成功!!\n帳號：" + account + "\n密碼：" + password);
}
});
