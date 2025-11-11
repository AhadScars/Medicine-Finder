// ======= HEALTH BLOG DATA =======
const blogs = [

  {
    id: "fever-remedies",
    title: "Home Remedies for Fever Relief",
    shortDesc: "Bukhar kam karne ke natural tarike aur doctor kab milna chahiye.",
    content: `
      <h2>Home Remedies for Fever Relief</h2>
      <p>Bukhar ek aisi condition hai jo batati hai ki body kisi infection se lad rahi hai. Ye khud ek bimari nahi, balki ek symptom hai. Jab immune system bacteria ya virus se ladta hai, tab body temperature badh jata hai. Halka bukhar normal hota hai aur kuch dino me thik ho jata hai, lekin zyada temperature ya lambi duration ka fever ignore nahi karna chahiye.</p>

      <h3>🌡️ Fever ke Common Causes</h3>
      <p>Normal body temperature 98.6°F (37°C) hota hai. Jab ye 100.4°F (38°C) se upar jaye to bukhar mana jata hai. Common causes me viral infections (flu, cold, dengue), bacterial infections (throat infection), dehydration, ya seasonal changes shamil hain.</p>

      <h3>🍵 Ghar Ke Nuskhe (Natural Remedies)</h3>
      <ul>
        <li><b>1. Hydration:</b> Bukhar me paani zyada peena bahut zaroori hai. Coconut water, nimbu paani, soup, ya herbal tea se hydration maintain rakhiye.</li>
        <li><b>2. Tulsi-Ginger Kadha:</b> 5–6 tulsi ke patte aur adrak ka chhota tukda paani me ubaal kar kadha banaiye. Thoda shahad milaiye aur din me 2 baar piyein.</li>
        <li><b>3. Sponge Bath:</b> Lukewarm paani me kapda bhigo kar forehead, armpit aur pair par rakhiye. Body temperature naturally kam hota hai.</li>
        <li><b>4. Rest:</b> Bukhar ke dauraan complete aaram karein. Physical kaam ya stress se recovery slow hoti hai.</li>
        <li><b>5. Light Khana:</b> Khichdi, soup, dal-chawal ya fruits jaise light aur easily digest hone wale khane khayein.</li>
      </ul>

      <h3>🩹 Precautions</h3>
      <p>Over-the-counter medicines bina doctor ki salah ke mat lijiye. Bukhar ke time tight kapde aur kambal se garmi aur badh sakti hai. Hawa daar kamre me rahiye.</p>

      <h3>⚠️ Doctor Kab Milna Chahiye</h3>
      <ul>
        <li>Bukhar 102°F se upar jaye.</li>
        <li>3 din se zyada rahe.</li>
        <li>Vomiting, rashes, ya saans lene me dikkat ho.</li>
        <li>Bachchon me 101°F se upar fever ho.</li>
      </ul>

      <h3>💊 Medicine Tip</h3>
      <p>Doctor ke kehne par <b>Dolo 650</b> ya <b>Crocin Advance</b> liya ja sakta hai. Overdose se bachein.</p>

      <h3>🌸 Conclusion</h3>
      <p>Halka fever ghar ke nuskho se manage ho sakta hai. Sabse important hai hydration, rest aur monitoring. Agar condition bigadti dikhe to turant doctor se contact karein.</p>
    `
  },
  {
    id: "cough-cold-remedies",
    title: "Natural Remedies for Cough and Cold",
    shortDesc: "Khansi-jukam ke liye simple aur effective home remedies.",
    content: `
      <h2>Natural Remedies for Cough and Cold</h2>
      <p>Khansi aur jukam har season me aam bimari hai. Ye mostly viral infection ke wajah se hoti hai, aur zyada tar cases me antibiotics ki zarurat nahi padti. Natural home remedies se aap symptoms ko kaafi had tak control kar sakte ho.</p>

      <h3>🌿 Cough aur Cold ke Common Causes</h3>
      <p>Weather change, viral infection, dust allergy, thandi cheezein khana, ya kam immunity ke wajah se cold aur cough hota hai. Symptoms me sore throat, blocked nose, sneezing, aur thakan hoti hai.</p>

      <h3>🍯 Ghar Ke Nuskhe</h3>
      <ul>
        <li><b>1. Honey aur Adrak:</b> Ek chhoti chamach shahad me adrak ka ras milaiye. Din me do baar lene se gala khul jaata hai.</li>
        <li><b>2. Steam Inhalation:</b> Garam paani me thoda Vicks ya namak daal kar bhaap lijiye. Nakh bandi khul jati hai.</li>
        <li><b>3. Turmeric Milk:</b> Doodh me haldi milakar sone se pehle piyein. Ye infection kam karta hai.</li>
        <li><b>4. Salt Gargle:</b> Garam paani me namak daal kar gargle karna sore throat me faida deta hai.</li>
        <li><b>5. Tulsi Chai:</b> Tulsi ke patte ubal kar chai banaiye. Din me 2 baar piyein, ye immunity badhata hai.</li>
      </ul>

      <h3>🧘‍♀️ Preventive Tips</h3>
      <ul>
        <li>Thandi cheezein aur dust se bachein.</li>
        <li>Paani aur fruits zyada lein.</li>
        <li>Haath baar-baar dhoyein.</li>
      </ul>

      <h3>⚠️ Doctor Kab Milna Chahiye</h3>
      <p>Agar khansi 10 din se zyada rahe, bukhar ke sath ho, ya saans lene me dikkat aaye to doctor se milna zaroori hai.</p>

      <h3>💊 Medicine Tip</h3>
      <p>Doctor ke kehne par <b>Ascoril LS Syrup</b> ya <b>Ambroxol</b> wali medicine use kar sakte ho. Antibiotic bina salah ke mat lo.</p>

      <h3>🌸 Conclusion</h3>
      <p>Khansi-jukam aam hai lekin care lena zaroori hai. Natural remedies jaise haldi, adrak, aur steam sabse asardar hain.</p>
    `
  },
  {
    id: "headache-relief",
    title: "Instant and Natural Relief for Headache",
    shortDesc: "Sar dard se chutkaara pane ke natural tarike.",
    content: `
      <h2>Instant and Natural Relief for Headache</h2>
      <p>Sar dard kisi bhi umar me ho sakta hai — stress, dehydration, ya neend ki kami ki wajah se. Headache do tarah ka hota hai: tension headache (pressure wala dard) aur migraine (ek side me tez dard). Ghar ke nuskho se dono me rahat mil sakti hai.</p>

      <h3>🧠 Headache ke Common Causes</h3>
      <ul>
        <li>Neend na lena</li>
        <li>Stress aur anxiety</li>
        <li>Screen time zyada hona</li>
        <li>Paani ki kami</li>
        <li>Galat posture</li>
      </ul>

      <h3>🌿 Ghar ke Upay</h3>
      <ul>
        <li><b>1. Paani Piyo:</b> Dehydration headache ka sabse bada reason hai. Coconut water ya lemon water lo.</li>
        <li><b>2. Thanda ya Garam Compress:</b> Tension headache me thanda, aur sinus headache me garam paani ka compress helpful hota hai.</li>
        <li><b>3. Peppermint Oil:</b> Temple par lagane se thandak milti hai aur dard kam hota hai.</li>
        <li><b>4. Massage:</b> Temple aur neck par halka massage stress kam karta hai.</li>
        <li><b>5. Rest:</b> Light band karke 20 min so jao, migraine me instant relief milta hai.</li>
      </ul>

      <h3>⚠️ Doctor Kab Milna Chahiye</h3>
      <p>Agar headache ke sath vomiting, blurred vision, ya high BP ho to doctor se milna zaroori hai.</p>

      <h3>💊 Medicine Tip</h3>
      <p>Doctor ke kehne par <b>Paracetamol</b> ya <b>Ibuprofen</b> li ja sakti hai, lekin daily use se bachein.</p>

      <h3>🌸 Conclusion</h3>
      <p>Stress aur hydration ko control karke headache ko naturally manage kiya ja sakta hai.</p>
    `
  },
  {
    id: "acidity-relief",
    title: "Home Remedies for Acidity and Indigestion",
    shortDesc: "Gas aur acidity kam karne ke ghar ke nuskhe.",
    content: `
      <h2>Home Remedies for Acidity and Indigestion</h2>
      <p>Acidity ya indigestion me chest burning, gas aur pet me jalan hoti hai. Ye galat khane ka routine aur stress se hota hai. Kuch natural remedies isse turant araam dete hain.</p>

      <h3>🍋 Causes</h3>
      <ul>
        <li>Fried aur spicy food</li>
        <li>Late night dinner</li>
        <li>Stress aur anxiety</li>
        <li>Smoking ya caffeine</li>
      </ul>

      <h3>🍵 Remedies</h3>
      <ul>
        <li><b>1. Cold Milk:</b> Ek glass thanda doodh acidity kam karta hai.</li>
        <li><b>2. Saunf:</b> Khane ke baad thoda saunf chabayein, digestion improve hota hai.</li>
        <li><b>3. Banana:</b> Pet me acid neutralize karta hai.</li>
        <li><b>4. Ajwain:</b> Ajwain aur kala namak paani ke sath lo, gas aur pet dard kam hota hai.</li>
        <li><b>5. Avoid:</b> Junk food, late dinner, aur stress.</li>
      </ul>

      <h3>⚠️ Doctor Kab Milna Chahiye</h3>
      <p>Agar roz acidity ho, ya chest pain ke sath aaye to doctor se checkup zaroor karein.</p>

      <h3>💊 Tip</h3>
      <p><b>Digene</b> ya <b>Eno</b> emergency relief ke liye use kiya ja sakta hai.</p>

      <h3>🌸 Conclusion</h3>
      <p>Healthy khana, paani aur stress control se acidity naturally thik hoti hai.</p>
    `
  },
  {
    id: "constipation-remedies",
    title: "Constipation Relief at Home (Kabj ka Ilaj)",
    shortDesc: "Kabj ke liye natural aur asardar nuskhe.",
    content: `
      <h2>Constipation Relief at Home</h2>
      <p>Kabj ek common problem hai jisme bowel movement irregular ho jaata hai. Ye lifestyle, diet aur dehydration ke wajah se hota hai. Ghar ke nuskhe ise naturally thik karte hain.</p>

      <h3>🌿 Causes</h3>
      <ul>
        <li>Fiber ki kami</li>
        <li>Paani kam peena</li>
        <li>Physical inactivity</li>
        <li>Stress ya medicines</li>
      </ul>

      <h3>🍎 Remedies</h3>
      <ul>
        <li><b>1. Warm Water with Lemon:</b> Subah khali pet garam paani me nimbu aur shahad milakar piyein.</li>
        <li><b>2. Isabgol:</b> Raat me paani ke sath 1 tsp isabgol lo, motion soft hota hai.</li>
        <li><b>3. High-Fiber Diet:</b> Fruits, oats, sabziyaan aur daal khayein.</li>
        <li><b>4. Exercise:</b> Daily 20-minute walk digestion sudharta hai.</li>
        <li><b>5. Avoid Junk Food:</b> Fried food aur cheese constipation badhate hain.</li>
      </ul>

      <h3>⚠️ Doctor Kab Milna Chahiye</h3>
      <p>Agar 3 din tak motion na aaye, ya blood dikhe to doctor se milna chahiye.</p>

      <h3>💊 Tip</h3>
      <p><b>Looz Syrup</b> ya <b>Dulcolax</b> doctor ke kehne par liya ja sakta hai.</p>

      <h3>🌸 Conclusion</h3>
      <p>Kabj me hydration aur fiber sabse zaroori hai. Thoda sa routine badalne se ye puri tarah control ho sakta hai.</p>
    `
  },

    {
      id: "skin-glow-tips",
      title: "Natural Tips for Glowing Skin (Ghar ke Nuskhe se Twacha Chamkayein)",
      shortDesc: "Twacha ko natural glow dene ke asardar aur safe ghar ke upay.",
      content: `
        <h2>Natural Tips for Glowing Skin</h2>
        <p>Har kisi ko ek chamakdar, healthy aur natural glow wali skin chahiye hoti hai. Lekin pollution, stress, kharab diet aur lack of sleep ki wajah se skin dull aur dry lagne lagti hai. Cosmetic creams temporary glow deti hain, par asli chamak aati hai healthy habits aur natural care se.</p>

        <h3>🌿 Glowing Skin ke Main Reasons aur Problems</h3>
        <p>Skin glow tab hoti hai jab andar se hydration aur nutrition sahi ho. Agar aap oily food, sugary snacks, ya kam paani lete ho to toxins accumulate hone lagte hain. Ye acne, pigmentation aur dullness ka reason ban jaata hai.</p>

        <h3>🍯 Ghar ke Nuskhe for Glowing Skin</h3>
        <ul>
          <li><b>1. Honey and Lemon Pack:</b> 1 tsp honey aur ½ tsp lemon juice mix karke face par lagayein. 15 min baad dhoyein. Ye natural bleaching aur moisturizing dono karta hai.</li>
          <li><b>2. Aloe Vera Gel:</b> Fresh aloe gel daily raat ko lagaiye. Ye dryness kam karta hai aur glow badhata hai.</li>
          <li><b>3. Turmeric and Milk:</b> Haldi me milk milakar paste banaiye. Week me 2 baar use karein. Ye tan aur spots kam karta hai.</li>
          <li><b>4. Cucumber Juice:</b> Cucumber skin ko hydrate karta hai. Cotton se laga kar 10 min baad wash karein.</li>
          <li><b>5. Drink Water:</b> Roz 8-10 glass paani piyein. Ye sabse natural glow booster hai.</li>
        </ul>

        <h3>🧘‍♀️ Lifestyle Tips for Skin Glow</h3>
        <ul>
          <li>7–8 ghante ki neend zaroor lein.</li>
          <li>Fruits aur green vegetables daily diet me shamil karein.</li>
          <li>Stress kam karein aur daily thoda walk karein.</li>
          <li>Smoking aur alcohol se bachein.</li>
        </ul>

        <h3>⚠️ Doctor Kab Milna Chahiye</h3>
        <p>Agar acne ya pigmentation zyada ho, ya koi allergy ke signs dikhein, to dermatologist se milna better hai.</p>

        <h3>Medicine Tips</h3>
        <p><strong>Evion 400</strong> – Skin glow ke liye Vitamin E capsule, <strong>Limcee Tablet</strong> – Vitamin C supplement for clear skin.</p>
        <p><em>⚠️ Note:</em> Ye medicines sirf doctor ke salah par hi lein.</p>

        <h3>🌸 Conclusion</h3>
        <p>Glowing skin ke liye expensive creams nahi, balki regular care aur healthy habits zaroori hain. Paani, sleep, aur stress-free life hi asli beauty secret hai.</p>
      `
    },
    {
      id: "hair-fall-solution",
      title: "Hair Fall Control ke Natural Upay",
      shortDesc: "Bal jhadne ke karan aur unhe rokne ke natural solutions.",
      content: `
        <h2>Natural Remedies to Control Hair Fall</h2>
        <p>Aaj kal hair fall ek common problem ban gayi hai — chahe wo pollution ho, stress ho ya poor nutrition. 100 tak baal girna daily normal hai, par jab jhadna zyada ho jaye to treatment zaroori hai. Chemical shampoos ke bajaye natural care zyada effective hota hai.</p>

        <h3>🌿 Hair Fall ke Common Reasons</h3>
        <ul>
          <li>Stress aur anxiety</li>
          <li>Protein ya vitamin ki kami</li>
          <li>Hard water ya chemical shampoo</li>
          <li>Hormonal imbalance</li>
          <li>Heat styling (dryer, straightener)</li>
        </ul>

        <h3>🍵 Ghar Ke Upay</h3>
        <ul>
          <li><b>1. Coconut Oil Massage:</b> Garam nariyal tel se hafte me 2 baar scalp massage karein. Ye roots strong karta hai.</li>
          <li><b>2. Onion Juice:</b> Fresh onion juice scalp par lagayein, 30 min baad dhoyein. Hair growth badhta hai.</li>
          <li><b>3. Aloe Vera:</b> Aloe gel dandruff kam karta hai aur hair follicles nourish karta hai.</li>
          <li><b>4. Amla & Reetha Powder:</b> Inka paste shampoo ke tarah use karein. Natural cleaning karta hai.</li>
          <li><b>5. Balanced Diet:</b> Eggs, daal, nuts aur green vegetables khayein. Protein hair ke liye must hai.</li>
        </ul>

        <h3>🧘‍♂️ Lifestyle Tips</h3>
        <ul>
          <li>Heat styling aur chemical products kam karein.</li>
          <li>Stress ko kam karne ke liye meditation karein.</li>
          <li>Regular oiling aur scalp cleaning maintain rakhein.</li>
        </ul>

        <h3>Medicine Tips</h3>
        <p><strong>Biotin Tablet</strong> – Hair growth ke liye, <strong>Keraglo Men/Women</strong> – Hair nourishment supplement, <strong>Indulekha Oil</strong> – Hair fall control ke liye.</p>
        <p><em>⚠️ Note:</em> Ye medicines sirf doctor ke salah par hi lein.</p>

        <h3>🌸 Conclusion</h3>
        <p>Hair fall control karna mushkil nahi hai. Natural oils, healthy diet aur stress-free lifestyle se baal dobara healthy aur shiny ho sakte hain.</p>
      `
    },
    {
      id: "dandruff-treatment",
      title: "Dandruff se Mukti ke Natural Tarike",
      shortDesc: "Kharish aur flakes se chutkaara pane ke liye asardar upay.",
      content: `
        <h2>Dandruff se Mukti ke Natural Tarike</h2>
        <p>Dandruff ya scalp dryness ek common hair problem hai. Ye white flakes aur itching ke form me hota hai. Winter me zyada hota hai, lekin kuch natural remedies se ise permanently control kiya ja sakta hai.</p>

        <h3>🌿 Dandruff ke Causes</h3>
        <ul>
          <li>Dry scalp ya oily scalp imbalance</li>
          <li>Stress aur kam sleep</li>
          <li>Too much shampooing</li>
          <li>Fungal infection (Malassezia)</li>
        </ul>

        <h3>🍵 Remedies</h3>
        <ul>
          <li><b>1. Neem Leaves:</b> Neem ke patte ubal kar paani se scalp dhoyein. Neem anti-fungal hota hai.</li>
          <li><b>2. Coconut Oil + Lemon:</b> 2 tbsp oil me 1 tsp lemon juice milaiye, scalp par lagayein aur 30 min baad wash karein.</li>
          <li><b>3. Aloe Vera Gel:</b> Fresh aloe scalp par lagayein, cooling aur anti-fungal dono karta hai.</li>
          <li><b>4. Yogurt:</b> Dahi scalp par 20 min lagayein — ye dryness door karta hai.</li>
          <li><b>5. Avoid:</b> Hot water aur harsh chemical shampoos.</li>
        </ul>

        <h3>⚠️ Doctor Kab Milna Chahiye</h3>
        <p>Agar dandruff ke sath redness, bleeding ya zyada hair fall ho to dermatologist se consult karein.</p>

        <h3>🌸 Conclusion</h3>
        <p>Dandruff se chutkaara pane ke liye regular scalp cleaning aur neem-lemon jaise natural nuskhe sabse asardar hain. Consistency zaroori hai.</p>
      `
    },
    {
      id: "acne-treatment",
      title: "Pimples aur Acne ka Natural Ilaj",
      shortDesc: "Face ke pimples ko kam karne ke ghar ke nuskhe aur care tips.",
      content: `
        <h2>Pimples aur Acne ka Natural Ilaj</h2>
        <p>Acne ek common skin problem hai jo mostly oily skin aur hormonal imbalance ke wajah se hoti hai. Chemical creams se temporary relief milta hai, lekin ghar ke nuskhe se skin naturally clear hoti hai.</p>

        <h3>🌿 Acne ke Causes</h3>
        <ul>
          <li>Oily skin aur blocked pores</li>
          <li>Hormonal changes</li>
          <li>Stress aur junk food</li>
          <li>Lack of hygiene</li>
        </ul>

        <h3>🍵 Home Remedies</h3>
        <ul>
          <li><b>1. Multani Mitti:</b> 2 tbsp multani mitti me rose water milakar face pack lagaiye. Oil control karta hai.</li>
          <li><b>2. Neem Paste:</b> Neem leaves paste acne-causing bacteria ko maar deta hai.</li>
          <li><b>3. Honey + Cinnamon:</b> Dono ka mixture anti-bacterial hai. 15 min lagakar dhoyein.</li>
          <li><b>4. Ice Compress:</b> Redness aur swelling kam karta hai.</li>
          <li><b>5. Avoid Touching:</b> Pimples ko dabayein mat, scars badhte hain.</li>
        </ul>

        <h3>🧘‍♀️ Lifestyle Tips</h3>
        <ul>
          <li>Fried food aur sugar kam karein.</li>
          <li>Daily 8 glass paani piyein.</li>
          <li>Face wash din me 2 baar karein.</li>
        </ul>

        <h3>🌸 Conclusion</h3>
        <p>Regular care aur stress-free life se acne kam hota hai. Neem, honey aur multani mitti jaise natural nuskhe sabse safe hain.</p>
      `
    },
    {
      id: "weight-loss-tips",
      title: "Weight Loss ke Natural aur Safe Tarike",
      shortDesc: "Bina diet pills ke wajan kam karne ke simple aur healthy tips.",
      content: `
        <h2>Weight Loss ke Natural aur Safe Tarike</h2>
        <p>Weight loss ka matlab sirf kam khana nahi, balki sahi tarike se apni lifestyle aur diet manage karna hai. Fad diets se short-term result milta hai, lekin healthy habit se permanent fat loss hota hai.</p>

        <h3>🍎 Common Reasons for Weight Gain</h3>
        <ul>
          <li>Processed aur oily food</li>
          <li>Physical inactivity</li>
          <li>Stress aur irregular sleep</li>
          <li>Hormonal imbalance</li>
        </ul>

        <h3>🥗 Natural Tips for Weight Loss</h3>
        <ul>
          <li><b>1. Early Morning Routine:</b> Subah khali pet garam paani me lemon aur honey piyein.</li>
          <li><b>2. Small Meals:</b> 3 heavy meals ke badle 5 chhote meals lo.</li>
          <li><b>3. Avoid Sugar & Junk:</b> Soft drinks, bakery aur deep-fried items band karein.</li>
          <li><b>4. Walk After Dinner:</b> Har meal ke baad 10 min walk digestion improve karta hai.</li>
          <li><b>5. High Fiber Food:</b> Oats, dal, fruits aur vegetables khayein.</li>
        </ul>

        <h3>🧘‍♀️ Lifestyle Changes</h3>
        <ul>
          <li>8 ghante ki neend lein.</li>
          <li>Stress kam karein aur meditation shuru karein.</li>
          <li>Exercise 30 min daily karein — brisk walk ya yoga.</li>
        </ul>

        <h3>🌸 Conclusion</h3>
        <p>Weight loss ek slow aur consistent process hai. Fast results ke chakkar me crash diet na karein. Healthy khana, paani aur routine hi asli formula hai.</p>
      `
    },

    {
      id: "stress-relief-tips",
      title: "Stress aur Anxiety Kam Karne ke Natural Tarike",
      shortDesc: "Tension aur mental stress ko kam karne ke simple aur natural nuskhe.",
      content: `
        <h2>Stress aur Anxiety Kam Karne ke Natural Tarike</h2>
        <p>Aaj ke fast-paced life me stress ek common problem ban gaya hai. Work pressure, relationship issues, financial problems — sab milkar dimaag par bojh daal dete hain. Lekin agar stress ko control nahi kiya gaya, to ye anxiety, depression aur physical health problems tak pahunch sakta hai.</p>

        <h3>🧠 Stress ke Common Signs</h3>
        <ul>
          <li>Har waqt tension aur negative soch</li>
          <li>Neend na aana ya zyada sone ka mann</li>
          <li>Headache, back pain ya body pain</li>
          <li>Gussa ya irritability</li>
          <li>Khaane ki aadat me badlav (bahut zyada ya bahut kam khana)</li>
        </ul>

        <h3>🌿 Natural Remedies aur Upay</h3>
        <ul>
          <li><b>1. Deep Breathing:</b> Roz 10 minute deep breathing exercise karein. Isse heart rate control me aata hai aur mind calm hota hai.</li>
          <li><b>2. Meditation:</b> Subah ya raat me 10–15 min dhyan lagaiye. Ye anxiety aur overthinking kam karta hai.</li>
          <li><b>3. Herbal Tea:</b> Chamomile, tulsi ya green tea lene se dimaag relax hota hai.</li>
          <li><b>4. Music Therapy:</b> Apni pasand ka soothing music suniye, instantly mood uplift hota hai.</li>
          <li><b>5. Daily Walk:</b> Outdoor walk stress hormones (cortisol) ko kam karta hai aur endorphins badhata hai.</li>
        </ul>

        <h3>💡 Extra Tips</h3>
        <ul>
          <li>Apni routine me “me-time” zaroor rakhein.</li>
          <li>Social media se thoda break lein.</li>
          <li>Healthy sleep aur balanced diet follow karein.</li>
        </ul>

        <h3>🌸 Conclusion</h3>
        <p>Stress ko poori tarah khatam karna mushkil hai, lekin control karna possible hai. Thoda exercise, meditation aur positive thinking aapki life badal sakti hai.</p>
      `
    },
    {
      id: "sleep-tips",
      title: "Nind Na Aane ka Ilaj – Sound Sleep ke Natural Tips",
      shortDesc: "Insomnia ya neend ki kami door karne ke liye natural remedies aur habits.",
      content: `
        <h2>Nind Na Aane ka Ilaj – Natural Remedies for Better Sleep</h2>
        <p>Aaj kal stress, overthinking aur late-night phone use ki wajah se log neend ki problem se joojh rahe hain. Neend sirf rest nahi, balki body aur mind ke recharge hone ka time hota hai. Agar aapko sone me dikkat hoti hai, to ye natural tips help karenge.</p>

        <h3>😴 Neend Na Aane ke Common Causes</h3>
        <ul>
          <li>Overthinking ya stress</li>
          <li>Late-night screen time</li>
          <li>Caffeine ya nicotine ka zyada use</li>
          <li>Irregular sleep schedule</li>
          <li>Room lighting aur noise</li>
        </ul>

        <h3>🌿 Natural Tips for Sound Sleep</h3>
        <ul>
          <li><b>1. Consistent Routine:</b> Roz ek hi time sone aur uthne ki aadat daalein.</li>
          <li><b>2. Avoid Mobile:</b> Sone se kam se kam 30 min pehle phone band karein.</li>
          <li><b>3. Warm Milk:</b> Raat me garam doodh peene se mind calm hota hai.</li>
          <li><b>4. Chamomile Tea:</b> Ye natural sedative hai jo neend lane me help karta hai.</li>
          <li><b>5. Meditation:</b> Sone se pehle 10 min deep breathing karein.</li>
        </ul>

        <h3>🛏️ Sleep Environment</h3>
        <ul>
          <li>Room ko thoda dark aur quiet rakhein.</li>
          <li>Bed sirf sone ke liye use karein, phone ya TV ke liye nahi.</li>
          <li>Comfortable pillow aur bedsheet use karein.</li>
        </ul>

        <h3>🌸 Conclusion</h3>
        <p>Neend ki kami se body aur mind dono par bura asar padta hai. Agar aap daily in chhoti habits ko apnate hain, to bina medicine ke achhi neend mil sakti hai.</p>
      `
    },
    {
      id: "boost-immunity",
      title: "Immunity Badhane ke Natural Tarike",
      shortDesc: "Sharir ki rog-pratirodhak shakti badhane ke liye simple daily habits.",
      content: `
        <h2>Immunity Badhane ke Natural Tarike</h2>
        <p>Immunity body ka defense system hai jo infections aur viruses se protect karta hai. Agar aap baar-baar bimar padte ho, to iska matlab immunity kam hai. Thoda sa lifestyle aur khane me badlav karke ise naturally badhaya ja sakta hai.</p>

        <h3>🩺 Weak Immunity ke Signs</h3>
        <ul>
          <li>Baar-baar cold ya throat infection</li>
          <li>Wound ka der se heal hona</li>
          <li>Thakan aur kam energy</li>
        </ul>

        <h3>🌿 Natural Immunity Boosters</h3>
        <ul>
          <li><b>1. Tulsi aur Giloy Kadha:</b> 4-5 tulsi patte aur giloy ka piece paani me ubaal kar roz piyein.</li>
          <li><b>2. Vitamin C Foods:</b> Amla, orange, lemon, aur guava khayein. Ye white blood cells strong karte hain.</li>
          <li><b>3. Haldi Milk:</b> Turmeric me anti-inflammatory properties hoti hain.</li>
          <li><b>4. Garlic:</b> Kachha lahsun ya khane me include karein — ye natural antibiotic hai.</li>
          <li><b>5. Exercise:</b> Daily 30 min walk immunity badhata hai.</li>
        </ul>

        <h3>💡 Lifestyle Habits</h3>
        <ul>
          <li>8 ghante ki neend lein.</li>
          <li>Stress kam karein.</li>
          <li>Smoking aur alcohol avoid karein.</li>
        </ul>

        <h3>🌸 Conclusion</h3>
        <p>Immunity ek din me nahi banti. Regular healthy khana, neend aur positive routine se body naturally strong hoti hai.</p>
      `
    },
    {
      id: "menstrual-pain-relief",
      title: "Menstrual Pain (Periods Dard) ke Natural Upay",
      shortDesc: "Mahavari ke dard ko kam karne ke liye ghar ke simple aur safe upay.",
      content: `
        <h2>Menstrual Pain (Periods Dard) ke Natural Upay</h2>
        <p>Periods ke dauraan lower abdomen me cramps, back pain aur mood swings common hote hain. Painkiller lene ke bajaye kuch natural remedies se ye pain asani se kam ho sakta hai.</p>

        <h3>🌿 Dard ke Common Reasons</h3>
        <ul>
          <li>Hormonal imbalance</li>
          <li>Stress aur dehydration</li>
          <li>Iron ya magnesium ki kami</li>
        </ul>

        <h3>🍵 Natural Remedies</h3>
        <ul>
          <li><b>1. Hot Water Bag:</b> Lower abdomen par 10–15 min rakhein, pain kam hota hai.</li>
          <li><b>2. Ginger Tea:</b> Adrak aur honey wali chai cramps me relief deti hai.</li>
          <li><b>3. Exercise:</b> Light walk ya yoga se blood flow improve hota hai.</li>
          <li><b>4. Hydration:</b> Paani aur coconut water zyada lein.</li>
          <li><b>5. Avoid:</b> Caffeine aur junk food during periods.</li>
        </ul>

        <h3>🧘‍♀️ Self-Care Tips</h3>
        <ul>
          <li>Relax aur stress kam rakhein.</li>
          <li>Iron-rich food (palak, beetroot) khayein.</li>
          <li>Neend puri lein.</li>
        </ul>

        <h3>🌸 Conclusion</h3>
        <p>Periods ke dard me painkiller lene ke bajaye warm compress, herbal tea aur rest sabse best solutions hain. Apne body ko samajhiye aur gentle care dijiyega.</p>
      `
    },
    {
      id: "joint-pain-remedies",
      title: "Joint aur Ghutne ke Dard ke Natural Upay",
      shortDesc: "Arthritis aur joint stiffness me rahat ke liye ghar ke nuskhe.",
      content: `
        <h2>Joint aur Ghutne ke Dard ke Natural Upay</h2>
        <p>Joint pain ya arthritis umar ke sath badhne wali common problem hai. Lekin aaj kal young log bhi sedentary lifestyle ke wajah se affected hote hain. Pain aur stiffness kam karne ke liye kuch effective natural remedies hain.</p>

        <h3>🦵 Joint Pain ke Common Causes</h3>
        <ul>
          <li>Calcium aur Vitamin D ki kami</li>
          <li>Obesity aur lack of movement</li>
          <li>Old injury ya arthritis</li>
        </ul>

        <h3>🌿 Natural Remedies</h3>
        <ul>
          <li><b>1. Hot Compress:</b> Dard wale area par 15 min tak garam paani se sekai karein.</li>
          <li><b>2. Turmeric Milk:</b> Haldi me curcumin hota hai jo anti-inflammatory hai.</li>
          <li><b>3. Gentle Exercise:</b> Morning walk aur yoga se stiffness kam hoti hai.</li>
          <li><b>4. Massage:</b> Mustard ya sesame oil se halka massage karein.</li>
          <li><b>5. Epsom Salt Bath:</b> Garam paani me epsom salt milakar soak karein, muscles relax hote hain.</li>
        </ul>

        <h3>💡 Diet Tips</h3>
        <ul>
          <li>Calcium-rich food (milk, paneer, sesame) lein.</li>
          <li>Green vegetables aur fish oil helpful hai.</li>
        </ul>

        <h3>🌸 Conclusion</h3>
        <p>Joint pain me consistency zaruri hai. Regular exercise, haldi milk aur warm compress se natural relief milta hai bina medicine ke.</p>
      `
    },

      {
        id: "back-pain-remedies",
        title: "Kamar Dard ke Natural Upay (Back Pain Relief at Home)",
        shortDesc: "Kamar dard se rahat paane ke liye effective ghar ke nuskhe aur lifestyle tips.",
        content: `
          <h2>Kamar Dard ke Natural Upay (Back Pain Relief at Home)</h2>

          <p>Kamar dard ya lower back pain aaj ke daur ki sabse common problems me se ek hai. Long sitting jobs, wrong posture, stress, aur physical inactivity ki wajah se ye har age group me dekhne ko milta hai. Pehle log sochte the ki ye sirf badhi umar me hota hai, lekin ab to young log bhi is problem se pareshaan hain. Agar isse early stage par manage kiya jaye to dawa ki zarurat nahi padti.</p>

          <h3>💥 Kamar Dard ke Common Causes</h3>
          <ul>
            <li><b>1. Galat posture:</b> Bahut der tak jhuke hue baithna ya computer screen par bent rehna.</li>
            <li><b>2. Lamba samay tak baithna:</b> Office me continuous sitting se back muscles weak ho jaate hain.</li>
            <li><b>3. Heavy lifting:</b> Bina support ke zyada weight uthana.</li>
            <li><b>4. Stress:</b> Mental stress se muscles tight ho jaate hain.</li>
            <li><b>5. Lack of movement:</b> Exercise na karne se spine stiff ho jati hai.</li>
          </ul>

          <h3>🌿 Natural Remedies (Ghar ke Nuskhe)</h3>
          <ul>
            <li><b>1. Garam Paani se Sekai:</b> Heating pad ya hot water bag se lower back par 10–15 min tak sekai karein. Ye muscles relax karta hai.</li>
            <li><b>2. Halka Massage:</b> Mustard oil me thoda camphor daal kar garam karein aur halki massage karein. Blood flow improve hota hai.</li>
            <li><b>3. Turmeric Milk:</b> Haldi me curcumin hota hai jo anti-inflammatory hai. Raat me ek glass doodh ke sath lein.</li>
            <li><b>4. Yoga aur Stretching:</b> Cat-Cow pose, Child pose, aur Bhujangasana back pain me faida dete hain.</li>
            <li><b>5. Posture Check:</b> Straight baithne ki aadat daalein. Office chair par cushion support lein.</li>
          </ul>

          <h3>🏃‍♂️ Lifestyle Tips</h3>
          <ul>
            <li>Daily 20–30 min walk zaroor karein.</li>
            <li>Soft mattress par na soyein, medium firm bed choose karein.</li>
            <li>Stress kam karne ke liye meditation karein.</li>
            <li>Mobile use karte waqt jhuk kar na dekhein.</li>
          </ul>

          <h3>⚠️ Doctor Kab Milna Chahiye</h3>
          <p>Agar back pain ke sath numbness, leg me dard ya bladder control issue aaye to immediately doctor se consult karein. Ye spine nerve compression ka sign ho sakta hai.</p>

          <h3>🌸 Conclusion</h3>
          <p>Kamar dard se bachne ka best tareeka hai apne posture aur routine ko theek rakhna. Thoda stretching, rest aur healthy khana se aapki reedh ki haddi strong aur flexible bani rahegi.</p>
        `
      },
      {
        id: "toothache-relief",
        title: "Daant ke Dard ke Ghar ke Nuskhe (Toothache Relief Naturally)",
        shortDesc: "Daant ke dard me turant rahat paane ke liye natural remedies aur dental care tips.",
        content: `
          <h2>Daant ke Dard ke Ghar ke Nuskhe (Toothache Relief Naturally)</h2>

          <p>Daant ka dard chhoti si problem lagti hai, lekin jab pain badhta hai to poora din bechain kar deta hai. Ye cavity, gum infection ya sensitivity ke wajah se hota hai. Agar early care li jaye to painkiller ki zarurat nahi padti.</p>

          <h3>🦷 Common Causes of Tooth Pain</h3>
          <ul>
            <li>Cavity ya daant me hole</li>
            <li>Gum infection (gingivitis)</li>
            <li>Cold or hot cheezein khane se sensitivity</li>
            <li>Food stuck hona ya dental plaque</li>
          </ul>

          <h3>🌿 Home Remedies</h3>
          <ul>
            <li><b>1. Clove Oil:</b> Clove oil me eugenol hota hai jo natural painkiller hai. Cotton par lagakar dard wale daant par rakhein.</li>
            <li><b>2. Salt Water Gargle:</b> Garam paani me half tsp namak milakar gargle karein. Ye bacteria kam karta hai.</li>
            <li><b>3. Garlic Paste:</b> Lahsun natural antibiotic hai. Paste bana kar daant par 5 min rakhein.</li>
            <li><b>4. Cold Compress:</b> Cheek ke bahar ice pack lagane se swelling kam hoti hai.</li>
            <li><b>5. Peppermint Tea Bag:</b> Used tea bag ko fridge me thanda karke gums par rakhein.</li>
          </ul>

          <h3>🧼 Prevention Tips</h3>
          <ul>
            <li>Din me do baar brush karein.</li>
            <li>Soft bristle toothbrush use karein.</li>
            <li>Har 6 mahine dental check-up karayein.</li>
          </ul>

          <h3>🌸 Conclusion</h3>
          <p>Daant ke dard me clove oil aur salt gargle best emergency remedy hain. Lekin permanent cure ke liye dentist ke paas jana hi sabse safe option hai.</p>
        `
      },
      {
        id: "eye-strain-relief",
        title: "Aankhon ki Thakan aur Dry Eyes ke Natural Upay",
        shortDesc: "Screen use se hone wali aankhon ki thakan door karne ke simple home remedies.",
        content: `
          <h2>Aankhon ki Thakan aur Dry Eyes ke Natural Upay</h2>

          <p>Mobile, laptop aur TV screens humari aankhon ko sabse zyada damage kar rahe hain. Long screen exposure se aankhon me dard, sukhapan aur watering hoti hai. Ye problem “Digital Eye Strain” kehlati hai, aur ise simple habits se manage kiya ja sakta hai.</p>

          <h3>👁️ Common Symptoms</h3>
          <ul>
            <li>Aankhon me jalan aur dryness</li>
            <li>Blurred vision</li>
            <li>Headache ya heaviness</li>
            <li>Light sensitivity</li>
          </ul>

          <h3>🌿 Remedies</h3>
          <ul>
            <li><b>1. 20-20-20 Rule:</b> Har 20 minute ke baad 20 second ke liye 20 feet door dekhein.</li>
            <li><b>2. Blink Often:</b> Screen ke dauran blink frequency badhayein.</li>
            <li><b>3. Rose Water:</b> Cotton pad rose water me bhigo kar aankhon par rakhein.</li>
            <li><b>4. Cold Compress:</b> Eyes ko relax karne ke liye thanda paani use karein.</li>
            <li><b>5. Hydration:</b> 8 glass paani roz piyein.</li>
          </ul>

          <h3>💡 Lifestyle Changes</h3>
          <ul>
            <li>Screen brightness reduce karein.</li>
            <li>Blue light filter glasses use karein.</li>
            <li>Raat me 7–8 ghante ki neend lein.</li>
          </ul>

          <h3>🌸 Conclusion</h3>
          <p>Aankhon ki health ke liye regular breaks, hydration aur proper sleep sabse important hain. Ye small steps long-term vision protect karte hain.</p>
        `
      },
      {
        id: "sore-throat-remedies",
        title: "Gale ke Dard ka Natural Ilaj (Sore Throat Remedies)",
        shortDesc: "Throat pain aur kharash kam karne ke effective natural remedies aur gargle tips.",
        content: `
          <h2>Gale ke Dard ka Natural Ilaj (Sore Throat Remedies)</h2>

          <p>Gale ka dard ya kharash thand lagne, infection ya zyada bolne ke wajah se hoti hai. Ye mostly viral hota hai aur antibiotics ki zarurat kam hi padti hai. Kuch natural remedies ise 2–3 din me thik kar dete hain.</p>

          <h3>🦠 Common Causes</h3>
          <ul>
            <li>Cold aur viral infection</li>
            <li>Pollution ya smoking</li>
            <li>Thanda pani ya ice-cream</li>
            <li>Voice strain (zyada bolna ya chillana)</li>
          </ul>

          <h3>🌿 Home Remedies</h3>
          <ul>
            <li><b>1. Salt Gargle:</b> Garam paani me namak daal kar gargle karein, ye bacteria ko maar kar swelling kam karta hai.</li>
            <li><b>2. Honey-Ginger Mix:</b> Shahad aur adrak ka juice milakar lein, sore throat soothe hota hai.</li>
            <li><b>3. Steam Inhalation:</b> Bhaap lene se throat dryness aur cough kam hota hai.</li>
            <li><b>4. Turmeric Milk:</b> Night me haldi doodh lena infection kam karta hai.</li>
            <li><b>5. Avoid Thandi Cheezein:</b> Cold drinks aur dahi temporarily avoid karein.</li>
          </ul>

          <h3>💡 Prevention Tips</h3>
          <ul>
            <li>Hydration maintain rakhein.</li>
            <li>Voice rest lein.</li>
            <li>Garam soups ya green tea lein.</li>
          </ul>

          <h3>🌸 Conclusion</h3>
          <p>Gale ke dard ka best ilaj hai gargle, rest aur hydration. 2–3 din me relief mil jaata hai bina zyada medicines ke.</p>
        `
      },
      {
        id: "diarrhea-care",
        title: "Loose Motion (Diarrhea) ke Ghar ke Upay",
        shortDesc: "Pet kharab hone par dehydration aur kamzori se bachne ke effective home care tips.",
        content: `
          <h2>Loose Motion (Diarrhea) ke Ghar ke Upay</h2>

          <p>Loose motion ya diarrhea ek aisi problem hai jisme frequent watery stool hota hai, jisse body me dehydration aur kamzori ho jaati hai. Ye viral infection, contaminated food, ya digestive imbalance ke wajah se hota hai.</p>

          <h3>🤒 Symptoms</h3>
          <ul>
            <li>Bar-bar paikhana lagna</li>
            <li>Pet me pain aur gurgurahat</li>
            <li>Thakan aur dehydration</li>
          </ul>

          <h3>🌿 Home Remedies</h3>
          <ul>
            <li><b>1. ORS:</b> Har stool ke baad ek glass ORS solution piyein. Ye lost minerals wapas lata hai.</li>
            <li><b>2. Banana & Rice:</b> Plain rice aur banana easy digest hota hai aur stool firm karta hai.</li>
            <li><b>3. Curd:</b> Dahi me probiotics hote hain jo gut bacteria balance karte hain.</li>
            <li><b>4. Ginger Tea:</b> Adrak gas aur cramps kam karta hai.</li>
            <li><b>5. Hydration:</b> Coconut water aur soup lein.</li>
          </ul>

          <h3>⚠️ Doctor Kab Milna Chahiye</h3>
          <p>Agar diarrhea 2 din se zyada chale, stool me blood aaye, ya vomiting ho to turant doctor se consult karein.</p>

          <h3>🌸 Conclusion</h3>
          <p>Loose motion ke dauraan sabse important hai paani aur ORS se hydration maintain rakhna. Proper rest aur bland diet se aap 1–2 din me theek ho sakte hain.</p>
        `
      },

        {
          id: "gas-bloating-relief",
          title: "Gas aur Pet Phoolne ke Natural Upay (Bloating Relief)",
          shortDesc: "Pet me gas, heaviness aur bloating kam karne ke liye natural aur safe home remedies.",
          content: `
            <h2>Gas aur Pet Phoolne ke Natural Upay</h2>

            <p>Pet me gas ya bloating ek common digestive problem hai jo har kisi ko kabhi na kabhi hoti hi hai. Ye tab hoti hai jab food sahi se digest nahi hota ya pet me extra air accumulate ho jaati hai. Isse pet tight lagta hai, dard hota hai aur kabhi kabhi chest tak jalan mehsoos hoti hai. Lekin achhi baat ye hai ki kuch simple ghar ke nuskhe ise instantly relief dete hain.</p>

            <h3>💨 Gas aur Bloating ke Common Causes</h3>
            <ul>
              <li>Fried aur oily food ka zyada consumption</li>
              <li>Khate waqt jaldi-jaldi khana</li>
              <li>Overeating ya soda drinks lena</li>
              <li>Constipation aur digestion slow hona</li>
              <li>Stress aur kam physical activity</li>
            </ul>

            <h3>🌿 Ghar Ke Asardar Upay</h3>
            <ul>
              <li><b>1. Ajwain aur Kala Namak:</b> 1 tsp ajwain me thoda kala namak milakar garam paani ke sath lein. Ye gas aur pet dard me instant relief deta hai.</li>
              <li><b>2. Jeera Water:</b> Jeera ko paani me ubaal kar din me 2 baar piyein. Ye digestion ko improve karta hai aur acidity kam karta hai.</li>
              <li><b>3. Fennel Seeds (Saunf):</b> Khane ke baad saunf chabane se gas control me rehti hai.</li>
              <li><b>4. Lemon Water:</b> Subah garam paani me nimbu aur thoda namak milakar peene se gas banti nahi hai.</li>
              <li><b>5. Ginger Tea:</b> Adrak digestion ko boost karta hai aur stomach bloating kam karta hai.</li>
            </ul>

            <h3>🥗 Preventive Tips</h3>
            <ul>
              <li>Khane ke baad thoda walk zaroor karein.</li>
              <li>Carbonated drinks aur junk food avoid karein.</li>
              <li>Fibre-rich food (fruits, oats) diet me shamil karein.</li>
              <li>Stress kam karein aur regular exercise karein.</li>
            </ul>

            <h3>⚠️ Doctor Kab Milna Chahiye</h3>
            <p>Agar gas ke sath chest pain, vomiting ya stool problem ho to doctor se checkup zaroor karayein. Ye gastric ulcer ya infection ka sign bhi ho sakta hai.</p>

            <h3>🌸 Conclusion</h3>
            <p>Gas aur bloating control karna mushkil nahi hai. Khana dhire khayein, paani zyada piyein aur thoda yoga karein — ye teen habits digestion ko strong aur pet ko healthy banati hain.</p>
          `
        },
        {
          id: "weakness-fatigue-tips",
          title: "Body Weakness aur Thakan Door Karne ke Natural Tarike",
          shortDesc: "Kamzori, fatigue aur energy ki kami ko door karne ke liye natural diet aur lifestyle tips.",
          content: `
            <h2>Body Weakness aur Thakan Door Karne ke Natural Tarike</h2>

            <p>Roz ke kaam, stress aur unhealthy diet ke chakkar me aksar log thakan aur kamzori mehsoos karte hain. Ye sirf neend ki kami nahi hoti, balki nutritional deficiency, dehydration ya lifestyle imbalance ka result hota hai. Agar ispar dhyaan diya jaye to aap bina medicine ke apni energy wapas paa sakte hain.</p>

            <h3>💤 Weakness ke Common Causes</h3>
            <ul>
              <li>Poor diet — iron, vitamin B12 ya protein ki kami</li>
              <li>Neend ki kami</li>
              <li>Stress aur overthinking</li>
              <li>Water aur mineral loss</li>
              <li>Lack of exercise</li>
            </ul>

            <h3>🌿 Natural Remedies</h3>
            <ul>
              <li><b>1. Balanced Diet:</b> Apne khane me protein (dal, paneer, eggs) aur iron-rich foods (palak, beetroot, jaggery) shamil karein.</li>
              <li><b>2. Hydration:</b> 8–10 glass paani roz piyein. Coconut water aur nimbu paani minerals wapas laate hain.</li>
              <li><b>3. Dry Fruits:</b> Soaked almonds, dates aur raisins subah khali pet lein.</li>
              <li><b>4. Adequate Sleep:</b> 7–8 ghante ki neend lene se body recharge hoti hai.</li>
              <li><b>5. Yoga aur Walk:</b> Blood circulation aur oxygen supply badhata hai, jisse energy boost milta hai.</li>
            </ul>

            <h3>💡 Additional Tips</h3>
            <ul>
              <li>Smoking aur alcohol avoid karein.</li>
              <li>Daily sunlight exposure lein — vitamin D zaroori hai.</li>
              <li>Overthinking aur late-night phone use kam karein.</li>
            </ul>

            <h3>🌸 Conclusion</h3>
            <p>Kamzori door karne ke liye bas teen cheezein follow karein — healthy food, achhi neend aur positive routine. Ye long-term stamina aur freshness ke liye sabse best formula hai.</p>
          `
        },
        {
          id: "seasonal-flu-care",
          title: "Seasonal Flu aur Viral Fever se Bachav ke Natural Upay",
          shortDesc: "Season change me hone wale viral flu se bachne ke liye effective natural tips.",
          content: `
            <h2>Seasonal Flu aur Viral Fever se Bachav ke Natural Upay</h2>

            <p>Jab mausam badalta hai, tab viral infections tezi se failte hain. Sardi, khansi, bukhar aur sore throat jaise symptoms aam hote hain. Flu se bachne ka sabse acha tareeka hai immunity strong rakhna aur basic hygiene follow karna.</p>

            <h3>🤧 Common Symptoms</h3>
            <ul>
              <li>Bukhar aur body pain</li>
              <li>Khansi aur gala kharab</li>
              <li>Thakan aur appetite kam hona</li>
              <li>Sneezing aur blocked nose</li>
            </ul>

            <h3>🌿 Natural Prevention Tips</h3>
            <ul>
              <li><b>1. Tulsi Kadha:</b> Tulsi, adrak aur haldi ubal kar kadha piyein — ye natural immunity booster hai.</li>
              <li><b>2. Vitamin C Foods:</b> Amla, orange aur lemon se infection se bachav hota hai.</li>
              <li><b>3. Warm Water:</b> Cold drinks avoid karein aur garam paani hi piyein.</li>
              <li><b>4. Steam Inhalation:</b> Nakh bandi aur sore throat me helpful hai.</li>
              <li><b>5. Sleep:</b> Rest lena recovery ke liye sabse zaroori hai.</li>
            </ul>

            <h3>🧼 Hygiene Tips</h3>
            <ul>
              <li>Haath baar-baar dhoyein.</li>
              <li>Mask pehnein jab bheed me jayein.</li>
              <li>Khansi ke waqt tissue ya elbow use karein.</li>
            </ul>

            <h3>🌸 Conclusion</h3>
            <p>Flu season me strong immunity aur cleanliness hi sabse badi safety hai. Thoda sa dhyaan aur natural care aapko seasonal viral se bacha sakta hai.</p>
          `
        },
        {
          id: "dengue-prevention",
          title: "Dengue Se Bachav ke Natural Tarike",
          shortDesc: "Machhar ke kaato aur platelet loss se bachne ke effective natural measures.",
          content: `
            <h2>Dengue Se Bachav ke Natural Tarike</h2>

            <p>Dengue ek viral infection hai jo Aedes mosquito ke kaatne se failta hai. Isme high fever, headache, aur platelets kam ho jaate hain. Prevention sabse important step hai kyunki iska koi direct medicine nahi hota.</p>

            <h3>🦟 Dengue ke Symptoms</h3>
            <ul>
              <li>Sudden high fever</li>
              <li>Severe body aur joint pain</li>
              <li>Red rashes</li>
              <li>Platelet count ka kam hona</li>
            </ul>

            <h3>🌿 Prevention Tips</h3>
            <ul>
              <li><b>1. Water Cleanliness:</b> Ghar ke aas-paas paani jama na hone dein.</li>
              <li><b>2. Mosquito Protection:</b> Full sleeves kapde aur mosquito repellent lagayein.</li>
              <li><b>3. Papaya Leaf Juice:</b> Platelets badhane ke liye helpful hai.</li>
              <li><b>4. Neem aur Tulsi Kadha:</b> Body immunity strong rakhta hai.</li>
              <li><b>5. Window Screens:</b> Machharon ka entry rokne ke liye essential hai.</li>
            </ul>

            <h3>💡 Diet Tips</h3>
            <ul>
              <li>Coconut water aur soups se hydration rakhein.</li>
              <li>Vitamin C rich foods lein.</li>
              <li>Oil aur fried food avoid karein.</li>
            </ul>

            <h3>🌸 Conclusion</h3>
            <p>Dengue ka cure natural immunity aur cleanliness me hi hai. Machhar ke breeding areas clean rakhein aur body ko hydrated aur healthy banaye rakhein.</p>
          `
        },
        {
          id: "malaria-prevention",
          title: "Malaria Se Bachav ke Natural Upay",
          shortDesc: "Rainy season me machharon se bachne aur malaria se protection ke natural tips.",
          content: `
            <h2>Malaria Se Bachav ke Natural Upay</h2>

            <p>Malaria bhi machhar ke kaatne se hone wali serious bimari hai. Iska virus “Plasmodium” blood me jaakar liver aur RBCs ko damage karta hai. Ye mostly monsoon season me badhta hai jab paani jama hota hai.</p>

            <h3>🩸 Malaria ke Symptoms</h3>
            <ul>
              <li>High fever with chills</li>
              <li>Excessive sweating</li>
              <li>Headache aur nausea</li>
              <li>Body pain aur weakness</li>
            </ul>

            <h3>🌿 Prevention Tips</h3>
            <ul>
              <li><b>1. Mosquito Nets:</b> Raat me bed net me soyen, especially rainy season me.</li>
              <li><b>2. Neem Oil:</b> Neem oil skin par lagaiye, ye natural mosquito repellent hai.</li>
              <li><b>3. Clean Environment:</b> Ghar aur aas-paas paani jama na hone dein.</li>
              <li><b>4. Garlic & Tulsi:</b> Dono immunity boost karte hain aur infection se bachate hain.</li>
            </ul>

            <h3>💡 Healthy Habits</h3>
            <ul>
              <li>Vitamin C aur iron rich diet lein.</li>
              <li>Paani puri matra me piyein.</li>
              <li>Regular body temperature check karein.</li>
            </ul>


            <h3>🌸 Conclusion</h3>
            <p>Malaria se bachav ka best tareeka hai machhar control aur apni immunity strong rakhna. Regular cleaning aur repellent use karne se ye bimari door rahegi.</p>
`
        }


    ];

// ======= DOM ELEMENTS =======
const blogListEl = document.getElementById("blogList");
const countEl = document.getElementById("blogCount");
const metaEl = document.getElementById("blogMeta");
const noBlogsEl = document.getElementById("noBlogs");
const input = document.getElementById("searchBlog");

// ======= FUNCTIONS =======

// Search blogs by title, shortDesc, or content
function searchBlogs(q) {
  q = q.trim().toLowerCase();
  if (!q) return blogs; // ✅ return all blogs when search is empty
  return blogs.filter(b =>
    (b.title + b.shortDesc + b.content).toLowerCase().includes(q)
  );
}

// Highlight searched word
function highlight(text, q) {
  if (!q) return text;
  return text.replace(new RegExp(`(${q})`, "ig"), "<mark>$1</mark>");
}

// Render blogs in grid
function renderBlogs(list, q) {
  blogListEl.innerHTML = "";

  if (!list.length) {
    countEl.textContent = "0 results";
    metaEl.textContent = `No blogs found for "${q}"`;
    noBlogsEl.style.display = "block";
    return;
  }

  noBlogsEl.style.display = "none";
  countEl.textContent = `${list.length} blog${list.length > 1 ? "s" : ""}`;
  metaEl.textContent = q.trim()
    ? `Showing ${list.length} related result${list.length > 1 ? "s" : ""}`
    : "Showing all health blogs";

  list.forEach(b => renderBlogCard(b, q));
}

// Render single blog card
function renderBlogCard(b, q = "") {
  const div = document.createElement("div");
  div.className = "card";
 div.innerHTML = `
   <h3>${highlight(b.title, q)}</h3>
   <p class="small">${highlight(b.shortDesc, q)}</p>
   <button class="details" onclick="openBlog('${b.id}')">Read More</button>
 `;
  blogListEl.appendChild(div);
}

// ======= Overlay handling =======
const overlay = document.getElementById("blogOverlay");
const panelContent = document.getElementById("blogContent");
const closeBtn = document.getElementById("closeBlogBtn");

function openBlog(id) {
  const blog = blogs.find(b => b.id === id);
  if (!blog) return;

  panelContent.innerHTML = `
    <div class="panel-section">
      <div class="blog-content">${blog.content}</div>
    </div>
  `;

  overlay.style.display = "flex";
}

closeBtn.addEventListener("click", () => overlay.style.display = "none");
overlay.addEventListener("click", e => {
  if (e.target === overlay) overlay.style.display = "none";
});

// ======= Debounce function =======
function debounce(fn, delay = 200) {
  let t;
  return (...args) => {
    clearTimeout(t);
    t = setTimeout(() => fn(...args), delay);
  };
}

// ======= Search functionality =======
const doSearch = debounce(() => {
  const q = input.value;
  const results = searchBlogs(q);
  renderBlogs(results, q);
}, 200);

input.addEventListener("input", doSearch);

// ======= Initial render (Show All Blogs Initially) =======
renderBlogs(blogs, "");
