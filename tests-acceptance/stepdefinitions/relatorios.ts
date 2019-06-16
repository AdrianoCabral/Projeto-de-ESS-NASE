import { defineSupportCode } from 'cucumber';
import { browser, $, element, ElementArrayFinder, by } from 'protractor';
let chai = require('chai').use(require('chai-as-promised'));
let expect = chai.expect;

let sameDataf = ((elem, dataf) => elem.element(by.name('dflist')).getText().then(text => text === dataf));
let sameDatai = ((elem, datai) => elem.element(by.name('dilist')).getText().then(text => text === datai));
let sameLocal = ((elem, local) => elem.element(by.name('locallist')).getText().then(text => text === local));
let sameParticipante = ((elem, participantes) => elem.element(by.name('participanteslist')).getText().then(text => text === participantes));
let sameProfissional = ((elem, profissional) => elem.element(by.name('profissionallist')).getText().then(text => text === profissional));
let sameName = ((elem, name) => elem.element(by.name('namelist')).getText().then(text => text === name));
let sameEspec = ((elem, especialidade) => elem.element(by.name('especialidadelist')).getText().then(text => text === especialidade));
let sameAtend = ((elem, atendimentos) => elem.element(by.name('atendimentoslist')).getText().then(text => text === atendimentos));
let sameFaltas = ((elem, faltas) => elem.element(by.name('faltaslist')).getText().then(text => text === faltas));
let sameMale = ((elem, male) => elem.element(by.name('malelist')).getText().then(text => text === male));
let sameC1 = ((elem, c1) => elem.element(by.name('c1list')).getText().then(text => text === c1));
let sameC2 = ((elem, c2) => elem.element(by.name('c1list')).getText().then(text => text === c2));
let sameC3 = ((elem, c3) => elem.element(by.name('c1list')).getText().then(text => text === c3));
let sameC4 = ((elem, c4) => elem.element(by.name('c1list')).getText().then(text => text === c4));
let sameC5 = ((elem, c5) => elem.element(by.name('c1list')).getText().then(text => text === c5));

let pAND = ((p,q) => p.then(a => q.then(b => a && b)))

defineSupportCode(function ({ Given, When, Then}) {

    Given(/^eu estou na página de Relatórios$/, async () => {
        await browser.get("http://localhost:4200/");
        await expect(browser.getTitle()).to.eventually.equal('TaGui');
        await $("a[name='relatorios']").click();
    })

    Given(/^eu vejo o profissional "([^\"]*)"  especializado em "([^\"]*)"  na lista de profissionais$/, async (profissional_nome, especialidade) => {
        await $("input[name='namebox']").sendKeys(<string> profissional_nome);
        await $("input[name='especialidadebox']").sendKeys(<string> especialidade);
        await element(by.buttonText('Adicionar')).click();
        var allprofissionais : ElementArrayFinder = element.all(by.name('profissionallist'));
        await allprofissionais;
        allprofissionais.filter(elem => pAND(sameName(elem,profissional_nome),sameName(elem,especialidade))).then(elems => expect(Promise.resolve(elems.length)).to.eventually.equal(1));
    });

    Given(/^o relatório atual de “([^\"]*)” especializado em “([^\"]*) diz que ele realizou “([^\"]*) atendimentos, com “([^\"]*)” faltas,a porcentagem de pessoas do sexo Masculino atendida foi de “([^\"]*)”, a porcentagem de pessoas do sexo Feminino atendida foi de “([^\"]*)”, os 5 cursos mais atendidos tiveram participações de atendimento total respectivas “([^\"]*)”, “([^\"]*), “([^\"]*)”, “([^\"]*)”, “([^\"]*)”$/, 
    async (profissional_nome, especialidade, atendimentos, faltas, male, female, c1, c2 ,c3 ,c4 ,c5) => {
        await browser.get("http://localhost:4200/relatorios");
        await expect(browser.getTitle()).to.eventually.equal('TaGui');
        await $("a[name='dados']").click()
        var allprofissionais : ElementArrayFinder = element.all(by.name('relatoriolist'));
        await allprofissionais;
        allprofissionais.filter(elem => pAND(sameName(elem,profissional_nome),sameName(elem,especialidade))).then(elems => expect(Promise.resolve(elems.length)).to.eventually.equal(1));
        await $("input[name='atendimentosbox']").sendKeys(<string> atendimentos);
        await $("input[name='faltasbox']").sendKeys(<string> faltas);
        await $("input[name='maleboxbox']").sendKeys(<string> male);
        await $("input[name='femalebox']").sendKeys(<string> female);
        await $("input[name='c1box']").sendKeys(<string> c1);
        await $("input[name='c2box']").sendKeys(<string> c2);
        await $("input[name='c3box']").sendKeys(<string> c3);
        await $("input[name='c4box']").sendKeys(<string> c4);
        await $("input[name='c5box']").sendKeys(<string> c5);
        await browser.get("http://localhost:4200/dados");
        await expect(browser.getTitle()).to.eventually.equal('TaGui');
        await $("a[name='relatorios']").click()
    });

    When(/^eu seleciono a opção visualizar novo relatório” para “Paulo Ricardo" especializado em "Psicologia”$/,
    async () => {
        await element(by.buttonText('Visualizar')).click();    
    });

    Then(/^eu posso ver que o profissional “([^\"]*)” especializado em “([^\"]*) realizou “([^\"]*) atendimentos, com “([^\"]*)” faltas,a porcentagem de pessoas do sexo Masculino atendida foi de “([^\"]*)”, a porcentagem de pessoas do sexo Feminino atendida foi de “([^\"]*)”, os 5 cursos mais atendidos tiveram participações de atendimento total respectivas “([^\"]*)”, “([^\"]*), “([^\"]*)”, “([^\"]*)”, “([^\"]*)”$/, 
    async (profissional_nome, especialidade, atendimentos, faltas, male, female, c1, c2 ,c3 ,c4 ,c5) => {
        await browser.get("http://localhost:4200/relatorios");
        await expect(browser.getTitle()).to.eventually.equal('TaGui');
        await $("a[name='dados']").click()
        var allprofissionais : ElementArrayFinder = element.all(by.name('relatoriolist'));
        await allprofissionais;
        allprofissionais.filter(elem => pAND(sameName(elem,profissional_nome),sameName(elem,especialidade))).then(elems => expect(Promise.resolve(elems.length)).to.eventually.equal(1));
        allprofissionais.filter(elem => pAND(sameName(elem,profissional_nome),sameName(elem,atendimentos))).then(elems => expect(Promise.resolve(elems.length)).to.eventually.equal(1));
        allprofissionais.filter(elem => pAND(sameName(elem,profissional_nome),sameName(elem,faltas))).then(elems => expect(Promise.resolve(elems.length)).to.eventually.equal(1));
        allprofissionais.filter(elem => pAND(sameName(elem,profissional_nome),sameName(elem,male))).then(elems => expect(Promise.resolve(elems.length)).to.eventually.equal(1));
        allprofissionais.filter(elem => pAND(sameName(elem,profissional_nome),sameName(elem,female))).then(elems => expect(Promise.resolve(elems.length)).to.eventually.equal(1));
        allprofissionais.filter(elem => pAND(sameName(elem,profissional_nome),sameName(elem,c1))).then(elems => expect(Promise.resolve(elems.length)).to.eventually.equal(1));
        allprofissionais.filter(elem => pAND(sameName(elem,profissional_nome),sameName(elem,c2))).then(elems => expect(Promise.resolve(elems.length)).to.eventually.equal(1));
        allprofissionais.filter(elem => pAND(sameName(elem,profissional_nome),sameName(elem,c3))).then(elems => expect(Promise.resolve(elems.length)).to.eventually.equal(1));
        allprofissionais.filter(elem => pAND(sameName(elem,profissional_nome),sameName(elem,c4))).then(elems => expect(Promise.resolve(elems.length)).to.eventually.equal(1));
        allprofissionais.filter(elem => pAND(sameName(elem,profissional_nome),sameName(elem,c5))).then(elems => expect(Promise.resolve(elems.length)).to.eventually.equal(1));
    });

    

})