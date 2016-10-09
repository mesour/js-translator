import Constants from './Constants';
import DefaultPluralForm from './DefaultPluralForm';
import DomainTranslator from './DomainTranslator';
import LanguageCode from './LanguageCode';
import PluralForm from './PluralForm';
import UrlDataAdapter from './UrlDataAdapter';

export default class Translator
{

	options;

	translates;

	dataAdapter;

	pluralForms = {};

	/**
	 * @param {{
	 *      language: string,
	 *      translates: Object,
	 *      url: string|null
	 * }} options
	 */
	constructor(options)
	{
		this.translates = typeof options.translates === 'object' ? options.translates : {};

		this.options = {
			pluralSeparator: Constants.PLURAL_SEPARATOR,
			url: typeof options.url === 'string' ? options.url : null,
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
			this.translates = this.getDataAdapter().load(this.options.language);
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
	 * @param {int} [count]
	 * @returns {string}
	 */
	translate(key, count)
	{
		var translated = Translator.index(this.translates, key),
			translations = translated.split(this.options.pluralSeparator);
		return count > 1
			? this.getCurrentPluralForm().translate(translations, count)
			: translations[0];
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

	/**
	 * @param {string|Object} obj
	 * @param {string|Array} is
	 * @param {string} [old]
	 * @returns {*}
	 */
	static index(obj, is, old)
	{
		if (typeof is === 'string')
			return Translator.index(obj, is.split('.'), is);
		else if (is.length === 0)
			return obj;
		else
			return !obj[is[0]] ? old : Translator.index(obj[is[0]], is.slice(1), old);
	}

}