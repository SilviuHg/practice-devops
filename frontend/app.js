document.getElementById('fetch-btn').addEventListener('click', async () => {
    try {
        // k8s: acces BE on NodePort 30001
        // for local testing: http://localhost:3000/data
        const response = await fetch('http://localhost:3000/data');
        const data = await response.json();

        document.getElementById('msg').innerText = data.message;
        document.getElementById('status').innerText = data.status;
        document.getElementById('time').innerText = new Date(data.timestamp).toLocaleTimeString();
        
        document.getElementById('result-box').classList.remove('hidden');
    } catch (error) {
        alert('Eroare la conectarea cu API-ul: ' + error.message);
    }
});