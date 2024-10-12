require('dotenv').config();
const mongoose = require('mongoose');
const Course = require('./courseModel');

const connectDB = require('../config/db');

const insertCourseData = async () => {
    try {
        await connectDB();

        // Clear existing courses
        await Course.deleteMany({});

        // Define courses with topics and detailed content
        const courses = [
            {
                title: 'Mathematics',
                description: 'An in-depth mathematics course covering various topics.',
                topics: [
                    {
                        title: 'Number Systems',
                        content: `This topic covers the different types of numbers and their properties.

**Key Concepts:**

- **Natural Numbers:** Counting numbers starting from 1.
- **Whole Numbers:** Natural numbers including zero.
- **Integers:** Whole numbers and their negatives.
- **Rational Numbers:** Numbers that can be expressed as a fraction of two integers.
- **Irrational Numbers:** Numbers that cannot be expressed as a simple fraction.
- **Real Numbers:** All rational and irrational numbers.

**Activities:**

- **Number Line Exercises:** Placing different numbers on a number line.
- **Classifying Numbers:** Identifying types of numbers in a list.`,
                    },
                    {
                        title: 'Algebra',
                        content: `Algebra involves the study of mathematical symbols and the rules for manipulating these symbols.

**Key Concepts:**

- **Variables and Expressions:** Using symbols to represent numbers.
- **Equations and Inequalities:** Solving for unknowns.
- **Functions:** Relationships between variables.
- **Polynomials:** Expressions with multiple terms.

**Example Problem:**

Solve for x: 2x + 5 = 15.

**Solution:**

1. Subtract 5 from both sides: 2x = 10.
2. Divide both sides by 2: x = 5.

**Activities:**

- **Equation Solving:** Practice problems with linear equations.
- **Graphing Functions:** Plotting functions on coordinate axes.`,
                    },
                    {
                        title: 'Geometry',
                        content: `Geometry is concerned with the properties and relations of points, lines, surfaces, and solids.

**Key Concepts:**

- **Angles and Lines:** Types of angles, parallel and perpendicular lines.
- **Triangles and Polygons:** Properties and classifications.
- **Circles:** Understanding radius, diameter, circumference, and area.
- **Solid Geometry:** Volumes and surface areas of 3D shapes.

**Example Concept:**

The sum of the interior angles of a triangle is 180 degrees.

**Activities:**

- **Shape Construction:** Using a compass and ruler to construct geometric figures.
- **Area Calculation:** Finding areas of various shapes.`,
                    },
                    {
                        title: 'Trigonometry',
                        content: `Trigonometry deals with the relationships between the sides and angles of triangles.

**Key Concepts:**

- **Sine, Cosine, and Tangent:** Ratios in right-angled triangles.
- **Unit Circle:** Understanding angles and radians.
- **Trigonometric Identities:** Fundamental formulas.

**Example Problem:**

Calculate the sine of a 30-degree angle.

**Solution:**

sin(30°) = 0.5.

**Activities:**

- **Angle Measurement:** Converting between degrees and radians.
- **Trigonometric Equations:** Solving for unknown sides or angles.`,
                    },
                    {
                        title: 'Calculus',
                        content: `Calculus is the mathematical study of continuous change.

**Key Concepts:**

- **Limits:** Understanding the behavior of functions as they approach a point.
- **Derivatives:** Rates of change and slopes of curves.
- **Integrals:** Area under curves and accumulation functions.

**Example Concept:**

The derivative of f(x) = x² is f'(x) = 2x.

**Activities:**

- **Derivative Calculations:** Finding derivatives of basic functions.
- **Integration Practice:** Calculating definite and indefinite integrals.`,
                    },
                ],
            },
            {
                title: 'English Language',
                description: 'A comprehensive course on English grammar, literature, and composition.',
                topics: [
                    {
                        title: 'Grammar',
                        content: `Grammar is the set of structural rules governing the composition of clauses, phrases, and words.

**Key Concepts:**

- **Parts of Speech:** Nouns, verbs, adjectives, adverbs, pronouns, prepositions, conjunctions, interjections.
- **Sentence Structure:** Subject, predicate, objects, and modifiers.
- **Tenses:** Past, present, future, and their perfect and continuous forms.
- **Punctuation:** Proper use of commas, periods, semicolons, colons, quotation marks, and apostrophes.

**Activities:**

- **Sentence Correction:** Identifying and correcting grammatical errors.
- **Punctuation Practice:** Adding correct punctuation to unpunctuated text.`,
                    },
                    {
                        title: 'Vocabulary Development',
                        content: `Enhancing word knowledge and usage.

**Strategies:**

- **Reading Widely:** Exposure to new words through diverse reading materials.
- **Using Context Clues:** Determining meaning from surrounding text.
- **Word Roots and Affixes:** Understanding prefixes, suffixes, and root words.
- **Synonyms and Antonyms:** Expanding vocabulary range.

**Activities:**

- **Flashcards:** Creating flashcards for new words.
- **Word Games:** Engaging in activities like crosswords and word searches.`,
                    },
                    {
                        title: 'Writing Skills',
                        content: `Improving the ability to express ideas in written form.

**Key Concepts:**

- **Essay Writing:** Structure of introduction, body paragraphs, and conclusion.
- **Creative Writing:** Crafting stories, poems, and narratives.
- **Editing and Proofreading:** Reviewing for grammar, style, and clarity.

**Activities:**

- **Writing Prompts:** Regular writing exercises on various topics.
- **Peer Review:** Sharing work with classmates for feedback.`,
                    },
                    {
                        title: 'Literature',
                        content: `Study of written works, especially those considered of superior or lasting artistic merit.

**Genres:**

- **Poetry:** Expressive writing in verse, including forms like sonnets and haikus.
- **Prose:** Ordinary written language, including novels and short stories.
- **Drama:** Plays intended for performance on stage.

**Analysis:**

- **Themes:** Central ideas or messages in a work.
- **Characters:** Development, motivations, and relationships.
- **Plot Structure:** Exposition, rising action, climax, falling action, resolution.

**Activities:**

- **Literary Analysis Essays:** Writing essays on themes and characters.
- **Group Discussions:** Exploring interpretations of texts.`,
                    },
                ],
            },
            {
                title: 'Science',
                description: 'An exploration of biology, chemistry, physics, and environmental science.',
                topics: [
                    {
                        title: 'Biology',
                        content: `Biology is the study of living organisms.

**Key Concepts:**

- **Cell Structure and Function:** Understanding organelles like the nucleus, mitochondria, and chloroplasts.
- **Genetics:** Inheritance patterns, DNA structure, and gene expression.
- **Evolution:** Natural selection and adaptation.
- **Ecology:** Interactions between organisms and their environment.

**Activities:**

- **Microscope Lab:** Observing cells under a microscope.
- **Genetic Problems:** Solving Punnett squares.`,
                    },
                    {
                        title: 'Chemistry',
                        content: `Chemistry involves the study of matter and its interactions.

**Key Concepts:**

- **Atomic Structure:** Understanding protons, neutrons, electrons, and electron configuration.
- **Periodic Table:** Elements, groups, and periods.
- **Chemical Bonds:** Ionic, covalent, and metallic bonds.
- **Chemical Reactions:** Balancing equations, reaction types.

**Activities:**

- **Lab Experiments:** Conducting reactions and observing outcomes.
- **Mole Calculations:** Converting between moles, mass, and particles.`,
                    },
                    {
                        title: 'Physics',
                        content: `Physics is the study of matter, energy, and the fundamental forces.

**Key Concepts:**

- **Newton's Laws of Motion:** Inertia, acceleration, action-reaction.
- **Energy and Work:** Kinetic and potential energy, conservation of energy.
- **Waves and Optics:** Properties of waves, light behavior.
- **Electricity and Magnetism:** Circuits, electromagnetic fields.

**Activities:**

- **Motion Experiments:** Using carts and tracks to study kinematics.
- **Circuit Building:** Creating simple electrical circuits.`,
                    },
                    {
                        title: 'Environmental Science',
                        content: `Environmental science explores the interactions between the physical, chemical, and biological components of the environment.

**Key Concepts:**

- **Ecosystems and Biomes:** Understanding different ecological regions.
- **Sustainability:** Renewable resources and conservation efforts.
- **Pollution and Waste Management:** Effects on ecosystems and human health.
- **Climate Change:** Causes, effects, and mitigation strategies.

**Activities:**

- **Field Studies:** Observing local ecosystems.
- **Project Work:** Developing environmental impact assessments.`,
                    },
                ],
            },
            {
                title: 'Social Studies',
                description: 'Study of history, geography, civics, and current affairs.',
                topics: [
                    {
                        title: 'History',
                        content: `Exploration of past events and their impact on the present.

**Key Periods:**

- **Ancient Civilizations:** Mesopotamia, Egypt, Indus Valley.
- **Middle Ages:** Feudalism, the Crusades, the Black Plague.
- **Modern History:** Renaissance, Industrial Revolution, World Wars.

**Skills:**

- **Analyzing Primary Sources:** Interpreting historical documents.
- **Cause and Effect:** Understanding how events influence one another.

**Activities:**

- **Timeline Creation:** Mapping significant events.
- **Research Projects:** Investigating historical figures.`,
                    },
                    {
                        title: 'Geography',
                        content: `Study of Earth's landscapes, environments, and the relationships between people and their environments.

**Key Concepts:**

- **Physical Geography:** Mountains, rivers, climate zones.
- **Human Geography:** Population distribution, cultures, economies.
- **Geospatial Technologies:** GIS, remote sensing.

**Activities:**

- **Map Reading Exercises:** Using coordinates and scales.
- **Cultural Studies:** Exploring traditions from around the world.`,
                    },
                    {
                        title: 'Civics',
                        content: `Understanding the rights and responsibilities of citizens.

**Key Topics:**

- **Forms of Government:** Democracy, authoritarianism, monarchy.
- **Constitutional Principles:** Rights, freedoms, and the justice system.
- **Civic Duties:** Voting, obeying laws, jury service.

**Activities:**

- **Mock Elections:** Simulating the electoral process.
- **Debates:** Discussing contemporary civic issues.`,
                    },
                    {
                        title: 'Current Affairs',
                        content: `Staying informed about local, national, and global events.

**Strategies:**

- **Media Literacy:** Evaluating the credibility of sources.
- **Critical Thinking:** Analyzing and forming opinions on issues.
- **Global Awareness:** Understanding international relations.

**Activities:**

- **News Summaries:** Presenting recent news stories.
- **Panel Discussions:** Engaging in dialogues about pressing topics.`,
                    },
                ],
            },
            {
                title: 'Religious Education',
                description: 'Understanding various religious beliefs and moral education.',
                topics: [
                    {
                        title: 'World Religions',
                        content: `An overview of major world religions.

**Key Religions:**

- **Christianity:** Beliefs, practices, and history.
- **Islam:** Five Pillars, Quran, cultural impact.
- **Hinduism:** Deities, karma, reincarnation.
- **Buddhism:** Four Noble Truths, Eightfold Path.
- **Judaism:** Torah, traditions, festivals.

**Activities:**

- **Comparative Studies:** Identifying similarities and differences.
- **Cultural Exploration:** Understanding religious festivals.`,
                    },
                    {
                        title: 'Ethics and Morality',
                        content: `Exploring concepts of right and wrong behavior.

**Key Concepts:**

- **Moral Philosophy:** Virtue ethics, utilitarianism, deontology.
- **Ethical Dilemmas:** Analyzing complex situations.
- **Personal Values:** Reflecting on one's own beliefs.

**Activities:**

- **Case Studies:** Debating ethical scenarios.
- **Reflection Essays:** Writing about personal moral choices.`,
                    },
                ],
            },
            {
                title: 'Physical Education',
                description: 'Physical activities promoting fitness and health.',
                topics: [
                    {
                        title: 'Fitness and Wellness',
                        content: `Understanding the importance of physical health.

**Key Concepts:**

- **Exercise Benefits:** Physical, mental, and emotional.
- **Nutrition:** Balanced diets, essential nutrients.
- **Personal Fitness Plans:** Setting and achieving fitness goals.

**Activities:**

- **Workout Sessions:** Cardiovascular and strength training exercises.
- **Fitness Tracking:** Monitoring progress over time.`,
                    },
                    {
                        title: 'Team Sports',
                        content: `Engaging in sports that require teamwork.

**Sports Covered:**

- **Soccer:** Rules, techniques, teamwork strategies.
- **Basketball:** Dribbling, shooting, defensive plays.
- **Volleyball:** Serving, spiking, setting.

**Activities:**

- **Practice Drills:** Skill development exercises.
- **Matches:** Organized games to apply skills.`,
                    },
                ],
            },
            {
                title: 'Art and Craft',
                description: 'Development of artistic skills and creativity through various art forms.',
                topics: [
                    {
                        title: 'Drawing and Painting',
                        content: `Exploring visual arts through different mediums.

**Key Concepts:**

- **Elements of Art:** Line, shape, color, texture, space.
- **Techniques:** Shading, perspective, color mixing.
- **Mediums:** Pencil, charcoal, watercolor, acrylics.

**Activities:**

- **Still Life Drawing:** Observational sketching.
- **Landscape Painting:** Creating scenes from nature.`,
                    },
                    {
                        title: 'Crafts',
                        content: `Creating functional and decorative objects by hand.

**Key Areas:**

- **Paper Crafts:** Origami, papercutting, scrapbooking.
- **Textile Arts:** Weaving, knitting, embroidery.
- **Recycled Materials:** Upcycling items into art.

**Activities:**

- **Project Creation:** Making items like greeting cards or bracelets.
- **Exhibitions:** Displaying work in a class gallery.`,
                    },
                ],
            },
            {
                title: 'Music',
                description: 'Introduction to music theory, instruments, and performance.',
                topics: [
                    {
                        title: 'Music Theory',
                        content: `Understanding the fundamentals of music.

**Key Concepts:**

- **Notation:** Reading sheet music, symbols.
- **Rhythm and Meter:** Beats, time signatures.
- **Scales and Keys:** Major and minor scales.

**Activities:**

- **Ear Training:** Identifying pitches and intervals.
- **Composition:** Writing simple melodies.`,
                    },
                    {
                        title: 'Instruments and Performance',
                        content: `Learning about different musical instruments and how to play them.

**Instruments Covered:**

- **Piano:** Basic chords and scales.
- **Guitar:** Strumming patterns, chord progressions.
- **Percussion:** Keeping rhythm with drums.

**Activities:**

- **Practice Sessions:** Hands-on playing experience.
- **Group Performances:** Playing together as an ensemble.`,
                    },
                ],
            },
            {
                title: 'Home Science',
                description: 'Learning about nutrition, family health, and home management.',
                topics: [
                    {
                        title: 'Nutrition and Diet',
                        content: `Understanding the role of food in health.

**Key Concepts:**

- **Food Groups:** Carbohydrates, proteins, fats, vitamins, minerals.
- **Balanced Diets:** Planning meals that meet nutritional needs.
- **Food Safety:** Proper handling and storage.

**Activities:**

- **Meal Planning:** Creating healthy menus.
- **Cooking Classes:** Preparing simple dishes.`,
                    },
                    {
                        title: 'Home Management',
                        content: `Skills for efficiently running a household.

**Key Topics:**

- **Budgeting:** Managing finances, saving money.
- **Time Management:** Scheduling tasks and activities.
- **Cleaning and Organization:** Maintaining a tidy living space.

**Activities:**

- **Project Management:** Planning a household event.
- **DIY Projects:** Creating home decor items.`,
                    },
                ],
            },
        ];

        // Insert courses into the database
        await Course.insertMany(courses);

        console.log('Courses with topics inserted successfully');
        process.exit(0);
    } catch (error) {
        console.error('Error inserting course data:', error);
        process.exit(1);
    }
};

insertCourseData();
