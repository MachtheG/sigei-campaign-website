/**
 * Every source cited anywhere on the site. Stats, timeline events, news items and
 * commitments reference these by id; `scripts/check-sources.ts` fails CI if an id
 * is missing. `verified: false` means the page was NOT opened and read end-to-end
 * during research (search-result evidence only, or supplied by the campaign) and
 * must be re-checked before launch. An empty url renders as [[TO CONFIRM: link]].
 */
export type Source = {
  id: string;
  title: string;
  outlet: string;
  /** ISO date (YYYY, YYYY-MM or YYYY-MM-DD). Empty = date to confirm. */
  date: string;
  url: string;
  verified: boolean;
  note?: string;
};

const list: Source[] = [
  {
    id: "parliament-profile",
    title: "Sen. (Wakili) Hillary Kiprotich Sigei: member profile",
    outlet: "Parliament of Kenya",
    date: "",
    url: "https://www.parliament.go.ke/the-senate/sen-wakili-hillary-kiprotich-sigei-cbs-mp",
    verified: true,
    note: "Profile page read on 15 Nov 2026: lists Ndamichonik Primary (KCPE 1995), Tenwek High (KCSE 1999), University of Nairobi Bachelor in Law (2001–2005), a post-graduate law diploma, Katwa & Kemboy Advocates, and SMS Advocates LLP Managing Partner from 2013. The 16 Aug 2022 start date and LLM dates are from the campaign brief and not re-read there.",
  },
  {
    id: "mzalendo-profile",
    title: "Sen. Sigei, Hillary: politician profile",
    outlet: "Mzalendo",
    date: "",
    url: "https://mzalendo.com/parliament/politician/sigei-hillary",
    verified: true,
  },
  {
    id: "mzalendo-performance",
    title: "Hillary Kiprotich Sigei: 13th Parliament performance",
    outlet: "Mzalendo",
    date: "",
    url: "https://mzalendo.com/mps-performance/senate/13th-parliament/hillary-kiprotich-sigei/",
    verified: true,
    note: "Reports 220 counted contributions in this Parliament; the count moves, re-check at launch.",
  },
  {
    id: "standard-chair-2022",
    title:
      "Senator Sigei elected as Senate Justice, Legal Affairs and Human Rights Committee chairperson",
    outlet: "The Standard",
    date: "2022-10-21",
    url: "https://www.standardmedia.co.ke/politics/article/2001458672/senator-sigei-elected-as-senate-justice-legal-affairs-and-human-rights-committee-chairperson",
    verified: true,
  },
  {
    id: "eastleigh-chair-2025",
    title: "Senate elects new leadership for key committees",
    outlet: "Eastleigh Voice",
    date: "2025",
    url: "https://eastleighvoice.co.ke/julius%20murgor/119163/senate-elects-new-leadership-for-key-committees",
    verified: false,
    note: "Exact date of the 2025 re-election not confirmed.",
  },
  {
    id: "parliament-tea-bill",
    title: "The Tea (Amendment) Bill, 2023 (Senate Bills No. 1 of 2023)",
    outlet: "Parliament of Kenya",
    date: "2024-10-08",
    url: "https://parliament.go.ke/node/22891",
    verified: true,
  },
  {
    id: "mzalendo-tea-bill",
    title: "The Tea (Amendment) Bill, 2023: bill tracker",
    outlet: "Mzalendo",
    date: "2024-10-08",
    url: "https://mzalendo.com/legislative-trends/bills/senate/420/",
    verified: true,
    note: "Tracker lists a Senate message on 7 Nov 2024, which differs from the 8 Oct 2024 passage date on parliament.go.ke.",
  },
  {
    id: "nation-tea-bill",
    title: "Farmers back senator's bid to review law on sale of tea",
    outlet: "Nation",
    date: "",
    url: "https://nation.africa/kenya/counties/farmers-back-senator-s-bid-to-review-law-on-sale-of-tea-4226396",
    verified: false,
    note: "Publication date and the 600,000+ growers / 69 KTDA factories figures to be re-checked against the article text.",
  },
  {
    id: "star-tea-bonus-2025",
    title: "Bomet leaders demand action amid outrage over poor tea bonus",
    outlet: "The Star",
    date: "2025-09-30",
    url: "https://www.the-star.co.ke/news/2025-09-30-bomet-leaders-demand-action-amid-outrage-over-poor-tea-bonus",
    verified: true,
  },
  {
    id: "peopledaily-stalled-projects",
    title: "Senators put Bomet governor on the spot over multi-million stalled projects",
    outlet: "People Daily",
    date: "2025-11",
    url: "https://peopledaily.digital/news/senators-put-bomet-governor-on-the-spot-over-multi-million-stalled-projects",
    verified: true,
  },
  {
    id: "standard-stalled-projects",
    title: "Senate committee concerned with stalled projects in Bomet",
    outlet: "The Standard",
    date: "2025-11-11",
    url: "https://www.standardmedia.co.ke/counties/article/2001533948/senate-committee-concerned-with-stalled-projects-in-bomet",
    verified: true,
  },
  {
    id: "peopledaily-audit",
    title: "Bomet County faces Senate scrutiny over audit failures and stalled projects",
    outlet: "People Daily",
    date: "2026-01",
    url: "https://peopledaily.digital/news/bomet-county-faces-senate-scrutiny-over-audit-failures-and-stalled-projects",
    verified: true,
  },
  {
    id: "peopledaily-bomwasco",
    title: "Senators put Governor Barchok on the spot over Bomet water firm crisis",
    outlet: "People Daily",
    date: "2026-01-29",
    url: "https://peopledaily.digital/news/senators-put-governor-barchok-on-the-spot-over-bomet-water-firm-crisis",
    verified: true,
    note: "BOMWASCO figures differ between outlets (e.g. KNA vs People Daily); no figure from this story is used as a headline stat until reconciled.",
  },
  {
    id: "peopledaily-ecde-milk",
    title: "Senators question Governor Barchok's spending priorities",
    outlet: "People Daily",
    date: "2025-04-08",
    url: "https://peopledaily.digital/news/senators-question-governor-barchoks-spending-priorities",
    verified: true,
  },
  {
    id: "kna-ecde-2026",
    title: "Senator Sigei calls for expansion of ECDE centres in Bomet",
    outlet: "Kenya News Agency",
    date: "2026-08-20",
    url: "https://www.kenyanews.go.ke/senator-sigei-calls-for-expansion-of-ecde-centres-in-bomet/",
    verified: true,
  },
  {
    id: "educationnews-ecde",
    title: "Sigei calls for urgent expansion of modern ECDE centres in Bomet",
    outlet: "Education News",
    date: "",
    url: "https://educationnews.co.ke/sigei-calls-for-urgent-expansion-of-modern-ecde-centres-in-bomet/",
    verified: true,
  },
  {
    id: "unverified-courts-arson",
    title: "Bomet Law Courts arson attempt (Aug 2025): Senator's remarks",
    outlet: "The Standard",
    date: "2025-08",
    url: "",
    verified: false,
    note: "From the campaign brief; article link to be located.",
  },
  {
    id: "unverified-political-violence",
    title: "Senator's remarks on political violence (Apr 2026)",
    outlet: "People Daily",
    date: "2026-04",
    url: "",
    verified: false,
    note: "From the campaign brief; article link to be located.",
  },
  {
    id: "unverified-gbv-arrears",
    title: "Senator's remarks on GBV in Bomet and county staff salary arrears",
    outlet: "The Standard / Education News",
    date: "",
    url: "",
    verified: false,
    note: "From the campaign brief; article links and dates to be located.",
  },
  {
    id: "knbs-census-2019",
    title: "2019 Kenya Population and Housing Census: Bomet County, 875,689 people",
    outlet: "Kenya National Bureau of Statistics",
    date: "2019",
    url: "https://www.kenyans.co.ke/news/50010-census-2019-all-details-released-knbs",
    verified: false,
    note: "Figure confirmed via secondary reporting; link directly to KNBS Census Vol. I before launch.",
  },
  {
    id: "bomet-county-about",
    title: "About Bomet County: 5 sub-counties, 25 wards",
    outlet: "County Government of Bomet",
    date: "",
    url: "https://bomet.go.ke/about",
    verified: true,
  },
  {
    id: "iebc-date-notice",
    title: "IEBC officially publishes notice for 2027 General Election (10 Aug 2027)",
    outlet: "Capital FM",
    date: "2026-09-14",
    url: "https://capitalfm.africa/iebc-officially-publishes-notice-for-2027-general-election/",
    verified: true,
    note: "Also reported by The Standard, People Daily, The Star and Kenyans.co.ke. Confirm on iebc.or.ke. A High Court (Malindi) ruling on the election year is reported; IEBC says 10 Aug 2027 stands.",
  },
  {
    id: "iebc-campaign-period",
    title: "IEBC sets key dates ahead of 2027 General Election (campaigns 29 May – 7 Aug 2027)",
    outlet: "Kenyans.co.ke",
    date: "2026",
    url: "https://www.kenyans.co.ke/news/126377-iebc-sets-key-dates-ahead-2027-general-election",
    verified: true,
  },
  {
    id: "iebc",
    title: "Independent Electoral and Boundaries Commission",
    outlet: "IEBC",
    date: "",
    url: "https://www.iebc.or.ke",
    verified: false,
    note: "Voter-verification deep link to be confirmed on iebc.or.ke.",
  },
];

export const sources: Record<string, Source> = Object.fromEntries(list.map((s) => [s.id, s]));

export const sourceList = list;
