/**
 * MOTO-BOT: Asistente Virtual de MOTOCOMPARADOR
 * Proporciona ayuda rápida sobre modelos de motos y navegación.
 */

const botResponses = {
    "hola": "¿Otra vez tú? No tengo tiempo para tus tonterías. Búscate la vida.",
    "comparar": "Si no sabes comparar dos números, tienes un problema serio. No voy a hacer tu trabajo.",
    "mejor moto": "Cualquiera que no conduzcas tú será una buena moto. Déjame en paz.",
    "precios": "¿Precios? Si tienes que preguntar, es que no te lo puedes permitir. Pobre.",
    "noticias": "Las noticias dicen que eres un pesado. Lee un periódico si te importa tanto.",
    "contacto": "No me hables. Esa es la mejor forma de contactar conmigo.",
    "ayuda": "¿Ayuda? ¿Parezco una ONG? Vete a molestar a otro lado.",
    "default": "No me interesa lo que dices. ¿Por qué sigues escribiendo? Es patético."
};

function initBot() {
    const botToggle = document.getElementById('bot-toggle');
    const botContainer = document.getElementById('bot-container');
    const botClose = document.getElementById('bot-close');
    const botInput = document.getElementById('bot-input');
    const botSend = document.getElementById('bot-send');
    const botMessages = document.getElementById('bot-messages');

    if (!botToggle || !botContainer) return;

    botToggle.addEventListener('click', () => {
        botContainer.classList.toggle('active');
        if (botContainer.classList.contains('active')) {
            botInput.focus();
        }
    });

    botClose.addEventListener('click', () => {
        botContainer.classList.remove('active');
    });

    const sendMessage = () => {
        const text = botInput.value.trim().toLowerCase();
        if (!text) return;

        addMessage(botInput.value, 'user');
        botInput.value = '';

        setTimeout(() => {
            let response = botResponses.default;
            for (let key in botResponses) {
                if (text.includes(key)) {
                    response = botResponses[key];
                    break;
                }
            }
            addMessage(response, 'bot');
        }, 600);
    };

    botSend.addEventListener('click', sendMessage);
    botInput.addEventListener('keypress', (e) => {
        if (e.key === 'Enter') sendMessage();
    });
}

function addMessage(text, sender) {
    const msgDiv = document.createElement('div');
    msgDiv.className = `bot-msg ${sender}`;
    msgDiv.textContent = text;
    const container = document.getElementById('bot-messages');
    container.appendChild(msgDiv);
    container.scrollTop = container.scrollHeight;
}

document.addEventListener('DOMContentLoaded', initBot);
