import json
import re

# Initial data
data = [
    {
        "grade": "Grade 1",
        "subjects": [
            {
                "name": "English",
                "ebook": "/kalasik/GRADE1/ENGLISH/GRADE 1 ENGLISH EBOOK.PDF",
                "outline": "/kalasik/GRADE1/ENGLISH/GRADE 1 ENGLISH OUTLINE.PDF",
            },
            {
                "name": "Indigenous Languages",
                "ebook": "/kalasik/GRADE1/INDIGENOUS LANGUAGES/GRADE 1 INDIGENOUS LANGUAGES EBOOK.PDF",
                "outline": "/kalasik/GRADE1/INDIGENOUS LANGUAGES/GRADE 1 INDIGENOUS LANGUAGES OUTLINE.PDF",
            },
            {
                "name": "Kiswahili",
                "ebook": "/kalasik/GRADE1/KISWAHILI/GRADE 1 KISWAHILI EBOOK.PDF",
                "outline": "/kalasik/GRADE1/KISWAHILI/GRADE 1 KISWAHILI OUTLINE.PDF",
            },
        ],
    },
    {
        "grade": "Grade 2",
        "subjects": [
            {
                "name": "English",
                "ebook": "/kalasik/GRADE2/ENGLISH/GRADE 2 ENGLISH EBOOK.PDF",
                "outline": "/kalasik/GRADE2/ENGLISH/GRADE 2 ENGLISH OUTLINE.PDF",
            },
            {
                "name": "Indigenous Language",
                "ebook": "/kalasik/GRADE2/INDIGENOUS LANGUAGE/GRADE 2 INDIGENOUS LANGUAGE EBOOK.PDF",
                "outline": "/kalasik/GRADE2/INDIGENOUS LANGUAGE/GRADE 2 INDIGENOUS LANGUAGES OUTLINE.PDF",
            },
            {
                "name": "Kiswahili",
                "ebook": "/kalasik/GRADE2/KISWAHILI/GRADE 2 KISWAHILI EBOOK.PDF",
                "outline": "/kalasik/GRADE2/KISWAHILI/GRADE 2 KISWAHILI OUTLINE.PDF",
            },
        ],
    },
    {
        "grade": "Grade 3",
        "subjects": [
            {
                "name": "English",
                "ebook": "/kalasik/GRADE3/ENGLISH/GRADE 3 ENGLISH EBOOK.PDF",
                "outline": "/kalasik/GRADE3/ENGLISH/GRADE 3 ENGLISH OUTLINE.PDF",
            },
            {
                "name": "Indigenous Languages",
                "ebook": "/kalasik/GRADE3/INDIGENOUS LANGUAGES/GRADE 3 INDIGENOUS LANGUAGES EBOOK.PDF",
                "outline": "/kalasik/GRADE3/INDIGENOUS LANGUAGES/GRADE 3 INDIGENOUS LANGUAGES OUTLINE.PDF",
            },
            {
                "name": "Kiswahili",
                "ebook": "/kalasik/GRADE3/KISWAHILI/GRADE 3 KISWAHILI EBOOK.PDF",
                "outline": "/kalasik/GRADE3/KISWAHILI/GRADE 3 KISWAHILI OUTLINE.PDF",
            },
        ],
    },
    {
        "grade": "Grade 4",
        "subjects": [
            {
                "name": "Agriculture",
                "ebook": "/kalasik/GRADE4/AGRICULTURE/GRADE 4 AGRICULTURE EBOOK.PDF",
                "outline": "/kalasik/GRADE4/AGRICULTURE/GRADE 4 AGRICULTURE OUTLINE.PDF",
            },
            {
                "name": "Arabic",
                "ebook": "/kalasik/GRADE4/ARABIC/GRADE 4 ARABIC EBOOK.PDF",
                "outline": "/kalasik/GRADE4/ARABIC/GRADE 4 ARABIC OUTLINE.PDF",
            },
            {
                "name": "Art And Craft",
                "ebook": "/kalasik/GRADE4/ART AND CRAFT/GRADE 4 ART AND CRAFT EBOOK.PDF",
                "outline": "/kalasik/GRADE4/ART AND CRAFT/GRADE 4 ART AND CRAFT OUTLINE.PDF",
            },
            {
                "name": "Christian Religious Education",
                "ebook": "/kalasik/GRADE4/CHRISTIAN RELIGIOUS EDUCATION/GRADE 4 CHRISTIAN RELIGIOUS EDUCATION EBOOK.PDF",
                "outline": "/kalasik/GRADE4/CHRISTIAN RELIGIOUS EDUCATION/GRADE 4 CHRISTIAN RELIGIOUS EDUCATION OUTLINE.PDF",
            },
            {
                "name": "English",
                "ebook": "/kalasik/GRADE4/ENGLISH/GRADE 4 ENGLISH EBOOK.PDF",
                "outline": "/kalasik/GRADE4/ENGLISH/GRADE 4 ENGLISH OUTLINE.PDF",
            },
            {
                "name": "French",
                "ebook": "/kalasik/GRADE4/FRENCH/GRADE 4 FRENCH EBOOK.PDF",
                "outline": "/kalasik/GRADE4/FRENCH/GRADE 4 FRENCH OUTLINE.PDF",
            },
            {
                "name": "German",
                "ebook": "/kalasik/GRADE4/GERMAN/GRADE 4 GERMAN EBOOK.PDF",
                "outline": "/kalasik/GRADE4/GERMAN/GRADE 4 GERMAN OUTLINE.PDF",
            },
            {
                "name": "Hindu Religious Education",
                "ebook": "/kalasik/GRADE4/HINDU RELIGIOUS EDUCATION/GRADE 4 HINDU RELIGIOUS EDUCATION EBOOK.PDF",
                "outline": "/kalasik/GRADE4/HINDU RELIGIOUS EDUCATION/GRADE 4 HINDU RELIGIOUS EDUCATION OUTLINE.PDF",
            },
            {
                "name": "Home Science",
                "ebook": "/kalasik/GRADE4/HOME SCIENCE/GRADE 4 HOME SCIENCE EBOOK.PDF",
                "outline": "/kalasik/GRADE4/HOME SCIENCE/GRADE 4 HOME SCIENCE OUTLINE.PDF",
            },
            {
                "name": "Islamic Religion Education",
                "ebook": "/kalasik/GRADE4/ISLAMIC RELIGIOUS EDUCATION/GRADE 4 ISLAMIC RELIGIOUS EDUCATION EBOOK.PDF",
                "outline": "/kalasik/GRADE4/ISLAMIC RELIGION EDUCATION/GRADE 4 ISLAMIC RELIGION EDUCATION OUTLINE.PDF",
            },
            {
                "name": "Kenya Sign Language",
                "ebook": "null",
                "outline": "/kalasik/GRADE4/KENYA SIGN LANGUAGE/GRADE 4 KENYA SIGN LANGUAGE OUTLINE.PDF",
            },
            {
                "name": "Kiswahili",
                "ebook": "/kalasik/GRADE4/KISWAHILI/GRADE 4 KISWAHILI EBOOK.PDF",
                "outline": "/kalasik/GRADE4/KISWAHILI/GRADE 4 KISWAHILI OUTLINE.PDF",
            },
            {
                "name": "Mandarin Chinese",
                "ebook": "/kalasik/GRADE4/MANDARIN CHINESE/GRADE 4 MANDARIN CHINESE EBOOK.PDF",
                "outline": "/kalasik/GRADE4/MANDARIN CHINESE/GRADE 4 MANDARIN CHINESE OUTLINE.PDF",
            },
            {
                "name": "Mathematics",
                "ebook": "/kalasik/GRADE4/MATHEMATICS/GRADE 4 MATHEMATICS EBOOK.PDF",
                "outline": "/kalasik/GRADE4/MATHEMATICS/GRADE 4 MATHEMATICS OUTLINE.PDF",
            },
            {
                "name": "Music",
                "ebook": "null",
                "outline": "/kalasik/GRADE4/MUSIC/GRADE 4 MUSIC OUTLINE.PDF",
            },
            {
                "name": "Physical And Health Education",
                "ebook": "null",
                "outline": "/kalasik/GRADE4/PHYSICAL AND HEALTH EDUCATION/GRADE 4 PHYSICAL AND HEALTH EDUCATION OUTLINE.PDF",
            },
            {
                "name": "Science And Technology",
                "ebook": "/kalasik/GRADE4/SCIENCE AND TECHNOLOGY/GRADE 4 SCIENCE AND TECHNOLOGY EBOOK.PDF",
                "outline": "null",
            },
            {
                "name": "Social Studies",
                "ebook": "/kalasik/GRADE4/SOCIAL STUDIES/GRADE 4 SOCIAL STUDIES EBOOK.PDF",
                "outline": "/kalasik/GRADE4/SOCIAL STUDIES/GRADE 4 SOCIAL STUDIES OUTLINE.PDF",
            },
        ],
    },
    {
        "grade": "Grade 5",
        "subjects": [
            {
                "name": "Agriculture",
                "ebook": "/kalasik/GRADE5/AGRICULTURE/GRADE 5 AGRICULTURE EBOOK.PDF",
                "outline": "/kalasik/GRADE5/AGRICULTURE/GRADE 5 AGRICULTURE OUTLINE.PDF",
            },
            {
                "name": "Arabic",
                "ebook": "/kalasik/GRADE5/ARABIC/GRADE 5 ARABIC EBOOK.PDF",
                "outline": "/kalasik/GRADE5/ARABIC/GRADE 5 ARABIC OUTLINE.PDF",
            },
            {
                "name": "Art And Craft",
                "ebook": "null",
                "outline": "/kalasik/GRADE5/ART AND CRAFT/GRADE 5 ART AND CRAFT OUTLINE.PDF",
            },
            {
                "name": "Christian Religious Education",
                "ebook": "/kalasik/GRADE5/CHRISTIAN RELIGIOUS EDUCATION/GRADE 5 CHRISTIAN RELIGIOUS EDUCATION EBOOK.PDF",
                "outline": "/kalasik/GRADE5/CHRISTIAN RELIGIOUS EDUCATION/GRADE 5 CHRISTIAN RELIGIOUS EDUCATION OUTLINE.PDF",
            },
            {
                "name": "English",
                "ebook": "/kalasik/GRADE5/ENGLISH/GRADE 5 ENGLISH EBOOK.PDF",
                "outline": "/kalasik/GRADE5/ENGLISH/GRADE 5 ENGLISH OUTLINE.PDF",
            },
            {
                "name": "French",
                "ebook": "/kalasik/GRADE5/FRENCH/GRADE 5 FRENCH EBOOK.PDF",
                "outline": "/kalasik/GRADE5/FRENCH/GRADE 5 FRENCH OUTLINE.PDF",
            },
            {
                "name": "German",
                "ebook": "/kalasik/GRADE5/GERMAN/GRADE 5 GERMAN EBOOK.PDF",
                "outline": "/kalasik/GRADE5/GERMAN/GRADE 5 GERMAN OUTLINE.PDF",
            },
            {
                "name": "Hindu Religious Education",
                "ebook": "/kalasik/GRADE5/HINDU RELIGIOUS EDUCATION/GRADE 5 HINDU RELIGIOUS EDUCATION EBOOK.PDF",
                "outline": "/kalasik/GRADE5/HINDU RELIGIOUS EDUCATION/GRADE 5 HINDU RELIGIOUS EDUCATION OUTLINE.PDF",
            },
            {
                "name": "Home Science",
                "ebook": "/kalasik/GRADE5/HOME SCIENCE/GRADE 5 HOME SCIENCE EBOOK.PDF",
                "outline": "/kalasik/GRADE5/HOME SCIENCE/GRADE 5 HOME SCIENCE OUTLINE.PDF",
            },
            {
                "name": "Islamic Religious Education",
                "ebook": "/kalasik/GRADE5/ISLAMIC RELIGIOUS EDUCATION/GRADE 5 ISLAMIC RELIGIOUS EDUCATION EBOOK.PDF",
                "outline": "/kalasik/GRADE5/ISLAMIC RELIGIOUS EDUCATION/GRADE 5 ISLAMIC RELIGIOUS EDUCATION OUTLINE.PDF",
            },
            {
                "name": "Kiswahili",
                "ebook": "/kalasik/GRADE5/KISWAHILI/GRADE 5 KISWAHILI EBOOK.PDF",
                "outline": "/kalasik/GRADE5/KISWAHILI/GRADE 5 KISWAHILI OUTLINE.PDF",
            },
            {
                "name": "Mandarin Chinese",
                "ebook": "null",
                "outline": "/kalasik/GRADE5/MANDARIN CHINESE/GRADE 5 MANDARIN CHINESE OUTLINE.PDF",
            },
            {
                "name": "Mathematics",
                "ebook": "/kalasik/GRADE5/MATHEMATICS/GRADE 5 MATHEMATICS EBOOK.PDF",
                "outline": "/kalasik/GRADE5/MATHEMATICS/GRADE 5 MATHEMATICS OUTLINE.PDF",
            },
            {
                "name": "Music",
                "ebook": "null",
                "outline": "/kalasik/GRADE5/MUSIC/GRADE 5 MUSIC OUTLINE.PDF",
            },
            {
                "name": "Physical Education",
                "ebook": "null",
                "outline": "/kalasik/GRADE5/PHYSICAL EDUCATION/GRADE 5 PHYSICAL EDUCATION OUTLINE.PDF",
            },
            {
                "name": "Social Studies",
                "ebook": "/kalasik/GRADE5/SOCIAL STUDIES/GRADE 5 SOCIAL STUDIES EBOOK.PDF",
                "outline": "/kalasik/GRADE5/SOCIAL STUDIES/GRADE 5 SOCIAL STUDIES OUTLINE.PDF",
            },
        ],
    },
    {
        "grade": "Grade 6",
        "subjects": [
            {
                "name": "Agriculture",
                "ebook": "/kalasik/GRADE6/AGRICULTURE/GRADE 6 AGRICULTURE EBOOK.PDF",
                "outline": "/kalasik/GRADE6/AGRICULTURE/GRADE 6 AGRICULTURE OUTLINE.PDF",
            },
            {
                "name": "Arabic",
                "ebook": "/kalasik/GRADE6/ARABIC/GRADE 6 ARABIC EBOOK.PDF",
                "outline": "/kalasik/GRADE6/ARABIC/GRADE 6 ARABIC OUTLINE.PDF",
            },
            {
                "name": "Art And Craft",
                "ebook": "null",
                "outline": "/kalasik/GRADE6/ART AND CRAFT/GRADE 6 ART AND CRAFT OUTLINE.PDF",
            },
            {
                "name": "Christian Religious Education",
                "ebook": "/kalasik/GRADE6/CHRISTIAN RELIGIOUS EDUCATION/GRADE 6 CHRISTIAN RELIGIOUS EDUCATION EBOOK.PDF",
                "outline": "/kalasik/GRADE6/CHRISTIAN RELIGIOUS EDUCATION/GRADE 6 CHRISTIAN RELIGIOUS EDUCATION OUTLINE.PDF",
            },
            {
                "name": "English",
                "ebook": "/kalasik/GRADE6/ENGLISH/GRADE 6 ENGLISH EBOOK.PDF",
                "outline": "/kalasik/GRADE6/ENGLISH/GRADE 6 ENGLISH OUTLINE.PDF",
            },
            {
                "name": "French",
                "ebook": "/kalasik/GRADE6/FRENCH/GRADE 6 FRENCH EBOOK.PDF",
                "outline": "/kalasik/GRADE6/FRENCH/GRADE 6 FRENCH OUTLINE.PDF",
            },
            {
                "name": "German",
                "ebook": "/kalasik/GRADE6/GERMAN/GRADE 6 GERMAN EBOOK.PDF",
                "outline": "/kalasik/GRADE6/GERMAN/GRADE 6 GERMAN OUTLINE.PDF",
            },
            {
                "name": "Hindu Religious Education",
                "ebook": "/kalasik/GRADE6/HINDU RELIGIOUS EDUCATION/GRADE 6 HINDU RELIGIOUS EDUCATION EBOOK.PDF",
                "outline": "/kalasik/GRADE6/HINDU RELIGIOUS EDUCATION/GRADE 6 HINDU RELIGIOUS EDUCATION OUTLINE.PDF",
            },
            {
                "name": "Home Science",
                "ebook": "/kalasik/GRADE6/HOME SCIENCE/GRADE 6 HOME SCIENCE EBOOK.PDF",
                "outline": "/kalasik/GRADE6/HOME SCIENCE/GRADE 6 HOME SCIENCE OUTLINE.PDF",
            },
            {
                "name": "Islamic Religious Education",
                "ebook": "/kalasik/GRADE6/ISLAMIC RELIGIOUS EDUCATION/GRADE 6 ISLAMIC RELIGIOUS EDUCATION EBOOK.PDF",
                "outline": "/kalasik/GRADE6/ISLAMIC RELIGIOUS EDUCATION/GRADE 6 ISLAMIC RELIGIOUS EDUCATION OUTLINE.PDF",
            },
            {
                "name": "Kiswahili",
                "ebook": "null",
                "outline": "/kalasik/GRADE6/KISWAHILI/GRADE 6 KISWAHILI OUTLINE.PDF",
            },
            {
                "name": "Mandarin Chinese",
                "ebook": "/kalasik/GRADE6/MANDARIN CHINESE/GRADE 6 MANDARIN CHINESE EBOOK.PDF",
                "outline": "/kalasik/GRADE6/MANDARIN CHINESE/GRADE 6 MANDARIN CHINESE OUTLINE.PDF",
            },
            {
                "name": "Mathematics",
                "ebook": "/kalasik/GRADE6/MATHEMATICS/GRADE 6 MATHEMATICS EBOOK.PDF",
                "outline": "/kalasik/GRADE6/MATHEMATICS/GRADE 6 MATHEMATICS OUTLINE.PDF",
            },
            {
                "name": "Music",
                "ebook": "null",
                "outline": "/kalasik/GRADE6/MUSIC/GRADE 6 MUSIC OUTLINE.PDF",
            },
            {
                "name": "Science And Technology",
                "ebook": "/kalasik/GRADE6/SCIENCE AND TECHNOLOGY/GRADE 6 SCIENCE AND TECHNOLOGY EBOOK.PDF",
                "outline": "/kalasik/GRADE6/SCIENCE AND TECHNOLOGY/GRADE 6 SCIENCE AND TECHNOLOGY OUTLINE.PDF",
            },
            {
                "name": "Social Studies",
                "ebook": "null",
                "outline": "/kalasik/GRADE6/SOCIAL STUDIES/GRADE 6 SOCIAL STUDIES OUTLINE.PDF",
            },
        ],
    },
    {
        "grade": "Grade 7",
        "subjects": [
            {
                "name": "Agriculture",
                "ebook": "null",
                "outline": "/kalasik/GRADE7/AGRICULTURE/GRADE 7 AGRICULTURE OUTLINE.PDF",
            },
            {
                "name": "Arabic",
                "ebook": "/kalasik/GRADE7/ARABIC/GRADE 7 ARABIC EBOOK.PDF",
                "outline": "/kalasik/GRADE7/ARABIC/GRADE 7 ARABIC OUTLINE.PDF",
            },
            {
                "name": "Business Studies",
                "ebook": "null",
                "outline": "/kalasik/GRADE7/BUSINESS STUDIES/GRADE 7 BUSINESS STUDIES OUTLINE.PDF",
            },
            {
                "name": "Christian Religious Education",
                "ebook": "/kalasik/GRADE7/CHRISTIAN RELIGIOUS EDUCATION/GRADE 7 CHRISTIAN RELIGIOUS EDUCATION EBOOK.PDF",
                "outline": "/kalasik/GRADE7/CHRISTIAN RELIGIOUS EDUCATION/GRADE 7 CHRISTIAN RELIGIOUS EDUCATION OUTLINE.PDF",
            },
            {
                "name": "Computer Science",
                "ebook": "null",
                "outline": "/kalasik/GRADE7/COMPUTER SCIENCE/GRADE 7 COMPUTER SCIENCE OUTLINE.PDF",
            },
            {
                "name": "English",
                "ebook": "/kalasik/GRADE7/ENGLISH/GRADE 7 ENGLISH EBOOK.PDF",
                "outline": "/kalasik/GRADE7/ENGLISH/GRADE 7 ENGLISH OUTLINE.PDF",
            },
            {
                "name": "French",
                "ebook": "/kalasik/GRADE7/FRENCH/GRADE 7 FRENCH EBOOK.PDF",
                "outline": "/kalasik/GRADE7/FRENCH/GRADE 7 FRENCH OUTLINE.PDF",
            },
            {
                "name": "German",
                "ebook": "/kalasik/GRADE7/GERMAN/GRADE 7 GERMAN EBOOK.PDF",
                "outline": "/kalasik/GRADE7/GERMAN/GRADE 7 GERMAN OUTLINE.PDF",
            },
            {
                "name": "Health Education",
                "ebook": "null",
                "outline": "/kalasik/GRADE7/HEALTH EDUCATION/GRADE 7 HEALTH EDUCATION OUTLINE.PDF",
            },
            {
                "name": "Hindu Religious Education",
                "ebook": "/kalasik/GRADE7/HINDU RELIGIOUS EDUCATION/GRADE 7 HINDU RELIGIOUS EDUCATION EBOOK.PDF",
                "outline": "/kalasik/GRADE7/HINDU RELIGIOUS EDUCATION/GRADE 7 HINDU RELIGIOUS EDUCATION OUTLINE.PDF",
            },
            {
                "name": "Home Science",
                "ebook": "/kalasik/GRADE7/HOME SCIENCE/GRADE 7 HOME SCIENCE EBOOK.PDF",
                "outline": "/kalasik/GRADE7/HOME SCIENCE/GRADE 7 HOME SCIENCE OUTLINE.PDF",
            },
            {
                "name": "Indigenous",
                "ebook": "null",
                "outline": "/kalasik/GRADE7/INDIGENOUS/GRADE 7 INDIGENOUS OUTLINE.PDF",
            },
            {
                "name": "Islamic Religious Education",
                "ebook": "/kalasik/GRADE7/ISLAMIC RELIGIOUS EDUCATION/GRADE 7 ISLAMIC RELIGIOUS EDUCATION EBOOK.PDF",
                "outline": "/kalasik/GRADE7/ISLAMIC RELIGIOUS EDUCATION/GRADE 7 ISLAMIC RELIGIOUS EDUCATION OUTLINE.PDF",
            },
            {
                "name": "Kenya Sign Language",
                "ebook": "null",
                "outline": "/kalasik/GRADE7/KENYA SIGN LANGUAGE/GRADE 7 KENYA SIGN LANGUAGE OUTLINE.PDF",
            },
            {
                "name": "Kiswahili",
                "ebook": "null",
                "outline": "/kalasik/GRADE7/KISWAHILI/GRADE 7 KISWAHILI OUTLINE.PDF",
            },
            {
                "name": "Life Skill",
                "ebook": "/kalasik/GRADE7/LIFE SKILL/GRADE 7 LIFE SKILL EBOOK.PDF",
                "outline": "null",
            },
            {
                "name": "Life Skills",
                "ebook": "null",
                "outline": "/kalasik/GRADE7/LIFE SKILLS/GRADE 7 LIFE SKILLS OUTLINE.PDF",
            },
            {
                "name": "Mandarin Chinese",
                "ebook": "/kalasik/GRADE7/MANDARIN CHINESE/GRADE 7 MANDARIN CHINESE EBOOK.PDF",
                "outline": "/kalasik/GRADE7/MANDARIN CHINESE/GRADE 7 MANDARIN CHINESE OUTLINE.PDF",
            },
            {
                "name": "Mathematics",
                "ebook": "/kalasik/GRADE7/MATHEMATICS/GRADE 7 MATHEMATICS EBOOK.PDF",
                "outline": "/kalasik/GRADE7/MATHEMATICS/GRADE 7 MATHEMATICS OUTLINE.PDF",
            },
            {
                "name": "Performing Arts",
                "ebook": "/kalasik/GRADE7/PERFORMING ARTS/GRADE 7 PERFORMING ARTS EBOOK.PDF",
                "outline": "/kalasik/GRADE7/PERFORMING ARTS/GRADE 7 PERFORMING ARTS OUTLINE.PDF",
            },
            {
                "name": "Social Studies",
                "ebook": "/kalasik/GRADE7/SOCIAL STUDIES/GRADE 7 SOCIAL STUDIES EBOOK.PDF",
                "outline": "/kalasik/GRADE7/SOCIAL STUDIES/GRADE 7 SOCIAL STUDIES OUTLINE.PDF",
            },
            {
                "name": "Social Studies Outline Duplicate",
                "ebook": "null",
                "outline": "null",
            },
            {
                "name": "Visual Arts",
                "ebook": "null",
                "outline": "/kalasik/GRADE7/VISUAL ARTS/GRADE 7 VISUAL ARTS OUTLINE.PDF",
            },
        ],
    },
    {
        "grade": "Grade 8",
        "subjects": [
            {
                "name": "Agriculture",
                "ebook": "/kalasik/GRADE8/AGRICULTURE/GRADE 8 AGRICULTURE EBOOK.PDF",
                "outline": "/kalasik/GRADE8/AGRICULTURE/GRADE 8 AGRICULTURE OUTLINE.PDF",
            },
            {
                "name": "Arabic",
                "ebook": "/kalasik/GRADE8/ARABIC/GRADE 8 ARABIC EBOOK.PDF",
                "outline": "/kalasik/GRADE8/ARABIC/GRADE 8 ARABIC OUTLINE.PDF",
            },
            {
                "name": "Business Studies",
                "ebook": "/kalasik/GRADE8/BUSINESS STUDIES/GRADE 8 BUSINESS STUDIES EBOOK.PDF",
                "outline": "/kalasik/GRADE8/BUSINESS STUDIES/GRADE 8 BUSINESS STUDIES OUTLINE.PDF",
            },
            {
                "name": "Christian Religious Education",
                "ebook": "/kalasik/GRADE8/CHRISTIAN RELIGIOUS EDUCATION/GRADE 8 CHRISTIAN RELIGIOUS EDUCATION OUTLINE.PDF",
                "outline": "/kalasik/GRADE8/CHRISTIAN RELIGIOUS EDUCATION/GRADE 8 CHRISTIAN RELIGIOUS EDUCATION OUTLINE.PDF",
            },
            {
                "name": "Computer Science",
                "ebook": "/kalasik/GRADE8/COMPUTER SCIENCE/GRADE 8 COMPUTER SCIENCE EBOOK.PDF",
                "outline": "/kalasik/GRADE8/COMPUTER SCIENCE/GRADE 8 COMPUTER SCIENCE OUTLINE.PDF",
            },
            {
                "name": "English",
                "ebook": "/kalasik/GRADE8/ENGLISH/GRADE 8 ENGLISH EBOOK.PDF",
                "outline": "/kalasik/GRADE8/ENGLISH/GRADE 8 ENGLISH OUTLINE.PDF",
            },
            {
                "name": "French",
                "ebook": "/kalasik/GRADE8/FRENCH/GRADE 8 FRENCH EBOOK.PDF",
                "outline": "/kalasik/GRADE8/FRENCH/GRADE 8 FRENCH OUTLINE.PDF",
            },
            {
                "name": "German",
                "ebook": "/kalasik/GRADE8/GERMAN/GRADE 8 GERMAN EBOOK.PDF",
                "outline": "null",
            },
            {
                "name": "German Ebook Duplicate",
                "ebook": "null",
                "outline": "null",
            },
            {
                "name": "Hindu Religious Education",
                "ebook": "/kalasik/GRADE8/HINDU RELIGIOUS EDUCATION/GRADE 8 HINDU RELIGIOUS EDUCATION EBOOK.PDF",
                "outline": "/kalasik/GRADE8/HINDU RELIGIOUS EDUCATION/GRADE 8 HINDU RELIGIOUS EDUCATION OUTLINE.PDF",
            },
            {
                "name": "Home Science",
                "ebook": "/kalasik/GRADE8/HOME SCIENCE/GRADE 8 HOME SCIENCE EBOOK.PDF",
                "outline": "/kalasik/GRADE8/HOME SCIENCE/GRADE 8 HOME SCIENCE OUTLINE.PDF",
            },
            {
                "name": "Indigenious Language",
                "ebook": "null",
                "outline": "/kalasik/GRADE8/INDIGENIOUS LANGUAGE/GRADE 8 INDIGENIOUS LANGUAGE OUTLINE.PDF",
            },
            {
                "name": "Indigenous Language",
                "ebook": "/kalasik/GRADE8/INDIGENOUS LANGUAGE/GRADE 8 INDIGENOUS LANGUAGE EBOOK.PDF",
                "outline": "null",
            },
            {
                "name": "Intergrated Science",
                "ebook": "/kalasik/GRADE8/INTERGRATED SCIENCE/GRADE 8 INTERGRATED SCIENCE EBOOK.PDF",
                "outline": "/kalasik/GRADE8/INTERGRATED SCIENCE/GRADE 8 INTERGRATED SCIENCE OUTLINE.PDF",
            },
            {
                "name": "Islamic Religious Education",
                "ebook": "/kalasik/GRADE8/ISLAMIC RELIGIOUS EDUCATION/GRADE 8 ISLAMIC RELIGIOUS EDUCATION EBOOK.PDF",
                "outline": "/kalasik/GRADE8/ISLAMIC RELIGIOUS EDUCATION/GRADE 8 ISLAMIC RELIGIOUS EDUCATION OUTLINE.PDF",
            },
            {
                "name": "Kenya Sign Language",
                "ebook": "null",
                "outline": "/kalasik/GRADE8/KENYA SIGN LANGUAGE/GRADE 8 KENYA SIGN LANGUAGE OUTLINE.PDF",
            },
            {
                "name": "Kiswahili",
                "ebook": "/kalasik/GRADE8/KISWAHILI/GRADE 8 KISWAHILI EBOOK.PDF",
                "outline": "/kalasik/GRADE8/KISWAHILI/GRADE 8 KISWAHILI OUTLINE.PDF",
            },
            {
                "name": "Mandarin Chinese",
                "ebook": "null",
                "outline": "/kalasik/GRADE8/MANDARIN CHINESE/GRADE 8 MANDARIN CHINESE OUTLINE.PDF",
            },
            {
                "name": "Mathematics",
                "ebook": "/kalasik/GRADE8/MATHEMATICS/GRADE 8 MATHEMATICS EBOOK.PDF",
                "outline": "/kalasik/GRADE8/MATHEMATICS/GRADE 8 MATHEMATICS OUTLINE.PDF",
            },
            {
                "name": "Performing Arts",
                "ebook": "null",
                "outline": "/kalasik/GRADE8/PERFORMING ARTS/GRADE 8 PERFORMING ARTS OUTLINE.PDF",
            },
            {
                "name": "Physical Education And Sports",
                "ebook": "null",
                "outline": "/kalasik/GRADE8/PHYSICAL EDUCATION AND SPORTS/GRADE 8 PHYSICAL EDUCATION AND SPORTS OUTLINE.PDF",
            },
            {
                "name": "Social Studies",
                "ebook": "/kalasik/GRADE8/SOCIAL STUDIES/GRADE 8 SOCIAL STUDIES EBOOK.PDF",
                "outline": "/kalasik/GRADE8/SOCIAL STUDIES/GRADE 8 SOCIAL STUDIES OUTLINE.PDF",
            },
            {
                "name": "Visual Arts",
                "ebook": "/kalasik/GRADE8/VISUAL ARTS/GRADE 8 VISUAL ARTS EBOOK.PDF",
                "outline": "/kalasik/GRADE8/VISUAL ARTS/GRADE 8 VISUAL ARTS OUTLINE.PDF",
            },
        ],
    },
    {
        "grade": "Grade 9",
        "subjects": [
            {
                "name": "Agriculture",
                "ebook": "/kalasik/GRADE9/AGRICULTURE/GRADE 9 AGRICULTURE EBOOK.PDF",
                "outline": "/kalasik/GRADE9/AGRICULTURE/GRADE 9 AGRICULTURE OUTLINE.PDF",
            },
            {
                "name": "Arabic",
                "ebook": "/kalasik/GRADE9/ARABIC/GRADE 9 ARABIC EBOOK.PDF",
                "outline": "/kalasik/GRADE9/ARABIC/GRADE 9 ARABIC OUTLINE.PDF",
            },
            {
                "name": "Business Studies",
                "ebook": "/kalasik/GRADE9/BUSINESS STUDIES/GRADE 9 BUSINESS STUDIES EBOOK.PDF",
                "outline": "/kalasik/GRADE9/BUSINESS STUDIES/GRADE 9 BUSINESS STUDIES OUTLINE.PDF",
            },
            {
                "name": "Christian Religious Education",
                "ebook": "/kalasik/GRADE9/CHRISTIAN RELIGIOUS EDUCATION/GRADE 9 CHRISTIAN RELIGIOUS EDUCATION EBOOK.PDF",
                "outline": "null",
            },
            {
                "name": "Computer Science",
                "ebook": "/kalasik/GRADE9/COMPUTER SCIENCE/GRADE 9 COMPUTER SCIENCE EBOOK.PDF",
                "outline": "/kalasik/GRADE9/COMPUTER SCIENCE/GRADE 9 COMPUTER SCIENCE OUTLINE.PDF",
            },
            {
                "name": "English",
                "ebook": "/kalasik/GRADE9/ENGLISH/GRADE 9 ENGLISH EBOOK.PDF",
                "outline": "/kalasik/GRADE9/ENGLISH/GRADE 9 ENGLISH OUTLINE.PDF",
            },
            {
                "name": "French",
                "ebook": "/kalasik/GRADE9/FRENCH/GRADE 9 FRENCH EBOOK.PDF",
                "outline": "/kalasik/GRADE9/FRENCH/GRADE 9 FRENCH OUTLINE.PDF",
            },
            {
                "name": "German",
                "ebook": "/kalasik/GRADE9/GERMAN/GRADE 9 GERMAN EBOOK.PDF",
                "outline": "/kalasik/GRADE9/GERMAN/GRADE 9 GERMAN OUTLINE.PDF",
            },
            {
                "name": "Hindu Religious Education",
                "ebook": "/kalasik/GRADE9/HINDU RELIGIOUS EDUCATION/GRADE 9 HINDU RELIGIOUS EDUCATION EBOOK.PDF",
                "outline": "/kalasik/GRADE9/HINDU RELIGIOUS EDUCATION/GRADE 9 HINDU RELIGIOUS EDUCATION OUTLINE.PDF",
            },
            {
                "name": "Home Science",
                "ebook": "/kalasik/GRADE9/HOME SCIENCE/GRADE 9 HOME SCIENCE EBOOK.PDF",
                "outline": "/kalasik/GRADE9/HOME SCIENCE/GRADE 9 HOME SCIENCE OUTLINE.PDF",
            },
            {
                "name": "Indigenous Languages",
                "ebook": "null",
                "outline": "/kalasik/GRADE9/INDIGENOUS LANGUAGES/GRADE 9 INDIGENOUS LANGUAGES OUTLINE.PDF",
            },
            {
                "name": "Integrated Science",
                "ebook": "/kalasik/GRADE9/INTEGRATED SCIENCE/GRADE 9 INTEGRATED SCIENCE EBOOK.PDF",
                "outline": "/kalasik/GRADE9/INTEGRATED SCIENCE/GRADE 9 INTEGRATED SCIENCE OUTLINE.PDF",
            },
            {
                "name": "Islamic Religious Education",
                "ebook": "/kalasik/GRADE9/ISLAMIC RELIGIOUS EDUCATION/GRADE 9 ISLAMIC RELIGIOUS EDUCATION EBOOK.PDF",
                "outline": "/kalasik/GRADE9/ISLAMIC RELIGIOUS EDUCATION/GRADE 9 ISLAMIC RELIGIOUS EDUCATION OUTLINE.PDF",
            },
            {
                "name": "Kiswahili",
                "ebook": "null",
                "outline": "/kalasik/GRADE9/KISWAHILI/GRADE 9 KISWAHILI OUTLINE.PDF",
            },
            {
                "name": "Mandarin Chinese",
                "ebook": "/kalasik/GRADE9/MANDARIN CHINESE/GRADE 9 MANDARIN CHINESE EBOOK.PDF",
                "outline": "/kalasik/GRADE9/MANDARIN CHINESE/GRADE 9 MANDARIN CHINESE OUTLINE.PDF",
            },
            {
                "name": "Mathematics",
                "ebook": "/kalasik/GRADE9/MATHEMATICS/GRADE 9 MATHEMATICS EBOOK.PDF",
                "outline": "/kalasik/GRADE9/MATHEMATICS/GRADE 9 MATHEMATICS OUTLINE.PDF",
            },
            {
                "name": "Performing Arts",
                "ebook": "null",
                "outline": "/kalasik/GRADE9/PERFORMING ARTS/GRADE 9 PERFORMING ARTS OUTLINE.PDF",
            },
            {
                "name": "Social Studies",
                "ebook": "/kalasik/GRADE9/SOCIAL STUDIES/GRADE 9 SOCIAL STUDIES EBOOK.PDF",
                "outline": "/kalasik/GRADE9/SOCIAL STUDIES/GRADE 9 SOCIAL STUDIES OUTLINE.PDF",
            },
            {
                "name": "Sports And Physical Education",
                "ebook": "null",
                "outline": "/kalasik/GRADE9/SPORTS AND PHYSICAL EDUCATION/GRADE 9 SPORTS AND PHYSICAL EDUCATION OUTLINE.PDF",
            },
            {
                "name": "Visual Arts",
                "ebook": "null",
                "outline": "/kalasik/GRADE9/VISUAL ARTS/GRADE 9 VISUAL ARTS OUTLINE.PDF",
            },
        ],
    },
]


def slugify(text):
    """Convert text to a slug-like string."""
    return re.sub(r"\s+", "-", text.lower())


def add_ids_to_courses(courses_data):
    for course in courses_data:
        grade_slug1 = slugify(course["grade"])
        for subject in course["subjects"]:
            subject_slug = slugify(subject["name"])
            subject["id"] = f"{grade_slug1}-{subject_slug}"
    return courses_data


# Add IDs to the data
updated_data = add_ids_to_courses(data)

# Print the result in JSON format to verify
print(json.dumps(updated_data, indent=2))
