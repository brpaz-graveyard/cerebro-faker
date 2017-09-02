'use strict';

const Faker = require('faker');
const { memoize } = require('cerebro-tools');
const PROVIDERS = require('./providers');
const DEFAULT_LOCALE = 'en';

const MEMOIZE_OPTIONS = {
    promise: 'then',
    maxAge: 1000 * 60 * 60 * 24, // 1 DAY
    preFetch: true
}

/**
 * Filter the providers list by term
 * @param {string} term 
 * @return {array}
 */
const search = memoize((term) => {
    let filteredProviders = PROVIDERS.filter((provider) => {
        return provider.label.toLowerCase().includes(term.toLowerCase());
    });

    return filteredProviders;

}, MEMOIZE_OPTIONS)

/**
 * Generates fake data
 * @return array
 */
const generate = (providerKey, locale, count = 5)  => {
    let data = [];

    let provider = PROVIDERS.find((provider) => {
        return provider.key === providerKey;
    });

    if (!provider) {
        return [];
    }

    Faker.locale = locale;
    for (let i = 0; i <= count; i++) {
        let fakeData = provider.key.split('.').reduce((o, i) => o[i], Faker)();
        data.push(fakeData);
    }
   
    return data;
}

module.exports = {
    search: search,
    generate: generate,
    DEFAULT_LOCALE
}