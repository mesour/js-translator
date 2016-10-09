import PluralForm from './PluralForm';

export default class DefaultPluralForm
{

	static pluralForms = {
		'ach': {count: 2, form: '(n > 1)'},
		'af': {count: 2, form: '(n != 1)'},
		'ak': {count: 2, form: '(n > 1)'},
		'am': {count: 2, form: '(n > 1)'},
		'an': {count: 2, form: '(n != 1)'},
		'ar': {count: 2, form: '(n==0 ? 0 : (n==1 ? 1 : (n==2 ? 2 : (n%100>=3 && n%100<=10 ? 3 : (n%100>=11 ? 4 : 5)))))'},
		'arn': {count: 2, form: '(n > 1)'},
		'ast': {count: 2, form: '(n != 1)'},
		'ay': {count: 2, form: '0'},
		'az': {count: 2, form: '(n != 1)'},

		'be': {count: 3, form: '(n%10==1 && n%100!=11 ? 0 : (n%10>=2 && n%10<=4 && (n%100<10 || n%100>=20) ? 1 : 2))'},
		'bg': {count: 2, form: '(n != 1)'},
		'bn': {count: 2, form: '(n != 1)'},
		'bo': {count: 1, form: '0'},
		'br': {count: 2, form: '(n > 1)'},
		'brx': {count: 2, form: '(n != 1)'},
		'bs': {count: 3, form: '(n%10==1 && n%100!=11 ? 0 : (n%10>=2 && n%10<=4 && (n%100<10 || n%100>=20) ? 1 : 2))'},

		'ca': {count: 2, form: '(n != 1)'},
		'cgg': {count: 1, form: '0'},
		'cs': {count: 3, form: '(n==1) ? 0 : ((n>=2 && n<=4) ? 1 : 2)'},
		'csb': {count: 4, form: 'n==1 ? 0 : (n%10>=2 && n%10<=4 && (n%100<10 || n%100>=20) ? 1 : 2)'},
		'cy': {count: 4, form: '(n==1) ? 0 : ((n==2) ? 1 : ((n != 8 && n != 11) ? 2 : 3))'},

		'da': {count: 2, form: '(n != 1)'},
		'de': {count: 2, form: '(n != 1)'},
		'doi': {count: 2, form: '(n != 1)'},
		'dz': {count: 1, form: '0'},

		'el': {count: 2, form: '(n != 1)'},
		'en': {count: 2, form: '(n != 1)'},
		'eo': {count: 2, form: '(n != 1)'},
		'es': {count: 2, form: '(n != 1)'},
		'es_AR': {count: 2, form: '(n != 1)'},
		'et': {count: 2, form: '(n != 1)'},
		'eu': {count: 2, form: '(n != 1)'},

		'fa': {count: 1, form: '0'},
		'ff': {count: 2, form: '(n != 1)'},
		'fi': {count: 2, form: '(n != 1)'},
		'fil': {count: 2, form: '(n > 1)'},
		'fo': {count: 2, form: '(n != 1)'},
		'fr': {count: 2, form: '(n > 1)'},
		'fur': {count: 2, form: '(n != 1)'},
		'fy': {count: 2, form: '(n != 1)'},

		'ga': {count: 5, form: 'n==1 ? 0 : (n==2 ? 1 : (n<7 ? 2 : (n<11 ? 3 : 4)))'},
		'gd': {count: 4, form: '(n==1 || n==11) ? 0 : ((n==2 || n==12) ? 1 : ((n > 2 && n < 20) ? 2 : 3))'},
		'gl': {count: 2, form: '(n != 1)'},
		'gu': {count: 2, form: '(n != 1)'},
		'gun': {count: 2, form: '(n > 1)'},

		'ha': {count: 2, form: '(n != 1)'},
		'he': {count: 2, form: '(n != 1)'},
		'hi': {count: 2, form: '(n != 1)'},
		'hne': {count: 2, form: '(n != 1)'},
		'hy': {count: 2, form: '(n != 1)'},
		'hr': {count: 3, form: '(n%10==1 && n%100!=11 ? 0 : (n%10>=2 && n%10<=4 && (n%100<10 || n%100>=20) ? 1 : 2))'},
		'hu': {count: 2, form: '(n != 1)'},

		'ia': {count: 2, form: '(n != 1)'},
		'id': {count: 1, form: '0'},
		'is': {count: 2, form: '(n%10!=1 || n%100==11)'},
		'it': {count: 2, form: '(n != 1)'},

		'ja': {count: 1, form: '0'},
		'jbo': {count: 1, form: '0'},
		'jv': {count: 2, form: '(n != 0)'},

		'ka': {count: 1, form: '0'},
		'kk': {count: 1, form: '0'},
		'km': {count: 1, form: '0'},
		'kn': {count: 2, form: '(n != 1)'},
		'ko': {count: 1, form: '0'},
		'ku': {count: 2, form: '(n != 1)'},
		'kw': {count: 4, form: '(n==1) ? 0 : (n==2) ? 1 : (n == 3) ? 2 : 3'},
		'ky': {count: 1, form: '0'},

		'lb': {count: 2, form: '(n != 1)'},
		'ln': {count: 2, form: '(n > 1)'},
		'lo': {count: 1, form: '0'},
		'lt': {count: 3, form: '(n%10==1 && n%100!=11 ? 0 : (n%10>=2 && (n%100<10 or n%100>=20) ? 1 : 2))'},
		'lv': {count: 3, form: '(n%10==1 && n%100!=11 ? 0 : (n != 0 ? 1 : 2))'},

		'mai': {count: 2, form: '(n != 1)'},
		'mfe': {count: 2, form: '(n > 1)'},
		'mg': {count: 2, form: '(n > 1)'},
		'mi': {count: 2, form: '(n > 1)'},
		'ml': {count: 2, form: '(n != 1)'},
		'mn': {count: 2, form: '(n != 1)'},
		'mni': {count: 2, form: '(n != 1)'},
		'mnk': {count: 3, form: '(n==0 ? 0 : (n==1 ? 1 : 2))'},
		'mr': {count: 2, form: '(n != 1)'},
		'ms': {count: 1, form: '0'},
		'mt': {count: 4, form: '(n==1 ? 0 : (n==0 || ( n%100>1 && n%100<11) ? 1 : ((n%100>10 && n%100<20 ) ? 2 : 3)))'},
		'my': {count: 1, form: '0'},

		'nah': {count: 2, form: '(n != 1)'},
		'nap': {count: 2, form: '(n != 1)'},
		'nb': {count: 2, form: '(n != 1)'},
		'ne': {count: 2, form: '(n != 1)'},
		'nl': {count: 2, form: '(n != 1)'},
		'se': {count: 2, form: '(n != 1)'},
		'nn': {count: 2, form: '(n != 1)'},
		'no': {count: 2, form: '(n != 1)'},
		'nso': {count: 2, form: '(n != 1)'},

		'oc': {count: 2, form: '(n > 1)'},
		'or': {count: 2, form: '(n != 1)'},

		'ps': {count: 2, form: '(n != 1)'},
		'pa': {count: 2, form: '(n != 1)'},
		'pap': {count: 2, form: '(n != 1)'},
		'pl': {count: 3, form: '(n==1 ? 0 : (n%10>=2 && n%10<=4 && (n%100<10 || n%100>=20) ? 1 : 2))'},
		'pms': {count: 2, form: '(n != 1)'},
		'pt': {count: 2, form: '(n != 1)'},
		'pt_BR': {count: 2, form: '(n != 1)'},

		'rm': {count: 2, form: '(n != 1)'},
		'ro': {count: 3, form: '(n==1 ? 0 : ((n==0 || (n%100 > 0 && n%100 < 20)) ? 1 : 2))'},
		'ru': {count: 3, form: '(n%10==1 && n%100!=11 ? 0 : (n%10>=2 && n%10<=4 && (n%100<10 || n%100>=20) ? 1 : 2))'},
		'rw': {count: 2, form: '(n != 1)'},

		'sah': {count: 1, form: '0'},
		'sat': {count: 2, form: '(n != 1)'},
		'sco': {count: 2, form: '(n != 1)'},
		'sd': {count: 2, form: '(n != 1)'},
		'si': {count: 2, form: '(n != 1)'},
		'sk': {count: 3, form: '(n==1) ? 0 : ((n>=2 && n<=4) ? 1 : 2)'},
		'sl': {count: 4, form: '(n%100==1 ? 1 : (n%100==2 ? 2 : (n%100==3 || n%100==4 ? 3 : 0)))'},
		'so': {count: 2, form: '(n != 1)'},
		'son': {count: 2, form: '(n != 1)'},
		'sq': {count: 2, form: '(n != 1)'},
		'sr': {count: 3, form: '(n%10==1 && n%100!=11 ? 0 : (n%10>=2 && n%10<=4 && (n%100<10 || n%100>=20) ? 1 : 2))'},
		'su': {count: 1, form: '0'},
		'sw': {count: 2, form: '(n != 1)'},
		'sv': {count: 2, form: '(n != 1)'},

		'ta': {count: 2, form: '(n != 1)'},
		'te': {count: 2, form: '(n != 1)'},
		'tg': {count: 2, form: '(n > 1)'},
		'ti': {count: 2, form: '(n > 1)'},
		'th': {count: 1, form: '0'},
		'tk': {count: 2, form: '(n != 1)'},
		'tr': {count: 2, form: '(n > 1)'},
		'tt': {count: 1, form: '0'},

		'ug': {count: 1, form: '0'},
		'uk': {count: 3, form: '(n%10==1 && n%100!=11 ? 0 : (n%10>=2 && n%10<=4 && (n%100<10 || n%100>=20) ? 1 : 2))'},
		'ur': {count: 2, form: '(n != 1)'},
		'uz': {count: 2, form: '(n > 1)'},

		'vi': {count: 1, form: '0'},

		'wa': {count: 2, form: '(n > 1)'},
		'wo': {count: 1, form: '0'},

		'yo': {count: 2, form: '(n != 1)'},

		'zh': {count: 1, form: '0'}
	};

	/**
	 * @param {string} code
	 * @returns {PluralForm}
	 */
	static getInstance(code)
	{
		var params = DefaultPluralForm.pluralForms[code];
		if (!params.instance) {
			params.instance = new PluralForm(params.count, params.form);
		}
		return params.instance;
	}

	/**
	 * @param {string} code
	 * @returns {boolean}
	 */
	static hasCode(code)
	{
		return !!DefaultPluralForm.pluralForms[code];
	}

}