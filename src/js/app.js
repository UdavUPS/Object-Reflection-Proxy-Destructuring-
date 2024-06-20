// TODO: write your code here
/* import sum from './basic';

console.log('worked');

console.log(sum([1, 2])); */

export default function showSpecialAttack (obj) {
    const specials = obj.special;
    const mas =[];

    for (const attack of specials) {
         let {id, name, description = 'Описание недоступно', icon} = attack;
         mas.push(
            { id: id,
            name: name,
            description: description,
            icon: icon });
         
    }
    return mas;
}