//Форматирование даты 
export default function dateFormat ( date, locale = 'ru-RU' ) {
    const formattedDate = new Date( date )
    const year = formattedDate.getFullYear()
    const time = formattedDate.toLocaleTimeString('ru', {
        hour: '2-digit',
        minute: '2-digit'
    })
    const day = formattedDate.toLocaleString(locale, {
        day: '2-digit'
    })
    const month = formattedDate.toLocaleString(locale, {
        month: 'long'
    })

    return `${day} ${month} ${year} в ${time}`;

}