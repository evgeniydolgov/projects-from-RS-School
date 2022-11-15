const chartersData = [[
    {
        id: 1,
        nameru: "Геральт",
        nameen: "Geralt",
        descriptionru: "Главный герой литературной саги и протагонист последующих игр, ведьмак, профессиональный охотник на монстров, один из лучших фехтовальщиков Севера. «Белый Волк», «Мясник из Блавикена», Белоголовый, Выродок, Колдун – все это прозвища странствующего ведьмака, Геральта из Ривии.",
        descriptionen: "The protagonist of the literary saga and the protagonist of subsequent games, a witcher, a professional monster hunter, one of the best swordsmen in the North. 'White Wolf', 'The Butcher of Blaviken', Whitehead, Geek, Sorcerer-all these are the nicknames of the wandering witcher, Geralt of Rivia.",
        image: "https://gwent.one/image/gwent/assets/card/art/low/1009.jpg",
        audio: "https://gwent.one/audio/card/hc/en/SAY.Battlecries.1.mp3",
        video: "https://gwent.one/video/card/loop/ob/112103.webm"
    },
    {
        id: 2,
        nameru: "Цири",
        nameen: "Ciri",
        descriptionru: "Цирилла Фиона Элен Рианнон, Львёнок из Цинтры (Фалька), Цири – дитя Старшей Крови, чародейка, наследная принцесса Цинтры.",
        descriptionen: "Cirilla Fiona Helen Riannon, Lion Cub of Cintra (Falka), Ciri - child of the Elder Blood, sorceress, crown princess of Cintra.",
        image: "https://gwent.one/image/gwent/assets/card/art/low/1016.jpg",
        audio: "https://gwent.one/audio/card/hc/en/CIRI_Q310_00579530.mp3",
        video: "https://gwent.one/video/card/loop/ob/112110.webm"
    },
    {
        id: 3,
        nameru: "Регис",
        nameen: "Regis",
        descriptionru: "Эмиэль Регис Рохеллек Терзифф'Годфрой, более известный просто как Регис, был очень могущественным высшим вампиром, и ему было более четырехсот лет, когда он впервые встретил Геральта из Ривии. Он был хирургом'парикмахером из Диллингена. Он был очень интеллектуален и мог считаться эрудитом, разбираясь во многих различных предметах.",
        descriptionen: "Emiel Regis Rohellec Terzieff'Godefroy, better known simply as Regis, was a very powerful higher vampire, and more than four hundred years old when he first met Geralt of Rivia. He was the barber'surgeon of Dillingen. He was very intellectual and could be considered a polymath, knowing about many different subjects.",
        image: "https://gwent.one/image/gwent/assets/card/art/low/1010.jpg",
        audio: "https://gwent.one/audio/card/hc/en/REGI_Q702_01155230.mp3",
        video: "https://gwent.one/video/card/loop/ob/112104.webm"
    },
    {
        id: 4,
        nameru: "Трисс",
        nameen: "Triss",
        descriptionru: "Трисс Меригольд из Марибора легендарная темерская волшебница 13 века. Названная современниками Четырнадцатой с холма, потому что ее ошибочно считали убитой во время битвы при Содден'Хилле, она вошла в историю как Меригольд Бесстрашная.",
        descriptionen: "Triss Merigold of Maribor a legendary Temerian sorceress of the 13th century. Called Fourteenth of the Hill by her contemporaries because she was erroneously thought to have been killed during the Battle of Sodden Hill, she passed into history as Merigold the Fearless.",
        image: "https://gwent.one/image/gwent/assets/card/art/low/1012.jpg",
        audio: "https://gwent.one/audio/card/hc/en/TRSS_Q310_00545347.mp3",
        video: "https://gwent.one/video/card/loop/ob/112106.webm"
    },
    {
        id: 5,
        nameru: "Йеннифэр",
        nameen: "Yennefer",
        descriptionru: "Возлюбленная Геральта из Ривии, талантливая и могущественная чародейка, фактически приёмная мать Цириллы. Йеннифэр предстаёт женщиной необыкновенной красоты — красивые фиалковые глаза, роскошные чёрные волосы, закрученные в тугие, ниспадающие на плечи локоны.",
        descriptionen: "Beloved of Geralt of Rivia, a talented and powerful sorceress, in fact, the adoptive mother of Cirilla. Yennefer appears as a woman of extraordinary beauty-beautiful violet eyes, luxurious black hair, twisted into tight curls falling over her shoulders.",
        image: "https://gwent.one/image/gwent/assets/card/art/low/1019.jpg",
        audio: "https://gwent.one/audio/card/hc/en/YENN_YENNEFER_01041495.mp3",
        video: "https://gwent.one/video/card/loop/ob/112113.webm"
    },
    {
        id: 6,
        nameru: "Весемир",
        nameen: "Vesemir",
        descriptionru: "Весемир – старейший ведьмак, который все время пребывал в Каэр Морхене, обучая молодых юношей фехтованию и осветляя секреты борьбы с монстрами, чудищами и прочей нечистью (монстрология). Он побывал во всех княжествах и королевствах за свою долгую жизнь. Касательно возраста, никто точно не знает, сколько старому ведьмаку лет.",
        descriptionen: "Vesemir is the oldest witcher who stayed in Kaer Morhen all the time, teaching young men swordsmanship and clarifying the secrets of fighting monsters, monsters and other evil spirits (monstrology). He traveled to all principalities and kingdoms during his long life. Regarding age, no one knows exactly how old the old witcher is.",
        image: "https://gwent.one/image/gwent/assets/card/art/low/1476.jpg",
        audio: "https://gwent.one/audio/card/hc/en/VSMR_VESEMIR_01040765.mp3",
        video: "https://gwent.one/video/card/loop/ob/200237.webm"
    }
], [
    {
        id: 7,
        nameru: "Хенсельт",
        nameen: "Henselt",
        descriptionru: "Его амбициозное правление было ознаменовано рядом военных конфликтов, в том числе продолжением борьбы за Долину Понтара и территориальными спорами с Демавендом III за Нижнюю Мархию, а также радикальной борьбой с нелюдями и эльфскими партизанами. В ходе Северных войн Хенсельт уверенно правил своим королевством, присутствовал на совете в Хагге и участвовал в подписании Цинтрийского мира..",
        descriptionen: "His ambitious reign was marked by a number of military conflicts, including the continuation of the struggle for the Pontar Valley and territorial disputes with Demavend III over Marchia Inferior, as well as a radical struggle against non'humans and elven guerrillas. During the Northern Wars, Henselt confidently ruled his kingdom, attended the council in Hagga and participated in the signing of the Cintra Peace.",
        image: "https://gwent.one/image/gwent/assets/card/art/low/1072.jpg",
        audio: "https://gwent.one/audio/card/hc/en/VO_HSLT_200098_0254.mp3",
        video: "https://gwent.one/video/card/loop/ob/200170.webm"
    },
    {
        id: 8,
        nameru: "Вернон Роше",
        nameen: "Vernon Roche",
        descriptionru: "Это пример человека, который творит свою судьбу сам. Он сам выслеживал отряды скоя'таэлей во время войны с Нильфгаардом. Сам вешал их главарей вдоль дорог. Сам вытаскивал эльфийские стрелы из собственного тела. И довольно скоро король Фольтест понял, что такой человек не должен заниматься одной только борьбой с партизанами. В конце концов, у Темерии есть множество врагов, кроме белок. Вернона Роше повысили, и он стал специальным агентом.",
        descriptionen: "This is an example of a person who creates his own destiny. He himself tracked down the Scoia'tael units during the war with Nilfgaard. Himself hung their leaders along the roads. He himself pulled elven arrows from his own body. And pretty soon King Foltest realized that such a person should not be engaged only in the fight against partisans. After all, Temeria has plenty of enemies besides squirrels. Vernon Roche was promoted to special agent.",
        image: "https://gwent.one/image/gwent/assets/card/art/low/1074.jpg",
        audio: "https://gwent.one/audio/card/hc/en/ROCH_ROCHE_00541126.mp3",
        video: "https://gwent.one/video/card/loop/ob/122102.webm"
    },
    {
        id: 9,
        nameru: "Кровавый Барон",
        nameen: "Bloody Baron",
        descriptionru: "По мнению большинства жителей Велена, барон — жестокий правитель и садист, обирающий их, однако это не совсем так. Он простой, добросердечный и сердобольный человек, которому не повезло в жизни. Несмотря на определённую недалёкость, Филип сообразителен, умеет извлекать выгоду из своего положения, вести переговоры и заключать союзы.",
        descriptionen: "Most people in Velen think that the baron is a cruel ruler and a sadist who robs them, but this is not entirely true. He is a simple, kind'hearted and compassionate man who has been unlucky in life. Despite a certain narrow'mindedness, Philip is quick'witted, able to capitalize on his position, negotiate and make alliances.",
        image: "https://gwent.one/image/gwent/assets/card/art/low/1073.jpg",
        audio: "https://gwent.one/audio/card/hc/en/BARN_Q102_00408798.mp3",
        video: "https://gwent.one/video/card/loop/ob/122101.webm"
    },
    {
        id: 10,
        nameru: "Кейра Мец",
        nameen: "Keira Metz",
        descriptionru: "Чародейка, советница короля Темерии Фольтеста. Кейра описывается как невысокая, худощавая девушка с длинными прямыми соломенного цвета волосами. Кейра носит на шее медальон в форме креста анха, усыпанного цирконами. Как и многие другие чародейки на танеддском вечере Кейра одета в прозрачный воздушный гипюр, вызывающе подчеркивающий ее тело и не скрывающий практически ничего.",
        descriptionen: "Enchantress, adviser to King Foltest of Temeria. Keira is described as a short, thin girl with long, straight, straw'colored hair. Keira wears around her neck a medallion in the form of an ankh cross studded with zircons. Like many other sorceresses at the Thanedd evening, Keira is dressed in transparent, airy guipure, defiantly emphasizing her body and hiding almost nothing.",
        image: "https://gwent.one/image/gwent/assets/card/art/low/1080.jpg",
        audio: "https://gwent.one/audio/card/hc/en/KEIR_SQ101_00565661.mp3",
        video: "https://gwent.one/video/card/loop/ob/122108.webm"
    },
    {
        id: 11,
        nameru: "Шеала",
        nameen: "Sheala",
        descriptionru: "Шеала де Танкарвиль или Силе де Тансарвиль была волшебницей из Крейдена и одним из основателей Ложи Волшебниц. Она была одной из самых могущественных и уважаемых магов Севера. В отличие от своих коллег, Шеала, как известно, не вмешивалась в политику и вместо этого посвящала свои дни исследованиям. Она даже отказалась от своего места в Совете Волшебников, потому что это мешало ее работе.",
        descriptionen: "Sheala de Tancarville or Síle de Tansarville was a sorceress from Creyden and one of the founding members of the Lodge of Sorceresses. She was among the most powerful and respected mages in the North. Unlike her colleagues, Sheala was not known to interfere in politics and instead dedicating her days to research. She even resigned her seat with the Council of Wizards because it interfered with her work. ",
        image: "https://gwent.one/image/gwent/assets/card/art/low/1085.jpg",
        audio: "https://gwent.one/audio/card/hc/en/SAY.Battlecries.31.mp3",
        video: "https://gwent.one/video/card/loop/ob/122205.webm"
    },
    {
        id: 12,
        nameru: "Фольтест",
        nameen: "Foltest",
        descriptionru: "В ходе своего правления значительно укрепил и стабилизировал страну, установил твёрдую королевскую власть и поддерживал политическую стабильность. При поддержке королевского Совета успешно руководил Темерией и армией в ходе Северных Войн, присутствовал на совете в Хагге и участвовал в подписании Цинтрийского мира, занимал одну из лидирующих ролей в коалиции правителей всего Севера.",
        descriptionen: "During his reign, he significantly strengthened and stabilized the country, established a firm royal power and maintained political stability. With the support of the Royal Council, he successfully led Temeria and the army during the Northern Wars, attended the council in Hagga and participated in the signing of the Cintrian Peace, and occupied one of the leading roles in the coalition of the rulers of the entire North.",
        image: "https://gwent.one/image/gwent/assets/card/art/low/1070.jpg",
        audio: "https://gwent.one/audio/card/hc/en/VO_FLTS_000811_0004.mp3",
        video: "https://gwent.one/video/card/loop/ob/200168.webm"
    }
], [
    {
        id: 13,
        nameru: "Саския",
        nameen: "Saskia",
        descriptionru: "Сэзентезис, широко известная среди людей как Саския Убийца Драконов или Дева Аэдирна, была драконом, способным принимать человеческий облик. Она была ключевым игроком в битве за Верген и, в зависимости от исхода, королевой независимого королевства Верхний Аэдирн. Она была дочерью знаменитого золотого дракона Виллентретенмерта и зеленого дракона Миргтабракке.",
        descriptionen: "Saesenthessis, commonly known amongst people as Saskia the Dragonslayer or the Virgin of Aedirn, was a dragon with the ability to take on the form of a human. She was a key player in the battle of Vergen and depending on the outcome, queen of the independent realm of Upper Aedirn.  She was the daughter of the famous golden dragon Villentretenmerth and the green dragon Myrgtabrakke.",
        image: "https://gwent.one/image/gwent/assets/card/art/low/1461.jpg",
        audio: "https://gwent.one/audio/card/hc/en/VO_TARM_200154_0192.mp3",
        video: "https://gwent.one/video/card/loop/ob/200209.webm"
    },
    {
        id: 14,
        nameru: "Йорвет",
        nameen: "Iorweth",
        descriptionru: "Йорвет был эльфом Аэн Сейдхе и командиром последнего коммандос скоя'таэлей, сломленного во время второй войны с Нильфгаардом. Он был не только чрезвычайно искусным лучником, но и фехтовальщиком. Он победил командиров многих спецподразделений Севера, в том числе кого'то из Ордена Пылающей Розы, кроме капитана Синих Полосок Вернона Роша.",
        descriptionen: "Iorweth was an Aen Seidhe elf and the commander of the last Scoia'tael commando to be broken during the second war with Nilfgaard.  He was not just an extremely skilled bowman but a swordsman as well. He defeated the commanders of many special forces of the North, including someone from the Order of the Flaming Rose, except for the Blue Stripes captain Vernon Roche.",
        image: "https://gwent.one/image/gwent/assets/card/art/low/1190.jpg",
        audio: "https://gwent.one/audio/card/hc/en/VO_IORW_101048_0181.mp3",
        video: "https://gwent.one/video/card/loop/ob/142103.webm"
    },
    {
        id: 15,
        nameru: "Золтан Хивай",
        nameen: "Zoltan Chivay ",
        descriptionru: "Золтан Хивай был ветераном Второй Нильфгаардской войны и другом Геральта. Впервые они встретились, когда Геральт и его компания шли к реке Яруга из Брокилона, но карлик посоветовал им присоединиться к его компании и идти на восток. Именно от Золтана Геральт получил свой меч-Сихиль.",
        descriptionen: "Zoltan Chivay was a veteran of the Second Nilfgaard War and a friend of Geralt. They first met when Geralt and his company were going towards the Yaruga river from Brokilon, but the dwarf advised them to join his company and go eastwards. It is from Zoltan that Geralt got his sword-Sihil.",
        image: "https://gwent.one/image/gwent/assets/card/art/low/1192.jpg",
        audio: "https://gwent.one/audio/card/hc/en/ZOLT_ZOLTAN_01040649.mp3",
        video: "https://gwent.one/video/card/loop/ob/142105.webm"
    },
    {
        id: 16,
        nameru: "Аэлирэнн",
        nameen: "Aelirenn",
        descriptionru: "Аэлирэ́нн, также известная как Белая Роза из Шаэрраведда, предводительница восстания эльфов, случившегося в XI веке.Несмотря на отчаянное сопротивление силы Аэлирэнн были вырезаны превосходящими числом человеческими армиями. Оставшиеся в живых эльфы были вынуждены уничтожить Шаэрраведд, свою гордость, чтобы тот не достался людям, после чего ушли в горы.",
        descriptionen: "Aelirenn, also known as the White Rose of Shaerrawedd, was the leader of an elven rebellion that took place in the 11th century. Despite fierce resistance, Aelirenn's forces were slaughtered by overwhelming numbers of human armies. The surviving elves were forced to destroy Shaerrawedd, their pride, so that he would not get to people, after which they left for the mountains.",
        image: "https://gwent.one/image/gwent/assets/card/art/low/1206.jpg",
        audio: "https://gwent.one/audio/card/hc/en/SAY.Battlecries.184.mp3",
        video: "https://gwent.one/video/card/loop/ob/142211.webm"
    },
    {
        id: 17,
        nameru: "Итлина",
        nameen: "Ithlinne",
        descriptionru: "Более всего её прославило пророчество «Ithlinne Aegli aep Aevenien», предсказывающее конец света. Согласно этому пророчеству в мире наступит ледниковый период и все живое погибнет. Выживут только эльфы, спасённые ребенком Старшей Крови — Ласточкой, чьим потомкам предстоит править миром. Впрочем, многие считают пророчества Итлины не более, чем аллегорией.",
        descriptionen: "Most of all, she was glorified by the prophecy 'Ithlinne Aegli aep Aevenien', predicting the end of the world. According to this prophecy, an ice age will come in the world and all living things will die. Only the elves will survive, saved by the child of the Elder Blood-Swallow, whose descendants will rule the world. However, many consider the prophecies of Itlina to be nothing more than an allegory.",
        image: "https://gwent.one/image/gwent/assets/card/art/low/1194.jpg",
        audio: "https://gwent.one/audio/card/hc/en/SAY.Battlecries.171.mp3",
        video: "https://gwent.one/video/card/loop/ob/142107.webm"
    },
    {
        id: 18,
        nameru: "Ширру",
        nameen: "Schirru",
        descriptionru: "Ширру — высокий, заметно выше 6 футов, полуэльф с большими жёлто'зелеными миндалевидными глазами, как у кошки. У него длинные темные волосы, которые он носит перехваченными на затылке в падающий на спину конский хвост.Ширру изощренно жесток, мстителен и глумлив, имеет острый язык и не лезет за словом в карман. Будучи хитроумным и коварным, он крайне высокого мнения о себе, хотя в то же время труслив и мелочен.",
        descriptionen: "Shirru is a tall, well over 6 feet, half'elf with large, yellow'green, almond'shaped eyes like a cat's. He has long dark hair, which he wears caught at the back of his head in a ponytail falling on his back. Shirru is subtly cruel, vindictive and mocking, has a sharp tongue and does not go into his pocket for words. Being cunning and cunning, he has an extremely high opinion of himself, although at the same time he is cowardly and petty.",
        image: "https://gwent.one/image/gwent/assets/card/art/low/1195.jpg",
        audio: "https://gwent.one/audio/card/hc/en/SAY.Battlecries.187.mp3",
        video: "https://gwent.one/video/card/loop/ob/142108.webm"
    }
], [
    {
        id: 19,
        nameru: "Хемдалл",
        nameen: "Hemdall",
        descriptionru: "Хемдалл — герой мифов и саг Скеллиге. Согласно легенде, существует волшебный золотой петух, известный как Камби, чья задача состоит в том, чтобы разбудить Хемдалла перед Последней битвой между силами добра и зла, известной как «Раг нар Руг». Он будет стоять на Бифрёсте, Радужном мосту, и дуть в свой рог, сигнализируя, что пора браться за оружие и сражаться с призраками Хаоса из Морхогга.",
        descriptionen: "Hemdall is a hero of myths and sagas of Skellige. According to legend, there is a magical golden rooster known as Kambi whose task it is to awaken Hemdall before the Last Battle between the forces of good and evil known as 'Ragh nar Roog'. He will stand on Bifröst, the Rainbow Bridge, and blow his horn to signal that it is time to take up arms and fight against specters of Chaos from Mörhogg.",
        image: "https://gwent.one/image/gwent/assets/card/art/low/1276.jpg",
        audio: "https://gwent.one/audio/card/hc/en/SAY.Battlecries.199.mp3",
        video: "https://gwent.one/video/card/loop/ob/152402.webm"
    },
    {
        id: 20,
        nameru: "Ютта",
        nameen: "Jutta",
        descriptionru: "С детства Ютта посвящала большую часть своего времени развитию навыков фехтования. Однажды она поклялась Фрейе, что будет спать, выходить замуж и иметь детей только с тем человеком, который победит ее в единоборстве. На протяжении многих лет многие мужчины с Фарер пытались победить ее, но безуспешно, что заставило ее задуматься, сможет ли какой'нибудь парень победить ее.",
        descriptionen: "Since childhood, Jutta devoted most of her time to developing her swordsmanship skills. At one time, she made a vow to Freya that she would only sleep with, marry, and have children with the man who would defeat her in single combat. Over the years, many men from Faroe attempted to defeat her but to no avail, leading her to wonder if any guy would be able to defeat her.",
        image: "https://gwent.one/image/gwent/assets/card/art/low/1247.jpg",
        audio: "https://gwent.one/audio/card/hc/en/SWO4_MQ2038_00507987.mp3",
        video: "https://gwent.one/video/card/loop/ob/152208.webm"
    },
    {
        id: 21,
        nameru: "Моркварг",
        nameen: "Morkvarg",
        descriptionru: "Испытывая отвращение к зверствам, которые Моркварг совершил против богов, осквернив сад, Эйнар превратил Моркварга в оборотня, используя кулон проклятого волка, подаренный ему его отцом. Проклятие не только приковало его к саду на вечность, оно также вызвало у него безмерный голод, который не могла утолить ни пища, ни добыча, поскольку он сразу же превращался в пепел.",
        descriptionen: "Disgusted with the atrocities Morkvarg committed against the gods by defiling the garden, Einar transformed Morkvarg into a Werewolf using a cursed wolf pendant given to him by his father. The curse not only bound him to the garden for eternity, it also gave him an immense hunger that no food or prey could ever satisfy as it immediately turns to ash.",
        image: "https://gwent.one/image/gwent/assets/card/art/low/1248.jpg",
        audio: "https://gwent.one/audio/card/hc/en/MRKV_SQ201_00499647.mp3",
        video: "https://gwent.one/video/card/loop/ob/152209.webm"
    },
    {
        id: 22,
        nameru: "Крах",
        nameen: "Crach",
        descriptionru: "Крах ан Крайт, также известный как Морской кабан и Морской кабан, был племянником короля Брана Тирсеаха со Скеллиге, и его наставником был Эйст Тирсиах, другой его дядя. В ранние годы он был претендентом на руку принцессы Паветты Синтры, однако так ни к чему и не привел.",
        descriptionen: "Crach an Craite, also known as Sea Boar and the Wild Boar of the Sea, was a nephew of King Bran Tuirseach of Skellige and was mentored by Eist Tuirseach, his other uncle.  In his early years he was a contender for the hand of Princess Pavetta of Cintra, however, it never came to anything.",
        image: "https://gwent.one/image/gwent/assets/card/art/low/1231.jpg",
        audio: "https://gwent.one/audio/card/hc/en/CRCH_CRACH_01001923.mp3",
        video: "https://gwent.one/video/card/loop/ob/200160.webm"
    },
    {
        id: 23,
        nameru: "Эйст Тиршах",
        nameen: "Eist Tuirseach",
        descriptionru: "Эйст слыл выдающимся воином и моряком, пренебрегавшим браком, пока не увидел Львицу из Цинтры. Когда Нильфгаардская империя вторглась в 1263 году, он храбро руководил обороной, пока не погиб в битве при Марнадале.",
        descriptionen: "Eist was reputed to be an extraordinary warrior and sailor who had disdained marriage until laying eyes upon the Lioness of Cintra.  When the Nilfgaardian Empire invaded in 1263, he bravely led the defense until perishing in the Battle of Marnadal. ",
        image: "https://gwent.one/image/gwent/assets/card/art/low/1363.jpg",
        audio: "https://gwent.one/audio/card/hc/en/SAY.Battlecries_part3.48.mp3",
        video: "https://gwent.one/video/card/loop/ob/201597.webm"
    },
    {
        id: 24,
        nameru: "Бран Тиршах",
        nameen: "Bran Tuirseach",
        descriptionru: "Бран Тиршах был ярлом Ан Скеллиге, правившим как король островов Скеллиге. После междуцарствия после смерти короля Эйста Бран вернул себе железную корону Скеллиге и правил еще несколько лет. Почувствовав себя слишком старым, Бран отправился на охоту на медведя и умер.",
        descriptionen: "Bran Tuirseach was jarl of An Skellig who ruled as the King of the Skellige Isles.After an interregnum following King Eist's death, Bran regained the iron crown of Skellige and ruled for a few more years. Once he felt too old, Bran set out to hunt a bear and died.",
        image: "https://gwent.one/image/gwent/assets/card/art/low/1230.jpg",
        audio: "https://gwent.one/audio/card/hc/en/SAY.Battlecries.194.mp3",
        video: "https://gwent.one/video/card/loop/ob/200159.webm"
    }
], [
    {
        id: 25,
        nameru: "Эмгыр",
        nameen: "Emhyr",
        descriptionru: "Эмгыр вар Эмрейс, Дейтвен Аддан ин Карн аэп Морвудд (на нильфгаардском языке: Белое пламя, танцующее на курганах его врагов), также известный некоторым под псевдонимом Дани, Еж из Эрленвальда был императором Нильфгаардской империи, лордом Метинна, Эббинг, Геммера и правитель Назаира и Виковаро с 1257 года до своей смерти где'то в конце 13 века.",
        descriptionen: "Emhyr var Emreis, Deithwen Addan yn Carn aep Morvudd (Nilfgaardian language: The White Flame Dancing on the Barrows of his Enemies), also known to a few under his alias as Duny, the Urcheon of Erlenwald was Emperor of the Nilfgaardian Empire, Lord of Metinna, Ebbing, Gemmera, and Sovereign of Nazair and Vicovaro from 1257 until his death sometime in the late 13th century. ",
        image: "https://gwent.one/image/gwent/assets/card/art/low/1282.jpg",
        audio: "https://gwent.one/audio/card/hc/en/SAY.Battlecries.238.mp3",
        video: "https://gwent.one/video/card/loop/ob/200162.webm"
    },
    {
        id: 26,
        nameru: "Лео Бонарт",
        nameen: "Leo Bonhart",
        descriptionru: "Лео Бонарт был охотником за головами, а ранее профессиональным солдатом из Эббинга. Известный своим профессионализмом и высокой стоимостью найма, он находил удовольствие в просмотре жестоких сцен и причинении боли другим. Он был описан как очень высокий, но ужасно худой, с огромными седыми усами. Говорили, что у него были холодные невыразительные глаза, которые часто сравнивали с рыбьими.",
        descriptionen: "Leo Bonhart was a bounty hunter and previously a professional soldier from Ebbing. Known for his professionalism and expense to hire, he found pleasure in watching brutal scenes and inflicting pain on others. He was described as very tall but ghoulishly thin, with a prodigious grey moustache. He was said to have cold, expressionless eyes which were often likened to fish.",
        image: "https://gwent.one/image/gwent/assets/card/art/low/1336.jpg",
        audio: "https://gwent.one/audio/card/hc/en/SAY.Battlecries.14.mp3",
        video: "https://gwent.one/video/card/loop/ob/200031.webm"
    },
    {
        id: 27,
        nameru: "Лето из Гулеты",
        nameen: "Letho of Gulet",
        descriptionru: "Лето из Гулета, также известный как Цареубийца, был ведьмаком из Школы Змеи. Его ближайшими соратниками были Окес и Серрит, тоже убийцы королей и товарищи'ведьмаки из Школы Змеи. Лето заручился поддержкой Иорвета и скоя'таэлей, чтобы помочь ему в его плане убить королей Северных королевств; в подтверждение своего заявления Змея показала Иорвету голову, принадлежавшую Демавенду III, которого Лето ранее убил.",
        descriptionen: "Letho of Gulet, also known as The Kingslayer, was a witcher from the School of the Viper. His closest associates were Auckes and Serrit, also kingslayers and fellow witchers from the School of the Viper. Letho enlisted the help of Iorveth and the Scoia'tael to aid him in his plan to kill the kings of the Northern Kingdoms; to back his claim, the Viper showed Iorveth a head that belonged to Demavend III, whom Letho had previously slain.",
        image: "https://gwent.one/image/gwent/assets/card/art/low/1285.jpg",
        audio: "https://gwent.one/audio/card/hc/en/LETO_LETHO_01038588.mp3",
        video: "https://gwent.one/video/card/loop/ob/162101.webm"
    },
    {
        id: 28,
        nameru: "Кагыр",
        nameen: "Cahir",
        descriptionru: "Кагыр Маур Диффрин аэп Кеаллах, или просто Кагыр, был офицером разведки Нильфгаардской империи, родом из Виковаро и сыном Кеаллаха и Мора. В конце концов он присоединился к компании Геральта в их стремлении найти и спасти Цири.",
        descriptionen: 'Cahir Mawr Dyffryn aep Ceallach, or simply Cahir, was an intelligence officer of the Nilfgaardian Empire who hailed from Vicovaro and was the son of Ceallach and Mawr. He eventually joined Geralt"s company in their quest to find and rescue Ciri.',
        image: "https://gwent.one/image/gwent/assets/card/art/low/1288.jpg",
        audio: "https://gwent.one/audio/card/hc/en/SAY.Battlecries.69.mp3",
        video: "https://gwent.one/video/card/loop/ob/162104.webm"
    },
    {
        id: 29,
        nameru: "Ассирэ",
        nameen: "Assire",
        descriptionru: "Ассирэ вар Анагыд была магом на службе Нильфгаардской империи, родом из Виковаро. Хотя Ассире была нильфгаардской волшебницей, в ней и Эвиве текла нордлингская кровь. У нее также был черный кот по кличке Мерлин.",
        descriptionen: "Assire var Anahid was a mage in the Nilfgaardian Empire's service who hailed originally from Vicovaro. Even though Assire was a Nilfgaardian sorceress, she and Eviva had Nordling blood. She also owned a black cat called Merlin.",
        image: "https://gwent.one/image/gwent/assets/card/art/low/1294.jpg",
        audio: "https://gwent.one/audio/card/hc/en/SAY.Battlecries.77.mp3",
        video: "https://gwent.one/video/card/loop/ob/162202.webm"
    },
    {
        id: 30,
        nameru: "Вильгефорц",
        nameen: "Vilgefortz",
        descriptionru: "Вильгефорц из Роггевеена был ковирианским магом и фактическим лидером Ордена Дара и Искусства, самого высокого ранга в Братстве Колдунов. У него также была пара других личных учеников в лице Риенса и Лидии ван Бредевоорт, причем последняя выступала в качестве его помощника и личного секретаря.",
        descriptionen: "Vilgefortz of Roggeveen was a Kovirian mage and the de facto leader of the Chapter of the Gift and the Art, the highest ranked of the Brotherhood of Sorcerers. He also had a couple other personal apprentices in the form of Rience and Lydia van Bredevoort, with the latter acting as both his assistant and personal secretary.",
        image: "https://gwent.one/image/gwent/assets/card/art/low/1289.jpg",
        audio: "https://gwent.one/audio/card/hc/en/SAY.Battlecries.72.mp3",
        video: "https://gwent.one/video/card/loop/ob/162105.webm"
    }
], [
    {
        id: 31,
        nameru: "Имлерих",
        nameen: "Imlerith",
        descriptionru: "Имлерих был одним из генералов Дикой Охоты. Он обладал огромной силой и был одним из самых грозных противников, с которыми сталкивался Геральт. Геральт и Имлерих также были знакомы во время службы Геральта на охоте. Вторым генералом Охоты наряду с Имлеритом был Карантир Ар-Фейниэль.",
        descriptionen: "Imlerith was one of the generals of the Wild Hunt. He wielded great power, and was one of the most formidable opponents Geralt encountered. Geralt and Imlerith were also acquaintances during Geralt's service with the hunt. The Hunt's second general alongside Imlerith was Caranthir Ar-Feiniel.",
        image: "https://gwent.one/image/gwent/assets/card/art/low/1652.jpg",
        audio: "https://gwent.one/audio/card/hc/en/SAY.Battlecries.851.mp3",
        video: "https://gwent.one/video/card/loop/ob/201781.webm"
    },
    {
        id: 32,
        nameru: "Кухарка",
        nameen: "Brewess",
        descriptionru: "По легенде, Кухарка, как и её сестры, была создана некой друидкой, правившей Веленом в незапамятные времена. Вскоре, однако, та начала все больше погружаться в безумие, из-за чего гибли люди. Сестры решили избавиться от безумной матери и, убив её, похоронили на болотах, а духа заточили дереве под холмом, став править окрестными землями самостоятельно.",
        descriptionen: "According to legend, the Cook, like her sisters, was created by a certain druid who ruled Velen in time immemorial. Soon, however, she began to sink more and more into madness, because of which people died. The sisters decided to get rid of the insane mother and, having killed her, they buried her in the swamps, and imprisoned the spirit in a tree under a hill, starting to rule the surrounding lands on their own.",
        image: "https://gwent.one/image/gwent/assets/card/art/low/1144.jpg",
        audio: "https://gwent.one/audio/card/hc/en/BREW_Q111_00576135.mp3",
        video: "https://gwent.one/video/card/loop/ob/132207.webm"
    },
    {
        id: 33,
        nameru: "Карантир",
        nameen: "Caranthir",
        descriptionru: "Будучи бывшим учеником Аваллак'ха, Карантир являлся сильным магом, способным накладывать сложные и могущественные заклинания, например, он мог призывать Элементалей или заковывать противников и целые области в лед.",
        descriptionen: "A former apprentice of Avallac'h, Caranthir was a powerful mage, able to cast complex and powerful spells such as summoning Elementals or freezing enemies and entire areas in ice.",
        image: "https://gwent.one/image/gwent/assets/card/art/low/1133.jpg",
        audio: "https://gwent.one/audio/card/hc/en/SAY.Battlecries.191.mp3",
        video: "https://gwent.one/video/card/loop/ob/132104.webm"
    },
    {
        id: 34,
        nameru: "Нитраль",
        nameen: "Nithral",
        descriptionru: "Будучи эльфом огромного роста, Нитраль является одним из приближённых Короля Дикой Охоты. Он закован в стилизованные под человеческий скелет доспех, с высокими наплечниками и красным сюрко, и вооружён огромным топором.",
        descriptionen: "As an elf of enormous stature, Nithral is one of the closest associates of the King of the Wild Hunt. He is clad in armor stylized as a human skeleton, with high shoulder pads and a red surcoat, and is armed with a huge axe.",
        image: "https://gwent.one/image/gwent/assets/card/art/low/1151.jpg",
        audio: "https://gwent.one/audio/card/hc/en/WHW1_Q104_00555148.mp3",
        video: "https://gwent.one/video/card/loop/ob/132214.webm"
    },
    {
        id: 35,
        nameru: "Ориана",
        nameen: "Orianna",
        descriptionru: "Как и у многих вампиров, у Орианны была тяга к крови, но она предпочитала детскую кровь и периодически кормила там детей, чтобы удовлетворить свою тягу, хотя и не убивала их.",
        descriptionen: "Like many vampires, Orianna had a craving for blood but she preferred children's blood and periodically fed off the children there to satisfy her craving, though she did not kill them.",
        image: "https://gwent.one/image/gwent/assets/card/art/low/1393.jpg",
        audio: "https://gwent.one/audio/card/hc/en/SAY.Battlecries_part3.159.mp3",
        video: "https://gwent.one/video/card/loop/ob/202222.webm"
    },
    {
        id: 36,
        nameru: "Пряха",
        nameen: "Weavess",
        descriptionru: "Хотя самая младшая из трех старух, Пряха была ни на йоту менее уродливой или злой, чем ее старшие сестры. Именно она ткала их волшебные гобелены из человеческих волос, собранных в качестве дани с маленьких детей близлежащих деревень во время их церемоний.",
        descriptionen: "Though the youngest of the three Crones, the Weavess was not one jot less ugly or evil than her older sisters. It was she who wove their magic tapestries of human hair gathered as tribute from the young children of nearby villages during their ceremonies. ",
        image: "https://gwent.one/image/gwent/assets/card/art/low/1145.jpg",
        audio: "https://gwent.one/audio/card/hc/en/WEAV_Q503_00578937.mp3",
        video: "https://gwent.one/video/card/loop/ob/132208.webm"
    }
]];

export default chartersData;