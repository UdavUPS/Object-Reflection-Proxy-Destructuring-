// TODO: write your code here
/* import sum from './basic';

console.log('worked');

console.log(sum([1, 2])); */

export default function showSpecialAttack (obj) {
    const specials = obj.special;
    const mas =[];

    for (const attack of specials) {
        mas.push(attack['id']);
        mas.push(attack['name']);
        if (attack.hasOwnProperty('description')) {
            mas.push(attack['description'])
        } else {
            mas.push('Описание недоступно')
        }
        mas.push(attack['icon']);
    }


    return mas;
}
