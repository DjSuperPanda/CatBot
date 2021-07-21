module.exports = {
    "name": "oqtd",
    execute(bot, message, args) {
        const {join} = require('path') // "fs" doesn't like relative paths, "join" merges two paths into a full path
        const {readFileSync} = require('fs') // method for reading the file
        function getQuestion(category) {
            const allQuestions = JSON.parse( readFileSync( path.join(__dirname, "../commands/oqtd.js"), 'utf8') ) // read the questions file and parse into a JSON object
            return allQuestions[category] // returns the array of questions if the category exists, otherwise returns undefined
        }
        
        {
            "tech" [
                "question 1",
                "question 2"
            ],
            "food" [
                "question 1",
                "question 2"
            ]
      
        }
    }
};