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
        res.render('questions', {
            title: "Simulador de examen: Categoría AIIb",
            questions: questions.questions
        });
    }

    getAiiib(req, res, next){
        let data_g = require('../data/generales');
        let data_aiiib = require('../data/aiiib');
        let array_g = getList(data_g.questions.length);
        let array_aiiib = getList(data_aiiib.questions.length);
        let newRandom_g = randomFromListGenerator(array_g);
        let newRandom_aiiib = randomFromListGenerator(array_aiiib);
        let questions = {
            questions: []
        };
        for(let i = 0; i < 20; i++)
            questions.questions.push(data_g.questions[newRandom_g()])
        for(let i = 0; i < 20; i++)
            questions.questions.push(data_aiiib.questions[newRandom_aiiib()])
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
        res.render('questions', {
            title: "Simulador de examen: Categoría AIIIc",
            questions: questions.questions
        });
    }

    getSignals(req, res, next){
        console.log("entré ");
        let data_sen = require('../data/señales');
        let array_sen = getList(data_sen.questions.length);
        let newRandom_g = randomFromListGenerator(array_sen);
        let questions = {
            questions: []
        };
        for(let i = 0; i < 40; i++)
            questions.questions.push(data_sen.questions[newRandom_g()])
        console.log(questions);
        res.render('questions', {
            title: "Simulador de examen: Señales",
            questions: questions.questions
        });
    }

    check(req, res, next){
        let questionData = req.body.questionData,
            responses = req.body.responses,
            rights = req.body.score,
            reviewed = req.body.reviewed,
            percentage = rights/40*100,
            incorrect = 40 - rights;
        //console.log(responses);
        res.render(
            'check',
            {
                rights: rights,
                incorrect: incorrect,
                percentage: percentage,
                reviewed: JSON.parse(reviewed),
                questionData: questionData,
                responses: responses
            }
        );
    }

    validate(req, res, next){
        let questionData = req.body.questionData;
        let check = req.body.check;
        let reviewed = req.body.reviewed;
        let responses = req.body.responses;

        res.render(
            'questions',
            {
                title: 'Corrección de preguntas',
                questions: JSON.parse(questionData),
                check: check,
                reviewed: reviewed,
                responses: responses

            }
        );
    }

    login(req, res, next){
        let password = req.body.password;
        let category = req.body.category.toString();
        const pass = require('../data/security/pass').pass.toString();

        console.log(category);

        if(password == pass){
            req.session.login = true;
            switch (category){
                case 'AI':
                    res.redirect('/simulador/ai');
                    break;
                case 'AIIa':
                    res.redirect('/simulador/aiia');
                    break;
                case 'AIIb':
                    res.redirect('/simulador/aiib');
                    break;
                case 'AIIIa':
                    res.redirect('/simulador/aiiia');
                    break;
                case 'AIIIb':
                    res.redirect('/simulador/aiiib');
                    break;
                case 'AIIIc':
                    res.redirect('/simulador/aiiic');
                    break;
                case 'Señales':
                    console.log("entré a señales");
                    res.redirect('/simulador/senales');
                    break;
            }
        }
        else {
            res.redirect('/simulador');
        }
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