/**
 * Title displayed at the top of the SurVis page
 * @type {string}
 */
var title = 'Metaheuristic Approaches for Scheduling Sport Competitions';

/**
 * Relative path to the data directory (use './' if bib is in root)
 * @type {string}
 */
var dataDir = './';

/**
 * Relative path to the JavaScript files
 * @type {string}
 */
var jsDir = 'js/';

/**
 * Relative path to the stylesheets
 * @type {string}
 */
var stylesDir = 'styles/';

/**
 * Options for displaying tag clouds
 * Remove 'keywords' if not included in bib entries
 */
var tagCloudOptions = [{
    field: 'author',
    title: 'Authors',
    minTagFrequency: 1
}, {
    field: 'year',
    title: 'Year',
    minTagFrequency: 1
}];

/**
 * Disable editing mode for final presentation
 * @type {boolean}
 */
var editable = false;

/**
 * Hide "paper" section below main title
 * @type {null}
 */
var paper = null;

/**
 * No extra pages like about.html
 */
var extraPages = {};

/**
 * No custom CSS
 * @type {string}
 */
var customStyle = '';

/**
 * Disable citation-based filtering
 */
var citations = null;
