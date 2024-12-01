document.querySelectorAll('.toggle-btn').forEach(button => {
    button.addEventListener('click', () => {
        const targetId = button.getAttribute('data-target');
        const targetElement = document.getElementById(targetId);

        if (targetElement) {
            const isHidden = targetElement.classList.contains('hidden');
            targetElement.classList.toggle('hidden', !isHidden);
            button.textContent = isHidden ? 'Leia menos' : 'Leia mais';
        }
    });
});

const modal = document.getElementById('modal-imagem');
const modalImg = document.getElementById('img-modal');
const closeModal = document.querySelector('.fechar');

document.querySelectorAll('figure a').forEach(link => {
    link.addEventListener('click', event => {
        event.preventDefault();
        const imgSrc = link.getAttribute('href');
        modalImg.src = imgSrc;
        modal.style.display = 'flex';
    });
});

if (closeModal) {
    closeModal.addEventListener('click', () => {
        modal.style.display = 'none';
        modalImg.src = '';
    });
}

modal?.addEventListener('click', event => {
    if (event.target === modal) {
        modal.style.display = 'none';
        modalImg.src = '';
    }
});

const feedbackForm = document.getElementById('formulario-feedback');

if (feedbackForm) {
    feedbackForm.addEventListener('submit', event => {
        event.preventDefault();

        const formData = new FormData(feedbackForm);
        const nome = formData.get('nome');
        const email = formData.get('email');
        const mensagem = formData.get('mensagem');

        console.log('Feedback enviado:');
        console.log(`Nome: ${nome}`);
        console.log(`E-mail: ${email}`);
        console.log(`Mensagem: ${mensagem}`);

        alert('Obrigado pelo seu feedback!');
        feedbackForm.reset();
    });
};

function initMap() {
    const mexico = { lat: 23.6345, lng: -102.5528 };
    const map = new google.maps.Map(document.getElementById("mapa"), {
        zoom: 6,
        center: mexico,
    });

    const chichenItza = { lat: 20.6843, lng: -88.5678 };
    const markerChichen = new google.maps.Marker({
        position: chichenItza,
        map: map,
        title: "Chichén Itzá",
    });

    const infoChichen = new google.maps.InfoWindow({
        content: "<h3>Chichén Itzá</h3><p>Sítio arqueológico maia.</p>",
    });
    markerChichen.addListener("click", () => {
        infoChichen.open(map, markerChichen);
    });

    const cenotesIkKil = { lat: 20.5763, lng: -88.5641 };
    const markerCenotes = new google.maps.Marker({
        position: cenotesIkKil,
        map: map,
        title: "Cenotes Ik Kil",
    });

    const infoCenotes = new google.maps.InfoWindow({
        content: "<h3>Cenotes Ik Kil</h3><p>Cenote impressionante perto de Chichén Itzá.</p>",
    });
    markerCenotes.addListener("click", () => {
        infoCenotes.open(map, markerCenotes);
    });

    const centroHistorico = { lat: 19.4326, lng: -99.1332 };
    const markerCentro = new google.maps.Marker({
        position: centroHistorico,
        map: map,
        title: "Centro Histórico da Cidade do México",
    });

    const infoCentro = new google.maps.InfoWindow({
        content: "<h3>Centro Histórico da Cidade do México</h3><p>Patrimônio Mundial da UNESCO.</p>",
    });
    markerCentro.addListener("click", () => {
        infoCentro.open(map, markerCentro);
    });
}

window.onload = function () {
    initMap();
};
