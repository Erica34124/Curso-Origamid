// Crie uma função que verifique
// corretamente o tipo de dado
const configuracao = {
   width: 800,
   height: 600,
   background: '#333'
  }

function verificaDados(dado) { 
   return Object.prototype.toString.call(dado)}
console.log(verificaDados(configuracao))
// Crie um objeto quadrado com
// a propriedade lados e torne
// ela imutável
const quadrado={
   lados:{
      
      
   }
}
// Previna qualquer mudança
// no objeto abaixo
Object.freeze(configuracao)
//
  // Liste o nome de todas
  // as propriedades do
  // protótipo de String e Array
 
  console.log(Object.getOwnPropertyNames(Array.prototype))
  /*["length", "constructor", "concat", "copyWithin", "fill", "find",
   "findIndex", "lastIndexOf", "pop", "push", "reverse", "shift",
    "unshift", "slice", "sort", "splice", "includes", "indexOf", 
    "join", "keys", "entries", "values", "forEach", "filter", 
    "flat", "flatMap", "map", "every", "some", "reduce", 
    "reduceRight", "toLocaleString", "toString"]*/
  console.log(Object.getOwnPropertyNames(String.prototype))
  /*["length", "constructor", "anchor", "big", "blink", "bold", 
  "charAt", "charCodeAt", "codePointAt", "concat", "endsWith",
   "fontcolor", "fontsize", "fixed", "includes", "indexOf", 
   "italics", "lastIndexOf", "link", "localeCompare", "match",
    "matchAll", "normalize", "padEnd", "padStart", "repeat", 
    "replace", "replaceAll", "search", "slice", "small", 
    "split", "strike", "sub", "substr", "substring", "sup", 
    "startsWith", "toString", "trim", "trimStart", "trimLeft",
     "trimEnd", "trimRight", "toLocaleLowerCase", "toLocaleUpperCase",
      "toLowerCase", "toUpperCase", "valueOf"]*/
  console.log(Object.getOwnPropertyNames(Number.prototype))
 /* ["constructor", "toExponential", "toFixed", "toPrecision", 
  "toString", "valueOf", "toLocaleString"]*/
 