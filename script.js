function calcular(){
    var consumo_produto = 0.0
    var produto = document.getElementById('equipamento').value
    var tempo_ligado = parseFloat(document.getElementById('tempo').value);

    if(produto == "Aquecedor de ambiente"){
        consumo_produto = 1
    }else if(produto == "Aspirador de pó"){
        consumo_produto = 0.6
    }else if(produto == "Batedeira"){
        consumo_produto = 0.001
    }else if(produto == "Bomba de água"){
        consumo_produto = 0.4
    }else if(produto == "Cafeteira elétrica"){
        consumo_produto = 0.6
    }else if(produto == "Churrasqueira elétrica"){
        consumo_produto = 3
    }else if(produto == "Chuveiro elétrico"){
        consumo_produto = 5.5
    }else if(produto == "Computador"){
        consumo_produto = 0.3
    }else if(produto == "Condicionador de ar"){
        consumo_produto = 1.4
    }else if(produto == "Aparelho de som"){
        consumo_produto = 0.2
    }else if(produto == "Ferro elétrico"){
        consumo_produto = 1
    }else if(produto == "Espremedor de frutas"){
        consumo_produto = 0.2
    }else if(produto == "Fogão elétrico de 4 bocas"){
        consumo_produto = 6
    }else if(produto == "Forno elétrico pequeno"){
        consumo_produto = 1.5
    }else if(produto == "Forno elétrico grande"){
        consumo_produto = 4.5
    }else if(produto == "Forno de Micro-Ondas"){
        consumo_produto = 2
    }else if(produto == "Freezer Horizontal"){
        consumo_produto = 0.5
    }else if(produto == "Freezer Vertical"){
        consumo_produto = 0.3
    }else if(produto == "Geladeira Simples"){
        consumo_produto = 0.25
    }else if(produto == "Grill"){
        consumo_produto = 1.2
    }else if(produto == "Impressora"){
        consumo_produto = 0.045
    }else if(produto == "Liquidificador"){
        consumo_produto = 0.2
    }else if(produto == "Máquina de costura"){
        consumo_produto = 0.1
    }else if(produto == "Máquina de lavar roupa"){
        consumo_produto = 1
    }else if(produto == "DVD Player"){
        consumo_produto = 0.03
    }else if(produto == "Secador de cabelo"){
        consumo_produto = 1
    }else if(produto == "Secadora de roupas"){
        consumo_produto = 3.5
    }else if(produto == "Televisor"){
        consumo_produto = 0.2
    }else if(produto == "Ventilador"){
        consumo_produto = 0.1
    }else if(produto == "Vídeo Game"){
        consumo_produto = 0.02
    }

    var gasto_produto = 0.49*(consumo_produto * tempo_ligado);

    var li = document.createElement('li');
    var addc = document.createTextNode(`O produto: ${produto} gastou em R$: ${gasto_produto}`);
    li.appendChild(addc);
    var div = document.getElementById('retorno')
    div.appendChild(li)

    var valor_atual = parseFloat(document.getElementById('total').innerHTML)

    document.getElementById('total').innerHTML = valor_atual + gasto_produto;
}