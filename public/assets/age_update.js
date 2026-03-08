document.addEventListener('DOMContentLoaded', (event) => {
    let age_update = document.getElementById("age_update")
    let age_raw = calculateAge()
    age_update.innerHTML = parseAge(age_raw)
})

function calculateAge() {
    let now = Date.now()
    let birth = Date.parse("2004-11-16T20:00:00Z")
    let age_raw = Math.abs(now - birth)
    age_update.innerHTML = age_raw
    return age_raw
}

function parseAge(age_raw) {
    let years = Math.floor(age_raw / (1000 * 60 * 60 * 24 * 365))
    return years + " years old"
}