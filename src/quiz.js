const questions = [
    {
        questionText: 'What is the capital of France?',
        answerOptions: [
            { answerText: 'New York', isCorrect: false },
            { answerText: 'London', isCorrect: false },
            { answerText: 'Paris', isCorrect: true },
            { answerText: 'Dublin', isCorrect: false },
        ],
    },
    {
        questionText: 'Who is CEO of Tesla?',
        answerOptions: [
            { answerText: 'Jeff Bezos', isCorrect: false },
            { answerText: 'Elon Musk', isCorrect: true },
            { answerText: 'Bill Gates', isCorrect: false },
            { answerText: 'Tony Stark', isCorrect: false },
        ],
    },
    {
        questionText: 'The iPhone was created by which company?',
        answerOptions: [
            { answerText: 'Apple', isCorrect: true },
            { answerText: 'Intel', isCorrect: false },
            { answerText: 'Amazon', isCorrect: false },
            { answerText: 'Microsoft', isCorrect: false },
        ],
    },
    {
        questionText: 'How many Harry Potter books are there?',
        answerOptions: [
            { answerText: '1', isCorrect: false },
            { answerText: '4', isCorrect: false },
            { answerText: '6', isCorrect: false },
            { answerText: '7', isCorrect: true },
        ],
    },
    {
        questionText: 'In which continent are Chile, Argentina and Brazil?',
        answerOptions: [
            { answerText: 'North America', isCorrect: false },
            { answerText: 'South America', isCorrect: true },
            { answerText: 'Europe', isCorrect: false },
            { answerText: 'Australasia', isCorrect: false },
        ],
    },
    {
        questionText: 'What measurement scale is used to determine wind speed?',
        answerOptions: [
            { answerText: 'Beaufort scale', isCorrect: true },
            { answerText: 'Richter scale', isCorrect: false },
            { answerText: 'Synoptic scale', isCorrect: false },
            { answerText: 'Gusting scale', isCorrect: false },
        ],
    },
    {
        questionText: 'The human body is made up of approximately how much water?',
        answerOptions: [
            { answerText: '40%', isCorrect: false },
            { answerText: '50%', isCorrect: false },
            { answerText: '60%', isCorrect: true },
            { answerText: '70%', isCorrect: false },
        ],
    },
    {
        questionText: 'What is the worlds fastest species of bird?',
        answerOptions: [
            { answerText: 'Golden eagle', isCorrect: false },
            { answerText: 'Peregrine falcon', isCorrect: true },
            { answerText: 'Frigatebird', isCorrect: false },
            { answerText: 'Penguin', isCorrect: false },
        ],
    },
    {
        questionText: 'Which artist famously cut off his own ear?',
        answerOptions: [
            { answerText: 'Claude Monet', isCorrect: false },
            { answerText: 'Salvador Dali', isCorrect: false },
            { answerText: 'Vincent Van Gogh', isCorrect: true },
            { answerText: 'Pablo Picasso', isCorrect: false },
        ],
    },
    {
        questionText: 'Which female holds the most Wimbledon titles?',
        answerOptions: [
            { answerText: 'Serena Williams', isCorrect: false },
            { answerText: 'Venus Williams', isCorrect: false },
            { answerText: 'Martina Navratilova', isCorrect: true },
            { answerText: 'Martina Hingis', isCorrect: false },
        ],
    },
    // {
    //     questionText: 'In which city were the 1992 Summer Olympics held?',
    //     answerOptions: [
    //         { answerText: 'Atlanta', isCorrect: false },
    //         { answerText: 'Barcelona', isCorrect: true },
    //         { answerText: 'Sydney', isCorrect: false },
    //         { answerText: 'Seoul', isCorrect: false },
    //     ],
    // },
    // {
    //     questionText: 'Which composer scored 2000s classics such as Gladiator?',
    //     answerOptions: [
    //         { answerText: 'John Williams', isCorrect: false },
    //         { answerText: 'Hans Zimmer', isCorrect: true },
    //         { answerText: 'Danny Elfman', isCorrect: false },
    //         { answerText: 'James Horner', isCorrect: false },
    //     ],
    // },
    // {
    //     questionText: 'Who was elected President of the United States in 2017?',
    //     answerOptions: [
    //         { answerText: 'Donald Trump', isCorrect: true },
    //         { answerText: 'Barack Obama', isCorrect: false },
    //         { answerText: 'George Bush', isCorrect: false },
    //         { answerText: 'James Horner', isCorrect: false },
    //     ],
    // },
    // {
    //     questionText: 'When did Jonas Brothers make their comeback to the music world?',
    //     answerOptions: [
    //         { answerText: '2011', isCorrect: false },
    //         { answerText: '2015', isCorrect: false },
    //         { answerText: '2017', isCorrect: false },
    //         { answerText: '2019', isCorrect: true },
    //     ],
    // },
    // {
    //     questionText: 'What is the national language of Canada?',
    //     answerOptions: [
    //         { answerText: 'English', isCorrect: false },
    //         { answerText: 'Dutch', isCorrect: true },
    //         { answerText: 'Hindi', isCorrect: false },
    //         { answerText: 'French', isCorrect: false },
    //     ],
    // },
    // {
    //     questionText: 'A la Crecy is a French dish made of what?',
    //     answerOptions: [
    //         { answerText: 'Carrots', isCorrect: true },
    //         { answerText: 'Apples', isCorrect: false },
    //         { answerText: 'Banana', isCorrect: false },
    //         { answerText: 'Potatoes', isCorrect: false },
    //     ],
    // },
    // {
    //     questionText: 'Which core ingredient is important to cook a savory dish?',
    //     answerOptions: [
    //         { answerText: 'Salt', isCorrect: true },
    //         { answerText: 'Apples', isCorrect: false },
    //         { answerText: 'Butter', isCorrect: false },
    //         { answerText: 'Sugar', isCorrect: false },
    //     ],
    // },
    // {
    //     questionText: 'Brazil is the biggest producer of?',
    //     answerOptions: [
    //         { answerText: 'Oil', isCorrect: false },
    //         { answerText: 'Rice', isCorrect: false },
    //         { answerText: 'Coffee', isCorrect: true },
    //         { answerText: 'Sugar', isCorrect: false },
    //     ],
    // },
    // {
    //     questionText: 'Saudi Arabia is the biggest producer of?',
    //     answerOptions: [
    //         { answerText: 'Coal', isCorrect: false },
    //         { answerText: 'Rice', isCorrect: false },
    //         { answerText: 'Sugar', isCorrect: false },
    //         { answerText: 'Oil', isCorrect: true },
    //     ],
    // },
    // {
    //     questionText: 'Which country is infamously known as Arch Rival of Pakistan?',
    //     answerOptions: [
    //         { answerText: 'America', isCorrect: false },
    //         { answerText: 'India', isCorrect: true },
    //         { answerText: 'FGS', isCorrect: false },
    //         { answerText: 'Afghanistan', isCorrect: false },
    //     ],
    // },
    // {
    //     questionText: 'What is actually electricity?',
    //     answerOptions: [
    //         { answerText: 'A flow of atoms', isCorrect: false },
    //         { answerText: 'A flow of air', isCorrect: false },
    //         { answerText: 'Afghanistan', isCorrect: false },
    //         { answerText: 'A flow of water', isCorrect: true },
    //     ],
    // },
    // {
    //     questionText: 'Which of the following is not an international organisation?',
    //     answerOptions: [
    //         { answerText: 'NATO', isCorrect: false },
    //         { answerText: 'FBI', isCorrect: true },
    //         { answerText: 'ASEAN', isCorrect: false },
    //         { answerText: 'FIFA', isCorrect: false },
    //     ],
    // },
    // {
    //     questionText: 'What is the speed of sound?',
    //     answerOptions: [
    //         { answerText: '120 km/h', isCorrect: false },
    //         { answerText: '400 km/h', isCorrect: false },
    //         { answerText: '1,200 km/h', isCorrect: true },
    //         { answerText: '700 km/h', isCorrect: false },
    //     ],
    // },
    // {
    //     questionText: 'What do we call a newly hatched butterfly?',
    //     answerOptions: [
    //         { answerText: 'A moth', isCorrect: false },
    //         { answerText: 'A butter', isCorrect: false },
    //         { answerText: 'A caterpillar', isCorrect: true },
    //         { answerText: 'A chrysalis', isCorrect: false },
    //     ],
    // },
    // {
    //     questionText: 'Which is the easiest way to tell the age of many trees?',
    //     answerOptions: [
    //         { answerText: 'To measure the width of the tree', isCorrect: false },
    //         { answerText: 'To count the number of leaves', isCorrect: false },
    //         { answerText: 'To count the rings on the trunk', isCorrect: true },
    //         { answerText: 'To measure the height of the tree', isCorrect: false },
    //     ],
    // },
    // {
    //     questionText: 'In total, how many novels were written by the Bronte sisters?',
    //     answerOptions: [
    //         { answerText: '4', isCorrect: false },
    //         { answerText: '5', isCorrect: false },
    //         { answerText: '6', isCorrect: false },
    //         { answerText: '7', isCorrect: true },
    //     ],
    // },
    // {
    //     questionText: 'Which did Viking people use as money?',
    //     answerOptions: [
    //         { answerText: 'Rune stones', isCorrect: false },
    //         { answerText: 'Seal skins', isCorrect: false },
    //         { answerText: 'Wool', isCorrect: false },
    //         { answerText: 'Jewellery', isCorrect: true },
    //     ],
    // }
]
export default questions;