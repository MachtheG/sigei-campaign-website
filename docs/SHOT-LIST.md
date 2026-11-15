# Shot list

Every photo slot on the site. Slots currently hold openly licensed stand-ins (see data/photo-credits.json); replace each with a campaign photo of the Senator. Drop the file at `public/images/senator/<category>/<id>.jpg` (hero in `hero/`), then run `npm run images`.
Only campaign-supplied or licensed photos. No press/news photos, no AI-generated images.
Send originals (not WhatsApp-compressed). Landscape shots: keep the senator in the central 60% so mobile crops work.

| Slot id            | Category  | Ratio | Minimum size   | Shot needed                                                       |
| ------------------ | --------- | ----- | -------------- | ----------------------------------------------------------------- |
| `hero-main`        | portraits | 3:2   | ≥ 2400 px wide | senator addressing farmers, landscape 16:9, ≥2400px wide          |
| `portrait-formal`  | portraits | 4:5   | 1600×2000      | formal studio or office portrait, 4:5 portrait, ≥1600px tall      |
| `portrait-casual`  | field     | 4:5   | 1600×2000      | relaxed outdoor portrait in Bomet, 4:5 portrait                   |
| `senate-floor`     | senate    | 3:2   | 2400×1600      | senator speaking on the Senate floor, landscape 3:2               |
| `senate-committee` | senate    | 3:2   | 2400×1600      | chairing the Justice, Legal Affairs & Human Rights Committee, 3:2 |
| `senate-bill`      | senate    | 4:3   | 2000×1500      | moving the Tea (Amendment) Bill, 4:3                              |
| `field-inspection` | field     | 3:2   | 2400×1600      | inspecting a county project on site, 3:2                          |
| `field-water`      | field     | 4:3   | 2000×1500      | at a water point or water project, 4:3                            |
| `field-school`     | field     | 3:2   | 2400×1600      | visiting an ECDE centre with learners, 3:2                        |
| `community-elders` | community | 4:5   | 1600×2000      | with elders, 4:5 portrait                                         |
| `community-youth`  | community | 3:2   | 2400×1600      | with young people, 3:2                                            |
| `community-women`  | community | 4:3   | 2000×1500      | with women's groups, 4:3                                          |
| `farmers-tea`      | farmers   | 3:2   | 2400×1600      | among tea bushes with growers, 3:2                                |
| `farmers-meeting`  | farmers   | 16:9  | 2400×1350      | public participation forum with growers, 16:9                     |
| `farmers-pluckers` | farmers   | 4:5   | 1600×2000      | with tea pluckers at a buying centre, 4:5 portrait                |
| `events-rally`     | events    | 16:9  | 2400×1350      | a public gathering in Bomet, 16:9                                 |
| `events-church`    | events    | 4:3   | 2000×1500      | community or church function, 4:3                                 |
| `events-launch`    | events    | 3:2   | 2400×1600      | project launch or handover, 3:2                                   |

For each photo please also supply: date, location, photographer/credit, and whether it is approved for press download.
(Generated from `data/photos.ts` by `npm run docs:shotlist`.)
