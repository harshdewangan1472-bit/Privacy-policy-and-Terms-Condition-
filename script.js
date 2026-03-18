const content = {
  privacy: {
    en: {
      title: "Privacy Policy",
      intro: "Your privacy is important to us. This policy explains how we collect, use, and protect your information.",
      sections: [
        {
          title: "Information Collection",
          content: "We collect only necessary user information such as name, email, and phone number to provide a better experience."
        },
        {
          title: "Data Sharing",
          content: "Your privacy is our priority. We never sell or share your personal data with any third-party marketing services."
        },
        {
          title: "Safe & Secure Storage",
          content: "Your data is securely stored using Firebase industry-standard encryption and protocols."
        },
        {
          title: "User Agreement",
          content: "By using this application, you consent to our privacy practices and the way we handle your data."
        },
        {
          title: "Help & Support",
          content: "If you have any questions regarding your privacy, please feel free to contact our support team."
        }
      ]
    },
    hi: {
      title: "गोपनीयता नीति",
      intro: "आपकी गोपनीयता हमारे लिए महत्वपूर्ण है। यह नीति बताती है कि हम आपकी जानकारी कैसे एकत्र करते हैं, उपयोग करते हैं और सुरक्षित रखते हैं।",
      sections: [
        {
          title: "जानकारी संग्रह",
          content: "हम बेहतर अनुभव प्रदान करने के लिए नाम, ईमेल और फोन नंबर जैसी केवल आवश्यक उपयोगकर्ता जानकारी एकत्र करते हैं।"
        },
        {
          title: "डेटा साझा करना",
          content: "आपकी गोपनीयता हमारी प्राथमिकता है। हम आपकी व्यक्तिगत जानकारी को कभी भी किसी तीसरे पक्ष की मार्केटिंग सेवाओं को बेचते या साझा नहीं करते हैं।"
        },
        {
          title: "सुरक्षित भंडारण",
          content: "आपका डेटा Firebase उद्योग-मानक एन्क्रिप्शन और प्रोटोकॉल का उपयोग करके सुरक्षित रूप से संग्रहीत किया जाता है।"
        },
        {
          title: "उपयोगकर्ता समझौता",
          content: "इस एप्लिकेशन का उपयोग करके, आप हमारी गोपनीयता प्रथाओं और जिस तरह से हम आपके डेटा को संभालते हैं, उसके लिए अपनी सहमति देते हैं।"
        },
        {
          title: "सहायता और समर्थन",
          content: "यदि आपकी गोपनीयता के संबंध में आपके कोई प्रश्न हैं, तो कृपया हमारी सहायता टीम से संपर्क करने में संकोच न करें।"
        }
      ]
    }
  },
  terms: {
    en: {
      title: "Terms and Conditions",
      intro: "Welcome to RM Ads Maker. Please read our terms and conditions carefully before using our services.",
      sections: [
        {
          title: "Application Usage",
          content: "By using RM Ads Maker, you agree to not misuse the application. No illegal or unauthorized activities are allowed within the platform."
        },
        {
          title: "Subscription & Refunds",
          content: "All subscription fees paid to RM Ads Maker are non-refundable. Please ensure you select the right plan before purchasing."
        },
        {
          title: "Account Management",
          content: "The Admin reserves the right to suspend or terminate accounts in case of any misuse or violation of these terms."
        },
        {
          title: "Intellectual Property",
          content: "All content, graphics, and intellectual property within this application belong solely to RM Ads Maker."
        },
        {
          title: "Policy Updates",
          content: "These terms may be updated or modified at any time without prior notice. Please check regularly."
        }
      ]
    },
    hi: {
      title: "नियम और शर्तें",
      intro: "RM Ads Maker में आपका स्वागत है। हमारी सेवाओं का उपयोग करने से पहले कृपया हमारे नियमों और शर्तों को ध्यान से पढ़ें।",
      sections: [
        {
          title: "एप्लिकेशन का उपयोग",
          content: "RM Ads Maker का उपयोग करके, आप एप्लिकेशन का दुरुपयोग न करने के लिए सहमत होते हैं। प्लेटफॉर्म के भीतर किसी भी अवैध या अनधिकृत गतिविधियों की अनुमति नहीं है।"
        },
        {
          title: "सब्सक्रिप्शन और रिफंड",
          content: "RM Ads Maker को भुगतान किए गए सभी सब्सक्रिप्शन शुल्क गैर-वापसी योग्य हैं। कृपया खरीदारी करने से पहले सुनिश्चित करें कि आप सही योजना चुनते हैं।"
        },
        {
          title: "खाता प्रबंधन",
          content: "किसी भी दुरुपयोग या इन शर्तों के उल्लंघन के मामले में एडमिन के पास खातों को निलंबित या समाप्त करने का अधिकार सुरक्षित है।"
        },
        {
          title: "बौद्धिक संपदा",
          content: "इस एप्लिकेशन के भीतर सभी सामग्री, ग्राफिक्स और बौद्धिक संपदा विशेष रूप से RM Ads Maker की है।"
        },
        {
          title: "नीति अपडेट",
          content: "इन शर्तों को बिना किसी पूर्व सूचना के किसी भी समय अपडेट या संशोधित किया जा सकता है। कृपया नियमित रूप से जाँच करें।"
        }
      ]
    }
  }
};

let currentLang = localStorage.getItem('lang') || 'en';
let currentTheme = localStorage.getItem('theme') || 'light';

function init() {
  const pageType = document.body.dataset.page; // 'privacy' or 'terms'
  applyTheme(currentTheme);
  applyLanguage(currentLang, pageType);
  
  // Theme Toggle Button
  const themeBtn = document.getElementById('theme-toggle');
  themeBtn.addEventListener('click', () => {
    currentTheme = currentTheme === 'light' ? 'dark' : 'light';
    applyTheme(currentTheme);
  });

  // Language Toggle Button
  const langBtn = document.getElementById('lang-toggle');
  langBtn.addEventListener('click', () => {
    currentLang = currentLang === 'en' ? 'hi' : 'en';
    applyLanguage(currentLang, pageType);
  });
}

function applyTheme(theme) {
  document.documentElement.setAttribute('data-theme', theme);
  localStorage.setItem('theme', theme);
  const themeBtn = document.getElementById('theme-toggle');
  const themeIcon = themeBtn.querySelector('i');
  
  if (theme === 'dark') {
    themeIcon.className = 'fas fa-sun';
    themeBtn.title = currentLang === 'en' ? 'Light Mode' : 'लाइट मोड';
  } else {
    themeIcon.className = 'fas fa-moon';
    themeBtn.title = currentLang === 'en' ? 'Dark Mode' : 'डार्क मोड';
  }
}

function applyLanguage(lang, pageType) {
  localStorage.setItem('lang', lang);
  const langBtn = document.getElementById('lang-toggle');
  
  const pageContent = content[pageType][lang];
  
  // Update Header Content
  document.title = `${pageContent.title} - RM Ads Maker`;
  document.querySelector('.hero h1').innerText = pageContent.title;
  document.querySelector('.hero p').innerText = pageContent.intro;
  
  // Update Main Sections
  const container = document.getElementById('content-container');
  container.innerHTML = '';
  
  pageContent.sections.forEach((section, index) => {
    const card = document.createElement('section');
    card.className = 'policy-card';
    card.style.animationDelay = `${index * 0.1}s`;
    
    card.innerHTML = `
      <h2><i class="fas ${getIcon(index, pageType)}"></i> ${section.title}</h2>
      <p>${section.content}</p>
    `;
    container.appendChild(card);
  });

  // Update Footer text if needed
  const footerA = document.querySelector('.footer-links a[href="index.html"]');
  const footerB = document.querySelector('.footer-links a[href="terms.html"]');
  
  if (footerA) footerA.innerText = lang === 'en' ? 'Privacy Policy' : 'गोपनीयता नीति';
  if (footerB) footerB.innerText = lang === 'en' ? 'Terms & Conditions' : 'नियम और शर्तें';

  // Re-update theme button text based on lang
  applyTheme(currentTheme);
}

function getIcon(index, pageType) {
  const privacyIcons = ['fa-user-secret', 'fa-share-alt', 'fa-shield-alt', 'fa-file-signature', 'fa-headset'];
  const termsIcons = ['fa-mobile-alt', 'fa-credit-card', 'fa-user-cog', 'fa-copyright', 'fa-sync-alt'];
  return pageType === 'privacy' ? privacyIcons[index] : termsIcons[index];
}

document.addEventListener('DOMContentLoaded', init);
