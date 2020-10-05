function eventos(){
    var form = {
        valor1:document.getElementById('v1'),
        valor2:document.getElementById('v2'),
        submit:document.getElementById('bnt-submit'),
        resposta:document.getElementById('resposta')
    }

    //Quando clicar no submit...
    form.submit.addEventListener('click',function(event){

        //previne que o botão recarregue a página
        event.preventDefault();
        //cria a instância
        var ajax= new XMLHttpRequest();
        //pega os dados que seram enviados, e coloca em formato formData
        var formdata= new FormData();

        //pega os dados para enviar
        formdata.append("valor1", form.valor1.value);
        formdata.append("valor2", form.valor2.value);

        //especifica o método da requisição e para onde enviar
        ajax.open('POST','soma.php');

        //envia a requisição
        ajax.send(formdata);

        ajax.onload = function(){

            //transforma em JSON
            let respostaAjax = null;
            try {
                respostaAjax = JSON.parse(ajax.responseText);
                /*respostaAjax tem 2 itens:
                respostaAjax.ok e respostaAjax.messages*/
            } catch (e) {
                console.error('Não conseguiu converter em JSON');
            };
            if (respostaAjax) {
                form.resposta.innerHTML= respostaAjax;
                form.resposta.style.padding = '0px';
            }
        };
    });
}
window.addEventListener('load',eventos);