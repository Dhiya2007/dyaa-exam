        document.querySelectorAll('.select-btn').forEach(button => {
            button.addEventListener('click', () => {
                button.classList.toggle('open');
                const list = button.nextElementSibling;
                document.querySelectorAll('.list-items').forEach(item => {
                    if (item !== list) {
                        item.style.display = 'none';
                    }
                });
                list.style.display = list.style.display === 'block' ? 'none' : 'block';
            });
        });

        document.querySelectorAll('.item').forEach(item => {
            item.addEventListener('click', (event) => {
                event.stopPropagation(); // Prevent the parent toggle from firing
                item.classList.toggle('open-sub');
                const subList = item.querySelector('.sub-list');
                subList.style.display = subList.style.display === 'block' ? 'none' : 'block';
            });
        });
       
       
        // الآيات القرآنية 
const verses = [
  
"وَمِنَ النّاسِ مَن يُعجِبُكَ قَولُهُ فِي الحَياةِ الدُّنيا وَيُشهِدُ اللَّهَ عَلى ما في قَلبِهِ وَهُوَ أَلَدُّ الخِصامِ[ لبقرة: ٢٠٤]",
"يا مَعشَرَ الجِنِّ وَالإِنسِ أَلَم يَأتِكُم رُسُلٌ مِنكُم يَقُصّونَ عَلَيكُم آياتي وَيُنذِرونَكُم لِقاءَ يَومِكُم هذا قالوا شَهِدنا عَلى أَنفُسِنا وَغَرَّتهُمُ الحَياةُ الدُّنيا وَشَهِدوا عَلى أَنفُسِهِم أَنَّهُم كانوا كافِرينَ[ الأنعام: ١٣٠]",
"فَلَمّا نَسوا ما ذُكِّروا بِهِ فَتَحنا عَلَيهِم أَبوابَ كُلِّ شَيءٍ حَتّى إِذا فَرِحوا بِما أوتوا أَخَذناهُم بَغتَةً فَإِذا هُم مُبلِسونَ[الأنعام: ٤٤]",
"قُل هَل نُنَبِّئُكُم بِالأَخسَرينَ أَعمالًا۝الَّذينَ ضَلَّ سَعيُهُم فِي الحَياةِ الدُّنيا وَهُم يَحسَبونَ أَنَّهُم يُحسِنونَ صُنعًا۝أُولئِكَ الَّذينَ كَفَروا بِآياتِ رَبِّهِم وَلِقائِهِ فَحَبِطَت أَعمالُهُم فَلا نُقيمُ لَهُم يَومَ القِيامَةِ وَزنًا[الكهف: ١٠٣-١٠٥]",
"وَإِذا تُتلى عَلَيهِ آياتُنا وَلّى مُستَكبِرًا كَأَن لَم يَسمَعها كَأَنَّ في أُذُنَيهِ وَقرًا فَبَشِّرهُ بِعَذابٍ أَليمٍ[لقمان: ٧]",
    "وَجَاءَتْ سَكْرَةُ الْمَوْتِ بِالْحَقِّ ۚ ذَٰلِكَ مَا كُنتَ مِنْهُ تَحِيدُ (سورة ق: 19)",
  
    "وَإِذَا سَأَلَكَ عِبَادِي عَنِّْي فَإِنِّي قَرِيبٌ ۗ أُجِيبُ دَعْوَةَ الدَّاعِ إِذَا دَعَانِ ۗ فَلْيَسْتَجِيبُوا لِي وَلْيُؤْمِنُوا بِي لَعَلَّهُمْ يَرْشُدُونَ (سورة البقرة: 186)",

    "وَالَّذِينَ هُمْ لِأَمَانَاتِهِمْ وَعَهْدِهِمْ رَاعُونَ ۝ وَٱلَّذِينَ هُمْ عَلَى صَلَوٰتِهِمْ يُحَافِظُونَ ۝ أُو۟لَـٰٓئِكَ هُمْ ٱلْوَارِثُونَ ۝ ٱلَّذِينَ يَرِثُونَ ٱلْفِرْدَوْسَ هُمْ فِيهَا خَالِدُونَ (سورة المؤمنون: 8-11)",
    "وَمَا هَـٰذِهِ ٱلدُّنْيَا إِلَّا لَعِبٌ وَلَهْوٌ ۗ وَإِنَّ ٱلْآخِرَةَ لَهِيَ الْحَيَوَانُ ۗ لَوْ كَانُوا يَعْلَمُونَ (سورة العنكبوت: 64)",

    "وَٱللَّهُ يَعْلَمُ مَا تَسْتُرُونَ وَمَا تُبْدُونَ ۗ وَٱللَّهُ عَلِيمٌ بِذَاتِ الصُّدُورِ (سورة آل عمران: 29)",

    "{وَمَن أَظلَمُ مِمَّن ذُكِّرَ بِآياتِ رَبِّهِ فَأَعرَضَ عَنها وَنَسِيَ ما قَدَّمَت يَداهُ إِنّا جَعَلنا عَلى قُلوبِهِم أَكِنَّةً أَن يَفقَهوهُ وَفي آذانِهِم وَقرًا وَإِن تَدعُهُم إِلَى الهُدى فَلَن يَهتَدوا إِذًا أَبَدًا﴾ [الكهف: ٥٧]",
    "الَّذِينَ آمَنُواْ وَتَطْمَئِنُّ قُلُوبُهُم بِذِكْرِ اللّهِ أَلاَ بِذِكْرِ اللّهِ تَطْمَئِنُّ الْقُلُوبُ(28) الَّذِينَ آمَنُواْ وَعَمِلُواْ الصَّالِحَاتِ طُوبَى لَهُمْ وَحُسْنُ مَآبٍ(سورة الرعد: 29)",
    
    "وَمَن يَعْمَلْ سُوءًا أَوْ يَظْلِمْ نَفْسَهُ ثُمَّ يَسْتَغْفِرِ اللَّـهَ يَجِدِ اللَّـهَ غَفُورًا رَّحِيمًا. [سورة النساء، 110]",
    "وَإِنّي لَغَفّارٌ لِمَن تابَ وَآمَنَ وَعَمِلَ صالِحًا ثُمَّ اهتَدى. [طه، 82]",
    "اقْتَرَبَ لِلنَّاسِ حِسَابُهُمْ وَهُمْ فِي غَفْلَةٍ مُّعْرِضُونَ (1) مَا يَأْتِيهِم مِّن ذِكْرٍ مِّن رَّبِّهِم مُّحْدَثٍ إِلَّا اسْتَمَعُوهُ وَهُمْ يَلْعَبُونَ (2)",
    "وَمَا كَانَ اللَّهُ لِيُعَذِّبَهُمْ وَأَنتَ فِيهِمْ ۚ وَمَا كَانَ اللَّهُ مُعَذِّبَهُمْ وَهُمْ يَسْتَغْفِرُونَ (سورة الأنفال)"
    ];


        // الحصول على النصوص التي تم عرضها مسبقًا من localStorage
        function getDisplayedVerses() {
            const displayed = localStorage.getItem('displayedVerses');
            return displayed ? JSON.parse(displayed) : [];
        }

        // تحديث النصوص التي تم عرضها في localStorage
        function updateDisplayedVerses(verse) {
            const displayed = getDisplayedVerses();
            displayed.push(verse);
            localStorage.setItem('displayedVerses', JSON.stringify(displayed));
        }

        // اختيار نص عشوائي وعدم تكراره
        function getNextVerse() {
            const displayed = getDisplayedVerses();
            const remaining = verses.filter(verse => !displayed.includes(verse));

            if (remaining.length === 0) {
                // إعادة تعيين عندما يتم عرض جميع النصوص
                localStorage.removeItem('displayedVerses');
                return verses[Math.floor(Math.random() * verses.length)];
            }

            return remaining[Math.floor(Math.random() * remaining.length)];
        }

        // عرض الآية العشوائية
        function displayNewVerse() {
            const verse = getNextVerse();
            document.getElementById("random-text").innerText = verse;
            updateDisplayedVerses(verse);
        }

        // عرض أول آية عند تحميل الصفحة
        displayNewVerse();

        // تعيين حدث النقر للزر
        document.getElementById("next-verse").addEventListener("click", displayNewVerse);
  