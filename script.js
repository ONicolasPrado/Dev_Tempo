let chave = 'cebcd482eda57fa9a6714c1c2ba91885'

function colocarnatela(dados) {
    console.log(dados)
    document.querySelector(".cidade").innerHTML = "Tempo em " + dados.name
    document.querySelector(".temp").innerHTML = Math.floor(dados.main.temp) + "°C"
    document.querySelector(".min-max").innerHTML = "min/max: " + Math.floor(dados.main.temp_min) + "/" + Math.floor(dados.main.temp_max) + "°C"
    document.querySelector(".icone") .src = "https://openweathermap.org/img/wn/" + dados.weather[0].icon + ".png"
    document.querySelector(".umidade").innerHTML = "Umidade Relativa:" + dados.main.humidity + "%"
}


async function buscarcidade(cidade) {
    let dados = await fetch("https://api.openweathermap.org/data/2.5/weather?q=" + cidade + "&appid=cebcd482eda57fa9a6714c1c2ba91885&units=metric").then(resposta => resposta.json())


    colocarnatela(dados)
}

function cliqueinobotao() {
    let cidade = document.querySelector('.input-cidade').value

    buscarcidade(cidade)
}
/*  CLica no BOTÃO
 -> CHAMA A FUNÇÃO cliqueinobotao()
 -> Vai no INPUT e pega o tem la dentro
 -> Passar a cidade para o servidor

    Math.floor = arredodar valores
 */