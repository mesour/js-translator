export default class UrlDataAdapter
{

	url;

	/**
	 * @param {string} url
	 */
	constructor(url)
	{
		if (typeof url !== 'string') {
			throw new Error('Url must be string.');
		}
		this.url = url;
	}

	/**
	 * @param {string} locale
	 * @returns {*}
	 */
	load(locale)
	{
		return JSON.parse(UrlDataAdapter.getContent(this.url, locale));
	}

	/**
	 * @param {string} url
	 * @param {string} locale
	 * @returns {string|boolean}
	 */
	static getContent(url, locale) {
		let AJAX;

		if (window.XMLHttpRequest) {
			AJAX=new XMLHttpRequest();
		} else {
			AJAX=new ActiveXObject('Microsoft.XMLHTTP');
		}

		if (AJAX) {
			AJAX.open('GET', url.replace('%locale%', encodeURIComponent(locale)), false);
			AJAX.send(null);

			if (AJAX.status === 200) {
				return AJAX.responseText;
			} else {
				throw new Error('Bad status code while loading locale file.');
			}
		} else {
			throw new Error('Error in loading locale file.');
		}
	}

}