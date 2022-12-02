const numero = document.querySelector("input");
let fatorial = 1;
   
    document.getElementById("calcular").onclick = function() {
        if(numero.value != "") {
            for(let i = 1; i <= numero.value; i++) {
                fatorial = i * fatorial;
            }
                let valor = numero.value;
                var resposta = `<p class="paragrafo-resultado">O fatorial de ${valor} é: <span>${fatorial}<span><p>`;
                document.getElementById("resultado").innerHTML += resposta;

        }   
        else {
            window.alert("O campo não pode estar vazio!");
        }
        
        
    }

document.getElementById("limpar").onclick = function() {
    document.querySelector("input").value = "";
    document.getElementById("resultado").innerHTML = "";
    fatorial = 1;
}