document.addEventListener('DOMContentLoaded', function() {
    // Seleciona os elementos do formulário
    const form = document.getElementById('contactForm');
    const inputName = document.getElementById('name');
    const inputEmail = document.getElementById('email');
    const inputTel = document.getElementById('tel');

    // Função para gerar um ID único para o usuário
    function generateUniqueId() {
        return 'user_' + Math.random().toString(36).substr(2, 9) + '_' + Date.now();
    }

    // Função para capturar os parâmetros UTM da URL
    function getUTMs() {
        const params = new URLSearchParams(window.location.search);
        return {
            utm_source: params.get('utm_source') || 'organico',
            utm_medium: params.get('utm_medium') || '',
            utm_campaign: params.get('utm_campaign') || '',
            utm_term: params.get('utm_term') || '',
            utm_content: params.get('utm_content') || ''
        };
    }

    // Função para tratar o envio do formulário
    form.addEventListener('submit', async function(e) {
        e.preventDefault(); // Impede o recarregamento da página

        // Obtém e trata os valores dos inputs
        const name = inputName.value.trim();
        const email = inputEmail.value.trim();
        const tel = inputTel.value.trim();

        // Verifica se todos os campos estão preenchidos
        if (!name || !email || !tel) {
            alert('Por favor, preencha todos os campos.');
            return;
        }

        // Gera um ID único e prepara os dados do formulário
        const uniqueId = generateUniqueId();
        const formData = {
            id: uniqueId,
            name: name,
            email: email,
            tel: tel,
            conversion_url: window.location.href,
            ...getUTMs()
        };

        try {
            // Envia os dados via fetch para a URL definida
            const response = await fetch('https://hook.us1.make.com/t8b8er7tynfc1gxx8y9ulf2z6gyaymcw', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(formData)
            });

            const responseText = await response.text();
            if (response.ok) {
                alert('Dados enviados com sucesso!');

                // Limpa os campos do formulário
                inputName.value = '';
                inputEmail.value = '';
                inputTel.value = '';

                // Redireciona para o WhatsApp após o envio com sucesso
                window.open('https://tintim.link/whatsapp/85d10962-4e7e-4f65-9a44-898be828e6fd/76dadedc-00f5-4a34-a4b0-c2052c540329', '_blank');
            } else {
                console.error('Erro de resposta:', responseText);
                alert('Erro ao enviar os dados: ' + responseText);
            }
        } catch (error) {
            console.error('Erro:', error);
            alert('Erro ao enviar os dados. Tente novamente.');
        }
    });
});