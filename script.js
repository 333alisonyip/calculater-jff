function calculatePower() {
    // 获取输入框中的底数和指数值
    const base = parseFloat(document.getElementById('base').value);
    const exponent = parseFloat(document.getElementById('exponent').value);

    // 检查输入是否合法
    if (isNaN(base) || isNaN(exponent)) {
        document.getElementById('result').textContent = "请输入有效的数字。";
        return;
    }

    // 计算次方
    const result = Math.pow(base, exponent);

    // 显示结果
    document.getElementById('result').textContent = `${base} 的 ${exponent} 次方是: ${result}`;
}
