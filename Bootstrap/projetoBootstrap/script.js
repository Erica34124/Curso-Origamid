const entrada = document.getElementById("ent");
const deposito = document.getElementById("dep");
const saque = document.getElementById("sac");
const extrato = document.getElementById("ext");
const saida = document.getElementById("sai");
const movExtrato = document.getElementById("mov");

function dataCurta(){
    const data = new Date()

    var dia = data.getDate();
    var mes = data.getMonth()-1;
    var ano = data.getFullYear();
    var hora = data.getHours();
    var min = data.getMinutes();

    if ((dia.toString).length==1){
        dia = "0"+dia;
    }
    if ((mes.toString).length==0){
        mes = "0"+mes;
    }
    if (hora.toString.length==0){
        hora = "0"+hora;
    }
    if (min.toString.length==0){
        min = "0"+min;
    }
    return `${dia} / ${mes} / ${ano} - ${hora}:${min} hs`;

}




var Poupanca = {
    saldo: 0,
    movimentacao: [],

    Depositar: function () {
        const valordep =  Number(entrada.value);
        this.saldo += valordep;
        saida.innerHTML = `R$ ${this.saldo.toFixed(2)}`;
       
        this.movimentacao.push(`Depósito de R$ ${valordep.toFixed(2)} em ${dataCurta()}`);
        entrada.value = " "
        return saida;

    },

    Sacar: function () {
        if (entrada.value <= this.saldo) {

            const valorSac = Number(entrada.value);
            this.saldo -= valorSac;
            saida.innerHTML = `R$ ${this.saldo.toFixed(2)}`;
            this.movimentacao.push(`Saque de R$ ${valorSac.toFixed(2)} em ${dataCurta()}`)
            entrada.value = " "
            return saida;
        }
        else {
            alert( "Saldo insuficiênte");
            entrada.value = " "
        }
    },

    Movimentacao: function () {
        for (let i = 0; i <= (this.movimentacao).length - 1; i++) {
            const li = document.createElement("li");

            // movExtrato.innerHTML += `${this.movimentacao[i]}` + " <br>"
            li.innerHTML += `${this.movimentacao[i]}` + " <br>"
            movExtrato.appendChild(li)
        }
    },



}