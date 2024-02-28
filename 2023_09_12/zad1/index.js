const FORBIDDEN_NUMBERS = [69, 420, 2137]

/**
 * @param {Number} year
 * @param {Number} favouriteNumber
 */
const f1 = (year, favouriteNumber) => {
    const elem = document.createElement('p')

    elem.innerText = `Ulubioną liczbą osoby urodzonej w ${year} roku jest ${favouriteNumber}.`

    document.body.appendChild(elem)
}

const NaNAlert = () => {
    alert('To nie jest liczba!')
}

const f2 = () => {
    let year, favouriteNumber

    do {
        year = Number(prompt('Podaj rok urodzenia'))
        if (isNaN(year)) {
            NaNAlert()
        }
    } while (isNaN(year) || year < 1920 || year > 2023)

    do {
        favouriteNumber = Number(prompt('Podaj ulubioną liczbę'))
        if (isNaN(favouriteNumber)) {
            NaNAlert()
        }
    } while (isNaN(favouriteNumber) || FORBIDDEN_NUMBERS.includes(favouriteNumber))

    f1(year, favouriteNumber)
}

setInterval(f2, 60000)