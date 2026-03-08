const CONFIG = {
    coupleNames: "Дамир мен Аружан",
    inviteTitleTop: "СІЗДІ",
    inviteTitleBottom: "ҮЙЛЕНУ ТОЙЫМЫЗҒА ШАҚЫРАМЫЗ",
    month: "маусым",
    day: "20",
    year: "2026",
    weekday: "сенбі",
    timeDisplay: "19:00",
    timeLabelTop: "уақыты",
    timeBig: "7",
    timeBottom: "кешкі",
    venueTitle: "ВАЙЛ ХОЛЛ МЕЙРАМХАНАСЫ",
    venueSubtitle: "Өскемен қаласы",
    addressTitle: "Мекенжай:",
    cityLine: "Өскемен қаласы",
    venueTypeLine: "мейрамхана",
    venueLine: "\"Вайл холл\"",
    greetingTitle: "Құрметті қонақтар!",
    greetingText1: "Біздің өмірімізде маңызды әрі бақытты күн жақындап келеді!",
    greetingText2: "Осы қуанышты күні",
    greetingText3: "ең жақын және қадірлі адамдардың қасымызда болғанын қалаймыз.",
    greetingText4: "Жанұя құру қуанышын бізбен бірге бөлісуге шақырамыз!",
    signature: "Құрметпен, Дамир мен Аружан",
    dressCodeTitle: "Дресс-код және той түстері",
    dressCodeText: "Біз сіздерді дәл өздеріңіздей әдемі кешкі образда күтеміз!",
    formTitle: "Сауалнама",
    formSubtitle: "Құрметті қонақтар, тойға келетініңізді растауыңызды сұраймыз!",
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

    document.getElementById('address-title').textContent = CONFIG.addressTitle;
    document.getElementById('city-line').textContent = CONFIG.cityLine;
    document.getElementById('venue-type-line').textContent = CONFIG.venueTypeLine;
    document.getElementById('venue-line').textContent = CONFIG.venueLine;

    document.getElementById('dresscode-title').textContent = CONFIG.dressCodeTitle;
    document.getElementById('dresscode-text').textContent = CONFIG.dressCodeText;

    document.getElementById('form-title').textContent = CONFIG.formTitle;
    document.getElementById('form-subtitle').textContent = CONFIG.formSubtitle;

    // Set calendar month/year
    document.getElementById('event-month-cal').textContent = CONFIG.month;
    document.getElementById('event-year-cal').textContent = CONFIG.year;
    document.getElementById('event-day-cal').textContent = CONFIG.day;
    document.getElementById('event-weekday-cal').textContent = CONFIG.weekday + ",";
    document.getElementById('event-time-cal').textContent = CONFIG.timeDisplay;

    // Optional dynamic images
    const populateImage = (id, src) => {
        const el = document.getElementById(id);
        if (el && src) el.src = src;
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
        const distance = eventDate - now;

        if (distance < 0) {
            document.getElementById('timer-days').textContent = "00";
            document.getElementById('timer-hours').textContent = "00";
            document.getElementById('timer-minutes').textContent = "00";
            document.getElementById('timer-seconds').textContent = "00";
            return;
        }

        const days = Math.floor(distance / (1000 * 60 * 60 * 24));
        const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((distance % (1000 * 60)) / 1000);

        document.getElementById('timer-days').textContent = days.toString().padStart(2, '0');
        document.getElementById('timer-hours').textContent = hours.toString().padStart(2, '0');
        document.getElementById('timer-minutes').textContent = minutes.toString().padStart(2, '0');
        document.getElementById('timer-seconds').textContent = seconds.toString().padStart(2, '0');
    };

    updateCountdown();
    setInterval(updateCountdown, 1000);

    // Generate Calendar Grid (June 2026 example)
    // June 2026 starts on a Monday. 30 days total.
    const calendarGrid = document.getElementById('calendar-grid');
    if (calendarGrid) {
        // Empty cells for alignment if needed. For Jun 2026 starting on Mon, no offset needed if Mon is first.
        let daysHTML = '';
        for (let i = 1; i <= 30; i++) {
            if (i === 20) {
                // highlight the event day (circle with border)
                daysHTML += `<div class="highlight-day"><span>${i}</span></div>`;
            } else {
                daysHTML += `<div>${i}</div>`;
            }
        }
        calendarGrid.innerHTML = daysHTML;
    }

    // Handle RSVP Form Submission
    const form = document.getElementById('rsvp-form');
    if (form) {
        form.addEventListener('submit', (e) => {
            e.preventDefault();
            const btn = document.getElementById('submit-btn');
            btn.textContent = 'Жіберілді!'; // Translated to Kazakh
            btn.style.backgroundColor = '#4CA053';
            btn.style.color = 'white';
            setTimeout(() => {
                btn.textContent = 'Жіберу'; // Translated to Kazakh
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
        const iconMusic = musicBtn.querySelector('.icon-music');
        // always hide music note icon - heart is always visible
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
