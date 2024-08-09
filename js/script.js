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
  
    "قُلْ هُوَ ٱللَّهُ أَحَدٌ ۝ ٱللَّهُ ٱلصَّمَدُ ۝ لَمْ يَلِدْ وَلَمْ يُولَدْ ۝ وَلَمْ يَكُنْ لَهُۥۤ كُفُوًا أَحَدٌ (سورة الإخلاص: 1-4)",
    "وَأَقِمِ ٱلصَّلَوٰةَ لِذِكْرِي (سورة طه: 14)",
    "إِنَّمَا الْمُؤْمِنُونَ إِخْوَةٌ ۗ فَأَصْلِحُوا بَيْنَ أَخَوَيْكُمْ ۗ وَاتَّقُوا ٱللَّهَ لَعَلَّكُمْ تُرْحَمُونَ (سورة الحجرات: 10)",
    "فَإِنَّ مَعَ ٱلْعُسْرِ يُسْرًا ۝ إِنَّ مَعَ ٱلْعُسْرِ يُسْرًا (سورة الشرح: 5-6)",
    "وَلَا تَقْرَبُوا ٱلزِّنَا ۚ إِنَّهُ كَانَ فَاحِشَةً وَسَاءَ سَبِيلًا (سورة الإسراء: 32)",
    "وَجَاءَتْ سَكْرَةُ الْمَوْتِ بِالْحَقِّ ۚ ذَٰلِكَ مَا كُنتَ مِنْهُ تَحِيدُ (سورة ق: 19)",
  
    "وَإِذَا سَأَلَكَ عِبَادِي عَنِّْي فَإِنِّي قَرِيبٌ ۗ أُجِيبُ دَعْوَةَ الدَّاعِ إِذَا دَعَانِ ۗ فَلْيَسْتَجِيبُوا لِي وَلْيُؤْمِنُوا بِي لَعَلَّهُمْ يَرْشُدُونَ (سورة البقرة: 186)",
    "يَا أَيُّهَا الَّذِينَ آمَنُوا اتَّقُوا اللَّهَ وَقُولُوا قَوْلًا سَدِيدًا ۝ يُصْلِحْ لَكُمْ أَعْمَالَكُمْ ۝ وَيَغْفِرْ لَكُمْ ذُنُوبَكُمْ ۝ وَمَنْ يُطِعِ ٱللَّهَ وَرَسُولَهُ فَقَدْ فَازَ فَوْزًا عَظِيمًا (سورة الأحزاب: 70-71)",
    
    "وَالَّذِينَ هُمْ لِفُرُوجِهِمْ حَافِظُونَ ۝ إِلَّا عَلَى أَزْوَاجِهِمْ أَوْ مَا مَلَكَتْ أَيْمَانُهُمْ فَإِنَّهُمْ غَيْرُ مَلُومِينَ ۝ فَمَنِ ٱبْتَغَىٰ وَرَاءَ ذَٰلِكَ فَأُو۟لَـٰٓئِكَ هُمُ ٱلْعَادُونَ (سورة المؤمنون: 5-7)",
    "وَالَّذِينَ هُمْ لِأَمَانَاتِهِمْ وَعَهْدِهِمْ رَاعُونَ ۝ وَٱلَّذِينَ هُمْ عَلَى صَلَوٰتِهِمْ يُحَافِظُونَ ۝ أُو۟لَـٰٓئِكَ هُمْ ٱلْوَارِثُونَ ۝ ٱلَّذِينَ يَرِثُونَ ٱلْفِرْدَوْسَ هُمْ فِيهَا خَالِدُونَ (سورة المؤمنون: 8-11)",
    "وَمَا هَـٰذِهِ ٱلدُّنْيَا إِلَّا لَعِبٌ وَلَهْوٌ ۗ وَإِنَّ ٱلْآخِرَةَ لَهِيَ الْحَيَوَانُ ۗ لَوْ كَانُوا يَعْلَمُونَ (سورة العنكبوت: 64)",

    "وَالَّذِينَ هُمْ عَنْ لَغْوٍ مُعْرِضُونَ ۝ وَٱلَّذِينَ هُمْ لِلزَّكَوٰةِ فَاعِلُونَ (سورة المؤمنون: 3-4)",

    "وَٱللَّهُ يَعْلَمُ مَا تَسْتُرُونَ وَمَا تُبْدُونَ ۗ وَٱللَّهُ عَلِيمٌ بِذَاتِ الصُّدُورِ (سورة آل عمران: 29)",
    "﴿ ثُمَّ أَنزَلَ اللَّهُ سَكِينَتَهُ عَلَىٰ رَسُولِهِ وَعَلَى الْمُؤْمِنِينَ وَأَنزَلَ جُنُودًا لَّمْ تَرَوْهَا وَعَذَّبَ الَّذِينَ كَفَرُوا ۚ وَذَٰلِكَ جَزَاءُ الْكَافِرِينَ﴾ [ سورة التوبة: 26]",
    "بِسْمِ اللهِ الرَّحْمنِ الرَّحِيمِ(1) الْحَمْدُ للّهِ رَبِّ الْعَالَمِينَ(2) الرَّحْمـنِ الرَّحِيمِ(3) مَالِكِ يَوْمِ الدِّينِ(4) إِيَّاكَ نَعْبُدُ وإِيَّاكَ نَسْتَعِينُ(5) اهدِنَــــا الصِّرَاطَ المُستَقِيمَ(6) صِرَاطَ الَّذِينَ أَنعَمتَ عَلَيهِمْ غَيرِ المَغضُوبِ عَلَيهِمْ وَلاَ الضَّالِّينَ(7) الفاتحة",
    "الَّذِينَ آمَنُواْ وَتَطْمَئِنُّ قُلُوبُهُم بِذِكْرِ اللّهِ أَلاَ بِذِكْرِ اللّهِ تَطْمَئِنُّ الْقُلُوبُ(28) الَّذِينَ آمَنُواْ وَعَمِلُواْ الصَّالِحَاتِ طُوبَى لَهُمْ وَحُسْنُ مَآبٍ(سورة الرعد: 29)",
    "(ٱلرَّحۡمَٰنُ (1) عَلَّمَ ٱلۡقُرۡءَانَ (2) خَلَقَ ٱلۡإِنسَٰنَ (3) عَلَّمَهُ ٱلۡبَيَانَ).",
    
    "(وَمَن يَعْمَلْ سُوءًا أَوْ يَظْلِمْ نَفْسَهُ ثُمَّ يَسْتَغْفِرِ اللَّـهَ يَجِدِ اللَّـهَ غَفُورًا رَّحِيمًا). [سورة النساء، 110]",
    "(وَإِنّي لَغَفّارٌ لِمَن تابَ وَآمَنَ وَعَمِلَ صالِحًا ثُمَّ اهتَدى). [طه، 82]",
    "اقْتَرَبَ لِلنَّاسِ حِسَابُهُمْ وَهُمْ فِي غَفْلَةٍ مُّعْرِضُونَ (1) مَا يَأْتِيهِم مِّن ذِكْرٍ مِّن رَّبِّهِم مُّحْدَثٍ إِلَّا اسْتَمَعُوهُ وَهُمْ يَلْعَبُونَ (2)",
    "(وَمَا كَانَ اللَّهُ لِيُعَذِّبَهُمْ وَأَنتَ فِيهِمْ ۚ وَمَا كَانَ اللَّهُ مُعَذِّبَهُمْ وَهُمْ يَسْتَغْفِرُونَ) (سورة الأنفال)"
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
  