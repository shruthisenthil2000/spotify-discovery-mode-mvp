// AUTO-GENERATED from data/Artist_Song_Recommendations.xlsx (sheet: "Song Recommendations").
// Regenerate with: python3 scripts/convert_recommendations.py
// Do NOT hand-edit this file, and do NOT parse the .xlsx file at runtime —
// this static array is the single source of truth for genre-matched
// recommendations used by the Genre Mix Discover page. 200 rows
// imported from the spreadsheet.

export interface RecommendedSong {
  title: string;
  artist: string;
}

export interface ArtistSongRecommendationRow {
  artist: string;
  genre: string;
  song: string;
  /** Exactly five same-genre recommendations, in spreadsheet column order. */
  recommendations: RecommendedSong[];
}

export const ARTIST_SONG_RECOMMENDATIONS: ArtistSongRecommendationRow[] = [
  {
    "artist": "Lana Del Rey",
    "genre": "Dream Pop / Indie Pop",
    "song": "Video Games",
    "recommendations": [
      {
        "title": "Space Song",
        "artist": "Beach House"
      },
      {
        "title": "Apocalypse",
        "artist": "Cigarettes After Sex"
      },
      {
        "title": "Fade Into You",
        "artist": "Mazzy Star"
      },
      {
        "title": "Heaven or Las Vegas",
        "artist": "Cocteau Twins"
      },
      {
        "title": "Shut Up Kiss Me",
        "artist": "Angel Olsen"
      }
    ]
  },
  {
    "artist": "Lana Del Rey",
    "genre": "Dream Pop / Indie Pop",
    "song": "Born to Die",
    "recommendations": [
      {
        "title": "Apocalypse",
        "artist": "Cigarettes After Sex"
      },
      {
        "title": "Fade Into You",
        "artist": "Mazzy Star"
      },
      {
        "title": "Heaven or Las Vegas",
        "artist": "Cocteau Twins"
      },
      {
        "title": "Shut Up Kiss Me",
        "artist": "Angel Olsen"
      },
      {
        "title": "My Silver Lining",
        "artist": "First Aid Kit"
      }
    ]
  },
  {
    "artist": "Lana Del Rey",
    "genre": "Dream Pop / Indie Pop",
    "song": "Summertime Sadness",
    "recommendations": [
      {
        "title": "Fade Into You",
        "artist": "Mazzy Star"
      },
      {
        "title": "Heaven or Las Vegas",
        "artist": "Cocteau Twins"
      },
      {
        "title": "Shut Up Kiss Me",
        "artist": "Angel Olsen"
      },
      {
        "title": "My Silver Lining",
        "artist": "First Aid Kit"
      },
      {
        "title": "Hush",
        "artist": "The Marias"
      }
    ]
  },
  {
    "artist": "Lana Del Rey",
    "genre": "Dream Pop / Indie Pop",
    "song": "Young and Beautiful",
    "recommendations": [
      {
        "title": "Heaven or Las Vegas",
        "artist": "Cocteau Twins"
      },
      {
        "title": "Shut Up Kiss Me",
        "artist": "Angel Olsen"
      },
      {
        "title": "My Silver Lining",
        "artist": "First Aid Kit"
      },
      {
        "title": "Hush",
        "artist": "The Marias"
      },
      {
        "title": "Andromeda",
        "artist": "Weyes Blood"
      }
    ]
  },
  {
    "artist": "Lana Del Rey",
    "genre": "Dream Pop / Indie Pop",
    "song": "West Coast",
    "recommendations": [
      {
        "title": "Shut Up Kiss Me",
        "artist": "Angel Olsen"
      },
      {
        "title": "My Silver Lining",
        "artist": "First Aid Kit"
      },
      {
        "title": "Hush",
        "artist": "The Marias"
      },
      {
        "title": "Andromeda",
        "artist": "Weyes Blood"
      },
      {
        "title": "Everything Is Embarrassing",
        "artist": "Sky Ferreira"
      }
    ]
  },
  {
    "artist": "Lana Del Rey",
    "genre": "Dream Pop / Indie Pop",
    "song": "Blue Jeans",
    "recommendations": [
      {
        "title": "My Silver Lining",
        "artist": "First Aid Kit"
      },
      {
        "title": "Hush",
        "artist": "The Marias"
      },
      {
        "title": "Andromeda",
        "artist": "Weyes Blood"
      },
      {
        "title": "Everything Is Embarrassing",
        "artist": "Sky Ferreira"
      },
      {
        "title": "Tick of the Clock",
        "artist": "Chromatics"
      }
    ]
  },
  {
    "artist": "Lana Del Rey",
    "genre": "Dream Pop / Indie Pop",
    "song": "Ride",
    "recommendations": [
      {
        "title": "Hush",
        "artist": "The Marias"
      },
      {
        "title": "Andromeda",
        "artist": "Weyes Blood"
      },
      {
        "title": "Everything Is Embarrassing",
        "artist": "Sky Ferreira"
      },
      {
        "title": "Tick of the Clock",
        "artist": "Chromatics"
      },
      {
        "title": "Space Song",
        "artist": "Beach House"
      }
    ]
  },
  {
    "artist": "Lana Del Rey",
    "genre": "Dream Pop / Indie Pop",
    "song": "Mariners Apartment Complex",
    "recommendations": [
      {
        "title": "Andromeda",
        "artist": "Weyes Blood"
      },
      {
        "title": "Everything Is Embarrassing",
        "artist": "Sky Ferreira"
      },
      {
        "title": "Tick of the Clock",
        "artist": "Chromatics"
      },
      {
        "title": "Space Song",
        "artist": "Beach House"
      },
      {
        "title": "Apocalypse",
        "artist": "Cigarettes After Sex"
      }
    ]
  },
  {
    "artist": "Lana Del Rey",
    "genre": "Dream Pop / Indie Pop",
    "song": "Brooklyn Baby",
    "recommendations": [
      {
        "title": "Everything Is Embarrassing",
        "artist": "Sky Ferreira"
      },
      {
        "title": "Tick of the Clock",
        "artist": "Chromatics"
      },
      {
        "title": "Space Song",
        "artist": "Beach House"
      },
      {
        "title": "Apocalypse",
        "artist": "Cigarettes After Sex"
      },
      {
        "title": "Fade Into You",
        "artist": "Mazzy Star"
      }
    ]
  },
  {
    "artist": "Lana Del Rey",
    "genre": "Dream Pop / Indie Pop",
    "song": "Doin' Time",
    "recommendations": [
      {
        "title": "Tick of the Clock",
        "artist": "Chromatics"
      },
      {
        "title": "Space Song",
        "artist": "Beach House"
      },
      {
        "title": "Apocalypse",
        "artist": "Cigarettes After Sex"
      },
      {
        "title": "Fade Into You",
        "artist": "Mazzy Star"
      },
      {
        "title": "Heaven or Las Vegas",
        "artist": "Cocteau Twins"
      }
    ]
  },
  {
    "artist": "Martin Garrix",
    "genre": "Progressive House / EDM",
    "song": "Animals",
    "recommendations": [
      {
        "title": "Adagio for Strings",
        "artist": "Tiesto"
      },
      {
        "title": "Heroes (We Could Be)",
        "artist": "Alesso"
      },
      {
        "title": "Ten Feet Tall",
        "artist": "Afrojack"
      },
      {
        "title": "Spaceman",
        "artist": "Hardwell"
      },
      {
        "title": "Levels",
        "artist": "Avicii"
      }
    ]
  },
  {
    "artist": "Martin Garrix",
    "genre": "Progressive House / EDM",
    "song": "In the Name of Love",
    "recommendations": [
      {
        "title": "Heroes (We Could Be)",
        "artist": "Alesso"
      },
      {
        "title": "Ten Feet Tall",
        "artist": "Afrojack"
      },
      {
        "title": "Spaceman",
        "artist": "Hardwell"
      },
      {
        "title": "Levels",
        "artist": "Avicii"
      },
      {
        "title": "Clarity",
        "artist": "Zedd"
      }
    ]
  },
  {
    "artist": "Martin Garrix",
    "genre": "Progressive House / EDM",
    "song": "Scared to Be Lonely",
    "recommendations": [
      {
        "title": "Ten Feet Tall",
        "artist": "Afrojack"
      },
      {
        "title": "Spaceman",
        "artist": "Hardwell"
      },
      {
        "title": "Levels",
        "artist": "Avicii"
      },
      {
        "title": "Clarity",
        "artist": "Zedd"
      },
      {
        "title": "Titanium",
        "artist": "David Guetta"
      }
    ]
  },
  {
    "artist": "Martin Garrix",
    "genre": "Progressive House / EDM",
    "song": "There For You",
    "recommendations": [
      {
        "title": "Spaceman",
        "artist": "Hardwell"
      },
      {
        "title": "Levels",
        "artist": "Avicii"
      },
      {
        "title": "Clarity",
        "artist": "Zedd"
      },
      {
        "title": "Titanium",
        "artist": "David Guetta"
      },
      {
        "title": "Toulouse",
        "artist": "Nicky Romero"
      }
    ]
  },
  {
    "artist": "Martin Garrix",
    "genre": "Progressive House / EDM",
    "song": "Wizard",
    "recommendations": [
      {
        "title": "Levels",
        "artist": "Avicii"
      },
      {
        "title": "Clarity",
        "artist": "Zedd"
      },
      {
        "title": "Titanium",
        "artist": "David Guetta"
      },
      {
        "title": "Toulouse",
        "artist": "Nicky Romero"
      },
      {
        "title": "Firestone",
        "artist": "Kygo"
      }
    ]
  },
  {
    "artist": "Martin Garrix",
    "genre": "Progressive House / EDM",
    "song": "High on Life",
    "recommendations": [
      {
        "title": "Clarity",
        "artist": "Zedd"
      },
      {
        "title": "Titanium",
        "artist": "David Guetta"
      },
      {
        "title": "Toulouse",
        "artist": "Nicky Romero"
      },
      {
        "title": "Firestone",
        "artist": "Kygo"
      },
      {
        "title": "Bigfoot",
        "artist": "W&W"
      }
    ]
  },
  {
    "artist": "Martin Garrix",
    "genre": "Progressive House / EDM",
    "song": "Forbidden Voices",
    "recommendations": [
      {
        "title": "Titanium",
        "artist": "David Guetta"
      },
      {
        "title": "Toulouse",
        "artist": "Nicky Romero"
      },
      {
        "title": "Firestone",
        "artist": "Kygo"
      },
      {
        "title": "Bigfoot",
        "artist": "W&W"
      },
      {
        "title": "Adagio for Strings",
        "artist": "Tiesto"
      }
    ]
  },
  {
    "artist": "Martin Garrix",
    "genre": "Progressive House / EDM",
    "song": "So Far Away",
    "recommendations": [
      {
        "title": "Toulouse",
        "artist": "Nicky Romero"
      },
      {
        "title": "Firestone",
        "artist": "Kygo"
      },
      {
        "title": "Bigfoot",
        "artist": "W&W"
      },
      {
        "title": "Adagio for Strings",
        "artist": "Tiesto"
      },
      {
        "title": "Heroes (We Could Be)",
        "artist": "Alesso"
      }
    ]
  },
  {
    "artist": "Martin Garrix",
    "genre": "Progressive House / EDM",
    "song": "Ocean",
    "recommendations": [
      {
        "title": "Firestone",
        "artist": "Kygo"
      },
      {
        "title": "Bigfoot",
        "artist": "W&W"
      },
      {
        "title": "Adagio for Strings",
        "artist": "Tiesto"
      },
      {
        "title": "Heroes (We Could Be)",
        "artist": "Alesso"
      },
      {
        "title": "Ten Feet Tall",
        "artist": "Afrojack"
      }
    ]
  },
  {
    "artist": "Martin Garrix",
    "genre": "Progressive House / EDM",
    "song": "Summer Days",
    "recommendations": [
      {
        "title": "Bigfoot",
        "artist": "W&W"
      },
      {
        "title": "Adagio for Strings",
        "artist": "Tiesto"
      },
      {
        "title": "Heroes (We Could Be)",
        "artist": "Alesso"
      },
      {
        "title": "Ten Feet Tall",
        "artist": "Afrojack"
      },
      {
        "title": "Spaceman",
        "artist": "Hardwell"
      }
    ]
  },
  {
    "artist": "Zayn",
    "genre": "Alternative R&B",
    "song": "Pillowtalk",
    "recommendations": [
      {
        "title": "Wicked Games",
        "artist": "The Weeknd"
      },
      {
        "title": "Thinkin Bout You",
        "artist": "Frank Ocean"
      },
      {
        "title": "Don't",
        "artist": "Bryson Tiller"
      },
      {
        "title": "Recognize",
        "artist": "PARTYNEXTDOOR"
      },
      {
        "title": "Location",
        "artist": "Khalid"
      }
    ]
  },
  {
    "artist": "Zayn",
    "genre": "Alternative R&B",
    "song": "Dusk Till Dawn",
    "recommendations": [
      {
        "title": "Thinkin Bout You",
        "artist": "Frank Ocean"
      },
      {
        "title": "Don't",
        "artist": "Bryson Tiller"
      },
      {
        "title": "Recognize",
        "artist": "PARTYNEXTDOOR"
      },
      {
        "title": "Location",
        "artist": "Khalid"
      },
      {
        "title": "PRBLMS",
        "artist": "6LACK"
      }
    ]
  },
  {
    "artist": "Zayn",
    "genre": "Alternative R&B",
    "song": "Let Me",
    "recommendations": [
      {
        "title": "Don't",
        "artist": "Bryson Tiller"
      },
      {
        "title": "Recognize",
        "artist": "PARTYNEXTDOOR"
      },
      {
        "title": "Location",
        "artist": "Khalid"
      },
      {
        "title": "PRBLMS",
        "artist": "6LACK"
      },
      {
        "title": "Oui",
        "artist": "Jeremih"
      }
    ]
  },
  {
    "artist": "Zayn",
    "genre": "Alternative R&B",
    "song": "Vibez",
    "recommendations": [
      {
        "title": "Recognize",
        "artist": "PARTYNEXTDOOR"
      },
      {
        "title": "Location",
        "artist": "Khalid"
      },
      {
        "title": "PRBLMS",
        "artist": "6LACK"
      },
      {
        "title": "Oui",
        "artist": "Jeremih"
      },
      {
        "title": "Too Deep",
        "artist": "dvsn"
      }
    ]
  },
  {
    "artist": "Zayn",
    "genre": "Alternative R&B",
    "song": "Tightrope",
    "recommendations": [
      {
        "title": "Location",
        "artist": "Khalid"
      },
      {
        "title": "PRBLMS",
        "artist": "6LACK"
      },
      {
        "title": "Oui",
        "artist": "Jeremih"
      },
      {
        "title": "Too Deep",
        "artist": "dvsn"
      },
      {
        "title": "Adorn",
        "artist": "Miguel"
      }
    ]
  },
  {
    "artist": "Zayn",
    "genre": "Alternative R&B",
    "song": "Better",
    "recommendations": [
      {
        "title": "PRBLMS",
        "artist": "6LACK"
      },
      {
        "title": "Oui",
        "artist": "Jeremih"
      },
      {
        "title": "Too Deep",
        "artist": "dvsn"
      },
      {
        "title": "Adorn",
        "artist": "Miguel"
      },
      {
        "title": "Best Part",
        "artist": "Daniel Caesar"
      }
    ]
  },
  {
    "artist": "Zayn",
    "genre": "Alternative R&B",
    "song": "Sour Diesel",
    "recommendations": [
      {
        "title": "Oui",
        "artist": "Jeremih"
      },
      {
        "title": "Too Deep",
        "artist": "dvsn"
      },
      {
        "title": "Adorn",
        "artist": "Miguel"
      },
      {
        "title": "Best Part",
        "artist": "Daniel Caesar"
      },
      {
        "title": "Wicked Games",
        "artist": "The Weeknd"
      }
    ]
  },
  {
    "artist": "Zayn",
    "genre": "Alternative R&B",
    "song": "Fingers",
    "recommendations": [
      {
        "title": "Too Deep",
        "artist": "dvsn"
      },
      {
        "title": "Adorn",
        "artist": "Miguel"
      },
      {
        "title": "Best Part",
        "artist": "Daniel Caesar"
      },
      {
        "title": "Wicked Games",
        "artist": "The Weeknd"
      },
      {
        "title": "Thinkin Bout You",
        "artist": "Frank Ocean"
      }
    ]
  },
  {
    "artist": "Zayn",
    "genre": "Alternative R&B",
    "song": "iT's YoU",
    "recommendations": [
      {
        "title": "Adorn",
        "artist": "Miguel"
      },
      {
        "title": "Best Part",
        "artist": "Daniel Caesar"
      },
      {
        "title": "Wicked Games",
        "artist": "The Weeknd"
      },
      {
        "title": "Thinkin Bout You",
        "artist": "Frank Ocean"
      },
      {
        "title": "Don't",
        "artist": "Bryson Tiller"
      }
    ]
  },
  {
    "artist": "Zayn",
    "genre": "Alternative R&B",
    "song": "Entertainer",
    "recommendations": [
      {
        "title": "Best Part",
        "artist": "Daniel Caesar"
      },
      {
        "title": "Wicked Games",
        "artist": "The Weeknd"
      },
      {
        "title": "Thinkin Bout You",
        "artist": "Frank Ocean"
      },
      {
        "title": "Don't",
        "artist": "Bryson Tiller"
      },
      {
        "title": "Recognize",
        "artist": "PARTYNEXTDOOR"
      }
    ]
  },
  {
    "artist": "Billie Eilish",
    "genre": "Alt Pop",
    "song": "Bad Guy",
    "recommendations": [
      {
        "title": "Green Light",
        "artist": "Lorde"
      },
      {
        "title": "Without Me",
        "artist": "Halsey"
      },
      {
        "title": "Pity Party",
        "artist": "Melanie Martinez"
      },
      {
        "title": "Pretty Girl",
        "artist": "Clairo"
      },
      {
        "title": "We Fell in Love in October",
        "artist": "Girl in Red"
      }
    ]
  },
  {
    "artist": "Billie Eilish",
    "genre": "Alt Pop",
    "song": "Ocean Eyes",
    "recommendations": [
      {
        "title": "Without Me",
        "artist": "Halsey"
      },
      {
        "title": "Pity Party",
        "artist": "Melanie Martinez"
      },
      {
        "title": "Pretty Girl",
        "artist": "Clairo"
      },
      {
        "title": "We Fell in Love in October",
        "artist": "Girl in Red"
      },
      {
        "title": "Heather",
        "artist": "Conan Gray"
      }
    ]
  },
  {
    "artist": "Billie Eilish",
    "genre": "Alt Pop",
    "song": "Bury a Friend",
    "recommendations": [
      {
        "title": "Pity Party",
        "artist": "Melanie Martinez"
      },
      {
        "title": "Pretty Girl",
        "artist": "Clairo"
      },
      {
        "title": "We Fell in Love in October",
        "artist": "Girl in Red"
      },
      {
        "title": "Heather",
        "artist": "Conan Gray"
      },
      {
        "title": "I Miss You, I'm Sorry",
        "artist": "Gracie Abrams"
      }
    ]
  },
  {
    "artist": "Billie Eilish",
    "genre": "Alt Pop",
    "song": "When the Party's Over",
    "recommendations": [
      {
        "title": "Pretty Girl",
        "artist": "Clairo"
      },
      {
        "title": "We Fell in Love in October",
        "artist": "Girl in Red"
      },
      {
        "title": "Heather",
        "artist": "Conan Gray"
      },
      {
        "title": "I Miss You, I'm Sorry",
        "artist": "Gracie Abrams"
      },
      {
        "title": "Drivers License",
        "artist": "Olivia Rodrigo"
      }
    ]
  },
  {
    "artist": "Billie Eilish",
    "genre": "Alt Pop",
    "song": "Everything I Wanted",
    "recommendations": [
      {
        "title": "We Fell in Love in October",
        "artist": "Girl in Red"
      },
      {
        "title": "Heather",
        "artist": "Conan Gray"
      },
      {
        "title": "I Miss You, I'm Sorry",
        "artist": "Gracie Abrams"
      },
      {
        "title": "Drivers License",
        "artist": "Olivia Rodrigo"
      },
      {
        "title": "1950",
        "artist": "King Princess"
      }
    ]
  },
  {
    "artist": "Billie Eilish",
    "genre": "Alt Pop",
    "song": "Happier Than Ever",
    "recommendations": [
      {
        "title": "Heather",
        "artist": "Conan Gray"
      },
      {
        "title": "I Miss You, I'm Sorry",
        "artist": "Gracie Abrams"
      },
      {
        "title": "Drivers License",
        "artist": "Olivia Rodrigo"
      },
      {
        "title": "1950",
        "artist": "King Princess"
      },
      {
        "title": "Let's Fall in Love for the Night",
        "artist": "FINNEAS"
      }
    ]
  },
  {
    "artist": "Billie Eilish",
    "genre": "Alt Pop",
    "song": "Therefore I Am",
    "recommendations": [
      {
        "title": "I Miss You, I'm Sorry",
        "artist": "Gracie Abrams"
      },
      {
        "title": "Drivers License",
        "artist": "Olivia Rodrigo"
      },
      {
        "title": "1950",
        "artist": "King Princess"
      },
      {
        "title": "Let's Fall in Love for the Night",
        "artist": "FINNEAS"
      },
      {
        "title": "Green Light",
        "artist": "Lorde"
      }
    ]
  },
  {
    "artist": "Billie Eilish",
    "genre": "Alt Pop",
    "song": "Lovely",
    "recommendations": [
      {
        "title": "Drivers License",
        "artist": "Olivia Rodrigo"
      },
      {
        "title": "1950",
        "artist": "King Princess"
      },
      {
        "title": "Let's Fall in Love for the Night",
        "artist": "FINNEAS"
      },
      {
        "title": "Green Light",
        "artist": "Lorde"
      },
      {
        "title": "Without Me",
        "artist": "Halsey"
      }
    ]
  },
  {
    "artist": "Billie Eilish",
    "genre": "Alt Pop",
    "song": "You Should See Me in a Crown",
    "recommendations": [
      {
        "title": "1950",
        "artist": "King Princess"
      },
      {
        "title": "Let's Fall in Love for the Night",
        "artist": "FINNEAS"
      },
      {
        "title": "Green Light",
        "artist": "Lorde"
      },
      {
        "title": "Without Me",
        "artist": "Halsey"
      },
      {
        "title": "Pity Party",
        "artist": "Melanie Martinez"
      }
    ]
  },
  {
    "artist": "Billie Eilish",
    "genre": "Alt Pop",
    "song": "Ilomilo",
    "recommendations": [
      {
        "title": "Let's Fall in Love for the Night",
        "artist": "FINNEAS"
      },
      {
        "title": "Green Light",
        "artist": "Lorde"
      },
      {
        "title": "Without Me",
        "artist": "Halsey"
      },
      {
        "title": "Pity Party",
        "artist": "Melanie Martinez"
      },
      {
        "title": "Pretty Girl",
        "artist": "Clairo"
      }
    ]
  },
  {
    "artist": "The Weeknd",
    "genre": "R&B / Pop",
    "song": "Blinding Lights",
    "recommendations": [
      {
        "title": "Exchange",
        "artist": "Bryson Tiller"
      },
      {
        "title": "Pink + White",
        "artist": "Frank Ocean"
      },
      {
        "title": "Come and See Me",
        "artist": "PARTYNEXTDOOR"
      },
      {
        "title": "Nuh Time / Tek Time",
        "artist": "dvsn"
      },
      {
        "title": "PRBLMS",
        "artist": "6LACK"
      }
    ]
  },
  {
    "artist": "The Weeknd",
    "genre": "R&B / Pop",
    "song": "Starboy",
    "recommendations": [
      {
        "title": "Pink + White",
        "artist": "Frank Ocean"
      },
      {
        "title": "Come and See Me",
        "artist": "PARTYNEXTDOOR"
      },
      {
        "title": "Nuh Time / Tek Time",
        "artist": "dvsn"
      },
      {
        "title": "PRBLMS",
        "artist": "6LACK"
      },
      {
        "title": "Better",
        "artist": "Khalid"
      }
    ]
  },
  {
    "artist": "The Weeknd",
    "genre": "R&B / Pop",
    "song": "The Hills",
    "recommendations": [
      {
        "title": "Come and See Me",
        "artist": "PARTYNEXTDOOR"
      },
      {
        "title": "Nuh Time / Tek Time",
        "artist": "dvsn"
      },
      {
        "title": "PRBLMS",
        "artist": "6LACK"
      },
      {
        "title": "Better",
        "artist": "Khalid"
      },
      {
        "title": "Down on Me",
        "artist": "Jeremih"
      }
    ]
  },
  {
    "artist": "The Weeknd",
    "genre": "R&B / Pop",
    "song": "Can't Feel My Face",
    "recommendations": [
      {
        "title": "Nuh Time / Tek Time",
        "artist": "dvsn"
      },
      {
        "title": "PRBLMS",
        "artist": "6LACK"
      },
      {
        "title": "Better",
        "artist": "Khalid"
      },
      {
        "title": "Down on Me",
        "artist": "Jeremih"
      },
      {
        "title": "Sure Thing",
        "artist": "Miguel"
      }
    ]
  },
  {
    "artist": "The Weeknd",
    "genre": "R&B / Pop",
    "song": "Save Your Tears",
    "recommendations": [
      {
        "title": "PRBLMS",
        "artist": "6LACK"
      },
      {
        "title": "Better",
        "artist": "Khalid"
      },
      {
        "title": "Down on Me",
        "artist": "Jeremih"
      },
      {
        "title": "Sure Thing",
        "artist": "Miguel"
      },
      {
        "title": "Pillowtalk",
        "artist": "Zayn"
      }
    ]
  },
  {
    "artist": "The Weeknd",
    "genre": "R&B / Pop",
    "song": "Earned It",
    "recommendations": [
      {
        "title": "Better",
        "artist": "Khalid"
      },
      {
        "title": "Down on Me",
        "artist": "Jeremih"
      },
      {
        "title": "Sure Thing",
        "artist": "Miguel"
      },
      {
        "title": "Pillowtalk",
        "artist": "Zayn"
      },
      {
        "title": "Get You",
        "artist": "Daniel Caesar"
      }
    ]
  },
  {
    "artist": "The Weeknd",
    "genre": "R&B / Pop",
    "song": "Often",
    "recommendations": [
      {
        "title": "Down on Me",
        "artist": "Jeremih"
      },
      {
        "title": "Sure Thing",
        "artist": "Miguel"
      },
      {
        "title": "Pillowtalk",
        "artist": "Zayn"
      },
      {
        "title": "Get You",
        "artist": "Daniel Caesar"
      },
      {
        "title": "Exchange",
        "artist": "Bryson Tiller"
      }
    ]
  },
  {
    "artist": "The Weeknd",
    "genre": "R&B / Pop",
    "song": "Wicked Games",
    "recommendations": [
      {
        "title": "Sure Thing",
        "artist": "Miguel"
      },
      {
        "title": "Pillowtalk",
        "artist": "Zayn"
      },
      {
        "title": "Get You",
        "artist": "Daniel Caesar"
      },
      {
        "title": "Exchange",
        "artist": "Bryson Tiller"
      },
      {
        "title": "Pink + White",
        "artist": "Frank Ocean"
      }
    ]
  },
  {
    "artist": "The Weeknd",
    "genre": "R&B / Pop",
    "song": "I Feel It Coming",
    "recommendations": [
      {
        "title": "Pillowtalk",
        "artist": "Zayn"
      },
      {
        "title": "Get You",
        "artist": "Daniel Caesar"
      },
      {
        "title": "Exchange",
        "artist": "Bryson Tiller"
      },
      {
        "title": "Pink + White",
        "artist": "Frank Ocean"
      },
      {
        "title": "Come and See Me",
        "artist": "PARTYNEXTDOOR"
      }
    ]
  },
  {
    "artist": "The Weeknd",
    "genre": "R&B / Pop",
    "song": "Die For You",
    "recommendations": [
      {
        "title": "Get You",
        "artist": "Daniel Caesar"
      },
      {
        "title": "Exchange",
        "artist": "Bryson Tiller"
      },
      {
        "title": "Pink + White",
        "artist": "Frank Ocean"
      },
      {
        "title": "Come and See Me",
        "artist": "PARTYNEXTDOOR"
      },
      {
        "title": "Nuh Time / Tek Time",
        "artist": "dvsn"
      }
    ]
  },
  {
    "artist": "Calvin Harris",
    "genre": "EDM / Dance",
    "song": "Summer",
    "recommendations": [
      {
        "title": "Titanium",
        "artist": "David Guetta"
      },
      {
        "title": "Red Lights",
        "artist": "Tiesto"
      },
      {
        "title": "Wake Me Up",
        "artist": "Avicii"
      },
      {
        "title": "Stay the Night",
        "artist": "Zedd"
      },
      {
        "title": "Stole the Show",
        "artist": "Kygo"
      }
    ]
  },
  {
    "artist": "Calvin Harris",
    "genre": "EDM / Dance",
    "song": "Feel So Close",
    "recommendations": [
      {
        "title": "Red Lights",
        "artist": "Tiesto"
      },
      {
        "title": "Wake Me Up",
        "artist": "Avicii"
      },
      {
        "title": "Stay the Night",
        "artist": "Zedd"
      },
      {
        "title": "Stole the Show",
        "artist": "Kygo"
      },
      {
        "title": "Just Hold On",
        "artist": "Steve Aoki"
      }
    ]
  },
  {
    "artist": "Calvin Harris",
    "genre": "EDM / Dance",
    "song": "This Is What You Came For",
    "recommendations": [
      {
        "title": "Wake Me Up",
        "artist": "Avicii"
      },
      {
        "title": "Stay the Night",
        "artist": "Zedd"
      },
      {
        "title": "Stole the Show",
        "artist": "Kygo"
      },
      {
        "title": "Just Hold On",
        "artist": "Steve Aoki"
      },
      {
        "title": "Ten Feet Tall",
        "artist": "Afrojack"
      }
    ]
  },
  {
    "artist": "Calvin Harris",
    "genre": "EDM / Dance",
    "song": "One Kiss",
    "recommendations": [
      {
        "title": "Stay the Night",
        "artist": "Zedd"
      },
      {
        "title": "Stole the Show",
        "artist": "Kygo"
      },
      {
        "title": "Just Hold On",
        "artist": "Steve Aoki"
      },
      {
        "title": "Ten Feet Tall",
        "artist": "Afrojack"
      },
      {
        "title": "Revolution",
        "artist": "Diplo"
      }
    ]
  },
  {
    "artist": "Calvin Harris",
    "genre": "EDM / Dance",
    "song": "Outside",
    "recommendations": [
      {
        "title": "Stole the Show",
        "artist": "Kygo"
      },
      {
        "title": "Just Hold On",
        "artist": "Steve Aoki"
      },
      {
        "title": "Ten Feet Tall",
        "artist": "Afrojack"
      },
      {
        "title": "Revolution",
        "artist": "Diplo"
      },
      {
        "title": "Animals",
        "artist": "Martin Garrix"
      }
    ]
  },
  {
    "artist": "Calvin Harris",
    "genre": "EDM / Dance",
    "song": "We Found Love",
    "recommendations": [
      {
        "title": "Just Hold On",
        "artist": "Steve Aoki"
      },
      {
        "title": "Ten Feet Tall",
        "artist": "Afrojack"
      },
      {
        "title": "Revolution",
        "artist": "Diplo"
      },
      {
        "title": "Animals",
        "artist": "Martin Garrix"
      },
      {
        "title": "Under Control",
        "artist": "Alesso"
      }
    ]
  },
  {
    "artist": "Calvin Harris",
    "genre": "EDM / Dance",
    "song": "My Way",
    "recommendations": [
      {
        "title": "Ten Feet Tall",
        "artist": "Afrojack"
      },
      {
        "title": "Revolution",
        "artist": "Diplo"
      },
      {
        "title": "Animals",
        "artist": "Martin Garrix"
      },
      {
        "title": "Under Control",
        "artist": "Alesso"
      },
      {
        "title": "Titanium",
        "artist": "David Guetta"
      }
    ]
  },
  {
    "artist": "Calvin Harris",
    "genre": "EDM / Dance",
    "song": "Slide",
    "recommendations": [
      {
        "title": "Revolution",
        "artist": "Diplo"
      },
      {
        "title": "Animals",
        "artist": "Martin Garrix"
      },
      {
        "title": "Under Control",
        "artist": "Alesso"
      },
      {
        "title": "Titanium",
        "artist": "David Guetta"
      },
      {
        "title": "Red Lights",
        "artist": "Tiesto"
      }
    ]
  },
  {
    "artist": "Calvin Harris",
    "genre": "EDM / Dance",
    "song": "Blame",
    "recommendations": [
      {
        "title": "Animals",
        "artist": "Martin Garrix"
      },
      {
        "title": "Under Control",
        "artist": "Alesso"
      },
      {
        "title": "Titanium",
        "artist": "David Guetta"
      },
      {
        "title": "Red Lights",
        "artist": "Tiesto"
      },
      {
        "title": "Wake Me Up",
        "artist": "Avicii"
      }
    ]
  },
  {
    "artist": "Calvin Harris",
    "genre": "EDM / Dance",
    "song": "Miracle",
    "recommendations": [
      {
        "title": "Under Control",
        "artist": "Alesso"
      },
      {
        "title": "Titanium",
        "artist": "David Guetta"
      },
      {
        "title": "Red Lights",
        "artist": "Tiesto"
      },
      {
        "title": "Wake Me Up",
        "artist": "Avicii"
      },
      {
        "title": "Stay the Night",
        "artist": "Zedd"
      }
    ]
  },
  {
    "artist": "Ariana Grande",
    "genre": "Pop",
    "song": "7 Rings",
    "recommendations": [
      {
        "title": "New Rules",
        "artist": "Dua Lipa"
      },
      {
        "title": "Lose You to Love Me",
        "artist": "Selena Gomez"
      },
      {
        "title": "Havana",
        "artist": "Camila Cabello"
      },
      {
        "title": "Without Me",
        "artist": "Halsey"
      },
      {
        "title": "Meant to Be",
        "artist": "Bebe Rexha"
      }
    ]
  },
  {
    "artist": "Ariana Grande",
    "genre": "Pop",
    "song": "Thank U, Next",
    "recommendations": [
      {
        "title": "Lose You to Love Me",
        "artist": "Selena Gomez"
      },
      {
        "title": "Havana",
        "artist": "Camila Cabello"
      },
      {
        "title": "Without Me",
        "artist": "Halsey"
      },
      {
        "title": "Meant to Be",
        "artist": "Bebe Rexha"
      },
      {
        "title": "Sorry Not Sorry",
        "artist": "Demi Lovato"
      }
    ]
  },
  {
    "artist": "Ariana Grande",
    "genre": "Pop",
    "song": "Positions",
    "recommendations": [
      {
        "title": "Havana",
        "artist": "Camila Cabello"
      },
      {
        "title": "Without Me",
        "artist": "Halsey"
      },
      {
        "title": "Meant to Be",
        "artist": "Bebe Rexha"
      },
      {
        "title": "Sorry Not Sorry",
        "artist": "Demi Lovato"
      },
      {
        "title": "All About That Bass",
        "artist": "Meghan Trainor"
      }
    ]
  },
  {
    "artist": "Ariana Grande",
    "genre": "Pop",
    "song": "No Tears Left to Cry",
    "recommendations": [
      {
        "title": "Without Me",
        "artist": "Halsey"
      },
      {
        "title": "Meant to Be",
        "artist": "Bebe Rexha"
      },
      {
        "title": "Sorry Not Sorry",
        "artist": "Demi Lovato"
      },
      {
        "title": "All About That Bass",
        "artist": "Meghan Trainor"
      },
      {
        "title": "Boom Clap",
        "artist": "Charli XCX"
      }
    ]
  },
  {
    "artist": "Ariana Grande",
    "genre": "Pop",
    "song": "Into You",
    "recommendations": [
      {
        "title": "Meant to Be",
        "artist": "Bebe Rexha"
      },
      {
        "title": "Sorry Not Sorry",
        "artist": "Demi Lovato"
      },
      {
        "title": "All About That Bass",
        "artist": "Meghan Trainor"
      },
      {
        "title": "Boom Clap",
        "artist": "Charli XCX"
      },
      {
        "title": "Espresso",
        "artist": "Sabrina Carpenter"
      }
    ]
  },
  {
    "artist": "Ariana Grande",
    "genre": "Pop",
    "song": "Side to Side",
    "recommendations": [
      {
        "title": "Sorry Not Sorry",
        "artist": "Demi Lovato"
      },
      {
        "title": "All About That Bass",
        "artist": "Meghan Trainor"
      },
      {
        "title": "Boom Clap",
        "artist": "Charli XCX"
      },
      {
        "title": "Espresso",
        "artist": "Sabrina Carpenter"
      },
      {
        "title": "Good 4 U",
        "artist": "Olivia Rodrigo"
      }
    ]
  },
  {
    "artist": "Ariana Grande",
    "genre": "Pop",
    "song": "God Is a Woman",
    "recommendations": [
      {
        "title": "All About That Bass",
        "artist": "Meghan Trainor"
      },
      {
        "title": "Boom Clap",
        "artist": "Charli XCX"
      },
      {
        "title": "Espresso",
        "artist": "Sabrina Carpenter"
      },
      {
        "title": "Good 4 U",
        "artist": "Olivia Rodrigo"
      },
      {
        "title": "New Rules",
        "artist": "Dua Lipa"
      }
    ]
  },
  {
    "artist": "Ariana Grande",
    "genre": "Pop",
    "song": "Breathin",
    "recommendations": [
      {
        "title": "Boom Clap",
        "artist": "Charli XCX"
      },
      {
        "title": "Espresso",
        "artist": "Sabrina Carpenter"
      },
      {
        "title": "Good 4 U",
        "artist": "Olivia Rodrigo"
      },
      {
        "title": "New Rules",
        "artist": "Dua Lipa"
      },
      {
        "title": "Lose You to Love Me",
        "artist": "Selena Gomez"
      }
    ]
  },
  {
    "artist": "Ariana Grande",
    "genre": "Pop",
    "song": "Problem",
    "recommendations": [
      {
        "title": "Espresso",
        "artist": "Sabrina Carpenter"
      },
      {
        "title": "Good 4 U",
        "artist": "Olivia Rodrigo"
      },
      {
        "title": "New Rules",
        "artist": "Dua Lipa"
      },
      {
        "title": "Lose You to Love Me",
        "artist": "Selena Gomez"
      },
      {
        "title": "Havana",
        "artist": "Camila Cabello"
      }
    ]
  },
  {
    "artist": "Ariana Grande",
    "genre": "Pop",
    "song": "Dangerous Woman",
    "recommendations": [
      {
        "title": "Good 4 U",
        "artist": "Olivia Rodrigo"
      },
      {
        "title": "New Rules",
        "artist": "Dua Lipa"
      },
      {
        "title": "Lose You to Love Me",
        "artist": "Selena Gomez"
      },
      {
        "title": "Havana",
        "artist": "Camila Cabello"
      },
      {
        "title": "Without Me",
        "artist": "Halsey"
      }
    ]
  },
  {
    "artist": "Drake",
    "genre": "Hip Hop",
    "song": "God's Plan",
    "recommendations": [
      {
        "title": "No Role Modelz",
        "artist": "J. Cole"
      },
      {
        "title": "HUMBLE.",
        "artist": "Kendrick Lamar"
      },
      {
        "title": "Sicko Mode",
        "artist": "Travis Scott"
      },
      {
        "title": "Mask Off",
        "artist": "Future"
      },
      {
        "title": "Congratulations",
        "artist": "Post Malone"
      }
    ]
  },
  {
    "artist": "Drake",
    "genre": "Hip Hop",
    "song": "Hotline Bling",
    "recommendations": [
      {
        "title": "HUMBLE.",
        "artist": "Kendrick Lamar"
      },
      {
        "title": "Sicko Mode",
        "artist": "Travis Scott"
      },
      {
        "title": "Mask Off",
        "artist": "Future"
      },
      {
        "title": "Congratulations",
        "artist": "Post Malone"
      },
      {
        "title": "Lollipop",
        "artist": "Lil Wayne"
      }
    ]
  },
  {
    "artist": "Drake",
    "genre": "Hip Hop",
    "song": "One Dance",
    "recommendations": [
      {
        "title": "Sicko Mode",
        "artist": "Travis Scott"
      },
      {
        "title": "Mask Off",
        "artist": "Future"
      },
      {
        "title": "Congratulations",
        "artist": "Post Malone"
      },
      {
        "title": "Lollipop",
        "artist": "Lil Wayne"
      },
      {
        "title": "Bounce Back",
        "artist": "Big Sean"
      }
    ]
  },
  {
    "artist": "Drake",
    "genre": "Hip Hop",
    "song": "In My Feelings",
    "recommendations": [
      {
        "title": "Mask Off",
        "artist": "Future"
      },
      {
        "title": "Congratulations",
        "artist": "Post Malone"
      },
      {
        "title": "Lollipop",
        "artist": "Lil Wayne"
      },
      {
        "title": "Bounce Back",
        "artist": "Big Sean"
      },
      {
        "title": "Say It",
        "artist": "Tory Lanez"
      }
    ]
  },
  {
    "artist": "Drake",
    "genre": "Hip Hop",
    "song": "Nice For What",
    "recommendations": [
      {
        "title": "Congratulations",
        "artist": "Post Malone"
      },
      {
        "title": "Lollipop",
        "artist": "Lil Wayne"
      },
      {
        "title": "Bounce Back",
        "artist": "Big Sean"
      },
      {
        "title": "Say It",
        "artist": "Tory Lanez"
      },
      {
        "title": "Recognize",
        "artist": "PARTYNEXTDOOR"
      }
    ]
  },
  {
    "artist": "Drake",
    "genre": "Hip Hop",
    "song": "Passionfruit",
    "recommendations": [
      {
        "title": "Lollipop",
        "artist": "Lil Wayne"
      },
      {
        "title": "Bounce Back",
        "artist": "Big Sean"
      },
      {
        "title": "Say It",
        "artist": "Tory Lanez"
      },
      {
        "title": "Recognize",
        "artist": "PARTYNEXTDOOR"
      },
      {
        "title": "Stronger",
        "artist": "Kanye West"
      }
    ]
  },
  {
    "artist": "Drake",
    "genre": "Hip Hop",
    "song": "Started From the Bottom",
    "recommendations": [
      {
        "title": "Bounce Back",
        "artist": "Big Sean"
      },
      {
        "title": "Say It",
        "artist": "Tory Lanez"
      },
      {
        "title": "Recognize",
        "artist": "PARTYNEXTDOOR"
      },
      {
        "title": "Stronger",
        "artist": "Kanye West"
      },
      {
        "title": "No Role Modelz",
        "artist": "J. Cole"
      }
    ]
  },
  {
    "artist": "Drake",
    "genre": "Hip Hop",
    "song": "Nonstop",
    "recommendations": [
      {
        "title": "Say It",
        "artist": "Tory Lanez"
      },
      {
        "title": "Recognize",
        "artist": "PARTYNEXTDOOR"
      },
      {
        "title": "Stronger",
        "artist": "Kanye West"
      },
      {
        "title": "No Role Modelz",
        "artist": "J. Cole"
      },
      {
        "title": "HUMBLE.",
        "artist": "Kendrick Lamar"
      }
    ]
  },
  {
    "artist": "Drake",
    "genre": "Hip Hop",
    "song": "Toosie Slide",
    "recommendations": [
      {
        "title": "Recognize",
        "artist": "PARTYNEXTDOOR"
      },
      {
        "title": "Stronger",
        "artist": "Kanye West"
      },
      {
        "title": "No Role Modelz",
        "artist": "J. Cole"
      },
      {
        "title": "HUMBLE.",
        "artist": "Kendrick Lamar"
      },
      {
        "title": "Sicko Mode",
        "artist": "Travis Scott"
      }
    ]
  },
  {
    "artist": "Drake",
    "genre": "Hip Hop",
    "song": "Controlla",
    "recommendations": [
      {
        "title": "Stronger",
        "artist": "Kanye West"
      },
      {
        "title": "No Role Modelz",
        "artist": "J. Cole"
      },
      {
        "title": "HUMBLE.",
        "artist": "Kendrick Lamar"
      },
      {
        "title": "Sicko Mode",
        "artist": "Travis Scott"
      },
      {
        "title": "Mask Off",
        "artist": "Future"
      }
    ]
  },
  {
    "artist": "Taylor Swift",
    "genre": "Pop",
    "song": "Shake It Off",
    "recommendations": [
      {
        "title": "Teenage Dream",
        "artist": "Katy Perry"
      },
      {
        "title": "Good for You",
        "artist": "Selena Gomez"
      },
      {
        "title": "Please Please Please",
        "artist": "Sabrina Carpenter"
      },
      {
        "title": "Vampire",
        "artist": "Olivia Rodrigo"
      },
      {
        "title": "That's So True",
        "artist": "Gracie Abrams"
      }
    ]
  },
  {
    "artist": "Taylor Swift",
    "genre": "Pop",
    "song": "Blank Space",
    "recommendations": [
      {
        "title": "Good for You",
        "artist": "Selena Gomez"
      },
      {
        "title": "Please Please Please",
        "artist": "Sabrina Carpenter"
      },
      {
        "title": "Vampire",
        "artist": "Olivia Rodrigo"
      },
      {
        "title": "That's So True",
        "artist": "Gracie Abrams"
      },
      {
        "title": "Follow Your Arrow",
        "artist": "Kacey Musgraves"
      }
    ]
  },
  {
    "artist": "Taylor Swift",
    "genre": "Pop",
    "song": "Love Story",
    "recommendations": [
      {
        "title": "Please Please Please",
        "artist": "Sabrina Carpenter"
      },
      {
        "title": "Vampire",
        "artist": "Olivia Rodrigo"
      },
      {
        "title": "That's So True",
        "artist": "Gracie Abrams"
      },
      {
        "title": "Follow Your Arrow",
        "artist": "Kacey Musgraves"
      },
      {
        "title": "Perfect",
        "artist": "Ed Sheeran"
      }
    ]
  },
  {
    "artist": "Taylor Swift",
    "genre": "Pop",
    "song": "Cardigan",
    "recommendations": [
      {
        "title": "Vampire",
        "artist": "Olivia Rodrigo"
      },
      {
        "title": "That's So True",
        "artist": "Gracie Abrams"
      },
      {
        "title": "Follow Your Arrow",
        "artist": "Kacey Musgraves"
      },
      {
        "title": "Perfect",
        "artist": "Ed Sheeran"
      },
      {
        "title": "Colors",
        "artist": "Halsey"
      }
    ]
  },
  {
    "artist": "Taylor Swift",
    "genre": "Pop",
    "song": "Anti-Hero",
    "recommendations": [
      {
        "title": "That's So True",
        "artist": "Gracie Abrams"
      },
      {
        "title": "Follow Your Arrow",
        "artist": "Kacey Musgraves"
      },
      {
        "title": "Perfect",
        "artist": "Ed Sheeran"
      },
      {
        "title": "Colors",
        "artist": "Halsey"
      },
      {
        "title": "Royals",
        "artist": "Lorde"
      }
    ]
  },
  {
    "artist": "Taylor Swift",
    "genre": "Pop",
    "song": "Style",
    "recommendations": [
      {
        "title": "Follow Your Arrow",
        "artist": "Kacey Musgraves"
      },
      {
        "title": "Perfect",
        "artist": "Ed Sheeran"
      },
      {
        "title": "Colors",
        "artist": "Halsey"
      },
      {
        "title": "Royals",
        "artist": "Lorde"
      },
      {
        "title": "Call Me Maybe",
        "artist": "Carly Rae Jepsen"
      }
    ]
  },
  {
    "artist": "Taylor Swift",
    "genre": "Pop",
    "song": "Bad Blood",
    "recommendations": [
      {
        "title": "Perfect",
        "artist": "Ed Sheeran"
      },
      {
        "title": "Colors",
        "artist": "Halsey"
      },
      {
        "title": "Royals",
        "artist": "Lorde"
      },
      {
        "title": "Call Me Maybe",
        "artist": "Carly Rae Jepsen"
      },
      {
        "title": "Teenage Dream",
        "artist": "Katy Perry"
      }
    ]
  },
  {
    "artist": "Taylor Swift",
    "genre": "Pop",
    "song": "Lover",
    "recommendations": [
      {
        "title": "Colors",
        "artist": "Halsey"
      },
      {
        "title": "Royals",
        "artist": "Lorde"
      },
      {
        "title": "Call Me Maybe",
        "artist": "Carly Rae Jepsen"
      },
      {
        "title": "Teenage Dream",
        "artist": "Katy Perry"
      },
      {
        "title": "Good for You",
        "artist": "Selena Gomez"
      }
    ]
  },
  {
    "artist": "Taylor Swift",
    "genre": "Pop",
    "song": "Willow",
    "recommendations": [
      {
        "title": "Royals",
        "artist": "Lorde"
      },
      {
        "title": "Call Me Maybe",
        "artist": "Carly Rae Jepsen"
      },
      {
        "title": "Teenage Dream",
        "artist": "Katy Perry"
      },
      {
        "title": "Good for You",
        "artist": "Selena Gomez"
      },
      {
        "title": "Please Please Please",
        "artist": "Sabrina Carpenter"
      }
    ]
  },
  {
    "artist": "Taylor Swift",
    "genre": "Pop",
    "song": "You Belong With Me",
    "recommendations": [
      {
        "title": "Call Me Maybe",
        "artist": "Carly Rae Jepsen"
      },
      {
        "title": "Teenage Dream",
        "artist": "Katy Perry"
      },
      {
        "title": "Good for You",
        "artist": "Selena Gomez"
      },
      {
        "title": "Please Please Please",
        "artist": "Sabrina Carpenter"
      },
      {
        "title": "Vampire",
        "artist": "Olivia Rodrigo"
      }
    ]
  },
  {
    "artist": "Ed Sheeran",
    "genre": "Pop / Acoustic",
    "song": "Shape of You",
    "recommendations": [
      {
        "title": "Hold Back the River",
        "artist": "James Bay"
      },
      {
        "title": "Someone You Loved",
        "artist": "Lewis Capaldi"
      },
      {
        "title": "Let Her Go",
        "artist": "Passenger"
      },
      {
        "title": "I'm Yours",
        "artist": "Jason Mraz"
      },
      {
        "title": "Gravity",
        "artist": "John Mayer"
      }
    ]
  },
  {
    "artist": "Ed Sheeran",
    "genre": "Pop / Acoustic",
    "song": "Perfect",
    "recommendations": [
      {
        "title": "Someone You Loved",
        "artist": "Lewis Capaldi"
      },
      {
        "title": "Let Her Go",
        "artist": "Passenger"
      },
      {
        "title": "I'm Yours",
        "artist": "Jason Mraz"
      },
      {
        "title": "Gravity",
        "artist": "John Mayer"
      },
      {
        "title": "Say You Won't Let Go",
        "artist": "James Arthur"
      }
    ]
  },
  {
    "artist": "Ed Sheeran",
    "genre": "Pop / Acoustic",
    "song": "Thinking Out Loud",
    "recommendations": [
      {
        "title": "Let Her Go",
        "artist": "Passenger"
      },
      {
        "title": "I'm Yours",
        "artist": "Jason Mraz"
      },
      {
        "title": "Gravity",
        "artist": "John Mayer"
      },
      {
        "title": "Say You Won't Let Go",
        "artist": "James Arthur"
      },
      {
        "title": "Seventeen Going Under",
        "artist": "Sam Fender"
      }
    ]
  },
  {
    "artist": "Ed Sheeran",
    "genre": "Pop / Acoustic",
    "song": "Photograph",
    "recommendations": [
      {
        "title": "I'm Yours",
        "artist": "Jason Mraz"
      },
      {
        "title": "Gravity",
        "artist": "John Mayer"
      },
      {
        "title": "Say You Won't Let Go",
        "artist": "James Arthur"
      },
      {
        "title": "Seventeen Going Under",
        "artist": "Sam Fender"
      },
      {
        "title": "Another Love",
        "artist": "Tom Odell"
      }
    ]
  },
  {
    "artist": "Ed Sheeran",
    "genre": "Pop / Acoustic",
    "song": "Castle on the Hill",
    "recommendations": [
      {
        "title": "Gravity",
        "artist": "John Mayer"
      },
      {
        "title": "Say You Won't Let Go",
        "artist": "James Arthur"
      },
      {
        "title": "Seventeen Going Under",
        "artist": "Sam Fender"
      },
      {
        "title": "Another Love",
        "artist": "Tom Odell"
      },
      {
        "title": "Riptide",
        "artist": "Vance Joy"
      }
    ]
  },
  {
    "artist": "Ed Sheeran",
    "genre": "Pop / Acoustic",
    "song": "Galway Girl",
    "recommendations": [
      {
        "title": "Say You Won't Let Go",
        "artist": "James Arthur"
      },
      {
        "title": "Seventeen Going Under",
        "artist": "Sam Fender"
      },
      {
        "title": "Another Love",
        "artist": "Tom Odell"
      },
      {
        "title": "Riptide",
        "artist": "Vance Joy"
      },
      {
        "title": "Slow Hands",
        "artist": "Niall Horan"
      }
    ]
  },
  {
    "artist": "Ed Sheeran",
    "genre": "Pop / Acoustic",
    "song": "Bad Habits",
    "recommendations": [
      {
        "title": "Seventeen Going Under",
        "artist": "Sam Fender"
      },
      {
        "title": "Another Love",
        "artist": "Tom Odell"
      },
      {
        "title": "Riptide",
        "artist": "Vance Joy"
      },
      {
        "title": "Slow Hands",
        "artist": "Niall Horan"
      },
      {
        "title": "Hold Back the River",
        "artist": "James Bay"
      }
    ]
  },
  {
    "artist": "Ed Sheeran",
    "genre": "Pop / Acoustic",
    "song": "Shivers",
    "recommendations": [
      {
        "title": "Another Love",
        "artist": "Tom Odell"
      },
      {
        "title": "Riptide",
        "artist": "Vance Joy"
      },
      {
        "title": "Slow Hands",
        "artist": "Niall Horan"
      },
      {
        "title": "Hold Back the River",
        "artist": "James Bay"
      },
      {
        "title": "Someone You Loved",
        "artist": "Lewis Capaldi"
      }
    ]
  },
  {
    "artist": "Ed Sheeran",
    "genre": "Pop / Acoustic",
    "song": "Happier",
    "recommendations": [
      {
        "title": "Riptide",
        "artist": "Vance Joy"
      },
      {
        "title": "Slow Hands",
        "artist": "Niall Horan"
      },
      {
        "title": "Hold Back the River",
        "artist": "James Bay"
      },
      {
        "title": "Someone You Loved",
        "artist": "Lewis Capaldi"
      },
      {
        "title": "Let Her Go",
        "artist": "Passenger"
      }
    ]
  },
  {
    "artist": "Ed Sheeran",
    "genre": "Pop / Acoustic",
    "song": "Sing",
    "recommendations": [
      {
        "title": "Slow Hands",
        "artist": "Niall Horan"
      },
      {
        "title": "Hold Back the River",
        "artist": "James Bay"
      },
      {
        "title": "Someone You Loved",
        "artist": "Lewis Capaldi"
      },
      {
        "title": "Let Her Go",
        "artist": "Passenger"
      },
      {
        "title": "I'm Yours",
        "artist": "Jason Mraz"
      }
    ]
  },
  {
    "artist": "Dua Lipa",
    "genre": "Dance Pop",
    "song": "New Rules",
    "recommendations": [
      {
        "title": "Summer",
        "artist": "Calvin Harris"
      },
      {
        "title": "Can't Get You Out of My Head",
        "artist": "Kylie Minogue"
      },
      {
        "title": "Anywhere",
        "artist": "Rita Ora"
      },
      {
        "title": "Free Yourself",
        "artist": "Jessie Ware"
      },
      {
        "title": "Chandelier",
        "artist": "Sia"
      }
    ]
  },
  {
    "artist": "Dua Lipa",
    "genre": "Dance Pop",
    "song": "Don't Start Now",
    "recommendations": [
      {
        "title": "Can't Get You Out of My Head",
        "artist": "Kylie Minogue"
      },
      {
        "title": "Anywhere",
        "artist": "Rita Ora"
      },
      {
        "title": "Free Yourself",
        "artist": "Jessie Ware"
      },
      {
        "title": "Chandelier",
        "artist": "Sia"
      },
      {
        "title": "Lush Life",
        "artist": "Zara Larsson"
      }
    ]
  },
  {
    "artist": "Dua Lipa",
    "genre": "Dance Pop",
    "song": "Levitating",
    "recommendations": [
      {
        "title": "Anywhere",
        "artist": "Rita Ora"
      },
      {
        "title": "Free Yourself",
        "artist": "Jessie Ware"
      },
      {
        "title": "Chandelier",
        "artist": "Sia"
      },
      {
        "title": "Lush Life",
        "artist": "Zara Larsson"
      },
      {
        "title": "Love Me Like You Do",
        "artist": "Ellie Goulding"
      }
    ]
  },
  {
    "artist": "Dua Lipa",
    "genre": "Dance Pop",
    "song": "IDGAF",
    "recommendations": [
      {
        "title": "Free Yourself",
        "artist": "Jessie Ware"
      },
      {
        "title": "Chandelier",
        "artist": "Sia"
      },
      {
        "title": "Lush Life",
        "artist": "Zara Larsson"
      },
      {
        "title": "Love Me Like You Do",
        "artist": "Ellie Goulding"
      },
      {
        "title": "Boom Clap",
        "artist": "Charli XCX"
      }
    ]
  },
  {
    "artist": "Dua Lipa",
    "genre": "Dance Pop",
    "song": "One Kiss",
    "recommendations": [
      {
        "title": "Chandelier",
        "artist": "Sia"
      },
      {
        "title": "Lush Life",
        "artist": "Zara Larsson"
      },
      {
        "title": "Love Me Like You Do",
        "artist": "Ellie Goulding"
      },
      {
        "title": "Boom Clap",
        "artist": "Charli XCX"
      },
      {
        "title": "Habits (Stay High)",
        "artist": "Tove Lo"
      }
    ]
  },
  {
    "artist": "Dua Lipa",
    "genre": "Dance Pop",
    "song": "Physical",
    "recommendations": [
      {
        "title": "Lush Life",
        "artist": "Zara Larsson"
      },
      {
        "title": "Love Me Like You Do",
        "artist": "Ellie Goulding"
      },
      {
        "title": "Boom Clap",
        "artist": "Charli XCX"
      },
      {
        "title": "Habits (Stay High)",
        "artist": "Tove Lo"
      },
      {
        "title": "2002",
        "artist": "Anne-Marie"
      }
    ]
  },
  {
    "artist": "Dua Lipa",
    "genre": "Dance Pop",
    "song": "Break My Heart",
    "recommendations": [
      {
        "title": "Love Me Like You Do",
        "artist": "Ellie Goulding"
      },
      {
        "title": "Boom Clap",
        "artist": "Charli XCX"
      },
      {
        "title": "Habits (Stay High)",
        "artist": "Tove Lo"
      },
      {
        "title": "2002",
        "artist": "Anne-Marie"
      },
      {
        "title": "Summer",
        "artist": "Calvin Harris"
      }
    ]
  },
  {
    "artist": "Dua Lipa",
    "genre": "Dance Pop",
    "song": "Be the One",
    "recommendations": [
      {
        "title": "Boom Clap",
        "artist": "Charli XCX"
      },
      {
        "title": "Habits (Stay High)",
        "artist": "Tove Lo"
      },
      {
        "title": "2002",
        "artist": "Anne-Marie"
      },
      {
        "title": "Summer",
        "artist": "Calvin Harris"
      },
      {
        "title": "Can't Get You Out of My Head",
        "artist": "Kylie Minogue"
      }
    ]
  },
  {
    "artist": "Dua Lipa",
    "genre": "Dance Pop",
    "song": "Houdini",
    "recommendations": [
      {
        "title": "Habits (Stay High)",
        "artist": "Tove Lo"
      },
      {
        "title": "2002",
        "artist": "Anne-Marie"
      },
      {
        "title": "Summer",
        "artist": "Calvin Harris"
      },
      {
        "title": "Can't Get You Out of My Head",
        "artist": "Kylie Minogue"
      },
      {
        "title": "Anywhere",
        "artist": "Rita Ora"
      }
    ]
  },
  {
    "artist": "Dua Lipa",
    "genre": "Dance Pop",
    "song": "Training Season",
    "recommendations": [
      {
        "title": "2002",
        "artist": "Anne-Marie"
      },
      {
        "title": "Summer",
        "artist": "Calvin Harris"
      },
      {
        "title": "Can't Get You Out of My Head",
        "artist": "Kylie Minogue"
      },
      {
        "title": "Anywhere",
        "artist": "Rita Ora"
      },
      {
        "title": "Free Yourself",
        "artist": "Jessie Ware"
      }
    ]
  },
  {
    "artist": "Post Malone",
    "genre": "Hip Hop / Pop",
    "song": "Circles",
    "recommendations": [
      {
        "title": "Lucid Dreams",
        "artist": "Juice WRLD"
      },
      {
        "title": "Goosebumps",
        "artist": "Travis Scott"
      },
      {
        "title": "Bank Account",
        "artist": "21 Savage"
      },
      {
        "title": "XO Tour Llif3",
        "artist": "Lil Uzi Vert"
      },
      {
        "title": "Unforgettable",
        "artist": "Swae Lee"
      }
    ]
  },
  {
    "artist": "Post Malone",
    "genre": "Hip Hop / Pop",
    "song": "Sunflower",
    "recommendations": [
      {
        "title": "Goosebumps",
        "artist": "Travis Scott"
      },
      {
        "title": "Bank Account",
        "artist": "21 Savage"
      },
      {
        "title": "XO Tour Llif3",
        "artist": "Lil Uzi Vert"
      },
      {
        "title": "Unforgettable",
        "artist": "Swae Lee"
      },
      {
        "title": "The Box",
        "artist": "Roddy Ricch"
      }
    ]
  },
  {
    "artist": "Post Malone",
    "genre": "Hip Hop / Pop",
    "song": "Rockstar",
    "recommendations": [
      {
        "title": "Bank Account",
        "artist": "21 Savage"
      },
      {
        "title": "XO Tour Llif3",
        "artist": "Lil Uzi Vert"
      },
      {
        "title": "Unforgettable",
        "artist": "Swae Lee"
      },
      {
        "title": "The Box",
        "artist": "Roddy Ricch"
      },
      {
        "title": "Suge",
        "artist": "DaBaby"
      }
    ]
  },
  {
    "artist": "Post Malone",
    "genre": "Hip Hop / Pop",
    "song": "Congratulations",
    "recommendations": [
      {
        "title": "XO Tour Llif3",
        "artist": "Lil Uzi Vert"
      },
      {
        "title": "Unforgettable",
        "artist": "Swae Lee"
      },
      {
        "title": "The Box",
        "artist": "Roddy Ricch"
      },
      {
        "title": "Suge",
        "artist": "DaBaby"
      },
      {
        "title": "Talk",
        "artist": "Khalid"
      }
    ]
  },
  {
    "artist": "Post Malone",
    "genre": "Hip Hop / Pop",
    "song": "Better Now",
    "recommendations": [
      {
        "title": "Unforgettable",
        "artist": "Swae Lee"
      },
      {
        "title": "The Box",
        "artist": "Roddy Ricch"
      },
      {
        "title": "Suge",
        "artist": "DaBaby"
      },
      {
        "title": "Talk",
        "artist": "Khalid"
      },
      {
        "title": "Sad!",
        "artist": "XXXTentacion"
      }
    ]
  },
  {
    "artist": "Post Malone",
    "genre": "Hip Hop / Pop",
    "song": "Psycho",
    "recommendations": [
      {
        "title": "The Box",
        "artist": "Roddy Ricch"
      },
      {
        "title": "Suge",
        "artist": "DaBaby"
      },
      {
        "title": "Talk",
        "artist": "Khalid"
      },
      {
        "title": "Sad!",
        "artist": "XXXTentacion"
      },
      {
        "title": "Bad Things",
        "artist": "Machine Gun Kelly"
      }
    ]
  },
  {
    "artist": "Post Malone",
    "genre": "Hip Hop / Pop",
    "song": "White Iverson",
    "recommendations": [
      {
        "title": "Suge",
        "artist": "DaBaby"
      },
      {
        "title": "Talk",
        "artist": "Khalid"
      },
      {
        "title": "Sad!",
        "artist": "XXXTentacion"
      },
      {
        "title": "Bad Things",
        "artist": "Machine Gun Kelly"
      },
      {
        "title": "Lucid Dreams",
        "artist": "Juice WRLD"
      }
    ]
  },
  {
    "artist": "Post Malone",
    "genre": "Hip Hop / Pop",
    "song": "Wow",
    "recommendations": [
      {
        "title": "Talk",
        "artist": "Khalid"
      },
      {
        "title": "Sad!",
        "artist": "XXXTentacion"
      },
      {
        "title": "Bad Things",
        "artist": "Machine Gun Kelly"
      },
      {
        "title": "Lucid Dreams",
        "artist": "Juice WRLD"
      },
      {
        "title": "Goosebumps",
        "artist": "Travis Scott"
      }
    ]
  },
  {
    "artist": "Post Malone",
    "genre": "Hip Hop / Pop",
    "song": "Goodbyes",
    "recommendations": [
      {
        "title": "Sad!",
        "artist": "XXXTentacion"
      },
      {
        "title": "Bad Things",
        "artist": "Machine Gun Kelly"
      },
      {
        "title": "Lucid Dreams",
        "artist": "Juice WRLD"
      },
      {
        "title": "Goosebumps",
        "artist": "Travis Scott"
      },
      {
        "title": "Bank Account",
        "artist": "21 Savage"
      }
    ]
  },
  {
    "artist": "Post Malone",
    "genre": "Hip Hop / Pop",
    "song": "I Fall Apart",
    "recommendations": [
      {
        "title": "Bad Things",
        "artist": "Machine Gun Kelly"
      },
      {
        "title": "Lucid Dreams",
        "artist": "Juice WRLD"
      },
      {
        "title": "Goosebumps",
        "artist": "Travis Scott"
      },
      {
        "title": "Bank Account",
        "artist": "21 Savage"
      },
      {
        "title": "XO Tour Llif3",
        "artist": "Lil Uzi Vert"
      }
    ]
  },
  {
    "artist": "Adele",
    "genre": "Soul / Pop Ballad",
    "song": "Rolling in the Deep",
    "recommendations": [
      {
        "title": "Stay With Me",
        "artist": "Sam Smith"
      },
      {
        "title": "Back to Black",
        "artist": "Amy Winehouse"
      },
      {
        "title": "Mercy",
        "artist": "Duffy"
      },
      {
        "title": "Who You Are",
        "artist": "Jessie J"
      },
      {
        "title": "Next to Me",
        "artist": "Emeli Sande"
      }
    ]
  },
  {
    "artist": "Adele",
    "genre": "Soul / Pop Ballad",
    "song": "Someone Like You",
    "recommendations": [
      {
        "title": "Back to Black",
        "artist": "Amy Winehouse"
      },
      {
        "title": "Mercy",
        "artist": "Duffy"
      },
      {
        "title": "Who You Are",
        "artist": "Jessie J"
      },
      {
        "title": "Next to Me",
        "artist": "Emeli Sande"
      },
      {
        "title": "Fallin'",
        "artist": "Alicia Keys"
      }
    ]
  },
  {
    "artist": "Adele",
    "genre": "Soul / Pop Ballad",
    "song": "Hello",
    "recommendations": [
      {
        "title": "Mercy",
        "artist": "Duffy"
      },
      {
        "title": "Who You Are",
        "artist": "Jessie J"
      },
      {
        "title": "Next to Me",
        "artist": "Emeli Sande"
      },
      {
        "title": "Fallin'",
        "artist": "Alicia Keys"
      },
      {
        "title": "Bleeding Love",
        "artist": "Leona Lewis"
      }
    ]
  },
  {
    "artist": "Adele",
    "genre": "Soul / Pop Ballad",
    "song": "Set Fire to the Rain",
    "recommendations": [
      {
        "title": "Who You Are",
        "artist": "Jessie J"
      },
      {
        "title": "Next to Me",
        "artist": "Emeli Sande"
      },
      {
        "title": "Fallin'",
        "artist": "Alicia Keys"
      },
      {
        "title": "Bleeding Love",
        "artist": "Leona Lewis"
      },
      {
        "title": "You Had Me",
        "artist": "Joss Stone"
      }
    ]
  },
  {
    "artist": "Adele",
    "genre": "Soul / Pop Ballad",
    "song": "When We Were Young",
    "recommendations": [
      {
        "title": "Next to Me",
        "artist": "Emeli Sande"
      },
      {
        "title": "Fallin'",
        "artist": "Alicia Keys"
      },
      {
        "title": "Bleeding Love",
        "artist": "Leona Lewis"
      },
      {
        "title": "You Had Me",
        "artist": "Joss Stone"
      },
      {
        "title": "Put Your Records On",
        "artist": "Corinne Bailey Rae"
      }
    ]
  },
  {
    "artist": "Adele",
    "genre": "Soul / Pop Ballad",
    "song": "Easy On Me",
    "recommendations": [
      {
        "title": "Fallin'",
        "artist": "Alicia Keys"
      },
      {
        "title": "Bleeding Love",
        "artist": "Leona Lewis"
      },
      {
        "title": "You Had Me",
        "artist": "Joss Stone"
      },
      {
        "title": "Put Your Records On",
        "artist": "Corinne Bailey Rae"
      },
      {
        "title": "Dog Days Are Over",
        "artist": "Florence + the Machine"
      }
    ]
  },
  {
    "artist": "Adele",
    "genre": "Soul / Pop Ballad",
    "song": "Skyfall",
    "recommendations": [
      {
        "title": "Bleeding Love",
        "artist": "Leona Lewis"
      },
      {
        "title": "You Had Me",
        "artist": "Joss Stone"
      },
      {
        "title": "Put Your Records On",
        "artist": "Corinne Bailey Rae"
      },
      {
        "title": "Dog Days Are Over",
        "artist": "Florence + the Machine"
      },
      {
        "title": "Stay With Me",
        "artist": "Sam Smith"
      }
    ]
  },
  {
    "artist": "Adele",
    "genre": "Soul / Pop Ballad",
    "song": "Chasing Pavements",
    "recommendations": [
      {
        "title": "You Had Me",
        "artist": "Joss Stone"
      },
      {
        "title": "Put Your Records On",
        "artist": "Corinne Bailey Rae"
      },
      {
        "title": "Dog Days Are Over",
        "artist": "Florence + the Machine"
      },
      {
        "title": "Stay With Me",
        "artist": "Sam Smith"
      },
      {
        "title": "Back to Black",
        "artist": "Amy Winehouse"
      }
    ]
  },
  {
    "artist": "Adele",
    "genre": "Soul / Pop Ballad",
    "song": "Send My Love",
    "recommendations": [
      {
        "title": "Put Your Records On",
        "artist": "Corinne Bailey Rae"
      },
      {
        "title": "Dog Days Are Over",
        "artist": "Florence + the Machine"
      },
      {
        "title": "Stay With Me",
        "artist": "Sam Smith"
      },
      {
        "title": "Back to Black",
        "artist": "Amy Winehouse"
      },
      {
        "title": "Mercy",
        "artist": "Duffy"
      }
    ]
  },
  {
    "artist": "Adele",
    "genre": "Soul / Pop Ballad",
    "song": "Rumour Has It",
    "recommendations": [
      {
        "title": "Dog Days Are Over",
        "artist": "Florence + the Machine"
      },
      {
        "title": "Stay With Me",
        "artist": "Sam Smith"
      },
      {
        "title": "Back to Black",
        "artist": "Amy Winehouse"
      },
      {
        "title": "Mercy",
        "artist": "Duffy"
      },
      {
        "title": "Who You Are",
        "artist": "Jessie J"
      }
    ]
  },
  {
    "artist": "Coldplay",
    "genre": "Alternative Rock",
    "song": "Yellow",
    "recommendations": [
      {
        "title": "Chasing Cars",
        "artist": "Snow Patrol"
      },
      {
        "title": "Somewhere Only We Know",
        "artist": "Keane"
      },
      {
        "title": "Why Does It Always Rain on Me?",
        "artist": "Travis"
      },
      {
        "title": "Starlight",
        "artist": "Muse"
      },
      {
        "title": "How to Save a Life",
        "artist": "The Fray"
      }
    ]
  },
  {
    "artist": "Coldplay",
    "genre": "Alternative Rock",
    "song": "Fix You",
    "recommendations": [
      {
        "title": "Somewhere Only We Know",
        "artist": "Keane"
      },
      {
        "title": "Why Does It Always Rain on Me?",
        "artist": "Travis"
      },
      {
        "title": "Starlight",
        "artist": "Muse"
      },
      {
        "title": "How to Save a Life",
        "artist": "The Fray"
      },
      {
        "title": "Counting Stars",
        "artist": "OneRepublic"
      }
    ]
  },
  {
    "artist": "Coldplay",
    "genre": "Alternative Rock",
    "song": "Viva la Vida",
    "recommendations": [
      {
        "title": "Why Does It Always Rain on Me?",
        "artist": "Travis"
      },
      {
        "title": "Starlight",
        "artist": "Muse"
      },
      {
        "title": "How to Save a Life",
        "artist": "The Fray"
      },
      {
        "title": "Counting Stars",
        "artist": "OneRepublic"
      },
      {
        "title": "All I Want",
        "artist": "Kodaline"
      }
    ]
  },
  {
    "artist": "Coldplay",
    "genre": "Alternative Rock",
    "song": "The Scientist",
    "recommendations": [
      {
        "title": "Starlight",
        "artist": "Muse"
      },
      {
        "title": "How to Save a Life",
        "artist": "The Fray"
      },
      {
        "title": "Counting Stars",
        "artist": "OneRepublic"
      },
      {
        "title": "All I Want",
        "artist": "Kodaline"
      },
      {
        "title": "Let It Go",
        "artist": "James Bay"
      }
    ]
  },
  {
    "artist": "Coldplay",
    "genre": "Alternative Rock",
    "song": "Clocks",
    "recommendations": [
      {
        "title": "How to Save a Life",
        "artist": "The Fray"
      },
      {
        "title": "Counting Stars",
        "artist": "OneRepublic"
      },
      {
        "title": "All I Want",
        "artist": "Kodaline"
      },
      {
        "title": "Let It Go",
        "artist": "James Bay"
      },
      {
        "title": "Pompeii",
        "artist": "Bastille"
      }
    ]
  },
  {
    "artist": "Coldplay",
    "genre": "Alternative Rock",
    "song": "Paradise",
    "recommendations": [
      {
        "title": "Counting Stars",
        "artist": "OneRepublic"
      },
      {
        "title": "All I Want",
        "artist": "Kodaline"
      },
      {
        "title": "Let It Go",
        "artist": "James Bay"
      },
      {
        "title": "Pompeii",
        "artist": "Bastille"
      },
      {
        "title": "Stressed Out",
        "artist": "Twenty One Pilots"
      }
    ]
  },
  {
    "artist": "Coldplay",
    "genre": "Alternative Rock",
    "song": "Adventure of a Lifetime",
    "recommendations": [
      {
        "title": "All I Want",
        "artist": "Kodaline"
      },
      {
        "title": "Let It Go",
        "artist": "James Bay"
      },
      {
        "title": "Pompeii",
        "artist": "Bastille"
      },
      {
        "title": "Stressed Out",
        "artist": "Twenty One Pilots"
      },
      {
        "title": "Chasing Cars",
        "artist": "Snow Patrol"
      }
    ]
  },
  {
    "artist": "Coldplay",
    "genre": "Alternative Rock",
    "song": "Sky Full of Stars",
    "recommendations": [
      {
        "title": "Let It Go",
        "artist": "James Bay"
      },
      {
        "title": "Pompeii",
        "artist": "Bastille"
      },
      {
        "title": "Stressed Out",
        "artist": "Twenty One Pilots"
      },
      {
        "title": "Chasing Cars",
        "artist": "Snow Patrol"
      },
      {
        "title": "Somewhere Only We Know",
        "artist": "Keane"
      }
    ]
  },
  {
    "artist": "Coldplay",
    "genre": "Alternative Rock",
    "song": "Speed of Sound",
    "recommendations": [
      {
        "title": "Pompeii",
        "artist": "Bastille"
      },
      {
        "title": "Stressed Out",
        "artist": "Twenty One Pilots"
      },
      {
        "title": "Chasing Cars",
        "artist": "Snow Patrol"
      },
      {
        "title": "Somewhere Only We Know",
        "artist": "Keane"
      },
      {
        "title": "Why Does It Always Rain on Me?",
        "artist": "Travis"
      }
    ]
  },
  {
    "artist": "Coldplay",
    "genre": "Alternative Rock",
    "song": "Hymn for the Weekend",
    "recommendations": [
      {
        "title": "Stressed Out",
        "artist": "Twenty One Pilots"
      },
      {
        "title": "Chasing Cars",
        "artist": "Snow Patrol"
      },
      {
        "title": "Somewhere Only We Know",
        "artist": "Keane"
      },
      {
        "title": "Why Does It Always Rain on Me?",
        "artist": "Travis"
      },
      {
        "title": "Starlight",
        "artist": "Muse"
      }
    ]
  },
  {
    "artist": "Imagine Dragons",
    "genre": "Alternative Rock",
    "song": "Radioactive",
    "recommendations": [
      {
        "title": "Counting Stars",
        "artist": "OneRepublic"
      },
      {
        "title": "Heathens",
        "artist": "Twenty One Pilots"
      },
      {
        "title": "Pompeii",
        "artist": "Bastille"
      },
      {
        "title": "Renegades",
        "artist": "X Ambassadors"
      },
      {
        "title": "Centuries",
        "artist": "Fall Out Boy"
      }
    ]
  },
  {
    "artist": "Imagine Dragons",
    "genre": "Alternative Rock",
    "song": "Believer",
    "recommendations": [
      {
        "title": "Heathens",
        "artist": "Twenty One Pilots"
      },
      {
        "title": "Pompeii",
        "artist": "Bastille"
      },
      {
        "title": "Renegades",
        "artist": "X Ambassadors"
      },
      {
        "title": "Centuries",
        "artist": "Fall Out Boy"
      },
      {
        "title": "High Hopes",
        "artist": "Panic! At The Disco"
      }
    ]
  },
  {
    "artist": "Imagine Dragons",
    "genre": "Alternative Rock",
    "song": "Thunder",
    "recommendations": [
      {
        "title": "Pompeii",
        "artist": "Bastille"
      },
      {
        "title": "Renegades",
        "artist": "X Ambassadors"
      },
      {
        "title": "Centuries",
        "artist": "Fall Out Boy"
      },
      {
        "title": "High Hopes",
        "artist": "Panic! At The Disco"
      },
      {
        "title": "Legend",
        "artist": "The Score"
      }
    ]
  },
  {
    "artist": "Imagine Dragons",
    "genre": "Alternative Rock",
    "song": "Demons",
    "recommendations": [
      {
        "title": "Renegades",
        "artist": "X Ambassadors"
      },
      {
        "title": "Centuries",
        "artist": "Fall Out Boy"
      },
      {
        "title": "High Hopes",
        "artist": "Panic! At The Disco"
      },
      {
        "title": "Legend",
        "artist": "The Score"
      },
      {
        "title": "Sail",
        "artist": "AWOLNATION"
      }
    ]
  },
  {
    "artist": "Imagine Dragons",
    "genre": "Alternative Rock",
    "song": "Whatever It Takes",
    "recommendations": [
      {
        "title": "Centuries",
        "artist": "Fall Out Boy"
      },
      {
        "title": "High Hopes",
        "artist": "Panic! At The Disco"
      },
      {
        "title": "Legend",
        "artist": "The Score"
      },
      {
        "title": "Sail",
        "artist": "AWOLNATION"
      },
      {
        "title": "Tongue Tied",
        "artist": "Grouplove"
      }
    ]
  },
  {
    "artist": "Imagine Dragons",
    "genre": "Alternative Rock",
    "song": "Natural",
    "recommendations": [
      {
        "title": "High Hopes",
        "artist": "Panic! At The Disco"
      },
      {
        "title": "Legend",
        "artist": "The Score"
      },
      {
        "title": "Sail",
        "artist": "AWOLNATION"
      },
      {
        "title": "Tongue Tied",
        "artist": "Grouplove"
      },
      {
        "title": "Shut Up and Dance",
        "artist": "WALK THE MOON"
      }
    ]
  },
  {
    "artist": "Imagine Dragons",
    "genre": "Alternative Rock",
    "song": "Bones",
    "recommendations": [
      {
        "title": "Legend",
        "artist": "The Score"
      },
      {
        "title": "Sail",
        "artist": "AWOLNATION"
      },
      {
        "title": "Tongue Tied",
        "artist": "Grouplove"
      },
      {
        "title": "Shut Up and Dance",
        "artist": "WALK THE MOON"
      },
      {
        "title": "Counting Stars",
        "artist": "OneRepublic"
      }
    ]
  },
  {
    "artist": "Imagine Dragons",
    "genre": "Alternative Rock",
    "song": "Enemy",
    "recommendations": [
      {
        "title": "Sail",
        "artist": "AWOLNATION"
      },
      {
        "title": "Tongue Tied",
        "artist": "Grouplove"
      },
      {
        "title": "Shut Up and Dance",
        "artist": "WALK THE MOON"
      },
      {
        "title": "Counting Stars",
        "artist": "OneRepublic"
      },
      {
        "title": "Heathens",
        "artist": "Twenty One Pilots"
      }
    ]
  },
  {
    "artist": "Imagine Dragons",
    "genre": "Alternative Rock",
    "song": "On Top of the World",
    "recommendations": [
      {
        "title": "Tongue Tied",
        "artist": "Grouplove"
      },
      {
        "title": "Shut Up and Dance",
        "artist": "WALK THE MOON"
      },
      {
        "title": "Counting Stars",
        "artist": "OneRepublic"
      },
      {
        "title": "Heathens",
        "artist": "Twenty One Pilots"
      },
      {
        "title": "Pompeii",
        "artist": "Bastille"
      }
    ]
  },
  {
    "artist": "Imagine Dragons",
    "genre": "Alternative Rock",
    "song": "It's Time",
    "recommendations": [
      {
        "title": "Shut Up and Dance",
        "artist": "WALK THE MOON"
      },
      {
        "title": "Counting Stars",
        "artist": "OneRepublic"
      },
      {
        "title": "Heathens",
        "artist": "Twenty One Pilots"
      },
      {
        "title": "Pompeii",
        "artist": "Bastille"
      },
      {
        "title": "Renegades",
        "artist": "X Ambassadors"
      }
    ]
  },
  {
    "artist": "BTS",
    "genre": "K-Pop",
    "song": "Dynamite",
    "recommendations": [
      {
        "title": "Growl",
        "artist": "EXO"
      },
      {
        "title": "God's Menu",
        "artist": "Stray Kids"
      },
      {
        "title": "Crown",
        "artist": "TXT"
      },
      {
        "title": "Very Nice",
        "artist": "SEVENTEEN"
      },
      {
        "title": "Kick It",
        "artist": "NCT 127"
      }
    ]
  },
  {
    "artist": "BTS",
    "genre": "K-Pop",
    "song": "Butter",
    "recommendations": [
      {
        "title": "God's Menu",
        "artist": "Stray Kids"
      },
      {
        "title": "Crown",
        "artist": "TXT"
      },
      {
        "title": "Very Nice",
        "artist": "SEVENTEEN"
      },
      {
        "title": "Kick It",
        "artist": "NCT 127"
      },
      {
        "title": "Wonderland",
        "artist": "ATEEZ"
      }
    ]
  },
  {
    "artist": "BTS",
    "genre": "K-Pop",
    "song": "Boy With Luv",
    "recommendations": [
      {
        "title": "Crown",
        "artist": "TXT"
      },
      {
        "title": "Very Nice",
        "artist": "SEVENTEEN"
      },
      {
        "title": "Kick It",
        "artist": "NCT 127"
      },
      {
        "title": "Wonderland",
        "artist": "ATEEZ"
      },
      {
        "title": "How You Like That",
        "artist": "BLACKPINK"
      }
    ]
  },
  {
    "artist": "BTS",
    "genre": "K-Pop",
    "song": "DNA",
    "recommendations": [
      {
        "title": "Very Nice",
        "artist": "SEVENTEEN"
      },
      {
        "title": "Kick It",
        "artist": "NCT 127"
      },
      {
        "title": "Wonderland",
        "artist": "ATEEZ"
      },
      {
        "title": "How You Like That",
        "artist": "BLACKPINK"
      },
      {
        "title": "Fancy",
        "artist": "TWICE"
      }
    ]
  },
  {
    "artist": "BTS",
    "genre": "K-Pop",
    "song": "Fake Love",
    "recommendations": [
      {
        "title": "Kick It",
        "artist": "NCT 127"
      },
      {
        "title": "Wonderland",
        "artist": "ATEEZ"
      },
      {
        "title": "How You Like That",
        "artist": "BLACKPINK"
      },
      {
        "title": "Fancy",
        "artist": "TWICE"
      },
      {
        "title": "Given-Taken",
        "artist": "ENHYPEN"
      }
    ]
  },
  {
    "artist": "BTS",
    "genre": "K-Pop",
    "song": "ON",
    "recommendations": [
      {
        "title": "Wonderland",
        "artist": "ATEEZ"
      },
      {
        "title": "How You Like That",
        "artist": "BLACKPINK"
      },
      {
        "title": "Fancy",
        "artist": "TWICE"
      },
      {
        "title": "Given-Taken",
        "artist": "ENHYPEN"
      },
      {
        "title": "Hard Carry",
        "artist": "GOT7"
      }
    ]
  },
  {
    "artist": "BTS",
    "genre": "K-Pop",
    "song": "Idol",
    "recommendations": [
      {
        "title": "How You Like That",
        "artist": "BLACKPINK"
      },
      {
        "title": "Fancy",
        "artist": "TWICE"
      },
      {
        "title": "Given-Taken",
        "artist": "ENHYPEN"
      },
      {
        "title": "Hard Carry",
        "artist": "GOT7"
      },
      {
        "title": "Growl",
        "artist": "EXO"
      }
    ]
  },
  {
    "artist": "BTS",
    "genre": "K-Pop",
    "song": "Life Goes On",
    "recommendations": [
      {
        "title": "Fancy",
        "artist": "TWICE"
      },
      {
        "title": "Given-Taken",
        "artist": "ENHYPEN"
      },
      {
        "title": "Hard Carry",
        "artist": "GOT7"
      },
      {
        "title": "Growl",
        "artist": "EXO"
      },
      {
        "title": "God's Menu",
        "artist": "Stray Kids"
      }
    ]
  },
  {
    "artist": "BTS",
    "genre": "K-Pop",
    "song": "Permission to Dance",
    "recommendations": [
      {
        "title": "Given-Taken",
        "artist": "ENHYPEN"
      },
      {
        "title": "Hard Carry",
        "artist": "GOT7"
      },
      {
        "title": "Growl",
        "artist": "EXO"
      },
      {
        "title": "God's Menu",
        "artist": "Stray Kids"
      },
      {
        "title": "Crown",
        "artist": "TXT"
      }
    ]
  },
  {
    "artist": "BTS",
    "genre": "K-Pop",
    "song": "Spring Day",
    "recommendations": [
      {
        "title": "Hard Carry",
        "artist": "GOT7"
      },
      {
        "title": "Growl",
        "artist": "EXO"
      },
      {
        "title": "God's Menu",
        "artist": "Stray Kids"
      },
      {
        "title": "Crown",
        "artist": "TXT"
      },
      {
        "title": "Very Nice",
        "artist": "SEVENTEEN"
      }
    ]
  },
  {
    "artist": "Bad Bunny",
    "genre": "Reggaeton / Latin Trap",
    "song": "Titi Me Pregunto",
    "recommendations": [
      {
        "title": "Mi Gente",
        "artist": "J Balvin"
      },
      {
        "title": "Taki Taki",
        "artist": "Ozuna"
      },
      {
        "title": "China",
        "artist": "Anuel AA"
      },
      {
        "title": "Tusa",
        "artist": "Karol G"
      },
      {
        "title": "Pepas",
        "artist": "Farruko"
      }
    ]
  },
  {
    "artist": "Bad Bunny",
    "genre": "Reggaeton / Latin Trap",
    "song": "Me Porto Bonito",
    "recommendations": [
      {
        "title": "Taki Taki",
        "artist": "Ozuna"
      },
      {
        "title": "China",
        "artist": "Anuel AA"
      },
      {
        "title": "Tusa",
        "artist": "Karol G"
      },
      {
        "title": "Pepas",
        "artist": "Farruko"
      },
      {
        "title": "Todo de Ti",
        "artist": "Rauw Alejandro"
      }
    ]
  },
  {
    "artist": "Bad Bunny",
    "genre": "Reggaeton / Latin Trap",
    "song": "Yo Perreo Sola",
    "recommendations": [
      {
        "title": "China",
        "artist": "Anuel AA"
      },
      {
        "title": "Tusa",
        "artist": "Karol G"
      },
      {
        "title": "Pepas",
        "artist": "Farruko"
      },
      {
        "title": "Todo de Ti",
        "artist": "Rauw Alejandro"
      },
      {
        "title": "Bandido",
        "artist": "Myke Towers"
      }
    ]
  },
  {
    "artist": "Bad Bunny",
    "genre": "Reggaeton / Latin Trap",
    "song": "Callaita",
    "recommendations": [
      {
        "title": "Tusa",
        "artist": "Karol G"
      },
      {
        "title": "Pepas",
        "artist": "Farruko"
      },
      {
        "title": "Todo de Ti",
        "artist": "Rauw Alejandro"
      },
      {
        "title": "Bandido",
        "artist": "Myke Towers"
      },
      {
        "title": "Gasolina",
        "artist": "Daddy Yankee"
      }
    ]
  },
  {
    "artist": "Bad Bunny",
    "genre": "Reggaeton / Latin Trap",
    "song": "Dakiti",
    "recommendations": [
      {
        "title": "Pepas",
        "artist": "Farruko"
      },
      {
        "title": "Todo de Ti",
        "artist": "Rauw Alejandro"
      },
      {
        "title": "Bandido",
        "artist": "Myke Towers"
      },
      {
        "title": "Gasolina",
        "artist": "Daddy Yankee"
      },
      {
        "title": "El Amante",
        "artist": "Nicky Jam"
      }
    ]
  },
  {
    "artist": "Bad Bunny",
    "genre": "Reggaeton / Latin Trap",
    "song": "La Cancion",
    "recommendations": [
      {
        "title": "Todo de Ti",
        "artist": "Rauw Alejandro"
      },
      {
        "title": "Bandido",
        "artist": "Myke Towers"
      },
      {
        "title": "Gasolina",
        "artist": "Daddy Yankee"
      },
      {
        "title": "El Amante",
        "artist": "Nicky Jam"
      },
      {
        "title": "Feliz Cumpleanos Ferxxo",
        "artist": "Feid"
      }
    ]
  },
  {
    "artist": "Bad Bunny",
    "genre": "Reggaeton / Latin Trap",
    "song": "Un Verano Sin Ti",
    "recommendations": [
      {
        "title": "Bandido",
        "artist": "Myke Towers"
      },
      {
        "title": "Gasolina",
        "artist": "Daddy Yankee"
      },
      {
        "title": "El Amante",
        "artist": "Nicky Jam"
      },
      {
        "title": "Feliz Cumpleanos Ferxxo",
        "artist": "Feid"
      },
      {
        "title": "Mi Gente",
        "artist": "J Balvin"
      }
    ]
  },
  {
    "artist": "Bad Bunny",
    "genre": "Reggaeton / Latin Trap",
    "song": "Efecto",
    "recommendations": [
      {
        "title": "Gasolina",
        "artist": "Daddy Yankee"
      },
      {
        "title": "El Amante",
        "artist": "Nicky Jam"
      },
      {
        "title": "Feliz Cumpleanos Ferxxo",
        "artist": "Feid"
      },
      {
        "title": "Mi Gente",
        "artist": "J Balvin"
      },
      {
        "title": "Taki Taki",
        "artist": "Ozuna"
      }
    ]
  },
  {
    "artist": "Bad Bunny",
    "genre": "Reggaeton / Latin Trap",
    "song": "Moscow Mule",
    "recommendations": [
      {
        "title": "El Amante",
        "artist": "Nicky Jam"
      },
      {
        "title": "Feliz Cumpleanos Ferxxo",
        "artist": "Feid"
      },
      {
        "title": "Mi Gente",
        "artist": "J Balvin"
      },
      {
        "title": "Taki Taki",
        "artist": "Ozuna"
      },
      {
        "title": "China",
        "artist": "Anuel AA"
      }
    ]
  },
  {
    "artist": "Bad Bunny",
    "genre": "Reggaeton / Latin Trap",
    "song": "Bam Bam",
    "recommendations": [
      {
        "title": "Feliz Cumpleanos Ferxxo",
        "artist": "Feid"
      },
      {
        "title": "Mi Gente",
        "artist": "J Balvin"
      },
      {
        "title": "Taki Taki",
        "artist": "Ozuna"
      },
      {
        "title": "China",
        "artist": "Anuel AA"
      },
      {
        "title": "Tusa",
        "artist": "Karol G"
      }
    ]
  },
  {
    "artist": "Kendrick Lamar",
    "genre": "Hip Hop / Rap",
    "song": "HUMBLE.",
    "recommendations": [
      {
        "title": "No Role Modelz",
        "artist": "J. Cole"
      },
      {
        "title": "Stronger",
        "artist": "Kanye West"
      },
      {
        "title": "Earfquake",
        "artist": "Tyler, The Creator"
      },
      {
        "title": "99 Problems",
        "artist": "Jay-Z"
      },
      {
        "title": "N.Y. State of Mind",
        "artist": "Nas"
      }
    ]
  },
  {
    "artist": "Kendrick Lamar",
    "genre": "Hip Hop / Rap",
    "song": "DNA.",
    "recommendations": [
      {
        "title": "Stronger",
        "artist": "Kanye West"
      },
      {
        "title": "Earfquake",
        "artist": "Tyler, The Creator"
      },
      {
        "title": "99 Problems",
        "artist": "Jay-Z"
      },
      {
        "title": "N.Y. State of Mind",
        "artist": "Nas"
      },
      {
        "title": "Norf Norf",
        "artist": "Vince Staples"
      }
    ]
  },
  {
    "artist": "Kendrick Lamar",
    "genre": "Hip Hop / Rap",
    "song": "Alright",
    "recommendations": [
      {
        "title": "Earfquake",
        "artist": "Tyler, The Creator"
      },
      {
        "title": "99 Problems",
        "artist": "Jay-Z"
      },
      {
        "title": "N.Y. State of Mind",
        "artist": "Nas"
      },
      {
        "title": "Norf Norf",
        "artist": "Vince Staples"
      },
      {
        "title": "THat Part",
        "artist": "ScHoolboy Q"
      }
    ]
  },
  {
    "artist": "Kendrick Lamar",
    "genre": "Hip Hop / Rap",
    "song": "Swimming Pools",
    "recommendations": [
      {
        "title": "99 Problems",
        "artist": "Jay-Z"
      },
      {
        "title": "N.Y. State of Mind",
        "artist": "Nas"
      },
      {
        "title": "Norf Norf",
        "artist": "Vince Staples"
      },
      {
        "title": "THat Part",
        "artist": "ScHoolboy Q"
      },
      {
        "title": "No Problem",
        "artist": "Chance the Rapper"
      }
    ]
  },
  {
    "artist": "Kendrick Lamar",
    "genre": "Hip Hop / Rap",
    "song": "m.A.A.d City",
    "recommendations": [
      {
        "title": "N.Y. State of Mind",
        "artist": "Nas"
      },
      {
        "title": "Norf Norf",
        "artist": "Vince Staples"
      },
      {
        "title": "THat Part",
        "artist": "ScHoolboy Q"
      },
      {
        "title": "No Problem",
        "artist": "Chance the Rapper"
      },
      {
        "title": "The Light",
        "artist": "Common"
      }
    ]
  },
  {
    "artist": "Kendrick Lamar",
    "genre": "Hip Hop / Rap",
    "song": "King Kunta",
    "recommendations": [
      {
        "title": "Norf Norf",
        "artist": "Vince Staples"
      },
      {
        "title": "THat Part",
        "artist": "ScHoolboy Q"
      },
      {
        "title": "No Problem",
        "artist": "Chance the Rapper"
      },
      {
        "title": "The Light",
        "artist": "Common"
      },
      {
        "title": "Ultimate",
        "artist": "Denzel Curry"
      }
    ]
  },
  {
    "artist": "Kendrick Lamar",
    "genre": "Hip Hop / Rap",
    "song": "Not Like Us",
    "recommendations": [
      {
        "title": "THat Part",
        "artist": "ScHoolboy Q"
      },
      {
        "title": "No Problem",
        "artist": "Chance the Rapper"
      },
      {
        "title": "The Light",
        "artist": "Common"
      },
      {
        "title": "Ultimate",
        "artist": "Denzel Curry"
      },
      {
        "title": "No Role Modelz",
        "artist": "J. Cole"
      }
    ]
  },
  {
    "artist": "Kendrick Lamar",
    "genre": "Hip Hop / Rap",
    "song": "Money Trees",
    "recommendations": [
      {
        "title": "No Problem",
        "artist": "Chance the Rapper"
      },
      {
        "title": "The Light",
        "artist": "Common"
      },
      {
        "title": "Ultimate",
        "artist": "Denzel Curry"
      },
      {
        "title": "No Role Modelz",
        "artist": "J. Cole"
      },
      {
        "title": "Stronger",
        "artist": "Kanye West"
      }
    ]
  },
  {
    "artist": "Kendrick Lamar",
    "genre": "Hip Hop / Rap",
    "song": "Bitch, Don't Kill My Vibe",
    "recommendations": [
      {
        "title": "The Light",
        "artist": "Common"
      },
      {
        "title": "Ultimate",
        "artist": "Denzel Curry"
      },
      {
        "title": "No Role Modelz",
        "artist": "J. Cole"
      },
      {
        "title": "Stronger",
        "artist": "Kanye West"
      },
      {
        "title": "Earfquake",
        "artist": "Tyler, The Creator"
      }
    ]
  },
  {
    "artist": "Kendrick Lamar",
    "genre": "Hip Hop / Rap",
    "song": "All the Stars",
    "recommendations": [
      {
        "title": "Ultimate",
        "artist": "Denzel Curry"
      },
      {
        "title": "No Role Modelz",
        "artist": "J. Cole"
      },
      {
        "title": "Stronger",
        "artist": "Kanye West"
      },
      {
        "title": "Earfquake",
        "artist": "Tyler, The Creator"
      },
      {
        "title": "99 Problems",
        "artist": "Jay-Z"
      }
    ]
  },
  {
    "artist": "Alan Walker",
    "genre": "EDM / Electro",
    "song": "Faded",
    "recommendations": [
      {
        "title": "Alone",
        "artist": "Marshmello"
      },
      {
        "title": "Firestone",
        "artist": "Kygo"
      },
      {
        "title": "Clarity",
        "artist": "Zedd"
      },
      {
        "title": "Beautiful Creatures",
        "artist": "Illenium"
      },
      {
        "title": "Ignite",
        "artist": "K-391"
      }
    ]
  },
  {
    "artist": "Alan Walker",
    "genre": "EDM / Electro",
    "song": "Alone",
    "recommendations": [
      {
        "title": "Firestone",
        "artist": "Kygo"
      },
      {
        "title": "Clarity",
        "artist": "Zedd"
      },
      {
        "title": "Beautiful Creatures",
        "artist": "Illenium"
      },
      {
        "title": "Ignite",
        "artist": "K-391"
      },
      {
        "title": "Sugar",
        "artist": "Robin Schulz"
      }
    ]
  },
  {
    "artist": "Alan Walker",
    "genre": "EDM / Electro",
    "song": "Darkside",
    "recommendations": [
      {
        "title": "Clarity",
        "artist": "Zedd"
      },
      {
        "title": "Beautiful Creatures",
        "artist": "Illenium"
      },
      {
        "title": "Ignite",
        "artist": "K-391"
      },
      {
        "title": "Sugar",
        "artist": "Robin Schulz"
      },
      {
        "title": "Waiting",
        "artist": "Dash Berlin"
      }
    ]
  },
  {
    "artist": "Alan Walker",
    "genre": "EDM / Electro",
    "song": "All Falls Down",
    "recommendations": [
      {
        "title": "Beautiful Creatures",
        "artist": "Illenium"
      },
      {
        "title": "Ignite",
        "artist": "K-391"
      },
      {
        "title": "Sugar",
        "artist": "Robin Schulz"
      },
      {
        "title": "Waiting",
        "artist": "Dash Berlin"
      },
      {
        "title": "Take Me Home",
        "artist": "Cash Cash"
      }
    ]
  },
  {
    "artist": "Alan Walker",
    "genre": "EDM / Electro",
    "song": "On My Way",
    "recommendations": [
      {
        "title": "Ignite",
        "artist": "K-391"
      },
      {
        "title": "Sugar",
        "artist": "Robin Schulz"
      },
      {
        "title": "Waiting",
        "artist": "Dash Berlin"
      },
      {
        "title": "Take Me Home",
        "artist": "Cash Cash"
      },
      {
        "title": "Nevada",
        "artist": "Vicetone"
      }
    ]
  },
  {
    "artist": "Alan Walker",
    "genre": "EDM / Electro",
    "song": "Sing Me to Sleep",
    "recommendations": [
      {
        "title": "Sugar",
        "artist": "Robin Schulz"
      },
      {
        "title": "Waiting",
        "artist": "Dash Berlin"
      },
      {
        "title": "Take Me Home",
        "artist": "Cash Cash"
      },
      {
        "title": "Nevada",
        "artist": "Vicetone"
      },
      {
        "title": "Feel Good",
        "artist": "Gryffin"
      }
    ]
  },
  {
    "artist": "Alan Walker",
    "genre": "EDM / Electro",
    "song": "Diamond Heart",
    "recommendations": [
      {
        "title": "Waiting",
        "artist": "Dash Berlin"
      },
      {
        "title": "Take Me Home",
        "artist": "Cash Cash"
      },
      {
        "title": "Nevada",
        "artist": "Vicetone"
      },
      {
        "title": "Feel Good",
        "artist": "Gryffin"
      },
      {
        "title": "Alone",
        "artist": "Marshmello"
      }
    ]
  },
  {
    "artist": "Alan Walker",
    "genre": "EDM / Electro",
    "song": "Different World",
    "recommendations": [
      {
        "title": "Take Me Home",
        "artist": "Cash Cash"
      },
      {
        "title": "Nevada",
        "artist": "Vicetone"
      },
      {
        "title": "Feel Good",
        "artist": "Gryffin"
      },
      {
        "title": "Alone",
        "artist": "Marshmello"
      },
      {
        "title": "Firestone",
        "artist": "Kygo"
      }
    ]
  },
  {
    "artist": "Alan Walker",
    "genre": "EDM / Electro",
    "song": "The Spectre",
    "recommendations": [
      {
        "title": "Nevada",
        "artist": "Vicetone"
      },
      {
        "title": "Feel Good",
        "artist": "Gryffin"
      },
      {
        "title": "Alone",
        "artist": "Marshmello"
      },
      {
        "title": "Firestone",
        "artist": "Kygo"
      },
      {
        "title": "Clarity",
        "artist": "Zedd"
      }
    ]
  },
  {
    "artist": "Alan Walker",
    "genre": "EDM / Electro",
    "song": "Tired",
    "recommendations": [
      {
        "title": "Feel Good",
        "artist": "Gryffin"
      },
      {
        "title": "Alone",
        "artist": "Marshmello"
      },
      {
        "title": "Firestone",
        "artist": "Kygo"
      },
      {
        "title": "Clarity",
        "artist": "Zedd"
      },
      {
        "title": "Beautiful Creatures",
        "artist": "Illenium"
      }
    ]
  },
  {
    "artist": "Sam Smith",
    "genre": "Soul / Pop",
    "song": "Stay With Me",
    "recommendations": [
      {
        "title": "Someone Like You",
        "artist": "Adele"
      },
      {
        "title": "All of Me",
        "artist": "John Legend"
      },
      {
        "title": "Say You Love Me",
        "artist": "Jessie Ware"
      },
      {
        "title": "Retrograde",
        "artist": "James Blake"
      },
      {
        "title": "Next to Me",
        "artist": "Emeli Sande"
      }
    ]
  },
  {
    "artist": "Sam Smith",
    "genre": "Soul / Pop",
    "song": "Too Good At Goodbyes",
    "recommendations": [
      {
        "title": "All of Me",
        "artist": "John Legend"
      },
      {
        "title": "Say You Love Me",
        "artist": "Jessie Ware"
      },
      {
        "title": "Retrograde",
        "artist": "James Blake"
      },
      {
        "title": "Next to Me",
        "artist": "Emeli Sande"
      },
      {
        "title": "Human",
        "artist": "Rag'n'Bone Man"
      }
    ]
  },
  {
    "artist": "Sam Smith",
    "genre": "Soul / Pop",
    "song": "I'm Not the Only One",
    "recommendations": [
      {
        "title": "Say You Love Me",
        "artist": "Jessie Ware"
      },
      {
        "title": "Retrograde",
        "artist": "James Blake"
      },
      {
        "title": "Next to Me",
        "artist": "Emeli Sande"
      },
      {
        "title": "Human",
        "artist": "Rag'n'Bone Man"
      },
      {
        "title": "Cold Little Heart",
        "artist": "Michael Kiwanuka"
      }
    ]
  },
  {
    "artist": "Sam Smith",
    "genre": "Soul / Pop",
    "song": "Writing's on the Wall",
    "recommendations": [
      {
        "title": "Retrograde",
        "artist": "James Blake"
      },
      {
        "title": "Next to Me",
        "artist": "Emeli Sande"
      },
      {
        "title": "Human",
        "artist": "Rag'n'Bone Man"
      },
      {
        "title": "Cold Little Heart",
        "artist": "Michael Kiwanuka"
      },
      {
        "title": "River",
        "artist": "Leon Bridges"
      }
    ]
  },
  {
    "artist": "Sam Smith",
    "genre": "Soul / Pop",
    "song": "Unholy",
    "recommendations": [
      {
        "title": "Next to Me",
        "artist": "Emeli Sande"
      },
      {
        "title": "Human",
        "artist": "Rag'n'Bone Man"
      },
      {
        "title": "Cold Little Heart",
        "artist": "Michael Kiwanuka"
      },
      {
        "title": "River",
        "artist": "Leon Bridges"
      },
      {
        "title": "Blue Lights",
        "artist": "Jorja Smith"
      }
    ]
  },
  {
    "artist": "Sam Smith",
    "genre": "Soul / Pop",
    "song": "How Do You Sleep",
    "recommendations": [
      {
        "title": "Human",
        "artist": "Rag'n'Bone Man"
      },
      {
        "title": "Cold Little Heart",
        "artist": "Michael Kiwanuka"
      },
      {
        "title": "River",
        "artist": "Leon Bridges"
      },
      {
        "title": "Blue Lights",
        "artist": "Jorja Smith"
      },
      {
        "title": "Open",
        "artist": "Rhye"
      }
    ]
  },
  {
    "artist": "Sam Smith",
    "genre": "Soul / Pop",
    "song": "Lay Me Down",
    "recommendations": [
      {
        "title": "Cold Little Heart",
        "artist": "Michael Kiwanuka"
      },
      {
        "title": "River",
        "artist": "Leon Bridges"
      },
      {
        "title": "Blue Lights",
        "artist": "Jorja Smith"
      },
      {
        "title": "Open",
        "artist": "Rhye"
      },
      {
        "title": "Someone Like You",
        "artist": "Adele"
      }
    ]
  },
  {
    "artist": "Sam Smith",
    "genre": "Soul / Pop",
    "song": "Dancing With a Stranger",
    "recommendations": [
      {
        "title": "River",
        "artist": "Leon Bridges"
      },
      {
        "title": "Blue Lights",
        "artist": "Jorja Smith"
      },
      {
        "title": "Open",
        "artist": "Rhye"
      },
      {
        "title": "Someone Like You",
        "artist": "Adele"
      },
      {
        "title": "All of Me",
        "artist": "John Legend"
      }
    ]
  },
  {
    "artist": "Sam Smith",
    "genre": "Soul / Pop",
    "song": "Diamonds",
    "recommendations": [
      {
        "title": "Blue Lights",
        "artist": "Jorja Smith"
      },
      {
        "title": "Open",
        "artist": "Rhye"
      },
      {
        "title": "Someone Like You",
        "artist": "Adele"
      },
      {
        "title": "All of Me",
        "artist": "John Legend"
      },
      {
        "title": "Say You Love Me",
        "artist": "Jessie Ware"
      }
    ]
  },
  {
    "artist": "Sam Smith",
    "genre": "Soul / Pop",
    "song": "Pray",
    "recommendations": [
      {
        "title": "Open",
        "artist": "Rhye"
      },
      {
        "title": "Someone Like You",
        "artist": "Adele"
      },
      {
        "title": "All of Me",
        "artist": "John Legend"
      },
      {
        "title": "Say You Love Me",
        "artist": "Jessie Ware"
      },
      {
        "title": "Retrograde",
        "artist": "James Blake"
      }
    ]
  }
];
