const questions = [
    {
        questionText: 'What is the capital of France?',
        answerOptions: [
            { answerText: 'New York', isCorrect: 0 },
            { answerText: 'London', isCorrect: 0 },
            { answerText: 'Paris', isCorrect: 1 },
            { answerText: 'Dublin', isCorrect: 0 },
        ],
    },
    {
        questionText: 'Who is CEO of Tesla?',
        answerOptions: [
            { answerText: 'Jeff Bezos', isCorrect: 0 },
            { answerText: 'Elon Musk', isCorrect: 1 },
            { answerText: 'Bill Gates', isCorrect: 0 },
            { answerText: 'Tony Stark', isCorrect: 0 },
        ],
    },
    {
        questionText: 'The iPhone was created by which company?',
        answerOptions: [
            { answerText: 'Apple', isCorrect: 1 },
            { answerText: 'Intel', isCorrect: 0 },
            { answerText: 'Amazon', isCorrect: 0 },
            { answerText: 'Microsoft', isCorrect: 0 },
        ],
    },
    {
        questionText: 'How many Harry Potter books are there?',
        answerOptions: [
            { answerText: '1', isCorrect: 0 },
            { answerText: '4', isCorrect: 0 },
            { answerText: '6', isCorrect: 0 },
            { answerText: '7', isCorrect: 1 },
        ],
    },
    {
        questionText: 'In which continent are Chile, Argentina and Brazil?',
        answerOptions: [
            { answerText: 'North America', isCorrect: 0 },
            { answerText: 'South America', isCorrect: 1 },
            { answerText: 'Europe', isCorrect: 0 },
            { answerText: 'Australasia', isCorrect: 0 },
        ],
    },
    {
        questionText: 'What measurement scale is used to determine wind speed?',
        answerOptions: [
            { answerText: 'Beaufort scale', isCorrect: 1 },
            { answerText: 'Richter scale', isCorrect: 0 },
            { answerText: 'Synoptic scale', isCorrect: 0 },
            { answerText: 'Gusting scale', isCorrect: 0 },
        ],
    },
    {
        questionText: 'The human body is made up of approximately how much water?',
        answerOptions: [
            { answerText: '40%', isCorrect: 0 },
            { answerText: '50%', isCorrect: 0 },
            { answerText: '60%', isCorrect: 1 },
            { answerText: '70%', isCorrect: 0 },
        ],
    },
    {
        questionText: 'What is the worlds fastest species of bird?',
        answerOptions: [
            { answerText: 'Golden eagle', isCorrect: 0 },
            { answerText: 'Peregrine falcon', isCorrect: 1 },
            { answerText: 'Frigatebird', isCorrect: 0 },
            { answerText: 'Penguin', isCorrect: 0 },
        ],
    },
    {
        questionText: 'Which artist famously cut off his own ear?',
        answerOptions: [
            { answerText: 'Claude Monet', isCorrect: 0 },
            { answerText: 'Salvador Dali', isCorrect: 0 },
            { answerText: 'Vincent Van Gogh', isCorrect: 1 },
            { answerText: 'Pablo Picasso', isCorrect: 0 },
        ],
    },
    {
        questionText: 'Which female holds the most Wimbledon titles?',
        answerOptions: [
            { answerText: 'Serena Williams', isCorrect: 0 },
            { answerText: 'Venus Williams', isCorrect: 0 },
            { answerText: 'Martina Navratilova', isCorrect: 1 },
            { answerText: 'Martina Hingis', isCorrect: 0 },
        ],
    },
    // {
    //     questionText: 'In which city were the 1992 Summer Olympics held?',
    //     answerOptions: [
    //         { answerText: 'Atlanta', isCorrect: 0 },
    //         { answerText: 'Barcelona', isCorrect: 1 },
    //         { answerText: 'Sydney', isCorrect: 0 },
    //         { answerText: 'Seoul', isCorrect: 0 },
    //     ],
    // },
    // {
    //     questionText: 'Which composer scored 2000s classics such as Gladiator?',
    //     answerOptions: [
    //         { answerText: 'John Williams', isCorrect: 0 },
    //         { answerText: 'Hans Zimmer', isCorrect: 1 },
    //         { answerText: 'Danny Elfman', isCorrect: 0 },
    //         { answerText: 'James Horner', isCorrect: 0 },
    //     ],
    // },
    // {
    //     questionText: 'Who was elected President of the United States in 2017?',
    //     answerOptions: [
    //         { answerText: 'Donald Trump', isCorrect: 1 },
    //         { answerText: 'Barack Obama', isCorrect: 0 },
    //         { answerText: 'George Bush', isCorrect: 0 },
    //         { answerText: 'James Horner', isCorrect: 0 },
    //     ],
    // },
    // {
    //     questionText: 'When did Jonas Brothers make their comeback to the music world?',
    //     answerOptions: [
    //         { answerText: '2011', isCorrect: 0 },
    //         { answerText: '2015', isCorrect: 0 },
    //         { answerText: '2017', isCorrect: 0 },
    //         { answerText: '2019', isCorrect: 1 },
    //     ],
    // },
    // {
    //     questionText: 'What is the national language of Canada?',
    //     answerOptions: [
    //         { answerText: 'English', isCorrect: 0 },
    //         { answerText: 'Dutch', isCorrect: 1 },
    //         { answerText: 'Hindi', isCorrect: 0 },
    //         { answerText: 'French', isCorrect: 0 },
    //     ],
    // },
    // {
    //     questionText: 'A la Crecy is a French dish made of what?',
    //     answerOptions: [
    //         { answerText: 'Carrots', isCorrect: 1 },
    //         { answerText: 'Apples', isCorrect: 0 },
    //         { answerText: 'Banana', isCorrect: 0 },
    //         { answerText: 'Potatoes', isCorrect: 0 },
    //     ],
    // },
    // {
    //     questionText: 'Which core ingredient is important to cook a savory dish?',
    //     answerOptions: [
    //         { answerText: 'Salt', isCorrect: 1 },
    //         { answerText: 'Apples', isCorrect: 0 },
    //         { answerText: 'Butter', isCorrect: 0 },
    //         { answerText: 'Sugar', isCorrect: 0 },
    //     ],
    // },
    // {
    //     questionText: 'Brazil is the biggest producer of?',
    //     answerOptions: [
    //         { answerText: 'Oil', isCorrect: 0 },
    //         { answerText: 'Rice', isCorrect: 0 },
    //         { answerText: 'Coffee', isCorrect: 1 },
    //         { answerText: 'Sugar', isCorrect: 0 },
    //     ],
    // },
    // {
    //     questionText: 'Saudi Arabia is the biggest producer of?',
    //     answerOptions: [
    //         { answerText: 'Coal', isCorrect: 0 },
    //         { answerText: 'Rice', isCorrect: 0 },
    //         { answerText: 'Sugar', isCorrect: 0 },
    //         { answerText: 'Oil', isCorrect: 1 },
    //     ],
    // },
    // {
    //     questionText: 'Which country is infamously known as Arch Rival of Pakistan?',
    //     answerOptions: [
    //         { answerText: 'America', isCorrect: 0 },
    //         { answerText: 'India', isCorrect: 1 },
    //         { answerText: 'FGS', isCorrect: 0 },
    //         { answerText: 'Afghanistan', isCorrect: 0 },
    //     ],
    // },
    // {
    //     questionText: 'What is actually electricity?',
    //     answerOptions: [
    //         { answerText: 'A flow of atoms', isCorrect: 0 },
    //         { answerText: 'A flow of air', isCorrect: 0 },
    //         { answerText: 'Afghanistan', isCorrect: 0 },
    //         { answerText: 'A flow of water', isCorrect: 1 },
    //     ],
    // },
    // {
    //     questionText: 'Which of the following is not an international organisation?',
    //     answerOptions: [
    //         { answerText: 'NATO', isCorrect: 0 },
    //         { answerText: 'FBI', isCorrect: 1 },
    //         { answerText: 'ASEAN', isCorrect: 0 },
    //         { answerText: 'FIFA', isCorrect: 0 },
    //     ],
    // },
    // {
    //     questionText: 'What is the speed of sound?',
    //     answerOptions: [
    //         { answerText: '120 km/h', isCorrect: 0 },
    //         { answerText: '400 km/h', isCorrect: 0 },
    //         { answerText: '1,200 km/h', isCorrect: 1 },
    //         { answerText: '700 km/h', isCorrect: 0 },
    //     ],
    // },
    // {
    //     questionText: 'What do we call a newly hatched butterfly?',
    //     answerOptions: [
    //         { answerText: 'A moth', isCorrect: 0 },
    //         { answerText: 'A butter', isCorrect: 0 },
    //         { answerText: 'A caterpillar', isCorrect: 1 },
    //         { answerText: 'A chrysalis', isCorrect: 0 },
    //     ],
    // },
    // {
    //     questionText: 'Which is the easiest way to tell the age of many trees?',
    //     answerOptions: [
    //         { answerText: 'To measure the width of the tree', isCorrect: 0 },
    //         { answerText: 'To count the number of leaves', isCorrect: 0 },
    //         { answerText: 'To count the rings on the trunk', isCorrect: 1 },
    //         { answerText: 'To measure the height of the tree', isCorrect: 0 },
    //     ],
    // },
    // {
    //     questionText: 'In total, how many novels were written by the Bronte sisters?',
    //     answerOptions: [
    //         { answerText: '4', isCorrect: 0 },
    //         { answerText: '5', isCorrect: 0 },
    //         { answerText: '6', isCorrect: 0 },
    //         { answerText: '7', isCorrect: 1 },
    //     ],
    // },
    // {
    //     questionText: 'Which did Viking people use as money?',
    //     answerOptions: [
    //         { answerText: 'Rune stones', isCorrect: 0 },
    //         { answerText: 'Seal skins', isCorrect: 0 },
    //         { answerText: 'Wool', isCorrect: 0 },
    //         { answerText: 'Jewellery', isCorrect: 1 },
    //     ],
    // }
]
export default questions;