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
	 * @returns {string}
	 */
	translate(key, count)
	{
		return this.translator.translate(this.getKey(key), count);
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