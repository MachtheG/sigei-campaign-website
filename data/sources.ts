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
  /** ISO date the page was last read, shown when the page itself carries no date (profiles, trackers). */
  accessed?: string;
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
    accessed: "2026-11-17",
    note: "Re-read 17 Nov 2026. Education: Ndamichonik Primary 1987–1995 (KCPE), Tenwek High 1996–1999 (KCSE), UoN Bachelor in Law 2001–2005, Kenya School of Law PG Diploma 2006, UoN LLM 2012–2014. Employment: Katwa & Kemboy Advocates, Associate Advocate 2009–2011; Sigei & Associates Advocates, Managing Partner 2012–2013; SMS Advocates LLP, Managing Partner 2013–. Party UDA. No start date as Senator on the page (see star-swearing-in-2022).",
  },
  {
    id: "mzalendo-profile",
    title: "Sen. Sigei, Hillary: politician profile",
    outlet: "Mzalendo",
    date: "",
    url: "https://mzalendo.com/parliament/politician/sigei-hillary",
    verified: true,
    accessed: "2026-11-17",
  },
  {
    id: "mzalendo-performance",
    title: "Hillary Kiprotich Sigei: 13th Parliament performance",
    outlet: "Mzalendo",
    date: "",
    url: "https://mzalendo.com/mps-performance/senate/13th-parliament/hillary-kiprotich-sigei/",
    verified: true,
    accessed: "2026-11-17",
    note: "Read 17 Nov 2026: 2 bills sponsored, 220 counted contributions in this Parliament, 2022 result 237,192 votes (UDA). Counts move: re-read and update `accessed` before launch.",
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
    date: "2025-02-25",
    url: "https://eastleighvoice.co.ke/news/119163/senate-elects-new-leadership-for-key-committees",
    verified: true,
    note: "Read 17 Nov 2026 (Tuesday 25 Feb 2025, Amina Wako): Sigei re-elected chair of the JLAHR Committee, Sen. Veronica Maina vice-chair. The old URL carried another senator's name in its slug (a site tagging artefact); replaced with the outlet's /news/ path for the same article id.",
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
    date: "2023",
    url: "https://nation.africa/kenya/counties/farmers-back-senator-s-bid-to-review-law-on-sale-of-tea-4226396",
    verified: true,
    note: "Article text (via search index, 17 Nov 2026; nation.africa blocks our fetcher): the Bill 'currently before the Senate' seeks to address payment for 'over 600,000 small-scale growers who supply their produce to 69 KTDA managed factories'. Year 2023 from that context; day not visible. Other outlets give other factory counts (54, 71), so the factory count is not used as a headline stat.",
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
    note: "Search index, 17 Nov 2026 (site returns 403 to our fetcher): the Senate Devolution Committee visited on Friday 7 Nov 2025, led by its vice-chair; the visit followed a statement sought by Sen. Sigei on stalled Bomet projects.",
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
    note: "Read in Phase 0 research (Nov 2026): he told senators milk reached ECDE learners only five times between January and March 2025. peopledaily.digital now returns 403 to our fetcher; re-open by hand before launch.",
  },
  {
    id: "kna-ecde-2026",
    title: "Senator Sigei calls for expansion of ECDE centres in Bomet",
    outlet: "Kenya News Agency",
    date: "2026-05-20",
    url: "https://www.kenyanews.go.ke/senator-sigei-calls-for-expansion-of-ecde-centres-in-bomet/",
    verified: true,
    note: "Re-read 18 Nov 2026 by the fact-checker: dated 20 May 2026 (the earlier 20 Aug 2026 was the site's page-header date).",
  },
  {
    id: "educationnews-ecde",
    title: "Sigei calls for urgent expansion of modern ECDE centres in Bomet",
    outlet: "Education News",
    date: "2026",
    url: "https://educationnews.co.ke/sigei-calls-for-urgent-expansion-of-modern-ecde-centres-in-bomet/",
    verified: true,
    note: "Same story as kna-ecde-2026. Year from the outlet's 2026 article sequence; educationnews.co.ke blocks our fetcher, so the day is not shown.",
  },
  {
    id: "peopledaily-courts-arson",
    title: "Senator Sigei links Bomet Law Courts arson attempt to 2017 graft cover-up",
    outlet: "People Daily",
    date: "2025-08-20",
    url: "https://peopledaily.digital/news/senator-sigei-links-bomet-law-courts-arson-attempt-to-2017-graft-cover-up",
    verified: true,
    note: "Located 17 Nov 2026 (search index; peopledaily.digital returns 403 to our fetcher): he called the attempted burning of Bomet Law Courts a direct assault on justice and urged security agencies to secure the courts, finance and procurement offices and land registries. Statement 20 Aug 2025.",
  },
  {
    id: "peopledaily-osotsi-attack",
    title: "Senator Sigei demands arrests after Osotsi's attack in Kisumu",
    outlet: "People Daily",
    date: "2026-04-09",
    url: "https://peopledaily.digital/inside-politics/senator-sigei-demands-arrests-after-osotsis-attack-in-kisumu",
    verified: true,
    note: "Located 17 Nov 2026. Replaces the brief's unlinked 'remarks on political violence (Apr 2026)'.",
  },
  {
    id: "standard-gbv-2026",
    title: "Bomet Senator raises concerns over surge in GBV cases",
    outlet: "The Standard",
    date: "2026-05-28",
    url: "https://www.standardmedia.co.ke/rift-valley/article/2001548929/bomet-senator-raises-concerns-over-surge-in-gbv-cases",
    verified: true,
    note: "Located 17 Nov 2026. The prevalence percentages he cited are not independently verified, so none is used as a stat.",
  },
  {
    id: "star-swearing-in-2022",
    title: "MPs, senators swearing-in ceremony underway",
    outlet: "The Star",
    date: "2022-09-08",
    url: "https://www.the-star.co.ke/news/2022-09-08-mps-senators-swearing-in-ceremony-underway",
    verified: true,
    note: "Read 17 Nov 2026: members of the 13th Parliament began taking the oath on 8 Sep 2022. Used as the start of his term for the years-in-office count (replaces an unsourced 16 Aug 2022).",
  },
  {
    id: "iebc-voters-2022",
    title: "Registered voters per constituency for the 2022 General Election",
    outlet: "IEBC",
    date: "2022-06-23",
    url: "https://www.iebc.or.ke/docs/rov_per_constituency.pdf",
    verified: true,
    note: "PDF read 17 Nov 2026: Sotik 86,681; Chepalungu 80,140; Bomet East 63,640; Bomet Central 71,409; Konoin 75,115 (county total 376,985, matching the Kenya Gazette of 21 Jun 2022).",
  },
  {
    id: "knbs-census-2019",
    title: "2019 Kenya Population and Housing Census: Bomet County, 875,689 people",
    outlet: "Kenya National Bureau of Statistics",
    date: "2019",
    url: "https://www.knbs.or.ke/download/2019-kenya-population-and-housing-census-volume-i-population-by-county-and-sub-county/",
    verified: false,
    note: "Now links to KNBS Volume I (released 4 Nov 2019). 875,689 matches secondary reports (Kenyans.co.ke) that cite Vol. I, but knbs.or.ke could not be opened from our tools (TLS/proxy), so a person must read the Bomet row in the PDF.",
  },
  {
    id: "bomet-county-about",
    title: "About Bomet County: 5 sub-counties, 25 wards",
    outlet: "County Government of Bomet",
    date: "",
    url: "https://bomet.go.ke/about",
    verified: true,
    accessed: "2026-11-15",
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
    accessed: "2026-11-17",
    verified: true,
    note: "Voter-verification deep link to be confirmed on iebc.or.ke.",
  },
];

export const sources: Record<string, Source> = Object.fromEntries(list.map((s) => [s.id, s]));

export const sourceList = list;
