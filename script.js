window.onload = function()
{
    getRamdomQuotaionsReady();
}

function getRamdomQuotaionsReady()

{
    var btn = document.getElementById("btn");
    btn.onclick = function()
    {
        var randomQuotesArray = [
            "The greatest glory in living lies not in never falling, but in rising every time we fall. -Nelson Mandela",
            "The way to get started is to quit talking and begin doing. -Walt Disney",
            "If life were predictable it would cease to be life, and be without flavor. -Eleanor Roosevelt",
            "If you look at what you have in life, you will always have more. If you look at what you do not have in life, you will never have enough. -Oprah Winfrey",
            "If you set your goals ridiculously high and it is a failure, you will fail above everyone elses success. -James Cameron",
            "Life is what happens when you are busy making other plans. -John Lennon"
        ];
        var randomQuote = document.getElementById("randomQuote");

        var rand = Math.floor( Math.random()*6); 

        randomQuote.textContent = randomQuotesArray[rand];
    }
}