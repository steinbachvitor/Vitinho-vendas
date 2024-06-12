const mensagemTrono = 'A Guerra dos Tronos: As Crônicas de Gelo e Fogo, volume 1.';
const mensagemFuriaReis = 'A fúria dos reis: As Crônicas de Gelo e Fogo, volume 2';
const mensagemTormentaEspadas = 'A tormenta de espadas: As Crônicas de Gelo e Fogo, volume 3';
const mensagemFestimCorvos = 'O Festim dos Corvos: As Crônicas de Gelo e Fogo, volume 4';
const mensagemDancaDragoes = 'A dança dos dragões: As Crônicas de Gelo e Fogo, volume 5';
const mensagemAscensaoDragao = 'A Ascensão do Dragão: Uma história ilustrada da dinastia Targaryen – Volume 1';
const mensagemFogoSangue = 'Parabéns! você acaba de adquirir: Fogo & Sangue – Volume 1';
const mensagemCavaleiro = 'O cavaleiro dos Sete Reinos (Edição especial)';

alerta('cavaleiro', mensagemCavaleiro);
alerta('fogoSangue', mensagemFogoSangue);
alerta('guerraTrono', mensagemTrono);
alerta('furiaRei', mensagemFuriaReis);
alerta('tormentaEspada', mensagemTormentaEspadas);
alerta('festimCorvos', mensagemFestimCorvos);
alerta('dancaDragoes', mensagemDancaDragoes);
alerta('ascensaoDragao', mensagemAscensaoDragao);

function alerta(id, mensagem){
    document.getElementById(id).addEventListener("click", function(){
        alert('Parabéns! você acaba de adquirir: ' + mensagem);
    })
}