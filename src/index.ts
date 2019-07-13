import $ from 'jquery'; //in TypeScript jquery must be imported
import './css/styles.css';
import '../assets/images/nodejslogo.png';
import packageInfo from '../package.json';

console.info('main.ts LOADED!');
console.info(packageInfo.name, packageInfo.version);
console.log($('body'));


