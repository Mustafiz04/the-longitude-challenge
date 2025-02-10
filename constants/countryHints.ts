interface Hint {
  text: string;
  points: number;
}

interface HintSequence {
  hints: Hint[];
  difficulty: "easy" | "medium" | "hard";
}

type CountryHints = {
  [countryCode: string]: HintSequence[];
};

export const countryHints: CountryHints = {
  AF: [
    {
      difficulty: "easy",
      hints: [
        { text: "This country is located in South-Central Asia", points: 1 },
        { text: "It shares borders with six countries", points: 2 },
        { text: "Its flag has black, red, and green colors", points: 3 },
        {
          text: "Its capital city is one of the highest in the world",
          points: 5,
        },
        {
          text: "This country is famous for its carpets and saffron",
          points: 7,
        },
        { text: "Pashto and Dari are widely spoken here", points: 10 },
        { text: "It has a long history on the Silk Road", points: 12 },
        {
          text: "Known for its mountainous terrain and the Hindu Kush range",
          points: 15,
        },
        { text: "The famous Buddhas of Bamiyan were once here", points: 18 },
        { text: "Its capital is Kabul", points: 20 },
        {
          text: "The Amu Darya River forms part of its northern border",
          points: 22,
        },
        { text: "The Wakhan Corridor connects it to China", points: 25 },
        {
          text: "Pomegranates from here are considered some of the best in the world",
          points: 27,
        },
        {
          text: "The Blue Mosque in Mazar-i-Sharif is a famous landmark",
          points: 30,
        },
      ],
    },
    {
      difficulty: "medium",
      hints: [
        {
          text: "This country was invaded by the Soviet Union in 1979",
          points: 1,
        },
        {
          text: "It was the site of a major war involving the US from 2001 to 2021",
          points: 2,
        },
        { text: "Famous for the historical city of Herat", points: 4 },
        {
          text: "This country is known for the Minaret of Jam, a UNESCO site",
          points: 6,
        },
        {
          text: "Has a rich tradition of poetry, including Rumi and Khushal Khattak",
          points: 8,
        },
        { text: "It has no coastline", points: 10 },
        { text: "One of the largest opium producers in the world", points: 12 },
        { text: "Cricket has become a growing sport here", points: 15 },
        {
          text: "The national sport is Buzkashi, played on horseback",
          points: 18,
        },
        { text: "Its capital is Kabul", points: 20 },
        {
          text: "Alexander the Great passed through here during his conquests",
          points: 22,
        },
        {
          text: "Known for the Khyber Pass, a historic trade route",
          points: 25,
        },
        {
          text: "The first Islamic state in the Indian subcontinent was founded here",
          points: 27,
        },
        {
          text: "Home to one of the world's oldest Buddhist monasteries, Mes Aynak",
          points: 30,
        },
      ],
    },
  ],
  AL: [
    {
      difficulty: "easy",
      hints: [
        { text: "This country is located in Southeastern Europe", points: 1 },
        {
          text: "It borders Montenegro, Kosovo, North Macedonia, and Greece",
          points: 2,
        },
        {
          text: "Its coastline is along the Adriatic and Ionian Seas",
          points: 3,
        },
        { text: "The national flag features a double-headed eagle", points: 5 },
        { text: "Its capital city is the largest in the country", points: 7 },
        {
          text: "The country was once ruled by the Ottomans for centuries",
          points: 10,
        },
        { text: "It remained a communist state until 1992", points: 12 },
        {
          text: "The Albanian language is unique and not related to its neighbors’ languages",
          points: 15,
        },
        {
          text: "Known for its bunkers scattered across the country",
          points: 18,
        },
        { text: "Its capital is Tirana", points: 20 },
        {
          text: "The country has a large diaspora, with many living in Italy and Greece",
          points: 22,
        },
        {
          text: "One of its most famous national heroes is Skanderbeg",
          points: 25,
        },
        { text: "Tourists love the beaches in Saranda and Ksamil", points: 27 },
        {
          text: "Berat and Gjirokastër are UNESCO World Heritage Sites",
          points: 30,
        },
      ],
    },
    {
      difficulty: "medium",
      hints: [
        {
          text: "This country was officially atheist during its communist era",
          points: 1,
        },
        {
          text: "It is one of the few European countries that protected its Jewish population during WWII",
          points: 2,
        },
        { text: "The Lek is its official currency", points: 4 },
        {
          text: "The Albanian Riviera is becoming a popular tourist destination",
          points: 6,
        },
        { text: "Mother Teresa was of Albanian descent", points: 8 },
        {
          text: "Its traditional dance includes the 'Valle' folk dance",
          points: 10,
        },
        {
          text: "The country is home to Lake Ohrid, one of the oldest lakes in the world",
          points: 12,
        },
        { text: "One of its most famous castles is Rozafa Castle", points: 15 },
        {
          text: "The country follows the 'Besa' code, meaning honor and hospitality",
          points: 18,
        },
        { text: "Its capital is Tirana", points: 20 },
        {
          text: "The island of Sazan was a secret military base during the Cold War",
          points: 22,
        },
        { text: "The Albanian Alps are a great spot for hikers", points: 25 },
        { text: "The country is a candidate for EU membership", points: 27 },
        { text: "Scanderbeg Square is the heart of the capital", points: 30 },
      ],
    },
  ],
  DZ: [
    {
      difficulty: "easy",
      hints: [
        { text: "This country is located in North Africa", points: 1 },
        { text: "It is the largest country in Africa by land area", points: 2 },
        { text: "It has a long Mediterranean coastline", points: 3 },
        { text: "The Sahara Desert covers most of its territory", points: 5 },
        {
          text: "It shares borders with Tunisia, Libya, Niger, Mali, Mauritania, Western Sahara, and Morocco",
          points: 7,
        },
        { text: "The official languages are Arabic and Berber", points: 10 },
        {
          text: "It was a French colony until gaining independence in 1962",
          points: 12,
        },
        { text: "The national dish is couscous", points: 15 },
        { text: "The country has vast oil and gas reserves", points: 18 },
        { text: "Its capital is Algiers", points: 20 },
        { text: "The Atlas Mountains run through this country", points: 22 },
        { text: "It is home to the ancient Roman ruins of Timgad", points: 25 },
        {
          text: "The Casbah of Algiers is a UNESCO World Heritage Site",
          points: 27,
        },
        {
          text: "It has the largest population among Maghreb countries",
          points: 30,
        },
      ],
    },
    {
      difficulty: "medium",
      hints: [
        {
          text: "This country fought an eight-year war for independence from France",
          points: 1,
        },
        {
          text: "The Battle of Algiers was a significant event in its history",
          points: 2,
        },
        { text: "Rai music originated here", points: 4 },
        {
          text: "It has hosted the Pan Arab Games and the African Cup of Nations",
          points: 6,
        },
        { text: "The Ahaggar Mountains are located in the south", points: 8 },
        { text: "Its currency is the Algerian Dinar", points: 10 },
        {
          text: "It has one of the oldest mosques in North Africa, the Great Mosque of Tlemcen",
          points: 12,
        },
        {
          text: "The Tassili n'Ajjer rock art dates back thousands of years",
          points: 15,
        },
        {
          text: "The city of Oran is known for its vibrant culture and music",
          points: 18,
        },
        { text: "Its capital is Algiers", points: 20 },
        {
          text: "It has one of the longest land borders in Africa",
          points: 22,
        },
        {
          text: "It was part of the Ottoman Empire before the French colonization",
          points: 25,
        },
        {
          text: "The Sahara Desert here contains the Grand Erg Oriental and Grand Erg Occidental",
          points: 27,
        },
        {
          text: "Albert Camus, the Nobel Prize-winning writer, was born here",
          points: 30,
        },
      ],
    },
  ],
  AD: [
    {
      difficulty: "easy",
      hints: [
        { text: "This country is located in Europe", points: 1 },
        { text: "It is one of the smallest countries in the world", points: 2 },
        { text: "It is landlocked between France and Spain", points: 3 },
        { text: "The official language is Catalan", points: 5 },
        {
          text: "It is known for its ski resorts and mountainous terrain",
          points: 7,
        },
        {
          text: "It has no airport and relies on neighboring countries for air travel",
          points: 10,
        },
        { text: "It is famous for duty-free shopping", points: 12 },
        {
          text: "The country’s economy is heavily based on tourism",
          points: 15,
        },
        {
          text: "It has one of the highest life expectancies in the world",
          points: 18,
        },
        { text: "Its capital is Andorra la Vella", points: 20 },
        {
          text: "It is one of the few countries with two heads of state (a co-principality)",
          points: 22,
        },
        { text: "It was neutral in both World Wars", points: 25 },
        {
          text: "It is not a member of the European Union but uses the Euro",
          points: 27,
        },
        { text: "The country has no standing army", points: 30 },
      ],
    },
    {
      difficulty: "medium",
      hints: [
        { text: "This country has a very low crime rate", points: 1 },
        {
          text: "It was officially at war with Germany from WWI until 1958",
          points: 2,
        },
        {
          text: "The country is ruled by the President of France and the Bishop of Urgell",
          points: 4,
        },
        {
          text: "The country's flag has blue, yellow, and red vertical stripes",
          points: 6,
        },
        {
          text: "It is known for its Romanesque churches and medieval history",
          points: 8,
        },
        {
          text: "The Madriu-Perafita-Claror Valley is a UNESCO World Heritage Site",
          points: 10,
        },
        {
          text: "Andorra's official currency is the Euro, despite not being in the EU",
          points: 12,
        },
        { text: "The Pyrenees mountains dominate its landscape", points: 15 },
        {
          text: "The country has a very high human development index (HDI)",
          points: 18,
        },
        { text: "Its capital is Andorra la Vella", points: 20 },
        {
          text: "It is one of the six smallest countries in Europe",
          points: 22,
        },
        {
          text: "Ski resorts like Grandvalira attract visitors from all over the world",
          points: 25,
        },
        {
          text: "It has never had an airport due to its mountainous geography",
          points: 27,
        },
        {
          text: "Andorrans have historically had to study abroad for university",
          points: 30,
        },
      ],
    },
  ],
  AO: [
    {
      difficulty: "easy",
      hints: [
        { text: "This country is located in Southern Africa", points: 1 },
        { text: "It has a long Atlantic Ocean coastline", points: 2 },
        {
          text: "It shares borders with Namibia, Zambia, the Democratic Republic of the Congo, and the Republic of the Congo",
          points: 3,
        },
        { text: "The official language is Portuguese", points: 5 },
        { text: "It was a Portuguese colony until 1975", points: 7 },
        { text: "Its capital city is the largest in the country", points: 10 },
        { text: "It is rich in oil and diamond resources", points: 12 },
        { text: "The Kwanza River is one of its major rivers", points: 15 },
        {
          text: "The country experienced a long civil war from 1975 to 2002",
          points: 18,
        },
        { text: "Its capital is Luanda", points: 20 },
        {
          text: "One of its famous landmarks is the Tundavala Gap",
          points: 22,
        },
        {
          text: "The country is home to the giant sable antelope, a rare species found nowhere else",
          points: 25,
        },
        {
          text: "The coastal city of Benguela was a major hub during the colonial era",
          points: 27,
        },
        {
          text: "Baía dos Tigres is a ghost town located on a remote island",
          points: 30,
        },
      ],
    },
    {
      difficulty: "medium",
      hints: [
        {
          text: "This country gained independence on November 11, 1975",
          points: 1,
        },
        { text: "Its civil war lasted for 27 years", points: 2 },
        { text: "The country’s currency is the Angolan Kwanza", points: 4 },
        { text: "The MPLA was the ruling party after independence", points: 6 },
        {
          text: "The Capoeira dance was influenced by its culture and taken to Brazil",
          points: 8,
        },
        {
          text: "Luanda is one of the most expensive cities in the world for expatriates",
          points: 10,
        },
        {
          text: "The country has one of the fastest-growing economies in Africa",
          points: 12,
        },
        {
          text: "The Kissama National Park is a famous wildlife reserve",
          points: 15,
        },
        {
          text: "The country has a large diaspora, especially in Portugal and Brazil",
          points: 18,
        },
        { text: "Its capital is Luanda", points: 20 },
        { text: "Mbanza Kongo is a UNESCO World Heritage Site", points: 22 },
        {
          text: "Angola was one of the largest exporters of slaves to the Americas",
          points: 25,
        },
        { text: "The Lobito Port is a key transport hub", points: 27 },
        { text: "Carnival is a major celebration in this country", points: 30 },
      ],
    },
  ],
  AG: [
    {
      difficulty: "easy",
      hints: [
        {
          text: "This country is an island nation in the Caribbean",
          points: 1,
        },
        {
          text: "It consists of two main islands and several smaller ones",
          points: 2,
        },
        {
          text: "It gained independence from the United Kingdom in 1981",
          points: 3,
        },
        { text: "The official language is English", points: 5 },
        {
          text: "It is known for its 365 beaches—one for every day of the year",
          points: 7,
        },
        { text: "The country relies heavily on tourism", points: 10 },
        { text: "Its national sport is cricket", points: 12 },
        { text: "Its capital is St. John’s", points: 15 },
        { text: "Nelson’s Dockyard is a famous historic site", points: 18 },
        { text: "Barbuda is known for its pink sand beaches", points: 20 },
      ],
    },
    {
      difficulty: "medium",
      hints: [
        {
          text: "This country uses the East Caribbean Dollar as its currency",
          points: 1,
        },
        {
          text: "It has one of the smallest populations in the world",
          points: 2,
        },
        { text: "The country has no permanent rivers", points: 4 },
        { text: "It is part of the Commonwealth of Nations", points: 6 },
        { text: "It experiences hurricanes frequently", points: 8 },
        { text: "St. John’s Cathedral is a major landmark", points: 10 },
        {
          text: "The island was once named 'Wadadli' by indigenous people",
          points: 12,
        },
        { text: "Carnival is a major celebration here", points: 15 },
        {
          text: "It is home to one of the oldest coral reefs in the Caribbean",
          points: 18,
        },
        { text: "Hawksbill turtle nesting occurs on its beaches", points: 20 },
      ],
    },
    {
      difficulty: "hard",
      hints: [
        {
          text: "This country has the highest concentration of billionaires per capita in the Caribbean",
          points: 1,
        },
        {
          text: "Its flag features black, blue, white, yellow, and red",
          points: 2,
        },
        {
          text: "It is a member of the Organization of Eastern Caribbean States",
          points: 4,
        },
        {
          text: "Codrington was once the main settlement of Barbuda",
          points: 6,
        },
        {
          text: "It has no active volcanoes, unlike many Caribbean islands",
          points: 8,
        },
        {
          text: "The economy was historically based on sugar plantations",
          points: 10,
        },
        {
          text: "The Antigua Black Pineapple is a famous local fruit",
          points: 12,
        },
        {
          text: "The twin-island nation was discovered by Christopher Columbus in 1493",
          points: 15,
        },
        {
          text: "It has the largest nesting colony of frigate birds in the Caribbean",
          points: 18,
        },
        {
          text: "John’s Airport is its main international gateway",
          points: 20,
        },
      ],
    },
  ],
  AR: [
    {
      difficulty: "easy",
      hints: [
        { text: "This country is located in South America", points: 1 },
        {
          text: "It is the second-largest country in South America",
          points: 2,
        },
        { text: "Its official language is Spanish", points: 3 },
        { text: "It is famous for tango music and dance", points: 5 },
        { text: "Its capital city is the largest in the country", points: 7 },
        { text: "It is home to the Iguazu Falls", points: 10 },
        {
          text: "The Pampas region is known for its cattle ranches",
          points: 12,
        },
        { text: "It has won multiple FIFA World Cups", points: 15 },
        { text: "The Andes Mountains form its western border", points: 18 },
        { text: "Its capital is Buenos Aires", points: 20 },
      ],
    },
    {
      difficulty: "medium",
      hints: [
        {
          text: "This country has the highest consumption of beef per capita",
          points: 1,
        },
        { text: "Mate is a traditional drink", points: 2 },
        { text: "The Perito Moreno Glacier is a famous attraction", points: 4 },
        {
          text: "It has the largest Spanish-speaking population outside Spain",
          points: 6,
        },
        {
          text: "Maradona and Messi are football legends from this country",
          points: 8,
        },
        {
          text: "It has the southernmost city in the world, Ushuaia",
          points: 10,
        },
        { text: "Evita Perón is an iconic historical figure", points: 12 },
        {
          text: "The country declared independence from Spain in 1816",
          points: 15,
        },
        {
          text: "It has the largest dinosaur fossils ever discovered",
          points: 18,
        },
        { text: "Its national dance is the tango", points: 20 },
      ],
    },
    {
      difficulty: "hard",
      hints: [
        {
          text: "This country has a province named after Saint Martin",
          points: 1,
        },
        {
          text: "It had five different presidents in just ten days in 2001",
          points: 2,
        },
        {
          text: "The country was once one of the richest in the world in the early 20th century",
          points: 4,
        },
        { text: "It claims sovereignty over the Falkland Islands", points: 6 },
        { text: "Carlos Gardel was a famous tango singer", points: 8 },
        {
          text: "The country’s name comes from the Latin word for 'silver'",
          points: 10,
        },
        {
          text: "The first animated feature film was made here in 1917",
          points: 12,
        },
        {
          text: "It has the widest avenue in the world (Avenida 9 de Julio)",
          points: 15,
        },
        { text: "El Chaltén is known as the hiking capital", points: 18 },
        {
          text: "It has the highest peak in the Western Hemisphere, Aconcagua",
          points: 20,
        },
      ],
    },
  ],
  AM: [
    {
      difficulty: "easy",
      hints: [
        { text: "This country is located in the Caucasus region", points: 1 },
        {
          text: "It was the first nation to adopt Christianity as a state religion",
          points: 2,
        },
        { text: "Its capital city is Yerevan", points: 3 },
        {
          text: "The national symbol is Mount Ararat, which is visible from its capital",
          points: 5,
        },
        { text: "It was once part of the Soviet Union", points: 7 },
        { text: "The official language is Armenian", points: 10 },
        {
          text: "The Armenian Genocide is a significant part of its history",
          points: 12,
        },
        {
          text: "It is home to one of the world’s oldest churches, Etchmiadzin Cathedral",
          points: 15,
        },
        { text: "Famous for lavash, a traditional flatbread", points: 18 },
        { text: "The country’s currency is the Armenian dram", points: 20 },
      ],
    },
    {
      difficulty: "medium",
      hints: [
        { text: "This country has a landlocked geography", points: 1 },
        {
          text: "Lake Sevan, one of the largest freshwater lakes in the region, is here",
          points: 2,
        },
        {
          text: "It shares borders with Turkey, Georgia, Iran, and Azerbaijan",
          points: 4,
        },
        {
          text: "Armenian is one of the world’s oldest written languages",
          points: 6,
        },
        {
          text: "A significant diaspora exists in countries like the USA, France, and Russia",
          points: 8,
        },
        {
          text: "The Armenian alphabet was created by Mesrop Mashtots",
          points: 10,
        },
        {
          text: "It hosts the Tatev Monastery, connected by the world’s longest reversible aerial tramway",
          points: 12,
        },
        {
          text: "Its economy includes industries like mining and IT",
          points: 15,
        },
        {
          text: "The national dish is khorovats (Armenian barbecue)",
          points: 18,
        },
        {
          text: "The country's traditional music uses the duduk, a woodwind instrument",
          points: 20,
        },
      ],
    },
    {
      difficulty: "hard",
      hints: [
        {
          text: "No international recognition of its border dispute over Nagorno-Karabakh",
          points: 1,
        },
        {
          text: "One of the earliest wine-producing regions in the world",
          points: 2,
        },
        {
          text: "The world's first university town, Vagharshapat, is here",
          points: 4,
        },
        {
          text: "It has a tradition of cross-stone carvings known as khachkars",
          points: 6,
        },
        {
          text: "The Matenadaran Institute holds ancient manuscripts",
          points: 8,
        },
        {
          text: "The Zvartnots Cathedral ruins are a UNESCO World Heritage Site",
          points: 10,
        },
        {
          text: "The national chess team has won several Olympiad championships",
          points: 12,
        },
        {
          text: "Duduk music was listed as an intangible cultural heritage by UNESCO",
          points: 15,
        },
        {
          text: "Armenians celebrate Vardavar, a festival where people splash water on each other",
          points: 18,
        },
        {
          text: "The country’s tallest mountain, Aragats, is a dormant volcano",
          points: 20,
        },
      ],
    },
  ],
  AU: [
    {
      difficulty: "easy",
      hints: [
        { text: "This country is both a continent and a country", points: 1 },
        { text: "It is located in the Southern Hemisphere", points: 2 },
        { text: "Its capital city is Canberra", points: 3 },
        { text: "The largest city is Sydney", points: 5 },
        { text: "It is famous for the Sydney Opera House", points: 7 },
        {
          text: "It is home to unique wildlife like kangaroos and koalas",
          points: 10,
        },
        {
          text: "Ayers Rock, also known as Uluru, is a famous landmark",
          points: 12,
        },
        { text: "The Great Barrier Reef is located here", points: 15 },
        { text: "Cricket and rugby are popular sports", points: 18 },
        {
          text: "The country was originally a British penal colony",
          points: 20,
        },
      ],
    },
    {
      difficulty: "medium",
      hints: [
        {
          text: "It is the sixth-largest country in the world by land area",
          points: 1,
        },
        { text: "This country has no land borders", points: 2 },
        { text: "It was colonized by the British in 1788", points: 4 },
        {
          text: "The indigenous people of this country are known as Aboriginal Australians",
          points: 6,
        },
        {
          text: "It has states like Victoria, Queensland, and New South Wales",
          points: 8,
        },
        { text: "The national animal is the red kangaroo", points: 10 },
        {
          text: "It has a famous wine region called Barossa Valley",
          points: 12,
        },
        { text: "The Melbourne Cup is a major horse racing event", points: 15 },
        {
          text: "This country has some of the world's deadliest animals",
          points: 18,
        },
        { text: "Tasmania is an island state of this country", points: 20 },
      ],
    },
    {
      difficulty: "hard",
      hints: [
        {
          text: "The world's oldest rainforest, Daintree Rainforest, is located here",
          points: 1,
        },
        {
          text: "This country has the world’s longest fence, the Dingo Fence",
          points: 2,
        },
        {
          text: "It has the world's largest sand island, Fraser Island",
          points: 4,
        },
        {
          text: "It is home to the world's oldest continuing culture",
          points: 6,
        },
        {
          text: "The capital city was chosen as a compromise between two rival cities",
          points: 8,
        },
        { text: "It has hosted the Olympic Games twice", points: 10 },
        {
          text: "The Outback covers most of the country’s interior",
          points: 12,
        },
        {
          text: "It has the world's longest straight railway track",
          points: 15,
        },
        { text: "Wombats have cube-shaped poop", points: 18 },
        { text: "Its highest mountain is Mount Kosciuszko", points: 20 },
      ],
    },
  ],
  AT: [
    {
      difficulty: "easy",
      hints: [
        { text: "This country is located in Central Europe", points: 1 },
        { text: "Its capital city is Vienna", points: 2 },
        {
          text: "It is famous for classical music and composers like Mozart",
          points: 3,
        },
        { text: "It is home to the Alps, a major mountain range", points: 5 },
        { text: "The official language is German", points: 7 },
        { text: "The Sound of Music was filmed here", points: 10 },
        { text: "Its currency is the Euro", points: 12 },
        {
          text: "It shares borders with 8 countries, including Germany and Italy",
          points: 15,
        },
        { text: "Wiener Schnitzel is a famous dish from here", points: 18 },
        {
          text: "This country was once the center of the Austro-Hungarian Empire",
          points: 20,
        },
      ],
    },
    {
      difficulty: "medium",
      hints: [
        { text: "It has hosted the Winter Olympics twice", points: 1 },
        {
          text: "Home to one of the world's oldest Ferris wheels, the Wiener Riesenrad",
          points: 2,
        },
        { text: "The Danube River runs through this country", points: 4 },
        { text: "It is known for its high-quality skiing resorts", points: 6 },
        {
          text: "This country has produced multiple Formula 1 world champions",
          points: 8,
        },
        {
          text: "It is home to Schönbrunn Palace, a UNESCO World Heritage Site",
          points: 10,
        },
        {
          text: "It has one of the oldest universities in the German-speaking world",
          points: 12,
        },
        {
          text: "Sigmund Freud, the father of psychoanalysis, was born here",
          points: 15,
        },
        {
          text: "Its flag consists of three horizontal stripes: red, white, and red",
          points: 18,
        },
        {
          text: "The Vienna Boys' Choir is one of the world's most famous choirs",
          points: 20,
        },
      ],
    },
    {
      difficulty: "hard",
      hints: [
        {
          text: "It has the oldest zoo in the world, Tiergarten Schönbrunn",
          points: 1,
        },
        {
          text: "This country is the birthplace of Arnold Schwarzenegger",
          points: 2,
        },
        {
          text: "Home to Hallstatt, a village that inspired a replica in China",
          points: 4,
        },
        {
          text: "The currency before the Euro was the Austrian Schilling",
          points: 6,
        },
        { text: "It has the world's tallest church tower in Ulm", points: 8 },
        {
          text: "This country was annexed by Nazi Germany in 1938",
          points: 10,
        },
        {
          text: "Home to one of the world's oldest coffee house cultures",
          points: 12,
        },
        {
          text: "The famous Spanish Riding School is located here",
          points: 15,
        },
        {
          text: "The famous physicist Erwin Schrödinger was born here",
          points: 18,
        },
        { text: "Its highest peak is Grossglockner", points: 20 },
      ],
    },
  ],
  AZ: [
    {
      difficulty: "easy",
      hints: [
        { text: "This country is located in the Caucasus region", points: 1 },
        { text: "Its capital city is Baku", points: 2 },
        {
          text: "It borders Russia, Georgia, Armenia, Iran, and the Caspian Sea",
          points: 3,
        },
        { text: "It is known as the ‘Land of Fire’", points: 5 },
        { text: "The official language is Azerbaijani", points: 7 },
        {
          text: "This country was part of the Soviet Union until 1991",
          points: 10,
        },
        { text: "It is famous for its mud volcanoes", points: 12 },
        {
          text: "Carpets from this country are recognized by UNESCO",
          points: 15,
        },
        {
          text: "It has the Flame Towers, a modern architectural landmark",
          points: 18,
        },
        { text: "The currency used here is the Azerbaijani manat", points: 20 },
      ],
    },
    {
      difficulty: "medium",
      hints: [
        {
          text: "It has one of the oldest oil industries in the world",
          points: 1,
        },
        {
          text: "Home to the Caspian Sea, the world’s largest inland body of water",
          points: 2,
        },
        {
          text: "The Gobustan National Park features ancient rock carvings",
          points: 4,
        },
        { text: "This country is rich in natural gas reserves", points: 6 },
        {
          text: "It has a long-standing conflict over Nagorno-Karabakh",
          points: 8,
        },
        { text: "Famous for its traditional dish called plov", points: 10 },
        {
          text: "The Heydar Aliyev Center was designed by Zaha Hadid",
          points: 12,
        },
        {
          text: "This country is known for its Novruz Bayram holiday",
          points: 15,
        },
        { text: "Baku hosts an annual Formula 1 Grand Prix", points: 18 },
        {
          text: "The Maiden Tower is one of its most famous historical sites",
          points: 20,
        },
      ],
    },
    {
      difficulty: "hard",
      hints: [
        {
          text: "It was the first secular democratic state in the Muslim world",
          points: 1,
        },
        {
          text: "The Caucasian Albanian script was discovered here",
          points: 2,
        },
        {
          text: "The first offshore oil platform, Neft Daşları, was built here",
          points: 4,
        },
        {
          text: "Shusha is considered a cultural capital of this country",
          points: 6,
        },
        {
          text: "It has a large population of Talysh and Lezgins as ethnic minorities",
          points: 8,
        },
        {
          text: "The Yanar Dag fire has been burning for centuries",
          points: 10,
        },
        { text: "The Qabala region was once an ancient capital", points: 12 },
        {
          text: "The city of Nakhchivan is an exclave of this country",
          points: 15,
        },
        {
          text: "It has a unique tea-drinking culture where tea is often served with jam",
          points: 18,
        },
        { text: "The Karabakh horse is a national symbol", points: 20 },
      ],
    },
  ],
  BS: [
    {
      difficulty: "easy",
      hints: [
        {
          text: "This country is an island nation in the Atlantic Ocean",
          points: 1,
        },
        { text: "Its capital city is Nassau", points: 2 },
        {
          text: "It is famous for its beautiful beaches and crystal-clear waters",
          points: 3,
        },
        { text: "It is made up of over 700 islands", points: 5 },
        { text: "The official language is English", points: 7 },
        { text: "It was once a British colony", points: 10 },
        { text: "Tourism is the largest industry in this country", points: 12 },
        { text: "It is known for its Junkanoo festival", points: 15 },
        {
          text: "It has the third-largest barrier reef in the world",
          points: 18,
        },
        { text: "The currency used is the Bahamian dollar", points: 20 },
      ],
    },
    {
      difficulty: "medium",
      hints: [
        { text: "It gained independence from the UK in 1973", points: 1 },
        { text: "It is part of the Caribbean region", points: 2 },
        {
          text: "The Exuma Cays are famous for their swimming pigs",
          points: 4,
        },
        { text: "It has a major port for cruise ships", points: 6 },
        { text: "Pirates, including Blackbeard, once lived here", points: 8 },
        {
          text: "It has the world's third-deepest blue hole, Dean's Blue Hole",
          points: 10,
        },
        {
          text: "Andros Island is the largest island in this country",
          points: 12,
        },
        {
          text: "Its flag has three colors: black, yellow, and blue",
          points: 15,
        },
        {
          text: "The Atlantis Resort is a famous tourist attraction",
          points: 18,
        },
        {
          text: "The Bahamas is not in the Pacific Ocean, but in the Atlantic",
          points: 20,
        },
      ],
    },
    {
      difficulty: "hard",
      hints: [
        {
          text: "The Bahamas is home to one of the largest marine reserves in the world",
          points: 1,
        },
        {
          text: "The first landing of Christopher Columbus in the New World was here",
          points: 2,
        },
        { text: "It does not have an army, only a defense force", points: 4 },
        {
          text: "It has one of the highest ratios of coastline to land area in the world",
          points: 6,
        },
        {
          text: "It has the highest per capita GDP in the Caribbean",
          points: 8,
        },
        { text: "It has a pink sand beach on Harbour Island", points: 10 },
        {
          text: "The Bahamas is the only country with a marching flamingo unit",
          points: 12,
        },
        {
          text: "It has an underwater cave system, one of the largest in the world",
          points: 15,
        },
        {
          text: "The country’s motto is ‘Forward, Upward, Onward, Together’",
          points: 18,
        },
        {
          text: "It is named after the Spanish phrase ‘Baja Mar’, meaning ‘shallow sea’",
          points: 20,
        },
      ],
    },
  ],
  BH: [
    {
      difficulty: "easy",
      hints: [
        {
          text: "This country is an island nation in the Middle East",
          points: 1,
        },
        { text: "Its capital city is Manama", points: 2 },
        { text: "It is known for its rich pearl diving history", points: 3 },
        { text: "The official language is Arabic", points: 5 },
        {
          text: "It is connected to Saudi Arabia by the King Fahd Causeway",
          points: 7,
        },
        {
          text: "It is one of the smallest countries in the world",
          points: 10,
        },
        { text: "It is a major financial hub in the Gulf region", points: 12 },
        {
          text: "The Bahrain Grand Prix is a major Formula 1 race held here",
          points: 15,
        },
        { text: "The currency used is the Bahraini Dinar", points: 18 },
        { text: "It gained independence from Britain in 1971", points: 20 },
      ],
    },
    {
      difficulty: "medium",
      hints: [
        {
          text: "It has one of the world's oldest civilizations, Dilmun",
          points: 1,
        },
        {
          text: "The country has a UNESCO-listed Qal'at al-Bahrain",
          points: 2,
        },
        {
          text: "It is known for the Tree of Life, which grows in the desert",
          points: 4,
        },
        {
          text: "Bahrain was once a center of the global pearl trade",
          points: 6,
        },
        {
          text: "Oil was first discovered here in the Arabian Peninsula",
          points: 8,
        },
        { text: "Bahrain’s name means ‘Two Seas’ in Arabic", points: 10 },
        { text: "It has artificial islands like Amwaj Islands", points: 12 },
        { text: "This country has a large expatriate population", points: 15 },
        {
          text: "It has a high Human Development Index in the Arab world",
          points: 18,
        },
        { text: "Its economy relies on banking, finance, and oil", points: 20 },
      ],
    },
  ],
  BD: [
    {
      difficulty: "easy",
      hints: [
        { text: "This country is in South Asia", points: 1 },
        { text: "Its capital city is Dhaka", points: 2 },
        { text: "It shares its longest border with India", points: 3 },
        { text: "The official language is Bengali", points: 5 },
        { text: "The national currency is the Bangladeshi Taka", points: 7 },
        {
          text: "The Sundarbans, home to Bengal tigers, is located here",
          points: 10,
        },
        { text: "It gained independence from Pakistan in 1971", points: 12 },
        {
          text: "It has the world's longest natural sea beach, Cox’s Bazar",
          points: 15,
        },
        { text: "The national dish is Hilsa fish and rice", points: 18 },
        { text: "It has a large textile and garment industry", points: 20 },
      ],
    },
    {
      difficulty: "medium",
      hints: [
        {
          text: "It has the world's largest river delta, the Ganges Delta",
          points: 1,
        },
        { text: "The country is prone to monsoons and cyclones", points: 2 },
        {
          text: "Bengali New Year (Pohela Boishakh) is widely celebrated",
          points: 4,
        },
        { text: "The world's eighth-largest population lives here", points: 6 },
        {
          text: "The national parliament building was designed by Louis Kahn",
          points: 8,
        },
        {
          text: "It has one of the fastest-growing economies in Asia",
          points: 10,
        },
        {
          text: "The first Nobel Prize winner from here was Muhammad Yunus",
          points: 12,
        },
        { text: "Jute production is a major industry", points: 15 },
        { text: "It has the largest shipbreaking industry", points: 18 },
        { text: "The independence war lasted for 9 months", points: 20 },
      ],
    },
  ],
  BB: [
    {
      difficulty: "easy",
      hints: [
        {
          text: "This country is an island nation in the Caribbean",
          points: 1,
        },
        { text: "Its capital city is Bridgetown", points: 2 },
        { text: "It was a British colony until 1966", points: 3 },
        { text: "The official language is English", points: 5 },
        {
          text: "It is known for its white sandy beaches and turquoise waters",
          points: 7,
        },
        { text: "The currency used is the Barbadian dollar", points: 10 },
        { text: "It is the birthplace of pop star Rihanna", points: 12 },
        {
          text: "Tourism and sugarcane production are key industries",
          points: 15,
        },
        {
          text: "It became a republic in 2021, removing the British monarchy",
          points: 18,
        },
        { text: "It is famous for its annual Crop Over festival", points: 20 },
      ],
    },
    {
      difficulty: "medium",
      hints: [
        {
          text: "It is one of the most developed nations in the Caribbean",
          points: 1,
        },
        {
          text: "Mount Gay Rum, the world’s oldest rum brand, is from here",
          points: 2,
        },
        { text: "The national dish is cou-cou and flying fish", points: 4 },
        {
          text: "It is one of the world’s top honeymoon destinations",
          points: 6,
        },
        {
          text: "The island is known for its underground Harrison's Cave",
          points: 8,
        },
        {
          text: "It has one of the highest literacy rates in the world",
          points: 10,
        },
        { text: "Its parliament is the third-oldest in the world", points: 12 },
        {
          text: "It has a famous horse racing venue called the Garrison Savannah",
          points: 15,
        },
        {
          text: "The island was once known as 'Los Barbados' by the Portuguese",
          points: 18,
        },
        {
          text: "The Barbados national flower is the Pride of Barbados",
          points: 20,
        },
      ],
    },
  ],
  BY: [
    {
      difficulty: "easy",
      hints: [
        { text: "This country is located in Eastern Europe", points: 1 },
        { text: "Its capital city is Minsk", points: 2 },
        { text: "It was part of the Soviet Union until 1991", points: 3 },
        {
          text: "The official languages are Belarusian and Russian",
          points: 5,
        },
        {
          text: "It borders Russia, Ukraine, Poland, Lithuania, and Latvia",
          points: 7,
        },
        { text: "The currency used is the Belarusian ruble", points: 10 },
        {
          text: "It has vast forests and is sometimes called the ‘Lungs of Europe’",
          points: 12,
        },
        {
          text: "The country is known for its large-scale agricultural sector",
          points: 15,
        },
        {
          text: "Minsk was almost entirely rebuilt after World War II",
          points: 18,
        },
        { text: "It has a strong tradition in ice hockey", points: 20 },
      ],
    },
    {
      difficulty: "medium",
      hints: [
        {
          text: "It has one of the last remaining European primeval forests, Białowieża",
          points: 1,
        },
        { text: "It was once called the ‘Soviet Silicon Valley’", points: 2 },
        { text: "It has no access to the sea", points: 4 },
        { text: "The Mir Castle is a UNESCO World Heritage site", points: 6 },
        {
          text: "The national dish is draniki, a type of potato pancake",
          points: 8,
        },
        {
          text: "It is known for its strong military ties with Russia",
          points: 10,
        },
        {
          text: "The country’s main religion is Eastern Orthodoxy",
          points: 12,
        },
        { text: "Brest Fortress is a famous World War II site", points: 15 },
        { text: "Minsk hosts an annual Independence Day parade", points: 18 },
        { text: "It has a famous open-air museum called Dudutki", points: 20 },
      ],
    },
  ],
  BE: [
    {
      difficulty: "easy",
      hints: [
        { text: "This country is in Western Europe", points: 1 },
        { text: "Its capital city is Brussels", points: 2 },
        {
          text: "It is one of the founding members of the European Union",
          points: 3,
        },
        {
          text: "It is famous for its chocolate, waffles, and beer",
          points: 5,
        },
        {
          text: "It has three official languages: Dutch, French, and German",
          points: 7,
        },
        {
          text: "The headquarters of NATO is located in this country",
          points: 10,
        },
        {
          text: "It shares borders with France, Germany, Luxembourg, and the Netherlands",
          points: 12,
        },
        { text: "The Atomium is one of its famous landmarks", points: 15 },
        {
          text: "The country is known for its comic book culture, including Tintin",
          points: 18,
        },
        {
          text: "The Manneken Pis statue is a well-known tourist attraction",
          points: 20,
        },
      ],
    },
    {
      difficulty: "medium",
      hints: [
        {
          text: "It has a region called Flanders where Dutch is spoken",
          points: 1,
        },
        { text: "The Battle of Waterloo took place here", points: 2 },
        {
          text: "The country is home to the Grand Place, a UNESCO World Heritage site",
          points: 4,
        },
        { text: "Bruges is often called the ‘Venice of the North’", points: 6 },
        {
          text: "The Red Devils is the nickname of its national football team",
          points: 8,
        },
        {
          text: "It has a famous music festival called Tomorrowland",
          points: 10,
        },
        {
          text: "Antwerp is known as the diamond capital of the world",
          points: 12,
        },
        {
          text: "It has the highest number of castles per square kilometer in the world",
          points: 15,
        },
        {
          text: "It is one of the few countries with a monarchy in Europe",
          points: 18,
        },
        { text: "Ghent and Leuven are famous university cities", points: 20 },
      ],
    },
  ],
  BJ: [
    {
      difficulty: "easy",
      hints: [
        { text: "This country is located in West Africa", points: 1 },
        { text: "Its official language is French", points: 2 },
        { text: "The capital city is Porto-Novo", points: 3 },
        { text: "Cotonou is its largest city and economic hub", points: 5 },
        {
          text: "It borders Nigeria, Togo, Burkina Faso, and Niger",
          points: 7,
        },
        { text: "It was formerly known as Dahomey", points: 10 },
        {
          text: "This country is considered the birthplace of Voodoo",
          points: 12,
        },
        {
          text: "The country has a coastline along the Atlantic Ocean",
          points: 15,
        },
        {
          text: "The Pendjari National Park is a major wildlife reserve",
          points: 18,
        },
        {
          text: "The Amazons of Dahomey were an all-female warrior unit",
          points: 20,
        },
      ],
    },
    {
      difficulty: "medium",
      hints: [
        {
          text: "This country gained independence from France in 1960",
          points: 1,
        },
        { text: "Its currency is the West African CFA franc", points: 2 },
        { text: "It has a famous floating village called Ganvie", points: 4 },
        {
          text: "It has a tropical climate with both wet and dry seasons",
          points: 6,
        },
        {
          text: "The Porto-Novo Museum showcases its history and culture",
          points: 8,
        },
        {
          text: "It was once a key hub for the transatlantic slave trade",
          points: 10,
        },
        {
          text: "It is home to the UNESCO-listed Royal Palaces of Abomey",
          points: 12,
        },
        {
          text: "Its national dish is Pâte, made from corn or cassava flour",
          points: 15,
        },
        {
          text: "The country’s national football team is called the ‘Squirrels’",
          points: 18,
        },
        { text: "It is known for the annual Voodoo Festival", points: 20 },
      ],
    },
  ],
  BT: [
    {
      difficulty: "easy",
      hints: [
        { text: "This country is located in South Asia", points: 1 },
        { text: "Its capital city is Thimphu", points: 2 },
        { text: "It is a landlocked country", points: 3 },
        { text: "It shares borders with India and China", points: 5 },
        { text: "It is known as the ‘Land of the Thunder Dragon’", points: 7 },
        { text: "Buddhism is the dominant religion", points: 10 },
        {
          text: "It has a unique philosophy of Gross National Happiness",
          points: 12,
        },
        {
          text: "The Paro Taktsang (Tiger’s Nest) is a famous monastery",
          points: 15,
        },
        {
          text: "It restricts the number of tourists to protect its culture",
          points: 18,
        },
        {
          text: "It was the last country in the world to introduce television",
          points: 20,
        },
      ],
    },
    {
      difficulty: "medium",
      hints: [
        { text: "This country has never been colonized", points: 1 },
        {
          text: "The national dress is called Gho for men and Kira for women",
          points: 2,
        },
        {
          text: "It is one of the most environmentally conscious nations",
          points: 4,
        },
        { text: "Archery is the national sport", points: 6 },
        {
          text: "It is one of the only carbon-negative countries in the world",
          points: 8,
        },
        {
          text: "The country follows a constitutional monarchy system",
          points: 10,
        },
        { text: "Its economy is driven by hydroelectric power", points: 12 },
        { text: "It has a ban on tobacco sales", points: 15 },
        {
          text: "The highest unclimbed mountain in the world, Gangkhar Puensum, is located here",
          points: 18,
        },
        {
          text: "Bhutanese cuisine is known for its love of chilies, especially Ema Datshi",
          points: 20,
        },
      ],
    },
  ],
  BO: [
    {
      difficulty: "easy",
      hints: [
        { text: "This country is located in South America", points: 1 },
        { text: "It has two capital cities: La Paz and Sucre", points: 2 },
        {
          text: "Spanish is the official and most widely spoken language",
          points: 3,
        },
        { text: "It is a landlocked country", points: 5 },
        { text: "The currency used is the Boliviano", points: 7 },
        { text: "The country is named after Simón Bolívar", points: 10 },
        {
          text: "It is home to the world’s largest salt flat, Salar de Uyuni",
          points: 12,
        },
        {
          text: "It borders Brazil, Argentina, Paraguay, Chile, and Peru",
          points: 15,
        },
        {
          text: "Lake Titicaca, the highest navigable lake, is partially in this country",
          points: 18,
        },
        { text: "The famous ‘Death Road’ is located here", points: 20 },
      ],
    },
    {
      difficulty: "medium",
      hints: [
        {
          text: "It has a high indigenous population, with Aymara and Quechua being widely spoken",
          points: 1,
        },
        { text: "It has the highest capital city in the world", points: 2 },
        {
          text: "The Witches' Market in La Paz is a popular tourist attraction",
          points: 4,
        },
        {
          text: "It has one of the most dangerous roads in the world",
          points: 6,
        },
        {
          text: "The Yungas region is known for coca leaf production",
          points: 8,
        },
        {
          text: "The national dish is Salteñas, a type of baked empanada",
          points: 10,
        },
        {
          text: "It has one of the richest lithium deposits in the world",
          points: 12,
        },
        {
          text: "The Madidi National Park is home to diverse wildlife",
          points: 15,
        },
        {
          text: "The Tiahuanaco civilization existed here before the Inca",
          points: 18,
        },
        {
          text: "Potosí was once the world's largest source of silver",
          points: 20,
        },
      ],
    },
  ],
  BA: [
    {
      difficulty: "easy",
      hints: [
        { text: "This country is located in the Balkans", points: 1 },
        { text: "Its capital city is Sarajevo", points: 2 },
        { text: "It was part of Yugoslavia until 1992", points: 3 },
        {
          text: "The country has three main ethnic groups: Bosniaks, Croats, and Serbs",
          points: 5,
        },
        {
          text: "It is known for its historic Ottoman-style bridge, Stari Most",
          points: 7,
        },
        {
          text: "The 1984 Winter Olympics were held in this country",
          points: 10,
        },
        { text: "It suffered a major war in the 1990s", points: 12 },
        {
          text: "The currency used is the Bosnia and Herzegovina Convertible Mark (BAM)",
          points: 15,
        },
        {
          text: "The country has no coastline except for a 20 km stretch on the Adriatic Sea",
          points: 18,
        },
        {
          text: "It is known for its coffee culture and traditional ćevapi dish",
          points: 20,
        },
      ],
    },
    {
      difficulty: "medium",
      hints: [
        { text: "The Dayton Agreement ended its war in 1995", points: 1 },
        {
          text: "The country has a complex government system with two autonomous entities",
          points: 2,
        },
        {
          text: "The medieval stećci tombstones are a UNESCO heritage site",
          points: 4,
        },
        { text: "The Neretva River is famous for rafting", points: 6 },
        {
          text: "The country has a famous pyramid-like hill called the ‘Bosnian Pyramid’",
          points: 8,
        },
        {
          text: "Its national football team qualified for the 2014 FIFA World Cup",
          points: 10,
        },
        {
          text: "Sarajevo is sometimes called the 'Jerusalem of Europe'",
          points: 12,
        },
        {
          text: "The country’s landscapes were used as filming locations for Game of Thrones",
          points: 15,
        },
        {
          text: "Mostar is one of the most visited cities in the country",
          points: 18,
        },
        {
          text: "The country has a high number of medieval castles and fortresses",
          points: 20,
        },
      ],
    },
  ],
  BW: [
    {
      difficulty: "easy",
      hints: [
        { text: "This country is located in Southern Africa", points: 1 },
        { text: "Its capital city is Gaborone", points: 2 },
        { text: "It gained independence from Britain in 1966", points: 3 },
        { text: "The official language is English", points: 5 },
        { text: "It is one of Africa’s most stable democracies", points: 7 },
        { text: "The currency used is the Botswana Pula", points: 10 },
        {
          text: "It is known for its large population of elephants",
          points: 12,
        },
        {
          text: "The Okavango Delta is one of its most famous natural attractions",
          points: 15,
        },
        { text: "The Kalahari Desert covers much of this country", points: 18 },
        { text: "It is famous for its high-quality diamonds", points: 20 },
      ],
    },
    {
      difficulty: "medium",
      hints: [
        {
          text: "It has one of the highest GDPs per capita in Africa",
          points: 1,
        },
        {
          text: "The country is known for its commitment to wildlife conservation",
          points: 2,
        },
        {
          text: "It shares borders with Namibia, South Africa, Zimbabwe, and Zambia",
          points: 4,
        },
        { text: "It is home to the endangered African wild dog", points: 6 },
        {
          text: "Its national football team is called ‘The Zebras’",
          points: 8,
        },
        {
          text: "The Moremi Game Reserve is a top safari destination",
          points: 10,
        },
        {
          text: "The Setswana people are the largest ethnic group",
          points: 12,
        },
        {
          text: "The Makgadikgadi Pans are among the largest salt flats in the world",
          points: 15,
        },
        {
          text: "Botswana has a strong partnership with De Beers for diamond mining",
          points: 18,
        },
        {
          text: "The San people (Bushmen) have lived here for thousands of years",
          points: 20,
        },
      ],
    },
  ],
  BR: [
    {
      difficulty: "easy",
      hints: [
        { text: "This is the largest country in South America", points: 1 },
        { text: "Its capital city is Brasília", points: 2 },
        { text: "The official language is Portuguese", points: 3 },
        { text: "It is famous for the Amazon Rainforest", points: 5 },
        { text: "It hosted the FIFA World Cup in 2014", points: 7 },
        { text: "The currency used is the Brazilian Real", points: 10 },
        {
          text: "The Christ the Redeemer statue is a famous landmark",
          points: 12,
        },
        {
          text: "It is home to the Amazon River, one of the longest rivers in the world",
          points: 15,
        },
        { text: "The country has won the most FIFA World Cups", points: 18 },
        {
          text: "The Rio Carnival is one of the biggest festivals in the world",
          points: 20,
        },
      ],
    },
    {
      difficulty: "medium",
      hints: [
        {
          text: "It shares borders with almost every South American country",
          points: 1,
        },
        { text: "Its famous beach city is Rio de Janeiro", points: 2 },
        { text: "It has one of the largest economies in the world", points: 4 },
        { text: "It is the largest producer of coffee globally", points: 6 },
        {
          text: "The Pantanal is the world’s largest tropical wetland",
          points: 8,
        },
        { text: "Samba and Bossa Nova music originated here", points: 10 },
        { text: "The country was a Portuguese colony until 1822", points: 12 },
        { text: "São Paulo is its largest city", points: 15 },
        {
          text: "The Iguazu Falls are one of the largest waterfalls in the world",
          points: 18,
        },
        {
          text: "The country has five major regions: North, Northeast, Central-West, Southeast, and South",
          points: 20,
        },
      ],
    },
  ],
  BN: [
    {
      difficulty: "easy",
      hints: [
        { text: "This country is located on the island of Borneo", points: 1 },
        { text: "Its capital city is Bandar Seri Begawan", points: 2 },
        {
          text: "It is a small but wealthy country in Southeast Asia",
          points: 3,
        },
        { text: "The official language is Malay", points: 5 },
        { text: "The country is ruled by a Sultan", points: 7 },
        { text: "Oil and gas are the main sources of income", points: 10 },
        {
          text: "It is one of the least populated countries in Asia",
          points: 12,
        },
        {
          text: "It has one of the highest standards of living in the world",
          points: 15,
        },
        {
          text: "The Omar Ali Saifuddien Mosque is a major landmark",
          points: 18,
        },
        {
          text: "It is entirely surrounded by Malaysia, except for its coastline",
          points: 20,
        },
      ],
    },
    {
      difficulty: "medium",
      hints: [
        {
          text: "It gained independence from the United Kingdom in 1984",
          points: 1,
        },
        { text: "The country follows Sharia law for Muslims", points: 2 },
        {
          text: "The Sultan is one of the richest monarchs in the world",
          points: 4,
        },
        {
          text: "It has a rainforest that has been protected for centuries",
          points: 6,
        },
        { text: "Its economy heavily depends on petroleum exports", points: 8 },
        {
          text: "The country has a unique type of water village called Kampong Ayer",
          points: 10,
        },
        {
          text: "The Jerudong Park Playground was once a free amusement park",
          points: 12,
        },
        {
          text: "Its citizens receive free healthcare and education",
          points: 15,
        },
        {
          text: "The Ulu Temburong National Park is a protected rainforest area",
          points: 18,
        },
        { text: "It has no personal income tax", points: 20 },
      ],
    },
    {
      difficulty: "hard",
      hints: [
        {
          text: "The country’s name means 'Abode of Peace' in Malay",
          points: 1,
        },
        {
          text: "It was a British protectorate for almost 100 years",
          points: 2,
        },
        {
          text: "It has one of the highest car ownership rates per capita",
          points: 4,
        },
        {
          text: "Sultan Hassanal Bolkiah is one of the longest-serving monarchs",
          points: 6,
        },
        {
          text: "It has four districts: Brunei-Muara, Belait, Tutong, and Temburong",
          points: 8,
        },
        {
          text: "It has a 30km coastline along the South China Sea",
          points: 10,
        },
        { text: "The national airline is Royal Brunei Airlines", points: 12 },
        {
          text: "The country has a policy of banning alcohol sales",
          points: 15,
        },
        {
          text: "It has one of the lowest population densities in Asia",
          points: 18,
        },
        {
          text: "Brunei has a 'Vision 2035' plan to diversify its economy beyond oil",
          points: 20,
        },
      ],
    },
  ],
  BG: [
    {
      difficulty: "easy",
      hints: [
        { text: "This country is located in Eastern Europe", points: 1 },
        { text: "Its capital city is Sofia", points: 2 },
        { text: "The official language is Bulgarian", points: 3 },
        { text: "It is famous for its rose oil production", points: 5 },
        { text: "It has a coastline along the Black Sea", points: 7 },
        {
          text: "The country was part of the Eastern Bloc during the Cold War",
          points: 10,
        },
        { text: "The Cyrillic alphabet originated here", points: 12 },
        {
          text: "Rila Monastery is one of its most famous landmarks",
          points: 15,
        },
        {
          text: "The Thracians were an ancient civilization that lived here",
          points: 18,
        },
        {
          text: "The oldest known gold treasure was found in this country",
          points: 20,
        },
      ],
    },
    {
      difficulty: "medium",
      hints: [
        { text: "It was a kingdom until World War II", points: 1 },
        {
          text: "The Danube River forms part of its northern border",
          points: 2,
        },
        {
          text: "Plovdiv is one of the oldest continuously inhabited cities in Europe",
          points: 4,
        },
        {
          text: "The country produces some of the best yogurt in the world",
          points: 6,
        },
        {
          text: "It is home to the Belogradchik Rocks, a natural rock formation",
          points: 8,
        },
        { text: "Vitosha Mountain is near its capital", points: 10 },
        { text: "Bansko is a famous ski resort town", points: 12 },
        {
          text: "The country has a rich folklore tradition with distinctive music and dance",
          points: 15,
        },
        {
          text: "The Valley of the Thracian Kings contains ancient tombs",
          points: 18,
        },
        {
          text: "It is known for its mineral water and hot springs",
          points: 20,
        },
      ],
    },
    {
      difficulty: "hard",
      hints: [
        {
          text: "The Kukeri Festival features people wearing scary masks",
          points: 1,
        },
        {
          text: "Alexander Nevsky Cathedral is one of the largest Orthodox cathedrals in the Balkans",
          points: 2,
        },
        {
          text: "It was the only European country that protected its Jewish population during WWII",
          points: 4,
        },
        {
          text: "The Thracian Tomb of Kazanlak is a UNESCO heritage site",
          points: 6,
        },
        {
          text: "The Bulgarian Orthodox Church is one of the oldest in Europe",
          points: 8,
        },
        { text: "The country’s flag is white, green, and red", points: 10 },
        {
          text: "The Rose Festival in Kazanlak celebrates its famous rose oil production",
          points: 12,
        },
        {
          text: "It is home to one of the deepest caves in the world, Devil’s Throat",
          points: 15,
        },
        {
          text: "The Madara Rider is a medieval rock relief and UNESCO site",
          points: 18,
        },
        {
          text: "The country has more than 6,000 natural mineral springs",
          points: 20,
        },
      ],
    },
  ],
  BF: [
    {
      difficulty: "easy",
      hints: [
        { text: "This country is located in West Africa", points: 1 },
        { text: "Its capital city is Ouagadougou", points: 2 },
        { text: "The official language is French", points: 3 },
        { text: "It is a landlocked country", points: 5 },
        { text: "It was formerly called Upper Volta", points: 7 },
        {
          text: "The country is known for its vibrant music and arts scene",
          points: 10,
        },
        { text: "The Mossi people are the largest ethnic group", points: 12 },
        { text: "It is known for the FESPACO film festival", points: 15 },
        {
          text: "The country has a strong tradition of mask-making",
          points: 18,
        },
        {
          text: "The Sahel region covers a large part of this country",
          points: 20,
        },
      ],
    },
    {
      difficulty: "medium",
      hints: [
        { text: "It gained independence from France in 1960", points: 1 },
        { text: "Its currency is the West African CFA franc", points: 2 },
        {
          text: "The country has multiple nature reserves and parks",
          points: 4,
        },
        { text: "Gold mining is a major part of its economy", points: 6 },
        {
          text: "Thomas Sankara, a revolutionary leader, ruled here",
          points: 8,
        },
        {
          text: "Bobo-Dioulasso is the country's second-largest city",
          points: 10,
        },
        { text: "The country is home to the W National Park", points: 12 },
        {
          text: "It has a strong tradition of storytelling and griots",
          points: 15,
        },
        {
          text: "It has a large number of traditional mud-brick mosques",
          points: 18,
        },
        {
          text: "The country has experienced political instability in recent years",
          points: 20,
        },
      ],
    },
    {
      difficulty: "hard",
      hints: [
        { text: "It changed its name from Upper Volta in 1984", points: 1 },
        { text: "The name means 'Land of Honest People'", points: 2 },
        {
          text: "It has one of the highest birth rates in the world",
          points: 4,
        },
        {
          text: "The country is known for its popular dish, Riz Gras",
          points: 6,
        },
        { text: "The country has no direct access to the ocean", points: 8 },
        {
          text: "The country’s flag has red and green with a yellow star",
          points: 10,
        },
        {
          text: "The Domes of Fabedougou are a natural rock formation",
          points: 12,
        },
        {
          text: "It has one of the largest herds of elephants in West Africa",
          points: 15,
        },
        {
          text: "The country was once part of the Mali and Songhai Empires",
          points: 18,
        },
        {
          text: "The local greeting 'Na y windé' means 'Good morning' in Moore",
          points: 20,
        },
      ],
    },
  ],
  BI: [
    {
      difficulty: "easy",
      hints: [
        { text: "This country is located in East Africa", points: 1 },
        { text: "Its capital city is Gitega", points: 2 },
        {
          text: "The official languages are Kirundi, French, and English",
          points: 3,
        },
        { text: "It is one of the smallest countries in Africa", points: 5 },
        { text: "It is a landlocked country", points: 7 },
        { text: "Lake Tanganyika borders this country", points: 10 },
        {
          text: "It shares borders with Rwanda, Tanzania, and the Democratic Republic of Congo",
          points: 12,
        },
        { text: "Burundi is known for its drumming tradition", points: 15 },
        {
          text: "It has a history of ethnic conflicts between Hutus and Tutsis",
          points: 18,
        },
        {
          text: "Coffee and tea are major exports of this country",
          points: 20,
        },
      ],
    },
    {
      difficulty: "medium",
      hints: [
        { text: "It gained independence from Belgium in 1962", points: 1 },
        { text: "Bujumbura was the capital until 2019", points: 2 },
        { text: "The country’s currency is the Burundian franc", points: 4 },
        {
          text: "It has one of the highest population densities in Africa",
          points: 6,
        },
        { text: "Kibira National Park is a major natural reserve", points: 8 },
        { text: "The ruling monarchy was abolished in 1966", points: 10 },
        {
          text: "It has a tropical climate with a long rainy season",
          points: 12,
        },
        {
          text: "It has one of the lowest GDPs per capita in the world",
          points: 15,
        },
        {
          text: "The country has a traditional cattle culture, with long-horned Ankole cows",
          points: 18,
        },
        {
          text: "Its national dish is Ugali, a maize-based porridge",
          points: 20,
        },
      ],
    },
    {
      difficulty: "hard",
      hints: [
        { text: "The national motto is 'Unity, Work, Progress'", points: 1 },
        {
          text: "It is sometimes called 'The Heart of Africa' due to its shape",
          points: 2,
        },
        {
          text: "The country’s flag has red, green, and white with three stars",
          points: 4,
        },
        { text: "The drummers of Gitega are world-famous", points: 6 },
        {
          text: "The Twa people are one of the indigenous groups here",
          points: 8,
        },
        { text: "Burundi has no railway system", points: 10 },
        { text: "Mount Heha is the highest point in the country", points: 12 },
        {
          text: "It is a member of the East African Community (EAC)",
          points: 15,
        },
        {
          text: "The Ruvubu River is the longest river in the country",
          points: 18,
        },
        {
          text: "It was once part of the German colony of Ruanda-Urundi",
          points: 20,
        },
      ],
    },
  ],
  KH: [
    {
      difficulty: "easy",
      hints: [
        { text: "This country is in Southeast Asia", points: 1 },
        { text: "Its capital city is Phnom Penh", points: 2 },
        { text: "The official language is Khmer", points: 3 },
        {
          text: "Angkor Wat, the largest religious monument in the world, is here",
          points: 5,
        },
        { text: "The country was once ruled by the Khmer Empire", points: 7 },
        {
          text: "It shares borders with Thailand, Laos, and Vietnam",
          points: 10,
        },
        { text: "The Mekong River flows through this country", points: 12 },
        { text: "The national currency is the Riel", points: 15 },
        {
          text: "The country was heavily affected by the Khmer Rouge regime",
          points: 18,
        },
        {
          text: "Tonlé Sap is the largest freshwater lake in this country",
          points: 20,
        },
      ],
    },
    {
      difficulty: "medium",
      hints: [
        { text: "It gained independence from France in 1953", points: 1 },
        {
          text: "The country is known for traditional Apsara dance",
          points: 2,
        },
        { text: "Rice is a staple food in this country", points: 4 },
        { text: "The national flag features Angkor Wat", points: 6 },
        { text: "The country has a famous temple called Ta Prohm", points: 8 },
        { text: "It has a coastline along the Gulf of Thailand", points: 10 },
        { text: "Bokor Hill Station is a famous abandoned site", points: 12 },
        { text: "The Killing Fields are a tragic historical site", points: 15 },
        {
          text: "Cambodian riel is rarely used, as the US dollar is widely accepted",
          points: 18,
        },
        { text: "The Silver Pagoda is part of the Royal Palace", points: 20 },
      ],
    },
    {
      difficulty: "hard",
      hints: [
        { text: "The Khmer language has its own unique script", points: 1 },
        {
          text: "It has one of the longest-running monarchies in Asia",
          points: 2,
        },
        {
          text: "The Cardamom Mountains are a major natural feature",
          points: 4,
        },
        {
          text: "The country has one of the youngest populations in Southeast Asia",
          points: 6,
        },
        { text: "Sihanoukville is a major coastal city", points: 8 },
        {
          text: "The Bokor National Park is known for its wildlife",
          points: 10,
        },
        { text: "The Khmer Rouge regime lasted from 1975 to 1979", points: 12 },
        {
          text: "It has one of the fastest-growing economies in the region",
          points: 15,
        },
        { text: "Samlor korkor is a famous Cambodian soup", points: 18 },
        {
          text: "Norodom Sihanouk was a key figure in Cambodia’s modern history",
          points: 20,
        },
      ],
    },
  ],
  CM: [
    {
      difficulty: "easy",
      hints: [
        { text: "This country is in Central Africa", points: 1 },
        { text: "Its capital city is Yaoundé", points: 2 },
        { text: "The largest city is Douala", points: 3 },
        {
          text: "It is sometimes called 'Africa in Miniature' due to its diversity",
          points: 5,
        },
        {
          text: "Mount Cameroon is the highest mountain in West and Central Africa",
          points: 7,
        },
        {
          text: "It has both French and English as official languages",
          points: 10,
        },
        {
          text: "The country has a coastline along the Atlantic Ocean",
          points: 12,
        },
        {
          text: "It has diverse wildlife, including gorillas and elephants",
          points: 15,
        },
        {
          text: "It has won the African Cup of Nations multiple times",
          points: 18,
        },
        {
          text: "The Waza National Park is a major tourist attraction",
          points: 20,
        },
      ],
    },
    {
      difficulty: "medium",
      hints: [
        {
          text: "It gained independence from France and the UK in 1960",
          points: 1,
        },
        {
          text: "The country's currency is the Central African CFA franc",
          points: 2,
        },
        { text: "It has multiple UNESCO World Heritage Sites", points: 4 },
        { text: "The Sanaga River is the longest in the country", points: 6 },
        { text: "The country has an active volcano", points: 8 },
        {
          text: "Its national football team is known as the Indomitable Lions",
          points: 10,
        },
        {
          text: "Foumban is a cultural center for the Bamoun people",
          points: 12,
        },
        { text: "Ndolé is a traditional dish", points: 15 },
        {
          text: "It has one of the richest music scenes in Africa",
          points: 18,
        },
        {
          text: "The country has many ethnic groups, including the Fulani and Bamileke",
          points: 20,
        },
      ],
    },
  ],
  CA: [
    {
      difficulty: "easy",
      hints: [
        { text: "This country is in North America", points: 1 },
        { text: "Its capital city is Ottawa", points: 2 },
        {
          text: "It is the second-largest country in the world by land area",
          points: 3,
        },
        { text: "Its national animal is the beaver", points: 5 },
        { text: "The national sport is ice hockey", points: 7 },
        {
          text: "It has two official languages: English and French",
          points: 10,
        },
        {
          text: "The CN Tower is one of its most famous landmarks",
          points: 12,
        },
        {
          text: "It shares the longest international border with the United States",
          points: 15,
        },
        { text: "Niagara Falls is a popular tourist destination", points: 18 },
        { text: "Its flag features a red maple leaf", points: 20 },
      ],
    },
    {
      difficulty: "medium",
      hints: [
        { text: "It has ten provinces and three territories", points: 1 },
        { text: "It was part of the British Empire until 1867", points: 2 },
        { text: "The Rocky Mountains run through this country", points: 4 },
        { text: "The northern part is covered by the Arctic", points: 6 },
        { text: "Poutine is a popular Canadian dish", points: 8 },
        { text: "It has the longest coastline in the world", points: 10 },
        {
          text: "The country is known for its maple syrup production",
          points: 12,
        },
        { text: "Toronto is the largest city", points: 15 },
        {
          text: "It is home to the world's longest street, Yonge Street",
          points: 18,
        },
        {
          text: "The national police force is the Royal Canadian Mounted Police (RCMP)",
          points: 20,
        },
      ],
    },
  ],
  CF: [
    {
      difficulty: "easy",
      hints: [
        { text: "This country is located in Central Africa", points: 1 },
        { text: "Its capital city is Bangui", points: 2 },
        { text: "The official language is French", points: 3 },
        { text: "It is a landlocked country", points: 5 },
        {
          text: "It borders Chad, Sudan, South Sudan, and four other countries",
          points: 7,
        },
        {
          text: "The national currency is the Central African CFA franc",
          points: 10,
        },
        { text: "It is known for the Dzanga-Sangha National Park", points: 12 },
        {
          text: "It is rich in natural resources such as diamonds and gold",
          points: 15,
        },
        { text: "The Ubangi River forms part of its border", points: 18 },
        { text: "It was a French colony until 1960", points: 20 },
      ],
    },
    {
      difficulty: "medium",
      hints: [
        {
          text: "It has one of the lowest GDPs per capita in the world",
          points: 1,
        },
        { text: "The country is home to the pygmy people", points: 2 },
        { text: "It has six major national parks", points: 4 },
        {
          text: "It has suffered from multiple coups and political instability",
          points: 6,
        },
        { text: "Bamingui-Bangoran National Park is located here", points: 8 },
        {
          text: "The country’s rainforest covers a significant portion of its land",
          points: 10,
        },
        { text: "Sango is another official language", points: 12 },
        {
          text: "Its wildlife includes forest elephants and lowland gorillas",
          points: 15,
        },
        { text: "It was formerly known as Ubangi-Shari", points: 18 },
        {
          text: "The country has one of the lowest human development indexes",
          points: 20,
        },
      ],
    },
  ],
  TD: [
    {
      difficulty: "easy",
      hints: [
        { text: "This country is in Central Africa", points: 1 },
        { text: "Its capital city is N'Djamena", points: 2 },
        { text: "It is named after a large lake", points: 3 },
        { text: "The official languages are French and Arabic", points: 5 },
        { text: "It is landlocked", points: 7 },
        {
          text: "It shares borders with Libya, Sudan, and four other countries",
          points: 10,
        },
        { text: "It is one of the hottest countries in the world", points: 12 },
        { text: "The Sahara Desert covers much of its territory", points: 15 },
        {
          text: "The national currency is the Central African CFA franc",
          points: 18,
        },
        { text: "It gained independence from France in 1960", points: 20 },
      ],
    },
    {
      difficulty: "medium",
      hints: [
        { text: "The Tibesti Mountains are located in the north", points: 1 },
        { text: "It has over 200 ethnic groups", points: 2 },
        { text: "The country is rich in oil resources", points: 4 },
        { text: "It has been affected by civil wars and conflicts", points: 6 },
        {
          text: "The Ennedi Plateau is a UNESCO World Heritage site",
          points: 8,
        },
        { text: "Lake Chad is shrinking due to climate change", points: 10 },
        { text: "Chadian Arabic is a widely spoken dialect", points: 12 },
        { text: "Saharan dust storms are common in the country", points: 15 },
        { text: "The country has a large nomadic population", points: 18 },
        {
          text: "The Zakouma National Park is known for wildlife conservation",
          points: 20,
        },
      ],
    },
  ],
  CL: [
    {
      difficulty: "easy",
      hints: [
        { text: "This country is in South America", points: 1 },
        { text: "Its capital city is Santiago", points: 2 },
        { text: "The official language is Spanish", points: 3 },
        {
          text: "It is one of the longest north-to-south countries in the world",
          points: 5,
        },
        { text: "It borders Argentina, Bolivia, and Peru", points: 7 },
        {
          text: "The Andes Mountains run along its entire eastern border",
          points: 10,
        },
        { text: "It is famous for its wine production", points: 12 },
        { text: "It has a large desert called the Atacama Desert", points: 15 },
        {
          text: "Easter Island, known for its Moai statues, belongs to this country",
          points: 18,
        },
        { text: "It has a long coastline along the Pacific Ocean", points: 20 },
      ],
    },
    {
      difficulty: "medium",
      hints: [
        { text: "It was once ruled by dictator Augusto Pinochet", points: 1 },
        { text: "The country experiences many earthquakes", points: 2 },
        { text: "It is a major producer of copper", points: 4 },
        { text: "The national currency is the Chilean peso", points: 6 },
        {
          text: "The country has a strong economy in Latin America",
          points: 8,
        },
        { text: "The Mapuche are the largest indigenous group", points: 10 },
        { text: "It has a strong presence in Antarctic research", points: 12 },
        {
          text: "The Los Lagos region is famous for its lakes and volcanoes",
          points: 15,
        },
        {
          text: "The country has one of the driest places on Earth",
          points: 18,
        },
        { text: "The Humboldt Current affects its climate", points: 20 },
      ],
    },
  ],
  CN: [
    {
      difficulty: "easy",
      hints: [
        { text: "This country is in East Asia", points: 1 },
        { text: "It has the largest population in the world", points: 2 },
        { text: "The capital city is Beijing", points: 3 },
        { text: "Its official language is Mandarin", points: 5 },
        { text: "It is home to the Great Wall", points: 7 },
        { text: "The national currency is the yuan (CNY)", points: 10 },
        { text: "Shanghai is its largest city", points: 12 },
        { text: "It hosted the 2008 and 2022 Olympics", points: 15 },
        { text: "It has the world’s second-largest economy", points: 18 },
        { text: "The Forbidden City is a famous landmark here", points: 20 },
      ],
    },
    {
      difficulty: "medium",
      hints: [
        { text: "It has 56 recognized ethnic groups", points: 1 },
        { text: "The Yangtze is its longest river", points: 2 },
        { text: "It shares borders with 14 countries", points: 4 },
        { text: "The Terracotta Army was discovered here", points: 6 },
        { text: "Peking duck is a famous dish", points: 8 },
        { text: "The Silk Road historically passed through here", points: 10 },
        { text: "It has the largest high-speed rail network", points: 12 },
        { text: "The panda is a national symbol", points: 15 },
        {
          text: "It has multiple time zones but follows one official time",
          points: 18,
        },
        {
          text: "The Hong Kong-Zhuhai-Macau Bridge is the world’s longest sea bridge",
          points: 20,
        },
      ],
    },
  ],
  CO: [
    {
      difficulty: "easy",
      hints: [
        { text: "This country is in South America", points: 1 },
        { text: "Its capital city is Bogotá", points: 2 },
        { text: "The official language is Spanish", points: 3 },
        { text: "It is famous for its coffee", points: 5 },
        { text: "It is the world’s largest exporter of emeralds", points: 7 },
        {
          text: "It has coastlines on both the Pacific and Atlantic Oceans",
          points: 10,
        },
        { text: "Shakira and Maluma are from this country", points: 12 },
        {
          text: "It was the home of the ancient Muisca civilization",
          points: 15,
        },
        {
          text: "It borders five countries, including Venezuela and Brazil",
          points: 18,
        },
        { text: "The famous 'Lost City' is located here", points: 20 },
      ],
    },
    {
      difficulty: "medium",
      hints: [
        {
          text: "It is the only South American country with islands in the Caribbean",
          points: 1,
        },
        {
          text: "Gabriel García Márquez, a famous writer, was born here",
          points: 2,
        },
        { text: "The Andean condor is its national bird", points: 4 },
        { text: "The Magdalena River is its longest river", points: 6 },
        { text: "It has a famous Carnival in Barranquilla", points: 8 },
        {
          text: "Its national soccer team won the Copa América in 2001",
          points: 10,
        },
        { text: "It is home to the Amazon Rainforest", points: 12 },
        { text: "The Salt Cathedral of Zipaquirá is located here", points: 15 },
        { text: "It is known for Arepas and Ajiaco", points: 18 },
        {
          text: "The Caño Cristales River is known as the 'River of Five Colors'",
          points: 20,
        },
      ],
    },
  ],
  KM: [
    {
      difficulty: "easy",
      hints: [
        {
          text: "This country is an island nation in the Indian Ocean",
          points: 1,
        },
        { text: "Its capital city is Moroni", points: 2 },
        { text: "It consists of four major islands", points: 3 },
        { text: "It is located between Madagascar and Mozambique", points: 5 },
        { text: "The official languages include Arabic and French", points: 7 },
        { text: "It is one of the smallest African nations", points: 10 },
        {
          text: "It has active volcanoes, including Mount Karthala",
          points: 12,
        },
        { text: "It gained independence from France in 1975", points: 15 },
        {
          text: "Its economy relies on vanilla and ylang-ylang production",
          points: 18,
        },
        {
          text: "It is one of the least visited countries in the world",
          points: 20,
        },
      ],
    },
    {
      difficulty: "medium",
      hints: [
        { text: "It is part of the African Union", points: 1 },
        { text: "It has been affected by political instability", points: 2 },
        { text: "The Comorian franc is its currency", points: 4 },
        {
          text: "It has one of the youngest populations in the world",
          points: 6,
        },
        {
          text: "It has strong cultural ties to Swahili and Arab influences",
          points: 8,
        },
        { text: "It is sometimes called the 'Perfume Islands'", points: 10 },
        {
          text: "The island of Mayotte is still controlled by France",
          points: 12,
        },
        { text: "It has no railways", points: 15 },
        {
          text: "It has a legal system based on Islamic law and French civil law",
          points: 18,
        },
        { text: "It has over 20 species of endangered birds", points: 20 },
      ],
    },
  ],
  CG: [
    {
      difficulty: "easy",
      hints: [
        { text: "This country is in Central Africa", points: 1 },
        { text: "Its capital city is Brazzaville", points: 2 },
        {
          text: "It shares a name with a larger neighboring country",
          points: 3,
        },
        { text: "The official language is French", points: 5 },
        { text: "It is located on the Congo River", points: 7 },
        { text: "It gained independence from France in 1960", points: 10 },
        {
          text: "It is home to the second-largest rainforest in the world",
          points: 12,
        },
        { text: "The economy relies heavily on oil exports", points: 15 },
        { text: "The currency is the Central African CFA franc", points: 18 },
        {
          text: "Brazzaville is directly across the river from Kinshasa",
          points: 20,
        },
      ],
    },
    {
      difficulty: "medium",
      hints: [
        { text: "It is sometimes referred to as Congo-Brazzaville", points: 1 },
        {
          text: "The country is known for its diverse wildlife, including gorillas",
          points: 2,
        },
        { text: "It has a long Atlantic coastline", points: 4 },
        { text: "The country’s largest river is the Congo River", points: 6 },
        {
          text: "The Pointe-Noire region is known for its oil reserves",
          points: 8,
        },
        {
          text: "It was formerly a part of French Equatorial Africa",
          points: 10,
        },
        { text: "The Odzala-Kokoua National Park is located here", points: 12 },
        {
          text: "It has one of the largest hydroelectric dams in Africa",
          points: 15,
        },
        { text: "The country has had periods of civil unrest", points: 18 },
        {
          text: "It has one of the least densely populated capitals in Africa",
          points: 20,
        },
      ],
    },
  ],
  CR: [
    {
      difficulty: "easy",
      hints: [
        { text: "This country is in Central America", points: 1 },
        { text: "Its capital city is San José", points: 2 },
        { text: "It is known for its rich biodiversity", points: 3 },
        { text: "The official language is Spanish", points: 5 },
        { text: "It does not have a standing army", points: 7 },
        { text: "It is famous for its coffee production", points: 10 },
        {
          text: "It has coastlines on both the Pacific Ocean and the Caribbean Sea",
          points: 12,
        },
        { text: "It is known for eco-tourism", points: 15 },
        { text: "The national currency is the colón", points: 18 },
        { text: "Its motto is 'Pura Vida'", points: 20 },
      ],
    },
    {
      difficulty: "medium",
      hints: [
        { text: "It has a strong focus on renewable energy", points: 1 },
        { text: "The country has numerous active volcanoes", points: 2 },
        { text: "It has a strong democracy and stable government", points: 4 },
        {
          text: "Tortuguero National Park is famous for sea turtles",
          points: 6,
        },
        {
          text: "It has the highest literacy rate in Central America",
          points: 8,
        },
        {
          text: "The Nicoya Peninsula is one of the world's 'Blue Zones'",
          points: 10,
        },
        { text: "Monteverde is known for its cloud forests", points: 12 },
        { text: "It is home to the famous Arenal Volcano", points: 15 },
        { text: "The country has a significant sloth population", points: 18 },
        {
          text: "It has hosted UN peacekeeping efforts in Latin America",
          points: 20,
        },
      ],
    },
  ],
  HR: [
    {
      difficulty: "easy",
      hints: [
        { text: "This country is in Europe", points: 1 },
        { text: "Its capital city is Zagreb", points: 2 },
        { text: "It is known for its stunning Adriatic coastline", points: 3 },
        { text: "The official language is Croatian", points: 5 },
        { text: "It was once part of Yugoslavia", points: 7 },
        { text: "It is famous for Plitvice Lakes National Park", points: 10 },
        { text: "It is known for the walled city of Dubrovnik", points: 12 },
        {
          text: "The national currency was the kuna before switching to the euro",
          points: 15,
        },
        { text: "It has over 1,000 islands", points: 18 },
        { text: "It gained independence in 1991", points: 20 },
      ],
    },
    {
      difficulty: "medium",
      hints: [
        {
          text: "It has one of the world’s smallest populations for a World Cup finalist",
          points: 1,
        },
        {
          text: "It has a high number of UNESCO World Heritage Sites",
          points: 2,
        },
        { text: "The country has a rich Roman history", points: 4 },
        {
          text: "It has hosted many Game of Thrones filming locations",
          points: 6,
        },
        {
          text: "The Istrian Peninsula is a famous tourist destination",
          points: 8,
        },
        { text: "It has a border with Slovenia and Hungary", points: 10 },
        { text: "It is famous for its olive oil and truffles", points: 12 },
        { text: "It has a Mediterranean and continental climate", points: 15 },
        {
          text: "The Dalmatian Coast is a major cruise destination",
          points: 18,
        },
        {
          text: "It has an island known as Hvar, a famous luxury destination",
          points: 20,
        },
      ],
    },
  ],
  CU: [
    {
      difficulty: "easy",
      hints: [
        { text: "This country is in the Caribbean", points: 1 },
        { text: "Its capital city is Havana", points: 2 },
        { text: "It is the largest island in the Caribbean", points: 3 },
        { text: "The official language is Spanish", points: 5 },
        { text: "It is famous for cigars", points: 7 },
        { text: "It has a communist government", points: 10 },
        { text: "It was led by Fidel Castro for decades", points: 12 },
        { text: "The Bay of Pigs invasion happened here", points: 15 },
        { text: "It is known for vintage American cars", points: 18 },
        {
          text: "It has a major influence on salsa and Latin music",
          points: 20,
        },
      ],
    },
    {
      difficulty: "medium",
      hints: [
        {
          text: "It has a trade embargo imposed by the United States",
          points: 1,
        },
        { text: "The Cuban Missile Crisis took place here", points: 2 },
        { text: "The country has a dual-currency system", points: 4 },
        { text: "It was a Spanish colony until 1898", points: 6 },
        { text: "Guantanamo Bay is located here", points: 8 },
        { text: "The Tropicana Club is a famous attraction", points: 10 },
        {
          text: "It has one of the highest literacy rates in the world",
          points: 12,
        },
        { text: "It produces a world-famous rum", points: 15 },
        { text: "The national sport is baseball", points: 18 },
        { text: "Ernest Hemingway lived here for many years", points: 20 },
      ],
    },
  ],
  CY: [
    {
      difficulty: "easy",
      hints: [
        { text: "This country is an island in the Mediterranean", points: 1 },
        { text: "Its capital city is Nicosia", points: 2 },
        { text: "It has both Greek and Turkish influences", points: 3 },
        { text: "The official languages are Greek and Turkish", points: 5 },
        { text: "It is divided into two parts", points: 7 },
        { text: "It is famous for its beaches and ancient ruins", points: 10 },
        { text: "It is a member of the European Union", points: 12 },
        { text: "The Aphrodite’s Rock is a popular attraction", points: 15 },
        { text: "It uses the Euro as its currency", points: 18 },
        {
          text: "It has one of the oldest wine-making traditions in the world",
          points: 20,
        },
      ],
    },
    {
      difficulty: "medium",
      hints: [
        { text: "It was once part of the British Empire", points: 1 },
        { text: "The northern part is controlled by Turkey", points: 2 },
        { text: "It has the last divided capital city in Europe", points: 4 },
        { text: "It is known for the Halloumi cheese", points: 6 },
        {
          text: "The country’s flag features a map of its territory",
          points: 8,
        },
        { text: "It was the setting for ancient Greek mythology", points: 10 },
        { text: "It has British military bases on its territory", points: 12 },
        { text: "The Troodos Mountains are located here", points: 15 },
        {
          text: "It has a UN buffer zone separating the two parts",
          points: 18,
        },
        {
          text: "The city of Paphos is a UNESCO World Heritage Site",
          points: 20,
        },
      ],
    },
  ],
  CZ: [
    {
      difficulty: "easy",
      hints: [
        { text: "This country is in Central Europe", points: 1 },
        { text: "Its capital city is Prague", points: 2 },
        { text: "It was once part of Czechoslovakia", points: 3 },
        { text: "The official language is Czech", points: 5 },
        { text: "It is famous for its castles and medieval towns", points: 7 },
        { text: "It is known for its beer culture", points: 10 },
        {
          text: "It has one of the largest castle complexes in the world",
          points: 12,
        },
        { text: "The Charles Bridge is a famous landmark", points: 15 },
        { text: "It became independent in 1993", points: 18 },
        { text: "It is known for its thermal spa towns", points: 20 },
      ],
    },
    {
      difficulty: "medium",
      hints: [
        { text: "The currency is the Czech koruna", points: 1 },
        { text: "It is home to the Astronomical Clock", points: 2 },
        { text: "Franz Kafka, a famous writer, was born here", points: 4 },
        {
          text: "It has a strong glass and crystal-making tradition",
          points: 6,
        },
        { text: "The Velvet Revolution happened here", points: 8 },
        {
          text: "It is famous for Karlovy Vary, a famous spa town",
          points: 10,
        },
        {
          text: "It has a unique Christmas tradition involving carp",
          points: 12,
        },
        { text: "The Bohemian Switzerland National Park is here", points: 15 },
        { text: "It has the highest beer consumption per capita", points: 18 },
        { text: "It is home to Český Krumlov, a fairy-tale town", points: 20 },
      ],
    },
  ],
  CD: [
    {
      difficulty: "easy",
      hints: [
        { text: "This country is in Central Africa", points: 1 },
        { text: "Its capital city is Kinshasa", points: 2 },
        { text: "It is the second-largest country in Africa", points: 3 },
        { text: "The official language is French", points: 5 },
        { text: "It was formerly known as Zaire", points: 7 },
        { text: "It is home to the Congo River", points: 10 },
        {
          text: "The country is rich in minerals like cobalt and diamonds",
          points: 12,
        },
        { text: "It shares its name with a neighboring country", points: 15 },
        { text: "It has the world’s second-largest rainforest", points: 18 },
        { text: "It gained independence from Belgium in 1960", points: 20 },
      ],
    },
    {
      difficulty: "medium",
      hints: [
        {
          text: "The country has experienced long periods of conflict",
          points: 1,
        },
        { text: "It is home to the endangered mountain gorillas", points: 2 },
        { text: "The currency is the Congolese franc", points: 4 },
        { text: "It has nine neighboring countries", points: 6 },
        { text: "The Virunga National Park is located here", points: 8 },
        { text: "It has one of the largest populations in Africa", points: 10 },
        {
          text: "The country has a major hydroelectric dam project",
          points: 12,
        },
        { text: "The famous Inga Falls are here", points: 15 },
        { text: "It was ruled by Mobutu Sese Seko for decades", points: 18 },
        {
          text: "Kinshasa is directly across the river from Brazzaville",
          points: 20,
        },
      ],
    },
  ],
  DK: [
    {
      difficulty: "easy",
      hints: [
        { text: "This country is in Northern Europe", points: 1 },
        { text: "Its capital city is Copenhagen", points: 2 },
        { text: "It is part of Scandinavia", points: 3 },
        { text: "The official language is Danish", points: 5 },
        { text: "It is known for its Viking history", points: 7 },
        { text: "It is home to the Little Mermaid statue", points: 10 },
        { text: "It has a monarchy", points: 12 },
        { text: "It is connected to Sweden by a bridge", points: 15 },
        { text: "It is famous for LEGO", points: 18 },
        { text: "Hans Christian Andersen was born here", points: 20 },
      ],
    },
    {
      difficulty: "medium",
      hints: [
        { text: "It has the oldest flag in the world still in use", points: 1 },
        { text: "The country has a high happiness index", points: 2 },
        { text: "Greenland is a part of this kingdom", points: 4 },
        { text: "It has a large number of islands", points: 6 },
        { text: "The country has a strong cycling culture", points: 8 },
        { text: "The Tivoli Gardens amusement park is here", points: 10 },
        {
          text: "It has a famous open-faced sandwich called Smørrebrød",
          points: 12,
        },
        {
          text: "It was once the center of a powerful Viking empire",
          points: 15,
        },
        {
          text: "It has one of the oldest amusement parks in the world",
          points: 18,
        },
        { text: "The Oresund Bridge connects it to Sweden", points: 20 },
      ],
    },
  ],
  DJ: [
    {
      difficulty: "easy",
      hints: [
        { text: "This country is in East Africa", points: 1 },
        {
          text: "Its capital city shares the same name as the country",
          points: 2,
        },
        { text: "It is located on the Horn of Africa", points: 3 },
        { text: "The official languages are French and Arabic", points: 5 },
        { text: "It is one of the smallest countries in Africa", points: 7 },
        { text: "It is a key port for global trade", points: 10 },
        {
          text: "It is home to Lake Assal, one of the saltiest lakes in the world",
          points: 12,
        },
        {
          text: "It has a strategic location at the entrance of the Red Sea",
          points: 15,
        },
        { text: "It is a major hub for foreign military bases", points: 18 },
        { text: "It gained independence from France in 1977", points: 20 },
      ],
    },
    {
      difficulty: "medium",
      hints: [
        {
          text: "It has volcanic landscapes and geothermal activity",
          points: 1,
        },
        { text: "It has one of the lowest populations in Africa", points: 2 },
        { text: "The currency is the Djiboutian franc", points: 4 },
        {
          text: "It has a strong relationship with the United States and China",
          points: 6,
        },
        {
          text: "It is a gateway for ships passing through the Suez Canal",
          points: 8,
        },
        { text: "The Gulf of Aden borders this country", points: 10 },
        { text: "It has a semi-desert climate", points: 12 },
        { text: "It is known for its nomadic culture", points: 15 },
        { text: "The country’s railway connects to Ethiopia", points: 18 },
        { text: "It has one of the lowest GDPs in the world", points: 20 },
      ],
    },
  ],
  DM: [
    {
      difficulty: "easy",
      hints: [
        { text: "This country is an island in the Caribbean", points: 1 },
        { text: "Its capital city is Roseau", points: 2 },
        {
          text: "It is known as the 'Nature Island of the Caribbean'",
          points: 3,
        },
        { text: "It has a large number of rivers and waterfalls", points: 5 },
        { text: "The official language is English", points: 7 },
        {
          text: "It is home to the world's second-largest boiling lake",
          points: 10,
        },
        {
          text: "It was colonized by both the French and the British",
          points: 12,
        },
        {
          text: "It is one of the youngest islands in the Caribbean",
          points: 15,
        },
        {
          text: "It has one of the highest populations of centenarians",
          points: 18,
        },
        { text: "It gained independence from the UK in 1978", points: 20 },
      ],
    },
  ],
  DO: [
    {
      difficulty: "easy",
      hints: [
        { text: "This country is on the island of Hispaniola", points: 1 },
        { text: "Its capital city is Santo Domingo", points: 2 },
        { text: "It shares a border with Haiti", points: 3 },
        { text: "The official language is Spanish", points: 5 },
        { text: "It is famous for its beaches and resorts", points: 7 },
        {
          text: "It was the first European colony in the Americas",
          points: 10,
        },
        { text: "Baseball is the most popular sport here", points: 12 },
        { text: "Merengue and Bachata music originated here", points: 15 },
        { text: "Christopher Columbus landed here in 1492", points: 18 },
        {
          text: "It has the tallest mountain in the Caribbean, Pico Duarte",
          points: 20,
        },
      ],
    },
  ],
  EC: [
    {
      difficulty: "easy",
      hints: [
        { text: "This country is in South America", points: 1 },
        { text: "Its capital city is Quito", points: 2 },
        { text: "It is named after the equator", points: 3 },
        { text: "The official language is Spanish", points: 5 },
        { text: "The US dollar is its official currency", points: 7 },
        { text: "It is home to the Galápagos Islands", points: 10 },
        { text: "It has the highest capital city in the world", points: 12 },
        {
          text: "It is one of the most biodiverse countries on Earth",
          points: 15,
        },
        { text: "It has the Mitad del Mundo monument", points: 18 },
        { text: "It was once part of the Inca Empire", points: 20 },
      ],
    },
  ],
  EG: [
    {
      difficulty: "easy",
      hints: [
        { text: "This country is in North Africa", points: 1 },
        { text: "Its capital city is Cairo", points: 2 },
        { text: "It is home to the Pyramids of Giza", points: 3 },
        { text: "The official language is Arabic", points: 5 },
        { text: "The Nile River runs through this country", points: 7 },
        {
          text: "It has one of the oldest civilizations in the world",
          points: 10,
        },
        { text: "The Great Sphinx is located here", points: 12 },
        { text: "It was ruled by Pharaohs in ancient times", points: 15 },
        {
          text: "It has a famous canal that connects the Mediterranean to the Red Sea",
          points: 18,
        },
        { text: "The official currency is the Egyptian pound", points: 20 },
      ],
    },
    {
      difficulty: "medium",
      hints: [
        { text: "The ancient city of Thebes was located here", points: 1 },
        {
          text: "It has one of the oldest universities in the world, Al-Azhar University",
          points: 2,
        },
        { text: "It shares borders with Sudan, Libya, and Israel", points: 3 },
        { text: "Alexandria was once a major center of knowledge", points: 5 },
        {
          text: "The Red Sea resorts are famous tourist destinations",
          points: 7,
        },
        {
          text: "It was once ruled by Ottoman and British Empires",
          points: 10,
        },
        {
          text: "The Valley of the Kings contains many Pharaoh tombs",
          points: 12,
        },
        { text: "It has a large Coptic Christian population", points: 15 },
        {
          text: "The Aswan High Dam controls the flow of the Nile",
          points: 18,
        },
        { text: "It became a republic in 1953", points: 20 },
      ],
    },
    {
      difficulty: "hard",
      hints: [
        {
          text: "Hieroglyphics was the ancient writing system used here",
          points: 1,
        },
        { text: "It was invaded by Napoleon in 1798", points: 2 },
        { text: "The Rosetta Stone was discovered here", points: 3 },
        { text: "The last queen of this country was Cleopatra", points: 5 },
        { text: "It was called 'Kemet' in ancient times", points: 7 },
        {
          text: "Its Sinai Peninsula is the only part of the country in Asia",
          points: 10,
        },
        { text: "King Tutankhamun’s tomb was discovered here", points: 12 },
        {
          text: "It was part of the Arab Spring uprisings in 2011",
          points: 15,
        },
        {
          text: "It has one of the largest metro systems in Africa",
          points: 18,
        },
        { text: "The flag contains an eagle in the center", points: 20 },
      ],
    },
  ],
  SV: [
    {
      difficulty: "easy",
      hints: [
        { text: "This country is in Central America", points: 1 },
        { text: "Its capital city is San Salvador", points: 2 },
        { text: "It is the smallest country in Central America", points: 3 },
        { text: "The official language is Spanish", points: 5 },
        { text: "The US dollar is its official currency", points: 7 },
        { text: "It has many active volcanoes", points: 10 },
        { text: "It is known for its coffee production", points: 12 },
        { text: "Pupusas are a traditional food here", points: 15 },
        { text: "It does not have a Caribbean coastline", points: 18 },
        {
          text: "It was part of the Spanish Empire before independence",
          points: 20,
        },
      ],
    },
    {
      difficulty: "medium",
      hints: [
        { text: "It is bordered by Guatemala and Honduras", points: 1 },
        { text: "Its name means 'The Savior' in Spanish", points: 2 },
        {
          text: "It was part of the Federal Republic of Central America",
          points: 3,
        },
        { text: "It has a coastline along the Pacific Ocean", points: 5 },
        { text: "It has no railways", points: 7 },
        { text: "The country's currency used to be the colón", points: 10 },
        {
          text: "It is one of the most densely populated countries in the Americas",
          points: 12,
        },
        {
          text: "It was involved in a civil war from 1980 to 1992",
          points: 15,
        },
        { text: "Bitcoin became legal tender here in 2021", points: 18 },
        { text: "The flag has blue and white colors", points: 20 },
      ],
    },
  ],
  GQ: [
    {
      difficulty: "easy",
      hints: [
        { text: "This country is in Central Africa", points: 1 },
        { text: "Its capital city is Malabo", points: 2 },
        {
          text: "It is the only African country where Spanish is an official language",
          points: 3,
        },
        { text: "It has both mainland and island territories", points: 5 },
        {
          text: "It is one of the richest countries in Africa due to oil",
          points: 7,
        },
        { text: "Bata is its largest city", points: 10 },
        { text: "It was colonized by Spain", points: 12 },
        { text: "Bioko Island is part of this country", points: 15 },
        {
          text: "It has one of the smallest populations in Africa",
          points: 18,
        },
        { text: "It gained independence in 1968", points: 20 },
      ],
    },
    {
      difficulty: "medium",
      hints: [
        {
          text: "It has three official languages: Spanish, French, and Portuguese",
          points: 1,
        },
        {
          text: "It is the only African country where Spanish is the main language",
          points: 2,
        },
        {
          text: "It consists of the mainland (Río Muni) and islands",
          points: 3,
        },
        { text: "The capital, Malabo, is located on an island", points: 5 },
        {
          text: "It has one of the highest GDPs per capita in Africa",
          points: 7,
        },
        { text: "Its economy relies heavily on petroleum exports", points: 10 },
        { text: "It has a tropical climate", points: 12 },
        { text: "Its flag has blue, white, green, and red colors", points: 15 },
        {
          text: "It has a small population of about 1.5 million people",
          points: 18,
        },
        {
          text: "The current president has been in power since 1979",
          points: 20,
        },
      ],
    },
  ],
  FR: [
    {
      difficulty: "easy",
      hints: [
        { text: "This country is in Western Europe", points: 1 },
        { text: "Its flag has three vertical stripes", points: 2 },
        { text: "This country is famous for its wine", points: 3 },
        { text: 'The capital city is known as the "City of Light"', points: 5 },
        { text: "Home to Euro Disney", points: 7 },
        { text: "Known for fashion and haute couture", points: 10 },
        { text: "Has the most visited museum in the world", points: 12 },
        { text: "Its most famous landmark was built in 1889", points: 15 },
        { text: "The capital city is on the Seine River", points: 18 },
        { text: "Its capital is Paris", points: 20 },
      ],
    },
    {
      difficulty: "medium",
      hints: [
        { text: "This country won the FIFA World Cup in 2018", points: 1 },
        { text: "Known for baguettes and croissants", points: 2 },
        { text: "Home to the Palace of Versailles", points: 4 },
        { text: "The French Revolution happened here", points: 6 },
        { text: "Famous for the Tour de France", points: 8 },
        { text: "Has territories in the Caribbean", points: 10 },
        { text: "Napoleon Bonaparte ruled this country", points: 12 },
        { text: "The French Riviera is located here", points: 15 },
        { text: "Home to the Louvre Museum", points: 18 },
        { text: "Its capital is Paris", points: 20 },
      ],
    },
  ],
  KE: [
    {
      difficulty: "easy",
      hints: [
        { text: "Its population is less than 100 million", points: 1 },
        { text: "The country is in Eastern Africa", points: 2 },
        { text: "The country's currency symbol is Sh", points: 3 },
        { text: "One of its official languages is English", points: 4 },
        { text: 'The capital\'s name starts with "N"', points: 5 },
        { text: "Its flag has equal horizontal stripes ☰ in it", points: 7 },
        { text: "The country's flag has black in it", points: 8 },
        { text: "The country is east of Rwanda", points: 10 },
        { text: "The country borders Ethiopia", points: 15 },
        { text: "Its capital is Nairobi", points: 20 },
      ],
    },
    {
      difficulty: "medium",
      hints: [
        { text: "This country is home to the Great Rift Valley", points: 1 },
        { text: "It has a coastline along the Indian Ocean", points: 2 },
        { text: "Famous for long-distance runners", points: 3 },
        { text: "Home to the Maasai people", points: 5 },
        { text: "Known for its coffee and tea exports", points: 7 },
        {
          text: "Has one of the largest wildlife migrations in the world",
          points: 10,
        },
        { text: "Mount Kilimanjaro can be seen from this country", points: 12 },
        {
          text: "The country uses Swahili as an official language",
          points: 15,
        },
        { text: "Home to Lake Victoria", points: 18 },
        { text: "Its capital is Nairobi", points: 20 },
      ],
    },
  ],
  JP: [
    {
      difficulty: "easy",
      hints: [
        { text: "This country is an island nation", points: 1 },
        { text: "Located in East Asia", points: 2 },
        { text: "Known for bullet trains", points: 3 },
        { text: "Famous for sushi and ramen", points: 5 },
        { text: "Has a red circle on its flag", points: 7 },
        { text: "Home to Mount Fuji", points: 10 },
        { text: "Known for anime and manga", points: 12 },
        { text: "Cherry blossoms are a national symbol", points: 15 },
        { text: "The emperor lives in Tokyo", points: 18 },
        { text: "Its capital is Tokyo", points: 20 },
      ],
    },
  ],
};
