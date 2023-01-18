let homeEl = document.getElementById("home-el")
let home_score = 0

let guestEl = document.getElementById("guest-el")
let guest_score = 0

let buttonReset = document.getElementById("button-reset")

function home_one(){
    home_score += 1
    homeEl.textContent = home_score
}

function home_two(){
    home_score += 2
    homeEl.textContent = home_score
}

function home_three(){
    home_score += 3
    homeEl.textContent = home_score
}

function guest_one(){
    guest_score += 1
    guestEl.textContent = guest_score
}

function guest_two(){
    guest_score += 2
    guestEl.textContent = guest_score
}

function guest_three(){
    guest_score += 3
    guestEl.textContent = guest_score
}

function reset_scores(){
    home_score = 0
    guest_score = 0
    homeEl.textContent = home_score
    guestEl.textContent = guest_score
}