const data = [
    {
        id: 1, name: "Viking 1", year: 1976, agency: "NASA",
        explorers: "Карл Саган (ідеолог), Джеймс Мартін (керівник)",
        weight: "883 кг (посадковий модуль)",
        size: "3.6 м у ширину",
        power: "Атомний генератор (РІТЕГ)",
        goal: "Перший пошук життя на поверхні",
        result: "Перша успішна м'яка посадка. Виявлено, що Марс має вулканічний ґрунт і дуже тонку атмосферу.",
        status: "ВИКОНАНО",
        img: "viking.jpg",
        fact: "Viking 1 пропрацював понад 6 років, встановивши на той час рекорд тривалості роботи на поверхні."
    },
    {
        id: 2, name: "Mars Pathfinder", year: 1997, agency: "NASA",
        explorers: "Донна Ширлі (розробник Sojourner)",
        weight: "10.6 кг (марсохід)",
        size: "65 см (як іграшка)",
        power: "Сонячні панелі",
        goal: "Довести, що можна їздити по Марсу",
        result: "Перший у світі колісний марсохід Sojourner успішно подолав 100 метрів по поверхні.",
        status: "ВИКОНАНО",
        img: "mars_pathfinder.jpg",
        fact: "Марсохід Sojourner був розміром з мікрохвильову піч і важив лише 10 кілограмів."
    },
    {
        id: 3, name: "Opportunity", year: 2004, agency: "NASA",
        explorers: "Стів Сквайрс (головний науковець)",
        weight: "185 кг",
        size: "1.5 метра у висоту",
        power: "Сонячні панелі",
        goal: "Пошук мінералів, що утворилися у воді",
        result: "Знайшов гематитові «чорниці», що довели наявність рідкої води в минулому. Працював 14 років.",
        status: "ЗВ'ЯЗОК ВТРАЧЕНО (2018)",
        img: "opportunity.jpg",
        fact: "Opportunity проїхав 45 кілометрів — це найбільша відстань, яку будь-який апарат подолав на іншій планеті."
    },
    {
        id: 4, name: "Curiosity", year: 2012, agency: "NASA",
        explorers: "Адам Стелцнер (інженер посадки)",
        weight: "899 кг",
        size: "3.0 м (розмір як SUV)",
        power: "Плутонієвий генератор",
        goal: "Пошук органічних молекул",
        result: "Виявив стародавню органіку та докази існування прісних озер мільярди років тому.",
        status: "АКТИВНО",
        img: "curiosity.jpg",
        fact: "Curiosity має лазер, яким він випалює породу на відстані до 7 метрів, щоб вивчити її хімічний склад."
    },
    {
        id: 5, name: "Perseverance", year: 2021, agency: "NASA",
        explorers: "Кеті Стек Морган (головний вчений)",
        weight: "1025 кг (найважчий)",
        size: "2.2 м висота",
        power: "Ядерний генератор MMRTG",
        goal: "Збір зразків для повернення на Землю",
        result: "Запустив перший вертоліт Ingenuity. Проводить буріння в дельті стародавньої річки.",
        status: "АКТИВНО",
        img: "perseverance.jpg",
        fact: "Perseverance несе на собі пристрій MOXIE, який вперше в історії виробив кисень з атмосфери Марса."
    },
    {
        id: 6, name: "Ingenuity", year: 2021, agency: "NASA",
        explorers: "Мімі Онг (менеджер проекту)",
        weight: "1.8 кг",
        size: "1.2 м (розмах лопатей)",
        power: "Сонячні панелі",
        goal: "Перший політ в атмосфері іншої планети",
        result: "Здійснив 72 польоти замість запланованих 5. Став «очима» для марсохода Perseverance.",
        status: "МІСІЮ ЗАВЕРШЕНО (2024)",
        img: "ingenuity.jpg",
        fact: "Щоб злетіти в розрідженій атмосфері Марса, лопаті Ingenuity оберталися зі швидкістю 2400 обертів на хвилину."
    },
    {
        id: 7, name: "Mars Global Surveyor", year: 1996, agency: "NASA",
        explorers: "Команда JPL",
        weight: "1060 кг (орбітальний модуль)",
        size: "3.0 м корпус",
        power: "Сонячні батареї",
        goal: "Картографування всієї поверхні Марса",
        result: "Створив першу детальну 3D-карту Марса та знайшов сліди сучасних потоків води.",
        status: "МІСІЮ ЗАВЕРШЕНО",
        img: "mars_global_surveyor.jpg",
        fact: "Цей апарат виявив, що Марс колись мав потужне магнітне поле, як і Земля."
    },
    {
        id: 8, name: "Zhurong", year: 2021, agency: "CNSA",
        explorers: "Китайське космічне агентство",
        weight: "240 кг",
        size: "1.85 м висота",
        power: "Сонячні панелі",
        goal: "Вивчення ґрунту та клімату рівнини Утопія",
        result: "Перший китайський марсохід. Знайшов докази стародавнього океану в північній півкулі.",
        status: "У СПЛЯЧОМУ РЕЖИМІ",
        img: "zhurong.jpg",
        fact: "Zhurong названий на честь китайського бога вогню."
    }
];

const marsFacts = [
    "Марс — четверта планета від Сонця і друга найменша в Сонячній системі.",
    "День на Марсі триває 24 години і 37 хвилин — майже як на Землі.",
    "На Марсі знаходиться гора Олімп — найвищий вулкан у Сонячній системі (22 км).",
    "Через низьку гравітацію ви могли б стрибнути на Марсі втричі вище, ніж на Землі.",
    "Марс має два супутники: Фобос (страх) і Деймос (жах).",
    "Атмосфера Марса на 95% складається з вуглекислого газу.",
    "Середня температура на Марсі становить -62 градуси за Цельсієм.",
    "Марс червоний через велику кількість оксиду заліза (іржі) у його ґрунті."
];

function buildNav() {
    const nav = document.getElementById('nav-list');
    nav.innerHTML = '';
    data.forEach(m => {
        const div = document.createElement('div');
        div.className = 'mission-link';
        div.innerHTML = `<b>${m.name}</b><span>${m.year} | ${m.agency}</span>`;
        div.onclick = () => showMission(m.id, div);
        nav.appendChild(div);
    });
}

function showMission(id, element) {
    const m = data.find(x => x.id === id);
    const view = document.getElementById('main-view');
    
    document.querySelectorAll('.mission-link').forEach(el => el.classList.remove('active'));
    element.classList.add('active');

    view.innerHTML = `
        <div class="file">
            <p style="font-weight:bold; color:var(--orange)">АРХІВНА СПРАВА №${Math.floor(Math.random()*9000)+1000}</p>
            <h1>${m.name}</h1>
            <p class="meta">${m.year} // ${m.agency}</p>

            <div class="mission-image">
                <img src="${m.img}" alt="${m.name}">
            </div>

            <section>
                <h3>👥 Дослідники</h3>
                <div class="box">${m.explorers}</div>
            </section>

            <section>
                <h3>⚙️ Технічні дані</h3>
                <div class="grid">
                    <div class="box"><b>ВАГА:</b>${m.weight}</div>
                    <div class="box"><b>РОЗМІР:</b>${m.size}</div>
                    <div class="box"><b>ЕНЕРГІЯ:</b>${m.power}</div>
                    <div class="box"><b>МЕТА:</b>${m.goal}</div>
                </div>
            </section>

            <section>
                <h3>📊 Результати</h3>
                <p class="result-text">${m.result}</p>
            </section>

            <div class="facts">
                <h4>💡 Цікавий факт про місію</h4>
                <p>${m.fact}</p>
            </div>

            <div class="stamp">${m.status}</div>
            
            <section style="margin-top: 50px;">
                <h3>🔭 Загальні факти про Марс</h3>
                <ul>
                    ${marsFacts.map(f => `<li>${f}</li>`).slice(0, 3).join('')}
                    <li style="color:var(--orange)">Запустіть команду 'random-fact' для більше...</li>
                </ul>
            </section>
        </div>
    `;
}

function handleCommand(e) {
    if (e.key === 'Enter') {
        const input = e.target.value.trim().toLowerCase();
        const output = document.getElementById('terminal-output');
        
        if (input === 'random-fact') {
            const fact = marsFacts[Math.floor(Math.random() * marsFacts.length)];
            alert("МАРСІАНСЬКИЙ ФАКТ: " + fact);
            output.innerText = "Command executed successfully.";
        } else if (input === 'help') {
            output.innerText = "Available: random-fact, clear, help";
        } else if (input === 'clear') {
            output.innerText = "";
        } else if (input === '') {
            output.innerText = "";
        } else {
            output.innerText = "Команду '" + input + "' не знайдено";
        }
        e.target.value = '';
    }
}

window.onload = buildNav;
