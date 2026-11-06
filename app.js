/**
 * Islamic Digital Wedding Card Engine - Mahek & Aman (v14.0)
 * Stitch UI Architecture & Event Handlers
 * 27 December 2026 • Govind Garden, Dighi, Pune
 */

document.addEventListener('DOMContentLoaded', () => {

  // 1. Dynamic Ambient Golden Motes Generator (Subtle Background Atmospheric Lighting)
  const dustContainer = document.getElementById('dustContainer');
  if (dustContainer && dustContainer.children.length === 0) {
    const totalParticles = 46;
    for (let i = 0; i < totalParticles; i++) {
      const mote = document.createElement('div');
      mote.className = 'dust-mote';

      // Margin-weighted distribution: along the left and right marble jali borders & breathing gaps
      let leftPercent;
      const randZone = Math.random();
      if (randZone < 0.42) {
        // Left margin (2% to 11%)
        leftPercent = 2 + Math.random() * 9;
      } else if (randZone < 0.84) {
        // Right margin (89% to 98%)
        leftPercent = 89 + Math.random() * 9;
      } else {
        // Central breathing gutters between cards (15% to 85%)
        leftPercent = 15 + Math.random() * 70;
      }

      mote.style.left = leftPercent.toFixed(1) + '%';
      mote.style.top = (Math.random() * 96 + 2).toFixed(1) + '%';

      // Delicate, tranquil float timing with negative delay for instant natural atmosphere
      const duration = 10 + Math.random() * 12;
      const delay = Math.random() * 15;
      mote.style.animationDuration = duration.toFixed(1) + 's';
      mote.style.animationDelay = '-' + delay.toFixed(1) + 's';

      // Delicate micro sizes (mostly 2.5px - 5.5px micro-motes, a few 6px - 9px soft bokeh)
      const size = Math.random() < 0.8 ? (2.5 + Math.random() * 3) : (6 + Math.random() * 3.5);
      mote.style.width = size.toFixed(1) + 'px';
      mote.style.height = size.toFixed(1) + 'px';

      dustContainer.appendChild(mote);
    }
  }

  // 2. Smooth Scroll Reveal (Intersection Observer — Stately, slow & premium reveal)
  const observerOptions = {
    threshold: 0.14,
    rootMargin: "0px 0px -50px 0px"
  };

  const revealObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('is-revealed');
        observer.unobserve(entry.target);
      }
    });
  }, observerOptions);

  document.querySelectorAll('.reveal-on-scroll').forEach(el => {
    const rect = el.getBoundingClientRect();
    if (rect.top < window.innerHeight && rect.bottom > 0) {
      el.classList.add('is-revealed');
    } else {
      revealObserver.observe(el);
    }
  });

  // 3. Live Countdown Timer to 27th Dec 2026, 11:30 AM IST (With Micro-Tick Transitions)
  let lastRecordedSec = null;
  function updateCountdown() {
    const weddingDate = new Date("2026-12-27T11:30:00+05:30").getTime();
    const now = new Date().getTime();
    const difference = weddingDate - now;

    if (difference > 0) {
      const days = Math.floor(difference / (1000 * 60 * 60 * 24));
      const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const mins = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
      const secs = Math.floor((difference % (1000 * 60)) / 1000);

      const daysEl = document.getElementById("daysCount");
      const hoursEl = document.getElementById("hoursCount");
      const minsEl = document.getElementById("minsCount");
      const secsEl = document.getElementById("secsCount");

      const formattedDays = String(days).padStart(2, '0');
      const formattedHours = String(hours).padStart(2, '0');
      const formattedMins = String(mins).padStart(2, '0');
      const formattedSecs = String(secs).padStart(2, '0');

      if (daysEl && daysEl.innerText !== formattedDays) daysEl.innerText = formattedDays;
      if (hoursEl && hoursEl.innerText !== formattedHours) hoursEl.innerText = formattedHours;
      if (minsEl && minsEl.innerText !== formattedMins) minsEl.innerText = formattedMins;
      if (secsEl && secsEl.innerText !== formattedSecs) {
        secsEl.innerText = formattedSecs;
        secsEl.classList.remove('tick-pulse');
        void secsEl.offsetWidth;
        secsEl.classList.add('tick-pulse');
      }
    }
  }
  setInterval(updateCountdown, 1000);
  updateCountdown();

  // 4. Ambient Sufi Tune Audio Controller
  const musicToggle = document.getElementById('musicToggle');
  const audio = document.getElementById('weddingAudio');

  if (musicToggle && audio) {
    const toggleLabel = musicToggle.querySelector('span');

    function syncUI(playing) {
      if (playing) {
        musicToggle.classList.add('playing');
        if (toggleLabel) toggleLabel.innerText = "PAUSE TUNE";
        musicToggle.style.borderColor = "#b8860b";
        musicToggle.style.boxShadow = "0 4px 18px rgba(184, 134, 11, 0.38)";
      } else {
        musicToggle.classList.remove('playing');
        if (toggleLabel) toggleLabel.innerText = "PLAY SUFI TUNE";
        musicToggle.style.borderColor = "rgba(184, 134, 11, 0.45)";
        musicToggle.style.boxShadow = "0 4px 18px rgba(184, 134, 11, 0.18)";
      }
    }

    musicToggle.addEventListener('click', (e) => {
      e.preventDefault();
      if (audio.paused) {
        audio.play().then(() => {
          syncUI(true);
        }).catch(err => {
          console.warn("Audio play prevented:", err);
        });
      } else {
        audio.pause();
        syncUI(false);
      }
    });

    audio.addEventListener('play', () => syncUI(true));
    audio.addEventListener('pause', () => syncUI(false));
    audio.addEventListener('ended', () => syncUI(false));

    musicToggle.addEventListener('keydown', (e) => {
      if (e.key === 'Enter' || e.key === ' ') {
        e.preventDefault();
        musicToggle.click();
      }
    });
  }

  // 5. Universal Guest Name Personalization (?to=...) & Jump Anchor (?jump=...)
  const urlParams = new URLSearchParams(window.location.search);
  const rawGuest = urlParams.get('to');
  if (rawGuest && rawGuest.trim() !== '') {
    const cleanGuest = rawGuest.replace(/[<>'"/]/g, '').trim();
    if (cleanGuest.length > 0) {
      const guestSlot = document.getElementById('guestNameSlot');
      const guestBlock = document.getElementById('dynamicGuestBlock');
      const inputGuest = document.getElementById('guestName');
      if (guestSlot) guestSlot.textContent = cleanGuest;
      if (guestBlock) guestBlock.classList.remove('hidden');
      if (inputGuest) inputGuest.value = cleanGuest;
    }
  }

  const jumpTarget = urlParams.get('jump');
  if (jumpTarget) {
    const targetEl = document.getElementById(jumpTarget);
    if (targetEl) {
      const headerOffset = 84;
      const elementPosition = targetEl.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
      window.scrollTo(0, offsetPosition);
      document.querySelectorAll('.reveal-on-scroll').forEach(el => {
        el.classList.add('is-revealed');
      });
      document.title = "Mahek & Aman — Royal Islamic Wedding Scroll";
    }
  }

  // 6. Smooth anchor scroll with dynamic header clearance offset
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      const targetId = this.getAttribute('href');
      if (targetId && targetId !== '#') {
        const targetEl = document.querySelector(targetId);
        if (targetEl) {
          e.preventDefault();
          // Leave 84px clearance below viewport top so element never collides with fixed audio pill
          const headerOffset = 84;
          const elementPosition = targetEl.getBoundingClientRect().top;
          const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
          window.scrollTo({
            top: offsetPosition,
            behavior: 'smooth'
          });
          if (history.pushState) {
            history.pushState(null, '', targetId);
          }
        }
      }
    });
  });

  // 7. Universal iCalendar (.ics) download attachment
  const icsBtn = document.getElementById('downloadIcsBtn');
  if (icsBtn) {
    icsBtn.addEventListener('click', downloadWeddingIcs);
  }

  // 8. Auto-scroll with offset on initial hash load
  if (window.location.hash) {
    const targetEl = document.querySelector(window.location.hash);
    if (targetEl) {
      const headerOffset = 84;
      const elementPosition = targetEl.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
      window.scrollTo(0, offsetPosition);
    }
  }

  // 9. Interactive Dignitary Blessing Feedback
  initDignitaryInteractions();

});

/**
 * Generates and triggers client-side download of a standardized RFC 5545 iCalendar (.ics)
 * file for seamless 1-click addition to Apple Calendar, Outlook, and universal calendar apps.
 * @returns {void}
 */
function downloadWeddingIcs() {
  const icsContent = [
    'BEGIN:VCALENDAR',
    'VERSION:2.0',
    'PRODID:-//Mahek & Aman Wedding//EN',
    'CALSCALE:GREGORIAN',
    'METHOD:PUBLISH',
    'BEGIN:VEVENT',
    'UID:mahek-aman-nikah-20261227@wedding.invitation',
    'DTSTAMP:20261227T000000Z',
    'DTSTART:20261227T060000Z',
    'DTEND:20261227T100000Z',
    'SUMMARY:Mahek & Aman - Royal Islamic Wedding Ceremony (Insha Allah Nikah)',
    'DESCRIPTION:Khan & Zarekari Wedding Ceremony.\\nInsha Allah Nikah at 11:30 AM followed by Lunch Reception.\\nVenue: Govind Garden, Opp. Gawli Farm, Bhosari-Alandi Road, Dighi, Pune.',
    'LOCATION:Govind Garden, Opp. Gawli Farm, Bhosari-Alandi Road, Dighi, Pune',
    'STATUS:CONFIRMED',
    'END:VEVENT',
    'END:VCALENDAR'
  ].join('\r\n');

  const blob = new Blob([icsContent], { type: 'text/calendar;charset=utf-8' });
  const url = window.URL.createObjectURL(blob);
  const tempLink = document.createElement('a');
  tempLink.href = url;
  tempLink.setAttribute('download', 'Mahek-Aman-Wedding-Nikah.ics');
  document.body.appendChild(tempLink);
  tempLink.click();
  document.body.removeChild(tempLink);
  window.URL.revokeObjectURL(url);
}

/**
 * Copies the complete venue postal address to the user's system clipboard.
 * Preserves accessibility across mobile and non-HTTPS web contexts using an execCommand fallback
 * so that wedding guests can seamlessly paste the location into third-party taxi/navigation apps.
 *
 * @returns {void}
 */
function copyVenueAddress() {
  const addressText = "Govind Garden, Opp. Gawli Farm, Bhosari-Alandi Road, Dighi, Pune - 411015";
  const btnLabel = document.getElementById('copyBtnLabel');
  const toast = document.getElementById('toastNotification');

  const showSuccessFeedback = () => {
    if (btnLabel) btnLabel.innerText = "COPIED TO CLIPBOARD!";
    if (toast) {
      toast.innerText = "Address copied to clipboard!";
      toast.style.opacity = '1';
    }
    setTimeout(() => {
      if (btnLabel) btnLabel.innerText = "COPY VENUE ADDRESS";
      if (toast) toast.style.opacity = '0';
    }, 2400);
  };

  if (navigator.clipboard && window.isSecureContext) {
    navigator.clipboard.writeText(addressText)
      .then(showSuccessFeedback)
      .catch(() => {
        fallbackCopyText(addressText, showSuccessFeedback);
      });
  } else {
    fallbackCopyText(addressText, showSuccessFeedback);
  }
}

/**
 * Fallback copy mechanism using a hidden textarea for legacy mobile browsers or insecure context hosts.
 *
 * @param {string} text - Text to copy into clipboard
 * @param {() => void} onSuccess - Callback invoked on successful copy execution
 */
function fallbackCopyText(text, onSuccess) {
  const textArea = document.createElement("textarea");
  textArea.value = text;
  textArea.style.position = "fixed";
  textArea.style.left = "-999999px";
  textArea.style.top = "-999999px";
  document.body.appendChild(textArea);
  textArea.focus();
  textArea.select();
  try {
    document.execCommand('copy');
    onSuccess();
  } catch (err) {
    const toast = document.getElementById('toastNotification');
    if (toast) {
      toast.innerText = "Address: Govind Garden, Dighi, Pune - 411015";
      toast.style.opacity = '1';
      setTimeout(() => { toast.style.opacity = '0'; }, 3000);
    }
  } finally {
    document.body.removeChild(textArea);
  }
}

// 8. Global Actions: Interactive Sunnah Dua Chip / Card Inserter
function appendDuaChip(btnOrText, maybeText) {
  const text = typeof maybeText === 'string' ? maybeText : btnOrText;
  const btn = typeof maybeText === 'string' ? btnOrText : null;
  const duaInput = document.getElementById('duaMessage');
  if (duaInput) {
    duaInput.value = text;
    duaInput.focus();
  }
  document.querySelectorAll('.rsvp-dua-card, .rsvp-dua-chip').forEach(b => b.classList.remove('is-active'));
  if (btn && btn.classList) {
    btn.classList.add('is-active');
  }
}
window.appendDuaChip = appendDuaChip;

// 9. Global Actions: WhatsApp RSVP Handler
/**
 * Assembles and dispatches the guest's wedding RSVP and blessing message to the host's WhatsApp.
 * Uses full URI component encoding to prevent URL truncation at ampersands, ensuring all details
 * (guest name, attendance status, guest count, and personalized dua) arrive intact on +91 9529712193.
 *
 * @param {Event} [e] - Form submission event to prevent default reload
 * @returns {void}
 */
function sendWhatsAppRSVP(e) {
  if (e && e.preventDefault) e.preventDefault();

  const nameEl = document.getElementById('guestName');
  const attendanceEl = document.getElementById('attendance');
  const countEl = document.getElementById('guestCount');
  const duaEl = document.getElementById('duaMessage');

  const rawName = (nameEl ? nameEl.value : '').trim();
  if (!rawName) {
    if (nameEl) {
      nameEl.focus();
      nameEl.scrollIntoView({ behavior: 'smooth', block: 'center' });
    }
    const toast = document.getElementById('toastNotification');
    if (toast) {
      toast.innerText = "Please enter your name before sending RSVP";
      toast.style.opacity = '1';
      setTimeout(() => { toast.style.opacity = '0'; }, 2500);
    }
    return;
  }

  const attendance = attendanceEl ? attendanceEl.value.trim() : 'Yes, with family (Insha Allah)';
  const count = countEl ? (countEl.value || '2').trim() : '2';

  let cleanDua = (duaEl ? duaEl.value : '').trim();
  if (cleanDua.startsWith('"') && cleanDua.endsWith('"') && cleanDua.length > 1) {
    cleanDua = cleanDua.slice(1, -1).trim();
  }
  const defaultDua = "Barakallahu lakuma wa baraka alaikuma wa jama'a bainakuma fee khair 🤲";
  const dua = cleanDua || defaultDua;

  const messageLines = [
    "*WEDDING RSVP & BLESSINGS*",
    "*Mahek & Aman's Wedding Ceremony*",
    "",
    "*Guest Details:*",
    `• *Name:* ${rawName}`,
    `• *Attendance:* ${attendance}`,
    `• *Total Guests:* ${count}`,
    "",
    "*Heartfelt Dua:*",
    `"${dua}"`,
    "",
    "— *Khan & Zarekari Families* · 27th Dec 2026"
  ];

  const fullText = messageLines.join('\n');
  const whatsappUrl = `https://wa.me/919529712193?text=${encodeURIComponent(fullText)}`;

  const toast = document.getElementById('toastNotification');
  if (toast) {
    toast.innerText = "Opening WhatsApp...";
    toast.style.opacity = '1';
    setTimeout(() => {
      toast.style.opacity = '0';
      setTimeout(() => {
        toast.innerText = "Venue Address Copied!";
      }, 350);
    }, 2500);
  }

  // Cross-browser reliable WhatsApp launch:
  // Dynamically clicked anchor tag avoids popup blockers in Brave, Chrome, and Safari
  const link = document.createElement('a');
  link.href = whatsappUrl;
  link.target = '_blank';
  link.rel = 'noopener noreferrer';
  document.body.appendChild(link);
  link.click();
  setTimeout(() => {
    if (document.body.contains(link)) document.body.removeChild(link);
  }, 100);
}
window.sendWhatsAppRSVP = sendWhatsAppRSVP;

/**
 * Filters the Esteemed Elders Honor Roll by selected city pavilion.
 * Provides instant interactive regional grouping for guests.
 *
 * @param {string} city - Target city key ('all', 'solapur', 'barshi', 'pune', 'mohol')
 * @param {HTMLElement} btn - The clicked filter tab button
 */
function filterEldersByCity(city, btn) {
  // Update active state across all tabs
  const allTabs = document.querySelectorAll('.city-filter-tab');
  allTabs.forEach(t => t.classList.remove('is-active'));
  if (btn) btn.classList.add('is-active');

  // Filter pavilions with a gentle fade-in effect
  const pavilions = document.querySelectorAll('.city-pavilion');
  pavilions.forEach(pavilion => {
    const targetCity = pavilion.getAttribute('data-city');
    if (city === 'all' || targetCity === city) {
      pavilion.style.display = 'block';
      pavilion.classList.remove('fade-in-roster');
      void pavilion.offsetWidth; // Force reflow for clean re-trigger
      pavilion.classList.add('fade-in-roster');
    } else {
      pavilion.style.display = 'none';
      pavilion.classList.remove('fade-in-roster');
    }
  });
}
window.filterEldersByCity = filterEldersByCity;

/**
 * Attaches interactive blessing feedback to Dignitary Plaques and Cartouches.
 * Emits a subtle celebratory dua toast when tapped by a wedding guest.
 *
 * @returns {void}
 */
function initDignitaryInteractions() {
  const cards = document.querySelectorAll('.shahi-dignitary-card, .shahi-mohol-cartouche');
  const toast = document.getElementById('toastNotification');
  if (!cards.length || !toast) return;

  cards.forEach(card => {
    card.addEventListener('click', () => {
      const nameEl = card.querySelector('.shahi-dignitary-name, .shahi-mohol-name-text');
      const nameText = nameEl ? nameEl.innerText.replace('✦', '').trim() : 'Esteemed Family Dignitary';
      toast.innerText = `✦ Duas & Blessings Recorded for ${nameText} ✦`;
      toast.style.opacity = '1';
      setTimeout(() => {
        toast.style.opacity = '0';
      }, 2600);
    });
  });
}
window.initDignitaryInteractions = initDignitaryInteractions;

// 11. Day-of-Event Floating Quick Dock Controller
/**
 * Smoothly scrolls the guest viewport to the RSVP and Blessings Section.
 *
 * @param {Event} [e] - Optional click event to prevent default hash jumping
 * @returns {void}
 */
function smoothScrollToRsvp(e) {
  if (e && e.preventDefault) e.preventDefault();
  const rsvpSec = document.getElementById('rsvpSection');
  if (rsvpSec) {
    rsvpSec.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }
}
window.smoothScrollToRsvp = smoothScrollToRsvp;

/**
 * Initializes the Day-of-Event Floating Quick Dock.
 * Ensures the dock remains persistently visible across all viewports
 * so guests have immediate access to Venue Map, RSVP, and Royal Share at any moment.
 *
 * @returns {void}
 */
function initQuickDock() {
  const quickDock = document.getElementById('quickDock');
  if (!quickDock) return;
  quickDock.classList.add('is-visible');
}
window.initQuickDock = initQuickDock;

// 12. Royal Share Modal & Social Previews Controller
/**
 * Opens the Royal Share modal presenting link copy, WhatsApp dispatch, and card downloads.
 *
 * @returns {void}
 */
function openShareModal() {
  const modal = document.getElementById('shareModal');
  if (modal) {
    modal.classList.add('is-open');
    document.body.style.overflow = 'hidden';
  }
}
window.openShareModal = openShareModal;

/**
 * Closes the Royal Share modal and restores body scrolling.
 *
 * @returns {void}
 */
function closeShareModal() {
  const modal = document.getElementById('shareModal');
  if (modal) {
    modal.classList.remove('is-open');
    document.body.style.overflow = '';
  }
}
window.closeShareModal = closeShareModal;

/**
 * Handles modal backdrop overlay clicks to dismiss the dialog gracefully.
 *
 * @param {MouseEvent} e - Mouse click event
 * @returns {void}
 */
function handleShareOverlayClick(e) {
  if (e.target && e.target.id === 'shareModal') {
    closeShareModal();
  }
}
window.handleShareOverlayClick = handleShareOverlayClick;

/**
 * Launches WhatsApp with pre-filled royal invitation message and live link.
 *
 * @returns {void}
 */
function shareViaWhatsApp() {
  const shareText = "Royal Islamic Wedding Invitation\nKhan & Zarekari Families cordially invite you to celebrate the Nikah Ceremony of Mahek & Aman on Sunday, 27th Dec 2026 at Govind Garden, Pune.\n\nView the royal wedding scroll:\nhttps://mahekweddingcard.vercel.app/";
  const url = `https://wa.me/?text=${encodeURIComponent(shareText)}`;
  window.open(url, '_blank', 'noopener,noreferrer');
}
window.shareViaWhatsApp = shareViaWhatsApp;

/**
 * Copies the primary wedding website URL to the user's system clipboard with feedback.
 *
 * @returns {Promise<void>}
 */
async function copyShareLink() {
  const shareUrl = "https://mahekweddingcard.vercel.app/";
  try {
    await navigator.clipboard.writeText(shareUrl);
    const btnText = document.getElementById('copyLinkBtnText');
    if (btnText) {
      const orig = btnText.innerText;
      btnText.innerText = "COPIED!";
      setTimeout(() => { btnText.innerText = orig; }, 2000);
    }
    const toast = document.getElementById('toastNotification');
    if (toast) {
      toast.innerText = "Invitation Link Copied!";
      toast.style.opacity = '1';
      setTimeout(() => { toast.style.opacity = '0'; }, 2200);
    }
  } catch (err) {
    prompt("Copy wedding invitation link:", shareUrl);
  }
}
window.copyShareLink = copyShareLink;

// Run initializers on DOM load
document.addEventListener('DOMContentLoaded', () => {
  initQuickDock();
});
