let persons = [
    {
      name: "John",
      age: 25,
      city: "NewYork"
    },
    {
      name: "Alice",
      age: 30,
      city: "London"
    },
    {
      name: "Bob",
      age: 22,
      city: "Paris"
    },
    {
      name: "Alex",
      age: 19,
      city: "London"
    },
    {
      name: "Tyler",
      age: 24,
      city: "NewYork"
    },
    {
      name: "Constantine",
      age: 31,
      city: "Paris"
    },
    {
      name: "Cole",
      age: 21,
      city: "London"
    }
  ];


//   1 Задание
//   function findPersonsByCity(city) {
//     return persons.filter(person => person.city === city);
//   }
//   let city = prompt("Введите название города:");
//   let personsInCity = findPersonsByCity(city);
//   console.log(personsInCity);
  





// 2 Задание
  function calculateAverageAge() {
      return totalAge 
    } 
    let totalAge = persons.reduce((a, b) => a + b.age, 0) / persons.length;
    console.log(calculateAverageAge());
  




  // 3 Задание
  function addNewKabachok(name, age, city) {
    let newKabachok = {
      name: name,
      age: age,
      city: city
    };
    persons.push(newKabachok);
  }


  let namee = prompt('имя кабачка')
  let age = prompt('возраст кабачка')
  let city = prompt('город баклажанчика')

  addNewKabachok(namee, age, city);
  console.log(persons);
  