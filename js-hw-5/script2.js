let clubName = prompt('Имя свое напиши кабачок')

// let money = prompt("Сколько у тебя денег в кармане кабачок?")

if (clubName.toLowerCase().charAt() === 'a') {
    let clubAge = prompt("Укажи свой возраст кабачок")

    if (clubAge >= 20 && clubAge <= 40) {
        let clubMoney = prompt('Сколько диняг с собой?')

        if (clubMoney > 100) {
            let clubPeople = prompt('Сколько кабачков всего будет?')

alert(`Кабачка зовут: ${clubName} 
Кабачку: ${clubAge} лет  
У кабачка ${clubMoney} диняг 
В клуб планируют зайти ${clubPeople} кабачка(ов) `)
        } else {
            alert('Ну кабачок ты сама нищета')
        }

    } else {
        alert('Кабачок не допустен')
    }

} else {
    alert('Кабачок недопущен')
}
