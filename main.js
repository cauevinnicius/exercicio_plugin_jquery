$(document).ready(function(){
    $('#cpf').mask('000.000.000-00');
    $('#telefone').mask('(00) 00000-0000');

    $('form').validate({
        rules: {
            nome: {
                required: true
            },
            cpf: {
                required: true
            },
            endereco: {
                required: true
            },
            email: {
                required: true,
                email: true
            },
            telefone: {
                required: true
            },
        },
        messages: {
            nome: 'Por favor, insira o seu nome',
            cpf: 'Por favor, insira um CPF válido',
            endereco: 'Por favor, insira um endereco válido',
            telefone: 'Por favor, insira um telefone válido',
            email: 'Por favor, insira um email válido',
        },
        invalidHandler: function(evento, validador) {
            let camposIncorretos = validador.numberOfInvalids();
            if (camposIncorretos) {
                alert(`Existem ${camposIncorretos} campos incorretos`)
            }
        }
    })
})