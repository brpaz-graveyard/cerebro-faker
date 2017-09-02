'use strict';

const fakerService = require('./fakerService');
const icon = require('../assets/icon.png');
const PLUGIN_REGEXP = /faker\s(.*)/;
const PLUGIN_KEYWORD = 'faker';
const GENERATE_FLAG = '-g';

/**
 * Plugin to generate fake data with faker
 *
 * @param  {String} options.term
 * @param  {Function} options.display
 */
const fn = ({term, display, actions, settings}) => {

  const pluginSettings = settings || { 'locale': fakerService.DEFAULT_LOCALE }
  
  const match = term.match(PLUGIN_REGEXP); 

  if (match) {

    const searchStr = match[1].trim();
    const searchParts = match[1].split(' ');

    let results = [];

    // Handles Generate fake data action
    if (searchParts[0] == GENERATE_FLAG) {

      let fakeData = fakerService.generate(searchParts[1], pluginSettings.locale);

      fakeData.forEach((item) => {
        results.push({
          title: item,
          icon: icon,
          onSelect: (event) => {
            actions.copyToClipboard(item);
          }
        });
      });

    } else {

      // Search available faker providers.
      fakerService.search(searchStr).forEach((item) => {
        results.push({
          id: item.key,
          title: item.label,
          icon: icon,
          onSelect: (event) => {
            actions.replaceTerm(PLUGIN_KEYWORD + ` ${GENERATE_FLAG} ` + item.key)
            event.preventDefault();
          }
        });
      });
    }

    if (results.length == 0) {
      display({
        title: 'No faker providers found!',
        icon: icon
      });

      return;
    }

    display(results);
  }
};

module.exports = {
  name: 'Faker',
  keyword: PLUGIN_KEYWORD,
  icon: icon,
  fn,
  settings: {
    locale: { type: 'string', defaultValue: fakerService.DEFAULT_LOCALE },
  }
};