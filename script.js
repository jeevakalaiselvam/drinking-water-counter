const waterAnimation = document.getElementById("water-status-animation");
const waterGlasses = document.querySelectorAll(".water-glass");
const waterStatusText = document.querySelector(".water-status-text");
const success = document.querySelector(".success");
let intervalReference;

let totalToDrink = 2 * 250 * 4;
let totalMls = 0;
let percentagePrevious = 0;
let percentageCurrent = 0;

waterGlasses.forEach((glass) => {
    glass.addEventListener("click", () => {
        totalMls += 250;
        waterAnimation.style.transform = `translateX(-${Math.floor(
            100 - (totalMls / totalToDrink) * 100
        )}%)`;
        percentageCurrent = (totalMls / totalToDrink) * 100;

        intervalReference = setInterval(() => {
            updatePercentage(percentagePrevious++);
        }, 10);

        glass.style.transform = `scale(0)`;
    });
});

function updatePercentage(number) {
    if (number + 1 >= 99) {
        waterStatusText.innerHTML = `100 %`;
        success.classList.add("completed");
        waterGlasses.classList.add("hidden");
        console.log("completed");
    } else {
        waterStatusText.innerHTML = `${number + 1}%`;
        if (percentageCurrent <= percentagePrevious) {
            alreadyWorking = false;
            clearInterval(intervalReference);
        }
    }
}
