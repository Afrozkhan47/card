/**
 * Islamic Wedding Card Configuration - Mahek & Aman
 * Date: 27 December 2026 (17th Rajjab 1448 Hijri)
 * Venue: Govind Garden, Dighi, Pune
 * All spellings verified directly against physical invitation card.
 */

export interface ContactPerson {
  name: string;
  phone: string;
  role?: string;
}

export interface WeddingData {
  invitation: {
    bismillahArabic: string;
    bismillahEnglish: string;
    hadithArabic: string;
    hadithEnglish: string;
    quranVerse: {
      arabic: string;
      english: string;
      surah: string;
    };
    solicitation: string;
  };
  bride: {
    name: string;
    father: string;
    grandfather: string;
  };
  groom: {
    name: string;
    father: string;
    origin: string;
  };
  ceremony: {
    eventTitle: string;
    nikahDeclaration: string;
    gregorianDate: string;
    gregorianDateFormatted: string;
    hijriDate: string;
    time: string;
    targetTimestamp: string;
    reception: string;
  };
  venue: {
    title: string;
    name: string;
    landmark: string;
    road: string;
    city: string;
    fullAddress: string;
    mapsSearchQuery: string;
    googleMapsUrl: string;
  };
  hosts: {
    elders: string[];
    inviter: {
      name: string;
      address: string;
    };
    compliments: string[];
    complimentsSuffix: string;
  };
  contacts: ContactPerson[];
  businessAttribution: {
    firm: string;
    location: string;
    press: string;
  };
}

export const weddingData: WeddingData = {
  invitation: {
    bismillahArabic: "بِسْمِ اللَّهِ الرَّحْمَٰنِ الرَّحِيمِ",
    bismillahEnglish: 'In the name of "Allah" the most beneficent & merciful',
    hadithArabic: "النكاح من سنتي فمن رغب عن سنتي فليس مني",
    hadithEnglish: "Marriage is of my Sunnah",
    quranVerse: {
      arabic: "وَمِنْ آيَاتِهِ أَنْ خَلَقَ لَكُم مِّنْ أَنفُسِكُمْ أَزْوَاجًا لِّتَسْكُنُوا إِلَيْهَا وَجَعَلَ بَيْنَكُم مَّوَدَّةً وَرَحْمَةً",
      english: "And of His signs is that He created for you from yourselves mates that you may find tranquility in them; and He placed between you affection and mercy.",
      surah: "Surah Ar-Rum [30:21]",
    },
    solicitation: "Solicit your gracious present on the auspicious occasion of Wedding Ceremony of",
  },
  bride: {
    name: "Mahek",
    father: "Firoj Amir Khan",
    grandfather: "Late Haji Amir Abdul Khan",
  },
  groom: {
    name: "Aman",
    father: "Kadir Abbas Zarekari",
    origin: "Baramati",
  },
  ceremony: {
    eventTitle: "Wedding Ceremony",
    nikahDeclaration: "Insha Allah Nikah",
    gregorianDate: "27 | 12 | 26",
    gregorianDateFormatted: "Sunday, 27 December 2026",
    hijriDate: "17th Rajjab 1448 Hijri",
    time: "11:30 am",
    targetTimestamp: "2026-12-27T11:30:00+05:30",
    reception: "Lunch After Nikah",
  },
  venue: {
    title: "Nikah At",
    name: "Govind Garden",
    landmark: "Opp. Gawli Farm",
    road: "Bhosari-Alandi Road",
    city: "Dighi, Pune",
    fullAddress: "Govind Garden, Opp. Gawli Farm, Bhosari-Alandi Road, Dighi, Pune",
    mapsSearchQuery: "Govind Garden Bhosari Alandi Road Dighi Pune",
    googleMapsUrl: "https://www.google.com/maps/search/?api=1&query=Govind+Garden+Opp+Gawli+Farm+Bhosari+Alandi+Road+Dighi+Pune",
  },
  hosts: {
    elders: [
      "Mr. Haji Hamid Khan Abdul Khan Pathan, Mohol",
      "Mr. Yunus Khan Abdul Khan Pathan, Telecom Solapur.",
    ],
    inviter: {
      name: "Firoj Amir Khan",
      address: "Near Sai Hospital, Survey No. 74, Adarsh Nagar, Dighi, Pune-15.",
    },
    compliments: [
      "Haji Noor Ahmed Hussain Shaikh, Solapur",
      "Haji Ayyub Abdul Rahman Sayyed, Barshi",
      "Raof Hussain Shaikh (RK), Pune",
      "Rashid Hussain Shaikh, Pune",
      "Javed Akhtar Mahboob Saheb Sayyed, Solapur",
      "Shahnawaz Noor Ahmed Shaikh, Solapur",
      "Haji Sarfaraz Amir Khan, Pune",
      "Mohsin Ayyub Sayyed, Barshi",
      "Moin Ayyub Sayyed, Barshi",
      "Sohail Ayyub Sayyed, Barshi",
      "Noor Khan Hamid Khan Pathan, Mohol",
      "Abul Faiz Khan Yunus Khan Pathan, Solapur",
    ],
    complimentsSuffix: "All Relatives & Friends",
  },
  contacts: [
    { name: "Rahim Bhai Shaikh", phone: "8788148687" },
    { name: "Afroz Khan", phone: "9529712193" },
    { name: "Abdul Malik Khan", phone: "8999743026" },
  ],
  businessAttribution: {
    firm: "Skyline Pan Shop & Mobile Repairing, Dighi, Pune",
    location: "Dighi, Pune",
    press: "Amar Press, Solapur.",
  },
};
