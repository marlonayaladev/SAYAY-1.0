document.querySelectorAll('.country-list li').forEach(item => {
    item.addEventListener('click', () => {
        document.querySelectorAll('.country-list li').forEach(li => li.classList.remove('selected'));
        item.classList.add('selected');
    });
});

document.getElementById('checkButton').addEventListener('click', () => {
    const selectedCountry = document.querySelector('.country-list li.selected');
    if (selectedCountry) {
        localStorage.setItem('selectedCountry', selectedCountry.innerText.trim());
        showPage2();
    } else {
        alert('Por favor, seleccione un país.');
    }
});

window.addEventListener('load', () => {
    const selectedCountry = localStorage.getItem('selectedCountry');
    if (selectedCountry) {
        document.querySelectorAll('.country-list li').forEach(item => {
            if (item.innerText.trim() === selectedCountry) {
                item.classList.add('selected');
            }
        });
    }
});

function showPage2() {
    const selectedCountry = localStorage.getItem('selectedCountry');
    document.body.innerHTML = `
        <header>
            <img src="escudo.png" alt="Escudo" class="escudo">
            <img src="retroceder.png" alt="Back" class="back-button" style="margin-top: 10px;" onclick="showPage1()">
        </header>
        <div class="content" style="text-align: center; margin-top: 20px;">
            <div class="left-flag">
                <img src="peru.png" alt="Perú" class="bandera">
            </div>
            <div class="right-flag">
                <img src="${selectedCountry.toLowerCase().replace(' ', '-')}.png" alt="${selectedCountry}" class="bandera">
            </div>
            <h2>Indique el nivel de planeamiento</h2>
            <form style="display: inline-block; text-align: left;">
                <label>
                    <input type="radio" name="planeamiento" value="estrategico">
                    Estratégico
                </label>
                <hr>
                <label>
                    <input type="radio" name="planeamiento" value="operacional">
                    Operacional
                </label>
                <hr>
                <label>
                    <input type="radio" name="planeamiento" value="tactico">
                    Táctico
                </label>
                <hr>
            </form>
            <footer>
                <img src="check.png" alt="Check" class="check" id="checkButtonPage2">
            </footer>
        </div>
    `;

    const selectedPlan = localStorage.getItem('selectedPlan');
    if (selectedPlan) {
        document.querySelector(`input[name="planeamiento"][value="${selectedPlan}"]`).checked = true;
    }

    document.getElementById('checkButtonPage2').addEventListener('click', () => {
        const selectedPlan = document.querySelector('input[name="planeamiento"]:checked');
        if (selectedPlan) {
            localStorage.setItem('selectedPlan', selectedPlan.value);
            showStrategicTable();
        } else {
            alert('Por favor, seleccione un nivel de planeamiento.');
        }
    });
}

function showStrategicTable() {
    document.body.innerHTML = `
        <header>
            <img src="escudo.png" alt="Escudo" class="escudo">
            <img src="retroceder.png" alt="Back" class="back-button" style="margin-top: 10px;" onclick="showPage2()">
        </header>
        <div class="content" style="text-align: center; margin-top: 20px;">
            <table class="strategic-table">
                <tr><td onclick="showLiderazgoEstatal()">Liderazgo Estatal</td></tr>
                <tr><td>Sociedad</td></tr>
                <tr><td>Económica</td></tr>
                <tr><td>Politica</td></tr>
                <tr><td>Geopolítica</td></tr>
                <tr><td>Infraestructura</td></tr>
                <tr><td>Terrorismo Guerrillas</td></tr>
                <tr><td>Demografia</td></tr>
                <tr><td>Desastres Naturales</td></tr>
                <tr><td>Pandemia</td></tr>
                <tr><td>Informaciones</td></tr>
                <tr><td>Otras Amenazas</td></tr>
            </table>
        </div>
    `;

    const peruPercentage = localStorage.getItem('peruPercentage_LiderazgoEstatal');
    const selectedCountryPercentage = localStorage.getItem('selectedCountryPercentage_LiderazgoEstatal');

    if (peruPercentage) {
        document.getElementById('peruPercentage').value = peruPercentage;
    }
    if (selectedCountryPercentage) {
        document.getElementById('selectedCountryPercentage').value = selectedCountryPercentage;
    }
}

function showLiderazgoEstatal() {
    document.body.innerHTML = `
        <header>
            <img src="escudo.png" alt="Escudo" class="escudo">
            <img src="retroceder.png" alt="Back" class="back-button" style="margin-top: 10px;" onclick="showStrategicTable()">
        </header>
        <div class="content" style="text-align: center; margin-top: 20px;">
            <h2>Liderazgo Estatal</h2>
            <p>Contenido sobre Liderazgo Estatal...</p>
            <div class="flags">
                <div>
                    <img src="peru.png" alt="Perú" class="bandera">
                    <input type="number" id="peruPercentage" min="1" max="100" placeholder="%" />
                </div>
                <div class="separator"></div>
                <div>
                    <img src="${localStorage.getItem('selectedCountry').toLowerCase().replace(' ', '-')}.png" alt="${localStorage.getItem('selectedCountry')}" class="bandera">
                    <input type="number" id="selectedCountryPercentage" min="1" max="100" placeholder="%" />
                </div>
            </div>
            <div>
                <img src="check.png" alt="Check" class="check" onclick="savePercentages()">
            </div>
        </div>
    `;

    const peruPercentage = localStorage.getItem('peruPercentage_LiderazgoEstatal');
    const selectedCountryPercentage = localStorage.getItem('selectedCountryPercentage_LiderazgoEstatal');

    if (peruPercentage) {
        document.getElementById('peruPercentage').value = peruPercentage;
    }
    if (selectedCountryPercentage) {
        document.getElementById('selectedCountryPercentage').value = selectedCountryPercentage;
    }
}

function savePercentages() {
    const peruValue = document.getElementById('peruPercentage').value;
    const selectedValue = document.getElementById('selectedCountryPercentage').value;
    
    if (!peruValue || !selectedValue) {
        alert('Por favor, ingrese ambos porcentajes.');
        return;
    }
    
    localStorage.setItem('peruPercentage_LiderazgoEstatal', peruValue);
    localStorage.setItem('selectedCountryPercentage_LiderazgoEstatal', selectedValue);
    alert('Datos guardados correctamente');
    showStrategicTable();
}

function showPage1() {
    location.reload(); // Reload the page to show the first page
}
