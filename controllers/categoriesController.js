"use strict";

class CategoriesController{
    getAi(req, res, next){
        let data = require('../data/generales');
        let array = getList(data.questions.length);
        let newRandom = randomFromListGenerator(array);
        let questions = {
            questions: []
        };
        for(let i = 0; i < 40; i++){
            questions.questions.push(data.questions[newRandom()])
            //console.log(newRandom());
        }
        console.log(questions.questions[0]);

        res.render('questions', {
           title: "Simulador de examen: Categoría AI",
           questions: questions.questions
        });
    }

    getAiia(req, res, next){
        let data_g = require('../data/generales');
        let data_aiia = require('../data/aiia');
        let array_g = getList(data_g.questions.length);
        let array_aiia = getList(data_aiia.questions.length);
        let newRandom_g = randomFromListGenerator(array_g);
        let newRandom_aiia = randomFromListGenerator(array_aiia);
        let questions = {
            questions: []
        };
        for(let i = 0; i < 20; i++)
            questions.questions.push(data_g.questions[newRandom_g()])
        for(let i = 0; i < 20; i++)
            questions.questions.push(data_aiia.questions[newRandom_aiia()])
        console.log(questions.questions.length);
        res.render('questions', {
            title: "Simulador de examen: Categoría AIIa",
            questions: questions.questions
        });
    }

    getAiib(req, res, next){
        let data_g = require('../data/generales');
        let data_aiib = require('../data/aiib');
        let array_g = getList(data_g.questions.length);
        let array_aiib = getList(data_aiib.questions.length);
        let newRandom_g = randomFromListGenerator(array_g);
        let newRandom_aiib = randomFromListGenerator(array_aiib);
        let questions = {
            questions: []
        };
        for(let i = 0; i < 20; i++)
            questions.questions.push(data_g.questions[newRandom_g()])
        for(let i = 0; i < 20; i++)
            questions.questions.push(data_aiib.questions[newRandom_aiib()])
        console.log(questions.questions.length);
        res.render('questions', {
            title: "Simulador de examen: Categoría AIIb",
            questions: questions.questions
        });
    }

    getAiiia(req, res, next){
        let data_g = require('../data/generales');
        let data_aiiia = require('../data/aiiia');
        let array_g = getList(data_g.questions.length);
        let array_aiiia = getList(data_aiiia.questions.length);
        let newRandom_g = randomFromListGenerator(array_g);
        let newRandom_aiiia = randomFromListGenerator(array_aiiia);
        let questions = {
            questions: []
        };
        for(let i = 0; i < 20; i++)
            questions.questions.push(data_g.questions[newRandom_g()])
        for(let i = 0; i < 20; i++)
            questions.questions.push(data_aiiia.questions[newRandom_aiiia()])
        console.log(questions.questions.length);
        res.render('questions', {
            title: "Simulador de examen: Categoría AIIb",
            questions: questions.questions
        });
    }

    getAiiib(req, res, next){
        let data = require('../data/aiib');
        let array = getList(20);
        let newRandom = randomFromListGenerator(array);
        let questions = {
            questions: []
        };
        for(let i = 0; i < 10; i++){
            questions.questions.push(data.questions[newRandom()])
            //console.log(newRandom());
        }
        console.log(questions.questions[0]);

        res.render('questions', {
            title: "Simulador de examen: Categoría AIIIb",
            questions: questions.questions
        });
    }

    getAiiic(req, res, next){
        let data_g = require('../data/generales');
        let data_aiiia = require('../data/aiiic');
        let array_g = getList(data_g.questions.length);
        let array_aiiia = getList(data_aiiia.questions.length);
        let newRandom_g = randomFromListGenerator(array_g);
        let newRandom_aiiia = randomFromListGenerator(array_aiiia);
        let questions = {
            questions: []
        };
        for(let i = 0; i < 20; i++)
            questions.questions.push(data_g.questions[newRandom_g()])
        for(let i = 0; i < 20; i++)
            questions.questions.push(data_aiiia.questions[newRandom_aiiia()])
        console.log(questions.questions.length);
        res.render('questions', {
            title: "Simulador de examen: Categoría AIIb",
            questions: questions.questions
        });
    }

    check(req, res, next){
        let questionData = req.body.questionData;
        let rights = req.body.score;
        let reviewed = req.body.reviewed;
        let percentage = rights/40*100;
        let incorrect = 40 - rights;
        res.render(
            'check',
            {
                rights: rights,
                incorrect: incorrect,
                percentage: percentage,
                reviewed: JSON.parse(reviewed),
                questionData: questionData
            }
        );
    }

    validate(req, res, next){
        let questionData = req.body.questionData;
        let check = req.body.check;
        let reviewed = req.body.reviewed;

        console.log(reviewed);
        res.render(
            'questions',
            {
                title: 'Corrección de preguntas',
                questions: JSON.parse(questionData),
                check: check,
                reviewed: reviewed

            }
        );
    }
}

function randomFromListGenerator(list){
    var position = 0;

    for (var i=0, l=list.length; i<l; i++) {
        var random = Math.floor((Math.random() * l));
        var aux = list[i];
        list[i] = list[random];
        list[random] = aux;
    }

    return function () {
        return list[position++ % list.length];
    }
}

function getList(n){
    let list = [];
    for(let i = 0; i<n; i++){
        list.push(i);
    }
    return list;
}

module.exports = CategoriesController;