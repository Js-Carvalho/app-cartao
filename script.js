const numCartao = Number(document.getElementById("numero-cartao").value);
const nomeCartao = document.getElementById("nome").value;
const dataValidadeCartao = document.getElementById("data-validade").value;
const cvv = document.getElementById("cvv").value;
const cpf = document.getElementById("cpf").value;

let inputs = document.getElementsByTagName("input");

const proibidos = ["Backspace", "Shift", "Enter", "Escape", "CapsLock", "Control", "Meta", "Alt", "ContextMenu", "Dead", ",", ".", ";", ":", "=", "+", "(", ")",
    "*", "&", "¨", "%", "$", "#", "@", "!", "[", "]", "~", "´", "`"];

let teclaClick = "";

adcionarDados();

function adcionarDados() {
    let numberCartao = document.getElementById("number-cartao");
    let nameCartao = document.getElementById("name-cartao");
    let dateCartao = document.getElementById("date-cartao");
    let cvvCartao = document.getElementById("cvv-cartao");
    let cpfCliente = document.getElementById("cpf-cliente");

    let imgFrente = document.getElementById("img-cartao-frente");
    let imgAtras = document.getElementById("img-cartao-atras");
    let imgCpf = document.getElementById("img-cartao-cpf");
    let girar = document.getElementById("girar");

    let american = document.getElementById("img-container-american-express");
    let visa = document.getElementById("img-container-visa");
    let mastercard = document.getElementById("img-container-mastercard");

    /* window.onload = function () {
        let inputs = document.getElementsByTagName("input"); */

    for (let i = 0; i < inputs.length; i++) {
        inputs[i].addEventListener("click", function () {
            /* console.log(this); */
            if (this.id === "numero-cartao") {

                cvvCartao.style.display = "none";
                cpfCliente.style.display = "none";
                if (true) {
                    girar.classList.remove("red-back");
                }


                this.addEventListener("keyup", (e) => {      // adiciona o carater digitado no cartao
                    teclaClick = e.key;

                    if (teclaClick === "3") {
                        american.classList.add("display-band");
                    } else if (teclaClick === "4") {
                        visa.classList.add("display-band");
                    } else if (teclaClick === "5") {
                        mastercard.classList.add("display-band");
                    }
                    if (verificarTecla(teclaClick) === true) {
                        /* console.log(e.key); */
                        numberCartao.innerHTML += `${e.key}`;
                        if (numberCartao.textContent.length === 4 || numberCartao.textContent.length === 9 || numberCartao.textContent.length === 14) {
                            numberCartao.innerHTML += " ";
                        }

                        let maskCartao = document.getElementById("numero-cartao");

                        if (maskCartao.value.length === 4 || maskCartao.value.length === 9 || maskCartao.value.length === 14) {
                            maskCartao.value += " ";
                        }

                        let tamanhoInputCartao = numberCartao.textContent.length;
                        tamCartao(tamanhoInputCartao);
                    };
                });

            };

            if (this.id === "nome") {
                cvvCartao.style.display = "none";
                cpfCliente.style.display = "none";
                if (true) {
                    girar.classList.remove("red-back");
                }
                this.addEventListener("keyup", (e) => {        // adiciona o carater digitado no cartao
                    teclaClick = e.key;
                    if (verificarTecla(teclaClick) === true) {
                        nameCartao.innerHTML += `${e.key}`;
                    }

                });
            };

            if (this.id === "data-validade") {
                imgFrente.style.display = "";
                imgAtras.style.display = "";
                cvvCartao.style.display = "none";
                cpfCliente.style.display = "none";

                numberCartao.style.display = "";       // define os inputs da parte da frente como none para não aparecerem
                nameCartao.style.display = "";
                dateCartao.style.display = "";

                if (true) {
                    girar.classList.remove("red-back");
                }
                this.addEventListener("keyup", (e) => {         // adiciona o carater digitado no cartao
                    teclaClick = e.key;
                    if (verificarTecla(teclaClick) === true) {
                        dateCartao.innerHTML += `${e.key}`;
                        if (dateCartao.textContent.length === 2) {
                            dateCartao.innerHTML += "/";
                        }
                    }
                });
            };

            if (this.id === "cvv") {
                imgCpf.style.display = "none";
                imgFrente.style.display = "";
                imgAtras.style.display = "";

                if (true) {
                    girar.classList.add("red-back");        //verifica se o campo fei cliclado e adiciona a classe para girar
                }
                numberCartao.style.display = "none";       // define os inputs da parte da frente como none para não aparecerem
                nameCartao.style.display = "none";
                dateCartao.style.display = "none";
                cpfCliente.style.display = "none";
                cvvCartao.classList.add("cvv-cartao2");

                setTimeout(function () {
                    cvvCartao.style.display = "";
                }, 800);

                this.addEventListener("keyup", (e) => {   // adiciona o carater digitado no cartao
                    teclaClick = e.key;
                    if (verificarTecla(teclaClick) === true) {
                        cvvCartao.innerHTML += `${e.key}`;
                    }
                });
            };

            if (this.id === "cpf") {
                imgAtras.style.display = "none";
                imgCpf.style.display = "";

                cvvCartao.style.display = "none";
                cpfCliente.style.display = "";

                if (true) {
                    girar.classList.add("red-back");        //verifica se o campo fei cliclado e adiciona a classe para girar
                }

                if (this.id === "numero-cartao" || this.id === "nome" || this.id === "data-validade") {
                    girar.classList.remove("red-back");
                    imgCpf.style.display = "";
                }

                if (this.id === "cvv") {
                    girar.classList.add("red-back-cpf");

                }

                this.addEventListener("keyup", (e) => {   // adiciona o carater digitado no cartao
                    teclaClick = e.key;
                    if (verificarTecla(teclaClick) === true) {
                        cpfCliente.innerHTML += `${e.key}`;

                        let maskCpf = document.getElementById("cpf");

                        if (maskCpf.value.length === 3 || maskCpf.value.length === 7) {
                            maskCpf.value += ".";
                        } else if (maskCpf.value.length === 11) {
                            maskCpf.value += "-";
                        }

                        if (cpfCliente.textContent.length === 3 || cpfCliente.textContent.length === 7) {
                            cpfCliente.innerHTML += ".";
                        } else if (cpfCliente.textContent.length === 11) {
                            cpfCliente.innerHTML += "-";
                        }
                    }
                });
            };

            /* console.log(this.id); */
        });
    };
    /* }; */

};

function verificarTecla(teclaClick) {
    for (let i = 0; i < proibidos.length; i++) {
        if (teclaClick === proibidos[i]) {
            alert("tecla nao permitida, digite uma tecla válida!");
            return false;
        }
    };
    return true;
};

function verificarNumero(teclaClick) {
    if (isNaN(teclaClick)) {
        alert("Digite apenas numeros!");
        return false
    }
    return true;
};

function tamCartao(tamanhoInputCartao) {
    let max = 19;
    if (tamanhoInputCartao === max) {

        alert("numero do cartao completo, não é possivel adicionar mais digitos!");
        return false;
    } /* else {
        return true;
    } */

};

