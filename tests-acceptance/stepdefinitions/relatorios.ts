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

let pAND = ((p,q) => p.then(a => q.then(b => a && b)))

defineSupportCode(function ({ Given, When, Then }) {

    Given(/^eu estou na página de Relatórios$/, async () => {
        await browser.get("http://localhost:4200/");
        await expect(browser.getTitle()).to.eventually.equal('TaGui');
        await $("a[name='relatorios']").click();
    })

    Given(/^eu vejo o profissional "([^\"]*)"  especializado em "([^\"]*)"  na lista de profissionais$/, async (profissional_nome, especialidade) => {
        await $("input[name='namebox']").sendKeys(<string> profissional_nome);
        await $("input[name='especialidadebox']").sendKeys(<string> especialidade);
        await element(by.buttonText('Adicionar')).click();
        var allprofissionais : ElementArrayFinder = element.all(by.name('namelist'));
        await allprofissionais;
        allprofissionais.filter(elem => pAND(sameName(elem,profissional_nome),sameName(elem,especialidade))).then(elems => expect(Promise.resolve(elems.length)).to.eventually.equal(1));
    });
})