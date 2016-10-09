export default class DomainTranslator
{

	translator;

	currentDomain = '';

	/**
	 * @param {Translator} translator
	 * @param {string} domain
	 */
	constructor(translator, domain)
	{
		this.translator = translator;
		this.currentDomain = domain;
	}

	/**
	 * @param {string} key
	 * @param {int} [count]
	 * @param {Object} [replacements]
	 * @returns {string}
	 */
	translate(key, count, replacements)
	{
		return this.translator.translate(this.getKey(key), count, replacements);
	}

	/**
	 * @param {string} domain
	 * @returns {DomainTranslator}
	 */
	domain(domain)
	{
		return new DomainTranslator(this.translator, this.getKey(domain));
	}

	getKey(key)
	{
		return this.currentDomain + '.' + key;
	}

}