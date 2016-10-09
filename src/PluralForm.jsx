export default class PluralForm
{

	total;

	condition;

	/**
	 * @param {int} total
	 * @param {string|function} condition
	 */
	constructor(total, condition)
	{
		this.total = total;
		this.condition = condition;
	}

	/**
	 * @param {Array} translates
	 * @param {int} count
	 * @returns {string}
	 */
	translate(translates, count)
	{
		if (count === 1) {
			return translates[0];
		}
		if (translates.length !== this.total) {
			throw new Error(
				'Translates length not match with current language PluralForm. Expected ' + this.total + ' plural forms'
			);
		}
		let n = count;
		let key = typeof this.condition === 'string' ? eval(this.condition) : this.condition(count);

		return translates[key];
	}

}