// ==========================================================
// script.js - Shared app logic for CropAssist (2025)
// ==========================================================

// --- TRANSLATIONS (English / Tamil / Hindi)
const TRANSLATIONS = {
  en: {
    brandTitle: "CropAssist",
    brandSubtitle: "AI Crop Disease Assistant",
    heroTitle: "Detect Crop Diseases Early",
    heroSub: "Upload a leaf image and get instant predictions with remedies and seasonal guidance.",
    footerText: "AI-powered disease detection and farmer guidance.",
    pageTitle: "Fertilizer Recommendation",
    pageSub: "Enter crop, soil type and growth stage to get recommendations with doses.",
    lblCrop: "Crop type",
    lblSoil: "Soil type",
    lblStage: "Growth stage",
    getRec: "Get Recommendation",
    downloadPdf: "Download Report",
    feedbackThank: "Thank you for your feedback!",
    toolsTitle: "🛠 Agricultural Tools Guide",
    toolsSub: "Practical care, safety, and calibration for common farm tools.",
    alertsTitle: "📢 Advisory Alerts",
    alertsSub: "Actionable alerts — check region and apply local guidance.",
    planningTitle: "🗓️ Crop Planning Assistant",
    planningIntro: "Select your region to view localized sowing and harvest windows plus tips.",
    selectedRegionTitle: "Selected region shows crop windows below.",
    riceSowLabel: "Sow:",
    riceSow: "Sept (Samba) / Jun (Kuruvai)",
    riceHarvestLabel: "Harvest:",
    riceHarvest: "Jan–Mar / Oct",
    riceTip1: "Ensure good drainage where possible to reduce blast risk.",
    riceTip2: "Apply basal P at transplanting and split N applications.",
    potatoSowLabel: "Sow:",
    potatoSow: "Oct–Nov",
    potatoHarvestLabel: "Harvest:",
    potatoHarvest: "Jan–Feb",
    potatoTip1: "Use certified, disease-free seed tubers.",
    potatoTip2: "Hill-up plants to improve tuber formation and drainage.",
    maizeSowLabel: "Sow:",
    maizeSow: "Jun–Jul",
    maizeHarvestLabel: "Harvest:",
    maizeHarvest: "Sept–Oct",
    maizeTip1: "Keep adequate spacing for good pollination and airflow.",
    maizeTip2: "Monitor for fall armyworm and other early pests.",
    check1: "Before sowing: soil test, field leveling, select quality seed.",
    check2: "Sowing window: align with monsoon or irrigation availability.",
    check3: "Crop care: timely nutrient splits and irrigation; scout weekly for pests.",
    check4: "Harvest: stop irrigation when recommended; dry and store appropriately.",
    samplePdfNote: "We will add region-wise printable PDFs. Tell us which district you want first on the Contact page."

  },
  ta: {
    brandTitle: "CropAssist",
    brandSubtitle: "AI பயிர் நோய் உதவியாளர்",
    heroTitle: "பயிர் நோய்களை முன்கூட்டியே கண்டறியுங்கள்",
    heroSub: "இலைப் படம் பதிவேற்றிக் உடனடி தீர்வுகள் மற்றும் பருவ ஆலோசனைகள் பெறுங்கள்.",
    footerText: "AI மூலம் நோய் கண்டறிதல் மற்றும் விவசாயி வழிகாட்டி.",
    pageTitle: "உர பரிந்துரை",
    pageSub: "பயிர், மண் வகை மற்றும் வளர்ச்சி நிலையை உள்ளிடவும் பரிந்துரைகள் பெற.",
    lblCrop: "பயிர் வகை",
    lblSoil: "மண் வகை",
    lblStage: "வளர்ச்சி நிலை",
    getRec: "பரிந்துரை பெற",
    downloadPdf: "அறிக்கையை ஏற்று",
    feedbackThank: "உங்கள் கருத்துக்கு நன்றி!",
    toolsTitle: "🛠 வேளாண் கருவிகள் வழிகாட்டி",
    toolsSub: "பொதுவான வேளாண் கருவிகளுக்கான பராமரிப்பு, பாதுகாப்பு மற்றும் அளவுத்திருத்த வழிகாட்டி.",
    alertsTitle: "📢 அறிவுறுத்தல் எச்சரிக்கைகள்",
    alertsSub: "பகுதியை சரிபார்த்து உள்ளூர் ஆலோசனையைப் பின்பற்றுங்கள்.",
    planningTitle: "🗓️ பயிர் திட்ட உதவியாளர்",
    planningIntro: "உங்கள் பகுதியைத் தேர்ந்தெடுத்து உள்ளூர் விதைப்பு மற்றும் அறுவடை நேரங்களையும் குறிப்புகளையும் காணுங்கள்.",
    selectedRegionTitle: "தேர்ந்தெடுக்கப்பட்ட பகுதியில் பயிர் கால அட்டவணை கீழே காட்டப்பட்டுள்ளது.",
    riceSowLabel: "விதைப்பு:",
    riceSow: "செப்டம்பர் (சாம்பா) / ஜூன் (குருவை)",
    riceHarvestLabel: "அறுவடை:",
    riceHarvest: "ஜனவரி–மார்ச் / அக்டோபர்",
    riceTip1: "நீர் தேங்காமல் வடிகால் வசதியை உறுதி செய்யுங்கள்; பிளாஸ்ட் நோய் ஆபத்து குறையும்.",
    riceTip2: "மாற்று நடவு செய்யும் போது பாஸ்பரஸ் உரம் கொடுத்து நைட்ரஜன் உரத்தை பிரித்து பயன்படுத்து.",
    potatoSowLabel: "விதைப்பு:",
    potatoSow: "அக்டோபர்–நவம்பர்",
    potatoHarvestLabel: "அறுவடை:",
    potatoHarvest: "ஜனவரி–பிப்ரவரி",
    potatoTip1: "நோயில்லாத சான்றளிக்கப்பட்ட உருளைக்கிழங்கு விதைகளைப் பயன்படுத்தவும்.",
    potatoTip2: "கிழங்கு உருவாக்கம் மற்றும் வடிகால் மேம்பட மண் ஏற்றி பராமரிக்கவும்.",
    maizeSowLabel: "விதைப்பு:",
    maizeSow: "ஜூன்–ஜூலை",
    maizeHarvestLabel: "அறுவடை:",
    maizeHarvest: "செப்டம்பர்–அக்டோபர்",
    maizeTip1: "சரியான மலர்ச்சி மற்றும் காற்றோட்டத்திற்காக இடைவெளி வைத்திருங்கள்.",
    maizeTip2: "பூச்சி தாக்கம் (எ.கா. fall armyworm) மற்றும் பிற ஆரம்ப நோய்களை கவனியுங்கள்.",
    check1: "விதைப்பு முன்: மண் பரிசோதனை, நிலம் சமநிலை மற்றும் தரமான விதைகள் தேர்ந்தெடுக்கவும்.",
    check2: "விதைப்பு நேரம்: பருவமழை அல்லது பாசன நீர் கிடைக்கும் நேரத்திற்கு ஏற்ப அமைக்கவும்.",
    check3: "பயிர் பராமரிப்பு: உரங்கள் மற்றும் பாசனம் சரியான நேரத்தில்; வாராந்திர பூச்சி கண்காணிப்பு செய்யவும்.",
    check4: "அறுவடை: பரிந்துரைக்கப்பட்டபடி பாசனம் நிறுத்தி, பயிரை உலர்த்தி சேமிக்கவும்.",
    samplePdfNote: "மாவட்ட வாரியாக அச்சிடக்கூடிய அட்டவணைகள் விரைவில் சேர்க்கப்படும். முதலில் எந்த மாவட்டத்தை விரும்புகிறீர்கள் என்பதை தெரிவியுங்கள்."
    },
  hi: {
    brandTitle: "CropAssist",
    brandSubtitle: "AI फसल रोग सहायक",
    heroTitle: "फसलों की बीमारियों का जल्दी पता लगाएँ",
    heroSub: "पत्ती की छवि अपलोड करें और उपाय व मौसमी मार्गदर्शन पाएं।",
    footerText: "AI-सहायता से रोग पहचान और किसान मार्गदर्शन।",
    pageTitle: "उर्वरक सिफारिश",
    pageSub: "फसल, मिट्टी और विकास चरण दर्ज करें और खुराक सहित सुझाव पाएं।",
    lblCrop: "फसल प्रकार",
    lblSoil: "मिट्टी प्रकार",
    lblStage: "विकास चरण",
    getRec: "सिफारिश प्राप्त करें",
    downloadPdf: "रिपोर्ट डाउनलोड",
    feedbackThank: "आपकी प्रतिक्रिया के लिए धन्यवाद!",
    toolsTitle: "🛠 कृषि उपकरण मार्गदर्शिका",
    toolsSub: "सामान्य कृषि उपकरणों की देखभाल, सुरक्षा और अंशांकन के व्यावहारिक सुझाव।",
    alertsTitle: "📢 परामर्श अलर्ट",
    alertsSub: "कार्रवाई योग्य अलर्ट — क्षेत्र की जांच करें और स्थानीय मार्गदर्शन लागू करें।",
    planningTitle: "🗓️ फसल योजना सहायक",
    planningIntro: "अपने क्षेत्र का चयन करें ताकि स्थानीय बुवाई और कटाई के समय के साथ सुझाव देख सकें।",
    selectedRegionTitle: "चयनित क्षेत्र के लिए फसल अवधि नीचे दी गई है।",
    riceSowLabel: "बुवाई:",
    riceSow: "सितंबर (सांबा) / जून (कुरुवई)",
    riceHarvestLabel: "कटाई:",
    riceHarvest: "जनवरी–मार्च / अक्टूबर",
    riceTip1: "जहाँ संभव हो वहाँ जल निकासी सुनिश्चित करें ताकि ब्लास्ट रोग का खतरा कम हो।",
    riceTip2: "रोपाई के समय फॉस्फोरस दें और नाइट्रोजन की खुराक विभाजित करें।",
    potatoSowLabel: "बुवाई:",
    potatoSow: "अक्टूबर–नवंबर",
    potatoHarvestLabel: "कटाई:",
    potatoHarvest: "जनवरी–फरवरी",
    potatoTip1: "प्रमाणित और रोग-मुक्त बीज कंदों का उपयोग करें।",
    potatoTip2: "कंद निर्माण और जल निकासी सुधारने के लिए पौधों पर मिट्टी चढ़ाएँ।",
    maizeSowLabel: "बुवाई:",
    maizeSow: "जून–जुलाई",
    maizeHarvestLabel: "कटाई:",
    maizeHarvest: "सितंबर–अक्टूबर",
    maizeTip1: "अच्छे परागण और वायु प्रवाह के लिए उचित दूरी बनाए रखें।",
    maizeTip2: "फॉल आर्मीवर्म और अन्य प्रारंभिक कीटों की निगरानी करें।",
    check1: "बुवाई से पहले: मिट्टी परीक्षण, खेत समतलीकरण और गुणवत्ता वाले बीज का चयन करें।",
    check2: "बुवाई का समय: मानसून या सिंचाई उपलब्धता के अनुसार समायोजित करें।",
    check3: "फसल देखभाल: समय पर उर्वरक विभाजन और सिंचाई करें; कीटों की साप्ताहिक जांच करें।",
    check4: "कटाई: अनुशंसित समय पर सिंचाई रोकें; सुखाएं और सही तरीके से भंडारण करें।",
    samplePdfNote: "हम क्षेत्रवार प्रिंट करने योग्य कैलेंडर जोड़ेंगे। कृपया बताएं कि आप किस जिले को पहले चाहते हैं।"
  }
};

// --- UTILITIES
function $id(id){ return document.getElementById(id); }

// --- APPLY TRANSLATIONS
function applyTranslations(lang){
  window.APP_LANG = lang;
  localStorage.setItem('app_lang', lang);
  const dict = TRANSLATIONS[lang] || TRANSLATIONS.en;

  // Find all elements that have the data-i18n attribute
  document.querySelectorAll('[data-i18n]').forEach(el=>{
    const key = el.dataset.i18n;
    if(dict[key]) {
      // For input placeholders, update placeholder
      if(el.tagName === 'INPUT' || el.tagName === 'TEXTAREA'){
        el.placeholder = dict[key];
      } else {
        el.textContent = dict[key];
      }
    }
  });
}

// --- INITIALIZE LANGUAGE
function initLanguage(){
  document.querySelectorAll('#langSelect').forEach(sel=>{
    // Fill dropdown only once
    if(!sel.innerHTML.trim()){
      sel.innerHTML = `
        <option value="en">English</option>
        <option value="ta">தமிழ்</option>
        <option value="hi">हिन्दी</option>`;
    }

    const saved = localStorage.getItem('app_lang') || 'en';
    sel.value = saved;

    sel.addEventListener('change', e=>{
      applyTranslations(e.target.value);
      // sync all dropdowns
      document.querySelectorAll('#langSelect').forEach(s=> s.value = e.target.value);
    });
  });

  applyTranslations(localStorage.getItem('app_lang') || 'en');
}

// --- THEME TOGGLE
function setTheme(mode){
  if(mode === 'bright'){
    document.body.classList.add('bright');
    localStorage.setItem('app_theme', 'bright');
  } else {
    document.body.classList.remove('bright');
    localStorage.setItem('app_theme', 'dark');
  }
}

function initTheme(){
  const saved = localStorage.getItem('app_theme') || 'dark';
  setTheme(saved);
  document.querySelectorAll('#themeToggle').forEach(btn=>{
    btn.textContent = saved === 'bright' ? '🌙' : '☀️';
    btn.addEventListener('click', ()=>{
      const isBright = document.body.classList.contains('bright');
      setTheme(isBright ? 'dark' : 'bright');
      document.querySelectorAll('#themeToggle').forEach(b=> b.textContent = isBright ? '☀️' : '🌙');
    });
  });
}

// --- NAVIGATION HIGHLIGHT
function highlightNav(){
  const path = location.pathname.split('/').pop() || 'index.html';
  document.querySelectorAll('.nav-link').forEach(link=>{
    const href = link.getAttribute('href');
    if(href && href.includes(path)) link.classList.add('active');
    else link.classList.remove('active');
  });
}

// --- ANALYZER MODAL
function openAnalyzer(url){
  const modal = $id('analyzerModal');
  const frame = $id('analyzerFrame');
  if(!modal || !frame) return;
  frame.src = url;
  modal.classList.add('show');
  document.body.style.overflow = 'hidden';
}
function closeAnalyzer(){
  const modal = $id('analyzerModal');
  const frame = $id('analyzerFrame');
  if(!modal || !frame) return;
  frame.src = '';
  modal.classList.remove('show');
  document.body.style.overflow = '';
}

// --- ANIMATION ON SCROLL
function animateOnScroll(){
  const els = document.querySelectorAll('.card, .hero');
  const trigger = window.innerHeight * 0.8;
  els.forEach(el=>{
    const rect = el.getBoundingClientRect();
    if(rect.top < trigger) el.classList.add('visible');
  });
}
window.addEventListener('scroll', animateOnScroll);
window.addEventListener('load', animateOnScroll);

// --- DOM READY
document.addEventListener('DOMContentLoaded', ()=>{
  initLanguage();
  initTheme();
  highlightNav();
  animateOnScroll();

  // Analyzer modal handlers
  document.querySelectorAll('[id^="openAnalyzer"], #heroAnalyze').forEach(btn=>{
    btn.addEventListener('click', ()=> openAnalyzer('https://prasannatesla-crop-guard-resnet-50.hf.space'));
  });
  const closeBtn = $id('closeAnalyzer');
  if(closeBtn) closeBtn.addEventListener('click', closeAnalyzer);
  const modal = $id('analyzerModal');
  if(modal) modal.addEventListener('click', e=>{ if(e.target===modal) closeAnalyzer(); });
});

// --- REGISTER SERVICE WORKER (PWA)
if('serviceWorker' in navigator){
  navigator.serviceWorker.register('service-worker.js').catch(()=>{});
}

// 📲 Prompt for "Install App"
let deferredPrompt;
window.addEventListener("beforeinstallprompt", (e) => {
  e.preventDefault();
  deferredPrompt = e;
  const installBtn = document.createElement("button");
  installBtn.textContent = "📲 Install AI Crop Assistant";
  installBtn.className = "btn primary";
  installBtn.style.position = "fixed";
  installBtn.style.bottom = "20px";
  installBtn.style.right = "20px";
  document.body.appendChild(installBtn);

  installBtn.addEventListener("click", async () => {
    installBtn.remove();
    deferredPrompt.prompt();
    const { outcome } = await deferredPrompt.userChoice;
    console.log(`App installation: ${outcome}`);
    deferredPrompt = null;
  });
});
