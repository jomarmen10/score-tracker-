function displayRadioValue() {
    let ele = document.getElementsByName('team');
    let selectValue
    for (i = 0; i < ele.length; i++) {
        if (ele[i].checked)
            selectValue = document.getElementById(ele[i].id).value
    }
    let newValue = Number(document.getElementById('inputValue').value);
    document.getElementById(selectValue).innerHTML = newValue
}