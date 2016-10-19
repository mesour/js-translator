import Constants from './Constants';
import DefaultPluralForm from './DefaultPluralForm';
import DomainTranslator from './DomainTranslator';
import LanguageCode from './LanguageCode';
import PluralForm from './PluralForm';
import UrlDataAdapter from './UrlDataAdapter';

export default class Translator
{

	options;

	dictionary;

	dataAdapter;

	pluralForms = {};

	/**
	 * @param {{
	 *      language: string,
	 *      [pluralSeparator]: string,
	 *      [dictionary]: Object,
	 *      [replacePrefix]: string,
	 *      [replaceSuffix]: string,
	 *      [url]: string|null
	 *      [debug]: bool
	 * }} options
	 */
	constructor(options)
	{
		this.dictionary = typeof options.dictionary === 'object' ? options.dictionary : {};

		this.options = {
			pluralSeparator: typeof options.pluralSeparator === 'string' ? options.pluralSeparator : Constants.PLURAL_SEPARATOR,
			replacePrefix: typeof options.replacePrefix === 'string' ? options.replacePrefix : Constants.REPLACE_PREFIX,
			replaceSuffix: typeof options.replaceSuffix === 'string' ? options.replaceSuffix : Constants.REPLACE_SUFFIX,
			url: typeof options.url === 'string' ? options.url : null,
			debug: options.debug ? true : false,
		};

		this.setLanguage(options.language);
	}

	setLanguage(language)
	{
		if (typeof language !== 'string') {
			throw new Error('Language must be string');
		}
		if (!LanguageCode.isValid(language)) {
			throw new Error('String ' + language + ' is not valid language.');
		}
		this.options.language = language;

		if (this.options.url) {
			this.dictionary[this.options.language] = this.getDataAdapter().load(this.options.language);
		}

		if (DefaultPluralForm.hasCode(language)) {
			this.pluralForms[language] = DefaultPluralForm.getInstance(language);
		}
	}

	getDataAdapter()
	{
		if (!this.dataAdapter) {
			this.dataAdapter = new UrlDataAdapter(this.options.url);
		}
		return this.dataAdapter;
	}

	/**
	 * @param {string} key
	 * @param {int|Object} [count]
	 * @param {Object} [replacements]
	 * @returns {string}
	 */
	translate(key, count, replacements)
	{
		replacements = typeof replacements === 'undefined' ? (typeof count === 'object' ? count : {}) : replacements;
		count = typeof count === 'undefined' || typeof count === 'object' ? 1 : count;
		replacements['count'] = count;

		let translated = Translator.index(this.dictionary[this.options.language], key);
		if (translated === false) {
			translated = key;
			if (this.options.debug && window.console && typeof window.console.warn === 'function') {
				window.console.warn(translated + ' have not translated value for `' + this.options.language + '` lang.');
			}
		}

		let translations = new String(translated).split(this.options.pluralSeparator);
		let text = count > 1
			? this.getCurrentPluralForm().translate(translations, count)
			: translations[0];
		return this.replace(text, replacements);
	}

	/**
	 * @param {string} domain
	 * @returns {DomainTranslator}
	 */
	domain(domain)
	{
		return new DomainTranslator(this, domain);
	}

	/**
	 * @param {string} code
	 * @param {int} total
	 * @param {string|function} condition
	 */
	addPluralForm(code, total, condition)
	{
		if (!LanguageCode.isValid(code)) {
			throw new Error('String ' + code + ' is not valid language code.');
		}
		this.pluralForms[code] = new PluralForm(total, condition);
	}

	/**
	 * @returns {PluralForm}
	 */
	getCurrentPluralForm()
	{
		if (!this.pluralForms[this.options.language]) {
			throw new Error('Plural form for code ' + this.options.language + ' is set.');
		}
		return this.pluralForms[this.options.language];
	}

	replace(string, replacements)
	{
		for (let search in replacements) {
			if (!replacements.hasOwnProperty(search)) {
				continue;
			}
			string = string.replace(new RegExp(this.options.replacePrefix + search + this.options.replaceSuffix, 'g'), replacements[search])
		}
		return string;
	}

	/**
	 * @param {string|Object} obj
	 * @param {string|Array} is
	 * @returns {*}
	 */
	static index(obj, is)
	{
		if (typeof is === 'string')
			return Translator.index(obj, is.split('.'));
		else if (is.length === 0)
			return obj;
		else
			return !obj[is[0]] ? false : Translator.index(obj[is[0]], is.slice(1));
	}

}