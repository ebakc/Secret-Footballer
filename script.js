// Tema değiştirme fonksiyonu
const themeToggle = document.querySelector('.theme-toggle');
const body = document.body;
const logo = document.querySelector('.logo img');

// Tema durumuna göre logo değiştirme fonksiyonu
const updateLogo = () => {
    const isLightTheme = body.classList.contains('light-theme');
    logo.src = isLightTheme ? 'darksecretfootballer.png' : 'whitesecretfootballer.png';
};

// Sayfa yüklendiğinde başlangıç logosu
updateLogo();

themeToggle.addEventListener('click', () => {
    body.classList.toggle('light-theme');
    const icon = themeToggle.querySelector('i');
    icon.classList.toggle('fa-moon');
    icon.classList.toggle('fa-sun');
    updateLogo();
});

// Smooth scroll için
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Mobil menü için
const createMobileMenu = () => {
    const nav = document.querySelector('.nav-links');
    const burger = document.createElement('div');
    burger.classList.add('burger');
    burger.innerHTML = '<i class="fas fa-bars"></i>';
    
    burger.addEventListener('click', () => {
        nav.classList.toggle('nav-active');
    });
    
    document.querySelector('.nav-container').appendChild(burger);
};

// Sayfa yüklendiğinde mobil menüyü oluştur
window.addEventListener('load', createMobileMenu);

// Global değişken olarak currentLang'i tanımlayalım
let currentLang = 'tr'; // Varsayılan dil

// Futbolcu listesi
const footballers = [
    'Cristiano Ronaldo', 'Lionel Messi', 'Kevin De Bruyne', 'Mohamed Salah', 'Erling Haaland',
    'Harry Kane', 'Marcus Rashford', 'Bruno Fernandes', 'Jack Grealish', 'Virgil van Dijk',
    'Trent Alexander-Arnold', 'Raheem Sterling', 'Bukayo Saka', 'Declan Rice', 'Phil Foden',
    'Karim Benzema', 'Luka Modrić', 'Robert Lewandowski', 'Antoine Griezmann', 'Pedri',
    'Gavi', 'Sergio Busquets', 'Ansu Fati', 'Vinícius Júnior', 'Federico Valverde',
    'Jordi Alba', 'Gerard Piqué', 'Dani Carvajal', 'Ferran Torres', 'Thibaut Courtois',
    'Zlatan Ibrahimović', 'Paulo Dybala', 'Romelu Lukaku', 'Rafael Leão', 'Theo Hernández',
    'Lautaro Martínez', 'Gianluigi Donnarumma', 'Federico Chiesa', 'Victor Osimhen', 'Sandro Tonali',
    'Kalidou Koulibaly', 'Ciro Immobile', 'Nicolò Barella', 'Leonardo Bonucci', 'Andrea Belotti',
    'Kylian Mbappé', 'Neymar Jr.', 'Achraf Hakimi', 'Marco Verratti', 'Presnel Kimpembe',
    'Marquinhos', 'Nuno Mendes', 'Hugo Lloris', 'Wissam Ben Yedder', 'Dimitri Payet',
    'Alexandre Lacazette', 'Jonathan David', 'Lucas Paquetá', 'Manuel Neuer', 'Thomas Müller',
    'Joshua Kimmich', 'Jamal Musiala', 'Leroy Sané', 'Serge Gnabry', 'Leon Goretzka',
    'Kingsley Coman', 'Matthijs de Ligt', 'Jude Bellingham', 'Christopher Nkunku', 'Marco Reus',
    'Florian Wirtz', 'Niklas Süle', 'Kevin Trapp', 'Arda Güler', 'Mauro Icardi',
    'Dries Mertens', 'Edin Džeko', 'Lucas Torreira', 'Cengiz Ünder', 'Kerem Aktürkoğlu',
    'İrfan Can Kahveci', 'Enner Valencia', 'Gedson Fernandes', 'Fernando Muslera', 'Michy Batshuayi',
    'Dele Alli', 'Maxi Gómez', 'Marek Hamšík',

    // Yeni eklenen futbolcular
    'Zinedine Zidane', 'Thierry Henry', 'David Beckham', 'Ryan Giggs', 'Xavi Hernández',
    'Andrés Iniesta', 'Carles Puyol', 'Iker Casillas', 'Francesco Totti', 'Alessandro Del Piero',
    'Andrea Pirlo', 'Filippo Inzaghi', 'Gennaro Gattuso', 'Kaká', 'Rivaldo',
    'Roberto Carlos', 'Ronaldo Nazário', 'Ronaldinho', 'Gabriel Batistuta', 'Fernando Hierro',
    'Claude Makélélé', 'Didier Drogba', 'Samuel Eto\'o', 'Michael Ballack', 'Miroslav Klose',
    'Philipp Lahm', 'Bastian Schweinsteiger', 'Mesut Özil', 'Mario Götze', 'Arjen Robben',
    'Frank Lampard', 'Steven Gerrard', 'Ashley Cole', 'John Terry', 'Nemanja Vidić',
    'Rio Ferdinand', 'Petr Čech', 'Edwin van der Sar', 'Carlos Tévez', 'Javier Zanetti',
    'Diego Forlán', 'Juan Román Riquelme', 'Pablo Aimar', 'Hernán Crespo', 'Paolo Maldini',
    'Zvonimir Boban', 'Roberto Baggio', 'Ruud van Nistelrooy', 'Dennis Bergkamp', 'Patrick Vieira',
    'Robin van Persie', 'Fernando Torres', 'Raúl González', 'David Villa', 'Ángel Di María',
    'Gonzalo Higuaín', 'Álvaro Morata', 'Gerard Moreno', 'Isco', 'Ivan Rakitić',
    'Luka Modrić', 'Marcelo Vieira', 'Dani Alves', 'Keylor Navas', 'Thiago Silva',
    'Edinson Cavani', 'Ezequiel Lavezzi', 'Marco Verratti', 'Adrien Rabiot', 'Blaise Matuidi',
    'Hugo Lloris', 'Laurent Blanc', 'Patrick Kluivert', 'Edgar Davids', 'Clarence Seedorf',
    'Wesley Sneijder', 'Ruud Gullit', 'Johan Cruyff', 'Eric Cantona', 'George Best',
    'Bobby Charlton', 'Pelé', 'Diego Maradona', 'Lev Yashin', 'Eusébio',
    'Gerd Müller', 'Johan Neeskens', 'Jean-Pierre Papin', 'Sócrates', 'Dida',
    'Cafu', 'Taffarel', 'Lucio', 'Juan Sebastián Verón', 'Hernanes',
    'Deco', 'Ricardo Carvalho', 'Paolo Rossi', 'Gaetano Scirea',
    'Bernardo Silva', 'João Cancelo', 'Rúben Dias', 'Riyad Mahrez', 'İlkay Gündoğan',
    'Rodri', 'Aymeric Laporte', 'Julian Alvarez', 'Kyle Walker', 'Ederson Moraes',
    'Darwin Núñez', 'Cody Gakpo', 'Luis Díaz', 'Andrew Robertson', 'Diogo Jota',
    'Fabinho', 'Alisson Becker', 'Joël Matip', 'Thiago Alcântara', 'Virgil van Dijk',
    'Richarlison', 'Son Heung-min', 'Dejan Kulusevski', 'Cristian Romero', 'Yves Bissouma',
    'Rodrigo Bentancur', 'Hugo Lloris', 'Bukayo Saka', 'Gabriel Martinelli', 'William Saliba',
    'Martin Ødegaard', 'Gabriel Jesus', 'Aaron Ramsdale', 'Declan Rice', 'Lucas Paquetá',
    'Kurt Zouma', 'Jarrod Bowen', 'Michail Antonio', 'James Maddison', 'Jamie Vardy',
    'Youri Tielemans', 'Wilfred Ndidi', 'Harvey Barnes', 'Emiliano Buendía', 'Ollie Watkins',
    'Leon Bailey', 'Douglas Luiz', 'Tyrone Mings', 'Philippe Coutinho', 'Moussa Diaby',
    'Manuel Akanji', 'Alexander Isak', 'Bruno Guimarães', 'Kieran Trippier', 'Allan Saint-Maximin',
    'Nick Pope', 'Kai Havertz', 'Christopher Nkunku', 'Mykhailo Mudryk', 'Reece James',
    'Ben Chilwell', 'Édouard Mendy', 'Mason Mount', 'Pierre-Emerick Aubameyang', 'Kalidou Koulibaly',
    'Raheem Sterling', 'Wesley Fofana', 'Casemiro', 'Antony', 'Jadon Sancho',
    'Alejandro Garnacho', 'Anthony Martial', 'Harry Maguire', 'Lisandro Martínez', 'Christian Eriksen',
    'Tyrell Malacia', 'David de Gea', 'Axel Disasi', 'Maxence Caqueret', 'Rayan Cherki',
    'Alexandre Lacazette', 'Nicolás Tagliafico', 'Anthony Lopes', 'Moussa Dembélé', 'Wissam Ben Yedder',
    'Aleksandr Golovin', 'Kevin Volland', 'Breel Embolo', 'Jonathan David', 'José Fonte',
    'Renato Sanches', 'Fabian Ruiz', 'Nuno Mendes', 'Presnel Kimpembe', 'Gianluigi Donnarumma',
    'Marquinhos', 'Danilo Pereira', 'Achraf Hakimi', 'Matthijs de Ligt', 'Alphonso Davies',
    'Jamal Musiala', 'Leroy Sané', 'Serge Gnabry', 'Kingsley Coman', 'Thomas Müller',
    'Joshua Kimmich', 'Leon Goretzka', 'Manuel Neuer', 'Youssoufa Moukoko', 'Jude Bellingham',
    'Karim Adeyemi', 'Giovanni Reyna', 'Nico Schlotterbeck', 'Gregor Kobel', 'Florian Wirtz',
    'Patrik Schick', 'Moussa Diaby', 'Jeremie Frimpong', 'Lucas Alario', 'Callum Hudson-Odoi',
    'Josko Gvardiol', 'Dani Olmo', 'Christopher Nkunku', 'Emil Forsberg', 'Péter Gulácsi',
    'André Silva', 'Timo Werner', 'Angel Di Maria', 'Wojciech Szczęsny', 'Dusan Vlahovic',
    'Federico Chiesa', 'Adrien Rabiot', 'Paul Pogba', 'Arkadiusz Milik', 'Nicolo Fagioli',
    'Gleison Bremer', 'Rafael Leão', 'Sandro Tonali', 'Theo Hernández', 'Mike Maignan',
    'Olivier Giroud', 'Zlatan Ibrahimović', 'Fikayo Tomori', 'Ismael Bennacer', 'Brahim Díaz',
    'Lautaro Martínez', 'Nicolò Barella', 'Hakan Çalhanoğlu', 'André Onana', 'Milan Škriniar',
    'Marcelo Brozović', 'Henrikh Mkhitaryan', 'Romelu Lukaku', 'Paulo Dybala', 'Tammy Abraham',
    'Lorenzo Pellegrini', 'Nemanja Matić', 'Chris Smalling', 'Rui Patrício', 'Ciro Immobile',
    'Sergej Milinković-Savić', 'Luis Alberto', 'Mattia Zaccagni', 'Pedro Rodríguez', 'Ivan Provedel',
    'Khvicha Kvaratskhelia', 'Victor Osimhen', 'Piotr Zieliński', 'Kim Min-jae', 'Giovanni Simeone',
    'Mario Rui', 'Alex Meret', 'Mauro Icardi', 'Lucas Torreira', 'Dries Mertens',
    'Kerem Aktürkoğlu', 'Nicolo Zaniolo', 'Fredrik Midtsjø', 'Sergio Oliveira', 'İrfan Can Kahveci',
    'Enner Valencia', 'Arda Güler', 'Diego Rossi', 'Edin Džeko', 'Gedson Fernandes',
    'Marek Hamšík', 'Maxi Gómez', 'Mahmoud Trezeguet', 'Victor Nelsson', 'Altay Bayındır',
    'Vincenzo Grifo', 'Jonas Hofmann', 'Dominik Szoboszlai', 'David Raum', 'Moussa Niakhaté',
    'Danilho Doekhi', 'Robin Knoche', 'Sheraldo Becker', 'Max Kruse', 'Ritsu Doan'
];

// Oyun mantığı için yeni kodlar
class Game {
    constructor() {
        this.playerCount = 3;
        this.players = [];
        this.currentSpies = [];
        this.currentFootballer = null;
        this.setupEventListeners();
        this.initializePlayers();
        this.updateButtonStates();
    }

    setupEventListeners() {
        document.getElementById('addPlayer').addEventListener('click', () => this.addPlayer());
        document.getElementById('removePlayer').addEventListener('click', () => this.removePlayer());
        document.getElementById('startGame').addEventListener('click', () => this.startGame());
    }

    initializePlayers() {
        const playersList = document.getElementById('playersList');
        playersList.innerHTML = '';
        
        for (let i = 0; i < this.playerCount; i++) {
            this.addPlayerInput(i);
        }
    }

    addPlayerInput(index) {
        const playersList = document.getElementById('playersList');
        const input = document.createElement('input');
        input.type = 'text';
        input.className = 'player-input';
        input.value = `P${index + 1}`;
        input.placeholder = `P${index + 1}`;
        playersList.appendChild(input);
    }

    updateButtonStates() {
        const addButton = document.getElementById('addPlayer');
        const removeButton = document.getElementById('removePlayer');

        addButton.disabled = this.playerCount >= 10;
        removeButton.disabled = this.playerCount <= 3;
    }

    addPlayer() {
        if (this.playerCount < 10) {
            this.playerCount++;
            this.addPlayerInput(this.playerCount - 1);
            this.updateButtonStates();
        }
    }

    removePlayer() {
        if (this.playerCount > 3) {
            const playersList = document.getElementById('playersList');
            playersList.removeChild(playersList.lastChild);
            this.playerCount--;
            this.updateButtonStates();
        }
    }

    startGame() {
        const players = Array.from(document.querySelectorAll('.player-input'))
            .map(input => input.value);
        const spyCount = parseInt(document.querySelector('input[name="spyCount"]:checked').value);
        
        // Casusları seç
        const spyIndices = this.selectSpies(players.length, spyCount);
        this.currentSpies = spyIndices.map(index => players[index]); // Casus isimlerini doğrudan kaydet
        
        // Rastgele futbolcu seç
        this.currentFootballer = this.getRandomFootballer();
        
        // Oyun kurulumu
        this.setupGameScreen(players, spyIndices);
        
        // Oyun ekranını göster
        document.querySelector('.game-setup').style.display = 'none';
        document.querySelector('.game-screen').style.display = 'block';
    }

    selectSpies(playerCount, spyCount) {
        const indices = [];
        while (indices.length < spyCount) {
            const index = Math.floor(Math.random() * playerCount);
            if (!indices.includes(index)) {
                indices.push(index);
            }
        }
        return indices;
    }

    setupGameScreen(players, spyIndices) {
        const gameScreen = document.createElement('div');
        gameScreen.className = 'game-screen';

        // Oyuncu butonlarını oluştur
        players.forEach((player, index) => {
            const button = document.createElement('button');
            button.className = 'player-button';
            button.textContent = player;
            button.addEventListener('click', () => {
                this.showPlayerInfo(player, spyIndices.includes(index));
                button.disabled = true; // Butonu devre dışı bırak
                button.classList.add('viewed');
            }, { once: true }); // Event listener'ı sadece bir kez çalıştır
            gameScreen.appendChild(button);
        });

        // Oyunu sonlandır butonu
        const endButton = document.createElement('button');
        endButton.className = 'btn secondary';
        endButton.style.width = '100%';
        endButton.style.marginTop = '2rem';
        endButton.textContent = translations[currentLang].endGame;
        endButton.addEventListener('click', () => this.showEndGame());
        gameScreen.appendChild(endButton);

        // Modal oluştur
        const modal = this.createModal();
        gameScreen.appendChild(modal);

        document.querySelector('main').appendChild(gameScreen);
    }

    createModal() {
        const modal = document.createElement('div');
        modal.className = 'player-modal';
        modal.innerHTML = `
            <div class="modal-content">
                <div class="modal-header"></div>
                <div class="modal-info">
                    <div class="info-row">
                        <div class="info-label">Futbolcu</div>
                        <div class="footballer-name"></div>
                    </div>
                    <div class="info-row footballer-hint-row" style="display: none;">
                        <div class="info-label">İpucu</div>
                        <div class="footballer-hint"></div>
                    </div>
                </div>
                <button class="close-modal">${translations[currentLang].close}</button>
            </div>
        `;
        return modal;
    }

    showPlayerInfo(playerName, isSpy) {
        const modal = document.querySelector('.player-modal');
        const header = modal.querySelector('.modal-header');
        const footballerName = modal.querySelector('.footballer-name');
        const footballerHint = modal.querySelector('.footballer-hint');
        const infoLabels = modal.querySelectorAll('.info-label');

        header.textContent = playerName;
        infoLabels[0].textContent = translations[currentLang].footballer;
        
        if (isSpy) {
            footballerName.textContent = translations[currentLang].youAreSpy;
        } else {
            footballerName.textContent = this.currentFootballer.name;
            footballerHint.style.display = 'none';
        }

        modal.style.display = 'block';

        const closeBtn = modal.querySelector('.close-modal');
        closeBtn.textContent = translations[currentLang].close;
        closeBtn.onclick = () => {
            modal.style.display = 'none';
        };
    }

    getRandomFootballer() {
        return { name: footballers[Math.floor(Math.random() * footballers.length)] };
    }

    showEndGame() {
        const modal = document.querySelector('.player-modal');
        const header = modal.querySelector('.modal-header');
        const footballerName = modal.querySelector('.footballer-name');
        const footballerHint = modal.querySelector('.footballer-hint');
        const footballerHintRow = modal.querySelector('.footballer-hint-row');
        const infoLabels = modal.querySelectorAll('.info-label');

        header.textContent = translations[currentLang].gameOver;
        footballerName.innerHTML = `${this.currentFootballer.name}`;
        
        // Casusun adını göster
        footballerHint.innerHTML = `${this.currentSpies[0]}`;
        footballerHintRow.style.display = 'flex';
        footballerHint.style.display = 'block';

        // Başlıkları güncelle
        infoLabels[0].textContent = translations[currentLang].footballer;
        infoLabels[1].textContent = translations[currentLang].spy;

        modal.style.display = 'block';

        const closeBtn = modal.querySelector('.close-modal');
        closeBtn.textContent = translations[currentLang].backToMenu;
        closeBtn.onclick = () => {
            location.reload();
        };
    }
}

// Dil çevirileri
const translations = {
    tr: {
        addPlayer: 'Oyuncu Ekle',
        removePlayer: 'Oyuncu Çıkar',
        startGame: 'Oyunu Başlat',
        endGame: 'Oyunu Sonlandır',
        spy: 'Casus',
        gameOver: 'Oyun Bitti!',
        backToMenu: 'Ana Menüye Dön',
        footballer: 'Futbolcu',
        youAreSpy: 'Sen Casussun!',
        close: 'Kapat'
    },
    en: {
        addPlayer: 'Add Player',
        removePlayer: 'Remove Player',
        startGame: 'Start Game',
        endGame: 'End Game',
        spy: 'Spy',
        gameOver: 'Game Over!',
        backToMenu: 'Back to Menu',
        footballer: 'Footballer',
        youAreSpy: 'You are the Spy!',
        close: 'Close'
    }
};

// Dil değiştirme fonksiyonu
function changeLanguage(lang) {
    currentLang = lang;
    localStorage.setItem('preferredLanguage', lang); // Dil tercihini kaydet
    
    // Butonları güncelle
    document.getElementById('addPlayer').textContent = translations[currentLang].addPlayer;
    document.getElementById('removePlayer').textContent = translations[currentLang].removePlayer;
    document.getElementById('startGame').textContent = translations[currentLang].startGame;
}

// Sayfa yüklendiğinde dil tercihini kontrol et
document.addEventListener('DOMContentLoaded', () => {
    const savedLang = localStorage.getItem('preferredLanguage');
    if (savedLang) {
        currentLang = savedLang;
        document.getElementById('languageSelect').value = savedLang;
        changeLanguage(savedLang);
    }
});

// Dil seçici event listener
document.getElementById('languageSelect').addEventListener('change', (e) => {
    changeLanguage(e.target.value);
});

// Oyunu başlat
let game;
window.addEventListener('load', () => {
    game = new Game();
    // Başlangıç dilini ayarla
    changeLanguage(document.getElementById('languageSelect').value);
});
