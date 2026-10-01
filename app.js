(() => {
  const switcher = document.getElementById('languageSwitch');
  const mobileMenuButton = document.getElementById('mobileMenuButton');
  const mobileMenu = document.getElementById('mobileMenu');
  const isMobileMenuOpen = () => mobileMenu?.classList.contains('open');

  const translations = {
    fa: {
      'nav.about':'درباره من','nav.journey':'مسیر من','nav.learning':'یادگیری','nav.projects':'پروژه‌ها','nav.contact':'ارتباط','nav.aria':'ناوبری اصلی','contact.statusAria':'وضعیت راه‌های ارتباطی','kicker.about':'01 / ABOUT','projects.card.status':'در حال ساخت','projects.tag.ai':'هوش مصنوعی','projects.tag.web':'وب','projects.tag.apps':'اپلیکیشن','projects.card.next':'آزمایش بعدی','contact.status':'راه‌های ارتباطی به‌زودی','kicker.journey':'02 / MY JOURNEY','kicker.learning':'03 / LEARNING','kicker.projects':'04 / PROJECTS','kicker.vision':'05 / VISION','kicker.contact':'06 / CONTACT','strip.lab':'AILIN INNOVATION LAB','strip.curiosity':'کنجکاو از طبیعت','strip.future':'ساختن آینده','projects.card.label':'PROJECT LAB · 001','hero.meta1':'01 · هوش مصنوعی','hero.meta2':'02 · وب و اپلیکیشن','hero.meta3':'03 · پروژه‌های آینده','hero.visualTop':'یادگیری<br><b>در حال انجام</b>','hero.visualBottom':'ساخت · آزمون · رشد','footer.copy':'© 2026 Ailin Azimi · ساخته‌شده با کنجکاوی و بلندپروازی',
      'journey.step1.meta':'NOW · 01','journey.step1.title':'شروع مسیر هوش مصنوعی','journey.step1.body':'ساختن پایه‌های دانش و آشنایی عمیق‌تر با دنیای AI.',
      'journey.step2.meta':'NEXT · 02','journey.step2.title':'توسعه وب','journey.step2.body':'یادگیری طراحی و توسعه وب‌سایت‌های مدرن و حرفه‌ای.',
      'journey.step3.meta':'NEXT · 03','journey.step3.title':'توسعه اپلیکیشن','journey.step3.body':'ورود به دنیای ساخت اپلیکیشن و محصولات دیجیتال.',
      'journey.step4.meta':'FUTURE · 04','journey.step4.title':'بیشتر ساختن','journey.step4.body':'پروژه‌های واقعی، تجربه‌های تازه و هدف‌های بزرگ‌تر.',
      'learning.card1.title':'هوش مصنوعی','learning.card1.body':'مفاهیم و ابزارهای هوش مصنوعی',
      'learning.card2.title':'توسعه وب','learning.card2.body':'ساخت تجربه‌های وب مدرن',
      'learning.card3.title':'توسعه اپلیکیشن','learning.card3.body':'طراحی و ساخت اپلیکیشن',
      'learning.card4.title':'محصولات دیجیتال','learning.card4.body':'تبدیل ایده به محصول دیجیتال',
      'hero.title':'آینده را فقط<br><em>یاد نمی‌گیرم؛</em><br>می‌سازم.',
      'hero.lead':'من آیلین عظیمی هستم؛ در آغاز مسیر یادگیری هوش مصنوعی، وب و ساخت اپلیکیشن. اینجا فضای شخصی من برای یادگیری، تجربه‌کردن و تبدیل ایده‌ها به پروژه‌های واقعی است.',
      'hero.ctaJourney':'شروع مسیر من','hero.ctaProjects':'مشاهده پروژه‌ها',
      'about.title':'یک مسیر تازه،<br><em>با هدف‌های بزرگ.</em>',
      'about.lead':'این وب‌سایت نقطه شروع برند شخصی من است؛ جایی که مسیر رشد من در فناوری به‌مرور ثبت و کامل می‌شود.',
      'about.card1.title':'آیلین عظیمی',
      'about.card1.body':'من در ابتدای مسیر هوش مصنوعی هستم؛ مسیری که با کنجکاوی شروع شده و با ساختن ادامه پیدا می‌کند. اینجا جایی است که یادگیری، تجربه و ایده‌ها به قدم‌های واقعی تبدیل می‌شوند.',
      'about.card2.title':'مسیر در حال ساخت',
      'about.card2.body':'هوش مصنوعی، وب و اپلیکیشن برای من سه مسیر جدا نیستند؛ هرکدام بخشی از یک هدف بزرگ‌ترند: یادگرفتن برای ساختن چیزهایی که ارزش تجربه‌کردن دارند.',
      'journey.title':'یادگیری، <em>ساختن،</em> ادامه‌دادن.',
      'journey.lead':'این مسیر ثابت نیست؛ با هر تجربه، پروژه و مهارت جدید، مرحله بعدی شکل می‌گیرد.',
      'learning.title':'چیزهایی که<br><em>می‌سازم و یاد می‌گیرم.</em>',
      'projects.title':'پروژه‌ها؛ جایی که <em>یادگیری واقعی می‌شود.</em>',
      'projects.lead':'اینجا فقط ویترین نیست؛ هر پروژه قرار است یک آزمایش واقعی باشد—از یک ایده خام تا تجربه‌ای که بتوانم از آن چیزی تازه یاد بگیرم.',
      'projects.card.title':'اولین پروژه، شروع یک مجموعه است.',
      'projects.card.body':'این آزمایشگاه به‌مرور با پروژه‌های واقعی در AI، وب و اپلیکیشن پر می‌شود؛ پروژه‌هایی که فقط ساخته نمی‌شوند، بلکه دلیل ساخته‌شدن و چیزهایی که از آن‌ها یاد گرفته‌ام را هم روایت می‌کنند.',
      'vision.title':'از یادگیری شروع می‌کنم.<br><em>برای ساختن ادامه می‌دهم.</em>',
      'vision.body':'Ailin_innovation_lab فقط یک وب‌سایت نیست؛ دفتر دیجیتال مسیری است که تازه شروع شده.',
      'contact.title':'بیایید در ارتباط باشیم.',
      'contact.body':'این بخش در ادامه مسیر با راه‌های ارتباطی و شبکه‌های حرفه‌ای تکمیل می‌شود.',
      'contact.cta':'ارتباط با من'
    },
    en: {
      'nav.about':'About Me','nav.journey':'My Journey','nav.learning':'Learning','nav.projects':'Projects','nav.contact':'Contact','nav.aria':'Main navigation','contact.statusAria':'Contact channel status','kicker.about':'01 / ABOUT','projects.card.status':'BUILDING','projects.tag.ai':'AI','projects.tag.web':'WEB','projects.tag.apps':'APPS','projects.card.next':'NEXT EXPERIMENT','contact.status':'CHANNELS COMING SOON','kicker.journey':'02 / MY JOURNEY','kicker.learning':'03 / LEARNING','kicker.projects':'04 / PROJECTS','kicker.vision':'05 / VISION','kicker.contact':'06 / CONTACT','strip.lab':'AILIN INNOVATION LAB','strip.curiosity':'CURIOUS BY NATURE','strip.future':'BUILDING THE FUTURE','projects.card.label':'PROJECT LAB · 001','hero.meta1':'01 · Artificial Intelligence','hero.meta2':'02 · Web & Apps','hero.meta3':'03 · Future Projects','hero.visualTop':'LEARNING<br><b>IN PROGRESS</b>','hero.visualBottom':'BUILD · TEST · GROW','footer.copy':'© 2026 Ailin Azimi · Built with curiosity & ambition',
      'journey.step1.meta':'NOW · 01','journey.step1.title':'Starting the AI Journey','journey.step1.body':'Building foundational knowledge and exploring the world of AI more deeply.',
      'journey.step2.meta':'NEXT · 02','journey.step2.title':'Web Development','journey.step2.body':'Learning to design and build modern, professional websites.',
      'journey.step3.meta':'NEXT · 03','journey.step3.title':'App Development','journey.step3.body':'Stepping into app development and digital products.',
      'journey.step4.meta':'FUTURE · 04','journey.step4.title':'Building More','journey.step4.body':'Real projects, new experiences, and bigger ambitions.',
      'learning.card1.title':'Artificial Intelligence','learning.card1.body':'AI concepts and tools',
      'learning.card2.title':'Web Development','learning.card2.body':'Building modern web experiences',
      'learning.card3.title':'App Development','learning.card3.body':'Designing and building apps',
      'learning.card4.title':'Digital Products','learning.card4.body':'Turning ideas into digital products',
      'hero.title':'I don’t just<br><em>learn the future;</em><br>I build it.',
      'hero.lead':'I’m Ailin Azimi, at the beginning of my journey in artificial intelligence, web development, and app development. This is my personal space to learn, experiment, and turn ideas into real projects.',
      'hero.ctaJourney':'Start My Journey','hero.ctaProjects':'View Projects',
      'about.title':'A new path,<br><em>with big ambitions.</em>',
      'about.lead':'This website is the starting point of my personal brand—a space where my growth in technology will be documented and shaped over time.',
      'about.card1.title':'Ailin Azimi',
      'about.card1.body':'I’m at the beginning of my AI journey—a path that starts with curiosity and continues through building. This is where learning, experimentation, and ideas become real steps forward.',
      'about.card2.title':'A Path in Progress',
      'about.card2.body':'AI, web, and app development are not separate paths for me. They are parts of a bigger goal: learning so I can build things worth experiencing.',
      'journey.title':'Learn, <em>build,</em> keep going.',
      'journey.lead':'This path is not fixed. Every new experience, project, and skill shapes what comes next.',
      'learning.title':'What I<br><em>build and learn.</em>',
      'projects.title':'Projects; where <em>learning becomes real.</em>',
      'projects.lead':'This is more than a showcase. Each project is an experiment—from a raw idea to an experience that teaches me something new.',
      'projects.card.title':'The first project starts a collection.',
      'projects.card.body':'This lab will gradually grow with real projects in AI, web, and apps—projects that explain not only what was built, but why it was built and what I learned from it.',
      'vision.title':'I start with learning.<br><em>I continue by building.</em>',
      'vision.body':'Ailin_innovation_lab is more than a website; it is the digital record of a journey that has just begun.',
      'contact.title':'Let’s stay connected.',
      'contact.body':'As the journey grows, this section will be expanded with professional contact and network links.',
      'contact.cta':'Contact Me'
    }
  };

  const setLanguage = (lang) => {
    const dict = translations[lang];
    document.documentElement.lang = lang;
    document.documentElement.dir = lang === 'fa' ? 'rtl' : 'ltr';
    document.documentElement.dataset.lang = lang;

    document.querySelectorAll('[data-i18n]').forEach((element) => {
      const value = dict[element.dataset.i18n];
      if (value) element.innerHTML = value;
    });

    document.querySelectorAll('[data-i18n-aria]').forEach((element) => {
      const value = dict[element.dataset.i18nAria];
      if (value) element.setAttribute('aria-label', value);
    });

    if (mobileMenuButton) {
      mobileMenuButton.setAttribute('aria-label', isMobileMenuOpen() ? (lang === 'fa' ? 'بستن منو' : 'Close menu') : (lang === 'fa' ? 'باز کردن منو' : 'Open menu'));
    }

    if (switcher) {
      switcher.innerHTML = lang === 'fa'
        ? '<span>FA</span><i></i><span>EN</span>'
        : '<span>EN</span><i></i><span>FA</span>';
      switcher.setAttribute('aria-label', lang === 'fa' ? 'تغییر زبان به انگلیسی' : 'Switch language to Persian');
    }

    localStorage.setItem('ailin-language', lang);
  };

  const savedLanguage = localStorage.getItem('ailin-language');
  setLanguage(savedLanguage === 'en' ? 'en' : 'fa');

  switcher?.addEventListener('click', () => {
    setLanguage(document.documentElement.dataset.lang === 'fa' ? 'en' : 'fa');
  });

  mobileMenuButton?.addEventListener('click', () => {
    const isOpen = mobileMenu.classList.toggle('open');
    mobileMenuButton.setAttribute('aria-expanded', String(isOpen));
    mobileMenuButton.setAttribute('aria-label', isOpen ? (document.documentElement.dataset.lang === 'fa' ? 'بستن منو' : 'Close menu') : (document.documentElement.dataset.lang === 'fa' ? 'باز کردن منو' : 'Open menu'));
    mobileMenuButton.textContent = isOpen ? '×' : '☰';
  });

  mobileMenu?.querySelectorAll('a').forEach((link) => {
    link.addEventListener('click', () => {
      mobileMenu.classList.remove('open');
      mobileMenuButton?.setAttribute('aria-expanded', 'false');
      if (mobileMenuButton) mobileMenuButton.textContent = '☰';
    });
  });
})();