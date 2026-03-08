const CONFIG = {
    coupleNames: "Дамир и Аружан",
    inviteTitleTop: "ВЫ ПРИГЛАШЕНЫ",
    inviteTitleBottom: "НА СВАДЕБНОЕ МЕРОПРИЯТИЕ",
    month: "июнь",
    day: "20",
    year: "2026",
    weekday: "суббота",
    timeDisplay: "19:00",
    timeLabelTop: "время",
    timeBig: "7",
    timeBottom: "вечера",
    venueTitle: "РЕСТОРАН ВАЙЛ ХОЛЛ",
    venueSubtitle: "Усть-Каменогорск",
    addressTitle: "Адрес:",
    cityLine: "город Усть-Каменогорск",
    venueTypeLine: "ресторан",
    venueLine: "\"Вайл холл\"",
    greetingTitle: "Дорогие гости!",
    greetingText1: "В нашей жизни предстоят счастливые перемены!",
    greetingText2: "Мы хотим, чтобы в этот день",
    greetingText3: "рядом с нами были самые близкие и дорогие для нас люди.",
    greetingText4: "Будем рады разделить с Вами день нашей свадьбы!",
    signature: "С уважением, Дамир и Аружан",
    dressCodeTitle: "Дресс-код и цвета свадьбы",
    dressCodeText: "Будем ждать Вас в таких же красивых образах, как и Вы сами!",
    formTitle: "Анкета",
    formSubtitle: "Дорогие гости, пожалуйста, подтвердите ваше участие в нашем празднике!",
    eventDateISO: "2026-06-20T19:00:00",
    assets: {
        heroMain: "assets/hero-main.jpg",
        flourish1: "assets/flourish-1.png",
        heroSecondary: "assets/hero-secondary.jpg",
        mapArrow: "",
        mapIcon: "",
        dressCodeImage: "dresscode_minimal_sketch_1772979155107.png",
        flourish2: "assets/flourish-2.png"
    }
};

document.addEventListener('DOMContentLoaded', () => {
    document.getElementById('invite-title-top').textContent = CONFIG.inviteTitleTop;
    document.getElementById('invite-title-bottom').textContent = CONFIG.inviteTitleBottom;
    // couple names are hardcoded in HTML between the heart player

    document.getElementById('info-month').textContent = CONFIG.month;
    document.getElementById('info-day').textContent = CONFIG.day;
    document.getElementById('info-year').textContent = CONFIG.year;

    document.getElementById('venue-title').textContent = CONFIG.venueTitle;
    document.getElementById('venue-subtitle').textContent = CONFIG.venueSubtitle;

    document.getElementById('time-label-top').textContent = CONFIG.timeLabelTop;
    document.getElementById('time-big').textContent = CONFIG.timeBig;
    document.getElementById('time-bottom').textContent = CONFIG.timeBottom;

    document.getElementById('greeting-title').textContent = CONFIG.greetingTitle;
    document.getElementById('greeting-text-1').textContent = CONFIG.greetingText1;
    document.getElementById('greeting-text-2').textContent = CONFIG.greetingText2;
    document.getElementById('greeting-text-3').textContent = CONFIG.greetingText3;
    document.getElementById('greeting-text-4').textContent = CONFIG.greetingText4;
    document.getElementById('signature').textContent = CONFIG.signature;

    document.getElementById('event-month-cal').textContent = CONFIG.month;
    document.getElementById('event-day-cal').textContent = CONFIG.day;
    document.getElementById('event-weekday-cal').textContent = CONFIG.weekday;
    document.getElementById('event-time-cal').textContent = CONFIG.timeDisplay;
    document.getElementById('event-year-cal').textContent = CONFIG.year;

    document.getElementById('address-title').textContent = CONFIG.addressTitle;
    document.getElementById('city-line').textContent = CONFIG.cityLine;
    document.getElementById('venue-type-line').textContent = CONFIG.venueTypeLine;
    document.getElementById('venue-line').textContent = CONFIG.venueLine;

    document.getElementById('dresscode-title').textContent = CONFIG.dressCodeTitle;
    document.getElementById('dresscode-text').textContent = CONFIG.dressCodeText;

    document.getElementById('form-title').textContent = CONFIG.formTitle;
    document.getElementById('form-subtitle').textContent = CONFIG.formSubtitle;

    // image populating safely if paths are missing
    const populateImage = (id, src) => {
        const img = document.getElementById(id);
        if (img) img.src = src;
    };

    // populateImage('header-logo-img', CONFIG.assets.logo);
    populateImage('hero-main-img', CONFIG.assets.heroMain);
    populateImage('flourish-1-img', CONFIG.assets.flourish1);
    populateImage('hero-secondary-img', CONFIG.assets.heroSecondary);
    populateImage('dresscode-img', CONFIG.assets.dressCodeImage);
    populateImage('flourish-2-img', CONFIG.assets.flourish2);

    // Hide map icons if no src provided
    const mapArrow = document.getElementById('map-arrow-img');
    const mapIcon = document.getElementById('map-icon-img');
    if (mapArrow && !CONFIG.assets.mapArrow) mapArrow.style.display = 'none';
    if (mapIcon && !CONFIG.assets.mapIcon) mapIcon.style.display = 'none';

    const updateCountdown = () => {
        const eventDate = new Date(CONFIG.eventDateISO).getTime();
        const now = new Date().getTime();
        const diff = eventDate - now;

        if (diff > 0) {
            const days = Math.floor(diff / (1000 * 60 * 60 * 24));
            const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
            const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
            const seconds = Math.floor((diff % (1000 * 60)) / 1000);

            document.getElementById('timer-days').textContent = days;
            document.getElementById('timer-hours').textContent = hours;
            document.getElementById('timer-minutes').textContent = minutes;
            document.getElementById('timer-seconds').textContent = seconds;
        } else {
            document.getElementById('timer-days').textContent = '00';
            document.getElementById('timer-hours').textContent = '00';
            document.getElementById('timer-minutes').textContent = '00';
            document.getElementById('timer-seconds').textContent = '00';
        }
    };

    setInterval(updateCountdown, 1000);
    updateCountdown();

    const renderCalendar = () => {
        const grid = document.getElementById('calendar-grid');
        if (!grid) return;
        grid.innerHTML = '';

        const targetDate = new Date(CONFIG.eventDateISO);
        const year = targetDate.getFullYear();
        const month = targetDate.getMonth();

        const firstDay = new Date(year, month, 1);
        let startingDay = firstDay.getDay();
        if (startingDay === 0) startingDay = 7;

        const daysInMonth = new Date(year, month + 1, 0).getDate();

        for (let i = 1; i < startingDay; i++) {
            const cell = document.createElement('div');
            grid.appendChild(cell);
        }

        for (let i = 1; i <= daysInMonth; i++) {
            const cell = document.createElement('div');
            if (i === parseInt(CONFIG.day)) {
                const highlight = document.createElement('div');
                highlight.className = 'highlight-day';
                highlight.textContent = i;
                cell.appendChild(highlight);
            } else {
                cell.textContent = i;
            }
            grid.appendChild(cell);
        }
    };

    renderCalendar();

    // prevent form submission to keep page static for demo
    const form = document.getElementById('rsvp-form');
    if (form) {
        form.addEventListener('submit', (e) => {
            e.preventDefault();
            const btn = document.getElementById('submit-btn');
            btn.textContent = 'Отправлено!';
            btn.style.backgroundColor = '#4CA053';
            btn.style.color = 'white';
            setTimeout(() => {
                btn.textContent = 'Отправить';
                btn.style.backgroundColor = '';
                btn.style.color = '';
            }, 3000);
        });
    }

    // =====================
    // MUSIC PLAYER
    // =====================
    const audio = document.getElementById('bg-music');
    const musicBtn = document.getElementById('music-btn');
    if (audio && musicBtn) {
        const iconHeart = musicBtn.querySelector('.icon-heart');
        const iconMusic = musicBtn.querySelector('.icon-music');
        // always keep music icon hidden - heart is the only visible icon
        if (iconMusic) iconMusic.style.display = 'none';
        let isPlaying = false;

        musicBtn.addEventListener('click', function () {
            if (isPlaying) {
                audio.pause();
                musicBtn.classList.remove('playing');
                isPlaying = false;
            } else {
                audio.play()
                    .then(() => {
                        musicBtn.classList.add('playing');
                        isPlaying = true;
                    })
                    .catch(() => { });
            }
        });
    }

    // =====================
    // SCROLL REVEAL ANIMATIONS
    // =====================
    const revealElements = document.querySelectorAll('.reveal, .reveal-left, .reveal-right, .reveal-scale, .img-reveal, .color-palette, .greeting-content');

    const revealObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                revealObserver.unobserve(entry.target);
            }
        });
    }, {
        threshold: 0.15,
        rootMargin: '0px 0px -40px 0px'
    });

    revealElements.forEach(el => revealObserver.observe(el));
});
