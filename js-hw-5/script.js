let name = prompt('Твоё имя мой скиби тойлет?')
let money = 10000;
let account = 7777;

if (name == 'Alex') {

    let proshel = prompt('Номер счёта пупсик?')
    if (proshel === '7777') {

        let proshel2 = prompt('Сколько обналичить фреди фазбер?')

        if (proshel2 > 10000) {
            alert('диняг нема мы бедни')

        } else {
            alert(`Снял: ${proshel2} диняг | Осталось: ${10000 - proshel2} диняг`)
        }

    } else {
        alert('Номер счёта неправильный, но дам подсказку он состоит из цифр')
    }

}

else {
    alert('Досвидули')
}



