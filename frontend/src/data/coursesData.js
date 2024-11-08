const coursesData = [
  {
    grade: "Grade 1",
    subjects: [
      {
        name: "English",
        ebook:
          "https://member.log.agl.or.ke/maglex/kalasik/GRADE1/ENGLISH/GRADE 1 ENGLISH EBOOK.PDF",
        outline:
          "https://member.log.agl.or.ke/maglex/kalasik/GRADE1/ENGLISH/GRADE%201%20ENGLISH%20OUTLINE.PDF",
        id: "grade-1-english",
      },
      {
        name: "Indigenous Languages",
        ebook:
          "https://member.log.agl.or.ke/maglex/kalasik/GRADE1/INDIGENOUS LANGUAGES/GRADE 1 INDIGENOUS LANGUAGES EBOOK.PDF",
        outline:
          "https://member.log.agl.or.ke/maglex/kalasik/GRADE1/INDIGENOUS%20LANGUAGES/GRADE%201%20INDIGENOUS%20LANGUAGES%20OUTLINE.PDF",
        id: "grade-1-indigenous-languages",
      },
      {
        name: "Kiswahili",
        ebook:
          "https://member.log.agl.or.ke/maglex/kalasik/GRADE1/KISWAHILI/GRADE 1 KISWAHILI EBOOK.PDF",
        outline:
          "https://member.log.agl.or.ke/maglex/kalasik/GRADE1/KISWAHILI/GRADE 1 KISWAHILI OUTLINE.PDF",
        id: "grade-1-kiswahili",
      },
    ],
  },
  {
    grade: "Grade 2",
    subjects: [
      {
        name: "English",
        ebook:
          "https://member.log.agl.or.ke/maglex/kalasik/GRADE2/ENGLISH/GRADE 2 ENGLISH EBOOK.PDF",
        outline:
          "https://member.log.agl.or.ke/maglex/kalasik/GRADE2/ENGLISH/GRADE 2 ENGLISH OUTLINE.PDF",
        id: "grade-2-english",
      },
      {
        name: "Indigenous Language",
        ebook:
          "https://member.log.agl.or.ke/maglex/kalasik/GRADE2/INDIGENOUS LANGUAGES/GRADE 2 INDIGENOUS LANGUAGES EBOOK.PDF",
        outline:
        "https://member.log.agl.or.ke/maglex/kalasik/GRADE2/INDIGENOUS LANGUAGES/GRADE 2 INDIGENOUS LANGUAGES OUTLINE.PDF",
        id: "grade-2-indigenous-language",
      },
      {
        name: "Kiswahili",
        ebook:
          "https://member.log.agl.or.ke/maglex/kalasik/GRADE2/KISWAHILI/GRADE 2 KISWAHILI EBOOK.PDF",
        outline:
          "https://member.log.agl.or.ke/maglex/kalasik/GRADE2/KISWAHILI/GRADE 2 KISWAHILI OUTLINE.PDF",
        id: "grade-2-kiswahili",
      },
    ],
  },
  {
    grade: "Grade 3",
    subjects: [
      {
        name: "English",
        ebook:
          "https://member.log.agl.or.ke/maglex/kalasik/GRADE3/ENGLISH/GRADE 3 ENGLISH EBOOK.PDF",
        outline:
          "https://member.log.agl.or.ke/maglex/kalasik/GRADE3/ENGLISH/GRADE 3 ENGLISH OUTLINE.PDF",
        id: "grade-3-english",
      },
      {
        name: "Indigenous Languages",
        ebook:
          "https://member.log.agl.or.ke/maglex/kalasik/GRADE3/INDIGENOUS LANGUAGES/GRADE 3 INDIGENOUS LANGUAGES EBOOK.PDF",
        outline:
          "https://member.log.agl.or.ke/maglex/kalasik/GRADE3/INDIGENOUS LANGUAG/GRADE 3 INDIGENOUS LANGUAGES OUTLINE.PDF",
        id: "grade-3-indigenous-languages",
      },
      {
        name: "Kiswahili",
        ebook:"https://member.log.agl.or.ke/maglex/kalasik/GRADE3/KISWAHILI/GRADE 3 KISWAHILI EBOOK.PDF",
        outline:"https://member.log.agl.or.ke/maglex/kalasik/GRADE3/KISWAHILI/GRADE 3 KISWAHILI OUTLINE.PDF",
        id: "grade-3-kiswahili",
      },
    ],
  },
  {
    grade: "Grade 4",
    subjects: [
      {
        name: "Agriculture",
        ebook:"https://member.log.agl.or.ke/maglex/kalasik/GRADE4/AGRICULTURE/GRADE 4 AGRICULTURE EBOOK.PDF",
        outline:"https://member.log.agl.or.ke/maglex/kalasik/GRADE4/AGRICULTURE/GRADE 4 AGRICULTURE OUTLINE.PDF",
        id: "grade-4-agriculture",
      },
      {
        name: "Arabic",
        ebook:"https://member.log.agl.or.ke/maglex/kalasik/GRADE4/ARABIC/GRADE 4 ARABIC EBOOK.PDF",
        outline:"https://member.log.agl.or.ke/maglex/kalasik/GRADE4/ARABIC/GRADE 4 ARABIC OUTLINE.PDF",
        id: "grade-4-arabic",
      },
      {
        name: "Art And Craft",
        ebook:"https://member.log.agl.or.ke/maglex/kalasik/GRADE4/ART AND CRAFT/GRADE 4 ART AND CRAFT EBOOK.PDF",
        outline:"https://member.log.agl.or.ke/maglex/kalasik/GRADE4/ART AND CRAFT/GRADE 4 ART AND CRAFT OUTLINE.PDF",
        id: "grade-4-art-and-craft",
      },
      {
        name: "Christian Religious Education",
        ebook:"https://member.log.agl.or.ke/maglex/kalasik/GRADE4/CHRISTIAN RELIGIOUS EDUCATION/GRADE 4 CHRISTIAN RELIGIOUS EDUCATION EBOOK.PDF",
        outline:"https://member.log.agl.or.ke/maglex/kalasik/GRADE4/CHRISTIAN RELIGIOUS EDUCATION/GRADE 4 CHRISTIAN RELIGIOUS EDUCATION OUTLINE.PDF",
        id: "grade-4-christian-religious-education",
      },
      {
        name: "English",
        ebook:"https://member.log.agl.or.ke/maglex/kalasik/GRADE4/ENGLISH/GRADE 4 ENGLISH EBOOK.PDF",
        outline:"https://member.log.agl.or.ke/maglex/kalasik/GRADE4/ENGLISH/GRADE 4 ENGLISH OUTLINE.PDF",
        id: "grade-4-english",
      },
      {
        name: "French",
        ebook:"https://member.log.agl.or.ke/maglex/kalasik/GRADE4/GERMAN/GRADE 4 GERMAN EBOOK.PDF",
        outline:"https://member.log.agl.or.ke/maglex/kalasik/GRADE4/GERMAN/GRADE 4 GERMAN OUTLINE.PDF",
        id: "grade-4-french",
      },
      {
        name: "German",
        ebook:"https://member.log.agl.or.ke/maglex/kalasik/GRADE4/GERMAN/GRADE 4 GERMAN EBOOK.PDF",
        outline:"https://member.log.agl.or.ke/maglex/kalasik/GRADE4/GERMAN/GRADE 4 GERMAN OUTLINE.PDF",
        id: "grade-4-german",
      },
      {
        name: "Hindu Religious Education",
        ebook:"https://member.log.agl.or.ke/maglex/kalasik/GRADE4/HINDU RELIGIOUS EDUCATION/GRADE 4 HINDU RELIGIOUS EDUCATION EBOOK.PDF",
        outline:"https://member.log.agl.or.ke/maglex/kalasik/GRADE4/HINDU RELIGIOUS EDUCATION/GRADE 4 HINDU RELIGIOUS EDUCATION OUTLINE.PDF",
        id: "grade-4-hindu-religious-education",
      },
      {
        name: "Home Science",
        ebook:"https://member.log.agl.or.ke/maglex/kalasik/GRADE4/HOME SCIENCE/GRADE 4 HOME SCIENCE EBOOK.PDF",
        outline:"https://member.log.agl.or.ke/maglex/kalasik/GRADE4/HOME SCIENCE/GRADE 4 HOME SCIENCE OUTLINE.PDF",
        id: "grade-4-home-science",
      },
      {
        name: "Islamic Religion Education",
        ebook:"https://member.log.agl.or.ke/maglex/kalasik/GRADE4/ISLAMIC RELIGIOUS EDUCATION/GRADE 4 ISLAMIC RELIGIOUS EDUCATION EBOOK.PDF",
        outline:"https://member.log.agl.or.ke/maglex/kalasik/GRADE4/ISLAMIC RELIGIOUS EDUCATION/GRADE 4 ISLAMIC RELIGIOUS EDUCATION OUTLINE.PDF",
        id: "grade-4-islamic-religion-education",
      },
      {
        name: "Kenya Sign Language",
        ebook: "null",
        outline:"https://member.log.agl.or.ke/maglex/kalasik/GRADE/KENYA SIGN LANGUAGE/GRADE 4 KENYA SIGN LANGUAGE OUTLINE.PDF",
        id: "grade-4-kenya-sign-language",
      },
      {
        name: "Kiswahili",
        ebook:"https://member.log.agl.or.ke/maglex/kalasik/GRADE4/KISWAHILI/GRADE 4 KISWAHILI EBOOK.PDF",
        outline:"https://member.log.agl.or.ke/maglex/kalasik/GRADE4/KISWAHILI/GRADE 4 KISWAHILI OUTLINE.PDF",
        id: "grade-4-kiswahili",
      },
      {
        name: "Mandarin Chinese",
          ebook:"https://member.log.agl.or.ke/maglex/kalasik/GRADE4/MANDARIN CHINESE/GRADE 4 MANDARIN CHINESE EBOOK.PDF",
          outline:"https://member.log.agl.or.ke/maglex/kalasik/GRADE4/MANDARIN CHINESE/GRADE 4 MANDARIN CHINESE OUTLINE.PDF",
        id: "grade-4-mandarin-chinese",
      },
      {
        name: "Mathematics",
        ebook:"https://member.log.agl.or.ke/maglex/kalasik/GRADE4/MATHEMATICS/GRADE 4 MATHEMATICS EBOOK.PDF",
        outline:"https://member.log.agl.or.ke/maglex/kalasik/GRADE4/MATHEMATICS/GRADE 4 MATHEMATICS OUTLINE.PDF",
        id: "grade-4-mathematics",
      },
      {
        name: "Music",

        outline:"https://member.log.agl.or.ke/maglex/kalasik/GRADE4/MUSIC/GRADE 4 MUSIC OUTLINE.PDF",
        ebook: "null",

        id: "grade-4-music",
      },
      {
        name: "Physical And Health Education",
        outline:"https://member.log.agl.or.ke/maglex/kalasik/GRADE4/PHYSICAL AND HEALTH EDUCATION/GRADE 4 PHYSICAL AND HEALTH EDUCATION OUTLINE.PDF",
        ebook: "null",
        id: "grade-4-physical-and-health-education",
      },
      {
        name: "Science And Technology",

        ebook:"https://member.log.agl.or.ke/maglex/kalasik/GRADE4/SCIENCE AND TECHNOLOGY/GRADE 4 SCIENCE AND TECHNOLOGY EBOOK.PDF",
        outline: "null",
        id: "grade-4-science-and-technology",
      },
      {
        name: "Social Studies",

        ebook:"https://member.log.agl.or.ke/maglex/kalasik/GRADE4/SOCIAL STUDIES/GRADE 4 SOCIAL STUDIES EBOOK.PDF",
        outline:"https://member.log.agl.or.ke/maglex/kalasik/GRADE4/SOCIAL STUDIES/GRADE 4 SOCIAL OUTLINE.PDF",

        id: "grade-4-social-studies",
      },
    ],
  },
  {
    grade: "Grade 5",
    subjects: [
      {
        name: "Agriculture",
        ebook:"https://member.log.agl.or.ke/maglex/kalasik/GRADE5/AGRICULTURE/GRADE 5 AGRICULTURE EBOOK.PDF",
        outline:"https://member.log.agl.or.ke/maglex/kalasik/GRADE5/AGRICULTURE/GRADE 5 AGRICULTURE OUTLINE.PDF",
        id: "grade-5-agriculture",
      },
      {
        name: "Arabic",
        ebook:"https://member.log.agl.or.ke/maglex/kalasik/GRADE5/ARABIC/GRADE 5 ARABIC EBOOK.PDF",
        outline:"https://member.log.agl.or.ke/maglex/kalasik/GRADE5/ARABIC/GRADE 5 ARABIC OUTLINE.PDF",
        id: "grade-5-arabic",
      },
      {
        name: "Art And Craft",
        ebook: "null",
        outline:"https://member.log.agl.or.ke/maglex/kalasik/GRADE5/ART AND CRAFT/GRADE 5 ART AND CRAFT OUTLINE.PDF",
        id: "grade-5-art-and-craft",
      },
      {
        name: "Christian Religious Education",
        ebook:"https://member.log.agl.or.ke/maglex/kalasik/GRADE5/CHRISTIAN RELIGIOUS EDUCATION/GRADE 5 CHRISTIAN RELIGIOUS EDUCATION EBOOK.PDF",
        outline:"https://member.log.agl.or.ke/maglex/kalasik/GRADE5/CHRISTIAN RELIGIOUS EDUCATION/GRADE 5 CHRISTIAN RELIGIOUS EDUCATION OUTLINE.PDF",
        id: "grade-5-christian-religious-education",
      },
      {
        name: "English",
        ebook:"https://member.log.agl.or.ke/maglex/kalasik/GRADE5/ENGLISH/GRADE 5 ENGLISH EBOOK.PDF",
        outline:"https://member.log.agl.or.ke/maglex/kalasik/GRADE5/ENGLISH/GRADE 5 ENGLISH OUTLINE.PDF",
        id: "grade-5-english",
      },
      {
        name: "French",
        ebook:"https://member.log.agl.or.ke/maglex/kalasik/GRADE5/FRENCH/GRADE 5 FRENCH EBOOK.PDF",
        outline:"https://member.log.agl.or.ke/maglex/kalasik/GRADE5/FRENCH/GRADE 5 FRENCH OUTLINE.PDF",
        id: "grade-5-french",
      },
      {
        name: "German",
        ebook:"https://member.log.agl.or.ke/maglex/kalasik/GRADE5/GERMAN/GRADE 5 GERMAN EBOOK.PDF",
        outline:"https://member.log.agl.or.ke/maglex/kalasik/GRADE5/GERMAN/GRADE 5 GERMAN OUTLINE.PDF",
        id: "grade-5-german",
      },
      {
        name: "Hindu Religious Education",
        ebook:"https://member.log.agl.or.ke/maglex/kalasik/GRADE5/HINDU RELIGIOUS EDUCATION/GRADE 5 HINDU RELIGIOUS EDUCATION EBOOK.PDF",
        outline:"https://member.log.agl.or.ke/maglex/kalasik/GRADE5/HINDU RELIGIOUS EDUCATION/GRADE 5 HINDU RELIGIOUS EDUCATION OUTLINE.PDF",
        id: "grade-5-hindu-religious-education",
      },
      {
        name: "Home Science",
        ebook:"https://member.log.agl.or.ke/maglex/kalasik/GRADE5/HOME SCIENCE/GRADE 5 HOME SCIENCE EBOOK.PDF",
        outline:"https://member.log.agl.or.ke/maglex/kalasik/GRADE5/HOME SCIENCE/GRADE 5 HOME SCIENCE OUTLINE.PDF",
        id: "grade-5-home-science",
      },
      {
        name: "Islamic Religious Education",
        ebook:"https://member.log.agl.or.ke/maglex/kalasik/GRADE5/ISLAMIC RELIGIOUS EDUCATION/GRADE 5 ISLAMIC RELIGIOUS EDUCATION EBOOK.PDF",
        outline:"https://member.log.agl.or.ke/maglex/kalasik/GRADE5/ISLAMIC RELIGIOUS EDUCATION/GRADE 5 ISLAMIC RELIGIOUS EDUCATION OUTLINE.PDF",
        id: "grade-5-islamic-religious-education",
      },
      {
        name: "Kiswahili",
        ebook:"https://member.log.agl.or.ke/maglex/kalasik/GRADE5/KISWAHILI/GRADE 5 KISWAHILI EBOOK.PDF",
        outline:"https://member.log.agl.or.ke/maglex/kalasik/GRADE5/KISWAHILI/GRADE 5 KISWAHILI OUTLINE.PDF",
        id: "grade-5-kiswahili",
      },
      {
        name: "Mandarin Chinese",
        ebook: "null",
        outline:"https://member.log.agl.or.ke/maglex/kalasik/GRADE5/MANDARIN CHINESE/GRADE 5 MANDARIN CHINESE OUTLINE.PDF",
        id: "grade-5-mandarin-chinese",
      },
      {
        name: "Mathematics",
        ebook:"https://member.log.agl.or.ke/maglex/kalasik/GRADE5/MATHEMATICS/GRADE 5 MATHEMATICS EBOOK.PDF",
        outline:"https://member.log.agl.or.ke/maglex/kalasik/GRADE5/MATHEMATICS/GRADE 5 MATHEMATICS OUTLINE.PDF",
        id: "grade-5-mathematics",
      },
      {
        name: "Music",
        ebook: "null",
        outline:"https://member.log.agl.or.ke/maglex/kalasik/GRADE5/MUSIC/GRADE 5 MUSIC OUTLINE.PDF",
        id: "grade-5-music",
      },
      {
        name: "Physical Education",
        ebook: "null",
        outline:"https://member.log.agl.or.ke/maglex/kalasik/GRADE5/PHYSICAL EDUCATION/GRADE 5 PHYSICAL EDUCATION OUTLINE.PDF",
        id: "grade-5-physical-education",
      },
      {
        name: "Social Studies",
        ebook:"https://member.log.agl.or.ke/maglex/kalasik/GRADE5/SOCIAL STUDIES/GRADE 5 SOCIAL STUDIES EBOOK.PDF",
        outline:"https://member.log.agl.or.ke/maglex/kalasik/GRADE5/SOCIAL STUDIES/GRADE 5 SOCIAL STUDIES OUTLINE.PDF",
       
        id: "grade-5-social-studies",
      },
    ],
  },
  {
    grade: "Grade 6",
    subjects: [
      {
        name: "Agriculture",
        ebook:"https://member.log.agl.or.ke/maglex/kalasik/GRADE6/AGRICULTURE/GRADE 6 AGRICULTURE EBOOK.PDF",
        outline:"https://member.log.agl.or.ke/maglex/kalasik/GRADE6/AGRICULTURE/GRADE 6 AGRICULTURE OUTLINE.PDF",
        id: "grade-6-agriculture",
      },
      {
        name: "Arabic",
        ebook:"https://member.log.agl.or.ke/maglex/kalasik/GRADE6/ARABIC/GRADE 6 ARABIC EBOOK.PDF",
        outline:"https://member.log.agl.or.ke/maglex/kalasik/GRADE6/ARABIC/GRADE 6 ARABIC OUTLINE.PDF",
        id: "grade-6-arabic",
      },
      {
        name: "Art And Craft",
        ebook: "null",
        outline:"https://member.log.agl.or.ke/maglex/kalasik/GRADE6/ART AND CRAFT/GRADE 6 ART AND CRAFT OUTLINE.PDF",
        id: "grade-6-art-and-craft",
      },
      {
        name: "Christian Religious Education",
        ebook:"https://member.log.agl.or.ke/maglex/kalasik/GRADE6/CHRISTIAN RELIGIOUS EDUCATION/GRADE 6 CHRISTIAN RELIGIOUS EDUCATION EBOOK.PDF",
        outline:"https://member.log.agl.or.ke/maglex/kalasik/GRADE6/CHRISTIAN RELIGIOUS EDUCATION/GRADE 6 CHRISTIAN RELIGIOUS EDUCATION OUTLINE.PDF",
        id: "grade-6-christian-religious-education",
      },
      {
        name: "English",
        ebook:"https://member.log.agl.or.ke/maglex/kalasik/GRADE6/ENGLISH/GRADE 6 ENGLISH EBOOK.PDF",
        outline:"https://member.log.agl.or.ke/maglex/kalasik/GRADE6/ENGLISH/GRADE 6 ENGLISH OUTLINE.PDF",
        id: "grade-6-english",
      },
      {
        name: "French",
        ebook:"https://member.log.agl.or.ke/maglex/kalasik/GRADE6/FRENCH/GRADE 6 FRENCH EBOOK.PDF",
        outline:"https://member.log.agl.or.ke/maglex/kalasik/GRADE6/FRENCH/GRADE 6 FRENCH OUTLINE.PDF",
        id: "grade-6-french",
      },
      {
        name: "German",
        ebook:"https://member.log.agl.or.ke/maglex/kalasik/GRADE6/GERMAN/GRADE 6 GERMAN EBOOK.PDF",
        outline:"https://member.log.agl.or.ke/maglex/kalasik/GRADE6/GERMAN/GRADE 6 GERMAN OUTLINE.PDF",
        id: "grade-6-german",
      },
      {
        name: "Hindu Religious Education",
        ebook:"https://member.log.agl.or.ke/maglex/kalasik/GRADE6/HINDU RELIGIOUS EDUCATION/GRADE 6 HINDU RELIGIOUS EDUCATION EBOOK.PDF",
        outline:"https://member.log.agl.or.ke/maglex/kalasik/GRADE6/HINDU RELIGIOUS EDUCATION/GRADE 6 HINDU RELIGIOUS EDUCATION OUTLINE.PDF",
        id: "grade-6-hindu-religious-education",
      },
      {
        name: "Home Science",
        ebook:"https://member.log.agl.or.ke/maglex/kalasik/GRADE6/HOME SCIENCE/GRADE 6 HOME SCIENCE EBOOK.PDF",
        outline:"https://member.log.agl.or.ke/maglex/kalasik/GRADE6/HOME SCIENCE/GRADE 6 HOME SCIENCE OUTLINE.PDF",
        id: "grade-6-home-science",
      },
      {
        name: "Islamic Religious Education",
        ebook:"https://member.log.agl.or.ke/maglex/kalasik/GRADE6/ISLAMIC RELIGIOUS EDUCATION/GRADE 6 ISLAMIC RELIGIOUS EDUCATION EBOOK.PDF",
        outline:"https://member.log.agl.or.ke/maglex/kalasik/GRADE6/ISLAMIC RELIGIOUS EDUCATION/GRADE 6 ISLAMIC RELIGIOUS EDUCATION OUTLINE.PDF",
        id: "grade-6-islamic-religious-education",
      },
      {
        name: "Kiswahili",
        ebook: "null",
        outline:"https://member.log.agl.or.ke/maglex/kalasik/GRADE6/KISWAHILI/GRADE 6 KISWAHILI OUTLINE.PDF",
        id: "grade-6-kiswahili",
      },
      {
        name: "Mandarin Chinese",
        ebook:"https://member.log.agl.or.ke/maglex/kalasik/GRADE6/MANDARIN CHINESE/GRADE 6 MANDARIN CHINESE EBOOK.PDF",
        outline:"https://member.log.agl.or.ke/maglex/kalasik/GRADE6/MANDARIN CHINESE/GRADE 6 MANDARIN CHINESE OUTLINE.PDF",
        id: "grade-6-mandarin-chinese",
      },
      {
        name: "Mathematics",
        ebook:"https://member.log.agl.or.ke/maglex/kalasik/GRADE6/MATHEMATICS/GRADE 6 MATHEMATICS EBOOK.PDF",
        outline:"https://member.log.agl.or.ke/maglex/kalasik/GRADE6/MATHEMATICS/GRADE 6 MATHEMATICS OUTLINE.PDF",
        id: "grade-6-mathematics",
      },
      {
        name: "Music",
        ebook: "null",
        outline:"https://member.log.agl.or.ke/maglex/kalasik/GRADE6/MUSIC/GRADE 6 MUSIC OUTLINE.PDF",
        id: "grade-6-music",
      },
      {
        name: "Science And Technology",
        ebook:"https://member.log.agl.or.ke/maglex/kalasik/GRADE6/SCIENCE AND TECHNOLOGY/GRADE 6 SCIENCE AND TECHNOLOGY EBOOK.PDF",
        outline:"https://member.log.agl.or.ke/maglex/kalasik/GRADE6/SCIENCE AND TECHNOLOGY/GRADE 6 SCIENCE AND TECHNOLOGY OUTLINE.PDF",
        id: "grade-6-science-and-technology",
      },
      {
        name: "Social Studies",
        ebook: "null",
        outline:"https://member.log.agl.or.ke/maglex/kalasik/GRADE6/SOCIAL STUDIES/GRADE 6 SOCIAL STUDIES OUTLINE.PDF",
        id: "grade-6-social-studies",
      },
    ],
  },
  {
    grade: "Grade 7",
    subjects: [
      {
        name: "Agriculture",
        ebook: "null",
        outline:"https://member.log.agl.or.ke/maglex/kalasik/GRADE7/AGRICULTURE/GRADE 7 AGRICULTURE OUTLINE.PDF",
        id: "grade-7-agriculture",
      },
      {
        name: "Arabic",
        ebook:"https://member.log.agl.or.ke/maglex/kalasik/GRADE7/ARABIC/GRADE 7 ARABIC EBOOK.PDF",
        outline:"https://member.log.agl.or.ke/maglex/kalasik/GRADE7/ARABIC/GRADE 7 ARABIC OUTLINE.PDF",
        id: "grade-7-arabic",
      },
      {
        name: "Business Studies",
        ebook: "null",
        outline:"https://member.log.agl.or.ke/maglex/kalasik/GRADE7/BUSINESS STUDIES/GRADE 7 BUSINESS STUDIES OUTLINE.PDF",
        id: "grade-7-business-studies",
      },
      {
        name: "Christian Religious Education",
        ebook:"https://member.log.agl.or.ke/maglex/kalasik/GRADE7/CHRISTIAN RELIGIOUS EDUCATION/GRADE 7 CHRISTIAN RELIGIOUS EDUCATION EBOOK.PDF",
        outline:"https://member.log.agl.or.ke/maglex/kalasik/GRADE7/CHRISTIAN RELIGIOUS EDUCATION/GRADE 7 CHRISTIAN RELIGIOUS EDUCATION OUTLINE.PDF",
        id: "grade-7-christian-religious-education",
      },
      {
        name: "Computer Science",
        ebook: "null",
        outline:"https://member.log.agl.or.ke/maglex/kalasik/GRADE7/COMPUTER SCIENCE/GRADE 7 COMPUTER SCIENCE OUTLINE.PDF",
        id: "grade-7-computer-science",
      },
      {
        name: "English",
        ebook:"https://member.log.agl.or.ke/maglex/kalasik/GRADE7/KISWAHILI/GRADE 7 ENGLISH EBOOK.PDF",
        outline:"https://member.log.agl.or.ke/maglex/kalasik/GRADE7/KISWAHILI/GRADE 7 ENGLISH OUTLINE.PDF",
        id: "grade-7-english",
      },
      {
        name: "French",
        ebook:"https://member.log.agl.or.ke/maglex/kalasik/GRADE7/FRENCH/GRADE 7 FRENCH EBOOK.PDF",
        outline:"https://member.log.agl.or.ke/maglex/kalasik/GRADE7/FRENCH/GRADE 7 FRENCH OUTLINE.PDF",
        id: "grade-7-french",
      },
      {
        name: "German",
        ebook:"https://member.log.agl.or.ke/maglex/kalasik/GRADE7/GERMAN/GRADE 7 GERMAN EBOOK.PDF",
        outline:"https://member.log.agl.or.ke/maglex/kalasik/GRADE7/GERMAN/GRADE 7 GERMAN OUTLINE.PDF",
        id: "grade-7-german",
      },
      {
        name: "Health Education",
        ebook: "null",
        outline:"https://member.log.agl.or.ke/maglex/kalasik/GRADE7/HEALTH EDUCATION/GRADE 7 HEALTH EDUCATION OUTLINE.PDF",
        id: "grade-7-health-education",
      },
      {
        name: "Hindu Religious Education",
        ebook:"https://member.log.agl.or.ke/maglex/kalasik/GRADE7/HINDU RELIGIOUS EDUCATION/GRADE 7 HINDU RELIGIOUS EDUCATION EBOOK.PDF",
        outline:"https://member.log.agl.or.ke/maglex/kalasik/GRADE7/HINDU RELIGIOUS EDUCATION/GRADE 7 HINDU RELIGIOUS EDUCATION OUTLINE.PDF",
        id: "grade-7-hindu-religious-education",
      },
      {
        name: "Home Science",
        ebook:"https://member.log.agl.or.ke/maglex/kalasik/GRADE7/HOME SCIENCE/GRADE 7 HOME SCIENCE EBOOK.PDF",
        outline:"https://member.log.agl.or.ke/maglex/kalasik/GRADE7/HOME SCIENCE/GRADE 7 HOME SCIENCE OUTLINE.PDF",
        id: "grade-7-home-science",
      },
      {
        name: "Indigenous",
        ebook: "null",
        outline:"https://member.log.agl.or.ke/maglex/kalasik/GRADE7/INDIGENOUS/GRADE 7 INDIGENOUS OUTLINE.PDF",
        id: "grade-7-indigenous",
      },
      {
        name: "Islamic Religious Education",
        ebook:"https://member.log.agl.or.ke/maglex/kalasik/GRADE7/ISLAMIC RELIGIOUS EDUCATION/GRADE 7 ISLAMIC RELIGIOUS EDUCATION EBOOK.PDF",
        outline:"https://member.log.agl.or.ke/maglex/kalasik/GRADE7/ISLAMIC RELIGIOUS EDUCATION/GRADE 7 ISLAMIC RELIGIOUS EDUCATION OUTLINE.PDF",
        id: "grade-7-islamic-religious-education",
      },
      {
        name: "Kenya Sign Language",
        ebook: "null",
        outline:"https://member.log.agl.or.ke/maglex/kalasik/GRADE7/KENYA SIGN LANGUAGE/GRADE 7 KENYA SIGN LANGUAGE OUTLINE.PDF",
        id: "grade-7-kenya-sign-language",
      },
      {
        name: "Kiswahili",
        ebook:"https://member.log.agl.or.ke/maglex/kalasik/GRADE7/KISWAHILI/GRADE 7 KISWAHILI EBOOK.PDF",
        outline:"https://member.log.agl.or.ke/maglex/kalasik/GRADE7/KISWAHILI/GRADE 7 KISWAHILI OUTLINE.PDF",
        id: "grade-7-kiswahili",
      },
      {
        name: "Life Skill",
        ebook:"https://member.log.agl.or.ke/maglex/kalasik/GRADE7/LIFE SKILL/GRADE 7 LIFE SKILL EBOOK.PDF",
        outline: "null",
        id: "grade-7-life-skill",
      },
      {
        name: "Life Skills",
        ebook: "null",
        outline:"https://member.log.agl.or.ke/maglex/kalasik/GRADE7/LIFE SKILLS/GRADE 7 LIFE SKILLS OUTLINE.PDF",
        id: "grade-7-life-skills",
      },
      {
        name: "Mandarin Chinese",
        ebook:"https://member.log.agl.or.ke/maglex/kalasik/GRADE7/MANDARIN CHINESE/GRADE 7 MANDARIN CHINESE EBOOK.PDF",
        outline:"https://member.log.agl.or.ke/maglex/kalasik/GRADE7/MANDARIN CHINESE/GRADE 7 MANDARIN CHINESE OUTLINE.PDF",
        id: "grade-7-mandarin-chinese",
      },
      {
        name: "Mathematics",
        ebook:"https://member.log.agl.or.ke/maglex/kalasik/GRADE7/MATHEMATICS/GRADE 7 MATHEMATICS EBOOK.PDF",
        outline:"https://member.log.agl.or.ke/maglex/kalasik/GRADE7/MATHEMATICS/GRADE 7 MATHEMATICS OUTLINE.PDF",
        id: "grade-7-mathematics",
      },
      {
        name: "Performing Arts",
        ebook:"https://member.log.agl.or.ke/maglex/kalasik/GRADE7/PERFORMING ARTS/GRADE 7 PERFORMING ARTS EBOOK.PDF",
        outline:"https://member.log.agl.or.ke/maglex/kalasik/GRADE7/PERFORMING ARTS/GRADE 7 PERFORMING ARTS OUTLINE.PDF",
        id: "grade-7-performing-arts",
      },
      {
        name: "Social Studies",
        ebook:"https://member.log.agl.or.ke/maglex/kalasik/GRADE7/SOCIAL STUDIES/GRADE 7 SOCIAL STUDIES EBOOK.PDF",
        outline:"https://member.log.agl.or.ke/maglex/kalasik/GRADE7/SOCIAL STUDIES/GRADE 7 SOCIAL STUDIES OUTLINE.PDF",
        id: "grade-7-social-studies",
      },
      {
        name: "Social Studies Outline Duplicate",
        ebook: "null",
        outline: "null",
        id: "grade-7-social-studies-outline-duplicate",
      },
      {
        name: "Visual Arts",
        ebook: "null",
        outline:"https://member.log.agl.or.ke/maglex/kalasik/GRADE7/VISUAL ARTS/GRADE 7 VISUAL ARTS OUTLINE.PDF",
        id: "grade-7-visual-arts",
      },
    ],
  },
  {
    grade: "Grade 8",
    subjects: [
      {
        name: "Agriculture",
        ebook:"https://member.log.agl.or.ke/maglex/kalasik/GRADE8/AGRICULTURE/GRADE 8 AGRICULTURE EBOOK.PDF",
        outline:"https://member.log.agl.or.ke/maglex/kalasik/GRADE8/AGRICULTURE/GRADE 8 AGRICULTURE OUTLINE.PDF",
        id: "grade-8-agriculture",
      },
      {
        name: "Arabic",
        ebook:"https://member.log.agl.or.ke/maglex/kalasik/GRADE8/ARABIC/GRADE 8 ARABIC EBOOK.PDF",
        outline:"https://member.log.agl.or.ke/maglex/kalasik/GRADE8/ARABIC/GRADE 8 ARABIC OUTLINE.PDF",
        id: "grade-8-arabic",
      },
      {
        name: "Business Studies",
        ebook:"https://member.log.agl.or.ke/maglex/kalasik/GRADE8/BUSINESS STUDIES/GRADE 8 BUSINESS STUDIES EBOOK.PDF",
        outline:"https://member.log.agl.or.ke/maglex/kalasik/GRADE8/BUSINESS STUDIES/GRADE 8 BUSINESS STUDIES OUTLINE.PDF",
        id: "grade-8-business-studies",
      },
      {
        name: "Christian Religious Education",
        ebook:"https://member.log.agl.or.ke/maglex/kalasik/GRADE8/CHRISTIAN RELIGIOUS EDUCATION/GRADE 8 CHRISTIAN RELIGIOUS EDUCATION EBOOK.PDF",
        outline:"https://member.log.agl.or.ke/maglex/kalasik/GRADE8/CHRISTIAN RELIGIOUS EDUCATION/GRADE 8 CHRISTIAN RELIGIOUS EDUCATION OUTLINE.PDF",
        id: "grade-8-christian-religious-education",
      },
      {
        name: "Computer Science",
        ebook:"https://member.log.agl.or.ke/maglex/kalasik/GRADE8/COMPUTER SCIENCE/GRADE 8 COMPUTER SCIENCE EBOOK.PDF",
        outline:"https://member.log.agl.or.ke/maglex/kalasik/GRADE8/COMPUTER SCIENCE/GRADE 8 COMPUTER SCIENCE OUTLINE.PDF",
        id: "grade-8-computer-science",
      },
      {
        name: "English",
        ebook:"https://member.log.agl.or.ke/maglex/kalasik/GRADE8/ENGLISH/GRADE 8 ENGLISH EBOOK.PDF",
        outline:"https://member.log.agl.or.ke/maglex/kalasik/GRADE8/ENGLISH/GRADE 8 ENGLISH OUTLINE.PDF",
        id: "grade-8-english",
      },
      {
        name: "French",
        ebook:"https://member.log.agl.or.ke/maglex/kalasik/GRADE8/FRENCH/GRADE 8 FRENCH EBOOK.PDF",
        outline:"https://member.log.agl.or.ke/maglex/kalasik/GRADE8/FRENCH/GRADE 8 FRENCH OUTLINE.PDF",
        id: "grade-8-french",
      },
      {
        name: "German",
        ebook:"https://member.log.agl.or.ke/maglex/kalasik/GRADE8/GERMAN/GRADE 8 GERMAN EBOOK.PDF",
        outline: "null",
        id: "grade-8-german",
      },
      {
        name: "German Ebook Duplicate",
        ebook: "null",
        outline: "null",
        id: "grade-8-german-ebook-duplicate",
      },
      {
        name: "Hindu Religious Education",
        ebook:"https://member.log.agl.or.ke/maglex/kalasik/GRADE8/HINDU RELIGIOUS EDUCATION/GRADE 8 HINDU RELIGIOUS EDUCATION EBOOK.PDF",
        outline:"https://member.log.agl.or.ke/maglex/kalasik/GRADE8/HINDU RELIGIOUS EDUCATION/GRADE 8 HINDU RELIGIOUS EDUCATION OUTLINE.PDF",
        id: "grade-8-hindu-religious-education",
      },
      {
        name: "Home Science",
        ebook:"https://member.log.agl.or.ke/maglex/kalasik/GRADE8/HOME SCIENCE/GRADE 8 HOME SCIENCE EBOOK.PDF",
        outline:"https://member.log.agl.or.ke/maglex/kalasik/GRADE8/HOME SCIENCE/GRADE 8 HOME SCIENCE OUTLINE.PDF",
        id: "grade-8-home-science",
      },
      {
        name: "Indigenious Language",
        ebook: "null",
        outline:"https://member.log.agl.or.ke/maglex/kalasik/GRADE8/INDIGENIOUS LANGUAGE/GRADE 8 INDIGENIOUS LANGUAGE OUTLINE.PDF",
        id: "grade-8-indigenious-language",
      },
      {
        name: "Indigenous Language",
        ebook:"https://member.log.agl.or.ke/maglex/kalasik/GRADE8/INDIGENIOUS LANGUAGE/GRADE 8 INDIGENIOUS LANGUAGE EBOOK.PDF",
        outline: "null",
        id: "grade-8-indigenous-language",
      },
      {
        name: "Intergrated Science",
        ebook:"https://member.log.agl.or.ke/maglex/kalasik/GRADE8/INTERGRATED SCIENCE/GRADE 8 INTERGRATED SCIENCE EBOOK.PDF",
        outline:"https://member.log.agl.or.ke/maglex/kalasik/GRADE8/INTERGRATED SCIENCE/GRADE 8 INTERGRATED SCIENCE OUTLINE.PDF",
        id: "grade-8-intergrated-science",
      },
      {
        name: "Islamic Religious Education",
        ebook:"https://member.log.agl.or.ke/maglex/kalasik/GRADE8/ISLAMIC RELIGIOUS EDUCATION/GRADE 8 ISLAMIC RELIGIOUS EDUCATION EBOOK.PDF",
        outline:"https://member.log.agl.or.ke/maglex/kalasik/GRADE8/ISLAMIC RELIGIOUS EDUCATION/GRADE 8 ISLAMIC RELIGIOUS EDUCATION OUTLINE.PDF",
        id: "grade-8-islamic-religious-education",
      },
      {
        name: "Kenya Sign Language",
        ebook: "null",
        outline:"https://member.log.agl.or.ke/maglex/kalasik/GRADE8/KENYA SIGN LANGUAGE/GRADE 8 KENYA SIGN LANGUAGE OUTLINE.PDF",
        id: "grade-8-kenya-sign-language",
      },
      {
        name: "Kiswahili",
        ebook:"https://member.log.agl.or.ke/maglex/kalasik/GRADE8/KISWAHILI/GRADE 8 KISWAHILI EBOOK.PDF",
        outline:"https://member.log.agl.or.ke/maglex/kalasik/GRADE8/KISWAHILI/GRADE 8 KISWAHILI OUTLINE.PDF",
        id: "grade-8-kiswahili",
      },
      {
        name: "Mandarin Chinese",
        ebook: "null",
        outline:"https://member.log.agl.or.ke/maglex/kalasik/GRADE8/MANDARIN CHINESE/GRADE 8 MANDARIN CHINESE OUTLINE.PDF",
        id: "grade-8-mandarin-chinese",
      },
      {
        name: "Mathematics",
        ebook:"https://member.log.agl.or.ke/maglex/kalasik/GRADE8/MATHEMATICS/GRADE 8 MATHEMATICS EBOOK.PDF",
        outline:"https://member.log.agl.or.ke/maglex/kalasik/GRADE8/MATHEMATICS/GRADE 8 MATHEMATICS OUTLINE.PDF",
        id: "grade-8-mathematics",
      },
      {
        name: "Performing Arts",
        ebook: "null",
        outline:"https://member.log.agl.or.ke/maglex/kalasik/GRADE8/PERFORMING ARTS/GRADE 8 PERFORMING ARTS OUTLINE.PDF",
        id: "grade-8-performing-arts",
      },
      {
        name: "Physical Education And Sports",
        ebook: "null",
        outline:"https://member.log.agl.or.ke/maglex/kalasik/GRADE8/PHYSICAL EDUCATION AND SPORTS/GRADE 8 PHYSICAL EDUCATION AND SPORTS OUTLINE.PDF",
        id: "grade-8-physical-education-and-sports",
      },
      {
        name: "Social Studies",
        ebook:"https://member.log.agl.or.ke/maglex/kalasik/GRADE8/SOCIAL STUDIES/GRADE 8 SOCIAL STUDIES EBOOK.PDF",
        outline:"https://member.log.agl.or.ke/maglex/kalasik/GRADE8/SOCIAL STUDIES/GRADE 8 SOCIAL STUDIES OUTLINE.PDF",
        id: "grade-8-social-studies",
      },
      {
        name: "Visual Arts",
        ebook:"https://member.log.agl.or.ke/maglex/kalasik/GRADE8/VISUAL ARTS/GRADE 8 VISUAL ARTS EBOOK.PDF",
        outline:"https://member.log.agl.or.ke/maglex/kalasik/GRADE8/VISUAL ARTS/GRADE 8 VISUAL ARTS OUTLINE.PDF",
        id: "grade-8-visual-arts",
      },
    ],
  },
  {
    grade: "Grade 9",
    subjects: [
      {
        name: "Agriculture",
        ebook:"https://member.log.agl.or.ke/maglex/kalasik/GRADE9/AGRICULTURE/GRADE 9 AGRICULTURE EBOOK.PDF",
        outline:"https://member.log.agl.or.ke/maglex/kalasik/GRADE9/AGRICULTURE/GRADE 9 AGRICULTURE OUTLINE.PDF",
        id: "grade-9-agriculture",
      },
      {
        name: "Arabic",
        ebook:"https://member.log.agl.or.ke/maglex/kalasik/GRADE9/ARABIC/GRADE 9 ARABIC EBOOK.PDF",
        outline:"https://member.log.agl.or.ke/maglex/kalasik/GRADE9/ARABIC/GRADE 9 ARABIC OUTLINE.PDF",
        id: "grade-9-arabic",
      },
      {
        name: "Business Studies",
        ebook:"https://member.log.agl.or.ke/maglex/kalasik/GRADE9/BUSINESS STUDIES/GRADE 9 BUSINESS STUDIES EBOOK.PDF",
        outline:"https://member.log.agl.or.ke/maglex/kalasik/GRADE9/BUSINESS STUDIES/GRADE 9 BUSINESS STUDIES OUTLINE.PDF",
        id: "grade-9-business-studies",
      },
      {
        name: "Christian Religious Education",
        outline:"https://member.log.agl.or.ke/maglex/kalasik/GRADE9/CHRISTIAN RELIGIOUS EDUCATION/GRADE 9 CHRISTIAN RELIGIOUS EDUCATION OUTLINE.PDF",
        outline: "null",
        id: "grade-9-christian-religious-education",
      },
      {
        name: "Computer Science",
        ebook:"https://member.log.agl.or.ke/maglex/kalasik/GRADE9/COMPUTER SCIENCE/GRADE 9 COMPUTER SCIENCE EBOOK.PDF",
        outline:"https://member.log.agl.or.ke/maglex/kalasik/GRADE9/COMPUTER SCIENCE/GRADE 9 COMPUTER SCIENCE OUTLINE.PDF",
        id: "grade-9-computer-science",
      },
      {
        name: "English",
        ebook:"https://member.log.agl.or.ke/maglex/kalasik/GRADE9/ENGLISH/GRADE 9 ENGLISH EBOOK.PDF",
        outline:"https://member.log.agl.or.ke/maglex/kalasik/GRADE9/ENGLISH/GRADE 9 ENGLISH OUTLINE.PDF",
        id: "grade-9-english",
      },
      {
        name: "French",
        ebook:"https://member.log.agl.or.ke/maglex/kalasik/GRADE9/FRENCH/GRADE 9 FRENCH EBOOK.PDF",
        outline:"https://member.log.agl.or.ke/maglex/kalasik/GRADE9/FRENCH/GRADE 9 FRENCH OUTLINE.PDF",
        id: "grade-9-french",
      },
      {
        name: "German",
        ebook:"https://member.log.agl.or.ke/maglex/kalasik/GRADE9/GERMAN/GRADE 9 GERMAN EBOOK.PDF",
        outline:"https://member.log.agl.or.ke/maglex/kalasik/GRADE9/GERMAN/GRADE 9 GERMAN OUTLINE.PDF",
        id: "grade-9-german",
      },
      {
        name: "Hindu Religious Education",
        ebook:"https://member.log.agl.or.ke/maglex/kalasik/GRADE9/HINDU RELIGIOUS EDUCATION/GRADE 9 HINDU RELIGIOUS EDUCATION EBOOK.PDF",
        outline:"https://member.log.agl.or.ke/maglex/kalasik/GRADE9/HINDU RELIGIOUS EDUCATION/GRADE 9 HINDU RELIGIOUS EDUCATION OUTLINE.PDF",
        id: "grade-9-hindu-religious-education",
      },
      {
        name: "Home Science",
        ebook:"https://member.log.agl.or.ke/maglex/kalasik/GRADE9/HOME SCIENCE/GRADE 9 HOME SCIENCE EBOOK.PDF",
        outline:"https://member.log.agl.or.ke/maglex/kalasik/GRADE9/HOME SCIENCE/GRADE 9 HOME SCIENCE OUTLINE.PDF",
        id: "grade-9-home-science",
      },
      {
        name: "Indigenous Languages",
        ebook:"null",
        outline:"https://member.log.agl.or.ke/maglex/kalasik/GRADE9/INDIGENOUS LANGUAGES/GRADE 9 INDIGENOUS LANGUAGES OUTLINE.PDF",
        id: "grade-9-indigenous-languages",
      },
      {
        name: "Integrated Science",
        ebook:"https://member.log.agl.or.ke/maglex/kalasik/GRADE9/INTEGRATED SCIENCE/GRADE 9 INTEGRATED SCIENCE EBOOK.PDF",
        outline:"https://member.log.agl.or.ke/maglex/kalasik/GRADE9/INTEGRATED SCIENCE/GRADE 9 INTEGRATED SCIENCE OUTLINE.PDF",
        id: "grade-9-integrated-science",
      },
      {
        name: "Islamic Religious Education",
        ebook:"https://member.log.agl.or.ke/maglex/kalasik/GRADE9/ISLAMIC RELIGIOUS EDUCATION/GRADE 9 ISLAMIC RELIGIOUS EDUCATION EBOOK.PDF",
        outline:"https://member.log.agl.or.ke/maglex/kalasik/GRADE9/ISLAMIC RELIGIOUS EDUCATION/GRADE 9 ISLAMIC RELIGIOUS EDUCATION OUTLINE.PDF",
        id: "grade-9-islamic-religious-education",
      },
      {
        name: "Kiswahili",
        ebook: "null",
        outline:"https://member.log.agl.or.ke/maglex/kalasik/GRADE9/KISWAHILI/GRADE 9 KISWAHILI OUTLINE.PDF",
        id: "grade-9-kiswahili",
      },
      {
        name: "Mandarin Chinese",
        ebook:"https://member.log.agl.or.ke/maglex/kalasik/GRADE9/MANDARIN CHINESE/GRADE 9 MANDARIN CHINESE EBOOK.PDF",
        outline:"https://member.log.agl.or.ke/maglex/kalasik/GRADE9/MANDARIN CHINESE/GRADE 9 MANDARIN CHINESE OUTLINE.PDF",
        id: "grade-9-mandarin-chinese",
      },
      {
        name: "Mathematics",
        ebook:"https://member.log.agl.or.ke/maglex/kalasik/GRADE9/MATHEMATICS/GRADE 9 MATHEMATICS EBOOK.PDF",
        outline:"https://member.log.agl.or.ke/maglex/kalasik/GRADE9/MATHEMATICS/GRADE 9 MATHEMATICS OUTLINE.PDF",
        id: "grade-9-mathematics",
      },
      {
        name: "Performing Arts",
        ebook: "null",
        outline:"https://member.log.agl.or.ke/maglex/kalasik/GRADE9/PERFORMING ARTS/GRADE 9 PERFORMING ARTS OUTLINE.PDF",
        id: "grade-9-performing-arts",
      },
      {
        name: "Social Studies",
        ebook:"https://member.log.agl.or.ke/maglex/kalasik/GRADE9/SOCIAL STUDIES/GRADE 9 SOCIAL STUDIES EBOOK.PDF",
        outline:"https://member.log.agl.or.ke/maglex/kalasik/GRADE9/SOCIAL STUDIES/GRADE 9 SOCIAL STUDIES OUTLINE.PDF",
        id: "grade-9-social-studies",
      },
      {
        name: "Sports And Physical Education",
        ebook: "null",
        outline:"https://member.log.agl.or.ke/maglex/kalasik/GRADE9/SPORTS AND PHYSICAL EDUCATION/GRADE 9 SPORTS AND PHYSICAL EDUCATION OUTLINE.PDF",
        id: "grade-9-sports-and-physical-education",
      },
      {
        name: "Visual Arts",
        ebook: "null",
        outline:"https://member.log.agl.or.ke/maglex/kalasik/GRADE9/VISUAL ARTS/GRADE 9 VISUAL ARTS OUTLINE.PDF",
        id: "grade-9-visual-arts",
      },
    ],
  },
];

export default coursesData;
