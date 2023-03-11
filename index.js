function totals() {
    var data = new Date();
    var ano = data.getFullYear();
    var mes = data.getMonth() + 1;
    var dia = data.getDay();
    var horas = data.getHours();
    var minutos = data.getMinutes();
    var segundos = data.getSeconds();
  
    var nomeMes;
    switch (mes) {
      case 1:
        nomeMes = "Janeiro";
        break;
      case 2:
        nomeMes = "Fevereiro";
        break;
      case 3:
        nomeMes = "Março";
        break;
      case 4:
        nomeMes = "Abril";
        break;
      case 5:
        nomeMes = "Maio";
        break;
      case 6:
        nomeMes = "Junho";
        break;
      case 7:
        nomeMes = "Julho";
        break;
      case 8:
        nomeMes = "Agosto";
        break;
      case 9:
        nomeMes = "Setembro";
        break;
      case 10:
        nomeMes = "Outubro";
        break;
      case 11:
        nomeMes = "Novembro";
        break;
      case 12:
        nomeMes = "Dezembro";
        break;
      default:
        nomeMes = "Mês inválido";
    }
  
    var total = horas + ":" + minutos + ":" + segundos;
    document.getElementById("horas").innerHTML = total;
  
    var com = "hoje é "  +  dia +" de "+ nomeMes +" de "+ ano   ;
    document.getElementById("dia").innerHTML = com;
  }
  
  setInterval(totals, 500);
  