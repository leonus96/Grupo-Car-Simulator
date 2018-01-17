"use strict";

class CategoriesController{
    getAi(req, res, next){
        let data = require('../data/generales');
        let array = getList(100);
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
        let daata_aiia = require('../data/aiia');
        let array_g = getList(100);
        let array_aiia = getList(24);
        let newRandom_g = randomFromListGenerator(array_g);
        let newRandom_aiia = randomFromListGenerator(array_aiia);
        let questions = {
            questions: []
        };
        for(let i = 0; i < 20; i++)
            questions.questions.push(data_g.questions[newRandom_g()])
        for(let i = 0; i < 20; i++)
            questions.questions.push(daata_aiia.questions[newRandom_aiia()])
        console.log(questions.questions.length);
        res.render('questions', {
            title: "Simulador de examen: Categoría AIIa",
            questions: questions.questions
        });
    }

    getAiib(req, res, next){
        let data_g = require('../data/generales');
        let data_aiib = require('../data/aiib');
        let array_g = getList(100);
        let array_aiib = getList(70);
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
        let data = require('../data/ai/aiiia');
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
            title: "Simulador de examen: Categoría AIIIa",
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
        let data = require('../data/ai/aiiic');
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
            title: "Simulador de examen: Categoría AIIIc",
            questions: questions.questions
        });
    }

    check(req, res, next){
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
                reviewed: JSON.parse(reviewed)
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